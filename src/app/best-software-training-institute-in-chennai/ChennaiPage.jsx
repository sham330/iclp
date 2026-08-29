"use client";

import { useState } from "react";
import { ChevronDown, Check, MapPin, Phone, ArrowRight } from "lucide-react";
import {
  UsersRound, FlaskConical, FolderKanban, BriefcaseBusiness,
  CalendarClock, BadgeCheck, GraduationCap, UserRound, RefreshCw, Route,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModalBooking = dynamic(() => import("@/app/components/ModalBooking/ModalBooking"), { ssr: false });

// ── DATA ──────────────────────────────────────────────────────────────────────

const trustStats = [
  { value: "50K+", label: "Learners" },
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Hiring Partners" },
  { value: "95%", label: "Placement Rate" },
];

const whyUs = [
  { title: "Industry-Experienced Trainers", desc: "Learn from experienced trainers who explain concepts through practical examples and technology-focused learning.", icon: UsersRound },
  { title: "Practical, Hands-On Training", desc: "Go beyond theory with assignments, technical exercises and practical learning activities.", icon: FlaskConical },
  { title: "Real-Time Project Experience", desc: "Apply your knowledge through project-based learning and develop experience you can discuss during interviews.", icon: FolderKanban },
  { title: "Career Guidance", desc: "Get support with resume preparation, interview preparation, mock interviews and career planning.", icon: BriefcaseBusiness },
  { title: "Flexible Learning Options", desc: "Explore available classroom, online, weekday and weekend training options based on your course and batch.", icon: CalendarClock },
  { title: "Certification", desc: "Complete your selected training program and receive applicable course certification.", icon: BadgeCheck },
];

const courses = [
  { name: "Python Training in Chennai", desc: "Learn Python programming fundamentals, application development concepts and practical programming through structured training and projects.", path: "/courses/programming-courses/python-development-online-training", cta: "View Python Course", img: "/CourseDetails/Python.jpg" },
  { name: "Java Training in Chennai", desc: "Build Java programming skills and understand concepts used in modern software and application development.", path: "/courses/programming-courses/java-online-training-in-chennai", cta: "View Java Course", img: "/Java CLH.png" },
  { name: "Full Stack Development Training in Chennai", desc: "Learn frontend and backend technologies required to develop complete web applications.", path: "/courses/programming-courses/full-stack-developer-online-training", cta: "View Full Stack Course", img: "/course.jpg" },
  { name: "AWS Training in Chennai", desc: "Build cloud computing knowledge with practical AWS concepts, services and hands-on learning.", path: "/courses/cloud-devops-courses/aws-training-in-chennai", cta: "View AWS Course", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80" },
  { name: "DevOps Training in Chennai", desc: "Learn DevOps practices, tools and workflows used for modern software development and deployment.", path: "/courses/cloud-devops-courses/devops-training-in-chennai", cta: "View DevOps Course", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80" },
  { name: "Software Testing Training in Chennai", desc: "Develop manual and automation testing skills with practical testing exercises and project exposure.", path: "/courses/testing-courses/software-testing-training-in-chennai", cta: "View Testing Courses", img: "/blog-java.png" },
  { name: "Data Science Training in Chennai", desc: "Learn Python, data analysis, machine learning and practical data science concepts.", path: "/courses/data-science-courses/data-science-training-in-chennai", cta: "View Data Science Course", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { name: "Artificial Intelligence Training in Chennai", desc: "Develop foundational AI knowledge and understand how artificial intelligence is applied to modern business and technology.", path: "/courses/data-science-courses/artificial-intelligence-training-in-chennai", cta: "View AI Course", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" },
  { name: "SAP Training in Chennai", desc: "Explore SAP training programs including SAP FICO, SAP MM, SAP SD and SAP ABAP.", path: "/courses/sap-courses", cta: "View SAP Courses", img: "/sap-courses.jpg" },
  { name: "Oracle Training in Chennai", desc: "Develop Oracle technology skills through structured instructor-led training.", path: "/courses/oracle-courses", cta: "View Oracle Courses", img: "/oracle-integration.png" },
];

const audiences = [
  { title: "For Students", desc: "Build technology skills while completing your education and gain practical exposure before entering the job market.", icon: GraduationCap },
  { title: "For Graduates", desc: "Develop job-oriented technical skills and prepare for interviews and entry-level IT opportunities.", icon: UserRound },
  { title: "For Working Professionals", desc: "Upgrade your existing skills or learn a new technology to support your career progression.", icon: BriefcaseBusiness },
  { title: "For Career Changers", desc: "Build a structured technology foundation and explore opportunities to transition into IT.", icon: RefreshCw },
  { title: "For Non-IT Professionals", desc: "Choose a suitable technology learning path based on your existing background and career goals.", icon: Route },
];

const localities = ["T. Nagar", "Anna Nagar", "Adyar", "Mylapore", "Nungambakkam", "Guindy", "Velachery", "OMR", "Sholinganallur", "Porur", "Tambaram", "Perambur", "Pallavaram"];

const careerSupport = ["Resume preparation", "Interview preparation", "Mock interviews", "Project guidance", "Technical assessments", "Career mentoring", "Job opportunity guidance"];

const faqs = [
  { q: "Which is the best software training institute in Chennai?", a: "ICLP Technologies offers software and IT training across development, testing, cloud, DevOps, data, cybersecurity, SAP and Oracle, with practical learning and career support." },
  { q: "What IT courses are available in Chennai?", a: "Courses include Python, Java, Full Stack Development, AWS, DevOps, Software Testing, Data Science, Artificial Intelligence, SAP, Oracle and other technology programs." },
  { q: "Does ICLP provide placement assistance?", a: "ICLP provides career and placement assistance such as interview preparation, resume guidance, mock interviews and career mentoring, subject to the applicable course and eligibility." },
  { q: "Does ICLP offer classroom training in Chennai?", a: "Classroom training is available for applicable courses and batches. Contact ICLP for current location and batch availability." },
  { q: "Are online IT courses available?", a: "Online instructor-led training is available for selected programs and batches." },
  { q: "Can working professionals join ICLP?", a: "Yes. Working professionals can enquire about available weekday, weekend and online training schedules." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ChennaiPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedWhy, setSelectedWhy] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#01377d] via-[#014a9f] to-[#01377d] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#00a878]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Chennai&apos;s IT Training Destination
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Best Software Training Institute in Chennai
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                Build practical, job-ready technology skills with ICLP Technologies. Choose from software development, full stack development, Python, Java, cloud computing, DevOps, software testing, cybersecurity, data science, SAP and Oracle training.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Learn through expert-led training, hands-on practice, real-time projects and structured career support designed to help you build skills for today&apos;s technology-driven workplace.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/courses" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b] hover:shadow-xl">
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20">
                  <Phone className="h-4 w-4" /> Talk to a Career Mentor
                </button>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl" />
              <Image
                src="/new-hero.jpg"
                alt="Students training at ICLP Technologies Chennai"
                width={620}
                height={440}
                className="relative rounded-3xl object-cover shadow-2xl ring-4 ring-white/20"
                priority
              />
              {/* floating badge */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a878]/15 text-[#087f5b] text-xl font-bold">✓</span>
                <div>
                  <p className="text-xs font-bold text-[#01377d]">95% Placement Rate</p>
                  <p className="text-[11px] text-slate-500">Verified by learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl font-bold text-[#01377d] sm:text-4xl">{value}</span>
                <span className="text-sm font-medium text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* header row with image */}
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Why ICLP
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                Why Choose ICLP Technologies in Chennai?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Choosing the right software training institute is an important step toward developing a successful IT career. ICLP Technologies combines structured learning with practical training and career guidance.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/trainer1.jpg"
                alt="Expert trainer at ICLP Technologies"
                width={540}
                height={360}
                className="rounded-2xl object-cover shadow-xl ring-2 ring-[#01377d]/10"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#01377d] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">15+ Years</p>
                <p className="text-xs text-white/80">Training Experience</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyUs.map(({ title, desc, icon: Icon }, i) => {
              const active = selectedWhy === i;
              return (
                <button key={title} type="button" onClick={() => setSelectedWhy(i)}
                  className={`group relative flex min-h-[220px] flex-col items-start overflow-hidden rounded-2xl border bg-white p-6 text-left shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] ${active ? "border-[#00a878] shadow-xl shadow-[#00a878]/15" : "border-slate-200 hover:border-[#01377d]/40 hover:shadow-xl"}`}>
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01377d] to-[#00a878] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl text-white shadow-md transition-all duration-300 ${active ? "scale-105 bg-gradient-to-br from-[#01377d] to-[#00a878]" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span className={`mt-5 text-lg font-bold transition-colors duration-200 ${active ? "text-[#01377d]" : "text-slate-900 group-hover:text-[#01377d]"}`}>{title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POPULAR COURSES ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
              Courses
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
              Popular IT Courses in Chennai
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map(({ name, desc, path, cta }) => (
              <div key={name} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#01377d]/40 hover:shadow-xl">
                <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#01377d] to-[#00a878] opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="text-base font-bold text-[#01377d]">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                <Link href={path} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#087f5b] transition-colors hover:text-[#01377d]">
                  {cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <header className="mb-10">
                <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                  Who Is This For
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                  Software Training for Different Career Goals
                </h2>
              </header>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {audiences.map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00a878] hover:shadow-xl">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#01377d] to-[#087f5b] text-white shadow-md transition-all duration-300 group-hover:from-[#00a878] group-hover:to-[#01377d]">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-[#01377d]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students and professionals learning software skills"
                width={580}
                height={680}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-[#01377d]/10"
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-[#00a878] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">50K+</p>
                <p className="text-xs text-white/80">Learners Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="relative overflow-hidden bg-[#01377d] py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Serving Chennai
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Software Training Across Chennai
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            ICLP Technologies serves learners looking for software and IT training across Chennai. Learners may come from areas including:
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {localities.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[#00a878]" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILD YOUR IT CAREER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Chennai city IT hub skyline"
                width={640}
                height={420}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/60 to-transparent" />
              <p className="absolute bottom-4 left-5 text-lg font-bold text-white">Chennai, Tamil Nadu</p>
            </div>
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Chennai Tech Ecosystem
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                Build Your IT Career in Chennai
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Chennai has a strong technology ecosystem spanning IT services, software development, SaaS, fintech, engineering technology and enterprise solutions. ICLP Technologies helps learners develop practical skills across software development, testing, cloud computing, DevOps, data, cybersecurity and enterprise technologies.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether you&apos;re beginning your IT journey or looking to upgrade your existing skills, choose a learning path aligned with your career goals.
              </p>
              <Link href="/courses" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#01377d] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#014a9f] hover:shadow-xl">
                Explore IT Courses in Chennai <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER SUPPORT ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-3xl border border-[#01377d]/10 border-t-4 border-t-[#00a878] bg-white p-8 shadow-xl shadow-[#01377d]/10 sm:p-12">
              <header className="mb-8">
                <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                  Career Support
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl">
                  Chennai Career Support
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Learning technology is only one part of becoming job-ready. ICLP provides career-focused support such as:
                </p>
              </header>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {careerSupport.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-[#00a878]/30 hover:bg-[#effcf6]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00a878]/15 text-[#087f5b]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b]">
                  <Phone className="h-4 w-4" /> Talk to a Career Mentor
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Career mentoring and placement support session"
                width={580}
                height={600}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-[#01377d]/10"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#01377d] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">95%</p>
                <p className="text-xs text-white/80">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
              Need to Know
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
              FAQ – Software Training Institute in Chennai
            </h2>
          </header>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openFaq === i;
              return (
                <article key={q} className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00a878] shadow-lg shadow-[#00a878]/10" : "border-slate-200 shadow-sm hover:border-[#01377d]/30"}`}>
                  <h3>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left text-base font-bold text-slate-900 transition-colors hover:text-[#01377d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00a878] sm:px-6 sm:text-lg">
                      <span>{q}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a878]/10 text-[#087f5b] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#00a878] text-white" : ""}`}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-slate-100 px-5 py-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">{a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {showModal && <ModalBooking onClose={() => setShowModal(false)} />}
    </div>
  );
}
