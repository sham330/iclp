import React from "react";

const ProgramRoadmap = () => {
  const steps = [
    {
      number: "01",
      title: "Career Consultation",
      points: [
        "Free one-on-one counseling",
        "Identifying the right IT course based on interest & background",
      ],
      icon: "💬",
    },
    {
      number: "02",
      title: "Course Enrollment",
      points: [
        "Flexible course plans (Weekend/Weekday/Online)",
        "Language options available",
      ],
      icon: "📝",
    },
    {
      number: "03",
      title: "Training & Mentorship",
      points: [
        "Hands-on training by industry experts",
        "Real-time project guidance",
        "Personalized doubt-clearing sessions",
      ],
      icon: "👨‍🏫",
    },
    {
      number: "04",
      title: "Resume + Interview Prep",
      points: [
        "Professional resume building",
        "Mock interviews & HR grooming",
        "Job-specific profile customization",
      ],
      icon: "📄",
    },
    {
      number: "05",
      title: "Placement Assist",
      points: [
        "100% placement assistance",
        "Interview scheduling with partnered companies",
        "Support until placement confirmation",
      ],
      icon: "💼",
    },
    {
      number: "06",
      title: "Certification",
      points: ["ISO-certified course completion certificate"],
      icon: "🏆",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 py-16 px-4 relative overflow-hidden">
      {/* Subtle Christmas decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">❄️</div>
      <div className="absolute top-32 right-20 text-5xl opacity-10">🎄</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-10">⛄</div>
      <div className="absolute bottom-40 right-16 text-6xl opacity-10">❄️</div>

      <div className="max-w-7xl mx-auto relative z-10 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Program <span className="text-red-600">Roadmap</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Your journey to success, step by step 🎄
        </p>

        {/* Desktop Layout - Zigzag */}
        <div className="hidden md:block">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Step Card */}
                <div className="flex-1">
                  <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {step.number}
                      </div>
                      <span className="text-4xl">{step.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 flex-1">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-500 mt-1">🎁</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-16 bg-gradient-to-b from-red-300 to-green-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {step.number}
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-red-500 mt-0.5">🎁</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-300 to-green-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramRoadmap;