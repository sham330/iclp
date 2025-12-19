import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RelatedCoursesSlider = ({ currentCourseName = "", courseType = "all" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // All courses with categories
  const allCourses = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "R Programming", category: "Programming" },
    { name: "JavaScript", category: "Web Dev" },
    { name: "PHP", category: "Web Dev" },
    { name: "Full Stack", category: "Web Dev" },
    { name: "Node.js", category: "Web Dev" },
    { name: "ReactJS", category: "Frontend" },
    { name: "Microsoft Azure", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "DevOps", category: "DevOps" },
    { name: "Cyber Security", category: "Security" },
    { name: "Ethical Hacking", category: "Security" },
    { name: "Selenium", category: "Testing" },
    { name: "Manual Testing Course", category: "Testing" },
    { name: "JMeter Course", category: "Testing" },
    { name: "ETL Testing", category: "Testing" },
    { name: "LoadRunner", category: "Testing" },
    { name: "SoapUI", category: "Testing" },
    { name: "Data Science Course", category: "Data Science" },
    { name: "Artificial Intelligence", category: "AI/ML" },
    { name: "Digital Marketing", category: "Marketing" },
    { name: "Excel", category: "Office" },
    { name: "HTML", category: "Web Dev" },
    { name: "UI and UX", category: "Design" },
    { name: "Salesforce", category: "CRM" },
    { name: "C Sharp", category: "Programming" },
    { name: "UNIX SHELL Scripting", category: "DevOps" },
    { name: "Workday HCM", category: "HR" },
    { name: "Salesforce Online Training", category: "CRM" },
    { name: "Salesforce Developer", category: "CRM" },
    { name: "Azure DevOps", category: "DevOps" },
    { name: "Angular", category: "Frontend" },
    { name: "WordPress", category: "CMS" },
    { name: "CSS Online", category: "Web Dev" },
    { name: "Data Science With Python", category: "Data Science" },
    { name: "Machine Learning with Python", category: "AI/ML" },
    { name: "Machine Learning using R", category: "AI/ML" },
    { name: "MySQL", category: "Database" },
    { name: "SQL with PHP", category: "Database" },
    { name: "Microsoft Dynamics 365", category: "ERP" },
    { name: "Microsoft Excel", category: "Office" },
    { name: "Excel Macros and VBA", category: "Office" },
    { name: "jQuery", category: "Web Dev" },
  ];

  const filteredCourses = allCourses
    .filter((course) => course.name !== currentCourseName)
    .slice(0, 12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 900) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + slidesToShow >= filteredCourses.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, filteredCourses.length - slidesToShow) : prev - 1
    );
  };

  const getCoursePath = (courseName) => {
    return `/coursedetails/${encodeURIComponent(courseName)}`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      Programming: "bg-blue-600",
      "Web Dev": "bg-blue-500",
      Frontend: "bg-indigo-600",
      Cloud: "bg-purple-600",
      DevOps: "bg-pink-600",
      Security: "bg-rose-600",
      Testing: "bg-orange-600",
      "Data Science": "bg-emerald-600",
      "AI/ML": "bg-cyan-600",
      Marketing: "bg-sky-600",
      Office: "bg-teal-600",
      Design: "bg-slate-600",
      CRM: "bg-violet-600",
      HR: "bg-amber-600",
      ERP: "bg-lime-600",
      Database: "bg-red-600",
      CMS: "bg-cyan-500",
    };
    return colors[category] || "bg-blue-800";
  };

  const getCategoryColorText = (category) => {
    const colors = {
      Programming: "text-blue-600",
      "Web Dev": "text-blue-500",
      Frontend: "text-indigo-600",
      Cloud: "text-purple-600",
      DevOps: "text-pink-600",
      Security: "text-rose-600",
      Testing: "text-orange-600",
      "Data Science": "text-emerald-600",
      "AI/ML": "text-cyan-600",
      Marketing: "text-sky-600",
      Office: "text-teal-600",
      Design: "text-slate-600",
      CRM: "text-violet-600",
      HR: "text-amber-600",
      ERP: "text-lime-600",
      Database: "text-red-600",
      CMS: "text-cyan-500",
    };
    return colors[category] || "text-blue-800";
  };

  const getCategoryColorBg = (category) => {
    const colors = {
      Programming: "bg-blue-100",
      "Web Dev": "bg-blue-50",
      Frontend: "bg-indigo-100",
      Cloud: "bg-purple-100",
      DevOps: "bg-pink-100",
      Security: "bg-rose-100",
      Testing: "bg-orange-100",
      "Data Science": "bg-emerald-100",
      "AI/ML": "bg-cyan-100",
      Marketing: "bg-sky-100",
      Office: "bg-teal-100",
      Design: "bg-slate-100",
      CRM: "bg-violet-100",
      HR: "bg-amber-100",
      ERP: "bg-lime-100",
      Database: "bg-red-100",
      CMS: "bg-cyan-50",
    };
    return colors[category] || "bg-blue-100";
  };

  const getCourseDescription = (name, category) => {
    const descriptions = {
      Programming: `Master ${name} programming with comprehensive training covering fundamentals to advanced concepts.`,
      "Web Dev": `Learn ${name} to build modern, responsive websites and web applications.`,
      Frontend: `Develop interactive user interfaces with ${name} framework.`,
      Cloud: `Become proficient in ${name} cloud services and infrastructure.`,
      DevOps: `Automate and streamline your development workflow with ${name} tools.`,
      Security: `Learn ${name} techniques to protect systems and networks from cyber threats.`,
      Testing: `Master ${name} for comprehensive software testing and quality assurance.`,
      "Data Science": `Analyze and visualize data with ${name} tools and techniques.`,
      "AI/ML": `Build intelligent systems using ${name} algorithms and models.`,
      Marketing: `Grow your business with effective ${name} strategies and tools.`,
      Office: `Boost your productivity with advanced ${name} skills.`,
      Design: `Create beautiful user experiences with ${name} design principles.`,
      CRM: `Manage customer relationships effectively with ${name} platform.`,
      HR: `Streamline HR processes with ${name} human capital management.`,
      ERP: `Optimize business processes with ${name} enterprise resource planning.`,
      Database: `Design and manage databases efficiently with ${name}.`,
      CMS: `Build professional websites with ${name} content management system.`,
    };
    return descriptions[category] || `Comprehensive training course for ${name}.`;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Programming: "💻",
      "Web Dev": "🌐",
      Frontend: "🎨",
      Cloud: "☁️",
      DevOps: "⚙️",
      Security: "🔒",
      Testing: "🧪",
      "Data Science": "📊",
      "AI/ML": "🤖",
      Marketing: "📱",
      Office: "📈",
      Design: "🎨",
      CRM: "👥",
      HR: "👔",
      ERP: "🏢",
      Database: "🗄️",
      CMS: "📝",
    };
    return icons[category] || "📚";
  };

  const visibleCourses = filteredCourses.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover the perfect course to advance your career
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 sm:px-12 lg:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100"
            aria-label="Previous course"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100"
            aria-label="Next course"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
              >
                {/* Card Header with Color Strip */}
                <div className={`h-2 ${getCategoryColor(course.category)}`}></div>

                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(course.category)}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColorBg(course.category)} ${getCategoryColorText(course.category)}`}
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {getCourseDescription(course.name, course.category)}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={getCoursePath(course.name)}
                    className={`block w-full text-center ${getCategoryColor(course.category)} text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    View Course
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Previous course"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {filteredCourses.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Next course"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="hidden sm:flex justify-center gap-2 mt-10">
          {Array.from({ length: Math.ceil(filteredCourses.length / slidesToShow) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * slidesToShow)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / slidesToShow) === idx
                  ? "bg-blue-600 w-8"
                  : "bg-blue-200 w-2 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Browse All Link */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="/courses"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedCoursesSlider;