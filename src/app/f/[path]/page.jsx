import fs from "fs";
import path from "path";
import Head from "next/head";
import FootCourseDet from "./MainComponent";

// ✅ Force this route to be dynamic (no static build)
export const dynamic = "force-dynamic";

export default function FCoursePage({ params }) {
  const { path: courseKey } = params; // ✅ works in server component

  // Read JSON
  const filePath = path.join(process.cwd(), "public/data/fcd.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  // Decode and lowercase param
  const decodedKey = decodeURIComponent(courseKey).toLowerCase();

  // ✅ Convert JSON keys to lowercase for safe mapping
  const lowercasedData = Object.keys(data).reduce((acc, key) => {
    acc[key.toLowerCase()] = data[key];
    return acc;
  }, {});

  // ✅ Default fallback course if not found
  const defaultCourse = {
    course_name: "ICLP Tech",
    description: "Learn top courses with ICLP Tech",
    image: "/Logo.png",
    highlights: [], // prevent crashes
    syllabus: [],   // prevent crashes
  };

  // ✅ Use course from JSON or fallback
  const course = lowercasedData[decodedKey] || defaultCourse;

  return (
    <>
      <Head>
        <title>{course.course_name}</title>
        <meta
          name="description"
          content={course.description}
        />
        <meta
          property="og:title"
          content={`${course.course_name} | ICLP Tech`}
        />
        <meta
          property="og:description"
          content={course.description}
        />
        <meta
          property="og:url"
          content={`https://iclptech.in/f/${encodeURIComponent(courseKey)}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={course.image || "/Logo.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <FootCourseDet course={course} />
    </>
  );
}
