import { Check } from "lucide-react";

const benefits = [
  "Industry-focused curriculum",
  "Experienced trainers",
  "Hands-on practical sessions",
  "Real-time projects",
  "Career mentoring",
  "Interview preparation",
  "Certification",
  "Placement assistance",
  "Weekday & weekend batches",
  "Classroom & online options",
];

export default function HomeChennaiIntroduction() {
  return (
    <section
      className="relative isolate !overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-16 sm:!py-20 lg:!py-24"
      aria-labelledby="chennai-introduction-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="lg:border-l-4 lg:border-[#00a878]/30 lg:pl-8">
          <p className="mb-4 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#087f5b] shadow-sm">
            Learn With ICLP
          </p>
          <h2
            id="chennai-introduction-heading"
            className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl"
          >
            Software Training Institute in Chennai
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              ICLP Technologies helps students, graduates, working professionals and career changers build practical IT skills through structured software training in Chennai.
            </p>
            <p>
              Our programs are designed around practical learning, instructor guidance, projects and career preparation. Learners can choose from classroom and online training options depending on course availability and their preferred schedule.
            </p>
            <p>
              With Chennai being a major technology and IT-services hub, our training focuses on skills relevant to software development, testing, cloud computing, DevOps, data, cybersecurity and enterprise technologies.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#01377d]/10 border-t-4 border-t-[#00a878] bg-white p-6 shadow-xl shadow-[#01377d]/10 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#00a878]/10 blur-2xl" />
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <h3 className="text-2xl font-bold text-slate-900">Learn With ICLP</h3>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00a878] shadow-[0_0_0_5px_rgba(0,168,120,0.12)]" aria-hidden="true" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Benefits of learning with ICLP">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-[#00a878]/30 hover:bg-[#effcf6] motion-reduce:transition-none"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00a878]/15 text-[#087f5b] transition-colors duration-200 group-hover:bg-[#00a878] group-hover:text-white motion-reduce:transition-none">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
