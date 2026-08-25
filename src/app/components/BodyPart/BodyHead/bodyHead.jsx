"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ModalBooking from "../../ModalBooking/ModalBooking";

const TechHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "50K+", label: "Learners" },
    { value: "95%", label: "Placement Rate" },
    { value: "500+", label: "Hiring Partners" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jfif')" }}
      />
      
      {/* Gradient overlay keeps copy readable over the existing hero asset. */}
      <div className="absolute inset-0 bg-[#020c2b]/90" />

      {/* CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center text-white lg:space-y-8 lg:text-left">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Best Software Training Institute in Chennai
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0">
              Build job-ready IT skills with industry-focused software training,
              hands-on projects, expert trainers and career support. Choose from
              programming, full stack development, cloud &amp; DevOps, software
              testing, cybersecurity, SAP and Oracle courses.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Link
                href="/courses"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-bold text-[#06285b] shadow-lg shadow-cyan-950/25 transition-colors duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020c2b] sm:px-7 sm:text-base"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-[#06285b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020c2b] sm:px-7 sm:text-base"
              >
                Book a Free Career Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>

            {/* Existing project figures retained in the hero trust area. */}
            <div className="grid grid-cols-2 gap-2 pt-2 sm:gap-3 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/20 bg-white/10 p-3 text-center backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:rounded-xl sm:p-4"
                >
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-blue-100 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative mt-2 flex flex-col gap-4 sm:gap-6 lg:mt-0">
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