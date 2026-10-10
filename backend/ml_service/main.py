import logging
import os
from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from schemas import HealthConditionInput, HealthStatusResponse, PredictionResponse
from service import predictor

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("sattva_ml_service")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Load the model once
    logger.info("Initializing Sattva Health ML Service...")
    custom_models_dir = os.getenv("MODEL_DIR", None)
    if custom_models_dir:
        predictor.models_dir = custom_models_dir
        predictor.model_path = predictor.models_dir / "sattva_health_xgboost.joblib"
        predictor.metadata_path = predictor.models_dir / "sattva_health_metadata.json"

    try:
        predictor.load()
        logger.info("XGBoost health condition pipeline successfully initialized.")
    except Exception as exc:
        logger.error("Failed to load model on startup: %s", exc, exc_info=True)
    yield
    # Shutdown
    logger.info("Shutting down Sattva Health ML Service...")


app = FastAPI(
    title="Sattva Health Condition ML Service",
    description="Dedicated inference API for the trained XGBoost student health condition model.",
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS
origins_env = os.getenv("CORS_ORIGINS", "")
if origins_env.strip():
    origins = [origin.strip() for origin in origins_env.split(",") if origin.strip()]
else:
    origins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthStatusResponse, tags=["System"])
def get_health():
    """Verifies that the FastAPI service and the XGBoost model pipeline are loaded and ready."""
    if not predictor.is_loaded:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Model is not loaded or initialization failed. Check server logs."
        )

    return HealthStatusResponse(
        status="healthy",
        model_loaded=predictor.is_loaded,
        model_name=predictor.model_name,
        classes=predictor.classes,
        feature_count=len(predictor.feature_columns),
        test_accuracy=predictor.metadata.get("test_accuracy")
    )


@app.post(
    "/api/health-condition/predict",
    response_model=PredictionResponse,
    tags=["Prediction"]
)
def predict_health_condition(data: HealthConditionInput):
    """
    Accepts validated health and lifestyle features and generates
    a condition prediction with class probabilities using the pre-trained XGBoost pipeline.
    """
    if not predictor.is_loaded:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Model pipeline is not ready for predictions."
        )

    try:
        result = predictor.predict(data)
        return result
    except Exception as exc:
        logger.error("Inference error: %s", exc, exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during model prediction: {str(exc)}"
        )


if __name__ == "__main__":
    import uvicorn

    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host=host, port=port, reload=True)
