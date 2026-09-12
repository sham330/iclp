"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaHome, FaArrowRight, FaBookOpen, FaFire } from "react-icons/fa";

const POPULAR = [
  { name: "SAP FICO", route: "/courses/sap-courses/sap-fico-training-in-chennai" },
  { name: "SAP MM", route: "/courses/sap-courses/sap-mm-training-in-chennai" },
  { name: "SAP SD", route: "/courses/sap-courses/sap-sd-training-in-chennai" },
  { name: "SAP ABAP", route: "/courses/sap-courses/sap-abap-training-in-chennai" },
  { name: "Oracle Financials", route: "/courses/oracle/oracle-financials-training-in-chennai" },
  { name: "Full Stack Java", route: "/courses/full-stack-development/full-stack-java-training-in-chennai" },
  { name: "Python", route: "/courses/programming/python-training-in-chennai" },
  { name: "Data Science", route: "/courses/data-science-artificial-intelligence/data-science-training-in-chennai" },
];

const STOP_WORDS = new Set(["training", "in", "course", "online", "certification", "the", "and", "for", "with", "a", "an"]);

function tokenize(str) {
  return str.toLowerCase().replace(/[-_/]/g, " ").split(/\s+/).filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function similarity(tokensA, b) {
  const tokensB = new Set(tokenize(b));
  const matches = tokensA.filter((w) => tokensB.has(w)).length;
  const union = new Set([...tokensA, ...tokensB]).size;
  return union === 0 ? 0 : matches / union;
}

function NotFoundContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || pathname || "";

  const [courses, setCourses] = useState(POPULAR);
  const [label, setLabel] = useState("Popular Courses");

  useEffect(() => {
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0) return;

    fetch("/data/courses.json")
      .then((r) => r.json())
      .then((data) => {
        const all = [];
        data.categories.forEach((cat) =>
          cat.sub_categories.forEach((sub) => {
            const route = `/courses/${cat.path}/${sub.path}`;
            const nameScore = similarity(queryTokens, sub.course_name || "");
            const pathScore = similarity(queryTokens, sub.path || "");
            const catScore = similarity(queryTokens, cat.category_name || "") * 0.6;
            all.push({ name: sub.course_name, route, score: Math.max(nameScore, pathScore, catScore) });
          })
        );

        const scored = all
          .filter((c) => c.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 8);

        if (scored.length > 0) {
          setCourses(scored);
          setLabel("Courses similar to what you were looking for");
        }
      })
      .catch(() => {});
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f0f5ff] flex flex-col">
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
        <div className="text-center mb-10 relative">
          <div className="text-[140px] sm:text-[180px] font-black leading-none text-[#01377d] opacity-10 select-none pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6">
            404
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#01377d] mb-4">
              <FaBookOpen className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#01377d] mb-2">
              Page Not Found
            </h1>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              That page doesn&apos;t exist, but your next course does.
            </p>
          </div>
        </div>

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

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f0f5ff] flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#01377d] border-t-transparent" />
        </div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}
