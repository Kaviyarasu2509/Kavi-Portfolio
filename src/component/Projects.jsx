import React, { useState } from "react";
import newHiTech from "../assets/image/newHiTech.png";
import doctorHome from "../assets/image/doctorHome.png";
import newHi_mobile from '../assets/image/newHiTech_mobile.jpg';
import doctor_mobile from '../assets/image/doctorHome_mobile.jpg';
import git from "../assets/image/github.png";
import "./Projects.css";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      projectNumber: "01",
      title: "New Hi Tech Laboratory",
      description: "Developed using React, HTML, CSS, JS, and Bootstrap.",
      img: newHiTech,
      mobileImg: newHi_mobile,
      demo: "https://www.newhitechlab.com/",
    },
    {
      projectNumber: "02",
      title: "Doctor Home Nursing",
      description: "Developed using React, HTML, CSS, JS, and Bootstrap.",
      img: doctorHome,
      mobileImg: doctor_mobile,
      demo: "https://doctorhomenursing.com/",
      github: "https://github.com/Kaviyarasu2509/doctorHome",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[activeSlide];

  return (
    <div className="projects-section">
      <div className="row">
        {/* Left: Project Info */}
        <div className="col-md-5">
          <h1 className="Project-num">{slide.projectNumber}</h1>
          <h5 className="card-titles">{slide.title}</h5>
          <p className="card-text">{slide.description}</p>
          <div className="d-flex gap-3 mt-3">
            <a
              href={slide.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              Live Demo
            </a>
            {slide.github && (
              <a
                href={slide.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="GitHub" className="github-icon" />
              </a>
            )}
          </div>
        </div>

        {/* Right: Image + Buttons */}
        <div className="col-md-7 text-center">
          <img
            src={slide.img}
            alt={slide.title}
            className="project-split-img mb-3"
          />
          <img src={
            slide.mobileImg
          } alt={slide.title} className="project-img-mobile"/>
          <div className="d-flex project-btn gap-3 my-3">
            <button onClick={handlePrev} className="project-slider-btn">←</button>
            <button onClick={handleNext} className="project-slider-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
