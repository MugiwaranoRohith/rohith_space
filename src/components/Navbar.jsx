import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">COSMIC EXPLORATION</div>

      <ul className="nav-links">
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#missions">Missions</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
