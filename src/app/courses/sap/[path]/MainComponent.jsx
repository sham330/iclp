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

const SapCourseDetailsPage = () => {
  const { courseName } = useParams();
  const { path } = useParams();
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

  // SAP-specific additional content
  const sapAdditionalContent = {
    "sap-fico": {
      courseDescription:
        "Are you ready to become a certified SAP FICO expert? ICLP Tech offers the most comprehensive and industry-aligned SAP FICO training available, tailored for aspiring and current finance professionals in India. Our program is designed to transform you into a proficient SAP FICO consultant, covering the entire spectrum of Financial Accounting (FI) and Controlling (CO). We pride ourselves on delivering real-world, practical knowledge, ensuring our FICO course graduates are immediately job-ready. Whether you choose our flexible SAP FICO course online or our immersive classroom setup, you gain the expertise needed to secure your SAP FICO certificate and excel in the global job market.",
    },
    "sap-mm": {
      courseDescription:
        "Are you seeking a high-growth career in supply chain and logistics? ICLP Tech offers the leading SAP MM course in India, designed to transform aspiring professionals into expert SAP Material Management consultants.The SAP MM module is the logistical backbone of enterprises worldwide. Our specialized program provides practical, in-depth knowledge necessary to configure and manage the entire procurement and inventory lifecycle. Enrolling in our intensive MM training equips you with globally relevant skills and opens the door to top jobs across the Indian and international job markets. Choose ICLP Tech for comprehensive, career-focused SAP MM training online or in-class formats.",
    },
    "sap-sd": {
      courseDescription:
        "Are you ready to unlock a high-demand career path in corporate logistics and sales? ICLP Tech offers the most comprehensive SAP Sales and Distribution (SD) program in India, designed to master the entire Order-to-Cash (O2C) process. The SAP SD module is crucial for businesses globally, managing customer orders, pricing, billing, and shipping. Our expert-led SAP SD training goes beyond theory, focusing on real-world system configuration and implementation scenarios. By completing this program, you gain the skills needed to seamlessly integrate sales processes with other modules, ensuring you are prepared for both the SAP SD certification exam and a successful consulting career. Choose ICLP Tech for industry-validated SAP Sales and Distribution expertise.",
    },
    "sap-pp": {
      courseDescription:
        "Ready to become a certified expert in manufacturing and supply chain management? ICLP Tech offers the most comprehensive SAP PP course in India, designed for professionals seeking to master the crucial Production Planning module. The SAP PP module is the central nervous system for manufacturing processes, managing everything from demand forecasting to shop floor control. Our expert-led program provides practical, end-to-end SAP PP training, ensuring you gain hands-on proficiency in system configuration and implementation. By completing this specialized pp course, you secure the skills needed for career growth and preparation for the official SAP PP certificate. We empower you to drive efficiency and operational excellence in top industries across India.",
    },
    "sap-abap": {
      courseDescription:
        "Elevate your programming skills and step into the high-demand world of enterprise resource planning with ICLP's definitive SAP ABAP Course Online. Designed by industry veterans, this comprehensive program provides the foundation and advanced knowledge required to become a certified SAP ABAP professional. Our structured SAP ABAP Training covers everything from foundational concepts like data dictionary and Open SQL to advanced topics like Object-Oriented ABAP and system integration. If you are serious about securing a specialized role in the Indian IT sector, this is the essential SAP ABAP Course you need.",
    },
    "sap-transportation-management": {
      courseDescription: "Start your journey toward becoming a certified logistics expert with the premier SAP TM Training program in India. Our comprehensive SAP Transportation Management Training Online is specifically designed for ambitious professionals seeking to master the complexities of modern supply chain execution. This is more than just an SAP TM Course; it is an integrated learning experience that covers both the critical functional configuration and the necessary technical knowledge. Join over 4,800 successful learners and secure your future in the booming logistics sector with ICLP’s industry-leading SAP TM Training.",
    },
    "sap-successfactors-online-training": {
      courseDescription: "Elevate your HR career with our industry-leading SAP SuccessFactors training online. In the rapidly expanding Indian HR technology market, mastering cloud-based Human Experience Management (HXM) is essential. Our specialized SAP SuccessFactors course (SFC) is meticulously designed to give you that competitive edge. This comprehensive SAP SuccessFactors training (SFT) program goes beyond theoretical concepts, providing hands-on, practical skills development required by top multinational corporations and firms across India. We offer the most practical and up-to-date SAP SF training (SFSFT) available today.",
    },
    "sap-quality-management-(qm)": {
      courseDescription: "Elevate your supply chain and manufacturing expertise with our specialized SAP QM course. In the fiercely competitive Indian market, mastering SAP Quality Management (QM) is critical for driving operational excellence, minimizing costs, and maintaining strict regulatory compliance. This professional SAP QM training program provides the deep functional knowledge required to implement and manage quality processes within the SAP ERP system. Our structured SAP quality management course is delivered by certified, industry experts, ensuring you gain practical, job-ready skills immediately applicable to leading companies across India. We focus on real-world scenarios, making this the premier SAP quality management training solution for serious professionals.",
    },
    "sap-ariba-training": {
      courseDescription: "Propel your career in procurement and supply chain management with India's most comprehensive SAP Ariba course. As enterprises across all sectors increasingly adopt cloud-based source-to-pay solutions, the demand for certified SAP Ariba training professionals is surging, particularly in the competitive Indian IT and consulting markets. This intensive SAP Ariba training program is designed to transform you into an expert consultant, equipped to implement, customize, and manage the full suite of Ariba applications. This professional SAP Ariba course is your gateway to a high-growth career.",
    },
    "sap-master-data-governance-(mdg)-on-s-4hana": {
      courseDescription: "Master the critical discipline of data governance with our industry-leading SAP MDG course online. In the S/4HANA era, data integrity is paramount, making specialized SAP MDG training essential for consultants in India. This professional program focuses exclusively on SAP Master Data Governance (MDG) on the S/4HANA platform, giving you the competitive edge in high-growth IT and consulting roles. This comprehensive MDG course covers the full lifecycle of all core data domains (Material, Business Partner, Finance), ensuring you are project-ready from day one.",
    },
    "sap-basis-administration": {
      courseDescription: "Launch your career as a core system administrator with India's leading SAP Basis course online. SAP Basis is the fundamental technical backbone of any enterprise SAP landscape, making the demand for skilled administrators constant and high across all major IT hubs in India. Our intensive SAP Basis training program is designed to transform you into an expert in system maintenance, performance tuning, and high availability. This is the definitive SAP Basis course for professionals aiming to secure critical, stable IT roles.",
    },
    "sap-sales-cloud-(c4c)-training": {
      courseDescription: "Transform your career in digital sales and customer relationship management with the industry-leading SAP Sales Cloud training. Formerly known as SAP C4C, the modern SAP Sales Cloud is crucial for businesses driving digital transformation in the rapidly expanding Indian market. Our comprehensive sap c4c online training program is specifically designed for professionals seeking to master the SAP Customer Experience (CX) solution suite. This intensive sap sales cloud course online provides practical, hands-on skills in end-to-end sales cycle management, including lead-to-opportunity conversion, CPQ configuration, and vital S/4HANA integration.",
    },
    "sap-fscm": {
      courseDescription: "Gain expertise in SAP Financial Supply Chain Management. Learn credit management, collections, dispute management, and treasury processes.",
    },
    "sap-btp-training": {
      courseDescription: "The SAP Business Technology Platform (BTP) is the unified foundation for digital transformation, enabling businesses to integrate, extend, and innovate faster while maintaining a clean core on S/4HANA. For professionals in India, mastering this platform is no longer optional—it is the direct path to high-growth, stable roles as a Cloud Developer, Integration Specialist, or Solution Architect. Our intensive SAP BTP training program is specifically designed to meet this escalating demand. This professional SAP BTP course provides deep, practical expertise across all core BTP pillars, preparing you for the most complex enterprise challenges.",
    },
    "sap-crm": {
      courseDescription: "Become an SAP CRM professional with our hands-on training. Learn customer relationship management processes and implementation.",
    },
    "sap-srm": {
      courseDescription: "Learn SAP Supplier Relationship Management with our comprehensive training program. Master procurement processes and supplier collaboration.",
    },
    "sap-apo": {
      courseDescription: "Gain expertise in SAP Advanced Planning and Optimization. Learn demand planning, supply network planning, and production scheduling.",
    },
    "sap-ibp": {
      courseDescription: "Master SAP Integrated Business Planning with our training program. Learn sales and operations planning, demand, and inventory optimization.",
    },
    "sap-bibw": {
      courseDescription: "Become an SAP BI/BW expert with our comprehensive training. Learn data warehousing, reporting, and analytics in SAP.",
    },
    "sap-analytic-cloud": {
      courseDescription: "Learn SAP Analytics Cloud with our hands-on training. Master business intelligence, planning, and predictive analytics in the cloud.",
    },
    "sap-security-grc": {
      courseDescription: "Gain expertise in SAP Security and Governance, Risk & Compliance. Learn user administration, access control, and risk management in SAP.",
    },
    "sap-is-retail": {
      "courseDescription": "Elevate your consulting career in the rapidly growing retail sector with India's most specialized SAP IS-Retail training. As the core Industry Solution within the SAP ecosystem, SAP IS-Retail expertise is highly sought after by top consulting firms in cities like Bengaluru, Mumbai, and Pune, offering premium salary packages for specialized roles. Our intensive SAP IS-Retail online training program is meticulously structured to provide deep, end-to-end knowledge of retail logistics and management processes. This is one of the few SAP retail training courses that effectively bridges the gap between fundamental SAP modules (MM/SD) and the complexity of modern retail operations."
    },
    "sap-is-utilities": {
      "courseDescription": "Elevate your consulting career in the essential energy and public sector with our specialized SAP IS Utilities training. In India, where infrastructure development and smart city projects are key growth drivers, expert knowledge of the SAP Industry Solution for Utilities (IS-U) commands high salaries and stable roles, particularly in major metros. This intensive SAP IS Utilities training program is designed for functional and technical consultants seeking mastery over the entire utility lifecycle, from meter reading to customer collection (the Meter-to-Cash process). By focusing on real-world application, this SAP IS Utilities training provides immediate job-readiness."
    },
    "sap-plm": {
      "courseDescription": "Complete training in SAP Product Lifecycle Management covering product development, document management, engineering changes, and compliance."
    },
    "sap-le": {
      "courseDescription": "Professional training in SAP Legal Entity management tools covering compliance, monitoring, integration and automation for corporate legal operations."
    },
    "sap-healthcare": {
      "courseDescription": "Specialized training in SAP Healthcare solutions covering patient management, clinical processes, medical documentation and billing."
    },
    "sap-is-banking": {
      "courseDescription": "Comprehensive training in SAP for Banking solutions covering loans management, payment processing, and financial product configuration."
    },
    "sap-is-bpc": {
      "courseDescription": "Professional training in SAP Business Planning and Consolidation covering financial planning, budgeting, forecasting and consolidation."
    },
    "sap-pm": {
      "courseDescription": "Comprehensive training in SAP Plant Maintenance covering breakdown maintenance, planned maintenance, and technical objects management."
    },
    "sap-ess": {
      "courseDescription": "Training in SAP Employee Self-Service covering personnel information, working time management, benefits, and travel management."
    },
    "sap-hybris-ecommerce": {
      "courseDescription": "Complete training in SAP Hybris Commerce covering omni-channel commerce, product management, and customer experience."
    },
    "sap-bo": {
      "courseDescription": "Comprehensive training in SAP Business Objects covering data warehousing, universe design, web intelligence, and dashboard development."
    },
    "sap-bobj": {
      "courseDescription": "Advanced training in SAP BusinessObjects BI platform covering data modeling, reporting, analytics, and administration."
    },
    "sap-fieldglass": {
      "courseDescription": "Training in SAP Fieldglass covering contingent workforce management, SOW management, and services procurement."
    },
    "sap-data-archiving": {
      "courseDescription": "Specialized training in SAP Data Archiving covering archive object configuration, data retention, and compliance."
    },
    "sap-solution-manager": {
      "courseDescription": "Comprehensive training in SAP Solution Manager covering system monitoring, service desk, and implementation methodologies."
    },
    "sap-aerospace-and-defense": {
      "courseDescription": "Specialized training in SAP solutions for Aerospace & Defense covering manufacturing, MRO, and compliance requirements."
    }
  };

  useEffect(() => {
    setLoading(true);
    // Generate random learner count between 1000 and 5000
    setLearnerCount(Math.floor(Math.random() * 4000) + 1000);

    // Select 3 random profile pictures
    const shuffled = [...profilePictures].sort(() => 0.5 - Math.random());
    setProfilePics(shuffled.slice(0, 3));

    fetch("/data/sapCourses.json")
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
          setAdditionalContent(sapAdditionalContent[foundCourse.course_name] || {});
        } else {
          console.error("Course not found:", courseName);
        }

        setAdditionalContent(sapAdditionalContent[path] || {});
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
        {/* SEO Meta Tags
        <Helmet>
          <title>{course.meta_title || `${course.course_name}`}</title>
          <meta name="description" content={course.meta_description || `Learn ${course.course_name} with our comprehensive training program`} />
          <meta property="og:title" content={course.meta_title || `${course.course_name} Training | ICLP`} />
          <meta property="og:description" content={course.meta_description || `Learn ${course.course_name} with our comprehensive training program`} />
          <meta name="keywords" content={`${course.course_name}, SAP training, SAP course, SAP certification, ${course.course_name} online training`} />
          <meta property="og:url" content={window.location.href} />
  {course.canonical_url && <link rel="canonical" href={course.canonical_url} />}
        </Helmet> */}

        
        
        {/* Hero Section */}
        <div className="cdp-hero">
          <div className="cdp-hero-content">
            <div className="cdp-hero-left">
              <span className="cdp-tag">SAP TRAINING</span>
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
                  <span>4.8 ({learnerCount.toLocaleString()} learners)</span>
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
                  <h3>SAP Course Highlights</h3>

                  <div className="cdp-booking-highlights">
                    <div className="cdp-booking-highlight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#314097"
                      >
                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                      </svg>
                      <span>Real-world SAP Implementation Scenarios</span>
                    </div>
                    <div className="cdp-booking-highlight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1FAA59"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      <span>Hands-on SAP System Access</span>
                    </div>
                    <div className="cdp-booking-highlight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#314097"
                      >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      <span>SAP Certification Preparation</span>
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
                      <span>24/7 SAP Expert Support</span>
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
{/* Career Benefits Section */}
{course.career_benefits && (
  <section className="w-full py-10 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-3 sm:mb-4">
        {course.career_benefits.heading}
      </h2>
      <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
        {course.career_benefits.description}
      </p>
      <ul className="space-y-3">
        {course.career_benefits.points.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 bg-white shadow-sm rounded-lg px-3 py-3 sm:px-4 sm:py-3 border border-slate-100"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
            <span className="text-slate-800 text-xs sm:text-sm md:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
)}

{/* Curriculum Overview */}
{course.curriculum_overview && (
  <section className="w-full bg-white py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
        {course.curriculum_overview.heading}
      </h2>
      <p className="text-slate-700 leading-relaxed">
        {course.curriculum_overview.intro}
      </p>
    </div>
  </section>
)}

{/* Primary Track (e.g., FI) */}
{course.track_overview_primary && (
  <section className="w-full bg-slate-50 py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
        {course.track_overview_primary.heading}
      </h3>
      <p className="text-slate-700 mb-4">
        {course.track_overview_primary.description}
      </p>
      <ul className="space-y-2">
        {course.track_overview_primary.topics.map(
          (item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm md:text-base text-slate-800"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              <span>{item}</span>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
)}

{/* Secondary Track (e.g., CO) */}
{course.track_overview_secondary && (
  <section className="w-full bg-slate-50 py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
        {course.track_overview_secondary.heading}
      </h3>
      <p className="text-slate-700 mb-4">
        {course.track_overview_secondary.description}
      </p>
      <ul className="space-y-2">
        {course.track_overview_secondary.topics.map(
          (item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm md:text-base text-slate-800"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
              <span>{item}</span>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
)}

{/* Certification Info */}
{course.certification_info && (
  <section className="w-full bg-white py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
        {course.certification_info.heading}
      </h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        {course.certification_info.intro}
      </p>
      <ul className="space-y-3">
        {course.certification_info.highlights.map(
          (item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              <span className="text-slate-800 text-sm md:text-base">
                {item}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
)}

{/* Why Institute */}
{course.why_institute && (
  <section className="w-full bg-white py-12">
    <div className="max-w-5xl mx-auto px-4 text-slate-900">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        {course.why_institute.heading}
      </h2>
      <p className="text-slate-700 mb-6">
        {course.why_institute.intro}
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {course.why_institute.instructor_expertise && (
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="text-lg font-semibold mb-2">
              {course.why_institute.instructor_expertise.heading}
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              {course.why_institute.instructor_expertise.description}
            </p>
          </div>
        )}

        {course.why_institute.training_modes && (
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="text-lg font-semibold mb-2">
              {course.why_institute.training_modes.heading}
            </h3>
            <p className="text-slate-700 text-sm md:text-base mb-3">
              {course.why_institute.training_modes.description}
            </p>
            <ul className="space-y-2">
              {course.why_institute.training_modes.options.map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm md:text-base text-slate-800"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
)}


        {/* What You'll Learn Section */}
        <div className="cdp-section cdp-learn-section">
          <div className="cdp-learn-container">
            <div className="cdp-learn-content">
              <h2 className="cdp-section-title">SAP Skills You'll Gain</h2>
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
              <h3>Our SAP Graduates Work At</h3>
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
          <h2 className="cdp-section-title">SAP Course Curriculum</h2>

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
                <h3 className="cdp-book-enquiry-title">SAP Course Questions?</h3>
                <p className="cdp-book-enquiry-text">
                  Book a free consultation with our SAP experts
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
                <span className="iclp-cert-final-badge">SAP CERTIFICATION</span>
                <h2 className="iclp-cert-final-title">
                  SAP <span>Certification</span>
                </h2>
                <p className="iclp-cert-final-description">
                  Earn a recognized SAP credential that validates your technical
                  expertise and opens doors to new career opportunities in the SAP
                  ecosystem.
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
                  <span>Globally Recognized SAP Certification</span>
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
                  <span>Hands-on SAP System Experience</span>
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
                  <span>Career Advancement in SAP</span>
                </div>
              </div>

              <button
                className="iclp-cert-final-cta"
                onClick={() => setShowBookingModal(true)}
              >
                Get SAP Certified
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
                  alt="SAP Certification"
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
          <h2 className="cdp-section-title">Our SAP Hiring Partners</h2>
          <p className="cdp-section-subtitle">
            Top companies where our SAP graduates work
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

        <CourseFAQs/>
        {/* CTA Section */}
        <div className="cdp-section cdp-cta-section">
          <div className="cdp-cta-card">
            <h2>Ready to Start Your SAP {course.course_name} Journey?</h2>
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
                Get Free SAP Consultation
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

export default SapCourseDetailsPage;