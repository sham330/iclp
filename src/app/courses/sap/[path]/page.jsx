// app/course/[path]/page.tsx
import fs from "fs";
import path from "path";
import Head from "../../oracle/[path]/Head";
import SapCourseDetailsPage from "./MainComponent";



// app/courses/sap/[path]/page.js
export async function generateStaticParams() {
  const sapData = await fetch("https://iclptech.in/data/sapCourses.json")
    .then(res => res.ok ? res.json() : { categories: [] })
    .catch(() => ({ categories: [] }));

  const paths = [];

  sapData.categories?.forEach((category) => {
    if (category?.name?.toLowerCase().includes('sap') && category.sub_categories) {
      category.sub_categories.forEach((course) => {
        if (course?.path) {
          paths.push({
            params: {
              path: course.path  // "sap-fico", "sap-mm", "sap-sd", etc.
            }
          });
        }
      });
    }
  });

  return paths;
}

export default async function CourseDetailsPage({ params }) {
  // Await params Promise FIRST (Next.js 15+ requirement)
  const resolvedParams = await params;
  const coursePath = resolvedParams?.path;
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
      <Head
        course={foundCourse}
      />

<SapCourseDetailsPage/>
    </>
  );
}
