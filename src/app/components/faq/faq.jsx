"use client";
import React, { useState, useEffect } from "react";
import "./faq.css";

const CourseFAQs = ({ faqs, courseName }) => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Use provided faqs or empty array
  const faqList = faqs || [];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
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

  // Show empty state if no FAQs provided
  if (!faqList || faqList.length === 0) {
    return null; // Don't render anything if no FAQs
  }

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
            <span className="faq-title-highlight">{courseName || "Course"}</span> FAQs
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
        {faqList.map((faq, index) => (
          <div
            className={`faq-item ${activeFAQ === index ? "active" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeFAQ === index}
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