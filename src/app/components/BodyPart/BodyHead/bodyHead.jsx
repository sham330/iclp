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
    <section className="relative overflow-hidden h-screen min-h-[600px] max-h-screen">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jfif')" }}
      />
      
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90" />

      {/* ANIMATED GRADIENT ORBS */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* CONTENT */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-8 text-white">
            <h1 className="font-bold leading-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-2">
                India's{" "}
                <span className="bg-cyan-300  bg-clip-text text-transparent animate-gradient">
                  Trusted & Leading
                </span>
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-2">
                Software Training Institute
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-blue-200">
                for Job-Ready Skills
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 text-white rounded-full text-lg group-hover:rotate-90 transition-transform duration-300">
                  →
                </span>
                Explore Courses
              </button>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center justify-center gap-3 backdrop-blur-xl bg-white/90 border border-white/40 text-blue-900 font-bold px-8 py-4 rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Talk to a Mentor
                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full text-base group-hover:scale-110 transition-transform duration-300">
                  📞
                </span>
              </a>
            </div>

            {/* STATS SECTION - Mobile/Tablet Below Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col gap-6">
            {/* IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-2">
                <img
                  src="/hero-new.jfif"
                  alt="ICLP Technologies Team"
                  className="w-full h-auto object-cover rounded-2xl"
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
                  <div className="text-xl xl:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-100 mt-1">{stat.label}</div>
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