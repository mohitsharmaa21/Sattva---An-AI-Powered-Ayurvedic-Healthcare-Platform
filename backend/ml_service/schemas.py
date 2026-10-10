from typing import Dict, Literal
from pydantic import BaseModel, Field, field_validator


class HealthConditionInput(BaseModel):
    sleep_duration: float = Field(
        ...,
        description="Daily sleep duration in hours (e.g. 7.5)",
        ge=0.0,
        le=24.0,
        examples=[7.5]
    )
    heart_rate: float = Field(
        ...,
        description="Resting heart rate in beats per minute (e.g. 72.0)",
        ge=30.0,
        le=220.0,
        examples=[72.0]
    )
    bmi: float = Field(
        ...,
        description="Body Mass Index value (e.g. 22.5)",
        ge=10.0,
        le=70.0,
        examples=[22.5]
    )
    calorie_expenditure: float = Field(
        ...,
        description="Daily calorie expenditure in kcal (e.g. 2100.0)",
        ge=500.0,
        le=10000.0,
        examples=[2100.0]
    )
    step_count: int = Field(
        ...,
        description="Daily step count (e.g. 8500)",
        ge=0,
        le=100000,
        examples=[8500]
    )
    exercise_duration: float = Field(
        ...,
        description="Daily exercise duration in minutes (e.g. 45.0)",
        ge=0.0,
        le=720.0,
        examples=[45.0]
    )
    water_intake: float = Field(
        ...,
        description="Daily water intake in litres (e.g. 2.5)",
        ge=0.0,
        le=20.0,
        examples=[2.5]
    )
    diet_type: Literal["balanced", "non-veg", "veg"] = Field(
        ...,
        description="Dietary lifestyle category",
        examples=["balanced"]
    )
    stress_level: Literal["low", "medium", "high"] = Field(
        ...,
        description="Self-reported stress level",
        examples=["medium"]
    )
    sleep_quality: Literal["good", "average", "poor"] = Field(
        ...,
        description="Perceived sleep quality",
        examples=["good"]
    )
    physical_activity_level: Literal["active", "moderate", "sedentary"] = Field(
        ...,
        description="General physical activity level",
        examples=["active"]
    )
    smoking_alcohol: Literal["no", "occasional", "yes"] = Field(
        ...,
        description="Smoking / alcohol consumption frequency",
        examples=["no"]
    )
    gender: Literal["male", "female", "other"] = Field(
        ...,
        description="Gender category",
        examples=["male"]
    )

    @field_validator("step_count", mode="before")
    @classmethod
    def parse_step_count(cls, v):
        if isinstance(v, (int, float)):
            return int(v)
        if isinstance(v, str) and v.strip().isdigit():
            return int(v.strip())
        return v


class PredictionResponse(BaseModel):
    prediction: str = Field(..., description="Predicted health condition class")
    probabilities: Dict[str, float] = Field(..., description="Probabilities for each class")
    model_name: str = Field(default="XGBoost", description="Name of the machine learning model")
    notice: str = Field(
        default="Experimental prediction based on synthetic training data.",
        description="Scientific and regulatory disclosure notice"
    )


class HealthStatusResponse(BaseModel):
    status: str
    model_loaded: bool
    model_name: str
    classes: list[str]
    feature_count: int
    test_accuracy: float | None = None
