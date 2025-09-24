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
import Image from "next/image";
import "./RelatedCoursesSlider.css";

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

  // Calculate slide width and max slides when filtered courses or window size changes
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

  // Handle scroll events to update current slide
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

  // Reset to first slide when filter changes
  useEffect(() => {
    scrollToSlide(0);
  }, [activeFilter, scrollToSlide]);

  return (
    <div className="bt-courses-container">
      <div className="bt-job-guarantee">
        <div className="bt-guarantee-content">
          <h2>Make a Combo offer and Get Hired in Just 3 Months</h2>
          <p>Salary range upto 3LPA - 15LPA</p>
          <div className="bt-guarantee-badge">
            <span>100% Job Placement Support</span>
          </div>
        </div>
      </div>

      <section className="bt-courses-section">
        <div className="bt-section-header">
          <h2 className="bt-section-title">Our Courses</h2>
          <Link href="/courses" className="bt-view-all">View All</Link>
        </div>

        <div className="bt-courses-filter">
          <button 
            className={`bt-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Courses
          </button>
          {/* <button 
            className={`bt-filter-btn ${activeFilter === "SAP" ? "active" : ""}`}
            onClick={() => setActiveFilter("SAP")}
          >
            SAP Courses
          </button>
          <button 
            className={`bt-filter-btn ${activeFilter === "Oracle" ? "active" : ""}`}
            onClick={() => setActiveFilter("Oracle")}
          >
            Oracle Courses
          </button> */}
        </div>

        <div className="bt-slider-wrapper">
          <div className="bt-courses-slider" ref={sliderRef}>
            {filteredCourses.map((course) => (
              <BTCourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length > 3 && (
            <>
              <button 
                className="bt-slider-nav-btn prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                &lt;
              </button>
              <button 
                className="bt-slider-nav-btn next"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlides}
                aria-label="Next slide"
              >
                &gt;
              </button>
            </>
          )}
        </div>
        
      </section>
    </div>
  );
};

const BTCourseCard = ({ course }) => {
  return (
    <div className="bt-course-card">
      <div className="bt-course-image-container">
        <Image 
          src={course.image} 
          alt={course.name} 
          className="bt-course-image"
          width={300}
          height={200}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
        <div className="bt-course-tags">
          {course.isBestSeller && <span className="bt-tag bt-best-seller">Best Seller</span>}
          {course.isNew && <span className="bt-tag bt-new-tag">New</span>}
          {course.category && <span className="bt-tag bt-category-tag">{course.category}</span>}
        </div>
      </div>
      
      <div className="bt-course-content">
        <h3 className="bt-course-title">{course.name}</h3>
        <p className="bt-course-description">{course.description}</p>
        
        <div className="bt-course-meta">
          <div className="bt-meta-item">
            <svg className="bt-meta-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="bt-meta-item">
            <svg className="bt-meta-icon" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>{course.mentor}</span>
          </div>
        </div>
        
        <div className="bt-course-stats">
          <div className="bt-stat-item">
            <span className="bt-stat-label">Avg Salary</span>
            <span className="bt-stat-value">{course.salary}</span>
          </div>
          <div className="bt-stat-item">
            <span className="bt-stat-label">Salary Hike</span>
            <span className="bt-stat-value">{course.hike}</span>
          </div>
          {course.rating && (
            <div className="bt-stat-item">
              <span className="bt-stat-label">Rating</span>
              <div className="bt-rating">
                <span className="bt-rating-stars">★★★★★</span>
                <span className="bt-rating-value">{course.rating}</span>
                <span className="bt-rating-count">({course.reviews})</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="bt-course-footer">
          <Link href={course.url} className="bt-details-btn">
            Get Course Details
            <svg className="bt-btn-icon" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseListing;