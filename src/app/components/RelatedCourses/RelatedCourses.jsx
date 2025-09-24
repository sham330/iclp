"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RelatedCourses.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaJava,
  FaPython,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaReact,
  FaMicrosoft,
  FaAws,
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaChartLine,
  FaLaptopCode,
  FaServer,
  FaWordpress,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaSalesforce,
  FaGitAlt,
  FaRobot,
  FaAd,
  FaFileExcel,
  FaPaintBrush,
  FaCode,
  FaUserTie,
  FaCogs,
  FaCloud,
  FaProjectDiagram,
  FaSearch,
  FaBolt,
  FaTerminal,
  FaUsers,
  FaFileCode,
  FaTable,
  FaNetworkWired,
} from "react-icons/fa";

const RelatedCoursesSlider = ({ currentCourseName, courseType = "all" }) => {
  // Define all courses with categories and icons (using only Fa icons)
  const allCourses = [
    { name: "Java", category: "Programming", icon: <FaJava /> },
    { name: "Python", category: "Programming", icon: <FaPython /> },
    { name: "R Programming", category: "Programming", icon: <FaChartLine /> },
    { name: "JavaScript", category: "Web Dev", icon: <FaJs /> },
    { name: "PHP", category: "Web Dev", icon: <FaPhp /> },
    { name: "Full Stack", category: "Web Dev", icon: <FaLaptopCode /> },
    { name: "Node.js", category: "Web Dev", icon: <FaNodeJs /> },
    { name: "ReactJS", category: "Frontend", icon: <FaReact /> },
    { name: "Microsoft Azure", category: "Cloud", icon: <FaMicrosoft /> },
    { name: "AWS", category: "Cloud", icon: <FaAws /> },
    { name: "DevOps", category: "DevOps", icon: <FaServer /> },
    { name: "Cyber Security", category: "Security", icon: <FaShieldAlt /> },
    { name: "Ethical Hacking", category: "Security", icon: <FaLock /> },
    { name: "Selenium", category: "Testing", icon: <FaCode /> }, // Alternative
    { name: "Manual Testing Course", category: "Testing", icon: <FaSearch /> }, // Alternative
    { name: "JMeter Course", category: "Testing", icon: <FaBolt /> }, // Alternative
    { name: "ETL Testing", category: "Testing", icon: <FaDatabase /> },
    { name: "LoadRunner", category: "Testing", icon: <FaNetworkWired /> }, // Alternative
    { name: "SoapUI", category: "Testing", icon: <FaCode /> }, // Alternative
    {
      name: "Data Science Course",
      category: "Data Science",
      icon: <FaDatabase />,
    },
    { name: "Artificial Intelligence", category: "AI/ML", icon: <FaRobot /> },
    { name: "Digital Marketing", category: "Marketing", icon: <FaAd /> },
    { name: "Excel", category: "Office", icon: <FaFileExcel /> },
    { name: "HTML", category: "Web Dev", icon: <FaHtml5 /> },
    { name: "UI and UX", category: "Design", icon: <FaPaintBrush /> }, // Alternative
    { name: "Salesforce", category: "CRM", icon: <FaSalesforce /> },
    { name: "C Sharp", category: "Programming", icon: <FaCode /> }, // Alternative
    { name: "UNIX SHELL Scripting", category: "DevOps", icon: <FaTerminal /> }, // Alternative
    { name: "Workday HCM", category: "HR", icon: <FaUsers /> }, // Alternative
    {
      name: "Salesforce Online Training",
      category: "CRM",
      icon: <FaSalesforce />,
    },
    { name: "Salesforce Developer", category: "CRM", icon: <FaSalesforce /> },
    { name: "Azure DevOps", category: "DevOps", icon: <FaMicrosoft /> },
    { name: "Angular", category: "Frontend", icon: <FaAngular /> },
    { name: "WordPress", category: "CMS", icon: <FaWordpress /> },
    { name: "CSS Online", category: "Web Dev", icon: <FaCss3Alt /> },
    {
      name: "Data Science With Python",
      category: "Data Science",
      icon: <FaPython />,
    },
    {
      name: "Machine Learning with Python",
      category: "AI/ML",
      icon: <FaPython />,
    },
    {
      name: "Machine Learning using R",
      category: "AI/ML",
      icon: <FaChartLine />,
    },
    { name: "MySQL", category: "Database", icon: <FaDatabase /> },
    { name: "SQL with PHP", category: "Database", icon: <FaPhp /> },
    { name: "Microsoft Dynamics 365", category: "ERP", icon: <FaMicrosoft /> },
    { name: "Microsoft Excel", category: "Office", icon: <FaFileExcel /> },
    { name: "Excel Macros and VBA", category: "Office", icon: <FaFileCode /> }, // Alternative
    { name: "jQuery", category: "Web Dev", icon: <FaCode /> }, // Alternative
  ];

  // Rest of your component remains the same...
  const courses = allCourses;
  const filteredCourses = courses
    .filter((course) => course.name !== currentCourseName)
    .slice(0, 12);

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="rcs-arrow rcs-arrow-prev"
      aria-label="Previous course"
    >
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="rcs-arrow rcs-arrow-next"
      aria-label="Next course"
    >
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getCoursePath = (courseName) => {
    return `/coursedetails/${encodeURIComponent(courseName)}`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      Programming: "#2563eb",
      "Web Dev": "#3b82f6",
      Frontend: "#6366f1",
      Cloud: "#8b5cf6",
      DevOps: "#ec4899",
      Security: "#f43f5e",
      Testing: "#f97316",
      "Data Science": "#10b981",
      "AI/ML": "#06b6d4",
      Marketing: "#0ea5e9",
      Office: "#14b8a6",
      Design: "#64748b",
      CRM: "#a855f7",
      HR: "#f59e0b",
      ERP: "#84cc16",
      Database: "#ef4444",
      CMS: "#22d3ee",
    };
    return colors[category] || "#1a2a6c";
  };

  return (
    <section className="rcs-section">
      <div className="rcs-container">
        <div className="rcs-header">
          <h2>Explore Our Courses</h2>
          <p>Discover the perfect course to advance your career</p>
        </div>

        <div className="rcs-slider-wrapper">
          <Slider {...settings} className="rcs-slider">
            {filteredCourses.map((course, index) => {
              const categoryColor = getCategoryColor(course.category);
              return (
                <div key={index} className="rcs-slide">
                  <div className="rcs-card">
                    <div
                      className="rcs-card-header-bg"
                      style={{ backgroundColor: categoryColor }}
                    ></div>
                    <div className="rcs-card-content">
                      <div className="rcs-card-header">
                        <span
                          className="rcs-card-icon"
                          style={{ color: categoryColor }}
                        >
                          {course.icon}
                        </span>
                        <span
                          className="rcs-card-category"
                          style={{
                            backgroundColor: `${categoryColor}20`,
                            color: categoryColor,
                          }}
                        >
                          {course.category}
                        </span>
                      </div>
                      <div className="rcs-card-body">
                        <h3>{course.name}</h3>
                        <p className="rcs-card-description">
                          {getCourseDescription(course.name, course.category)}
                        </p>
                      </div>
                      <div className="rcs-card-footer">
                        <Link
                          href={getCoursePath(course.name)}
                          className="rcs-button"
                          style={{
                            backgroundColor: categoryColor,
                            borderColor: categoryColor,
                          }}
                        >
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="rcs-footer">
          <Link href="/courses" className="rcs-browse-all">
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

// Helper function to generate descriptions
const getCourseDescription = (name, category) => {
  const descriptions = {
    Programming: `Master ${name} programming with our comprehensive course covering fundamentals to advanced concepts.`,
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

export default RelatedCoursesSlider;