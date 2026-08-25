"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  FileText,
  FolderKanban,
  MessageSquare,
  Video,
} from "lucide-react";
import ModalBooking from "../ModalBooking/ModalBooking";

const supportItems = [
  {
    title: "Resume Preparation",
    description: "Create a professional, ATS-friendly resume highlighting your skills and projects.",
    icon: FileText,
  },
  {
    title: "Interview Preparation",
    description: "Prepare for technical and HR interviews through guided practice.",
    icon: MessageSquare,
  },
  {
    title: "Mock Interviews",
    description: "Improve your confidence through simulated interview sessions.",
    icon: Video,
  },
  {
    title: "Project Guidance",
    description: "Build and explain projects that demonstrate your practical knowledge.",
    icon: FolderKanban,
  },
  {
    title: "Career Mentoring",
    description: "Get guidance on technology choices, job preparation and career development.",
    icon: Compass,
  },
  {
    title: "Job Opportunity Support",
    description: "Receive information about applicable opportunities and recruitment activities.",
    icon: BriefcaseBusiness,
  },
];

export default function HomePlacementSupport() {
  const [activeItem, setActiveItem] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="placement-support-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:mb-14">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
              Career Support
            </p>
            <h2 id="placement-support-heading" className="text-3xl font-bold leading-tight tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
              Career &amp; Placement Assistance
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Learning a technology is only the beginning. ICLP helps learners prepare for the job-search process with structured career support.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#01377d] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#01377d]/20 transition-colors duration-200 hover:bg-[#00a878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none"
          >
            Talk to a Career Mentor
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {supportItems.map(({ title, description, icon: Icon }, index) => {
            const isActive = activeItem === index;

            return (
              <motion.button
                key={title}
                type="button"
                onClick={() => setActiveItem(index)}
                onFocus={() => setActiveItem(index)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`group relative flex min-h-[215px] flex-col items-start overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:transform-none ${isActive ? "border-[#00a878] bg-white shadow-xl shadow-[#00a878]/15" : "border-slate-200 bg-white shadow-sm hover:border-[#01377d]/40 hover:shadow-xl hover:shadow-[#01377d]/10"}`}
                aria-pressed={isActive}
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00a878] to-[#7ff0c9] transition-opacity duration-200 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl shadow-md transition-all duration-300 motion-reduce:transition-none ${isActive ? "bg-gradient-to-br from-[#01377d] to-[#00a878] text-white" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] text-white group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className={`mt-5 text-lg font-bold transition-colors duration-200 motion-reduce:transition-none ${isActive ? "text-[#01377d]" : "text-slate-900 group-hover:text-[#01377d]"}`}>
                  {title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </span>
                <span className={`mt-auto pt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#087f5b] transition-opacity duration-200 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  Selected support
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {isModalOpen && <ModalBooking onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
