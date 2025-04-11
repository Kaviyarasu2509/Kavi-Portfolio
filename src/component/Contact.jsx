import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
    server: "Select Service",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container contact-container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-lg-5 mb-4">
          <div className="contact-info">
            <h4>Get In Touch</h4>
            <p>
              Feel free to reach out to us for any inquiries or collaboration
              opportunities.
            </p>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>(+91) 6369569637</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>a.kaviyarasu01@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Dharmapuri, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <select
                id="server"
                name="server"
                className="form-control"
                value={formData.server}
                onChange={handleChange}
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Back End Development">
                  Back End Development
                </option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
              </select>
            </div>

            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
