import fs from "fs";
import path from "path";

export async function getAllCoursePaths() {
  const filePath = path.join(process.cwd(), "public/data/courses.json");
  const coursesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const paths = [];

  if (coursesData?.categories) {
    coursesData.categories.forEach((category) => {
      if (category?.sub_categories) {
        category.sub_categories.forEach((sub) => {
          paths.push({
            path: sub.path,
            courseName: sub.course_name,
          });
        });
      }
    });
  }

  return paths;
}
