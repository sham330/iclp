"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  FlaskConical,
  FolderKanban,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    title: "Industry-Experienced Trainers",
    description: "Learn from trainers who bring practical technology knowledge into the classroom.",
    icon: UsersRound,
  },
  {
    title: "Hands-On Learning",
    description: "Practice concepts through assignments, labs and guided technical exercises.",
    icon: FlaskConical,
  },
  {
    title: "Real-Time Projects",
    description: "Apply your knowledge through practical project scenarios and build project experience.",
    icon: FolderKanban,
  },
  {
    title: "Career Support",
    description: "Prepare for interviews with resume guidance, mock interviews and career mentoring.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Flexible Learning",
    description: "Choose available classroom, online, weekday or weekend learning options.",
    icon: CalendarClock,
  },
  {
    title: "Certification",
    description: "Complete your selected program and receive applicable course certification.",
    icon: BadgeCheck,
  },
];

export default function WhyInventateq() {
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="why-iclp-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
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
            Why ICLP
          </p>
          <h2 id="why-iclp-heading" className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
            Why Choose ICLP Technologies for IT Training in Chennai?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Build practical skills through guided learning, real project experience and career-focused support.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map(({ title, description, icon: Icon }, index) => {
            const isSelected = selectedBenefit === index;

            return (
              <motion.button
                key={title}
                type="button"
                onClick={() => setSelectedBenefit(index)}
                onFocus={() => setSelectedBenefit(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group relative flex min-h-[230px] flex-col items-start overflow-hidden rounded-2xl border bg-white p-6 text-left shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:transform-none ${isSelected ? "border-[#00a878] shadow-xl shadow-[#00a878]/15" : "border-slate-200 hover:border-[#01377d]/40 hover:shadow-xl hover:shadow-[#01377d]/10"}`}
                aria-pressed={isSelected}
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01377d] to-[#00a878] transition-opacity duration-300 motion-reduce:transition-none ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl text-white shadow-md transition-all duration-300 motion-reduce:transition-none ${isSelected ? "scale-105 bg-gradient-to-br from-[#01377d] to-[#00a878]" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
                  <Icon aria-hidden="true" />
                </span>
                <span className={`mt-5 text-lg font-bold transition-colors duration-200 motion-reduce:transition-none ${isSelected ? "text-[#01377d]" : "text-slate-900 group-hover:text-[#01377d]"}`}>
                  {title}
                </span>
                <span className={`mt-2 text-sm leading-relaxed transition-colors duration-200 motion-reduce:transition-none ${isSelected ? "text-slate-700" : "text-slate-600"}`}>
                  {description}
                </span>
                <span className={`mt-auto pt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#087f5b] transition-opacity duration-200 motion-reduce:transition-none ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  Selected benefit
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
