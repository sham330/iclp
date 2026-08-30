"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Phone, ArrowRight } from "lucide-react";
import {
  UsersRound, FlaskConical, FolderKanban, BriefcaseBusiness,
  CalendarClock, BadgeCheck, GraduationCap, UserRound, RefreshCw, Route,
  MessageSquare, FileText, Video, Compass,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModalBooking = dynamic(() => import("@/app/components/ModalBooking/ModalBooking"), { ssr: false });

const trustStats = [
  { value: "50K+", label: "Learners Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Hiring Partners" },
  { value: "95%", label: "Placement Rate" },
];

const whyUs = [
  { title: "Industry-Focused Curriculum", desc: "Learn technology concepts aligned with practical software development and IT workflows.", icon: FlaskConical },
  { title: "Expert Trainers", desc: "Learn through structured sessions led by experienced trainers.", icon: UsersRound },
  { title: "Hands-On Projects", desc: "Apply concepts through practical assignments and project-based learning.", icon: FolderKanban },
  { title: "Career Preparation", desc: "Prepare for technical interviews, HR interviews and job applications.", icon: MessageSquare },
  { title: "Flexible Training", desc: "Choose available weekday, weekend, classroom or online batches.", icon: CalendarClock },
  { title: "Certification", desc: "Complete your program and receive applicable course certification.", icon: BadgeCheck },
];

const courses = [
  { name: "Python Training in Bangalore", desc: "Learn Python programming through structured concepts, exercises and practical projects.", path: "/courses/programming-courses/python-development-online-training", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80" },
  { name: "Java Training in Bangalore", desc: "Build Java programming skills for software development and application development roles.", path: "/courses/programming-courses/java-training-in-chennai", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
  { name: "Full Stack Development in Bangalore", desc: "Learn frontend and backend technologies to develop complete web applications.", path: "/courses/programming-courses/full-stack-developer-training-in-chennai", img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80" },
  { name: "AWS Training in Bangalore", desc: "Develop practical cloud computing skills with AWS services and concepts.", path: "/courses/cloud-devops-courses/aws-training-in-chennai", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80" },
  { name: "DevOps Training in Bangalore", desc: "Learn DevOps tools, practices, automation and software delivery workflows.", path: "/courses/cloud-devops-courses/devops-training-in-chennai", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80" },
  { name: "Software Testing Training in Bangalore", desc: "Develop skills in manual and automation testing with practical exercises.", path: "/courses/testing-courses/software-testing-training-in-chennai", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" },
  { name: "Data Science Training in Bangalore", desc: "Learn Python, data analysis, statistics and machine learning concepts.", path: "/courses/data-science-courses/data-science-training-in-chennai", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { name: "Artificial Intelligence Training in Bangalore", desc: "Understand AI concepts and practical applications used across modern technology.", path: "/courses/data-science-courses/artificial-intelligence-training-in-chennai", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" },
  { name: "SAP Training in Bangalore", desc: "Explore SAP FICO, SAP MM, SAP SD and SAP ABAP training.", path: "/courses/sap-courses", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Oracle Training in Bangalore", desc: "Develop Oracle technology skills through structured training.", path: "/courses/oracle-courses", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
];

const audiences = [
  { title: "Students", desc: "Build technology skills before entering the IT industry.", icon: GraduationCap },
  { title: "Graduates", desc: "Develop practical technical skills and improve job readiness.", icon: UserRound },
  { title: "Working Professionals", desc: "Upgrade your skills or move into another technology.", icon: BriefcaseBusiness },
  { title: "Career Switchers", desc: "Build a technology foundation for an IT career transition.", icon: RefreshCw },
];

const localities = [
  "Marathahalli", "Whitefield", "Electronic City", "HSR Layout",
  "BTM Layout", "Indiranagar", "Jayanagar", "Rajajinagar", "Hebbal", "Kalyan Nagar",
];

const careerSupport = [
  { label: "Resume Guidance", icon: FileText },
  { label: "Technical Interview Preparation", icon: MessageSquare },
  { label: "HR Interview Preparation", icon: UserRound },
  { label: "Mock Interviews", icon: Video },
  { label: "Project Guidance", icon: FolderKanban },
  { label: "Career Mentoring", icon: Compass },
  { label: "Job Opportunity Guidance", icon: BriefcaseBusiness },
];

const faqs = [
  { q: "Which software courses are popular in Bangalore?", a: "Python, Java, Full Stack Development, AWS, DevOps, Software Testing, Data Science, AI, SAP and Oracle are among the technology areas learners commonly explore." },
  { q: "Does ICLP offer software training in Bangalore?", a: "ICLP provides online instructor-led training for learners in Bangalore across a wide range of software and IT programs. Please contact us for current batch availability and training formats." },
  { q: "Does ICLP provide placement assistance?", a: "ICLP provides career and placement assistance such as interview preparation, resume guidance and career mentoring, subject to course and eligibility." },
  { q: "Can working professionals join?", a: "Yes, available weekday, weekend and online schedules are offered where applicable to suit working professionals." },
  { q: "Is online training available?", a: "Online instructor-led training is available for selected programs and batches." },
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

export default function BangalorePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedWhy, setSelectedWhy] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#014a9f]">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#00a878]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 lg:min-h-[88vh]">
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
              alt="IT training session at ICLP Technologies Bangalore"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#01377d]/80" />
            <div className="absolute bottom-10 left-8 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-2xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a878]/15 text-[#087f5b] text-xl font-bold">✓</span>
              <div>
                <p className="text-xs font-bold text-[#01377d]">Job-Oriented Training</p>
                <p className="text-[11px] text-slate-500">Bangalore&apos;s Tech Hub</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <p className="mb-4 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Bangalore&apos;s IT Training Destination
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Best Software Training Institute in Bangalore
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Build job-ready IT skills with industry-focused software training in Bangalore. ICLP Technologies offers practical training across software development, full stack development, cloud computing, DevOps, software testing, data science, AI, SAP and Oracle.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Learn through expert-led sessions, hands-on practice, project-based learning and career guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b] hover:shadow-xl">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> Talk to a Career Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="bg-[#01377d] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl font-bold text-[#00a878] sm:text-4xl">{value}</span>
                <span className="text-sm font-medium text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#01377d]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Why ICLP
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                Why Choose ICLP for Software Training in Bangalore?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                ICLP Technologies combines structured learning with practical training and career guidance to help you build skills for Bangalore&apos;s technology-driven workplace.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
                alt="Expert trainer at ICLP Technologies Bangalore"
                width={540}
                height={360}
                className="rounded-2xl object-cover shadow-xl ring-2 ring-[#01377d]/10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#00a878] px-5 py-3 text-white shadow-lg">
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
                  className={`group relative flex min-h-[200px] flex-col items-start overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] ${active ? "border-[#00a878] bg-[#effcf6] shadow-xl shadow-[#00a878]/15" : "border-slate-200 bg-white shadow-sm hover:border-[#01377d]/40 hover:shadow-xl"}`}>
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00a878] to-[#01377d] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 ${active ? "scale-105 bg-gradient-to-br from-[#00a878] to-[#01377d]" : "bg-gradient-to-br from-[#01377d] to-[#087f5b] group-hover:from-[#00a878] group-hover:to-[#01377d]"}`}>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
              Courses
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
              Popular Software Courses in Bangalore
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {courses.map(({ name, desc, path, img }) => (
              <Link key={name} href={path}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878] hover:shadow-xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={img} alt={name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-[#01377d] group-hover:text-[#00a878] transition-colors duration-200">{name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#087f5b]">
                    View Course <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IT CAREER IN BANGALORE ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Bangalore Tech Ecosystem
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                IT Career Training in Bangalore
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Bangalore is one of India&apos;s major technology and startup ecosystems, with strong activity across software development, cloud computing, SaaS, AI, data engineering and enterprise technology.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                ICLP&apos;s training programs connect learners with these technology and career intents through practical, job-oriented courses:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Software Development", "Cloud Computing", "DevOps", "Data Science", "AI", "Software Testing", "SAP", "Oracle", "Full Stack"].map((t) => (
                  <span key={t} className="rounded-full border border-[#00a878]/30 bg-[#effcf6] px-3 py-1 text-xs font-semibold text-[#087f5b]">{t}</span>
                ))}
              </div>
              <Link href="/courses"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#01377d] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#014a9f] hover:shadow-xl">
                Explore Bangalore IT Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Bangalore technology hub"
                width={640}
                height={440}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/60 to-transparent" />
              <p className="absolute bottom-4 left-5 text-lg font-bold text-white">Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7ff0c9]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7ff0c9]">
                <MapPin className="h-4 w-4" /> Bangalore Coverage
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Areas We Serve in Bangalore
              </h2>
              <p className="mt-5 text-base leading-relaxed text-blue-100">
                ICLP Technologies serves learners looking for software and IT training across Bangalore, including key technology and residential areas:
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {localities.map((loc) => (
                  <li key={loc} className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-[#00a878] hover:bg-white/20">
                    <MapPin className="h-4 w-4 shrink-0 text-[#00a878]" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                alt="Bangalore city technology district"
                width={580}
                height={420}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-white/10"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#00a878] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">10 Areas</p>
                <p className="text-xs text-white/80">Across Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students and professionals learning IT skills in Bangalore"
                width={580}
                height={640}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-[#01377d]/10"
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-[#00a878] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">50K+</p>
                <p className="text-xs text-white/80">Learners Trained</p>
              </div>
            </div>
            <div>
              <header className="mb-10">
                <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                  Who Can Join
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                  Who Can Join?
                </h2>
              </header>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {audiences.map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#00a878] hover:shadow-lg">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#01377d] to-[#087f5b] text-white shadow-md transition-all duration-300 group-hover:from-[#00a878] group-hover:to-[#01377d]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#01377d]">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER SUPPORT ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Career mentoring and placement support session"
                width={580}
                height={520}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-[#01377d]/10"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#01377d] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">95%</p>
                <p className="text-xs text-white/80">Placement Rate</p>
              </div>
            </div>
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Career Support
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl">
                Career Support in Bangalore
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                ICLP supports learners with structured career preparation:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {careerSupport.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition-colors hover:border-[#00a878]/30 hover:bg-[#effcf6]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00a878]/15 text-[#087f5b]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b]"
              >
                <Phone className="h-4 w-4" /> Book a Career Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STARTUP HUB BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#00a878] via-[#087f5b] to-[#01377d] py-14 sm:py-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                🚀 India&apos;s Silicon Valley
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Train in Bangalore — India&apos;s Startup Capital
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                Bangalore hosts 40%+ of India&apos;s tech startups and unicorns. Get trained with skills that Bangalore&apos;s top companies are actively hiring for.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                {["Startups", "MNCs", "Product Companies", "IT Services", "R&D Labs"].map((t) => (
                  <span key={t} className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#01377d] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                <Phone className="h-4 w-4" /> Book Free Demo
              </button>
              <Link href="/courses"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20">
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
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
              FAQ – Software Training Institute in Bangalore
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

      {/* ── MODAL ── */}
      {showModal && <ModalBooking onClose={() => setShowModal(false)} />}
    </div>
  );
}
