import "./Experience.css";
import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaLinux,
  FaDatabase,
  FaServer,
  FaTools,
  FaCode,
  FaLaptop
} from "react-icons/fa";


function Experience() {
      const techStack = [
  { icon: <FaLinux />, name: "Linux" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaServer />, name: "Deployment" },
  { icon: <FaCode />, name: "Playwright" },
  { icon: <FaLaptop />, name: "Azure" },
  { icon: <FaTools />, name: "Production Support" }
];

  return (

    <motion.section
  id="experience"
  className="experience"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>

      <motion.h1
    className="experience-title"
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
>
        Work Experience
     </motion.h1>

      <p className="experience-subtitle">
        My professional journey as a Software Engineer.
      </p>
<div className="timeline">
    <motion.div
  className="timeline-item"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: false }}
>

  <div className="timeline-icon">
    <FaBriefcase />
  </div>

  <motion.div
    className="timeline-content"
    whileHover={{
      scale: 1.02,
      y: -5
    }}
  >

    <h2>Software Engineer Intern</h2>

    <h3>Anunta Technology Management Services</h3>

    <span>2025 • 3 Months</span>

    <ul>

      <li>
        Assisted in application deployment and production support activities.
      </li>

      <li>
        Learned Linux server administration and troubleshooting.
      </li>

      <li>
        Worked with SQL databases and basic query execution.
      </li>

      <li>
        Supported testing and deployment under senior engineers.
      </li>

      <li>
        Gained hands-on experience in enterprise applications and IT operations.
      </li>

    </ul>

  </motion.div>

</motion.div>
      <motion.div
  className="timeline-item"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>

        

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <motion.div
  className="timeline-content"
  whileHover={{
    scale: 1.02,
    y: -5
  }}
>

            <h2>
              Software Engineer
            </h2>

            <h3>
              Anunta Technology Management Services
            </h3>

            <span>
              2025 - Present
            </span>

            <ul>

              <li>
                Deployed production builds for EuVantage Portal across multiple client environments.
              </li>

              <li>
                Performed Linux server administration and troubleshooting.
              </li>

              <li>
                Managed SQL databases, backup and restore activities.
              </li>

              <li>
                Automated repetitive tasks using Playwright and JavaScript.
              </li>

              <li>
                Worked on production support, incident resolution and deployment activities.
              </li>

            </ul>

          </motion.div>

        

      </motion.div>
    </div>

      <div className="tech-stack">

  {techStack.map((tech, index) => (

    <motion.div
      key={index}
      className="tech-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
        y: -12
      }}
    >

      <motion.div
        whileHover={{
          rotate: 360
        }}
        transition={{
          duration: 0.6
        }}
      >
        {tech.icon}
      </motion.div>

      <span>{tech.name}</span>

    </motion.div>

  ))}

</div>
  </motion.section>

  );

}

export default Experience;