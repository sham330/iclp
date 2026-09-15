import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import CourseDetails from "../Maincomponent";
import BangaloreMainComponent from "../BangaloreMainComponent";
import HyderabadMainComponent from "../HyderabadMainComponent";
import PuneMainComponent from "../PuneMainComponent";
import Head from "../Head";

const CITY_FILES = {
  bangalore: "bangalore.json",
  hyderabad: "hyderabad.json",
  pune: "pune.json",
};

function loadCityData(city) {
  const filePath = path.join(process.cwd(), "public/data", CITY_FILES[city]);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function generateStaticParams() {
  const coursesData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "public/data/courses.json"), "utf-8")
  );

  const params = [];

  // Chennai courses
  for (const category of coursesData.categories) {
    for (const sub of category.sub_categories || []) {
      params.push({ path: category.path, coursePath: sub.path });
    }
  }

  // City courses
  for (const [, file] of Object.entries(CITY_FILES)) {
    const filePath = path.join(process.cwd(), "public/data", file);
    if (!fs.existsSync(filePath)) continue;
    const cityData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    for (const course of cityData) {
      params.push({ path: course.category, coursePath: course.path });
    }
  }

  return params;
}

export default async function NestedCourseDetailsPage({ params }) {
  const resolvedParams = await params;
  const categoryPath = resolvedParams?.path;
  const coursePath = resolvedParams?.coursePath;
  if (!coursePath) redirect("/courses/");

  // Detect city from slug
  const cityMatch = coursePath.match(/-in-([a-z]+)$/);
  const city = cityMatch?.[1];

  // City page (non-chennai)
  if (city && CITY_FILES[city]) {
    const cityData = loadCityData(city);
    const foundCourse = cityData?.find((c) => c.path === coursePath);
    if (!foundCourse) redirect("/courses/");
    const canonical = `https://iclptech.in/courses/${categoryPath}/${coursePath}/`;
    const CityComponent = city === "pune" ? PuneMainComponent : city === "hyderabad" ? HyderabadMainComponent : BangaloreMainComponent;
    return (
      <>
        <Head course={foundCourse} canonicalUrl={canonical} />
        <CityComponent course={foundCourse} />
      </>
    );
  }

  // Chennai (default) flow
  const coursesData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "public/data/courses.json"), "utf-8")
  );
  let foundCourse = null;
  for (const category of coursesData.categories) {
    const match = (category.sub_categories || []).find((sub) => sub.path === coursePath);
    if (match) { foundCourse = match; break; }
  }
  if (!foundCourse) redirect("/courses/");

  const canonical = `https://iclptech.in/courses/${categoryPath}/${coursePath}/`;
  return (
    <>
      <Head course={foundCourse} canonicalUrl={canonical} />
      <CourseDetails course={foundCourse} />
    </>
  );
}
