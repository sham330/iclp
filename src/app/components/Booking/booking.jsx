"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const courses = [
    // Regular courses
    { name: "Java", type: "regular" },
    { name: "Python", type: "regular" },
    { name: "R Programming", type: "regular" },
    { name: "JavaScript", type: "regular" },
    { name: "PHP", type: "regular" },
    { name: "Full Stack Developer", type: "regular" },
    { name: "Node.js", type: "regular" },
    { name: "ReactJS", type: "regular" },
    { name: "Microsoft Azure", type: "regular" },
    { name: "AWS", type: "regular" },
    { name: "DevOps", type: "regular" },
    { name: "Cyber Security", type: "regular" },
    { name: "Ethical Hacking", type: "regular" },
    { name: "Selenium", type: "regular" },
    { name: "Manual Testing Course", type: "regular" },
    { name: "JMeter Course", type: "regular" },
    { name: "ETL Testing", type: "regular" },
    { name: "LoadRunner", type: "regular" },
    { name: "SoapUI", type: "regular" },
    { name: "Data Science Course", type: "regular" },
    { name: "Artificial Intelligence", type: "regular" },
    { name: "Digital Marketing", type: "regular" },
    { name: "Excel", type: "regular" },
    { name: "HTML", type: "regular" },
    { name: "UI and UX", type: "regular" },
    { name: "Salesforce", type: "regular" },
    { name: "C Sharp", type: "regular" },
    { name: "UNIX SHELL Scripting", type: "regular" },
    { name: "Workday HCM", type: "regular" },
    { name: "Salesforce Online Training", type: "regular" },
    { name: "Salesforce Developer", type: "regular" },
    { name: "Azure DevOps", type: "regular" },
    { name: "Angular", type: "regular" },
    { name: "WordPress", type: "regular" },
    { name: "CSS Online", type: "regular" },
    { name: "Machine Learning", type: "regular" },
    { name: "Data Science With Python", type: "regular" },
    { name: "Machine Learning with Python", type: "regular" },
    { name: "Machine Learning using R", type: "regular" },
    { name: "MySQL", type: "regular" },
    { name: "SQL with PHP", type: "regular" },
    { name: "Microsoft Dynamics 365", type: "regular" },
    { name: "Microsoft Excel", type: "regular" },
    { name: "Excel Macros and VBA", type: "regular" },
    { name: "jQuery", type: "regular" },
    // SAP Courses
    { name: "SAP FICO", type: "sap" },
    { name: "SAP MM", type: "sap" },
    { name: "SAP SD", type: "sap" },
    { name: "SAP PP", type: "sap" },
    { name: "SAP ABAP", type: "sap" },
    // Oracle Courses
    { name: "Oracle Financials", type: "oracle" },
    { name: "Oracle SCM", type: "oracle" },
    { name: "Oracle HCM", type: "oracle" },
  ];

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const sendEmail = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
      }),
    });

    if (res.ok) {
      showConfetti();
      setFormData({ name: "", email: "", phone: "", course: "" });
    } else {
      const data = await res.json();
      alert(`❌ ${data.message || "Failed to send booking details."}`);
    }
  } catch (error) {
    console.error("❌ Network error:", error);
    alert("Failed to send booking details. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const showConfetti = () => {
    const confettiContainer = document.querySelector(".bs-confetti-container");
    if (confettiContainer) {
      confettiContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "bs-confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
      }

      setTimeout(() => {
        confettiContainer.innerHTML = "";
      }, 3000);
    }
  };

  return (
    <div
      className={`bs-booking-container ${isHovered ? "bs-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Card Effect */}
      <div className="bs-card-wrapper">
        <div className="bs-card-inner">
          {/* Left Form Section */}
          <div className="bs-form-section">
            <div className="bs-header">
              <h2 className="bs-title">Secure Your Seat</h2>
              <p className="bs-subtitle">
                Limited availability - Register now!
              </p>
            </div>

            <form onSubmit={sendEmail} className="bs-form">
              <div className="bs-input-group">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  className="bs-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="bs-input-label">Full Name</label>
                <div className="bs-input-highlight"></div>
              </div>

              <div className="bs-input-group">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="bs-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="bs-input-label">Email Address</label>
                <div className="bs-input-highlight"></div>
              </div>

              <div className="bs-input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  className="bs-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label className="bs-input-label">Phone Number</label>
                <div className="bs-input-highlight"></div>
              </div>

              <div className="bs-input-group">
                <select
                  name="course"
                  className="bs-input"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  style={{ paddingTop: "0.8rem", paddingBottom: "0.4rem" }}
                >
                  <option value="">Select a Course</option>
                  <optgroup label="Regular Courses">
                    {courses
                      .filter((c) => c.type === "regular")
                      .map((course, index) => (
                        <option key={`regular-${index}`} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="SAP Courses">
                    {courses
                      .filter((c) => c.type === "sap")
                      .map((course, index) => (
                        <option key={`sap-${index}`} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Oracle Courses">
                    {courses
                      .filter((c) => c.type === "oracle")
                      .map((course, index) => (
                        <option key={`oracle-${index}`} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                  </optgroup>
                </select>
                <div className="bs-input-highlight"></div>
              </div>

              <button
                type="submit"
                className={`bs-submit-btn ${isSubmitting ? "bs-submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="bs-spinner"></span>
                    Processing...
                  </>
                ) : (
                  "Reserve Now"
                )}
              </button>
            </form>
          </div>

          {/* Right Visual Section */}
          <div className="bs-visual-section">
            <div className="bs-gradient-bg"></div>
            <div className="bs-image-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Learning Experience"
                className="bs-feature-image"
              />
              <div className="bs-image-overlay"></div>
            </div>

            <div className="bs-features">
              <div className="bs-feature-item">
                <div className="bs-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                    />
                  </svg>
                </div>
                <div className="bs-feature-text">Expert Instructors</div>
              </div>

              <div className="bs-feature-item">
                <div className="bs-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                    />
                  </svg>
                </div>
                <div className="bs-feature-text">Hands-on Projects</div>
              </div>

              <div className="bs-feature-item">
                <div className="bs-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                    />
                  </svg>
                </div>
                <div className="bs-feature-text">Career Support</div>
              </div>
            </div>

            <div className="bs-seats-indicator">
              <div className="bs-seats-progress">
                <div className="bs-progress-bar" style={{ width: "75%" }}></div>
              </div>
              <div className="bs-seats-text">Only 3 seats remaining!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Container */}
      <div className="bs-confetti-container"></div>

      {/* 3D Perspective Elements */}
      <div className="bs-corner bs-corner-1"></div>
      <div className="bs-corner bs-corner-2"></div>
    </div>
  );
};

export default Booking;