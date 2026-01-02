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
      gradient: "from-blue-500 to-blue-600",
      glowColor: "blue"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Flexibility",
      description:
        "At ICLP TECHNOLOGIES, you get the ultimate flexibility. Classroom or online training? Early morning or late evening? Weekday or weekend? Regular Pace or Fast Track? - Choose whatever suits you best.",
      gradient: "from-cyan-600 to-cyan-700",
      glowColor: "cyan"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "LIVE Project",
      description:
        "Get the opportunity to work on real-time projects that will provide you with deep experience. Showcase your project experience and increase your chances of getting hired!",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "blue"
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: "Placement Support",
      description:
        "Tied-up & signed MOUs with over 3000+ small & medium-sized companies to support you with opportunities to kick-start & advance your career.",
      gradient: "from-[#01377d] to-blue-600",
      glowColor: "blue"
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Certification",
      description:
        "ICLP TECHNOLOGIES offers certification. Also, get ready to clear global certifications.",
      gradient: "from-cyan-600 to-blue-700",
      glowColor: "cyan"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "Affordable Fees",
      description:
        "At ICLP TECHNOLOGIES, the course fee is not only affordable, but you can also pay it in installments. Quality training at an affordable price is our motto.",
      gradient: "from-blue-600 to-cyan-700",
      glowColor: "blue"
    },
  ];


  return (
    <div className="relative py-20 lg:py-28 bg-gradient-to-br from-[#01377d] via-[#014a9f] to-[#01377d] overflow-hidden">
      <SEO
        title="Comprehensive Online Courses – Save Time, Money & Gain Knowledge with Expert Support"
        description="Enroll in our diverse range of online courses across various categories, including Programming (Java, Python, JavaScript), Data Science, AI, SAP, Oracle, and more. Save time with flexible learning schedules, save money with special discounts, and gain in-depth knowledge with expert instructors. Get personalized support with our user-friendly chatbot to help you with course selection, enrollment, and more. Start learning today and advance your career efficiently with our top-rated courses and resources!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />


      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Orbs */}
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-[15%] w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[20%] w-36 h-36 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[25%] w-44 h-44 bg-cyan-600/10 rounded-full blur-3xl"></div>
        
        {/* Subtle Particles */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
              Features
            </span>
          </h2>


          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-cyan-500/50"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-cyan-500/50 to-blue-500/50"></div>
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
              {/* Blue Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br from-${item.glowColor}-500/20 via-${item.glowColor}-500/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500`}></div>


              {/* Card */}
              <div className="relative h-full bg-[#01377d]/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-700 group-hover:border-blue-600 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20 rounded-tr-2xl group-hover:border-cyan-400/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/20 rounded-bl-2xl group-hover:border-blue-400/40 transition-colors duration-300"></div>


                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
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
