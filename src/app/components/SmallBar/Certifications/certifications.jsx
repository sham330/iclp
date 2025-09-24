import React from "react";
import "./Certifications.css"; // Import CSS for styling
import SEO from "../../SEO/SEO";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <SEO
        title="Get Certified with the Best Online Courses"
        description="Earn industry-recognized certifications from the best online learning institute. Boost your career with certified courses in programming, design, business, marketing, and more."
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/coursedetails/Full%20Stack%20Developer"
      />

      {/* Top Text */}
      <div className="certifications-text">
        <h1>Get Certified & Boost Your Career</h1>
        <p>
          Earn industry-recognized certifications and enhance your career
          opportunities. Our certification programs help you validate your
          skills and stand out in the job market.
        </p>
      </div>

      {/* Certification Image */}
      <div className="certifications-image">
        <img src="/certification.jpg" alt="Certification" />
      </div>

      {/* Bottom Text */}
      <div className="certifications-text">
        <h2>Why Choose Our Certifications?</h2>
        <ul>
          <li>Recognized by top companies</li>
          <li>Expert-led courses</li>
          <li>Hands-on practical experience</li>
          <li>100% placement assistance</li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
