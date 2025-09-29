// app/course/[path]/head.jsx
export default function Head({ course }) {
  if (!course) return null;

  return (
    <>
      <title>{course.course_name} | ICLP Tech</title>
      <meta name="description" content={course.description} />

      <meta property="og:title" content={course.course_name} />
      <meta property="og:description" content={course.description} />
      <meta property="og:url" content={`https://iclptech.in/course/${course.path}`} />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={course.course_name} />
      <meta name="twitter:description" content={course.description} />
      <meta name="twitter:image" content= "/favicon.png" />
    </>
  );
}
