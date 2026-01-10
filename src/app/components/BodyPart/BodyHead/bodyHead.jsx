"use client";

import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden h-screen min-h-[600px]">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-4 lg:space-y-6">
            <h1 className="font-semibold leading-tight text-[#014a9f]">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] mb-1 lg:mb-2 whitespace-nowrap">
                India's <span className="bg-gradient-to-r from-[#014a9f] to-[#38ff00] bg-clip-text text-transparent">
  Trusted & Leading
</span>             </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] mb-1 lg:mb-2">
                Software Training Institute
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px]">
                for Job-Ready Skills
              </span>
            </h1>

            <p className="mt-4 lg:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-[#014a9f] italic leading-relaxed">
              <strong className="not-italic font-semibold text-[#014a9f]">
                ICLP Technologies
              </strong>{" "}
              is a Chennai-based professional IT training institute delivering
              industry-relevant, practical, and mentor-led programs. We provide
              training across India with flexible schedules and multi-language
              support. Our focus is on building job-ready skills for students,
              freshers, and working professionals.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 lg:gap-3 bg-[#38ff00] text-black font-bold px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <span className="flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full text-base lg:text-lg">
                  →
                </span>
                Explore Courses
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 lg:gap-3 bg-[#38ff00] text-black font-bold px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Talk to a Mentor
                <span className="flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full text-sm lg:text-base">
                  📞
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background blobs behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-[#38ff00]/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 lg:w-72 lg:h-72 bg-[#1e0f6e]/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-52 lg:h-52 bg-[#00b4d8]/25 rounded-full blur-3xl" />
            </div>
            
            <div className="relative mt-8 mr-4 rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#1e0f6e]/10 w-full max-w-md lg:max-w-lg xl:max-w-xl z-10">
              <img
                src="/hero-new.jfif"
                alt="ICLP Technologies Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* DECORATIVE GRADIENT BLOBS */}
      <div className="absolute -bottom-20 -left-20 w-48 h-48 lg:w-64 lg:h-64 bg-[#38ff00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-56 h-56 lg:w-72 lg:h-72 bg-[#1e0f6e]/10 rounded-full blur-3xl pointer-events-none" />

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