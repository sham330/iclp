"use client";
import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";


const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#01377d] via-[#014a9f] to-[#01377d] overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/new-hero.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01377d]/40 via-[#014a9f]/30 to-[#01377d]/40"></div>


      {/* Subtle Snow Effect - Professional */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-[25%] w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>


      {/* Elegant Blue Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 z-10"></div>


      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-20">
        <div className="flex items-end justify-center min-h-[calc(100vh-8rem)]">
          
          {/* Text Content - Centered */}
          <div className="space-y-8 text-center max-w-4xl">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">
                India's Premier Hub for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-100">
                  Hands-On Software Learning
                </span>
                .
              </span>
            </h1>


            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium">
              {/* India's Fastest-Emerging Leader in Software Training */}
            </p>


            <div className="pt-4">
              <button
                onClick={handleOpenModal}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-[#3b82f6] text-white font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 border border-blue-400/20"
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
          </div>
        </div>
      </div>
{/* Bottom Right Floating Button */}



      {/* Bottom Elegant Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent z-10"></div>


      {/* Modal */}
      {isModalOpen && (
        <ModalBooking isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};


export default TechHero;
