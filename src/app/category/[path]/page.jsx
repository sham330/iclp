"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import "./categoryCourses.css";

export default function CategoryCoursesPage() {
  const params = useParams();
  const router = useRouter();
  const path = params?.path;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!path) return;

    const decodedPath = decodeURIComponent(path);

    const fetchCourses = async () => {
      try {
        const response = await fetch("/data/courses.json");
        const data = await response.json();

        const selectedCategory = data.categories.find(
          (cat) => cat.path === decodedPath
        );

        if (selectedCategory) {
          setCourses(selectedCategory.sub_categories || []);
        } else {
          console.error("Category not found:", decodedPath);
        }
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchCourses();
  }, [path]);

  const handleCardClick = (course) => {
    if (course?.path) router.push(`/course/${course.path}`);
  };

  const renderCourseImage = (image) => {
    if (!image) return "/placeholder.png";
    if (image.startsWith("data:image")) return image;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith("/")) return image;
    return "/placeholder.png";
  };

  return (
    <>
      <Head>
        <title>{path} ICLP </title>
        <meta
          name="description"
          content={`Explore top ${path} courses online including Java, Python, SAP, AI, and more. Enroll now and advance your career!`}
        />
        <meta property="og:title" content={`${path} Courses - ICLP Tech`} />
        <meta
          property="og:description"
          content={`Explore top ${path} courses online including Java, Python, SAP, AI, and more. Enroll now and advance your career!`}
        />
        <meta property="og:url" content={`https://iclptech.in/courses/${path}`} />
        <meta
          property="og:image"
          content="https://iclptech.in/og-image.jpg"
        />
      </Head>

      <div className="category-courses-container">
        <h1 className="category-title">{decodeURIComponent(path)} Courses</h1>

        <div className="courses-grid">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={index}
                className="course-card"
                onClick={() => handleCardClick(course)}
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
            <p className="no-courses-message">No courses found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
}
