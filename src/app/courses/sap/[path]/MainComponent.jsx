"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import sapAdditionalContent from "./SapContent"
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



  // Generate random data once - memoized
  const learnerCount = 1733;
  const profilePics = [
    "/rev-1.jfif",
    "/rev-2.jfif",
    "/rev-3.jfif"
  ];


  useEffect(() => {
    if (course && path) {
      // Link course data with description using path
      const matchedContent = sapAdditionalContent[path];
      setAdditionalContent(matchedContent);

      console.log('Linked content:', { course: course.course_name, description: matchedContent?.courseDescription });
    }
  }, [course, path, sapAdditionalContent]);



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
                    4.8  (1,733+ learners)
                  </span>
                </div>

                {/* Profile Pics - Using Next.js Image */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {profilePics.map((pic, index) => (
                      <img
                        key={index}
                        src={pic}
                        alt={`Learner ${index + 1}`}
                        width="48"
                        height="48"
                        loading={index === 0 ? "eager" : "lazy"}  // Only first eager
                        decoding="async"
                        fetchpriority={index === 0 ? "high" : "low"}
                        className="w-12 h-12 rounded-full border-4 border-[#01377d] object-cover"
                        style={{ aspectRatio: '1/1' }}
                      />
                    ))}
                  </div>
                  <span className="text-[#97e7f5] font-semibold">
                    +{(learnerCount - 3).toLocaleString()} enrolled
                  </span>
                </div>
              </div>

              <p className="text-[#97e7f5] text-lg leading-relaxed mb-8"
              >
                {renderWithStrong(additionalContent?.courseDescription || "")}
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