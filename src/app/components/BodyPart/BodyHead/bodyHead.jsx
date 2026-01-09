"use client";

import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
           <h1 className="font-semibold leading-tight text-[#1e0f6e]">
  <span className="block text-4xl sm:text-5xl lg:text-[56px] whitespace-nowrap">
    India’s{" "}
    <span className="text-[#38ff00]">Trusted</span>{" "}
    <span className="text-[#38ff00]">& Leading</span>
  </span>

  <span className="block text-4xl sm:text-5xl lg:text-[56px]">
    Software Training
  </span>
  <span className="block text-4xl sm:text-5xl lg:text-[56px]">
    Institute for
  </span>
  <span className="block text-4xl sm:text-5xl lg:text-[56px]">
    Job-Ready Skills
  </span>
</h1>
            <p className="mt-6 max-w-xl text-[#1e0f6e]/80 italic leading-relaxed">
              <strong className="not-italic font-semibold text-[#1e0f6e]">
                ICLP Technologies
              </strong>{" "}
              is a Chennai-based professional IT training institute delivering
              industry-relevant, practical, and mentor-led programs. We provide
              training across India with flexible schedules and multi-language
              support. Our focus is on building job-ready skills for students,
              freshers, and working professionals.
            </p>

            {/* BUTTONS */}
            <div className="mt-20 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 bg-[#38ff00] text-black font-bold px-7 py-3 rounded-full hover:scale-105 transition"
              >
                <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  →
                </span>
                Explore Courses
              </button>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 bg-[#38ff00] text-black font-bold px-7 py-3 rounded-full hover:scale-105 transition"
              >
                Talk to a Mentor
                <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  📞
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-[36px] border-[4px] border-[#1e0f6e] p-4 bg-white">
              <img
                src="/hero-new.jfif"
                alt="ICLP Technologies Team"
                className="rounded-[28px] object-cover w-full max-w-[480px]"
              />
            </div>
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
