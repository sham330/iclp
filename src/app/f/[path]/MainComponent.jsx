"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import "./footCourseDet.css";
import ModalBooking from "@/app/components/ModalBooking/ModalBooking";

const allCourses = [
  { name: "python", url: "/coursedetails/python" },
  { name: "java", url: "/coursedetails/java" },
  { name: "R Programming", url: "/coursedetails/R%20Programming" },
  { name: "JavaScript", url: "/coursedetails/JavaScript" },
  { name: "PHP", url: "/coursedetails/PHP" },
  { name: "Full Stack Developer", url: "/coursedetails/Full%20Stack%20Developer" },
  { name: "Node.js", url: "/coursedetails/Node.js" },
  { name: "ReactJS", url: "/coursedetails/ReactJS" },
  { name: "Microsoft Azure", url: "/coursedetails/Microsoft%20Azure" },
  { name: "AWS", url: "/coursedetails/AWS" },
  { name: "DevOps", url: "/coursedetails/DevOps" },
  { name: "Cyber Security", url: "/coursedetails/Cyber%20Security" },
  { name: "Ethical Hacking", url: "/coursedetails/Ethical%20Hacking" },
  { name: "Selenium", url: "/coursedetails/Selenium" },
  { name: "Manual Testing Course", url: "/coursedetails/Manual%20Testing%20Course" },
  { name: "JMeter Course", url: "/coursedetails/JMeter%20Course" },
  { name: "ETL Testing", url: "/coursedetails/ETL%20Testing" },
  { name: "LoadRunner", url: "/coursedetails/LoadRunner" },
  { name: "SoapUI", url: "/coursedetails/SoapUI" },
  { name: "Data Science Course", url: "/coursedetails/Data%20Science%20Course" },
  { name: "Artificial Intelligence", url: "/coursedetails/Artificial%20Intelligence" },
  { name: "Digital Marketing", url: "/coursedetails/Digital%20Marketing" },
  { name: "Excel", url: "/coursedetails/Excel" },
  { name: "HTML", url: "/coursedetails/HTML" },
  { name: "UI and UX", url: "/coursedetails/UI%20and%20UX" },
  { name: "Salesforce", url: "/coursedetails/Salesforce" },
  { name: "C Sharp", url: "/coursedetails/C%20Sharp" },
  { name: "UNIX SHELL Scripting", url: "/coursedetails/UNIX%20SHELL%20Scripting" },
  { name: "Workday HCM", url: "/coursedetails/Workday%20HCM" },
  { name: "Salesforce Online Training", url: "/coursedetails/Salesforce%20Online%20Training" },
  { name: "Salesforce Developer", url: "/coursedetails/Salesforce%20Developer" },
  { name: "Azure DevOps", url: "/coursedetails/Azure%20DevOps" },
  { name: "Angular", url: "/coursedetails/Angular" },
  { name: "WordPress", url: "/coursedetails/WordPress" },
  { name: "CSS Online", url: "/coursedetails/CSS%20Online" },
  { name: "Machine Learning", url: "/coursedetails/Machine%20Learning" },
  { name: "Data Science With Python", url: "/coursedetails/Data%20Science%20With%20Python" },
  { name: "Machine Learning with Python", url: "/coursedetails/Machine%20Learning%20with%20Python" },
  { name: "Machine Learning using R", url: "/coursedetails/Machine%20Learning%20using%20R" },
  { name: "MySQL", url: "/coursedetails/MySQL" },
  { name: "SQL with PHP", url: "/coursedetails/SQL%20with%20PHP" },
  { name: "Microsoft Dynamics 365", url: "/coursedetails/Microsoft%20Dynamics%20365" },
  { name: "Excel Macros and VBA", url: "/coursedetails/Excel%20Macros%20and%20VBA" },
  { name: "jQuery", url: "/coursedetails/jQuery" },
  { name: "SAP FICO", url: "/coursedetails/SAP%20FICO" },
  { name: "SAP MM", url: "/coursedetails/SAP%20MM" },
  { name: "SAP SD", url: "/coursedetails/SAP%20SD" },
  { name: "SAP PP", url: "/coursedetails/SAP%20PP" },
  { name: "SAP ABAP", url: "/coursedetails/SAP%20ABAP" },
  { name: "Oracle Financials", url: "/coursedetails/Oracle%20Financials" },
  { name: "Oracle SCM", url: "/coursedetails/Oracle%20SCM" },
  { name: "Oracle HCM", url: "/coursedetails/Oracle%20HCM" }
];

const getCourseUrl = (courseKey, allCourses) => {
  const course = allCourses.find(c => c.name === courseKey);
  return course ? course.url : '/courses';
};

