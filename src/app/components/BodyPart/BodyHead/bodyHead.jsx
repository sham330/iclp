"use client";

import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(30,15,110,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10">
            
            {/* HEADING */}
            <h1 className="font-bold leading-[1.15]">
              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-[#1e0f6e]">
                India's{" "}
                <span className="text-[#32ff00]">Trusted</span>{" "}
                <span className="text-[#00b4d8]">& Leading</span>
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-[#1e0f6e] mt-2">
                Software Training
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-[#1e0f6e] mt-2">
                Institute for
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-[#1e0f6e] mt-2">
                Job-Ready Skills
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg text-[#1e0f6e]/80 leading-relaxed max-w-xl italic">
              <strong className="text-[#1e0f6e] font-semibold not-italic">ICLP Technologies</strong> is a Chennai-based professional IT
              training institute delivering industry-relevant, practical, and
              mentor-led programs. We provide training across India with flexible
              schedules and multi-language support. Our focus is on building
              job-ready skills for students, freshers, and working professionals.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 bg-[#32ff00] text-black font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-[#2ed900] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="flex items-center justify-center bg-black text-white rounded-full w-10 h-10 group-hover:rotate-45 transition-transform duration-300">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </span>
                Explore Courses
              </button>

              <a
                href="tel:+919876543210"
                className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#1e0f6e] text-[#1e0f6e] font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-[#1e0f6e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="text-sm lg:text-base whitespace-nowrap">Talk to a Mentor</span>
                <span className="flex items-center justify-center bg-[#1e0f6e] text-white group-hover:bg-white group-hover:text-[#1e0f6e] w-10 h-10 rounded-full transition-colors duration-300">
                  📞
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative order-first lg:order-last z-10">
            
            {/* DECORATIVE BORDER FRAME */}
            <div className="absolute inset-0 rounded-[40px] border-[3px] border-[#1e0f6e]/10 transform translate-x-4 translate-y-4 -z-10" />
            
            {/* MAIN IMAGE CONTAINER */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[3px] border-[#1e0f6e]/20">
              <img
                src="/hero-new.jfif"
                alt="ICLP Technologies Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* DECORATIVE GRADIENT BLOBS */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#32ff00]/20 rounded-full blur-3xl -z-20" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00b4d8]/20 rounded-full blur-3xl -z-20" />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <ModalBooking
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default TechHero;
