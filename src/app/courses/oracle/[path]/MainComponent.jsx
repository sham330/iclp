"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Next.js hook
import "./CourseDetailsPage.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ModalBooking from "@/app/components/ModalBooking/ModalBooking";
import RelatedCoursesSlider from "@/app/components/RelatedCourses/RelatedCourses";
import CourseReviews from "@/app/components/CourseReviews/CourseReviews";
import CourseAdvantagesTools from "@/app/components/CourseAdvantagesTools/CourseAdvantagesTools";
import CourseFAQs from "@/app/components/faq/faq";
import {
  FaStar,
  FaDownload,
  FaCheckCircle,
  FaPhone,
  FaTrophy,
  FaClock,
  FaCertificate,
  FaChevronDown,
  FaChevronRight,
  FaShieldAlt,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
  FaUserTie,
} from "react-icons/fa";


const OracleCourseDetailsPage = () => {
   const { path } = useParams();
  const { courseName } = useParams();
  const [course, setCourse] = useState(null);
  const [additionalContent, setAdditionalContent] = useState(null);
  const [openModule, setOpenModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [learnerCount, setLearnerCount] = useState(0);
  const [profilePics, setProfilePics] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Hiring partners data
  const hiringPartners = [
    "/companies/Accenture.png",
    "/companies/capgemini.webp",
    "/companies/Cognizant-Logo.jpg",
    "/companies/adastra.png",
    "/companies/data_matics.png",
    "/companies/dmi.png",
    "/companies/encore.jpeg",
    "/companies/HCLTech.png",
    "/companies/ibm.jpg",
    "/companies/images.png",
    "/companies/tcs.png",
    "/companies/transworld.jpg",
    "/companies/willy.png",
    "/companies/wipro.jpg",
    "/companies/zoho.png",
  ];

  // Random profile pictures from Unsplash
  const profilePictures = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200",
  ];

  // Oracle-specific additional content
  const oracleAdditionalContent = {
    "oracle-financials": {
      courseDescription:
        "Master Oracle Financials with our comprehensive training program covering General Ledger, AP, AR, Fixed Assets and Cash Management. Gain hands-on experience with real-world scenarios.",
    },
    "oracle-scm": {
      courseDescription:
        "Become an Oracle SCM expert with our intensive training program. Learn inventory management, order management, and procurement processes used by global enterprises.",
    },
    "oracle-hcm": {
      courseDescription:
        "Transform your career with our Oracle HCM training. Learn end-to-end HR processes from core HR to talent management and become proficient in this in-demand module.",
    },
    
  "oracle-cpq": {
    "courseDescription": "Master Oracle Configure, Price, Quote (CPQ) Cloud with comprehensive training in product configuration, pricing strategies, and automated quote generation for sales teams."
  },
  "oracle-procure-to-pay": {
    "courseDescription": "Become an expert in Oracle's end-to-end procurement process covering supplier management, purchase orders, invoice processing, and payment workflows."
  },
  "oracle-hyperion-epm": {
    "courseDescription": "Gain expertise in Oracle Hyperion Enterprise Performance Management for financial consolidation, planning, budgeting, and reporting solutions."
  },
  "oracle-grc-control-suit-fundamentals-vers": {
    "courseDescription": "Master Oracle Governance, Risk and Compliance controls for access management, continuous monitoring, and risk remediation in enterprise environments."
  },
  "oracle-developer": {
    "courseDescription": "Comprehensive training in Oracle Developer tools including Forms, Reports, and PL/SQL for building enterprise database applications."
  },
  "oracle-sql-plsql": {
    "courseDescription": "Master Oracle database programming with in-depth training in SQL queries, PL/SQL development, and database object management."
  },
  "oracle-forms-and-reports": {
    "courseDescription": "Professional training in Oracle Forms and Reports development for creating business applications and enterprise reporting solutions."
  },
  "oracle-application-framework": {
    "courseDescription": "Advanced training in Oracle Application Framework (OAF) for customizing and extending Oracle E-Business Suite applications."
  },
  "oracle-cloud-infrastructure": {
    "courseDescription": "Comprehensive OCI training covering compute, storage, networking, and database services in Oracle's cloud platform."
  },
  "oracle-weblogic-server": {
    "courseDescription": "Master Oracle WebLogic Server administration including installation, configuration, clustering, and performance tuning."
  },
  "oracle-peoplesoft": {
    "courseDescription": "End-to-end training in Oracle PeopleSoft HRMS/HCM covering core HR, payroll, benefits, and talent management modules."
  },
  "oracle-customercare": {
    "courseDescription": "Specialized training in Oracle Customer Care & Billing (CC&B) for utilities customer service and billing operations."
  },
  "oracle-r12": {
    "courseDescription": "In-depth training in R12.x Oracle Inventory Management covering inventory controls, costing, and supply chain integration."
  },
  "oracle-tax-reporting": {
    "courseDescription": "Expert training in R12.2 Oracle E-Business Tax for global tax configuration, calculation, and reporting requirements."
  },
  "oracle-order-management": {
    "courseDescription": "Comprehensive training in R12.x Oracle Order Management covering order processing, pricing, and fulfillment workflows."
  }

  };

  useEffect(() => {
    setLoading(true);
    // Generate random learner count between 1000 and 5000
    setLearnerCount(Math.floor(Math.random() * 4000) + 1000);

    // Select 3 random profile pictures
    const shuffled = [...profilePictures].sort(() => 0.5 - Math.random());
    setProfilePics(shuffled.slice(0, 3));

    fetch("/data/oracleCourses.json")
      .then((res) => res.json())
      .then((coursesData) => {
        let foundCourse = null;
        coursesData.categories.forEach((category) => {
          category.sub_categories.forEach((sub) => {
            if (sub.path === path) {
              foundCourse = sub;
            }
          });
        });

        if (foundCourse) {
          setCourse(foundCourse);
          setAdditionalContent(oracleAdditionalContent[foundCourse.course_name] || {});
        } else {
          console.error("Course not found:", courseName);
        }

        setAdditionalContent(oracleAdditionalContent[path] || {});
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [path]);

  const toggleModule = (index) => {
    if (openModule === index) {
      setOpenModule(null);
    } else {
      setOpenModule(index);
    }
  };

  const downloadSyllabusPDF = () => {
    if (!course) return;

    const doc = new jsPDF();

    const addWatermark = (doc) => {
      const watermarkText = "ICLP TECH";
      const watermarkFontSize = 50;
      const watermarkOpacity = 0.2;
      const watermarkAngle = -45;

      doc.setFontSize(watermarkFontSize);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(169, 169, 169);
      doc.setGState(doc.GState({ opacity: watermarkOpacity }));

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      for (let i = 0; i < pageWidth; i += 150) {
        for (let j = 0; j < pageHeight; j += 150) {
          doc.text(watermarkText, i, j, {
            angle: watermarkAngle,
            align: "center",
          });
        }
      }

      doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(0, 0, 0);
    };

    // Set initial position
    let yPos = 20;

    doc.setFontSize(22);
    doc.setTextColor(0, 51, 102);
    doc.text(course.course_name, 15, yPos);
    yPos += 10;

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Course Description:", 15, yPos);
    yPos += 5;

    doc.setFontSize(12);
    const descriptionLines = doc.splitTextToSize(course.description, 180);
    doc.text(descriptionLines, 15, yPos);
    yPos += descriptionLines.length * 7 + 15;

    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text("What You'll Learn:", 15, yPos);
    yPos += 10;

    doc.setFontSize(12);
    course.what_youll_learn.forEach((topic) => {
      const topicLines = doc.splitTextToSize(`• ${topic}`, 180);
      doc.text(topicLines, 20, yPos);
      yPos += topicLines.length * 7;
    });

    yPos += 10; // Add extra space before syllabus

    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text("Syllabus:", 15, yPos);
    yPos += 10;

    const syllabusData = course.syllabus.map((module, index) => [
      `Module ${index + 1}`,
      module.module,
      module.subtopics.join("\n"),
    ]);

    autoTable(doc, {
      startY: yPos,
      head: [["Module No.", "Module Name", "Subtopics"]],
      body: syllabusData,
      theme: "striped",
      styles: {
        fontSize: 12,
        cellPadding: 5,
        valign: "middle",
        halign: "left",
      },
      headStyles: {
        fillColor: [0, 51, 102],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 60 },
        2: { cellWidth: 100 },
      },
      didDrawPage: (data) => {
        addWatermark(doc);
      },
    });

    doc.save(`${course.course_name}_Syllabus.pdf`);
  };

  if (loading)
    return <div className="cdp-loading">Loading course details...</div>;
  if (!course) return <div className="cdp-not-found">Course not found</div>;

  return (
   <div className="min-h-screen bg-white">
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div className="text-white">
          <span className="inline-block bg-[#39FF14] text-[#01377d] px-4 py-2 rounded-full text-sm font-bold mb-4">
            ORACLE TRAINING
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {course.course_name}
          </h1>

          {/* Rating and Learners */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-[#39FF14] text-xl" />
              ))}
              <FaStar className="text-[#39FF14]/50 text-xl" />
              <span className="text-[#97e7f5] ml-2">
                4.7 ({learnerCount.toLocaleString()} learners)
              </span>
            </div>

            {/* Profile Pics */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {profilePics.map((pic, index) => (
                  <img
                    key={index}
                    src={pic}
                    alt={`Learner ${index + 1}`}
                    className="w-12 h-12 rounded-full border-4 border-[#01377d]"
                  />
                ))}
              </div>
              <span className="text-[#97e7f5] font-semibold">
                +{(learnerCount - 3).toLocaleString()} enrolled
              </span>
            </div>
          </div>

          <p className="text-[#97e7f5] text-lg leading-relaxed mb-8">
            {additionalContent.courseDescription}
          </p>

          <button
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
          >
            ENROLL NOW <FaArrowRight />
          </button>
        </div>

        {/* Right Card - Course Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#01377d] mb-6">
            Oracle Course Highlights
          </h3>

          <div className="space-y-4">
            {[
              { icon: <FaTrophy />, text: "Real-world Oracle Implementation Scenarios", color: "#01377d" },
              { icon: <FaClock />, text: "Hands-on Oracle System Access", color: "#39FF14" },
              { icon: <FaCertificate />, text: "Oracle Certification Preparation", color: "#01377d" },
              { icon: <FaUserTie />, text: "Industry Expert Trainers", color: "#39FF14" },
              { icon: <FaShieldAlt />, text: "24/7 Oracle Expert Support", color: "#01377d" },
              { icon: <FaBriefcase />, text: "Placement Assistance", color: "#39FF14" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="text-2xl flex-shrink-0"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#01377d] rounded-lg p-4 text-center">
            <p className="text-white flex items-center justify-center gap-2">
              <FaPhone className="text-[#39FF14]" />
              For queries: <strong>+91 8681026181</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* What You'll Learn Section */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-8">
            Oracle Skills You'll Gain
          </h2>
          <div className="space-y-3">
            {course.what_youll_learn.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg hover:bg-[#39FF14]/10 transition-colors"
              >
                <FaCheckCircle className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                <span className="text-slate-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#01377d] mb-6 text-center">
            Our Oracle Graduates Work At
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {hiringPartners.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="bg-slate-50 p-3 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              document.querySelector(".hiring-partners-full")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full bg-[#01377d] hover:bg-[#014a9f] text-white py-3 rounded-lg font-semibold transition-colors"
          >
            View All Companies
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Syllabus Section */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-8 text-center">
        Oracle Course Curriculum
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Accordion */}
        <div className="lg:col-span-2 space-y-4">
          {course.syllabus.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-[#39FF14] transition-colors"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-[#39FF14] text-[#01377d] font-bold px-4 py-2 rounded-lg">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-[#01377d] text-lg">
                    {module.module}
                  </span>
                </div>
                {openModule === index ? (
                  <FaChevronDown className="text-[#39FF14] text-xl" />
                ) : (
                  <FaChevronRight className="text-slate-400 text-xl" />
                )}
              </button>

              {openModule === index && (
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {module.subtopics.map((topic, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <FaCheckCircle className="text-[#39FF14] flex-shrink-0 mt-1" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Logo */}
          <div className="bg-white rounded-xl p-6 text-center border-2 border-slate-200 shadow-lg">
            <img
              src="/Logo.png"
              alt="ICLP Technologies"
              className="h-16 mx-auto mb-4"
            />
            <button
              onClick={downloadSyllabusPDF}
              className="w-full bg-[#01377d] hover:bg-[#014a9f] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <FaDownload /> Download Full Syllabus
            </button>
          </div>

          {/* Book Enquiry */}
          <div className="bg-gradient-to-br from-[#01377d] to-[#014a9f] rounded-xl p-6 text-white text-center shadow-lg">
            <h3 className="text-xl font-bold mb-3">Oracle Course Questions?</h3>
            <p className="text-[#97e7f5] mb-6">
              Book a free consultation with our Oracle experts
            </p>
            <button
              onClick={() => setShowBookingModal(true)}
              className="w-full bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] py-3 px-4 rounded-lg font-bold transition-all hover:scale-105"
            >
              Book Free Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Certificate Section */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#39FF14] text-[#01377d] px-4 py-2 rounded-full text-sm font-bold mb-4">
            ORACLE CERTIFICATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
            Oracle <span className="text-[#39FF14]">Certification</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Earn a recognized Oracle credential that validates your technical
            expertise and opens doors to new career opportunities in the Oracle
            ecosystem.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaShieldAlt />, text: "Globally Recognized Oracle Certification" },
              { icon: <FaTrophy />, text: "Hands-on Oracle System Experience" },
              { icon: <FaGraduationCap />, text: "Career Advancement in Oracle" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-[#39FF14] text-4xl mb-2">{item.icon}</div>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
          >
            Get Oracle Certified <FaArrowRight />
          </button>
        </div>

        <div
          onClick={() => setShowBookingModal(true)}
          className="cursor-pointer group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#39FF14] group-hover:scale-105 transition-transform">
            <img
              src="/certification.png"
              alt="Oracle Certification"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <CourseAdvantagesTools courseName={course?.course_name} />

  {/* Full Hiring Partners */}
  <section className="py-16 bg-white hiring-partners-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4 text-center">
        Our Oracle Hiring Partners
      </h2>
      <p className="text-slate-600 text-center mb-12">
        Top companies where our Oracle graduates work
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {hiringPartners.map((image, index) => (
          <div
            key={index}
            className="bg-slate-50 p-6 rounded-xl flex items-center justify-center hover:shadow-xl transition-shadow border-2 border-slate-200 hover:border-[#39FF14]"
          >
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  <CourseReviews />
  <CourseFAQs />

  {/* CTA Section */}
  <section className="py-16 bg-gradient-to-r from-[#01377d] to-[#014a9f]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Start Your Oracle {course.course_name} Journey?
      </h2>
      <p className="text-[#97e7f5] text-xl mb-8">
        Limited seats available for the next batch
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
        >
          Enroll Now
        </button>
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/30"
        >
          Get Free Oracle Consultation
        </button>
      </div>
    </div>
  </section>

  <RelatedCoursesSlider />

  {/* Modal */}
  {showBookingModal && (
    <ModalBooking onClose={() => setShowBookingModal(false)} />
  )}
</div>

  );
};

export default OracleCourseDetailsPage;
