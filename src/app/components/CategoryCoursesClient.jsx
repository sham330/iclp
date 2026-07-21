"use client";

import { useEffect, useState } from "react";
import "@/app/category/[path]/categoryCourses.css";

export default function CategoryCoursesClient({ categoryPath }) {
  const [courses, setCourses] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (!categoryPath) return;
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const cat = data.categories.find((c) => c.path === decodeURIComponent(categoryPath));
        setCourses(cat?.sub_categories || []);
        setCategoryName(cat?.category_name || categoryPath);
      })
      .catch(console.error);
  }, [categoryPath]);

  const renderCourseImage = (image) => {
    if (!image) return "/placeholder.png";
    if (image.startsWith("data:image") || /^https?:\/\//i.test(image) || image.startsWith("/")) return image;
    return "/placeholder.png";
  };

  return (
    <div className="category-courses-container">
      <h1 className="category-title">{categoryName}</h1>
      <div className="courses-grid">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <a
              key={index}
              href={course?.path ? `/courses/${categoryPath}/${course.path}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="course-card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="course-image-container">
                <img
                  src={renderCourseImage(course.image)}
                  alt={course.course_name || "Course"}
                  width={300}
                  height={200}
                  className="course-image"
                />
              </div>
              <h2 className="course-name">{course.course_name}</h2>
              <div className="rating">{Array(5).fill("⭐").map((s, i) => <span key={i}>{s}</span>)}</div>
              <div className="course-hover-content">
                <button className="view-course-btn">View Course</button>
              </div>
            </a>
          ))
        ) : (
          <p className="no-courses-message">No courses found for this category.</p>
        )}
      </div>
    </div>
  );
}
