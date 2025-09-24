"use client";
import React, { useState, useEffect } from "react";
import "./faq.css";

const CourseFAQs = ({ courseName }) => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        const response = await fetch("/data/faq.json");
        const data = await response.json();
        
        // Find course by exact name match first, then fallback to case-insensitive
        let courseData = data.courses.find(
          (course) => course.name === courseName
        );
        
        // If no exact match, try case-insensitive matching
        if (!courseData) {
          courseData = data.courses.find(
            (course) => course.name.toLowerCase() === courseName.toLowerCase()
          );
        }
        
        console.log("Looking for course:", courseName);
        console.log("Available courses:", data.courses.map(c => c.name));
        console.log("Found course data:", courseData);
        
        setFaqs(courseData?.faqs || []);
      } catch (error) {
        console.error("Error loading FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (courseName) {
      fetchFAQs();
    }
  }, [courseName]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // SVG Illustrations with matching color scheme
  const FAQIllustration = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="50"
        y="50"
        width="300"
        height="200"
        rx="20"
        fill="url(#faqGradient)"
      />
      <path
        d="M100 100H300M100 150H300M100 200H200"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="70" cy="100" r="15" fill="white" />
      <circle cx="70" cy="150" r="15" fill="white" fillOpacity="0.7" />
      <circle cx="70" cy="200" r="15" fill="white" fillOpacity="0.4" />
      <path
        d="M350 100C350 134.243 322.243 162 288 162C253.757 162 226 134.243 226 100C226 65.7575 253.757 38 288 38C322.243 38 350 65.7575 350 100Z"
        fill="#1FAA59"
      />
      <path
        d="M288 58V100M288 142V100M288 100H330M288 100H246"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="faqGradient"
          x1="200"
          y1="50"
          x2="200"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a2a6c" />
          <stop offset="1" stopColor="#1FAA59" />
        </linearGradient>
      </defs>
    </svg>
  );

  const NoFAQsIllustration = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="50"
        y="50"
        width="300"
        height="200"
        rx="20"
        fill="#F8FAFC"
        stroke="#E2E8F0"
        strokeWidth="2"
      />
      <rect x="80" y="100" width="240" height="30" rx="5" fill="#EDF2F7" />
      <rect x="80" y="150" width="240" height="30" rx="5" fill="#EDF2F7" />
      <rect x="80" y="200" width="160" height="30" rx="5" fill="#EDF2F7" />
      <circle cx="300" cy="215" r="40" fill="#1a2a6c" fillOpacity="0.1" />
      <path
        d="M300 200V230M285 215H315"
        stroke="#1a2a6c"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M120 80L150 120L180 80"
        stroke="#1FAA59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Show loading state if courseName is not provided
  if (!courseName) {
    return (
      <div className="faq-empty-state">
        <div className="faq-empty-illustration">
          <NoFAQsIllustration />
        </div>
        <h3 className="faq-empty-title">Course Name Not Provided</h3>
        <p className="faq-empty-message">
          Unable to load FAQs without course information.
        </p>
      </div>
    );
  }

  if (loading)
    return (
      <div className="faq-loading-container">
        <div className="faq-loading-spinner">
          <div
            className="faq-spinner-track"
            style={{ "--color": "#1a2a6c" }}
          ></div>
          <div className="faq-spinner-path" style={{ "--color": "#1FAA59" }}>
            <svg viewBox="0 0 50 50">
              <path
                d="M25,5 A20,20 0 0,1 45,25 A20,20 0 0,1 25,45 A20,20 0 0,1 5,25 A20,20 0 0,1 25,5 Z"
                stroke="var(--color)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
        <p className="faq-loading-text">Loading {courseName} FAQs...</p>
      </div>
    );

  if (!faqs.length)
    return (
      <div className="faq-empty-state">
        <div className="faq-empty-illustration">
          <NoFAQsIllustration />
        </div>
        <h3 className="faq-empty-title">No FAQs Available Yet</h3>
        <p className="faq-empty-message">
          We're currently preparing the best content for this course. Check back
          soon!
        </p>
        <button
          className="faq-empty-button"
          style={{ "--color": "#1a2a6c", "--hover": "#1FAA59" }}
          onClick={() => window.location.reload()}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.536 4 7.33243 5.11429 5.86404 6.86404M5.86404 6.86404V3M5.86404 6.86404H2M5.86404 6.86404H9.37868"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Refresh Page
        </button>
      </div>
    );

  return (
    <div className="faq-container">
      {/* Decorative background elements */}
      <div className="faq-background">
        <div
          className="faq-bg-circle faq-bg-circle-1"
          style={{ "--color": "#1a2a6c" }}
        ></div>
        <div
          className="faq-bg-circle faq-bg-circle-2"
          style={{ "--color": "#1FAA59" }}
        ></div>
      </div>

      {/* Header section */}
      <div className="faq-header">
        <div className="faq-header-content">
          <h1 className="faq-main-title">
            <span className="faq-title-highlight">{courseName}</span> FAQs
          </h1>
          <p className="faq-subtitle">
            Find answers to common questions about this course
          </p>
        </div>
        <div className="faq-header-illustration">
          <FAQIllustration />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="faq-question-number">Q{index + 1}</span>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-indicator">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQs;