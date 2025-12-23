// import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./RelatedCoursesSlider.css";

// const CourseListing = () => {
//   const [courses, setCourses] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);
//   const [activeFilter, setActiveFilter] = useState("all");

//   useEffect(() => {
//     fetch("/data/hrcl.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setCourses(data.allCourses || []);
//       })
//       .catch((error) => console.error("Error loading course data:", error));
//   }, []);

//   const filteredCourses = activeFilter === "all" 
//     ? courses 
//     : courses.filter(course => course.category === activeFilter);

//   const scrollToSlide = (index) => {
//     if (sliderRef.current) {
//       const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
//       sliderRef.current.scrollTo({
//         left: index * (slideWidth + 32),
//         behavior: 'smooth'
//       });
//       setCurrentSlide(index);
//     }
//   };

//   const nextSlide = () => {
//     if (sliderRef.current) {
//       const maxSlides = Math.ceil(filteredCourses.length / 3) - 1;
//       const newIndex = Math.min(currentSlide + 1, maxSlides);
//       scrollToSlide(newIndex);
//     }
//   };

//   const prevSlide = () => {
//     const newIndex = Math.max(currentSlide - 1, 0);
//     scrollToSlide(newIndex);
//   };

//   return (
//     <div className="bt-courses-container">
//       <div className="bt-job-guarantee">
//         <div className="bt-guarantee-content">
//           <h2>Get Hired in Just 3 Months</h2>
//           <p>Salary range upto 3LPA - 15LPA</p>
//           <div className="bt-guarantee-badge">
//             <span>100% Job Placement Support</span>
//           </div>
//         </div>
//       </div>

//       <section className="bt-courses-section">
//         <div className="bt-section-header">
//           <h2 className="bt-section-title">Our Courses</h2>
//           <Link to="/courses" className="bt-view-all">View All</Link>
//         </div>

//         <div className="bt-courses-filter">
//           <button 
//             className={`bt-filter-btn ${activeFilter === "all" ? "active" : ""}`}
//             onClick={() => setActiveFilter("all")}
//           >
//             All Courses
//           </button>
//           <button 
//             className={`bt-filter-btn ${activeFilter === "SAP" ? "active" : ""}`}
//             onClick={() => setActiveFilter("SAP")}
//           >
//             SAP Courses
//           </button>
//           <button 
//             className={`bt-filter-btn ${activeFilter === "Oracle" ? "active" : ""}`}
//             onClick={() => setActiveFilter("Oracle")}
//           >
//             Oracle Courses
//           </button>
//         </div>

//         <div className="bt-slider-wrapper">
//           <div className="bt-courses-slider" ref={sliderRef}>
//             {filteredCourses.map((course) => (
//               <BTCourseCard key={course.id} course={course} />
//             ))}
//           </div>
          
//           {filteredCourses.length > 3 && (
//             <>
//               <button 
//                 className="bt-slider-nav-btn prev"
//                 onClick={prevSlide}
//                 disabled={currentSlide === 0}
//               >
//                 &lt;
//               </button>
//               <button 
//                 className="bt-slider-nav-btn next"
//                 onClick={nextSlide}
//                 disabled={currentSlide >= Math.ceil(filteredCourses.length / 3) - 1}
//               >
//                 &gt;
//               </button>
//             </>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// const BTCourseCard = ({ course }) => {
//   return (
//     <div className="bt-course-card">
//       <div className="bt-course-image-container">
//         <img src={course.image} alt={course.name} className="bt-course-image" />
//         <div className="bt-course-tags">
//           {course.isBestSeller && <span className="bt-tag bt-best-seller">Best Seller</span>}
//           {course.isNew && <span className="bt-tag bt-new-tag">New</span>}
//           {course.category && <span className="bt-tag bt-category-tag">{course.category}</span>}
//         </div>
//       </div>
      
//       <div className="bt-course-content">
//         <h3 className="bt-course-title">{course.name}</h3>
//         <p className="bt-course-description">{course.description}</p>
        
//         <div className="bt-course-meta">
//           <div className="bt-meta-item">
//             <svg className="bt-meta-icon" viewBox="0 0 24 24">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
//             </svg>
//             <span>{course.duration}</span>
//           </div>
//           <div className="bt-meta-item">
//             <svg className="bt-meta-icon" viewBox="0 0 24 24">
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//             </svg>
//             <span>{course.mentor}</span>
//           </div>
//         </div>
        
