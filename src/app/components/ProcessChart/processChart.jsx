import { MessageCircle, ClipboardList, GraduationCap, FileText, Briefcase, Award } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Career Consultation",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Course Enrollment",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Training & Mentorship",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Resume + Interview Prep",
    icon: FileText,
  },
  {
    number: "05",
    title: "Placement Assist",
    icon: Briefcase,
  },
  {
    number: "06",
    title: "Certification",
    icon: Award,
  },
]

export default function HexagonRoadmap() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Program <span className="">Roadmap</span>
        </h2>
        <p className="text-center text-slate-300 mb-16 text-lg">
          Your journey to success, step by step
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative w-72 h-72 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                  <div className="w-12 h-12 mb-4 bg-blue-500  rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-shadow">
                    {step.number}
                  </div>

                  <Icon className="w-8 h-8 text-blue-600 mb-3 group-hover:text-purple-600 transition-colors" />

                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}