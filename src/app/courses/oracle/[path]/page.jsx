// app/course/[path]/page.tsx
import fs from "fs";
import path from "path";
import Head from "../../oracle/[path]/Head";
import OracleCourseDetailsPage from "./MainComponent";

export default async function CourseDetailsPage({ params }) {
  const coursePath = params.path;

  const filePath = path.join(process.cwd(), "public/data/oracleCourses.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const coursesData = JSON.parse(fileContents);

  let foundCourse = null;
  for (const category of coursesData.categories) {
    foundCourse = category.sub_categories.find(sub => sub.path === coursePath);
    if (foundCourse) break;
  }

  if (!foundCourse) return <div>Course not found</div>;

  return (
    <>
      <Head
        course={foundCourse}
      />

<OracleCourseDetailsPage/>
    </>
  );
}
