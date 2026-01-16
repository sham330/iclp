"use client";

import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "50K+", label: "Students Trained" },
    { value: "95%", label: "Placement Rate" },
    { value: "500+", label: "Hiring Partners" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jfif')" }}
      />
      
      {/* GRADIENT OVERLAY */}
<div className="absolute inset-0 bg-[#020c2b]/90" />

      {/* ANIMATED GRADIENT ORBS - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />

      {/* CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-white text-center lg:text-left">
            <h1 className="font-bold leading-tight">
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1 sm:mb-2">
                India's{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Trusted & Leading
                </span>
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1 sm:mb-2">
                Software Training Institute
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-200">
                for Job-Ready Skills
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-indigo-600 text-white rounded-full text-base sm:text-lg group-hover:rotate-90 transition-transform duration-300">
                  →
                </span>
                Explore Courses
              </button>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl bg-white/90 border border-white/40 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl text-sm sm:text-base"
              >
                Talk to a Mentor
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                  📞
                </span>
              </a>
            </div>

            {/* STATS SECTION - Mobile/Tablet Below Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden pt-2 sm:pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold  text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col gap-4 sm:gap-6 mt-6 lg:mt-0">
            {/* IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-1.5 sm:p-2">
                <img
                  src="/hero-new.jfif"
                  alt="ICLP Technologies Team"
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>

            {/* STATS SECTION - Desktop Only */}
            <div className="hidden lg:grid grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xl xl:text-2xl font-bold bg-white bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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