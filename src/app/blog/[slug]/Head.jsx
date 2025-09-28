// app/course/[path]/head.jsx

export default async function Head({ course }) {
  if (!course) return null;

  return (
    <>
      <title>{course.metaTitle || course.title|| "Iclp tech"}</title>
      <meta
        name="description"
        content={course.metadescription || course.intro}
      />

      <meta property="og:title" content={course.title} />
      <meta property="og:description" content={course.metadescription} />
      <meta
        property="og:url"
        content={`https://iclptech.in/course/${course.slug}`}
      />
      <meta property="og:image" content={course.image || "/Logo.png"} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={course.title} />
      <meta name="twitter:description" content={course.metadescription} />
      <meta name="twitter:image" content={course.image || "/Logo.png"} />
    </>
  );
}
