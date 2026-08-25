"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FlaskConical,
  FolderKanban,
  MessageCircle,
  Presentation,
  UserPlus,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Career Consultation",
    description: "Understand your career goals and select a suitable technology.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Course Enrollment",
    description: "Choose your program and training schedule.",
    icon: UserPlus,
  },
  {
    number: "03",
    title: "Skill Assessment",
    description: "Understand your existing technical knowledge and learning requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Expert-Led Training",
    description: "Learn concepts through structured instructor-led sessions.",
    icon: Presentation,
  },
  {
    number: "05",
    title: "Hands-On Practice",
    description: "Strengthen your skills through assignments and practical exercises.",
    icon: FlaskConical,
  },
  {
    number: "06",
    title: "Real-Time Project",
    description: "Apply your knowledge to practical project scenarios.",
    icon: FolderKanban,
  },
  {
    number: "07",
    title: "Technical Assessment",
    description: "Evaluate your knowledge through technical and practical assessments.",
    icon: ClipboardCheck,
  },
  {
    number: "08",
    title: "Certification",
    description: "Complete the applicable course requirements and receive certification.",
    icon: BadgeCheck,
  },
  {
    number: "09",
    title: "Career Assistance",
    description: "Prepare for interviews with resume support, mock interviews and career guidance.",
    icon: BriefcaseBusiness,
  },
];

function JourneyStep({ step, isActive, onSelect, index, wide, activeStep }) {
  const Icon = step.icon;

  return (
    <>
      <motion.button
        type="button"
        onClick={onSelect}
        onFocus={onSelect}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        whileHover={{ y: -3 }}
        className={`group relative z-10 flex text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:transform-none ${wide ? "w-[132px] shrink-0 flex-col items-center rounded-2xl border p-2 text-center" : "w-full items-start gap-4 rounded-2xl border bg-white p-4 shadow-sm"} ${isActive ? "border-[#00a878] bg-white shadow-xl shadow-[#00a878]/15" : wide ? "border-transparent hover:border-[#01377d]/30 hover:bg-white/70" : "border-slate-200 hover:border-[#01377d]/40 hover:shadow-lg"}`}
        aria-pressed={isActive}
        aria-label={`${step.number}, ${step.title}`}
      >
        <span className={`flex shrink-0 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 motion-reduce:transition-none ${wide ? "h-16 w-16" : "h-14 w-14"} ${isActive ? "scale-105 bg-gradient-to-br from-[#01377d] to-[#00a878]" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
          <Icon className={wide ? "h-7 w-7" : "h-6 w-6"} aria-hidden="true" />
        </span>
        <span className={wide ? "mt-4" : "flex-1"}>
          <span className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-[0.16em] text-[#087f5b]">{step.number}</span>
            {!wide && isActive && <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#00a878]">Selected</span>}
          </span>
          <span className={`mt-1 block font-bold leading-snug ${wide ? "text-sm text-slate-900" : "text-base text-slate-900"}`}>{step.title}</span>
          <span className={`mt-2 block leading-relaxed ${wide ? "text-xs text-slate-600" : "text-sm text-slate-600"}`}>{step.description}</span>
        </span>
      </motion.button>
      {wide && index < journeySteps.length - 1 && (
          <span className={`mt-8 h-1 min-w-[10px] flex-1 rounded-full transition-colors duration-300 motion-reduce:transition-none ${index < activeStep ? "bg-[#00a878]" : "bg-[#bfe9dc]"}`} aria-hidden="true" />
      )}
    </>
  );
}

export default function TrainingProcedure() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="journey-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-flex rounded-full border border-[#00a878]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#7ff0c9] shadow-sm">
            Career Journey
          </p>
          <h2 id="journey-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Learning to Career: Your ICLP Journey
          </h2>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            Move through structured stages from career consultation and skill building to certification and career assistance.
          </p>
        </header>

        <div className="relative grid grid-cols-1 gap-4 pl-8 md:grid-cols-2 md:gap-6">
          <div className="absolute bottom-8 left-3 top-8 w-1 rounded-full bg-[#2d8f7a]" aria-hidden="true" />
          {journeySteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className={`absolute -left-8 top-8 z-10 h-3 w-3 rounded-full border-2 border-[#020c2b] transition-colors duration-300 motion-reduce:transition-none ${activeStep === index ? "bg-[#7ff0c9]" : "bg-[#4fb89c]"}`} aria-hidden="true" />
              <JourneyStep
                step={step}
                index={index}
                isActive={activeStep === index}
                onSelect={() => setActiveStep(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
