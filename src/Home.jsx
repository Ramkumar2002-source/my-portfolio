import { useState } from "react";
import "./Home.css";

function Home({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight : 0;

    const y = section.offsetTop - navHeight - 10;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    // Close mobile menu after clicking an item
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <h2 className="logo">Ramkumar</h2>

      {/* Hamburger icon - visible below 720px */}
      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <li onClick={() => scrollToSection("about")}>
          Home
        </li>

        <li onClick={() => scrollToSection("skills")}>
          Skills
        </li>

        <li onClick={() => scrollToSection("experience")}>
          Experience
        </li>

        <li onClick={() => scrollToSection("projects")}>
          Projects
        </li>

        <li onClick={() => scrollToSection("contact")}>
          Contact
        </li>

      </ul>

      <button
        className="dark-mode-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Home;