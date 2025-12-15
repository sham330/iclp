"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Head from "./Head";
import { FaSearch, FaBook, FaTimes, FaLightbulb } from "react-icons/fa";

const InterviewQuestions = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/data/interviewQuestions.json")
      .then((response) => response.json())
      .then((data) => setCourses(data.interview_questions))
      .catch((error) =>
        console.error("Error fetching interview questions:", error)
      );
  }, []);

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open dialog for selected course
  const handleOpenDialog = (course) => {
    setSelectedCourse(course);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Interview <span className="text-[#39FF14]">Questions</span>
          </h1>
          <p className="text-xl text-[#97e7f5] max-w-3xl mx-auto">
            Comprehensive collection of commonly asked questions across various
            technical domains
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Info Box */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-12 border-l-4 border-[#39FF14]">
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-[#39FF14] text-4xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-[#01377d] mb-3">
                About Interview Questions
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Prepare for your next job interview with our comprehensive
                collection of commonly asked questions across various technical
                domains. Each course contains carefully curated questions with
                model answers to help you succeed in your interviews.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for a course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 text-lg border-2 border-slate-200 rounded-xl focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700 shadow-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] p-3 rounded-lg transition-all">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                onClick={() => handleOpenDialog(course)}
                className="group bg-gradient-to-br from-[#01377d] to-[#014a9f] rounded-xl p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#39FF14] opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>

                <div className="relative z-10">
                  <FaBook className="text-[#39FF14] text-4xl mb-4" />
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {course.course_name}
                  </h3>
                  <div className="mt-4 flex items-center text-[#97e7f5] text-sm">
                    <span className="mr-2">📝</span>
                    <span>{course.questions.length} Questions</span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#39FF14] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-slate-300 text-6xl mb-4">🔍</div>
            <p className="text-2xl text-slate-400 font-semibold">
              No matching courses found
            </p>
            <p className="text-slate-500 mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>

      {/* Dialog for Selected Course */}
      <Dialog
        open={!!selectedCourse}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "16px",
            maxHeight: "80vh",
          },
        }}
      >
        <DialogTitle
          style={{
            background: "linear-gradient(135deg, #01377d 0%, #014a9f 100%)",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            padding: "24px",
            position: "relative",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaBook className="text-[#39FF14]" />
              <span>{selectedCourse?.course_name}</span>
            </div>
            <button
              onClick={handleCloseDialog}
              className="text-white hover:text-[#39FF14] transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="text-sm font-normal text-[#97e7f5] mt-2">
            {selectedCourse?.questions.length} Interview Questions
          </div>
        </DialogTitle>

        <DialogContent style={{ padding: "0" }}>
          <div className="divide-y divide-slate-200">
            {selectedCourse?.questions.map((question, qIndex) => (
              <div
                key={qIndex}
                className="p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#01377d] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    {qIndex + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-[#01377d] mb-3">
                      {question.question}
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-[#39FF14]">
                      <p className="text-sm font-semibold text-[#01377d] mb-2">
                        Answer:
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {question.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>

        <DialogActions
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #e5e7eb",
            background: "#f9fafb",
          }}
        >
          <Button
            onClick={handleCloseDialog}
            style={{
              background: "#39FF14",
              color: "#01377d",
              fontWeight: "bold",
              padding: "10px 24px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#2de000";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#39FF14";
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InterviewQuestions;
