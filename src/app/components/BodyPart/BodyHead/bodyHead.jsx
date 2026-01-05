"use client";
import { useState } from "react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-new.jfif')" }}
      />

      {/* Dark + Purple Overlay */}
      <div className="absolute inset-0 bg-[#2b1247]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex items-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto space-y-8">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            India’s{" "}
            <span className="text-[#32ff00]">Trusted & Leading</span>{" "}
            Software Training Institute for Job-Ready Skills
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            ICLP Technologies is a Chennai-based professional IT training
            institute delivering industry-relevant, practical, and mentor-led
            programs. We provide training across India with flexible schedules
            and multi-language support. Our focus is on building job-ready
            skills for students, freshers, and working professionals.
          </p>

          {/* Tags */}
          <p className="text-sm sm:text-base text-gray-300">
            Offline & Online Training | Career-Focused | Mentor-Led | Practical Learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">

            {/* Explore Courses */}
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#32ff00] text-black font-semibold text-lg hover:scale-105 transition"
            >
              <span>Explore Courses</span>
              <span className="text-xl">➜</span>
            </button>

            {/* Talk to a Mentor */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#32ff00] text-black font-semibold text-lg hover:scale-105 transition"
            >
              <span>Talk to a Mentor</span>
              <span className="text-xl">📞</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ModalBooking isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TechHero;
