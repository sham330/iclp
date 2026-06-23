"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaHome, FaArrowRight, FaBookOpen, FaFire } from "react-icons/fa";

// Shown instantly — no fetch needed
const POPULAR = [
  { name: "SAP FICO", path: "sap-fico", route: "/courses/sap/sap-fico" },
  { name: "SAP MM", path: "sap-mm", route: "/courses/sap/sap-mm" },
  { name: "SAP SD", path: "sap-sd", route: "/courses/sap/sap-sd" },
  { name: "SAP ABAP", path: "sap-abap", route: "/courses/sap/sap-abap" },
  { name: "Oracle Financials", path: "oracle-financials", route: "/courses/oracle/oracle-financials" },
  { name: "Full Stack Java", path: "full-stack-java", route: "/course/full-stack-java-training-online" },
  { name: "Python", path: "python", route: "/course/python-development-online-training" },
  { name: "Data Science", path: "data-science", route: "/course/data-science-course-online" },
];

function similarity(a, b) {
  a = a.toLowerCase().replace(/[-_/]/g, " ").trim();
  b = b.toLowerCase().replace(/[-_/]/g, " ").trim();
  const aW = new Set(a.split(/\s+/));
  const bW = new Set(b.split(/\s+/));
  const inter = [...aW].filter((w) => bW.has(w)).length;
  const union = new Set([...aW, ...bW]).size;
  return union === 0 ? 0 : inter / union;
}

function getRoute(path) {
  if (/^sap-/.test(path)) return `/courses/${path}`;
  if (/^oracle-/.test(path)) return `/courses/${path}`;
  return `/course/${path}`;
}

export default function NotFound() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Start with popular courses instantly — zero loading flash
  const [courses, setCourses] = useState(POPULAR);
  const [label, setLabel] = useState("Popular Courses");

  useEffect(() => {
    if (!query) return;
    fetch("/data/courses.json")
      .then((r) => r.json())
      .then((data) => {
        const all = [];
        data.categories.forEach((cat) =>
          cat.sub_categories.forEach((sub) =>
            all.push({ name: sub.course_name, path: sub.path, route: getRoute(sub.path) })
          )
        );
        const scored = all
          .map((c) => ({
            ...c,
            score: Math.max(similarity(query, c.path), similarity(query, c.name || "")),
          }))
          .filter((c) => c.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 8);

        if (scored.length > 0) {
          setCourses(scored);
          setLabel(`Courses similar to "${query}"`);
        }
        // else keep popular
      })
      .catch(() => {});
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f0f5ff] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#01377d] px-6 py-4 flex items-center justify-between">
        <img src="/Logo.png" alt="ICLP Tech" className="h-10 object-contain" />
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-white text-sm font-medium hover:text-blue-300 transition-colors"
        >
          <FaHome /> Home
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 pt-10 pb-16">
        {/* 404 hero */}
        <div className="text-center mb-10">
          <div className="text-[120px] sm:text-[160px] font-black leading-none text-[#01377d] opacity-10 select-none absolute left-1/2 -translate-x-1/2">
            404
          </div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#01377d] mb-4">
              <FaBookOpen className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#01377d] mb-2">
              Page Not Found
            </h1>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              {query
                ? <>Couldn't find <span className="font-semibold text-[#01377d]">"{query}"</span> — but here are some courses you might like.</>
                : "That page doesn't exist, but your next course does."}
            </p>
          </div>
        </div>

        {/* Course cards */}
        <div className="w-full max-w-5xl">
          <div className="flex items-center gap-2 mb-5">
            <FaFire className="text-orange-500 text-lg" />
            <h2 className="text-lg font-bold text-slate-700">{label}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, i) => (
              <button
                key={i}
                onClick={() => router.push(course.route)}
                className="group bg-white rounded-2xl p-5 border-2 border-slate-100 hover:border-[#01377d] hover:shadow-xl transition-all text-left flex flex-col justify-between min-h-[120px]"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-bold text-[#01377d] group-hover:text-[#014a9f] leading-snug">
                    {course.name}
                  </p>
                  <FaArrowRight className="text-slate-300 group-hover:text-[#01377d] text-sm flex-shrink-0 mt-1 transition-colors" />
                </div>
                <span className="mt-3 inline-block text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                  View Course →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 bg-[#01377d] hover:bg-[#014a9f] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg"
          >
            <FaHome /> Go Home
          </button>
          <button
            onClick={() => router.push("/courses")}
            className="flex items-center justify-center gap-2 border-2 border-[#01377d] text-[#01377d] hover:bg-[#01377d] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
