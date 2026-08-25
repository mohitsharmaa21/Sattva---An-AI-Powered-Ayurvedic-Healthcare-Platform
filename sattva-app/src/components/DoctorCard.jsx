export default function DoctorCard({ name, specialty, exp, fee }) {
  return (
    <div className="card doctor-card">
      <h3>{name}</h3>
      <p>{specialty}</p>

      <div className="doctor-meta">
        <span className="doctor-pill">{exp} years experience</span>
        <span className="doctor-pill">₹{fee} consultation</span>
      </div>

      <p>
        Patient-focused Ayurvedic care with emphasis on diet, routine
        correction, and sustainable healing.
      </p>

      <div style={{ marginTop: "18px" }}>
        <button className="btn btn-primary">Book Consultation</button>
      </div>
    </div>
  );
}
