"use client";
import React, { useState, useEffect } from "react";
import "./CourseAdvantagesTools.css";

const CourseAdvantagesTools = ({ courseName }) => {
  const [activeTab, setActiveTab] = useState("advantages");
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/courseDetails.json");
      const data = await response.json();
      setCourseData(data.courseDetails[courseName] || {});
    };

    fetchData();
  }, [courseName]);

  return (
    <div className="cat-container">
      <div className="cat-tabs">
        <button
          className={`cat-tab ${activeTab === "advantages" ? "active" : ""}`}
          onClick={() => setActiveTab("advantages")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          Advantages
        </button>
        <button
          className={`cat-tab ${activeTab === "tools" ? "active" : ""}`}
          onClick={() => setActiveTab("tools")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          Tools Covered
        </button>
      </div>

      <div className="cat-content">
        {activeTab === "advantages" && (
          <div className="cat-advantages">
            <h3 className="cat-section-title">Why Learn {courseName}?</h3>
            <ul className="cat-list">
              {courseData.advantages?.map((advantage, index) => (
                <li key={index} className="cat-list-item">
                  <div className="cat-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "tools" && (
          <div className="cat-tools">
            <h3 className="cat-section-title">Tools You'll Master</h3>
            <div className="cat-tools-grid">
              {courseData.tools?.map((tool, index) => (
                <div key={index} className="cat-tool-card">
                  <div className="cat-tool-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="cat-tool-name">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseAdvantagesTools;
