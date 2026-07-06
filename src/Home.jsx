function Home({ darkMode, setDarkMode }) {

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
};


  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px 50px",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}
    >

      <h2 style={{ color: "white" }}>
        Ramkumar
      </h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "30px",
          cursor: "pointer"
        }}
      >

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
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          background: "#2563eb",
          color: "white"
        }}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Home;