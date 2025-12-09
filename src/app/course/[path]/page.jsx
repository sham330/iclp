// app/course/[path]/page.tsx
import fs from "fs";
import path from "path";
import CourseDetails from "./Maincomponent";
import Head from "./Head";

export default async function CourseDetailsPage({ params }) {
  // Await params Promise FIRST (Next.js 15+ requirement)
  const resolvedParams = await params;
  const coursePath = resolvedParams?.path;
  const filePath = path.join(process.cwd(), "public/data/courses.json");
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
      <CourseDetails course={foundCourse} />
    </>
  );
}
