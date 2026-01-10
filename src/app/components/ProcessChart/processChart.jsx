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

const RoadmapNode = ({ icon: Icon, label, description, step, isHovered, onHover, onLeave }) => (
  <div 
    className="relative flex flex-col items-center group"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* Circular Node */}
    <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300
      ${isHovered
        ? "bg-gradient-to-br from-[#01377d] to-blue-600 shadow-lg shadow-blue-500/30 scale-110" 
        : "bg-white border-2 border-blue-200 hover:border-blue-400"
      }`}
    >
      {/* Step Number */}
      <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
        ${isHovered ? "bg-cyan-400 text-[#01377d]" : "bg-blue-100 text-blue-600"}
      `}>
        {step}
      </div>
      
      {/* Icon */}
      <Icon className={`w-10 h-10 transition-colors duration-300 ${isHovered ? "text-white" : "text-blue-600"}`} />
    </div>
    
    {/* Label */}
    <p className={`mt-4 text-sm font-semibold text-center max-w-[140px] transition-colors duration-300
      ${isHovered ? "text-[#01377d]" : "text-gray-700"}
    `}>
      {label}
    </p>

    {/* Tooltip on hover */}
    <div className="absolute top-full mt-2 w-64 bg-white border-2 border-blue-200 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function TrainingProcedure() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const steps = [
    { 
      icon: UserCheck, 
      label: "Enrollment",
      description: "Register for the program and complete onboarding to access learning resources."
    },
    { 
      icon: Presentation, 
      label: "Program Orientation",
      description: "Understand the course structure, goals, tools, and timelines."
    },
    { 
      icon: ClipboardCheck, 
      label: "Skill Evaluation",
      description: "Assess current knowledge to personalize the learning path."
    },
    { 
      icon: GraduationCap, 
      label: "Blended Training",
      description: "Learn through live sessions, hands-on practice, and recorded content."
    },
    { 
      icon: BarChart3, 
      label: "Progress Monitoring",
      description: "Track performance through assignments, assessments, and mentor feedback."
    },
    { 
      icon: BookOpen, 
      label: "Live Project Experience",
      description: "Gain real-world exposure through industry-based projects."
    },
    { 
      icon: FileCheck2, 
      label: "Final Evaluation",
      description: "Validate skills through technical and practical assessments."
    },
    { 
      icon: BadgeCheck, 
      label: "Certification",
      description: "Earn a professional certification on successful completion."
    },
    { 
      icon: Briefcase, 
      label: "Career Assistance",
      description: "Receive resume support, interview prep, and job guidance."
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 py-20 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#01377d] mb-3">
            ICLP's Training Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            Your journey from enrollment to employment
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:block">
          {/* Top Row - Steps 1-5 */}
          <div className="relative mb-20">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-blue-200" />
            <div className="relative flex justify-between items-start">
              {steps.slice(0, 5).map((step, index) => (
                <RoadmapNode 
                  key={index} 
                  icon={step.icon} 
                  label={step.label}
                  description={step.description}
                  step={index + 1}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
          
          {/* Bottom Row - Steps 6-9 */}
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-blue-200" />
            <div className="relative flex justify-between items-start">
              {[...steps.slice(5, 9)].reverse().map((step, index) => {
                const actualIndex = 8 - index;
                return (
                  <RoadmapNode 
                    key={actualIndex} 
                    icon={step.icon} 
                    label={step.label}
                    description={step.description}
                    step={actualIndex + 1}
                    isHovered={hoveredIndex === actualIndex}
                    onHover={() => setHoveredIndex(actualIndex)}
                    onLeave={() => setHoveredIndex(null)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Slider */}
        <div className="lg:hidden">
          <div className="relative flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-[#01377d] text-white rounded-full p-2 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="px-16">
              <div className="text-center">
                <RoadmapNode 
                  icon={steps[currentIndex].icon} 
                  label={steps[currentIndex].label}
                  description={steps[currentIndex].description}
                  step={currentIndex + 1}
                  isHovered={true}
                  onHover={() => {}}
                  onLeave={() => {}}
                />
                <p className="mt-6 text-sm text-gray-600 leading-relaxed px-4">
                  {steps[currentIndex].description}
                </p>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-[#01377d] text-white rounded-full p-2 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress */}
          <div className="mt-12">
            <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#01377d] to-blue-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
              />
            </div>
            <p className="text-center mt-3 text-sm text-gray-600 font-medium">
              Step {currentIndex + 1} of {steps.length}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#01377d] w-8" : "bg-blue-200 w-2"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}