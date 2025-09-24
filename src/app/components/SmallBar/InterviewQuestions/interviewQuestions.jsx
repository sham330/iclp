"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SEO from "../../SEO/SEO";

const InterviewQuestions = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/data/interviewQuestions.json")
      .then((response) => response.json())
      .then((data) => setCourses(data.interview_questions))
      .catch((error) =>
        console.error("Error fetching interview questions:", error),
      );
  }, []);

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase()),
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
    <div style={styles.container}>
      <SEO
        title="Top Interview Questions with Answers – Prepare with Confidence"
        description="Crack your next interview with our expert-curated interview questions and answers. Find the most asked questions in programming, web development, data science, and more – all from the best online learning institute."
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/interview-questions"
      />

      {/* New Info Box */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoBoxTitle}>About Interview Questions</h3>
        <p style={styles.infoBoxText}>
          Prepare for your next job interview with our comprehensive collection
          of commonly asked questions across various technical domains. Each
          course contains carefully curated questions with model answers to help
          you succeed in your interviews.
        </p>
      </div>
      {/* Title with Gradient */}
      <h2 style={styles.heading}>
        <span style={styles.titleGradient}>Common Interview Questions</span>
      </h2>

      {/* Enhanced Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchBar}
        />
        <button style={styles.searchButton}>🔍</button>
      </div>

      {/* Course Cards */}
      <div style={styles.cardsContainer}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => handleOpenDialog(course)}
            >
              <h3 style={styles.cardTitle}>{course.course_name}</h3>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No matching courses found.</p>
        )}
      </div>

      {/* Dialog for Selected Course */}
      <Dialog
        open={!!selectedCourse}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle style={styles.dialogTitle}>
          {selectedCourse?.course_name}
        </DialogTitle>
        <DialogContent>
          <ul style={styles.questionsList}>
            {selectedCourse?.questions.map((question, qIndex) => (
              <li key={qIndex} style={styles.questionItem}>
                <strong>Q: {question.question}</strong>
                <p style={styles.answer}>A: {question.answer}</p>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={styles.closeButton}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// Updated Styles with Color Scheme
const styles = {
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "30px",
    background: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  },
  infoBox: {
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "30px",
    borderLeft: "5px solid #1FAA59",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  infoBoxTitle: {
    color: "#1a2a6c",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "15px",
  },
  infoBoxText: {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  titleGradient: {
    background: "linear-gradient(135deg, #4b975f, #0047AB)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
  },
  searchBar: {
    flex: 1,
    padding: "15px",
    fontSize: "18px",
    borderRadius: "10px 0 0 10px",
    border: "2px solid #ddd",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  searchButton: {
    padding: "15px 20px",
    fontSize: "18px",
    background: "linear-gradient(135deg, #4b975f, #0047AB)",
    color: "#fff",
    border: "none",
    borderRadius: "0 10px 10px 0",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  },
  searchButtonHover: {
    opacity: 0.9,
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "linear-gradient(135deg, #1a2a6c 0%, #1FAA59 100%)",
    padding: "25px",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    textAlign: "center",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  dialogTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#0047AB",
    textAlign: "center",
  },
  questionsList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  questionItem: {
    padding: "15px",
    borderBottom: "1px solid #eee",
    fontSize: "18px",
    fontWeight: "500",
  },
  answer: {
    margin: "10px 0 0 25px",
    fontSize: "16px",
    color: "#666",
  },
  noResults: {
    textAlign: "center",
    fontSize: "20px",
    color: "#888",
  },
  closeButton: {
    color: "#0047AB",
    fontWeight: "bold",
  },
};

export default InterviewQuestions;
