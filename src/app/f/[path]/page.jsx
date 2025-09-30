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

  // Decode in case of spaces (%20)
  const decodedKey = decodeURIComponent(courseKey);

  // Directly fetch from JSON
  const course = data[decodedKey] || null;
  return (
    <>
      <Head>
        <title>{course.name} | ICLP Tech</title>
        <meta
          name="description"
          content={course.description || `Learn ${course.name} with ICLP Tech`}
        />
        <meta property="og:title" content={`${course.name} | ICLP Tech`} />
        <meta
          property="og:description"
          content={course.description || `Learn ${course.name} with ICLP Tech`}
        />
        <meta
          property="og:url"
          content={`https://iclptech.in/f/${encodeURIComponent(courseKey)}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course.image || "/Logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <FootCourseDet course={course} />
    </>
  );
}
