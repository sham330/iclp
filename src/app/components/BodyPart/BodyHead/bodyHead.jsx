"use client";
import { useState } from "react";
import Image from "next/image";
import ModalBooking from "../../ModalBooking/ModalBooking";
import "./bodyHead.css";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="tech-hero-container">
      <div className="tech-hero-content">
        <div className="tech-hero-text">
          <h1 className="tech-hero-heading">
            <span>India’s Premier Hub for Hands-On Software Learning.</span>
          </h1>
          <p className="tech-hero-subheading">
            India’s Fastest-Emerging Leader in Software Training
          </p>
          <button className="tech-hero-button" onClick={handleOpenModal}>
            Explore Courses
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="tech-hero-image-wrapper">
          <Image
            src="/123Hero.png" // Use public folder path directly
            alt="Tech Education"
            className="tech-hero-image"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

      <div className="tech-hero-accent"></div>

      {isModalOpen && (
        <ModalBooking isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TechHero;
