"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaCertificate, FaCheckCircle, FaChevronDown, FaChevronRight, FaClock, FaDownload, FaGraduationCap, FaPhone, FaShieldAlt, FaStar, FaTrophy, FaUserTie } from "react-icons/fa";

// ✅ Stagger loading with intersection observer
const ModalBooking = dynamic(() => import("@/app/components/ModalBooking/ModalBooking"), {
  ssr: false,
  loading: () => null // No skeleton needed for modals
});

const RelatedCoursesSlider = dynamic(() => import("@/app/components/RelatedCourses/RelatedCourses"), {
  loading: () => <div className="h-64 bg-slate-50" />
});

const CourseReviews = dynamic(() => import("@/app/components/CourseReviews/CourseReviews"), {
  loading: () => <div className="h-96 bg-slate-50" />
});

const CourseAdvantagesTools = dynamic(() => import("@/app/components/CourseAdvantagesTools/CourseAdvantagesTools"), {
  loading: () => <div className="h-64 bg-slate-50" />
});

const SapCourseDetailsPage = ({ getcourse, path }) => {
  const [course, setCourse] = useState(getcourse);
  console.log(getcourse); // ✅ Show skeleton immediately
  const [additionalContent, setAdditionalContent] = useState(null);
  const [openModule, setOpenModule] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  useEffect(() => {
    if (course?.course_name) {
      localStorage.setItem('currentCourseName', course.course_name);
    }
  }, [course?.course_name]);  // Hiring partners data - memoized
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



  // Generate random data once - memoized
  const learnerCount = 1733;
  const profilePics = [
    "/rev-1.jfif",
    "/rev-2.jfif",
    "/rev-3.jfif"
  ];

  // SAP-specific additional content - moved outside useEffect
  const SAP_ADDITIONAL_CONTENT = {
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
        "Ready to become a certified expert in manufacturing and supply chain management? ICLP Tech offers the most comprehensive <strong> SAP PP course </strong> in <strong> India</strong> , designed for professionals seeking to master the crucial Production Planning module. The <strong> SAP PP </strong> module is the central nervous system for manufacturing processes, managing everything from demand forecasting to shop floor control. Our expert-led program provides practical, end-to-end<strong>  SAP PP training</strong> , ensuring you gain hands-on proficiency in system configuration and implementation. By completing this specialized <strong> pp course</strong> , you secure the skills needed for career growth and preparation for the official <strong> SAP PP certificate</strong> . We empower you to drive efficiency and operational excellence in top industries across <strong> India</strong> .",
    },
    "sap-abap": {
      courseDescription:
        "Elevate your programming skills and step into the high-demand world of enterprise resource planning with ICLP's definitive <strong>SAP ABAP Course Online</strong>. Designed by industry veterans, this comprehensive program provides the foundation and advanced knowledge required to become a certified <strong>SAP ABAP professional</strong>. Our structured <strong>SAP ABAP Training</strong> covers everything from foundational concepts like data dictionary and Open SQL to advanced topics like Object-Oriented ABAP and system integration. If you are serious about securing a specialized role in the Indian IT sector, this is the essential <strong> SAP ABAP Course</strong> you need.",
    },
    "sap-transportation-management": {
      courseDescription: "Start your journey toward becoming a certified logistics expert with the premier<strong> SAP TM Training </strong>program in India. Our comprehensive <strong>SAP Transportation Management Training Online</strong> is specifically designed for ambitious professionals seeking to master the complexities of modern supply chain execution. This is more than just an <strong>SAP TM Course</strong>, it is an integrated learning experience that covers both the critical functional configuration and the necessary technical knowledge. Join over 4,800 successful learners and secure your future in the booming logistics sector with ICLP's industry-leading<strong> SAP TM Training</strong>.",
    },
    "sap-successfactors-online-training": {
      courseDescription: "Elevate your HR career with our industry-leading<strong>  SAP SuccessFactors training online</strong> . In the rapidly expanding Indian HR technology market, mastering cloud-based Human Experience Management (HXM) is essential. Our specialized <strong> SAP SuccessFactors course (SFC)</strong>  is meticulously designed to give you that competitive edge. This comprehensive <strong> SAP SuccessFactors training (SFT)</strong>  program goes beyond theoretical concepts, providing hands-on, practical skills development required by top multinational corporations and firms across India. We offer the most practical and up-to-date <strong> SAP SF training (SFSFT)</strong>  available today.",
    },
    "sap-quality-management-(qm)": {
      courseDescription: "Elevate your supply chain and manufacturing expertise with our specialized <strong>SAP QM course</strong>. In the fiercely competitive Indian market, mastering <strong>SAP Quality Management (QM)</strong> is critical for driving operational excellence, minimizing costs, and maintaining strict regulatory compliance. This professional <strong>SAP QM training </strong>program provides the deep functional knowledge required to implement and manage quality processes within the SAP ERP system. Our structured <strong>SAP quality management course</strong> is delivered by certified, industry experts, ensuring you gain practical, job-ready skills immediately applicable to leading companies across India. We focus on real-world scenarios, making this the premier <strong>SAP quality management training</strong> solution for serious professionals.",
    },
    "sap-ariba-training": {
      courseDescription: "Propel your career in procurement and supply chain management with India's most comprehensive <strong>SAP Ariba course</strong>. As enterprises across all sectors increasingly adopt cloud-based source-to-pay solutions, the demand for certified <strong>SAP Ariba training</strong> professionals is surging, particularly in the competitive Indian IT and consulting markets. This intensive<strong> SAP Ariba training program</strong> is designed to transform you into an expert consultant, equipped to implement, customize, and manage the full suite of Ariba applications. This professional<strong> SAP Ariba course</strong> is your gateway to a high-growth career.",
    },
    "sap-master-data-governance-(mdg)-on-s-4hana": {
      courseDescription: "Master the critical discipline of data governance with our industry-leading<strong> SAP MDG course</strong> online. In the S/4HANA era, data integrity is paramount, making specialized <strong>SAP MDG training</strong> essential for consultants in India. This professional program focuses exclusively on <strong>SAP Master Data Governance (MDG)</strong> on the S/4HANA platform, giving you the competitive edge in high-growth IT and consulting roles. This comprehensive <strong>MDG course </strong>covers the full lifecycle of all core data domains (Material, Business Partner, Finance), ensuring you are project-ready from day one.",
    },
    "sap-basis-administration": {
      courseDescription: "Launch your career as a core system administrator with India's leading <strong> SAP Basis course online</strong> .<strong>  SAP Basis</strong>  is the fundamental technical backbone of any enterprise SAP landscape, making the demand for skilled administrators constant and high across all major IT hubs in India. Our intensive<strong>  SAP Basis training program</strong>  is designed to transform you into an expert in system maintenance, performance tuning, and high availability. This is the definitive <strong> SAP Basis course</strong>  for professionals aiming to secure critical, stable IT roles.",
    },
    "sap-sales-cloud-(c4c)-training": {
      courseDescription: "Transform your career in digital sales and customer relationship management with the industry-leading <strong> SAP Sales Cloud training</strong> . Formerly known as<strong>  SAP C4C</strong> , the modern SAP Sales Cloud is crucial for businesses driving digital transformation in the rapidly expanding Indian market. Our comprehensive <strong> sap c4c online training program</strong>  is specifically designed for professionals seeking to master the SAP Customer Experience (CX) solution suite. This intensive <strong> sap sales cloud course online </strong> provides practical, hands-on skills in end-to-end sales cycle management, including lead-to-opportunity conversion, CPQ configuration, and vital S/4HANA integration.",
    },
    "sap-fscm": {
      courseDescription: "Gain expertise in SAP Financial Supply Chain Management. Learn credit management, collections, dispute management, and treasury processes.",
    },
    "sap-btp-training": {
      courseDescription: "The <strong>SAP Business Technology Platform (BTP) </strong>is the unified foundation for digital transformation, enabling businesses to integrate, extend, and innovate faster while maintaining a clean core on S/4HANA. For professionals in India, mastering this platform is no longer optional—it is the direct path to high-growth, stable roles as a Cloud Developer, Integration Specialist, or Solution Architect. Our intensive<strong>  SAP BTP training program </strong> is specifically designed to meet this escalating demand. This professional <strong> SAP BTP course </strong> provides deep, practical expertise across all core BTP pillars, preparing you for the most complex enterprise challenges.",
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
      courseDescription: "Elevate your consulting career in the rapidly growing retail sector with India's most specialized <strong> SAP IS-Retail training</strong> . As the core Industry Solution within the SAP ecosystem, <strong> SAP IS-Retail </strong> expertise is highly sought after by top consulting firms in cities like Bengaluru, Mumbai, and Pune, offering premium salary packages for specialized roles. Our intensive <strong> SAP IS-Retail online training program </strong> is meticulously structured to provide deep, end-to-end knowledge of retail logistics and management processes. This is one of the few <strong> SAP retail training courses</strong>  that effectively bridges the gap between fundamental SAP modules (MM/SD) and the complexity of modern retail operations."
    },
    "sap-is-utilities": {
      courseDescription: "Elevate your consulting career in the essential energy and public sector with our specialized <strong> SAP IS Utilities training</strong> . In India, where infrastructure development and smart city projects are key growth drivers, expert knowledge of the SAP Industry Solution for Utilities (IS-U) commands high salaries and stable roles, particularly in major metros. This intensive <strong> SAP IS Utilities training program</strong>  is designed for functional and technical consultants seeking mastery over the entire utility lifecycle, from meter reading to customer collection (the <strong> Meter-to-Cash </strong> process). By focusing on real-world application, this <strong> SAP IS Utilities training</strong>  provides immediate job-readiness."
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
    },
    "sap-ewm": {
      courseDescription: "Master SAP Extended Warehouse Management (EWM) for advanced warehouse automation, process optimization, and seamless integration with SAP ERP systems."
    },
    "sap-wm": {
      courseDescription: "Master SAP Warehouse Management (WM) module for optimizing warehouse operations, inventory control, and logistics processes with comprehensive hands-on training."
    },
    "sap-fico-chennai":{
       courseDescription:
        "Are you ready to become a certified <strong>SAP FICO</strong> expert? ICLP Tech offers the most comprehensive and industry-aligned <strong> SAP FICO</strong> training available, tailored for aspiring and current finance professionals in <strong>India</strong>. Our program is designed to transform you into a proficient SAP FICO consultant, covering the entire spectrum of Financial Accounting (FI) and Controlling (CO). We pride ourselves on delivering real-world, practical knowledge, ensuring our<strong> FICO course</strong> graduates are immediately job-ready. Whether you choose our flexible <strong>SAP FICO course online</strong> or our immersive classroom setup, you gain the expertise needed to secure your <strong>SAP FICO certificate</strong> and excel in the global job market.",

    },
    "sap-fico-bangalore":{
       courseDescription:
        "Are you ready to become a certified <strong>SAP FICO</strong> expert? ICLP Tech offers the most comprehensive and industry-aligned <strong> SAP FICO</strong> training available, tailored for aspiring and current finance professionals in <strong>India</strong>. Our program is designed to transform you into a proficient SAP FICO consultant, covering the entire spectrum of Financial Accounting (FI) and Controlling (CO). We pride ourselves on delivering real-world, practical knowledge, ensuring our<strong> FICO course</strong> graduates are immediately job-ready. Whether you choose our flexible <strong>SAP FICO course online</strong> or our immersive classroom setup, you gain the expertise needed to secure your <strong>SAP FICO certificate</strong> and excel in the global job market.",

    },
    "sap-fico-hyderabad":{
       courseDescription:
        "Are you ready to become a certified <strong>SAP FICO</strong> expert? ICLP Tech offers the most comprehensive and industry-aligned <strong> SAP FICO</strong> training available, tailored for aspiring and current finance professionals in <strong>India</strong>. Our program is designed to transform you into a proficient SAP FICO consultant, covering the entire spectrum of Financial Accounting (FI) and Controlling (CO). We pride ourselves on delivering real-world, practical knowledge, ensuring our<strong> FICO course</strong> graduates are immediately job-ready. Whether you choose our flexible <strong>SAP FICO course online</strong> or our immersive classroom setup, you gain the expertise needed to secure your <strong>SAP FICO certificate</strong> and excel in the global job market.",

    }

};
  useEffect(() => {
  if (course && path) {
    const matchedContent = SAP_ADDITIONAL_CONTENT[path];
    setAdditionalContent(matchedContent);

    console.log('Linked content:', { 
      course: course.course_name, 
      description: matchedContent?.courseDescription 
    });
  }
}, [course, path]);

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


  if (!course) return <div className="cdp-not-found">Course not found</div>;
  const renderWithStrong = (html) => {
    if (!html) return null;

    return html.split(/<\/?strong>/gi).map((part, index) => {
      // Odd indices = strong content, even = regular text
      if (index % 2 === 1) {
        return (
          <strong key={`strong-${index}`} className="text-white font-semibold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };


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
                    {/* 4.8  (1,733+ learners) */}
                  </span>
                </div>

                {/* Profile Pics - Using Next.js Image */}
                {/* <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {profilePics.map((pic, index) => (
                     <Image
  key={index}
  src={pic}
  alt={`Learner ${index + 1}`}
  width={48}
  height={48}
  loading={index === 0 ? "eager" : "lazy"}
  decoding="async"
  quality={60}
  priority={index === 0}
  className="w-12 h-12 rounded-full border-4 border-[#01377d] object-cover"
  style={{ aspectRatio: '1/1' }}
/>
                    ))}
                  </div>
                  <span className="text-[#97e7f5] font-semibold">
                    +{(learnerCount - 3).toLocaleString()} enrolled
                  </span>
                </div> */}
              </div>

              <p className="text-[#97e7f5] text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: additionalContent?.courseDescription || "" }}
              /> 

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
        <section className="py-8 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#01377d] mb-4"
            >
            {renderWithStrong(course.career_benefits.heading)}
            </h2>
            <p
              className="text-lg text-slate-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.career_benefits.description }}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {course.career_benefits.points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 border-slate-300 hover:border-[#39FF14] hover:shadow-lg transition-all"
                >
                  <FaCheckCircle className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                  <span
                    className="text-slate-800"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Overview */}
      {course.curriculum_overview && (
        <section className="py-8 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#01377d] mb-3"
              dangerouslySetInnerHTML={{ __html: course.curriculum_overview.heading }}
            />
            <p
              className="text-lg text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.curriculum_overview.intro }}
            />
          </div>
        </section>
      )}

      {/* Primary Track */}
      {course.track_overview_primary && (
        <section className="py-8 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#01377d] mb-3"
              dangerouslySetInnerHTML={{ __html: course.track_overview_primary.heading }}
            />
            <p
              className="text-lg text-slate-700 mb-5"
              dangerouslySetInnerHTML={{ __html: course.track_overview_primary.description }}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {course.track_overview_primary.topics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-slate-300 hover:border-[#39FF14] hover:shadow-md transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#39FF14] flex-shrink-0 mt-2" />
                  <span
                    className="text-slate-800"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Secondary Track */}
      {course.track_overview_secondary && (
        <section className="py-8 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#01377d] mb-3"
              dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.heading }}
            />
            <p
              className="text-lg text-slate-700 mb-5"
              dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.description }}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {course.track_overview_secondary.topics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border-2 border-slate-300 hover:border-[#01377d] hover:shadow-md transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#01377d] flex-shrink-0 mt-2" />
                  <span
                    className="text-slate-800"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certification Info */}
      {course.certification_info && (
        <section className="py-8 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#01377d] mb-3"
              dangerouslySetInnerHTML={{ __html: course.certification_info.heading }}
            />
            <p
              className="text-lg text-slate-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.certification_info.intro }}
            />
            <div className="space-y-4">
              {course.certification_info.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border-2 border-slate-300 rounded-xl p-4 hover:border-[#39FF14] hover:shadow-lg transition-all"
                >
                  <FaCertificate className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                  <span
                    className="text-slate-800"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Institute */}
      {course.why_institute && (
        <section className="py-8 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#01377d] mb-3"
              dangerouslySetInnerHTML={{ __html: course.why_institute.heading }}
            />
            <p
              className="text-lg text-slate-700 mb-6"
              dangerouslySetInnerHTML={{ __html: course.why_institute.intro }}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {course.why_institute.instructor_expertise && (
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-300 hover:border-[#39FF14] hover:shadow-lg transition-all">
                  <h3
                    className="text-xl font-bold text-[#01377d] mb-3"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.heading }}
                  />
                  <p
                    className="text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.description }}
                  />
                </div>
              )}

              {course.why_institute.training_modes && (
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-300 hover:border-[#39FF14] hover:shadow-lg transition-all">
                  <h3
                    className="text-xl font-bold text-[#01377d] mb-3"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.training_modes.heading }}
                  />
                  <p
                    className="text-slate-700 mb-4"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.training_modes.description }}
                  />
                  <ul className="space-y-2">
                    {course.why_institute.training_modes.options.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#39FF14] flex-shrink-0 mt-2" />
                        <span
                          className="text-slate-800"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
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
      <section className="py-12 bg-slate-50">
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
                    className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-slate-300 hover:border-[#39FF14] hover:shadow-md transition-all"
                  >
                    <FaCheckCircle className="text-[#39FF14] text-xl flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Partners Preview - Using Next.js Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-300">
              <h3 className="text-2xl font-bold text-[#01377d] mb-6 text-center">
                Our SAP Graduates Work At
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {hiringPartners.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-3 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow border border-slate-200"
                  >
                    <Image
                      src={image}
                      alt={`Partner ${index + 1}`}
                      width={100}
                      height={48}
                      className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                      unoptimized  // ✅ REQUIRED for Netlify
                      loading="lazy"
                        loader={({ src, width }) => `${src}?w=${width}`}
                          sizes="(max-width: 768px) 60px, 100px"  // ADD THIS
    quality={75}  // ADD THIS (default is 75, but make it explicit)
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
      <section className="py-12 bg-white">
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
                  className="bg-white rounded-xl border-2 border-slate-300 overflow-hidden hover:border-[#39FF14] hover:shadow-md transition-all"
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
              <div className="bg-white rounded-xl p-6 text-center border-2 border-slate-300 shadow-lg">
                <Image
                  src="/Logo.png"
                  alt="ICLP Technologies"
                  width={256}      // ✅ Reasonable logo width (adjust as needed)
                  height={64}      // ✅ Proportional height (4:1 ratio for logos)
                  className="h-16 mx-auto mb-4"  // ✅ Your exact styling preserved
                  unoptimized      // ✅ REQUIRED for Netlify
                  priority
                  quality={85}
                // ✅ Logo = above-the-fold (critical)
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
      <section className="py-12 bg-slate-50">
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
                width={448}              // ✅ max-w-md = ~448px on desktop
                height={252}             // ✅ 16:9 aspect ratio for certification badges
                className="w-full max-w-md rounded-xl shadow-2xl"
  loading="lazy"  // ADD THIS instead
                  quality={80}
          // ✅ Above-the-fold hero image
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners - Full Section */}
      <section className="py-12 bg-white hiring-partners-full">
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
                className="bg-slate-50 p-4 rounded-xl flex items-center justify-center hover:shadow-xl transition-shadow border-2 border-slate-300 hover:border-[#39FF14]"
              >
                <Image
                  src={image}
                  alt={`Hiring Partner ${index + 1}`}
                  width={120}          // ✅ Reasonable width for partner logos
                  height={64}          // ✅ Proportional height (matches max-h-16)
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
      <CourseReviews />
      <RelatedCoursesSlider />

      {/* Modal */}
      {showBookingModal && <ModalBooking onClose={() => setShowBookingModal(false)} />}
    </div>
  );
};

export default SapCourseDetailsPage;