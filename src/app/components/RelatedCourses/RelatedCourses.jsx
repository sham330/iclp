"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RelatedCoursesSlider = ({ currentCourseName = "" }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((r) => r.json())
      .then((data) => {
        const courses = [];
        data.categories.forEach((cat) => {
          cat.sub_categories.forEach((sub) => {
            courses.push({
              name: sub.course_name,
              category: cat.category_name,
              route: `/courses/${cat.path}/${sub.path}`,
              description: sub.description || "",
            });
          });
        });
        setAllCourses(courses);
      })
      .catch(() => {});
  }, []);

  const filteredCourses = allCourses
    .filter((c) => c.name !== currentCourseName)
    .slice(0, 12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 900) setSlidesToShow(2);
      else if (window.innerWidth < 1200) setSlidesToShow(3);
      else setSlidesToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev + slidesToShow >= filteredCourses.length ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, filteredCourses.length - slidesToShow) : prev - 1
    );

  const visibleCourses = filteredCourses.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  if (filteredCourses.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover the perfect course to advance your career
          </p>
        </div>

        <div className="relative px-4 sm:px-12 lg:px-16">
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100"
            aria-label="Previous course"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100"
            aria-label="Next course"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
              >
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600 line-clamp-1">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {course.description || `Comprehensive training course for ${course.name}.`}
                  </p>
                  <a
                    href={course.route}
                    className="block w-full text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Course
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex sm:hidden justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Previous course"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {filteredCourses.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Next course"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="hidden sm:flex justify-center gap-2 mt-10">
          {Array.from({
            length: Math.ceil(filteredCourses.length / slidesToShow),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * slidesToShow)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / slidesToShow) === idx
                  ? "bg-blue-600 w-8"
                  : "bg-blue-200 w-2 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="/courses"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedCoursesSlider;
