import compat  # noqa: F401 - SAC CodeIntegrity shim
import pytest
from fastapi.testclient import TestClient
from main import app
from service import predictor

# Known test record from training notebook (HealthClass.ipynb Cell 51)
CELL_51_SAMPLE = {
    "sleep_duration": 6.61,
    "heart_rate": 68.0,
    "bmi": 25.81,
    "calorie_expenditure": 1874.0,
    "step_count": 9167,
    "exercise_duration": 58.4,
    "water_intake": 2.25,
    "diet_type": "balanced",
    "sleep_quality": "average",
    "smoking_alcohol": "yes",
    "gender": "other",
    "stress_level": "medium",
    "physical_activity_level": "active",
}


@pytest.fixture(scope="session", autouse=True)
def client():
    with TestClient(app) as test_client:
        yield test_client


def test_model_loaded_on_startup():
    """Requirement 1: Verify model and metadata load successfully."""
    assert predictor.is_loaded is True
    assert predictor.model is not None
    assert predictor.classes == ["at-risk", "fit", "unhealthy"]
    assert len(predictor.feature_columns) == 13


def test_health_endpoint(client):
    """Requirement 2: Verify GET /health returns successful status."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["model_loaded"] is True
    assert data["model_name"] == "XGBoost"
    assert data["classes"] == ["at-risk", "fit", "unhealthy"]
    assert data["feature_count"] == 13


def test_prediction_known_cell_51_record(client):
    """
    Requirements 3, 4, 5, 6, 9:
    - Valid form data reaches backend
    - Features supplied in correct format
    - Model generates prediction
    - Matches Cell 51 test record output ('at-risk')
    - Probabilities sum to ~1.0
    """
    response = client.post("/api/health-condition/predict", json=CELL_51_SAMPLE)
    assert response.status_code == 200
    result = response.json()

    assert result["prediction"] == "at-risk"
    assert "probabilities" in result
    probs = result["probabilities"]
    assert set(probs.keys()) == {"at-risk", "fit", "unhealthy"}

    # Probability sum should be approximately 1.0
    prob_sum = sum(probs.values())
    assert 0.99 <= prob_sum <= 1.01

    # In Cell 51, at-risk probability was > 0.99
    assert probs["at-risk"] > 0.95
    assert result["model_name"] == "XGBoost"
    assert "notice" in result


def test_prediction_fit_profile(client):
    """Verify inference for a healthy student profile."""
    fit_sample = {
        "sleep_duration": 8.0,
        "heart_rate": 60.0,
        "bmi": 21.0,
        "calorie_expenditure": 2500.0,
        "step_count": 12000,
        "exercise_duration": 60.0,
        "water_intake": 3.0,
        "diet_type": "balanced",
        "sleep_quality": "good",
        "smoking_alcohol": "no",
        "gender": "female",
        "stress_level": "low",
        "physical_activity_level": "active",
    }
    response = client.post("/api/health-condition/predict", json=fit_sample)
    assert response.status_code == 200
    result = response.json()
    assert result["prediction"] == "fit"
    assert result["probabilities"]["fit"] > 0.8


def test_invalid_input_missing_fields(client):
    """Requirement 7: Verify incomplete inputs produce readable 422 error."""
    incomplete_data = {
        "sleep_duration": 7.0,
        # missing heart_rate, bmi, etc.
    }
    response = client.post("/api/health-condition/predict", json=incomplete_data)
    assert response.status_code == 422
    data = response.json()
    assert "detail" in data


def test_invalid_categorical_value(client):
    """Requirement 7: Verify invalid category produces readable 422 error."""
    invalid_data = CELL_51_SAMPLE.copy()
    invalid_data["diet_type"] = "junk-food"  # Invalid
    response = client.post("/api/health-condition/predict", json=invalid_data)
    assert response.status_code == 422


def test_invalid_numeric_range(client):
    """Requirement 7: Verify out-of-range numeric input produces readable 422 error."""
    invalid_data = CELL_51_SAMPLE.copy()
    invalid_data["sleep_duration"] = 55.0  # More than 24 hours
    response = client.post("/api/health-condition/predict", json=invalid_data)
    assert response.status_code == 422
