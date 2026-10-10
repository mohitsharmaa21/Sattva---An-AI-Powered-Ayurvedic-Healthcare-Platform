# Sattva 🌿

> **Clarity Before Treatment — The Unified AI & Evidence-Based Ayurveda Healthcare Platform**  
> Bridging classical Ayurvedic wisdom with modern clinical intelligence and machine learning to empower proactive, personalized, and culturally accessible wellness.

---

## 📖 About the Project

Healthcare systems globally face severe challenges: **late detection**, **intake bottlenecks**, **information asymmetry**, and **cultural disconnect**. Patients frequently experience diffuse symptoms without knowing whether they need urgent allopathic evaluation, lifestyle correction, or holistic balancing.

**Sattva** re-engineers this journey through a hybrid model:
1. **Intelligent Intake & ML Triage**: Collects patient symptoms, clinical documents, and lifestyle metrics into structured, actionable context before consultation.
2. **Evidence-Based Ayurveda**: Grounds botanical remedies and dosha profiling in peer-reviewed scientific literature (AYUSH / CCRAS research) rather than folklore.
3. **Empowered Doctor-Patient Interactions**: Doctors receive synthesized clinical intake histories, allowing consultations to focus on diagnostic depth and compassionate care.
4. **Inclusive Accessibility**: Designed from the ground up with bilingual support (English and Hindi) and responsive mobile interfaces.

---

## 🗺️ Architecture & Repository Structure

Sattva is organized into a modular three-tier architecture:

```
Sattva-main/
├── backend/
│   └── ml_service/                 # FastAPI microservice for XGBoost ML inference
│       ├── models/                 # Model artifacts (.joblib pipeline & .json metadata)
│       ├── main.py                 # FastAPI application, CORS, and lifecycle loader
│       ├── schemas.py              # Pydantic input/output validation schemas
│       ├── service.py              # Single-instance ML loader & prediction logic
│       ├── test_api.py             # Pytest automated test suite (7 tests)
│       ├── requirements.txt        # Python backend dependencies
│       └── .env.example            # Environment configuration template
│
├── sattva-app/                     # Core React web application & patient portal
│   ├── src/
│   │   ├── pages/                  # Dashboard, HealthConditionCheck, AI Intake, Ayurveda, Consultation, About
│   │   ├── components/             # Reusable UI components & navigation
│   │   ├── context/                # Language (EN/HI) and Theme (Light/Dark) contexts
│   │   └── locales/                # Complete English and Hindi localization dictionaries
│   ├── package.json
│   └── vite.config.js
│
└── sattva-landing/                 # Public landing page & marketing portal
    ├── src/                        # Hero section, feature previews, interactive CTA
    ├── package.json
    └── vite.config.js
```

---

## ✨ Core Platform Pillars

### 1. 🤖 AI Symptom Intake & Clinical OCR Triage
* Guided conversational intake flow that structures patient-reported symptoms, onset timeline, and pain scales.
* Optical Character Recognition (OCR) powered by Puter.js that parses uploaded blood tests and medical reports into searchable summaries.

### 2. 📊 AI Health Condition Check (XGBoost ML)
* Dedicated machine learning classifier predicting health risk categories:
  * **Fit** (optimal vitality and balanced lifestyle metrics)
  * **At-Risk** (borderline lifestyle biomarkers requiring corrective intervention)
  * **Unhealthy** (elevated risk profiles requiring immediate lifestyle/clinical attention)
* Computes real-time probability distributions across all 3 classes.
* Validates 13 biometric and behavioral factors: sleep duration, resting heart rate, BMI, calorie expenditure, daily step count, exercise duration, water intake, diet type, stress level, sleep quality, physical activity level, smoking/alcohol status, and gender.
* Seamlessly connects to the FastAPI backend with demo preset buttons and dark mode support.

### 3. 🌿 Evidence-Based Ayurvedic Profiling
* Calculates individual **Prakriti** (constitutional dosha balance: Vata, Pitta, Kapha).
* Provides herbal monographs with transparent **Evidence Grades (Grade A to D)** citing modern clinical trials and classical pharmacopeias.
* Recommends daily regimens (*Dinacharya*) aligned with circadian rhythms.

### 4. 🩺 Verified Tele-Consultation Network
* Directory of verified Ayurvedic practitioners (BAMS / MD Ayurveda).
* Patients can schedule appointments and securely forward their pre-consultation intake summaries to doctors.

