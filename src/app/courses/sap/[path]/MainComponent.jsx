"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./CourseDetailsPage.css";
import { FaArrowRight, FaBriefcase, FaCertificate, FaCheckCircle, FaChevronDown, FaChevronRight, FaClock, FaDownload, FaGraduationCap, FaPhone, FaShieldAlt, FaStar, FaTrophy, FaUserTie } from "react-icons/fa";

// Dynamic imports for components below the fold
const ModalBooking = dynamic(() => import("@/app/components/ModalBooking/ModalBooking"), {
  loading: () => <div>Loading...</div>
});
const RelatedCoursesSlider = dynamic(() => import("@/app/components/RelatedCourses/RelatedCourses"));
const CourseReviews = dynamic(() => import("@/app/components/CourseReviews/CourseReviews"));
const CourseFAQs = dynamic(() => import("@/app/components/faq/faq"));
const CourseAdvantagesTools = dynamic(() => import("@/app/components/CourseAdvantagesTools/CourseAdvantagesTools"));

const SapCourseDetailsPage = () => {
  const { courseName } = useParams();
  const { path } = useParams();
  const [course, setCourse] = useState(null);
  const [additionalContent, setAdditionalContent] = useState(null);
  const [openModule, setOpenModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Hiring partners data - memoized
  const hiringPartners = useMemo(() => [
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
  ], []);

  // Random profile pictures from Unsplash - memoized
  const profilePictures = useMemo(() => [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  ], []);

  // Generate random data once - memoized
  const learnerCount = useMemo(() => Math.floor(Math.random() * 4000) + 1000, []);
  const profilePics = useMemo(() => {
    const shuffled = [...profilePictures].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [profilePictures]);

  // SAP-specific additional content - moved outside useEffect
  const sapAdditionalContent = useMemo(() => ({
    "sap-fico": {
      courseDescription:
        "Are you ready to become a certified <strong>SAP FICO</strong> expert? ICLP Tech offers the most comprehensive and industry-aligned <strong> SAP FICO</strong> training available, tailored for aspiring and current finance professionals in <strong>India</strong>. Our program is designed to transform you into a proficient SAP FICO consultant, covering the entire spectrum of Financial Accounting (FI) and Controlling (CO). We pride ourselves on delivering real-world, practical knowledge, ensuring our<strong> FICO course</strong> graduates are immediately job-ready. Whether you choose our flexible <strong>SAP FICO course online</strong> or our immersive classroom setup, you gain the expertise needed to secure your <strong>SAP FICO certificate</strong> and excel in the global job market.",
    },
    "sap-mm": {
      courseDescription:
        "Are you seeking a high-growth career in supply chain and logistics? ICLP Tech offers the leading<strong> SAP MM course</strong> in <strong>India</strong>, designed to transform aspiring professionals into expert <strong>SAP Material Management</strong> consultants.The<strong> SAP MM</strong> module is the logistical backbone of enterprises worldwide. Our specialized program provides practical, in-depth knowledge necessary to configure and manage the entire procurement and inventory lifecycle. Enrolling in our intensive <strong> MM </strong>training equips you with globally relevant skills and opens the door to top jobs across the Indian and international job markets. Choose ICLP Tech for comprehensive, career-focused<strong> SAP MM training online</strong> or in-class formats.",
    },
    "sap-sd": {
      courseDescription:
        "Are you ready to unlock a high-demand career path in corporate logistics and sales? ICLP Tech offers the most comprehensive <strong> SAP Sales and Distribution (SD)</strong> program in India, designed to master the entire Order-to-Cash (O2C) process. The SAP SD module is crucial for businesses globally, managing customer orders, pricing, billing, and shipping. Our expert-led SAP SD training goes beyond theory, focusing on real-world system configuration and implementation scenarios. By completing this program, you gain the skills needed to seamlessly integrate sales processes with other modules, ensuring you are prepared for both the SAP SD certification exam and a successful consulting career. Choose ICLP Tech for industry-validated SAP Sales and Distribution expertise.",
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
      courseDescription: "Start your journey toward becoming a certified logistics expert with the premier SAP TM Training program in India. Our comprehensive SAP Transportation Management Training Online is specifically designed for ambitious professionals seeking to master the complexities of modern supply chain execution. This is more than just an SAP TM Course; it is an integrated learning experience that covers both the critical functional configuration and the necessary technical knowledge. Join over 4,800 successful learners and secure your future in the booming logistics sector with ICLP's industry-leading SAP TM Training.",
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
      courseDescription: "Elevate your consulting career in the rapidly growing retail sector with India's most specialized SAP IS-Retail training. As the core Industry Solution within the SAP ecosystem, SAP IS-Retail expertise is highly sought after by top consulting firms in cities like Bengaluru, Mumbai, and Pune, offering premium salary packages for specialized roles. Our intensive SAP IS-Retail online training program is meticulously structured to provide deep, end-to-end knowledge of retail logistics and management processes. This is one of the few SAP retail training courses that effectively bridges the gap between fundamental SAP modules (MM/SD) and the complexity of modern retail operations."
    },
    "sap-is-utilities": {
      courseDescription: "Elevate your consulting career in the essential energy and public sector with our specialized SAP IS Utilities training. In India, where infrastructure development and smart city projects are key growth drivers, expert knowledge of the SAP Industry Solution for Utilities (IS-U) commands high salaries and stable roles, particularly in major metros. This intensive SAP IS Utilities training program is designed for functional and technical consultants seeking mastery over the entire utility lifecycle, from meter reading to customer collection (the Meter-to-Cash process). By focusing on real-world application, this SAP IS Utilities training provides immediate job-readiness."
    },
    "sap-plm": {
      courseDescription: "Complete training in SAP Product Lifecycle Management covering product development, document management, engineering changes, and compliance."
    },
    "sap-le": {
      courseDescription: "Professional training in SAP Legal Entity management tools covering compliance, monitoring, integration and automation for corporate legal operations."
    },
    "sap-healthcare": {
      courseDescription: "Specialized training in SAP Healthcare solutions covering patient management, clinical processes, medical documentation and billing."
    },
    "sap-is-banking": {
      courseDescription: "Comprehensive training in SAP for Banking solutions covering loans management, payment processing, and financial product configuration."
    },
    "sap-is-bpc": {
      courseDescription: "Professional training in SAP Business Planning and Consolidation covering financial planning, budgeting, forecasting and consolidation."
    },
    "sap-pm": {
      courseDescription: "Comprehensive training in SAP Plant Maintenance covering breakdown maintenance, planned maintenance, and technical objects management."
    },
    "sap-ess": {
      courseDescription: "Training in SAP Employee Self-Service covering personnel information, working time management, benefits, and travel management."
    },
    "sap-hybris-ecommerce": {
      courseDescription: "Complete training in SAP Hybris Commerce covering omni-channel commerce, product management, and customer experience."
    },
    "sap-bo": {
      courseDescription: "Comprehensive training in SAP Business Objects covering data warehousing, universe design, web intelligence, and dashboard development."
    },
    "sap-bobj": {
      courseDescription: "Advanced training in SAP BusinessObjects BI platform covering data modeling, reporting, analytics, and administration."
    },
    "sap-fieldglass": {
      courseDescription: "Training in SAP Fieldglass covering contingent workforce management, SOW management, and services procurement."
    },
    "sap-data-archiving": {
      courseDescription: "Specialized training in SAP Data Archiving covering archive object configuration, data retention, and compliance."
    },
    "sap-solution-manager": {
      courseDescription: "Comprehensive training in SAP Solution Manager covering system monitoring, service desk, and implementation methodologies."
    },
    "sap-aerospace-and-defense": {
      courseDescription: "Specialized training in SAP solutions for Aerospace & Defense covering manufacturing, MRO, and compliance requirements."
    }
  }), []);

  useEffect(() => {
    setLoading(true);

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
  }, [path, courseName, sapAdditionalContent]);

  // Memoized toggle function
  const toggleModule = useCallback((index) => {
    setOpenModule(prev => prev === index ? null : index);
  }, []);

  // Dynamic import for PDF libraries - only load when needed
  const downloadSyllabusPDF = useCallback(async () => {
    if (!course) return;
setShowBookingModal(true)
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");

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

    yPos += 10;

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
  }, [course]);

  if (loading)
    return <div className="cdp-loading">Loading course details...</div>;
  if (!course) return <div className="cdp-not-found">Course not found</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="text-white">
              <span className="inline-block bg-[#39FF14] text-[#01377d] px-4 py-2 rounded-full text-sm font-bold mb-4">
                SAP TRAINING
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
                    4.8 ({learnerCount.toLocaleString()} learners)
                  </span>
                </div>

                {/* Profile Pics - Using Next.js Image */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {profilePics.map((pic, index) => (
                      <Image
                        key={index}
                        src={pic}
                        alt={`Learner ${index + 1}`}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-4 border-[#01377d] object-cover"
                        loading="eager"
                        priority={index === 0}
                      />
                    ))}
                  </div>
                  <span className="text-[#97e7f5] font-semibold">
                    +{(learnerCount - 3).toLocaleString()} enrolled
                  </span>
                </div>
              </div>

              <p className="text-[#97e7f5] text-lg leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: additionalContent.courseDescription}}
              >
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
                SAP Course Highlights
              </h3>

              <div className="space-y-4">
                {[
                  { icon: <FaTrophy />, text: "Real-world SAP Implementation Scenarios", color: "#01377d" },
                  { icon: <FaClock />, text: "Hands-on SAP System Access", color: "#39FF14" },
                  { icon: <FaCertificate />, text: "SAP Certification Preparation", color: "#01377d" },
                  { icon: <FaUserTie />, text: "Industry Expert Trainers", color: "#39FF14" },
                  { icon: <FaShieldAlt />, text: "24/7 SAP Expert Support", color: "#01377d" },
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
                <a
                  href="tel:+918681026181"
                  className="text-white flex items-center justify-center gap-2"
                >
                  <FaPhone className="text-[#39FF14]" />
                  For queries: <strong>+91 8681026181</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits Section */}
      {course.career_benefits && (
        <section className="py-16 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
              {course.career_benefits.heading}
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {course.career_benefits.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.career_benefits.points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-[#39FF14] transition-colors"
                >
                  <FaCheckCircle className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Overview */}
      {course.curriculum_overview && (
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
              {course.curriculum_overview.heading}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {course.curriculum_overview.intro}
            </p>
          </div>
        </section>
      )}

      {/* Primary Track */}
      {course.track_overview_primary && (
        <section className="py-16 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#01377d] mb-4">
              {course.track_overview_primary.heading}
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              {course.track_overview_primary.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.track_overview_primary.topics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-2 h-2 rounded-full bg-[#39FF14] flex-shrink-0 mt-2" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Secondary Track */}
      {course.track_overview_secondary && (
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#01377d] mb-4">
              {course.track_overview_secondary.heading}
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              {course.track_overview_secondary.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.track_overview_secondary.topics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <div className="w-2 h-2 rounded-full bg-[#01377d] flex-shrink-0 mt-2" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certification Info */}
      {course.certification_info && (
        <section className="py-16 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
              {course.certification_info.heading}
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {course.certification_info.intro}
            </p>
            <div className="space-y-4">
              {course.certification_info.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-[#39FF14] transition-colors"
                >
                  <FaCertificate className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Institute */}
      {course.why_institute && (
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
              {course.why_institute.heading}
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              {course.why_institute.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {course.why_institute.instructor_expertise && (
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-[#39FF14] transition-colors">
                  <h3 className="text-xl font-bold text-[#01377d] mb-3">
                    {course.why_institute.instructor_expertise.heading}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {course.why_institute.instructor_expertise.description}
                  </p>
                </div>
              )}

              {course.why_institute.training_modes && (
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-[#39FF14] transition-colors">
                  <h3 className="text-xl font-bold text-[#01377d] mb-3">
                    {course.why_institute.training_modes.heading}
                  </h3>
                  <p className="text-slate-700 mb-4">
                    {course.why_institute.training_modes.description}
                  </p>
                  <ul className="space-y-2">
                    {course.why_institute.training_modes.options.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#39FF14] flex-shrink-0 mt-2" />
                        <span className="text-slate-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* What You'll Learn Section */}
      <section className="py-16 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-8">
                SAP Skills You'll Gain
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

            {/* Hiring Partners Preview - Using Next.js Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#01377d] mb-6 text-center">
                Our SAP Graduates Work At
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {hiringPartners.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-3 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={image}
                      alt={`Partner ${index + 1}`}
                      width={100}
                      height={48}
                      className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                      loading="lazy"
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-8 text-center">
            SAP Course Curriculum
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
              {/* Company Logo - Using Next.js Image */}
              <div className="bg-white rounded-xl p-6 text-center border-2 border-slate-200 shadow-lg">
                <Image
                  src="/Logo.png"
                  alt="ICLP Technologies"
                  width={150}
                  height={64}
                  className="h-16 mx-auto mb-4"
                  loading="lazy"
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
                <h3 className="text-xl font-bold mb-3">SAP Course Questions?</h3>
                <p className="text-[#97e7f5] mb-6">
                  Book a free consultation with our SAP experts
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#39FF14] text-[#01377d] px-4 py-2 rounded-full text-sm font-bold mb-4">
                SAP CERTIFICATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4">
                SAP <span className="text-[#39FF14]">Certification</span>
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Get industry-recognized SAP certification after completing your training program. Our certification validates your SAP skills globally.
              </p>
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-[#01377d] hover:bg-[#014a9f] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Get Certified Now <FaArrowRight />
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/certification.png"
                alt="SAP Certification"
                width={500}
                height={400}
                className="w-full max-w-md rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners - Full Section */}
      <section className="py-16 bg-white hiring-partners-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4 text-center">
            Our <span className="text-[#39FF14]">Hiring Partners</span>
          </h2>
          <p className="text-center text-slate-700 mb-12 max-w-2xl mx-auto">
            Join thousands of SAP professionals working at leading global companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {hiringPartners.map((image, index) => (
              <div
                key={index}
                className="bg-slate-50 p-4 rounded-xl flex items-center justify-center hover:shadow-xl transition-shadow border-2 border-slate-200 hover:border-[#39FF14]"
              >
                <Image
                  src={image}
                  alt={`Hiring Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Components - Lazy Loaded */}
      <CourseAdvantagesTools />
      <CourseFAQs />
      <CourseReviews />
      <RelatedCoursesSlider />

      {/* Modal */}
      {showBookingModal && <ModalBooking  onClose={() => setShowBookingModal(false)}/>}
    </div>
  );
};

export default SapCourseDetailsPage;