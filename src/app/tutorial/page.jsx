"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaPlay,
  FaUsers,
  FaStar,
  FaCertificate,
  FaTimes,
  FaClock,
  FaLock,
  FaUserTie,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa";
import Head from "./Head";
import ModalBooking from "../components/ModalBooking/ModalBooking";

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

  const getLevelColor = (level) => {
    const colors = {
      Beginner: "bg-green-500",
      Intermediate: "bg-blue-500",
      Advanced: "bg-purple-500",
    };
    return colors[level] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Head />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#01377d] to-[#014a9f] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#97e7f5] to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Master Your Skills With Our{" "}
                <span className="text-[#39FF14]">Professional Courses</span>
              </h1>
              <p className="text-xl text-[#97e7f5] mb-8">
                Learn from industry experts with our comprehensive video
                tutorials and hands-on projects.
              </p>
              <button
                onClick={() => handleVideoClick("Professional Courses")}
                className="inline-flex items-center gap-2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
              >
                Start Learning Now <FaArrowRight />
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#39FF14]/30">
                    <FaUsers className="text-[#39FF14] text-3xl mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-[#97e7f5]">Students</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#39FF14]/30">
                    <FaStar className="text-[#39FF14] text-3xl mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-sm text-[#97e7f5]">Rating</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#39FF14]/30">
                    <FaCertificate className="text-[#39FF14] text-3xl mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">600+</div>
                    <div className="text-sm text-[#97e7f5]">Courses</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#39FF14]">
                <Image
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Students learning"
                  width={634}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#01377d] mb-4">
            Featured Course Tutorials
          </h2>
          <p className="text-xl text-slate-600">
            Select a course to view available tutorial videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-[#39FF14] hover:shadow-2xl transition-all group"
            >
              {/* Thumbnail */}
              <div
                className="relative h-48 cursor-pointer overflow-hidden"
                onClick={() => handleVideoClick(course.title)}
              >
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#39FF14] rounded-full p-6">
                    <FaPlay className="text-[#01377d] text-3xl" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span
                    className={`${getLevelColor(course.level)} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {course.level}
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaVideo className="text-[#39FF14]" />
                    {course.videos.length} Videos
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#39FF14]" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-[#39FF14]" />
                    {course.rating}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#01377d] mb-3 line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="flex items-center gap-2 text-slate-600 mb-4">
                  <FaUserTie className="text-[#39FF14]" />
                  <span className="text-sm">{course.instructor}</span>
                </p>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-[#01377d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>

                {/* Video List */}
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <ul className="space-y-2">
                    {course.videos.slice(0, 3).map((video, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="flex items-center gap-2 text-slate-700">
                          <span className="text-[#39FF14] font-semibold">
                            {index + 1}.
                          </span>
                          {video}
                        </span>
                        <FaLock className="text-slate-400 text-xs" />
                      </li>
                    ))}
                    {course.videos.length > 3 && (
                      <li className="text-sm text-[#01377d] font-semibold">
                        + {course.videos.length - 3} more videos
                      </li>
                    )}
                  </ul>
                </div>

                {/* Enroll Button */}
                <button
                  onClick={() => handleVideoClick(course.title)}
                  className="w-full bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] font-bold py-3 px-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-[#39FF14]/30"
                >
                  Enroll Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseBooking}
          ></div>

          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#01377d] text-2xl z-10 bg-white rounded-full p-2 shadow-lg"
            >
              <FaTimes />
            </button>

            <div className="bg-gradient-to-r from-[#01377d] to-[#014a9f] p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">
                Enroll in {selectedCourse}
              </h2>
              <p className="text-[#97e7f5]">
                Complete the form below to get started
              </p>
            </div>

            <div className="p-8">
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
