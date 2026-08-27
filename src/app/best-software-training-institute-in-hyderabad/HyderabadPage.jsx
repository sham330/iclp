"use client";

import { useState } from "react";
import { ChevronDown, Check, MapPin, Phone, ArrowRight } from "lucide-react";
import {
  UsersRound, FlaskConical, FolderKanban, BriefcaseBusiness,
  CalendarClock, BadgeCheck, GraduationCap, UserRound, RefreshCw, Route,
  MessageSquare, FileText, Video, Compass,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const trustStats = [
  { value: "50K+", label: "Learners Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Hiring Partners" },
  { value: "95%", label: "Placement Rate" },
];

const whyUs = [
  { title: "Practical IT Training", desc: "Learn concepts through practical exercises and technology-focused training.", icon: FlaskConical },
  { title: "Experienced Trainers", desc: "Learn from trainers with practical knowledge of the technologies they teach.", icon: UsersRound },
  { title: "Project-Based Learning", desc: "Apply your skills through guided projects and real-world scenarios.", icon: FolderKanban },
  { title: "Interview Preparation", desc: "Prepare for technical and HR interviews with structured guidance.", icon: MessageSquare },
  { title: "Flexible Batches", desc: "Choose from available weekday, weekend, classroom and online options.", icon: CalendarClock },
  { title: "Career Mentoring", desc: "Get guidance on technology selection, job preparation and career development.", icon: Compass },
];

const courses = [
  { name: "Python Training in Hyderabad", desc: "Build Python programming skills through structured training and practical projects.", path: "/courses/programming-courses/python-development-online-training", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80" },
  { name: "Java Training in Hyderabad", desc: "Learn Java programming concepts and application development fundamentals.", path: "/courses/programming-courses/java-online-training-in-chennai", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
  { name: "Full Stack Development in Hyderabad", desc: "Develop frontend and backend skills for modern web application development.", path: "/courses/programming-courses/full-stack-developer-online-training", img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80" },
  { name: "AWS Training in Hyderabad", desc: "Learn cloud concepts and AWS services through practical training.", path: "/courses/cloud-devops-courses/aws-training-in-chennai", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80" },
  { name: "DevOps Training in Hyderabad", desc: "Develop knowledge of DevOps tools, automation and modern software delivery.", path: "/courses/cloud-devops-courses/devops-training-in-chennai", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80" },
  { name: "Software Testing Training in Hyderabad", desc: "Learn manual and automation testing concepts through practical exercises.", path: "/courses/testing-courses/software-testing-training-in-chennai", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" },
  { name: "Data Science Training in Hyderabad", desc: "Build skills in Python, data analysis and machine learning.", path: "/courses/data-science-courses/data-science-training-in-chennai", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { name: "Artificial Intelligence Training in Hyderabad", desc: "Learn AI fundamentals and explore practical applications of artificial intelligence.", path: "/courses/data-science-courses/artificial-intelligence-training-in-chennai", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" },
  { name: "SAP Training in Hyderabad", desc: "Explore SAP FICO, SAP MM, SAP SD and SAP ABAP training.", path: "/courses/sap-courses", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Oracle Training in Hyderabad", desc: "Develop Oracle technology skills through structured instructor-led training.", path: "/courses/oracle-courses", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
];

const audiences = [
  { title: "For Students", desc: "Build technology skills while completing your education and gain practical exposure before entering the job market.", icon: GraduationCap },
  { title: "For Graduates", desc: "Develop job-oriented technical skills and prepare for interviews and entry-level IT opportunities.", icon: UserRound },
  { title: "For Working Professionals", desc: "Upgrade your existing skills or learn a new technology to support your career progression.", icon: BriefcaseBusiness },
  { title: "For Career Changers", desc: "Build a structured technology foundation and explore opportunities to transition into IT.", icon: RefreshCw },
  { title: "For Non-IT Professionals", desc: "Choose a suitable technology learning path based on your existing background and career goals.", icon: Route },
];

const localities = ["Ameerpet", "HITEC City", "Gachibowli", "Madhapur", "Kukatpally", "Kondapur", "Banjara Hills", "Secunderabad", "Financial District"];

const careerSupport = [
  { label: "Resume Preparation", icon: FileText },
  { label: "Interview Preparation", icon: MessageSquare },
  { label: "Mock Interviews", icon: Video },
  { label: "Project Guidance", icon: FolderKanban },
  { label: "Career Mentoring", icon: Compass },
  { label: "Job Opportunity Support", icon: BriefcaseBusiness },
];

const faqs = [
  { q: "What IT courses does ICLP offer in Hyderabad?", a: "ICLP offers technology training across programming, Full Stack Development, cloud and DevOps, software testing, data, AI, SAP, Oracle and other IT areas." },
  { q: "Which IT course should I choose?", a: "Your choice should depend on your education, existing skills, career goals and preferred technology. ICLP counsellors can help you identify an appropriate learning path." },
  { q: "Does ICLP provide placement assistance?", a: "ICLP provides career and placement assistance such as resume guidance, interview preparation, mock interviews and career mentoring, subject to the relevant course and eligibility." },
  { q: "Are classroom courses available in Hyderabad?", a: "Please contact ICLP directly for current classroom batch availability in Hyderabad." },
  { q: "Are online courses available?", a: "Selected programs can be offered through online instructor-led training depending on current batches." },
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

export default function HyderabadPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedWhy, setSelectedWhy] = useState(0);

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
              alt="IT training session at ICLP Technologies Hyderabad"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#01377d]/80" />
            <div className="absolute bottom-10 left-8 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-2xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a878]/15 text-[#087f5b] text-xl font-bold">✓</span>
              <div>
                <p className="text-xs font-bold text-[#01377d]">Job-Oriented Training</p>
                <p className="text-[11px] text-slate-500">Hyderabad&apos;s IT Hub</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <p className="mb-4 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Hyderabad&apos;s IT Training Destination
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Best Software Training Institute in Hyderabad
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Build practical, job-ready IT skills with ICLP Technologies. Explore software development, Full Stack Development, Python, Java, AWS, DevOps, Software Testing, Data Science, Artificial Intelligence, SAP and Oracle training.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Learn through expert-led sessions, hands-on practice, projects and career-focused guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b] hover:shadow-xl">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20">
                <Phone className="h-4 w-4" /> Talk to a Career Mentor
              </Link>
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
                Why Choose ICLP Technologies in Hyderabad?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                ICLP Technologies combines structured learning with practical training and career guidance to help you build skills for today&apos;s technology-driven workplace.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
                alt="Expert trainer at ICLP Technologies Hyderabad"
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
              Popular IT Courses in Hyderabad
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {courses.map(({ name, desc, path, img }) => (
              <Link key={name} href={path}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878] hover:shadow-xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
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

      {/* ── BUILD YOUR IT CAREER ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-[#effcf6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
                Hyderabad Tech Ecosystem
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                Build Your IT Career in Hyderabad
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Hyderabad has developed into a major technology and enterprise hub, with established IT activity around areas such as HITEC City, Gachibowli, Madhapur and the Financial District.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                ICLP&apos;s training programs help learners build practical skills across:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Software Development", "Cloud Computing", "DevOps", "Data Science", "AI", "Software Testing", "Cybersecurity", "SAP", "Oracle"].map((t) => (
                  <span key={t} className="rounded-full border border-[#00a878]/30 bg-[#effcf6] px-3 py-1 text-xs font-semibold text-[#087f5b]">{t}</span>
                ))}
              </div>
              <Link href="/courses"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#01377d] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#014a9f] hover:shadow-xl">
                Explore Hyderabad IT Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Hyderabad HITEC City technology hub"
                width={640}
                height={440}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/60 to-transparent" />
              <p className="absolute bottom-4 left-5 text-lg font-bold text-white">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students and professionals learning IT skills in Hyderabad"
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
                  Who Is This For
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
                  Software Training for Every Career Stage
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

      {/* ── LOCATIONS ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7ff0c9]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7ff0c9]">
                <MapPin className="h-4 w-4" /> Hyderabad Coverage
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Areas We Serve in Hyderabad
              </h2>
              <p className="mt-5 text-base leading-relaxed text-blue-100">
                ICLP Technologies serves learners looking for software and IT training across Hyderabad, including key technology hubs:
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
                alt="Hyderabad city technology district"
                width={580}
                height={420}
                className="w-full rounded-3xl object-cover shadow-2xl ring-2 ring-white/10"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#00a878] px-5 py-3 text-white shadow-lg">
                <p className="text-lg font-bold">9 Areas</p>
                <p className="text-xs text-white/80">Across Hyderabad</p>
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
                Career Support
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Prepare for the job-search process with structured career support from ICLP:
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
              <Link href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00a878] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#087f5b]">
                <Phone className="h-4 w-4" /> Talk to a Career Mentor
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
              FAQ – Software Training Institute in Hyderabad
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
    </div>
  );
}
