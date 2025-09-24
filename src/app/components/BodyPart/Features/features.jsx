import React from "react";
import "./features.css";
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
      icon: <FaChalkboardTeacher className="icon-color" />,
      title: "Real-Time Experts as Trainers",
      description:
        "At ICLP, you will learn from industry experts eager to share their knowledge with learners. You will also get personally mentored by the Experts.",
    },
    {
      icon: <FaClock className="icon-color" />,
      title: "Flexibility",
      description:
        "At ICLP TECHNOLOGIES, you get the ultimate flexibility. Classroom or online training? Early morning or late evening? Weekday or weekend? Regular Pace or Fast Track? - Choose whatever suits you best.",
    },
    {
      icon: <FaTools className="icon-color" />,
      title: "LIVE Project",
      description:
        "Get the opportunity to work on real-time projects that will provide you with deep experience. Showcase your project experience and increase your chances of getting hired!",
    },
    {
      icon: <FaBriefcase className="icon-color" />,
      title: "Placement Support",
      description:
        "Tied-up & signed MOUs with over 3000+ small & medium-sized companies to support you with opportunities to kick-start & advance your career.",
    },
    {
      icon: <FaCertificate className="icon-color" />,
      title: "Certification",
      description:
        "ICLP TECHNOLOGIES offers certification. Also, get ready to clear global certifications.",
    },
    {
      icon: <FaMoneyBillWave className="icon-color" />,
      title: "Affordable Fees",
      description:
        "At ICLP TECHNOLOGIES, the course fee is not only affordable, but you can also pay it in installments. Quality training at an affordable price is our motto.",
    },
  ];

  return (
    <div className="features-container">
      <SEO
        title="Comprehensive Online Courses – Save Time, Money & Gain Knowledge with Expert Support"
        description="Enroll in our diverse range of online courses across various categories, including Programming (Java, Python, JavaScript), Data Science, AI, SAP, Oracle, and more. Save time with flexible learning schedules, save money with special discounts, and gain in-depth knowledge with expert instructors. Get personalized support with our user-friendly chatbot to help you with course selection, enrollment, and more. Start learning today and advance your career efficiently with our top-rated courses and resources!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />

      <h2 className="features-headline">Features</h2>
      <div className="features-grid">
        {data.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
