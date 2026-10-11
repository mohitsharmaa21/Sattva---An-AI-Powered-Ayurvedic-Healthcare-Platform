import compat  # noqa: F401 - SAC CodeIntegrity shim
import json
import logging
import os
from pathlib import Path
from typing import Any, Dict, List, Tuple
import joblib
import numpy as np
import pandas as pd

from schemas import HealthConditionInput, PredictionResponse

logger = logging.getLogger("sattva_ml_service")


class HealthConditionPredictor:
    def __init__(self, models_dir: Path | str | None = None):
        if models_dir is None:
            models_dir = Path(__file__).resolve().parent / "models"
        self.models_dir = Path(models_dir)
        self.model_path = self.models_dir / "sattva_health_xgboost.joblib"
        self.metadata_path = self.models_dir / "sattva_health_metadata.json"

        self.model: Any = None
        self.metadata: Dict[str, Any] = {}
        self.classes: List[str] = []
        self.feature_columns: List[str] = []
        self.numeric_features: List[str] = []
        self.categorical_features: List[str] = []
        self.model_name: str = "XGBoost"
        self.is_loaded: bool = False

    def load(self) -> None:
        """Loads metadata JSON and serialized XGBoost pipeline into memory."""
        if not self.metadata_path.exists():
            raise FileNotFoundError(
                f"Metadata file not found at: {self.metadata_path.resolve()}"
            )
        if not self.model_path.exists():
            raise FileNotFoundError(
                f"Model pipeline artifact not found at: {self.model_path.resolve()}"
            )

        logger.info("Loading model metadata from %s", self.metadata_path)
        with open(self.metadata_path, "r", encoding="utf-8") as f:
            self.metadata = json.load(f)

        self.classes = self.metadata.get("classes", ["at-risk", "fit", "unhealthy"])
        self.feature_columns = self.metadata.get("feature_columns", [])
        self.numeric_features = self.metadata.get("numeric_features", [])
        self.categorical_features = self.metadata.get("categorical_features", [])
        self.model_name = self.metadata.get("model_name", "XGBoost")

        logger.info(
            "Loading XGBoost joblib pipeline from %s", self.model_path
        )
        self.model = joblib.load(self.model_path)
        self.is_loaded = True
        logger.info(
            "Model successfully loaded. Classes: %s, Feature count: %d",
            self.classes,
            len(self.feature_columns),
        )

    def predict(self, input_data: HealthConditionInput) -> PredictionResponse:
        """Runs inference using the loaded XGBoost pipeline without double-preprocessing."""
        if not self.is_loaded or self.model is None:
            raise RuntimeError(
                "Model is not loaded. Cannot process prediction request."
            )

        # Convert input into dictionary
        data_dict = input_data.model_dump()

        # Build DataFrame with exact feature columns and ordering expected by pipeline
        df = pd.DataFrame([data_dict])[self.feature_columns]

        # Pipeline handles ColumnTransformer (imputers, scaler, one-hot encoder) -> XGBClassifier
        raw_pred = self.model.predict(df)[0]
        raw_probs = self.model.predict_proba(df)[0]

        # Map class index to class name
        pred_idx = int(raw_pred)
        if 0 <= pred_idx < len(self.classes):
            predicted_class = self.classes[pred_idx]
        else:
            predicted_class = str(raw_pred)

        # Build probabilities dictionary preserving model class order
        probabilities: Dict[str, float] = {}
        for idx, class_name in enumerate(self.classes):
            prob_val = float(raw_probs[idx])
            probabilities[class_name] = round(prob_val, 4)

        return PredictionResponse(
            prediction=predicted_class,
            probabilities=probabilities,
            model_name=self.model_name,
            notice="Experimental prediction based on synthetic training data."
        )


# Singleton instance
predictor = HealthConditionPredictor()
