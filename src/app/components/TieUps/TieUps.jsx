import React from "react";
import "./TieUps.css"; // Import CSS file
import SEO from "../SEO/SEO";
const TieUps = () => {
  // List of company images
  const companyImages = [
    "./companies/Accenture.png",
    "./companies/capgemini.webp",
    "./companies/Cognizant-Logo.jpg",
    "./companies/adastra.png",
    "./companies/data_matics.png",
    "./companies/dmi.png",
    "./companies/encore.jpeg",
    "./companies/HCLTech.png",
    "./companies/ibm.jpg",
    "./companies/images.png",
    "./companies/tcs.png",
    "./companies/transworld.jpg",
    "./companies/willy.png",
    "./companies/wipro.jpg",
    "./companies/zoho.png",
  ];

  // Duplicate images for smooth infinite scrolling effect
  const duplicatedImages = [...companyImages, ...companyImages];

  return (
    <div className="tu-container">
      <SEO
        title="Best Online Courses with Top Company Tie-ups – TCS, Accenture, Zoho & More"
        description="Learn from the best online institute partnered with top companies like TCS, Accenture, Zoho, and CTS. Get certified, gain in-demand skills, and boost your chances of placement with our industry-aligned courses."
      />

      <div className="tu-header">
        <h2 className="tu-title">Our Esteemed Hiring Partners</h2>
        <p className="tu-subtitle">Companies that trust our talent pipeline</p>
      </div>

      <div className="tu-slider-container">
        <div className="tu-slider-track">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="tu-slide">
              <div className="tu-logo-container">
                <img
                  src={image}
                  alt={`Company ${index + 1}`}
                  className="tu-company-logo"
                  loading="lazy"
                />
                <div className="tu-logo-overlay">
                  <span>Partner #{(index % companyImages.length) + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tu-footer">
        <p>
          Our graduates have been placed in 100+ top tech companies worldwide
        </p>
      </div>
    </div>
  );
};

export default TieUps;
