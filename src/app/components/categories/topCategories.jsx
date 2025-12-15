"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineSketch,
  AiOutlineRobot,
} from "react-icons/ai";
import { MdSecurity, MdCloud, MdStorage } from "react-icons/md";

// Icon mapping for each category
const iconMapping = {
  Programming: <AiOutlineCode />,
  "Full Stack": <AiOutlineCode />,
  "Cloud Computing": <MdCloud />,
  "DevOps & Automation": <AiOutlineRobot />,
  "Cybersecurity & Ethical Hacking": <MdSecurity />,
  "Software Testing": <AiOutlineCode />,
  "Data & AI": <MdStorage />,
  "UI/UX & Design": <AiOutlineSketch />,
  "Digital Marketing": <AiOutlineMobile />,
};

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => {
        const extractedCategories = data.categories.map((category) => ({
          name: category.category_name,
          icon: iconMapping[category.category_name] || <AiOutlineCode />,
          path: category.path
        }));
        setCategories(extractedCategories);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const handleCardClick = (path) => {
    router.push(`/category/${path}`);
  };

  const handleSeeAllClick = () => {
    router.push(`/courses`);
  };

  const filteredCategories = (categories || []).filter((category) => {
    const name = category?.name || category?.category_name || category?.course_name || "";
    return name.toLowerCase().includes((searchTerm || "").toLowerCase());
  });

  const isCoursesPage = pathname === "/courses";

  const displayedCategories = isCoursesPage
    ? filteredCategories
    : filteredCategories.slice(0, 8);

  return (
    <div className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-emerald-50/20 to-red-50/30 overflow-hidden">
      {/* Subtle Festive Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Top Border */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!isCoursesPage && (
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600">
                Skills
              </span>{" "}
              in One
            </h1>
            <h3 className="text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-red-600">
                From Basic to Pro
              </span>
              , ICLP makes your path smooth
            </h3>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-red-300"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-300"></div>
            </div>
          </div>
        )}

        {/* Search Bar (only on /courses page) */}
        {isCoursesPage && (
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 transition-all duration-200 text-slate-900 placeholder:text-slate-400 shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category, index) => (
              <motion.button
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-transparent overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(category.path)}
              >
                {/* Festive Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-amber-500/0 to-emerald-500/0 group-hover:from-red-500/10 group-hover:via-amber-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
                
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative space-y-4">
                  {/* Icon with Festive Colors */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 via-amber-100 to-emerald-100 text-red-700 text-3xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    {category.icon}
                  </div>

                  {/* Category Name */}
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-700 transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Subtext */}
                  <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                    Click to explore
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No matching categories found.</p>
            </div>
          )}
        </motion.div>

        {/* "See All" Button (only on home page) */}
        {!isCoursesPage && (
          <div className="text-center mt-12">
            <button
              onClick={handleSeeAllClick}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-400/30"
            >
              <span>See All Categories</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Decorative Bottom Border */}
    </div>
  );
};

export default TopCategories;
