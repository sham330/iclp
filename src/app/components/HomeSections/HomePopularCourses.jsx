import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Landmark,
  TestTube2,
} from "lucide-react";

const popularCourses = [
  {
    title: "Python Training",
    description: "Learn Python programming, development concepts and practical application through projects.",
    icon: Code2,
    category: "Development",
    href: "/courses/programming",
  },
  {
    title: "Java Training",
    description: "Build Java programming skills and learn concepts used in modern application development.",
    icon: Code2,
    category: "Development",
    href: "/courses/programming/java-training-in-chennai",
  },
  {
    title: "Full Stack Development",
    description: "Learn frontend and backend technologies required to build complete web applications.",
    icon: Code2,
    category: "Development",
    href: "/courses/web-development/full-stack-developer-training-in-chennai",
  },
  {
    title: "AWS Training",
    description: "Build cloud skills with practical AWS concepts and hands-on learning.",
    icon: Cloud,
    category: "Cloud & DevOps",
    href: "/courses/cloud-computing-devops/aws-training-in-chennai",
  },
  {
    title: "DevOps Training",
    description: "Learn DevOps practices, tools and workflows used in modern software delivery.",
    icon: GitBranch,
    category: "Cloud & DevOps",
    href: "/courses/cloud-computing-devops/devops-training-in-chennai",
  },
  {
    title: "Software Testing",
    description: "Develop manual and automation testing skills through practical exercises.",
    icon: TestTube2,
    category: "Testing",
    href: "/courses/software-testing-quality-assurance",
  },
  {
    title: "Data Science",
    description: "Learn data analysis, Python, machine learning and practical data science concepts.",
    icon: BarChart3,
    category: "Data & AI",
    href: "/courses/data-science-artificial-intelligence/data-science-training-in-chennai",
  },
  {
    title: "Artificial Intelligence",
    description: "Develop foundational AI skills and understand practical applications of modern AI technologies.",
    icon: BrainCircuit,
    category: "Data & AI",
    href: "/courses/data-science-artificial-intelligence/artificial-intelligence-training-in-chennai",
  },
  {
    title: "SAP FICO",
    description: "Learn SAP Financial Accounting and Controlling concepts for enterprise environments.",
    icon: Landmark,
    category: "Enterprise",
    href: "/courses/sap-courses/sap-fico-training-in-chennai",
  },
  {
    title: "Oracle Training",
    description: "Build Oracle technology skills through structured instructor-led training.",
    icon: Database,
    category: "Enterprise",
    href: "/courses/oracle",
  },
];

function CourseCard({ title, description, icon: Icon, category, href }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878]/50 hover:shadow-xl hover:shadow-[#01377d]/10 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01377d] to-[#00a878] opacity-70" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#01377d] to-[#00a878] text-white shadow-md transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <span className="rounded-full border border-[#00a878]/30 bg-[#effcf6] px-3 py-1 text-xs font-semibold text-[#087f5b]">
          {category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#01377d]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

      <Link
        href={href}
        className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-[#01377d] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#00a878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-4 motion-reduce:transition-none"
        aria-label={`View ${title}`}
      >
        View Course
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function HomePopularCourses() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="popular-courses-heading"
    >
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
            Popular Courses
          </p>
          <h2 id="popular-courses-heading" className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
            Popular IT Courses in Chennai
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Learn the technologies companies are hiring for.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