export default function FootCourseDet({ params }) {
  const { path } = params; // ✅ matches folder name [path]
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  // Fetch course data from JSON
  useEffect(() => {
    if (!path) return; // wait for dynamic param

    const fetchCourseData = async () => {
      try {
        const response = await fetch("/data/fcd.json");
        if (!response.ok) throw new Error("Failed to fetch course data");
        const data = await response.json();
        const selectedCourse = data[path] || null;
        if (selectedCourse) selectedCourse.key = path;
        setCourse(selectedCourse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [path]);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (loading) return <div className="fcd-loading">Loading course details...</div>;
  if (error) return <div className="fcd-error">Error: {error}</div>;
  if (!course) return <div className="fcd-not-found">Course not found</div>;


  return (
    <div className="fcd-super-container">
      {/* Back button */}
      <div className="fcd-back-container">
        <Link href="/courses" className="fcd-back-link">
          <svg viewBox="0 0 24 24" className="fcd-back-icon">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span className="fcd-back-text">Back to Courses</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="fcd-content-wrapper">
        <div className="fcd-left-section">
          <div className="fcd-header">
            {course.badge && <div className="fcd-badge">{course.badge}</div>}
            <div className="fcd-meta">
              <span className="fcd-duration">{course.duration}</span>
              <span className="fcd-projects">{course.projects} Projects</span>
              <div className="fcd-rating">
                <span>{course.rating}</span>
                <svg viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            <h2 className="fcd-title">{course.title}</h2>
            <p className="fcd-description">{course.description}</p>
            <div className="fcd-guarantee-chip">
              <svg viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span>100% Job Guarantee</span>
            </div>
          </div>

          <div className="fcd-highlights">
            <h3 className="fcd-highlights-title">Why Choose This Course?</h3>
            <ul className="fcd-highlight-list">
              {course.highlights.map((item, index) => (
                <li key={index} className="fcd-highlight-item">
                  <span className="fcd-highlight-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Career Outcomes Section */}
          <div className="fcd-career-outcomes">
            <h3 className="fcd-career-title">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Career Outcomes
            </h3>
            <div className="fcd-career-grid">
              {course.careerOutcomes.map((outcome, index) => (
                <div key={index} className="fcd-career-card">
                  <div className="fcd-career-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                    </svg>
                  </div>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <Link 
              href={getCourseUrl(course.key, allCourses)} 
              className="fcd-view-details-btn"
            >
              View Full Course Details
            </Link>
          </div>
        </div>

        <div className="fcd-right-section">
          <div className="fcd-modules">
            <h3 className="fcd-modules-title">
              <svg viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
              </svg>
              Course Curriculum
            </h3>
            <div className="fcd-module-list">
              {course.modules.map((module, index) => (
                <div
                  key={index}
                  className={`fcd-module-item ${expandedModule === index ? "expanded" : ""}`}
                  onClick={() => toggleModule(index)}
                >
                  <div className="fcd-module-header">
                    <div
                      className="fcd-module-progress"
                      style={{
                        width: `${(index + 1) * (100 / course.modules.length)}%`,
                      }}
                    ></div>
                    <div className="fcd-module-content">
                      <div className="fcd-module-number">
                        Module {index + 1}
                      </div>
                      <div className="fcd-module-name">{module.name}</div>
                    </div>
                    <div className="fcd-module-arrow">
                      <svg viewBox="0 0 24 24">
                        <path
                          d={
                            expandedModule === index
                              ? "M7 14l5-5 5 5z"
                              : "M7 10l5 5 5-5z"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {expandedModule === index && (
                    <div className="fcd-module-details">
                      <div className="fcd-module-topics">
                        {module.topics.map((topic, i) => (
                          <div key={i} className="fcd-topic-item">
                            <div className="fcd-topic-check">
                              <svg viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="fcd-module-resources">
                        <div className="fcd-resource">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                          </svg>
                          5 Resources
                        </div>
                        <div className="fcd-resource">
                          <svg viewBox="0 0 24 24">
                            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                          8 Videos
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="fcd-footer">
            
            <div className="fcd-pricing-card">
            <div className="fcd-pricing-header">
              <svg viewBox="0 0 24 24" className="fcd-price-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h3 className="fcd-pricing-title">Profitability</h3>
            </div>
           
            
            <div className="fcd-price-features">
              <div className="fcd-price-feature">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Affordable Price with high ROI</span>
              </div>
              <div className="fcd-price-feature">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Flexible payment options available</span>
              </div>
              <div className="fcd-price-feature">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>To view more details, please visit the course page</span>
              </div>
            </div>
            
            <div className="fcd-emi-badge">
              <span>EMI Options Available</span>
            </div>
          </div>
            <button className="fcd-enroll-btn" onClick={handleOpenModal}>
            Enroll Now
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
          <div className="fcd-discount-tag">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            Limited Seats Available - Discounts for Early Enrollment
          </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <ModalBooking
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          courseName={course.title}
          coursePrice={course.price}
          courseDuration={course.duration}
        />
      )}
    </div>
  );
};

