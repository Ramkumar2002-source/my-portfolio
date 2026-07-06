import "./Project.css";
import { motion } from "framer-motion";
import {
  FaServer,
  FaRobot,
  FaLinux,
  FaDatabase
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      icon: <FaServer />,
      title: "EuVantage Portal Deployment",
      description:
        "Performed production deployments across multiple client environments with Linux administration and troubleshooting.",
      tech: "Linux • SQL • Deployment"
    },
    {
      icon: <FaRobot />,
      title: "Playwright Automation",
      description:
        "Automated repetitive web tasks using Playwright, JavaScript and Excel-driven test execution.",
      tech: "Playwright • JavaScript • Excel"
    },
    {
      icon: <FaLinux />,
      title: "Linux Health Check",
      description:
        "Developed Bash scripts to monitor CPU, RAM, Disk, Services and Ports before deployments.",
      tech: "Linux • Bash"
    },
    {
      icon: <FaDatabase />,
      title: "SQL Database Management",
      description:
        "Worked with SQL queries, joins, stored procedures, backup & restore for production systems.",
      tech: "SQL • Database"
    }
  ];

  return (
    <section className="projects" id="projects">

      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <p className="projects-subtitle">
        Projects that demonstrate my technical skills and experience.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.15
            }}
            viewport={{ once: false }}
            whileHover={{
              y: -10,
              scale: 1.03

            }}
          >

            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span>{project.tech}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;