// app/course/[path]/page.tsx
import fs from "fs";
import path from "path";
import Head from "../../sap/[path]/Head";
import SapCourseDetailsPage from "./MainComponent";


// app/courses/sap/[path]/page.js
export async function generateStaticParams() {
  console.log('🔍 Starting SAP generateStaticParams...');
    const cacheBust = Date.now();

  const sapData = await fetch(`https://iclptech.in/data/sapCourses.json?t=${cacheBust}`)
    .then(res => {
      console.log('📡 Fetch response:', res.ok ? 'OK' : 'FAILED');
      return res.ok ? res.json() : { categories: [] };
    })
    .catch(err => {
      console.error('❌ Fetch error:', err);
      return { categories: [] };
    });

  console.log('📊 SAP Data categories:', sapData.categories?.length || 0);

  const paths = [];

  sapData.categories?.forEach((category, catIndex) => {
    console.log(`📂 Category ${catIndex}:`, category?.name);
    
    if (category?.name?.toLowerCase().includes('sap') && category.sub_categories) {
      console.log('✅ SAP category found, sub_categories:', category.sub_categories.length);
      
      category.sub_categories.forEach((course, courseIndex) => {
        if (course?.path) {
          paths.push({
            params: { path: course.path }
          });
          console.log(`➕ Added: ${course.path}`);
        }
      });
    }
  });

  console.log('📈 Total SAP paths generated:', paths.length);
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
