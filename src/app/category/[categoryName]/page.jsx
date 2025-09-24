// app/category/[categoryName]/CourseCard.jsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <Link href={`/course/${course.path}`} className="course-card">
      <div className="course-image-container">
        <Image
          src={course.image || "/placeholder.png"}
          alt={course.course_name}
          width={300}
          height={200}
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
    </Link>
  );
}
