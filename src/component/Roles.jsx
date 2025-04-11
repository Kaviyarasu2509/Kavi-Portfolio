import React from "react";
import "./Roles.css";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";  // Import icons

const Roles = () => {
  return (
    <div className="roles-container  container-fluid py-5">
      <h2 className="role-title text-center mb-5">My Expertise</h2>

      <div className="row g-2">
        {/* Frontend Card */}
        <div className="col-lg-4 col-md-6">
          <div className="role-card">
            <div className="role-card-inner">
              <div className="role-card-front">
                <FaCode className="role-icon" />
                <h3 className="roles-title">Frontend Development</h3>
              </div>
              <div className="role-card-back">
                <p className="role-text">
                  Crafting dynamic and responsive websites using <strong>HTML, CSS, JavaScript, Bootstrap</strong>, and <strong>React.js</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div className="col-lg-4 col-md-6">
          <div className="role-card">
            <div className="role-card-inner">
              <div className="role-card-front">
                <FaServer className="role-icon" />
                <h3 className="roles-title">Backend Development</h3>
              </div>
              <div className="role-card-back">
                <p className="role-text">
                  Building secure and scalable systems with <strong>.NET, C#</strong>, and <strong>SQL Server</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Stack Card */}
        <div className="col-lg-4 col-md-12">
          <div className="role-card">
            <div className="role-card-inner">
              <div className="role-card-front">
                <FaLayerGroup className="role-icon" />
                <h3 className="roles-title">Full Stack Development</h3>
              </div>
              <div className="role-card-back">
                <p className="role-text">
                  Delivering complete solutions using <strong>.NET full stack</strong> with both frontend and backend integration.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roles;
