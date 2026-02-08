export default function ForecastCard({ value }) {
  return (
    <div className="card">
      <h3>Forecast</h3>
      <h2>₹{value}</h2>
    </div>
  );
}
