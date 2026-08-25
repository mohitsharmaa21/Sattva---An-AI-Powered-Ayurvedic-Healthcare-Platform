export default function RemedyCard({ title, useFor, bestTime }) {
  return (
    <div className="card remedy-card">
      <h3>{title}</h3>
      <p>{useFor}</p>
      <div className="chips">
        <span className="chip">Best time: {bestTime}</span>
        <span className="chip">Ayurvedic support</span>
      </div>
      <div style={{ marginTop: "18px" }}>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
}
