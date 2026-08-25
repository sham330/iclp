"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  RefreshCw,
  Route,
  UserRound,
} from "lucide-react";

const audiences = [
  {
    title: "Students",
    description: "Build technical skills alongside your education.",
    icon: GraduationCap,
  },
  {
    title: "Graduates",
    description: "Develop job-ready skills and prepare for IT opportunities.",
    icon: UserRound,
  },
  {
    title: "Working Professionals",
    description: "Upgrade your existing skills or move into a new technology.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Career Changers",
    description: "Build the technical foundation needed to transition into IT.",
    icon: RefreshCw,
  },
  {
    title: "Non-IT Professionals",
    description: "Explore structured technology learning based on your background and career goals.",
    icon: Route,
  },
];

export default function HomeAudience() {
  const [selectedAudience, setSelectedAudience] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="audience-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
            Find Your Starting Point
          </p>
          <h2 id="audience-heading" className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
            Who Can Learn at ICLP?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            ICLP&apos;s programs support learners at different stages of their education and career.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {audiences.map(({ title, description, icon: Icon }, index) => {
            const isSelected = selectedAudience === index;
            const placement = index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : "";

            return (
              <motion.button
                key={title}
                type="button"
                onClick={() => setSelectedAudience(index)}
                onFocus={() => setSelectedAudience(index)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`group relative flex min-h-[210px] flex-col items-start overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:transform-none md:col-span-1 lg:col-span-2 ${placement} ${isSelected ? "border-[#00a878] bg-white shadow-xl shadow-[#00a878]/15" : "border-slate-200 bg-white shadow-sm hover:border-[#01377d]/40 hover:shadow-xl hover:shadow-[#01377d]/10"}`}
                aria-pressed={isSelected}
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01377d] to-[#00a878] transition-opacity duration-200 motion-reduce:transition-none ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl shadow-md transition-all duration-300 motion-reduce:transition-none ${isSelected ? "scale-105 bg-gradient-to-br from-[#01377d] to-[#00a878] text-white" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] text-white group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
                  <Icon aria-hidden="true" />
                </span>
                <span className={`mt-5 text-lg font-bold transition-colors duration-200 motion-reduce:transition-none ${isSelected ? "text-[#01377d]" : "text-slate-900 group-hover:text-[#01377d]"}`}>
                  {title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-slate-600">{description}</span>
                <span className={`mt-auto pt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#087f5b] transition-opacity duration-200 motion-reduce:transition-none ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  Selected audience
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
