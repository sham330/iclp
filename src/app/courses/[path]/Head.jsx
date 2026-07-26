// app/course/[path]/head.jsx
export default function Head({ course, canonicalUrl }) {
  if (!course) return null;

  const canonical = canonicalUrl || `https://iclptech.in/courses/${course.path}/`;

  return (
    <>
      <title>{`${course.meta_title || course.course_name || "Iclp tech"} - ICLP`}</title>
      <meta name="description" content={course.meta_description || course.description} />

      <meta property="og:title" content={course.meta_title || course.course_name} />
      <meta property="og:description" content={course.meta_description || course.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={course.meta_title || course.course_name} />
      <meta name="twitter:description" content={course.meta_description || course.description} />
      <meta name="twitter:image" content="/favicon.png" />
      <meta name="keywords" content={`${course.course_name}, ${course.course_name}, ICLP Tech, Course training India`} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      {course.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(course.schema) }}
        />
      )}
    </>
  );
}
