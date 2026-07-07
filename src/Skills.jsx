import "./Skills.css";
;
import {
  FaDatabase,
  FaLinux,
  FaHtml5,
  FaFileExcel,
  FaCode,
  FaTools,
  FaLightbulb,
  FaClock,
  FaServer
} from "react-icons/fa";
import { motion } from "framer-motion";

function Skills() {

  const skills = [
    { icon: <FaDatabase />, name: "SQL & Database Management", level: "90%" },
    { icon: <FaDatabase />, name: "Database Joins & Views", level: "85%" },
    { icon: <FaCode />, name: "Stored Procedures & Subqueries", level: "80%" },
    { icon: <FaServer />, name: "Backup & Restore", level: "90%" },
    { icon: <FaHtml5 />, name: "HTML & CSS", level: "75%" },
    { icon: <FaLinux />, name: "Linux Administration", level: "90%" },
    { icon: <FaFileExcel />, name: "Microsoft Excel", level: "90%" },
    { icon: <FaLightbulb />, name: "Problem Solving", level: "95%" },
    { icon: <FaClock />, name: "Time Management", level: "95%" },
    { icon: <FaTools />, name: "Production Support", level: "90%" }
  ];


return (

<motion.section
    className="skills"
    id="skills"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
>

    <h1 className="skills-title">My Skills</h1>

    <p className="skills-subtitle">
        Technologies and tools I use every day.
    </p>

    <div className="skills-grid">

        {skills.map((skill, index) => (

            <motion.div
                className="skill-box"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1
                }}
                viewport={{ once: false }}
                whileHover={{
                    scale: 1.05,
                    y: -10
                }}
            >

                <div className="skill-header">

                    <div className="skill-icon">
                        {skill.icon}
                    </div>

                    <div className="skill-name">
                        {skill.name}
                    </div>

                    <div className="skill-percent">
                        {skill.level}
                    </div>

                </div>

                <div className="progress">

                    <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />

                </div>

            </motion.div>

        ))}

    </div>

</motion.section>

);

}

export default Skills;