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
    <div className="cdp-container">
       {/* <Helmet>
      <title>{course.meta_title || `${course.course_name} `}</title>
      <meta
        name="description"
        content={course.meta_description || additionalContent.courseDescription || `Learn ${course.course_name} with comprehensive training from industry experts.`}
      /> */}
      {/* You can add more meta tags as needed */}
      {/* <meta property="og:title" content={course.meta_title || `${course.course_name} Training | ICLP TECH`} />
      <meta
        property="og:description"
        content={course.meta_description || additionalContent.courseDescription || `Learn ${course.course_name} with comprehensive training from industry experts.`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet> */}
      {/* Hero Section */}
      <div className="cdp-hero">
        <div className="cdp-hero-content">
          <div className="cdp-hero-left">
            <span className="cdp-tag">ORACLE TRAINING</span>
            <h1>{course.course_name}</h1>

            {/* Star Rating and Learners Count */}
            <div className="cdp-rating-learners">
              <div className="cdp-stars">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={`full-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                {/* Half star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FFD700"
                >
                  <defs>
                    <linearGradient
                      id="half-star"
                      x1="0"
                      x2="100%"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#DDD" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#half-star)"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <span>4.7 ({learnerCount.toLocaleString()} learners)</span>
              </div>
              <div className="cdp-learners-profiles">
                {profilePics.map((pic, index) => (
                  <div key={index} className="cdp-profile-pic">
                    <img src={pic} alt={`Learner ${index + 1}`} />
                  </div>
                ))}
                <div className="cdp-profile-count">
                  +{(learnerCount - 3).toLocaleString()}
                </div>
              </div>
            </div>

            <p className="cdp-hero-description">
              {additionalContent.courseDescription}
            </p>

            {/* CTA Button */}
            <button
              className="cdp-enroll-btn-hero"
              onClick={() => setShowBookingModal(true)}
            >
              ENROLL NOW
            </button>
          </div>

          <div className="cdp-hero-right">
            <div className="cdp-booking-card">
              <div className="cdp-card-content">
                <h3>Oracle Course Highlights</h3>

                <div className="cdp-booking-highlights">
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#314097"
                    >
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                    </svg>
                    <span>Real-world Oracle Implementation Scenarios</span>
                  </div>
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#1FAA59"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>Hands-on Oracle System Access</span>
                  </div>
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#314097"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>Oracle Certification Preparation</span>
                  </div>
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#1FAA59"
                    >
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                    </svg>
                    <span>Industry Expert Trainers</span>
                  </div>
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#314097"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.32c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    <span>24/7 Oracle Expert Support</span>
                  </div>
                  <div className="cdp-booking-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#1FAA59"
                    >
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                    <span>Placement Assistance</span>
                  </div>
                </div>

                  <div className="cdp-contact-info" style={{backgroundColor: "#1a2a6c", }}>
                  <p>
                    For queries: <strong>+91 8681026181</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="cdp-section cdp-learn-section">
        <div className="cdp-learn-container">
          <div className="cdp-learn-content">
            <h2 className="cdp-section-title">Oracle Skills You'll Gain</h2>
            <ul className="cdp-learn-list">
              {course.what_youll_learn.map((topic, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring Partners Preview */}
          <div className="cdp-partners-preview">
            <h3>Our Oracle Graduates Work At</h3>
            <div className="cdp-partners-grid">
              {hiringPartners.slice(0, 6).map((image, index) => (
                <div key={index} className="cdp-partner-logo">
                  <img
                    src={image}
                    alt={`Partner ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <button
              className="cdp-view-all-btn"
              onClick={() => {
                const element = document.querySelector(".cdp-partners-full");
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View All Companies
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="cdp-section cdp-syllabus-section">
        <h2 className="cdp-section-title">Oracle Course Curriculum</h2>

        <div className="cdp-syllabus-wrapper">
          <div className="cdp-syllabus-accordion">
            {course.syllabus.map((module, index) => (
              <div
                className={`cdp-syllabus-item ${
                  openModule === index ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="cdp-syllabus-header"
                  onClick={() => toggleModule(index)}
                >
                  <span className="cdp-module-number">Module {index + 1}</span>
                  <span className="cdp-module-title">{module.module}</span>
                  <svg
                    className={`cdp-accordion-icon ${
                      openModule === index ? "active" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </button>

                <div className="cdp-syllabus-content">
                  <ul>
                    {module.subtopics.map((topic, subIndex) => (
                      <li key={subIndex}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="cdp-syllabus-download">
            <div className="cdp-company-logo-container">
              <img
                src="/Logo.png"
                alt="Company Logo"
                className="cdp-company-logo"
              />
            </div>
            <button className="cdp-download-btn" onClick={downloadSyllabusPDF}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download Full Syllabus
            </button>

            {/* Book Enquiry Section */}
            <div className="cdp-book-enquiry">
              <h3 className="cdp-book-enquiry-title">
                Oracle Course Questions?
              </h3>
              <p className="cdp-book-enquiry-text">
                Book a free consultation with our Oracle experts
              </p>
              <button
                className="cdp-book-enquiry-btn"
                onClick={() => setShowBookingModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
                Book Free Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Recognition Section with Image */}
      <section className="iclp-cert-final-section">
        <div className="iclp-cert-final-container">
          <div className="iclp-cert-final-content">
            <div className="iclp-cert-final-header">
              <span className="iclp-cert-final-badge">
                ORACLE CERTIFICATION
              </span>
              <h2 className="iclp-cert-final-title">
                Oracle <span>Certification</span>
              </h2>
              <p className="iclp-cert-final-description">
                Earn a recognized Oracle credential that validates your
                technical expertise and opens doors to new career opportunities
                in the Oracle ecosystem.
              </p>
            </div>

            <div className="iclp-cert-final-features">
              <div className="iclp-cert-final-feature">
                <div className="iclp-cert-final-feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                  </svg>
                </div>
                <span>Globally Recognized Oracle Certification</span>
              </div>

              <div className="iclp-cert-final-feature">
                <div className="iclp-cert-final-feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                  </svg>
                </div>
                <span>Hands-on Oracle System Experience</span>
              </div>

              <div className="iclp-cert-final-feature">
                <div className="iclp-cert-final-feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                </div>
                <span>Career Advancement in Oracle</span>
              </div>
            </div>

            <button
              className="iclp-cert-final-cta"
              onClick={() => setShowBookingModal(true)}
            >
              Get Oracle Certified
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className="iclp-cert-final-visual"
            onClick={() => setShowBookingModal(true)}
          >
            <div className="iclp-cert-final-card">
              <img
                src="/certification.png"
                alt="Oracle Certification"
                className="iclp-cert-final-image"
              />
              <div className="iclp-cert-final-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <CourseAdvantagesTools courseName={course?.course_name} />

      {/* Full Hiring Partners Section */}
      <div className="cdp-section cdp-partners-full">
        <h2 className="cdp-section-title">Our Oracle Hiring Partners</h2>
        <p className="cdp-section-subtitle">
          Top companies where our Oracle graduates work
        </p>

        <div className="cdp-partners-full-grid">
          {hiringPartners.map((image, index) => (
            <div key={index} className="cdp-partner-card">
              <img src={image} alt={`Partner ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <CourseReviews />
      <br></br>
      <br></br>

      <CourseFAQs />

      {/* CTA Section */}
      <div className="cdp-section cdp-cta-section">
        <div className="cdp-cta-card">
          <h2>Ready to Start Your Oracle {course.course_name} Journey?</h2>
          <p>Limited seats available for the next batch</p>
          <div className="cdp-cta-buttons">
            <button
              className="cdp-cta-primary"
              onClick={() => setShowBookingModal(true)}
            >
              Enroll Now
            </button>
            <button
              className="cdp-cta-secondary"
              onClick={() => setShowBookingModal(true)}
            >
              Get Free Oracle Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {showBookingModal && (
        <ModalBooking onClose={() => setShowBookingModal(false)} />
      )}

      <RelatedCoursesSlider />
    </div>
  );
};

export default OracleCourseDetailsPage;
