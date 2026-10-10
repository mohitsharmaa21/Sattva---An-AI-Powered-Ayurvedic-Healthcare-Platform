# Sattva Health Condition ML Service

Dedicated FastAPI microservice providing machine-learning inference using the trained XGBoost model pipeline for student health & lifestyle predictions.

---

## 1. Model Artifact Location

The service expects the model and its metadata in the `backend/ml_service/models/` directory:

```
backend/ml_service/
├── models/
│   ├── sattva_health_xgboost.joblib       # Serialized scikit-learn + XGBoost pipeline
│   ├── sattva_health_metadata.json        # Metadata, feature order, and class labels
│   └── sattva_health_metadata.joblib      # Optional model metrics joblib
├── main.py                                # FastAPI app and lifecycle handlers
├── schemas.py                             # Pydantic validation schemas
├── service.py                             # Model loader and prediction pipeline
├── test_api.py                            # Pytest test suite
├── requirements.txt                       # Python dependencies
└── .env.example                           # Sample environment configuration
```

---

## 2. Setup & Installation

### Step A: Create and activate virtual environment (recommended)
```bash
cd backend/ml_service
python -m venv venv

# Windows (PowerShell):
.\venv\Scripts\Activate.ps1

# Linux / macOS:
source venv/bin/activate
```

### Step B: Install dependencies
```bash
pip install -r requirements.txt
```

---

## 3. Running the Service

Start the FastAPI server on port 8000:

```bash
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Interactive OpenAPI documentation is available at:
- **Swagger UI**: http://127.0.0.1:8000/docs
- **ReDoc**: http://127.0.0.1:8000/redoc

---

## 4. Environment Variables

| Variable | Default | Description |
|---|---|---|
| `HOST` | `127.0.0.1` | Network interface to bind to |
| `PORT` | `8000` | Port for the service |
| `MODEL_DIR` | `models` | Directory containing model artifacts |
| `CORS_ORIGINS` | `http://localhost:5173,http://localhost:5174` | Allowed origins for cross-origin requests |

---

## 5. Endpoints

### Health Check: `GET /health`
Verifies that the service and model pipeline are loaded into memory.

**Response:**
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_name": "XGBoost",
  "classes": ["at-risk", "fit", "unhealthy"],
  "feature_count": 13,
  "test_accuracy": 0.9998
}
```

### Predict Health Condition: `POST /api/health-condition/predict`

**Request Body:**
```json
{
  "sleep_duration": 7.5,
  "heart_rate": 72.0,
  "bmi": 22.5,
  "calorie_expenditure": 2100.0,
  "step_count": 8500,
  "exercise_duration": 45.0,
  "water_intake": 2.5,
  "diet_type": "balanced",
  "stress_level": "medium",
  "sleep_quality": "good",
  "physical_activity_level": "active",
  "smoking_alcohol": "no",
  "gender": "male"
}
```

**Response Body:**
```json
{
  "prediction": "at-risk",
  "probabilities": {
    "at-risk": 0.9998,
    "fit": 0.0002,
    "unhealthy": 0.0
  },
  "model_name": "XGBoost",
  "notice": "Experimental prediction based on synthetic training data."
}
```

---

## 6. Running Tests

To run the automated test suite verifying model loading, endpoint responses, known test records, and validation:

```bash
pytest test_api.py -v
```
