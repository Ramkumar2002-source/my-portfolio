import "./About.css";
import profile from "./assets/photo.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    

<motion.section
  id="about"
  className="about"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
 


      <div className="about-left">

        <motion.img
  src={profile}
  alt="Profile"
  className="profile-image"
  initial={{ x: -120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  whileHover={{
    scale: 1.05,
    rotate: 2
  }}
/>
      </div>

      <motion.div
  className="about-right"
  initial={{ x: 120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: false }}
>

        <h1>Hi I am RamKumar</h1>

        <h3>
          Junior Software Engineer
        </h3>

        <p>
          Results-driven Junior Software Engineer with experience at
          <b> Anunta Technology Management Services.</b>
          <br /><br />

          I specialize in <b>Linux Administration</b>,
          <b> SQL</b>, <b>Playwright Automation</b>,
          <b> Database Management</b> and
          <b> Production Support</b>.

          <br /><br />

          I enjoy solving complex production issues,
          automating repetitive tasks and improving
          system reliability.
        </p>

        <div className="about-info">

          <div>
            <h2>1+</h2>
            <span>Years Experience</span>
          </div>

          <div>
            <h2>25+</h2>
            <span>Deployments</span>
          </div>

          <div>
            <h2>10+</h2>
            <span>Projects</span>
          </div>

        </div>
<div className="resume-buttons">
  <a
    href="my-portfolio/dist/Ramkumar_Resume.pdf"
    download
    className="resume-btn"
  >
    📄 Download Resume
  </a>

  <a
    href="/my-portfolio/dist/Ramkumar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn view-btn"
  >
    👁 View Resume
  </a>
</div>
      </motion.div>

    </motion.section>
  );
}

export default About;