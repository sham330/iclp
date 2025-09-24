"use client";
import React, { useState } from "react";
import "./ExpertConnectBanner.css";
import ModalBooking from "../ModalBooking/ModalBooking";

const ExpertConnectBanner = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleEnquiryClick = () => {
    setShowBookingModal(true);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
  };

  return (
    <>
      <div className="ecb-premium-container" style={{ padding: "50px" ,marginBottom:"50px"}}>
        <div className="ecb-premium-content">
          <h2 className="ecb-premium-title">
            Have Queries? Connect With Our Experts
          </h2>
          <p className="ecb-premium-subtitle">Start Your IT Career in ICLP</p>
          <button className="ecb-premium-button" onClick={handleEnquiryClick}>
            <span className="ecb-premium-button-text">Enquiry Now</span>
            <span className="ecb-premium-button-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="ecb-premium-image-container">
          <img
            src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="IT professionals collaborating"
            className="ecb-premium-image"
          />
          <div className="ecb-premium-image-overlay"></div>
        </div>
      </div>

      {/* Modal Component - rendered conditionally */}
      {showBookingModal && <ModalBooking onClose={handleCloseModal} />}
    </>
  );
};

export default ExpertConnectBanner;
