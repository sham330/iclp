import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import CategoryCoursesClient from "@/app/components/CategoryCoursesClient";
export const dynamic = 'force-dynamic';

function CategoryHead({ category, categoryPath }) {
  const canonical = `https://iclptech.in/courses/${categoryPath}/`;
  return (
    <>
      <title>{`${category.category_name} Courses - ICLP Technologies`}</title>
      <meta name="description" content={`Explore all ${category.category_name} courses at ICLP Technologies. Expert-led training with placement assistance.`} />
      <meta property="og:title" content={`${category.category_name} Courses - ICLP Technologies`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
    </>
  );
}

export default async function CourseDetailsPage({ params }) {
  const resolvedParams = await params;
  const coursePath = resolvedParams?.path;
  if (!coursePath) redirect("/courses/");
  const filePath = path.join(process.cwd(), "public/data/courses.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const coursesData = JSON.parse(fileContents);

  const foundCategory = coursesData.categories.find((cat) => cat.path === coursePath);
  if (foundCategory) {
    return (
      <>
        <CategoryHead category={foundCategory} categoryPath={coursePath} />
        <CategoryCoursesClient categoryPath={coursePath} />
      </>
    );
  }

  for (const category of coursesData.categories) {
    const match = category.sub_categories.find(sub => sub.path === coursePath);
    if (match) redirect(`/courses/${category.path}/${coursePath}/`);
  }

  redirect("/courses/");
}
