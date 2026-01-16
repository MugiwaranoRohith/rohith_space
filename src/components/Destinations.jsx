import { useState } from "react";
import "./Destinations.css";

const data = [
  {
    name: "Moon",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    desc: "Earth’s natural satellite.",
    distance: "384,400 km",
    gravity: "1.62 m/s²",
    atmosphere: "None",
  },
  {
    name: "Mars",
    img: "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?auto=format&fit=crop&w=800&q=80",
    desc: "The red planet.",
    distance: "225 million km",
    gravity: "3.71 m/s²",
    atmosphere: "Thin CO₂ atmosphere",
  },
  {
    name: "Jupiter",
    img: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80",
    desc: "Largest planet in the solar system.",
    distance: "628 million km",
    gravity: "24.79 m/s²",
    atmosphere: "Hydrogen & Helium",
  },
  {
    name: "Saturn",
    img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    desc: "Known for its rings.",
    distance: "1.2 billion km",
    gravity: "10.44 m/s²",
    atmosphere: "Hydrogen & Helium",
  },
];

function Destinations() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="destinations" id="destinations">
      <h2>Popular Destinations</h2>

      <div className="destination-grid">
        {data.map((d) => (
          <div
            className="destination-card"
            key={d.name}
            onClick={() => setSelected(d)}
          >
            <img src={d.img} alt={d.name} />
            <div className="card-content">
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✕
            </button>

            <img src={selected.img} alt={selected.name} />

            <h3>{selected.name}</h3>
            <p>{selected.desc}</p>

            <ul>
              <li><strong>Distance from Earth:</strong> {selected.distance}</li>
              <li><strong>Gravity:</strong> {selected.gravity}</li>
              <li><strong>Atmosphere:</strong> {selected.atmosphere}</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Destinations;
