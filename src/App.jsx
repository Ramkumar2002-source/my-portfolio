import { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Project";
import Contact from "./Contact";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      const aboutSection = document.getElementById("About");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "auto",
          block: "start"
        });
      }
    }, 100);
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Home
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;