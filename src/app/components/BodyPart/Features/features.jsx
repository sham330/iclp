import React from "react";
import SEO from "../../SEO/SEO";
import {
  FaChalkboardTeacher,
  FaClock,
  FaTools,
  FaBriefcase,
  FaCertificate,
  FaMoneyBillWave,
} from "react-icons/fa";

const Features = () => {
  const data = [
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Real-Time Experts as Trainers",
      description:
        "At ICLP, you will learn from industry experts eager to share their knowledge with learners. You will also get personally mentored by the Experts.",
      gradient: "from-emerald-500 to-emerald-600",
      glowColor: "emerald"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Flexibility",
      description:
        "At ICLP TECHNOLOGIES, you get the ultimate flexibility. Classroom or online training? Early morning or late evening? Weekday or weekend? Regular Pace or Fast Track? - Choose whatever suits you best.",
      gradient: "from-red-600 to-red-700",
      glowColor: "red"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "LIVE Project",
      description:
        "Get the opportunity to work on real-time projects that will provide you with deep experience. Showcase your project experience and increase your chances of getting hired!",
      gradient: "from-amber-500 to-amber-600",
      glowColor: "amber"
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: "Placement Support",
      description:
        "Tied-up & signed MOUs with over 3000+ small & medium-sized companies to support you with opportunities to kick-start & advance your career.",
      gradient: "from-red-500 to-red-600",
      glowColor: "red"
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Certification",
      description:
        "ICLP TECHNOLOGIES offers certification. Also, get ready to clear global certifications.",
      gradient: "from-emerald-600 to-emerald-700",
      glowColor: "emerald"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "Affordable Fees",
      description:
        "At ICLP TECHNOLOGIES, the course fee is not only affordable, but you can also pay it in installments. Quality training at an affordable price is our motto.",
      gradient: "from-amber-600 to-amber-700",
      glowColor: "amber"
    },
  ];

  return (
    <div className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <SEO
        title="Comprehensive Online Courses – Save Time, Money & Gain Knowledge with Expert Support"
        description="Enroll in our diverse range of online courses across various categories, including Programming (Java, Python, JavaScript), Data Science, AI, SAP, Oracle, and more. Save time with flexible learning schedules, save money with special discounts, and gain in-depth knowledge with expert instructors. Get personalized support with our user-friendly chatbot to help you with course selection, enrollment, and more. Start learning today and advance your career efficiently with our top-rated courses and resources!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />

      {/* Subtle Christmas Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Orbs */}
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-[15%] w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[20%] w-36 h-36 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[25%] w-44 h-44 bg-red-600/10 rounded-full blur-3xl"></div>
        
        {/* Subtle Snow Particles */}
        <div className="absolute top-16 left-[25%] w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-[60%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-28 right-[20%] w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-[40%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Elegant Top Border */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-400 to-emerald-400">
              Features
            </span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-500/50 to-amber-500/50"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-amber-500/50 to-emerald-500/50"></div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Discover what makes ICLP TECHNOLOGIES your ideal learning partner
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Festive Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br from-${item.glowColor}-500/20 via-${item.glowColor}-500/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-700 group-hover:border-slate-600 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-400/20 rounded-tr-2xl group-hover:border-amber-400/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-400/20 rounded-bl-2xl group-hover:border-red-400/40 transition-colors duration-300"></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Bottom Border */}
    </div>
  );
};

export default Features;
