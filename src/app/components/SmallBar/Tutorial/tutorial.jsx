"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ModalBooking from "../../ModalBooking/ModalBooking";
import {
  FaPlay,
  FaUsers,
  FaStar,
  FaCertificate,
  FaTimes,
} from "react-icons/fa";
import "./Tutorial.css";
import SEO from "../../SEO/SEO";

const Tutorial = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const router = useRouter();

  const courses = [
    {
      id: 1,
      title: "Python Programming Masterclass",
      thumbnail:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "4.5 hours",
      instructor: "Dr. Sarah Johnson",
      level: "Beginner",
      rating: "4.9",
      category: "Programming",
    },
    {
      id: 2,
      title: "Complete Web Development Bootcamp",
      thumbnail:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "6 hours",
      instructor: "Prof. Michael Chen",
      level: "Intermediate",
      rating: "4.8",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "5 hours",
      instructor: "Dr. Emily Rodriguez",
      level: "Advanced",
      rating: "4.9",
      category: "Data Science",
    },
    {
      id: 4,
      title: "Mobile App Development with Flutter",
      thumbnail:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "4 hours",
      instructor: "Alex Turner",
      level: "Intermediate",
      rating: "4.7",
      category: "Mobile",
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      thumbnail:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "3.5 hours",
      instructor: "James Wilson",
      level: "Beginner",
      rating: "4.8",
      category: "Security",
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      thumbnail:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      videos: Array(8).fill("Premium Video Content"),
      duration: "4 hours",
      instructor: "Priya Patel",
      level: "Intermediate",
      rating: "4.9",
      category: "Cloud",
    },
  ];

  const handleVideoClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setShowBookingForm(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
    document.body.style.overflow = "auto";
  };

  const getCategoryColor = (category) => {
    const colors = {
      Programming: "#2563eb",
      "Web Development": "#9333ea",
      "Data Science": "#dc2626",
      Mobile: "#059669",
      Security: "#d97706",
      Cloud: "#0284c7",
    };
    return colors[category] || "#4b5563";
  };

  return (
    <div className="tutorial-page">
      <SEO
        title="Free Video Tutorials – Learn Online with Expert Guidance"
        description="Watch free video tutorials from expert instructors in programming, design, marketing, and more. Learn step-by-step with high-quality videos from the best online learning institute."
        url="https://iclptech.in/tutorial"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
      />

      {/* Hero Section */}
      <section className="tutorial-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Your Skills With Our Professional Courses
            </h1>
            <p className="hero-subtitle">
              Learn from industry experts with our comprehensive video tutorials
              and hands-on projects.
            </p>
            <button
              className="hero-cta"
              onClick={() => handleVideoClick("Professional Courses")}
            >
              Start Learning Now
            </button>

            {/* Stats Section */}
            <div className="hero-stats-container">
              <div className="hero-stats-grid">
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <FaUsers />
                  </div>
                  <div className="hero-stat-content">
                    <span className="hero-stat-number">10K+</span>
                    <span className="hero-stat-label">Students</span>
                  </div>
                </div>

                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <FaStar />
                  </div>
                  <div className="hero-stat-content">
                    <span className="hero-stat-number">4.9</span>
                    <span className="hero-stat-label">Rating</span>
                  </div>
                </div>

                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <FaCertificate />
                  </div>
                  <div className="hero-stat-content">
                    <span className="hero-stat-number">600+</span>
                    <span className="hero-stat-label">Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Students learning"
              width={634}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <div className="tutorial-content">
        <div className="content-header">
          <h2>Featured Course Tutorials</h2>
          <p>Select a course to view available tutorial videos</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div
                className="card-thumbnail"
                onClick={() => handleVideoClick(course.title)}
                style={{ borderColor: getCategoryColor(course.category) }}
              >
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  className="thumbnail-image"
                  width={500}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className="thumbnail-overlay">
                  <div className="play-button">
                    <FaPlay />
                  </div>
                </div>
                <div className="course-badges">
                  <span
                    className="level-badge"
                    style={{
                      backgroundColor: getCategoryColor(course.category),
                    }}
                  >
                    {course.level}
                  </span>
                  <span className="video-count">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                        fill="currentColor"
                      />
                    </svg>
                    {course.videos.length} Videos
                  </span>
                </div>
              </div>

              <div className="card-body">
                <div className="course-meta">
                  <span className="duration">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                        fill="currentColor"
                      />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="rating">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill="currentColor"
                      />
                    </svg>
                    {course.rating}
                  </span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <p className="instructor">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      fill="currentColor"
                    />
                  </svg>
                  {course.instructor}
                </p>

                <div
                  className="category-tag"
                  style={{ backgroundColor: getCategoryColor(course.category) }}
                >
                  {course.category}
                </div>

                <div className="video-list">
                  <ul>
                    {course.videos.slice(0, 3).map((video, index) => (
                      <li key={index}>
                        <span className="video-number">{index + 1}.</span>
                        <span className="video-title">{video}</span>
                        <span className="locked-icon">
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path
                              d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    ))}
                    {course.videos.length > 3 && (
                      <li className="more-videos">
                        + {course.videos.length - 3} more videos
                      </li>
                    )}
                  </ul>
                </div>

                <button
                  className="enroll-button"
                  onClick={() => handleVideoClick(course.title)}
                  style={{ backgroundColor: getCategoryColor(course.category) }}
                >
                  <span>Enroll Now</span>
                  <svg viewBox="0 0 24 24" className="arrow-icon">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="booking-modal active">
          <div
            className="booking-modal-overlay"
            onClick={handleCloseBooking}
          ></div>

          <div className="booking-modal-container">
            <button
              className="booking-modal-close"
              onClick={handleCloseBooking}
            >
              <FaTimes />
            </button>

            <div className="booking-modal-header">
              <h2>Enroll in {selectedCourse}</h2>
              <p>Complete the form below to get started</p>
            </div>

            <div className="booking-modal-content">
              <ModalBooking
                onClose={handleCloseBooking}
                initialCourse={selectedCourse}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;