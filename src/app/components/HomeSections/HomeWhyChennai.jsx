"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  Code2,
  Cloud,
  Landmark,
  Layers3,
} from "lucide-react";
import Link from "next/link";

const industries = [
  { label: "IT Services", icon: BriefcaseBusiness },
  { label: "Software Development", icon: Code2 },
  { label: "SaaS", icon: Layers3 },
  { label: "Fintech", icon: Landmark },
  { label: "Automotive Technology", icon: Car },
  { label: "Enterprise Technology", icon: Cloud },
];

export default function HomeWhyChennai() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="why-chennai-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="lg:border-l-4 lg:border-[#00a878]/30 lg:pl-8">
          <p className="mb-4 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#087f5b] shadow-sm">
            Chennai IT Ecosystem
          </p>
          <h2 id="why-chennai-heading" className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
            Build Your IT Career in Chennai
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Chennai is home to a large technology ecosystem spanning IT services, software development, SaaS, fintech, automotive technology and enterprise technology.
            </p>
            <p>
              ICLP&apos;s training programs help learners build practical skills across development, testing, cloud, DevOps, data, cybersecurity and enterprise technologies.
            </p>
          </div>
          <Link
            href="/courses"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#01377d] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#01377d]/20 transition-colors duration-200 hover:bg-[#00a878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none"
          >
            Explore Chennai IT Courses
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-2xl border border-[#01377d]/10 bg-white p-6 shadow-xl shadow-[#01377d]/10 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087f5b]">Technology ecosystem</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Explore the industries</h3>
            </div>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00a878] shadow-[0_0_0_5px_rgba(0,168,120,0.12)]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industries.map(({ label, icon: Icon }, index) => {
              const isActive = activeIndustry === index;

              return (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  onFocus={() => setActiveIndustry(index)}
                  whileHover={{ y: -2 }}
                  className={`group flex min-h-16 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:transform-none ${isActive ? "border-[#00a878] bg-[#effcf6] text-[#01377d] shadow-md shadow-[#00a878]/10" : "border-slate-200 bg-slate-50/70 text-slate-700 hover:border-[#01377d]/40 hover:bg-white hover:shadow-md"}`}
                  aria-pressed={isActive}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200 motion-reduce:transition-none ${isActive ? "bg-gradient-to-br from-[#01377d] to-[#00a878] text-white" : "bg-[#01377d]/[0.08] text-[#01377d] group-hover:bg-[#01377d] group-hover:text-white"}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold">{label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
