"use client";
import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  FaStar, FaDownload, FaCheckCircle, FaPhone, FaTrophy,
  FaClock, FaUsers, FaCertificate, FaChevronDown, FaChevronRight,
  FaShieldAlt, FaGraduationCap, FaBriefcase, FaArrowRight, FaMapMarkerAlt,
} from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ModalBooking = dynamic(() => import("../../components/ModalBooking/ModalBooking"), { ssr: false });
const RelatedCourses = dynamic(() => import("../../components/RelatedCourses/RelatedCourses"));
const CourseFAQs = dynamic(() => import("../../components/faq/faq"));
const CourseAdvantagesTools = dynamic(() => import("../../components/CourseAdvantagesTools/CourseAdvantagesTools"));

const hiringPartners = [
  "/companies/Accenture.png", "/companies/capgemini.webp", "/companies/Cognizant-Logo.jpg",
  "/companies/adastra.png", "/companies/data_matics.png", "/companies/dmi.png",
  "/companies/encore.jpeg", "/companies/HCLTech.png", "/companies/ibm.jpg",
  "/companies/images.png", "/companies/tcs.png", "/companies/transworld.jpg",
  "/companies/willy.png", "/companies/wipro.jpg", "/companies/zoho.png",
];

export default function BangaloreMainComponent({ course }) {
  const [openModule, setOpenModule] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(true);

  useEffect(() => {
    if (course?.course_name) {
      localStorage.setItem("currentCourseName", course.course_name);
    }
  }, [course]);

  const [learnerCount, setLearnerCount] = useState(1500);
  useEffect(() => { setLearnerCount(Math.floor(Math.random() * 4000) + 1000); }, []);

  const renderWithStrong = (text) => {
    if (!text) return null;
    return text.split(/(<strong>.*?<\/strong>)/g).map((part, i) =>
      part.startsWith("<strong>")
        ? <strong key={i} className="text-blue-400">{part.replace(/<\/?strong>/g, "")}</strong>
        : part
    );
  };

  const downloadSyllabusPDF = () => {
    if (!course) return;
    const doc = new jsPDF();
    let yPos = 20;
    doc.setFontSize(22);
    doc.setTextColor(1, 55, 125);
    doc.text(course.course_name, 15, yPos);
    yPos += 15;
    doc.setFontSize(12);
    const descLines = doc.splitTextToSize(course.description, 180);
    doc.text(descLines, 15, yPos);
    yPos += descLines.length * 7 + 10;
    const syllabusData = course.syllabus.map((m, i) => [`Module ${i + 1}`, m.module, m.subtopics.join("\n")]);
    autoTable(doc, {
      startY: yPos,
      head: [["Module No.", "Module Name", "Subtopics"]],
      body: syllabusData,
      theme: "striped",
      headStyles: { fillColor: [1, 55, 125], textColor: [255, 255, 255], fontStyle: "bold" },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 100 } },
    });
    doc.save(`${course.course_name}_Syllabus.pdf`);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero — dark theme variant */}
      <section className="bg-[#0a0f2e] py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Bangalore</span>
              </div>
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                ONLINE & CLASSROOM
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {course.name || course.course_name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < 4 ? "text-yellow-400 text-lg" : "text-yellow-400/40 text-lg"} />
                ))}
                <span className="text-gray-300 ml-1 text-sm">4.8 ({learnerCount.toLocaleString()} learners)</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
                >
                  ENROLL NOW <FaArrowRight />
                </button>
                <button
                  onClick={downloadSyllabusPDF}
                  className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-4 rounded-lg font-semibold transition-all"
                >
                  <FaDownload /> Syllabus
                </button>
              </div>
            </div>

            {/* Highlights card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-5">Course Highlights</h3>
              <div className="space-y-3">
                {[
                  { icon: <FaTrophy />, text: "Hands-on Real-time Projects" },
                  { icon: <FaClock />, text: "Flexible Learning Hours" },
                  { icon: <FaUsers />, text: "40+ Hours of Training" },
                  { icon: <FaBriefcase />, text: "100% Placement Assistance" },
                  { icon: <FaShieldAlt />, text: "24/7 Expert Support" },
                  { icon: <FaGraduationCap />, text: "Lifetime Access" },
                  { icon: <FaCertificate />, text: "ISO Accredited Certificate" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-blue-400 text-xl">{item.icon}</span>
                    <span className="text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
                <a href="tel:+918681026181" className="text-white flex items-center justify-center gap-2 hover:text-blue-400 transition-colors">
                  <FaPhone className="text-blue-400" />
                  Call us: <strong>+91 8681026181</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      {course.career_benefits && (
        <section className="py-12 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0a0f2e] mb-3">
              {renderWithStrong(course.career_benefits.heading)}
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.career_benefits.description }} />
            <div className="grid sm:grid-cols-3 gap-4">
              {course.career_benefits.points.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#0a0f2e] rounded-xl p-5 text-white">
                  <FaCheckCircle className="text-blue-400 text-xl flex-shrink-0 mt-1" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Overview */}
      {course.curriculum_overview && (
        <section className="py-10 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0a0f2e] mb-3"
              dangerouslySetInnerHTML={{ __html: course.curriculum_overview.heading }} />
            <p className="text-slate-600 text-lg"
              dangerouslySetInnerHTML={{ __html: course.curriculum_overview.intro }} />
          </div>
        </section>
      )}

      {/* Track Overviews */}
      {(course.track_overview_primary || course.track_overview_secondary) && (
        <section className="py-10 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {course.track_overview_primary && (
                <div className="border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-bold text-[#0a0f2e] mb-3"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_primary.heading }} />
                  <p className="text-slate-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_primary.description }} />
                  <ul className="space-y-2">
                    {course.track_overview_primary.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: t }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {course.track_overview_secondary && (
                <div className="border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-bold text-[#0a0f2e] mb-3"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.heading }} />
                  <p className="text-slate-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.description }} />
                  <ul className="space-y-2">
                    {course.track_overview_secondary.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: t }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Skills + Partners */}
      <section className="py-12 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0a0f2e] mb-6">Skills You'll Gain</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.what_youll_learn?.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                    <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-[#0a0f2e] mb-4 text-center">Our Graduates Work At</h3>
              <div className="grid grid-cols-3 gap-3">
                {hiringPartners.slice(0, 6).map((img, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-lg flex items-center justify-center border border-slate-100">
                    <img src={img} alt={`Partner ${i + 1}`} className="max-h-10 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a0f2e] mb-8 text-center">Course Curriculum</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {course.syllabus?.map((module, i) => (
                <div key={i} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors">
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-[#0a0f2e] text-white font-bold px-3 py-1 rounded-lg text-sm">{i + 1}</span>
                      <span className="font-semibold text-[#0a0f2e]">{module.module}</span>
                    </div>
                    {openModule === i ? <FaChevronDown className="text-blue-500" /> : <FaChevronRight className="text-slate-400" />}
                  </button>
                  {openModule === i && (
                    <div className="px-5 pb-5 bg-slate-50">
                      <ul className="space-y-2 pt-3">
                        {module.subtopics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-700 text-sm">
                            <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="bg-[#0a0f2e] rounded-xl p-5 text-center">
                <img src="/Logo.png" alt="ICLP Technologies" className="h-12 mx-auto mb-4 brightness-0 invert" loading="lazy" />
                <button
                  onClick={downloadSyllabusPDF}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaDownload /> Download Syllabus
                </button>
              </div>
              <div className="border-2 border-[#0a0f2e] rounded-xl p-5 text-center">
                <h3 className="text-lg font-bold text-[#0a0f2e] mb-2">Have Questions?</h3>
                <p className="text-slate-500 text-sm mb-4">Book a free consultation with our experts</p>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-[#0a0f2e] hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Book Free Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Institute */}
      {course.why_institute && (
        <section className="py-12 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0a0f2e] mb-3"
              dangerouslySetInnerHTML={{ __html: course.why_institute.heading }} />
            <p className="text-slate-600 text-lg mb-8"
              dangerouslySetInnerHTML={{ __html: course.why_institute.intro }} />
            <div className="grid md:grid-cols-2 gap-6">
              {course.why_institute.instructor_expertise && (
                <div className="bg-white rounded-2xl p-6 border-l-4 border-blue-600 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0a0f2e] mb-2"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.heading }} />
                  <p className="text-slate-600"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.description }} />
                </div>
              )}
              {course.why_institute.training_modes && (
                <div className="bg-white rounded-2xl p-6 border-l-4 border-blue-600 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0a0f2e] mb-2"
                    dangerouslySetInnerHTML={{ __html: course.why_institute.training_modes.heading }} />
                  <ul className="space-y-2 mt-3">
                    {course.why_institute.training_modes.options.map((opt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: opt }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Certification */}
      {course.certification_info && (
        <section className="py-12 bg-[#0a0f2e]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                  OFFICIAL CERTIFICATION
                </span>
                <h2 className="text-3xl font-bold text-white mb-3"
                  dangerouslySetInnerHTML={{ __html: course.certification_info.heading }} />
                <p className="text-gray-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: course.certification_info.intro }} />
                <ul className="space-y-3">
                  {course.certification_info.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCertificate className="text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-200 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
                >
                  Get Certified <FaArrowRight />
                </button>
              </div>
              <div className="flex justify-center cursor-pointer" onClick={() => setShowBookingModal(true)}>
                <div className="w-48 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  <img src="/certification.png" alt="ICLP Certification" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CourseAdvantagesTools course={course} />

      {/* Hiring Partners */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a0f2e] mb-2 text-center">Our Hiring Partners</h2>
          <p className="text-slate-500 text-center mb-8">Top companies where our graduates work</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {hiringPartners.map((img, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl flex items-center justify-center border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all">
                <img src={img} alt={`Partner ${i + 1}`} className="max-h-14 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {course.faqs?.length > 0 && <CourseFAQs faqs={course.faqs} />}

      {/* CTA */}
      <section className="py-12 bg-[#0a0f2e]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Start Your {course.course_name} Journey in Bangalore?
          </h2>
          <p className="text-gray-300 text-lg mb-6">Limited seats available for the next batch</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="border border-white/30 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <RelatedCourses currentCourseName={course.course_name} />

      {showBookingModal && <ModalBooking onClose={() => setShowBookingModal(false)} />}
    </div>
  );
}
