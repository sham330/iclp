"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SEO from "../SEO/SEO";
import "./CategoryCourses.css";

const CategoryCourses = ({ params }) => {
  const { categoryName } = params; // from Next.js dynamic route [categoryName].js
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedCategory = data.categories.find(
          (category) => category.category_name === categoryName
        );
        if (selectedCategory) {
          setCourses(selectedCategory.sub_categories);
        } else {
          console.error("Category not found:", categoryName);
        }
      })
      .catch((error) =>
        console.error("Error fetching JSON data:", error)
      );
  }, [categoryName]);

  const handleCardClick = (course) => {
    router.push(`/course/${course.path}`);
  };

  return (
    <div className="category-courses-container">
      <SEO
        title="Explore Diverse Categories of Online Courses – Java, Python, SAP, AI, and More"
        description="Discover a wide range of online courses across various categories including Programming (Java, Python, JavaScript, Full Stack Development), Data Science, AI, Machine Learning, SAP (FICO, MM, SD), Oracle (Financials, SCM, HCM), Digital Marketing, Cyber Security, Ethical Hacking, Web Development (HTML, CSS, ReactJS, Angular, Node.js), Testing (Selenium, JMeter, LoadRunner), and more. Get expert assistance with our user-friendly chatbot to guide you through course details, enrollment, and support. Enroll now and advance your career with top-rated courses!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/courses"
      />

      <h1 className="category-title">{categoryName} Courses</h1>
      <div className="courses-grid">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              onClick={() => handleCardClick(course)}
            >
              <div className="course-image-container">
                <Image
                  src={course.image || "/placeholder.png"} // fallback image if missing
                  alt={course.course_name}
                  className="course-image"
                  width={300} // adjust as needed
                  height={200} // adjust as needed
                  priority={false}
                />
              </div>
              <h2 className="course-name">{course.course_name}</h2>
              <div className="rating">
                {Array(5)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <div className="course-hover-content">
                <button className="view-course-btn">View Course</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses-message">
            No courses found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryCourses;
