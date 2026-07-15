import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import CourseDetails from "./Maincomponent";
import Head from "./Head";
import { getAllCoursePaths } from "@/app/lib/course";
import CategoryCoursesClient from "@/app/components/CategoryCoursesClient";
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/courses.json");
  const coursesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const categoryPaths = coursesData.categories
    .filter((cat) => cat.path)
    .map((cat) => ({ path: cat.path }));
  const coursePaths = await getAllCoursePaths();
  return [...categoryPaths, ...coursePaths];
}

export default async function CourseDetailsPage({ params }) {
  const resolvedParams = await params;
  const coursePath = resolvedParams?.path;
  if (!coursePath) redirect("/courses/");
  const filePath = path.join(process.cwd(), "public/data/courses.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const coursesData = JSON.parse(fileContents);

  const isCategory = coursesData.categories.some((cat) => cat.path === coursePath);
  if (isCategory) {
    return <CategoryCoursesClient categoryPath={coursePath} />;
  }

  let foundCourse = null;
  for (const category of coursesData.categories) {
    foundCourse = category.sub_categories.find(sub => sub.path === coursePath);
    if (foundCourse) break;
  }

  return (
    <>
      <Head course={foundCourse} />
      <CourseDetails course={foundCourse} />
    </>
  );
}
