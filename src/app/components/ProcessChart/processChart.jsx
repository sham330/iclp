"use client";
import { useState } from "react"
import {
  UserCheck,
  ClipboardCheck,
  BookOpen,
  GraduationCap,
  Presentation,
  BarChart3,
  FileCheck2,
  BadgeCheck,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from "lucide-react"


const Hex = ({ icon: Icon, label, active = false }) => (
  <div
    className={`relative w-44 h-48 flex flex-col items-center justify-center text-center p-4 flex-shrink-0 cursor-pointer
      ${active ? "bg-[#7c83ff] text-white shadow-2xl shadow-[#7c83ff]/50" : "bg-[#f2f2f2] text-gray-600"}
      transition-all duration-500 ease-out
      hover:scale-110 hover:-translate-y-2 hover:shadow-2xl
      ${!active && "hover:bg-gradient-to-br hover:from-[#7c83ff] hover:to-[#5b61ff] hover:text-white"}
      hover:rotate-2
      group
    `}
    style={{
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
    }}
  >
    {/* Glow effect overlay */}
    <div 
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
        ${active ? "bg-[#7c83ff]" : "bg-[#7c83ff]"}
      `}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        zIndex: -1
      }}
    />
    
    <Icon 
      className={`w-10 h-10 mb-2 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12
        ${active ? "text-white" : "text-gray-500 group-hover:text-white"}
      `} 
    />
    <p className={`font-semibold text-xs leading-tight px-2 transition-all duration-300
      ${!active && "group-hover:text-white"}
    `}>
      {label}
    </p>
    
    {/* Shimmer effect */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
        animation: "shimmer 2s infinite"
      }}
    />
  </div>
)


export default function TrainingProcedure() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const steps = [
    { icon: UserCheck, label: "1. Joining", active: true },
    { icon: ClipboardCheck, label: "2. Assessment", active: false },
    { icon: BookOpen, label: "3. Course Overview", active: false },
    { icon: GraduationCap, label: "4. Hybrid Learning", active: false },
    { icon: Presentation, label: "5. Working On Live Projects", active: false },
    { icon: BarChart3, label: "6. Performance Trackers", active: false },
    { icon: FileCheck2, label: "7. Examination", active: false },
    { icon: BadgeCheck, label: "8. Certification", active: false },
    { icon: Briefcase, label: "9. Job Assistance", active: false }
  ]


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length)
  }


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length)
  }


  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      
      <section className="bg-white py-20 w-full overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-16 text-center">
            ICLP&apos;s Training Procedure
          </h2>


          {/* Desktop: Single Line */}
          <div className="hidden lg:flex gap-6 justify-center items-center flex-wrap">
            {steps.map((step, index) => (
              <Hex key={index} icon={step.icon} label={step.label} active={step.active} />
            ))}
          </div>


          {/* Mobile: Slider */}
          <div className="lg:hidden relative">
            <div className="flex justify-center items-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>


              <div className="overflow-hidden w-full max-w-xs mx-12">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {steps.map((step, index) => (
                    <div key={index} className="w-full flex justify-center px-4">
                      <Hex icon={step.icon} label={step.label} active={index === currentIndex} />
                    </div>
                  ))}
                </div>
              </div>


              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>


            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? "bg-[#7c83ff] w-8" : "bg-gray-300 w-2 hover:bg-[#7c83ff]/50"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
