// app/sap/[path]/page.tsx
import fs from "fs";
import path from "path";
import Head from "./Head";
import SapCourseDetailsPage from "./MainComponent";

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/sapCourses.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const coursesData = JSON.parse(fileContents);

  const paths = [];
  for (const category of coursesData.categories) {
    for (const subCategory of category.sub_categories) {
      paths.push({
        path: subCategory.path
      });
    }
  }

  return paths;
}

export default async function CourseDetailsPage({ params }) {
  // Await params Promise FIRST (Next.js 15+ requirement)
  const resolvedParams = await params;
  const coursePath = resolvedParams?.path;
  console.log(coursePath);
  const filePath = path.join(process.cwd(), "public/data/sapCourses.json");
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
      <Head course={foundCourse} />
      <SapCourseDetailsPage getcourse={foundCourse} path={foundCourse.path} />
    </>
  );
}