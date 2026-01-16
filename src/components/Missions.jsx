import "./Missions.css";

const missions = [
  {
    name: "Apollo 11",
    year: "1969",
    icon: "🚀",
    desc: "First human mission to land on the Moon. Neil Armstrong became the first person to walk on the lunar surface.",
  },
  {
    name: "Mars Rover",
    year: "2011",
    icon: "🤖",
    desc: "Robotic exploration of Mars to study surface conditions and search for signs of ancient water.",
  },
  {
    name: "International Space Station",
    year: "1998",
    icon: "🛰️",
    desc: "A space laboratory enabling long-term scientific research in microgravity.",
  },
  {
    name: "James Webb Telescope",
    year: "2021",
    icon: "🔭",
    desc: "Advanced space telescope designed to observe distant galaxies and the early universe.",
  },
];

function Missions() {
  return (
    <section id="missions" className="missions">
      <h2>Legendary Missions</h2>

      <div className="missions-grid">
        {missions.map((m) => (
          <div className="mission-card" key={m.name}>
            <div className="mission-icon">{m.icon}</div>
            <h3>{m.name}</h3>
            <span className="mission-year">{m.year}</span>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Missions;