//         <div className="bt-course-stats">
//           <div className="bt-stat-item">
//             <span className="bt-stat-label">Avg Salary</span>
//             <span className="bt-stat-value">{course.salary}</span>
//           </div>
//           <div className="bt-stat-item">
//             <span className="bt-stat-label">Salary Hike</span>
//             <span className="bt-stat-value">{course.hike}</span>
//           </div>
//           {course.rating && (
//             <div className="bt-stat-item">
//               <span className="bt-stat-label">Rating</span>
//               <div className="bt-rating">
//                 <span className="bt-rating-stars">★★★★★</span>
//                 <span className="bt-rating-value">{course.rating}</span>
//                 <span className="bt-rating-count">({course.reviews})</span>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="bt-course-footer">
//           <Link to={course.url} className="bt-details-btn">
//             Get Course Details
//             <svg className="bt-btn-icon" viewBox="0 0 24 24">
//               <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseListing;
"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);

  useEffect(() => {
    fetch("/data/hrcl.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.allCourses || []);
      })
      .catch((error) => console.error("Error loading course data:", error));
  }, []);

  const filteredCourses = activeFilter === "all" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  useEffect(() => {
    const updateSlideDimensions = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const slide = sliderRef.current.children[0];
        const style = window.getComputedStyle(slide);
        const margin = parseFloat(style.marginRight);
        const width = slide.offsetWidth + margin;
        setSlideWidth(width);
        
        const containerWidth = sliderRef.current.offsetWidth;
        const visibleSlides = Math.floor(containerWidth / width);
        setMaxSlides(Math.max(0, filteredCourses.length - visibleSlides));
      }
    };

    updateSlideDimensions();
    window.addEventListener('resize', updateSlideDimensions);
    
    return () => window.removeEventListener('resize', updateSlideDimensions);
  }, [filteredCourses]);

  const scrollToSlide = useCallback((index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  }, [slideWidth]);

  const nextSlide = useCallback(() => {
    const newIndex = Math.min(currentSlide + 1, maxSlides);
    scrollToSlide(newIndex);
  }, [currentSlide, maxSlides, scrollToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = Math.max(currentSlide - 1, 0);
    scrollToSlide(newIndex);
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollPos = slider.scrollLeft;
      const newSlide = Math.round(scrollPos / slideWidth);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [currentSlide, slideWidth]);

  useEffect(() => {
    scrollToSlide(0);
  }, [activeFilter, scrollToSlide]);

  return (
    <div className="py-20 bg-white">
      {/* Job Guarantee Banner */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mb-16 py-20">
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 text-center shadow-2xl border border-amber-400/30 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400"></div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Make a Combo offer and Get Hired in Just 3 Months
          </h2>
          <p className="text-xl text-red-100 mb-4">Salary range upto 3LPA - 15LPA</p>
          <div className="inline-block px-6 py-2 bg-amber-400 text-slate-900 font-bold rounded-full">
            100% Job Placement Support
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400">
              Courses
            </span>
          </h2>
          <Link 
            href="/courses" 
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View All
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button 
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeFilter === "all" 
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white" 
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All Courses
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCourses.map((course) => (
              <BTCourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length > 3 && (
            <>
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center font-bold text-xl z-10"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                &lt;
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center font-bold text-xl z-10"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlides}
                aria-label="Next slide"
              >
                &gt;
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const BTCourseCard = ({ course }) => {
  return (
    <div className="flex-shrink-0 w-[350px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image} 
          alt={course.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {course.isBestSeller && (
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">Best Seller</span>
          )}
          {course.isNew && (
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">New</span>
          )}
          {course.category && (
            <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full">{course.category}</span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white line-clamp-2">{course.name}</h3>
        <p className="text-slate-400 text-sm line-clamp-2">{course.description}</p>
        
        {/* Meta Info */}
        <div className="flex gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👨‍🏫</span>
            <span>{course.mentor}</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-400">Avg Salary</p>
            <p className="text-sm font-bold text-emerald-400">{course.salary}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Salary Hike</p>
            <p className="text-sm font-bold text-amber-400">{course.hike}</p>
          </div>
        </div>
        
        {course.rating && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-amber-400">★★★★★</span>
            <span className="text-white font-semibold">{course.rating}</span>
            <span className="text-slate-400">({course.reviews})</span>
          </div>
        )}
        
        {/* Button */}
        <Link 
          href={course.url} 
          className="block w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center font-semibold rounded-lg transition-all duration-300"
        >
          Get Course Details →
        </Link>
      </div>
    </div>
  );
};

export default CourseListing;
