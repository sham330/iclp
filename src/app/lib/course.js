

export async function getAllCoursePaths() {
  const coursesData = await fetch("https://iclptech.in/data/courses.json").then(res => res.json());
  
  const paths = [];
  
  coursesData.categories.forEach((category) => {
    category.sub_categories.forEach((sub) => {
      paths.push({
        path: sub.path,
        courseName: sub.course_name
      });
    });
  });
  
  return paths;
}


