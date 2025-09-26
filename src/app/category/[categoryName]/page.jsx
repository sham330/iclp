"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import "./categoryCourses.css";
import Image from "next/image";

export default function CategoryCoursesPage() {
  const params = useParams();
  const router = useRouter();
  const categoryName = params?.categoryName;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!categoryName) return;

    const decodedCategoryName = decodeURIComponent(categoryName);

    const fetchCourses = async () => {
      try {
        const response = await fetch("/data/courses.json");
        const data = await response.json();

        const selectedCategory = data.categories.find(
          (cat) => cat.category_name === decodedCategoryName
        );

        if (selectedCategory) {
          setCourses(selectedCategory.sub_categories);
        } else {
          console.error("Category not found:", decodedCategoryName);
        }
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchCourses();
  }, [categoryName]);

  const handleCardClick = (course) => {
    if (course?.path) router.push(`/course/${course.path}`);
  };

  const renderCourseImage = (image) => {
    if (!image) return "/placeholder.png";

    return /^https?:\/\//i.test(image) || image.startsWith("/")
      ? image
      : "/placeholder.png";
  };

  return (
    <>
      <Head>
        <title>{categoryName} Courses - ICLP Tech</title>
        <meta
          name="description"
          content={`Explore top ${categoryName} courses online including Java, Python, SAP, AI, and more. Enroll now and advance your career!`}
        />
        <meta property="og:title" content={`${categoryName} Courses - ICLP Tech`} />
        <meta
          property="og:description"
          content={`Explore top ${categoryName} courses online including Java, Python, SAP, AI, and more. Enroll now and advance your career!`}
        />
        <meta property="og:url" content={`https://iclptech.in/courses/${categoryName}`} />
        <meta
          property="og:image"
          content="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        />
      </Head>

      <div className="category-courses-container">
        <h1 className="category-title">{decodeURIComponent(categoryName)} Courses</h1>

        <div className="courses-grid">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={index}
                className="course-card"
                onClick={() => handleCardClick(course)}
              >
                <div className="course-image-container">
  {course.image ? (
    // Base64
    course.image.startsWith("data:image") ? (
      <img
        src={course.image}
        alt={course.course_name || "Course"}
        className="course-image"
        width={300}
        height={200}
      />
    ) : /^https?:\/\//i.test(course.image) ? (
      <img
        src={course.image}
        alt={course.course_name || "Course"}
        width={300}
        height={200}
        className="course-image"
      />
    ) : course.image.startsWith("/") ? (
      <Image
        src={course.image}
        alt={course.course_name || "Course"}
        width={300}
        height={200}
        className="course-image"
      />
    ) : (
      <Image
        src="/placeholder.png"
        alt="Placeholder"
        width={300}
        height={200}
        className="course-image"
      />
    )
  ) : (
    <Image
      src="/placeholder.png"
      alt="Placeholder"
      width={300}
      height={200}
      className="course-image"
    />
  )}
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
    </>
  );
}
