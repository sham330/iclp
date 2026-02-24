

export async function getAllCoursePaths() {
  const coursesData = await fetch("https://iclptech.in/data/courses.json").then(res => res.json());
  
  const paths = [];
  
  if (coursesData?.categories) {
    coursesData.categories.forEach((category) => {
      // Safe guard for sub_categories + skip if missing
      if (category?.sub_categories) {
        category.sub_categories.forEach((sub) => {
          paths.push({
            path: sub.path,
            courseName: sub.course_name
          });
        });
      }
    });
  }
  
  return paths;
}


