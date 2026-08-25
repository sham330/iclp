"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AiOutlineCode,
  AiOutlineRobot,
  AiOutlineCloud,
} from "react-icons/ai";
import { MdSecurity, MdStorage } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

const careerPaths = [
  {
    title: "Software Development",
    icon: AiOutlineCode,
    accent: "from-[#01377d] to-[#00a878]",
    courses: ["Python", "Java", "Full Stack Development", "ReactJS", "Node.js", "JavaScript"],
    href: "/courses/programming",
    cta: "Explore Development Courses",
  },
  {
    title: "Data & AI",
    icon: AiOutlineRobot,
    accent: "from-[#00a878] to-[#0e7490]",
    courses: ["Data Science", "Machine Learning", "Artificial Intelligence", "Data Analytics"],
    href: "/courses/data-science-artificial-intelligence",
    cta: "Explore Data & AI Courses",
  },
  {
    title: "Cloud & DevOps",
    icon: AiOutlineCloud,
    accent: "from-[#0369a1] to-[#00a878]",
    courses: ["AWS", "Microsoft Azure", "DevOps", "Azure DevOps"],
    href: "/courses/cloud-computing-devops",
    cta: "Explore Cloud & DevOps Courses",
  },
  {
    title: "Software Testing",
    icon: BiTestTube,
    accent: "from-[#014a9f] to-[#16a34a]",
    courses: ["Selenium", "Manual Testing", "JMeter", "ETL Testing", "LoadRunner", "API Testing"],
    href: "/courses/software-testing-quality-assurance",
    cta: "Explore Testing Courses",
  },
  {
    title: "Enterprise Technologies",
    icon: MdStorage,
    accent: "from-[#01377d] to-[#16a34a]",
    courses: ["SAP FICO", "SAP MM", "SAP SD", "SAP ABAP", "Oracle Financials", "Oracle SCM", "Oracle HCM"],
    href: "/courses/sap-courses",
    cta: "Explore Enterprise Courses",
  },
  {
    title: "Cybersecurity",
    icon: MdSecurity,
    accent: "from-[#0e7490] to-[#15803d]",
    courses: ["Cybersecurity", "Ethical Hacking", "Network Security"],
    href: "/courses/cybersecurity-ethical-hacking",
    cta: "Explore Cybersecurity Courses",
  },
];

function CareerPathCard({ title, icon: Icon, accent, courses, href, cta, isActive, onSelect }) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300  motion-reduce:transition-none ${isActive ? "border-[#00a878] shadow-xl shadow-[#00a878]/15" : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-[#01377d]/40 hover:shadow-xl hover:shadow-[#01377d]/10"}`}>
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />

      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none`}>
          <Icon aria-hidden="true" />
        </div>
        <button
          type="button"
          onClick={onSelect}
          aria-pressed={isActive}
          className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-2 motion-reduce:transition-none ${isActive ? "border-[#00a878] bg-[#00a878] text-white" : "border-[#00a878]/30 bg-[#00a878]/[0.06] text-[#087f5b] hover:bg-[#00a878]/15"}`}
        >
          {isActive ? "Selected" : "View path"}
        </button>
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">Build practical skills for your next technology role.</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} courses`}>
        {courses.map((course) => (
          <li
            key={course}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium leading-5 transition-colors duration-200 motion-reduce:transition-none ${isActive ? "border-[#00a878]/30 bg-[#00a878]/[0.08] text-[#087f5b]" : "border-slate-200 bg-slate-50 text-slate-600"}`}
          >
            {course}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <Link
          href={href}
          aria-label={`${cta} — ${title}`}
          className="group/link inline-flex items-center gap-2 self-start rounded-md bg-[#01377d] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#00a878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function TopCategories() {
  const [activePath, setActivePath] = useState(careerPaths[0].title);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28" aria-labelledby="career-paths-heading">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
            Career Paths
          </p>
          <h2 id="career-paths-heading" className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl">
            Choose the Right IT Course for Your Career
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Whether you're starting your IT career, upgrading your technical skills or moving into a new technology,
            choose a learning path that matches your goals.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 pb-12">
          {careerPaths.map((careerPath) => (
            <CareerPathCard
              key={careerPath.title}
              {...careerPath}
              isActive={activePath === careerPath.title}
              onSelect={() => setActivePath(careerPath.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}