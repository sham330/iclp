"use client";
import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Subtle Snow Effect - Professional */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-[25%] w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Elegant Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">
                India's Premier Hub for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100">
                  Hands-On Software Learning
                </span>
                .
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-medium">
              India's Fastest-Emerging Leader in Software Training
            </p>

            <button
              onClick={handleOpenModal}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-300 border border-amber-400/20"
            >
              <span>Explore Courses</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform duration-300"
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

          {/* Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Subtle Festive Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-red-500/10 to-amber-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-amber-400/20 shadow-2xl">
                <img
                  src="/123Hero.png"
                  alt="Tech Education"
                  className="w-full h-auto rounded-xl"
                  width={600}
                  height={400}
                />
              </div>

              {/* Minimal Corner Accent */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Elegant Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

      {/* Modal */}
      {isModalOpen && (
        <ModalBooking isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TechHero;
