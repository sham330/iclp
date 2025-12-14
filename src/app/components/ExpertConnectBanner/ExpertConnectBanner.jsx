"use client";
import React, { useState } from "react";
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
      <div className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-50 to-red-50/30 rounded-2xl shadow-xl overflow-hidden border-2 border-slate-200">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500"></div>

            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              {/* Content Section */}
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Have Queries? Connect With Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-emerald-600">
                    Experts
                  </span>
                </h2>
                <p className="text-xl text-slate-700 font-medium">
                  Start Your IT Career in ICLP
                </p>
                <button
                  onClick={handleEnquiryClick}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/30"
                >
                  <span>Enquiry Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </div>

              {/* Image Section */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="IT professionals collaborating"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {showBookingModal && <ModalBooking onClose={handleCloseModal} />}
    </>
  );
};

export default ExpertConnectBanner;
