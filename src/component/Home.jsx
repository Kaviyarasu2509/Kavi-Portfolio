import React from "react";
import "./Home.css";
import githubImg from "../assets/image/github.png";
import linkedinImg from "../assets/image/linkedin.png";
import kaviImg from "../assets/image/kavi-img.png";

const Home = () => {
  return (
    <div className="home-container container-fluid">
      <div className="row align-items-center">
        {/* Left Section - Text & Buttons */}
        <div className="col-lg-6 text-center text-lg-start px-5">
          <h1 className="display-3 fw-bold">
            Hello, I'm <span className="highlight">Kaviyarasu</span>
          </h1>
          <h2 className="text-animate">I am Full Stack Developer</h2>
          <p className="intro-text">
            I specialize in building robust, scalable, and user-friendly web
            applications. Let's collaborate and create something amazing!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-4">
            <button className="btn btn-primary me-3 px-4 py-2 shadow">
              Download CV
            </button>
            <button className="btn btn-outline-success px-4 py-2 shadow">
              Contact Me
            </button>
          </div>

          {/* Social Media Buttons */}
          <div className="mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn social-btn github me-2"
            >
              <img src={githubImg} alt="GitHub" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn social-btn linkedin"
            >
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image with Dotted Animation */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <div className="profile-wrapper">
            <img
              src={kaviImg}
              alt="Kaviyarasu"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
