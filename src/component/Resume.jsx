import React, { useState } from "react";
import "./Resume.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaCode,        // C#
  FaDatabase     // SQL Server
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education");

  // Skills
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaCode />, name: "C#" },               
    { icon: <FaDatabase />, name: "SQL Server" },    
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiDotnet />, name: ".NET" },
  ];

  // Education
  const education = [
    {
      year: "2022 - 2024",
      degree: "MCA - Information Technology",
      school: "Vasavi Vidya Trust Group of Institution",
      grade: "83%",
    },
    {
      year: "2019 - 2022",
      degree: "B.Sc - Computer Science",
      school: "Government of Arts and Science College",
      grade: "72%",
    },
    {
      year: "2017 - 2019",
      degree: "HSC",
      school: "Government Higher Secondary School",
      grade: "63%",
    },
    {
      year: "2016 - 2017",
      degree: "SSLC",
      school: "Government High School",
      grade: "90%",
    },
  ];

  // About Me Data
  const aboutMe = {
    title: "About Me",
    description:
      "I'm a passionate full-stack developer with experience in front-end and back-end technologies. I strive to build efficient, scalable, and beautiful applications.",
    details: [
      { label: "Name", value: "Kaviyarasu A" },
      { label: "Phone", value: "(+91) 6369569637" },
      { label: "Email", value: "a.kaviyarasu01@gmail.com" },
      { label: "Nationality", value: "Indian" },
      { label: "Freelance", value: "Available" },
      { label: "Language", value: "Tamil, English" },
    ],
  };

  return (
    <div className="resume-container container-fluid">
      {/* Navigation Tabs */}
      <div className="resume-tabs">
        <button
          className={`btn ${activeSection === "education" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveSection("education")}
        >
          Education
        </button>
        <button
          className={`btn ${activeSection === "skills" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>
        <button
          className={`btn ${activeSection === "about" ? "btn-info" : "btn-outline-info"}`}
          onClick={() => setActiveSection("about")}
        >
          About
        </button>
      </div>
      <hr className="text-white"/>
      {/* Education Section */}
      {activeSection === "education" && (
        <div className="section fade-in">
          <h2 className="section-title">Education</h2>
          <div className="grid-container">
            {education.map((edu, index) => (
              <div key={index} className="edu-card">
                <h3>{edu.year}</h3>
                <h4>{edu.degree}</h4>
                <p>{edu.school}</p>
                <span className="badge">{edu.grade}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <div className="section fade-in text-center">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About Me Section */}
      {activeSection === "about" && (
        <div className="section fade-in">
          <h2 className="section-title">{aboutMe.title}</h2>
          <p className="about-description">{aboutMe.description}</p>
          <div className="about-grid">
            {aboutMe.details.map((item, index) => (
              <div key={index} className="about-card">
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
