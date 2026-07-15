import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import CourseDetails from "../Maincomponent";
import Head from "../Head";
export const dynamic = "force-dynamic";

export default async function NestedCourseDetailsPage({ params }) {
  const resolvedParams = await params;
  const coursePath = resolvedParams?.coursePath;
  if (!coursePath) redirect("/courses/");

  const filePath = path.join(process.cwd(), "public/data/courses.json");
  const coursesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  let foundCourse = null;
  for (const category of coursesData.categories) {
    foundCourse = (category.sub_categories || []).find((sub) => sub.path === coursePath);
    if (foundCourse) break;
  }

  if (!foundCourse) redirect("/courses/");

  return (
    <>
      <Head course={foundCourse} />
      <CourseDetails course={foundCourse} />
    </>
  );
}
