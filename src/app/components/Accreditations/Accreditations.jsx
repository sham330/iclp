import React from "react";
import "./Accreditations.css";
import SEO from "../SEO/SEO";

const Accreditations = () => {
  return (
    <div className="accreditations-container">
      <SEO
        title="ISO & Pearson Accredited Online Courses – Learn with Certified Experts"
        description="Enroll in ISO and Pearson accredited online courses across various categories including Programming (Java, Python, JavaScript), Data Science, AI, SAP, Oracle, and more. Gain certified expertise with flexible schedules, time and money-saving options, and expert support through our user-friendly chatbot. Get the best of knowledge, certification, and career advancement from our accredited courses!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
      />

      <div className="inner-container">
        <h2 className="accreditations-title">Accreditations</h2>
        <hr className="accreditations-divider" />
        <div className="accreditations-logos">
          <img
            src="/Pearson.jpg"
            alt="Pearson"
            className="accreditation-logo"
          />
          <img src="/ISO.jpg" alt="ISO" className="accreditation-logo" />
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
