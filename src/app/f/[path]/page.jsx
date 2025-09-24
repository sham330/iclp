import fs from "fs";
import path from "path";
import Head from "next/head";
import FootCourseDet from "./MainComponent";

// ✅ Force this route to be dynamic (no static build)
export const dynamic = "force-dynamic";

export default function FCoursePage({ params }) {
  const { path: courseKey } = params;

  // Read JSON at request time
  const filePath = path.join(process.cwd(), "public/data/fcd.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  const course = data[courseKey] || null;

  if (!course) {
    return <div>Course not found</div>;
  }

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