### 5. 🌐 Bilingual Accessibility (English & Hindi)
* Native internationalization across all views, forms, error dialogs, and navigation pills.
* Instant toggle between English and हिन्दी.

---

## 🔬 Machine Learning Model Details

| Attribute | Specification |
|---|---|
| **Model Type** | Scikit-Learn Pipeline (`ColumnTransformer` + `XGBClassifier`) |
| **Artifacts** | `sattva_health_xgboost.joblib`, `sattva_health_metadata.json` |
| **Storage Location** | `backend/ml_service/models/` |
| **Classes** | `fit`, `at-risk`, `unhealthy` |
| **Input Features** | 13 (7 numeric, 6 categorical) |
| **Preprocessing** | Handled natively inside the serialized pipeline (one-hot encoding + scaling) |
| **Synthetic Dataset Test Accuracy** | 99.98% |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **Python**: v3.10 to v3.14
* **npm**: v9.0.0 or higher

---

### Step 1: Start the Backend ML Service

1. Navigate to the ML service folder:
   ```bash
   cd backend/ml_service
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # Linux / macOS
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Verify that the model artifacts exist in `backend/ml_service/models/`:
   * `sattva_health_xgboost.joblib`
   * `sattva_health_metadata.json`

5. Start the FastAPI server:
   ```bash
   python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
   ```

* **Health Check**: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)  
* **Interactive API Docs (Swagger UI)**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### Step 2: Start the Main Application (`sattva-app`)

1. Open a new terminal and navigate to the app folder:
   ```bash
   cd sattva-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional, defaults to `http://127.0.0.1:8000`):
   ```bash
   # Copy sample env
   cp .env.example .env
   ```
   Ensure `.env` contains:
   ```env
   VITE_HEALTH_ML_API_URL=http://127.0.0.1:8000
   ```

4. Start the Vite development server:
   ```bash
   npm run dev -- --port 5173
   ```

* Open in browser: [http://localhost:5173](http://localhost:5173)

---

### Step 3: Start the Landing Page (`sattva-landing`)

1. Open another terminal and navigate to the landing folder:
   ```bash
   cd sattva-landing
   ```

2. Install dependencies and start:
   ```bash
   npm install
   npm run dev -- --port 5174
   ```

* Open in browser: [http://localhost:5174](http://localhost:5174)

---

## 🧪 Testing & Verification

### Running Backend Unit & Integration Tests
The backend includes 7 comprehensive pytest test cases validating model initialization, health checks, test dataset inference matching (Cell 51 verification), categorical sanitization, and Pydantic validation errors:

```bash
cd backend/ml_service
python -m pytest test_api.py -v
```

Expected output:
```
test_api.py::test_model_loaded_on_startup PASSED
test_api.py::test_health_endpoint PASSED
test_api.py::test_prediction_known_cell_51_record PASSED
test_api.py::test_prediction_fit_profile PASSED
test_api.py::test_invalid_input_missing_fields PASSED
test_api.py::test_invalid_categorical_value PASSED
test_api.py::test_invalid_numeric_range PASSED
======================== 7 passed in 1.77s ========================
```

### Running Frontend Production Build
```bash
cd sattva-app
npm run build
```

---

## 🛡️ Responsible AI & Academic Disclaimer

1. **Synthetic Training Data**: The machine learning model was trained and evaluated on a synthetic student lifestyle dataset. While displaying high benchmark accuracy on this distribution, it is an **academic prototype** and has not been clinically validated on real-world patient cohorts.
2. **Experimental Predictions**: Predictions (`fit`, `at-risk`, `unhealthy`) are indicative lifestyle categorizations, not medical diagnoses, disease claims, or clinical risk assessments.
3. **No Ayurvedic Dosha Attribution**: The XGBoost model strictly evaluates lifestyle metrics; it does **not** infer or diagnose Ayurvedic doshas (Vata, Pitta, Kapha). Dosha evaluation remains governed by traditional classical frameworks.
4. **Consult Professionals**: Always consult a qualified physician or registered healthcare provider for clinical diagnosis, severe symptoms, or treatment planning.

---

## 📄 License & Maintainer

Maintained and developed by [mohitsharmaa21](https://github.com/mohitsharmaa21).  
Licensed under the [MIT License](LICENSE).