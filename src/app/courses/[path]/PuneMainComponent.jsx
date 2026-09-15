"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  FaStar, FaDownload, FaCheckCircle, FaPhone, FaTrophy,
  FaClock, FaUsers, FaCertificate, FaChevronDown, FaChevronRight,
  FaShieldAlt, FaGraduationCap, FaBriefcase, FaArrowRight, FaMapMarkerAlt,
  FaLaptopCode, FaMedal, FaRocket,
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

const stats = [
  { label: "Students Trained", value: "10,000+" },
  { label: "Placement Rate", value: "95%" },
  { label: "Expert Trainers", value: "50+" },
  { label: "Training Hours", value: "40+" },
];

export default function PuneMainComponent({ course }) {
  const [openModule, setOpenModule] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [learnerCount, setLearnerCount] = useState(1500);

  useEffect(() => {
    if (course?.course_name) {
      localStorage.setItem("currentCourseName", course.course_name);
    }
  }, [course]);

  useEffect(() => { setLearnerCount(Math.floor(Math.random() * 4000) + 1000); }, []);

  const renderWithStrong = (text) => {
    if (!text) return null;
    return text.split(/(<strong>.*?<\/strong>)/g).map((part, i) =>
      part.startsWith("<strong>")
        ? <strong key={i} className="text-emerald-400">{part.replace(/<\/?strong>/g, "")}</strong>
        : part
    );
  };

  const downloadSyllabusPDF = () => {
    if (!course) return;
    const doc = new jsPDF();
    let yPos = 20;
    doc.setFontSize(22);
    doc.setTextColor(5, 150, 105);
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
      headStyles: { fillColor: [5, 150, 105], textColor: [255, 255, 255], fontStyle: "bold" },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 100 } },
    });
    doc.save(`${course.course_name}_Syllabus.pdf`);
  };

  const syllabusChunks = course.syllabus
    ? [
        course.syllabus.slice(0, Math.ceil(course.syllabus.length / 2)),
        course.syllabus.slice(Math.ceil(course.syllabus.length / 2)),
      ]
    : [[], []];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero — teal/emerald gradient */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#047857] py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-3">
                <FaMapMarkerAlt className="text-emerald-300" />
                <span className="text-emerald-300 font-semibold text-sm uppercase tracking-widest">Pune</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-emerald-400 text-[#064e3b] px-3 py-1 rounded-full text-xs font-bold uppercase">Online</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Classroom</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                {course.name || course.course_name}
              </h1>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < 4 ? "text-yellow-300 text-lg" : "text-yellow-300/30 text-lg"} />
                ))}
                <span className="text-emerald-200 ml-2 text-sm">4.8 ({learnerCount.toLocaleString()} learners)</span>
              </div>
              <p className="text-emerald-100 text-lg leading-relaxed mb-8">{course.description}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-[#064e3b] px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
                >
                  ENROLL NOW <FaArrowRight />
                </button>
                <button
                  onClick={downloadSyllabusPDF}
                  className="inline-flex items-center gap-2 border-2 border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-[#064e3b] px-6 py-4 rounded-xl font-semibold transition-all"
                >
                  <FaDownload /> Syllabus
                </button>
              </div>
            </div>

            {/* Highlights card */}
            <div className="bg-white rounded-3xl p-7 shadow-2xl">
              <h3 className="text-xl font-bold text-[#064e3b] mb-5 flex items-center gap-2">
                <FaRocket className="text-emerald-500" /> Course Highlights
              </h3>
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
                  <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50 transition-colors">
                    <span className="text-emerald-500 text-xl">{item.icon}</span>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-[#064e3b] rounded-xl p-3 text-center">
                <a href="tel:+918681026181" className="text-white flex items-center justify-center gap-2 hover:text-emerald-300 transition-colors">
                  <FaPhone className="text-emerald-400" />
                  Call us: <strong>+91 8681026181</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-emerald-600 py-6">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-emerald-400 last:border-0 px-4">
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-emerald-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      {course.career_benefits && (
        <section className="py-14 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#064e3b] mb-3">
              {renderWithStrong(course.career_benefits.heading)}
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.career_benefits.description }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.career_benefits.points.map((item, i) => (
                <div key={i} className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 right-4 text-emerald-400 text-2xl font-black opacity-20">{i + 1}</div>
                  <FaCheckCircle className="text-emerald-500 text-xl mb-3" />
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Overview */}
      {course.curriculum_overview && (
        <section className="py-10 bg-[#f0fdf4]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#064e3b] mb-3"
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
                <div className="rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-500 transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <FaLaptopCode className="text-emerald-500 text-xl" />
                    <h3 className="text-xl font-bold text-[#064e3b]"
                      dangerouslySetInnerHTML={{ __html: course.track_overview_primary.heading }} />
                  </div>
                  <p className="text-slate-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_primary.description }} />
                  <ul className="space-y-2">
                    {course.track_overview_primary.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: t }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {course.track_overview_secondary && (
                <div className="rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-500 transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <FaMedal className="text-emerald-500 text-xl" />
                    <h3 className="text-xl font-bold text-[#064e3b]"
                      dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.heading }} />
                  </div>
                  <p className="text-slate-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: course.track_overview_secondary.description }} />
                  <ul className="space-y-2">
                    {course.track_overview_secondary.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
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
      <section className="py-14 bg-[#f0fdf4]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#064e3b] mb-6">Skills You&apos;ll Gain</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.what_youll_learn?.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100 hover:border-emerald-400 hover:shadow-sm transition-all">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#064e3b] mb-4 text-center">Our Graduates Work At</h3>
              <div className="grid grid-cols-3 gap-3">
                {hiringPartners.slice(0, 6).map((img, i) => (
                  <div key={i} className="bg-[#f0fdf4] p-3 rounded-xl flex items-center justify-center border border-emerald-100">
                    <img src={img} alt={`Partner ${i + 1}`} className="max-h-10 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus — tabbed layout */}
      <section className="py-14 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#064e3b] mb-2 text-center">Course Curriculum</h2>
          <p className="text-slate-500 text-center mb-8">Structured modules designed for real-world readiness</p>

          {/* Tab switcher */}
          <div className="flex justify-center gap-3 mb-8">
            {["Part 1", "Part 2"].map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeTab === i
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {syllabusChunks[activeTab]?.map((module, i) => {
                const idx = activeTab === 0 ? i : i + syllabusChunks[0].length;
                return (
                  <div key={idx} className="border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-emerald-400 transition-colors">
                    <button
                      onClick={() => setOpenModule(openModule === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-emerald-50"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-600 text-white font-bold px-3 py-1 rounded-lg text-sm">{idx + 1}</span>
                        <span className="font-semibold text-[#064e3b]">{module.module}</span>
                      </div>
                      {openModule === idx ? <FaChevronDown className="text-emerald-500" /> : <FaChevronRight className="text-slate-400" />}
                    </button>
                    {openModule === idx && (
                      <div className="px-5 pb-5 bg-emerald-50">
                        <ul className="space-y-2 pt-3">
                          {module.subtopics.map((topic, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-700 text-sm">
                              <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#064e3b] to-[#047857] rounded-2xl p-5 text-center">
                <img src="/Logo.png" alt="ICLP Technologies" className="h-12 mx-auto mb-4 brightness-0 invert" loading="lazy" />
                <button
                  onClick={downloadSyllabusPDF}
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#064e3b] py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaDownload /> Download Syllabus
                </button>
              </div>
              <div className="border-2 border-emerald-200 rounded-2xl p-5 text-center bg-white">
                <h3 className="text-lg font-bold text-[#064e3b] mb-2">Have Questions?</h3>
                <p className="text-slate-500 text-sm mb-4">Book a free consultation with our experts</p>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-colors"
                >
                  Book Free Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Institute — timeline style */}
      {course.why_institute && (
        <section className="py-14 bg-[#f0fdf4]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#064e3b] mb-3"
              dangerouslySetInnerHTML={{ __html: course.why_institute.heading }} />
            <p className="text-slate-600 text-lg mb-10"
              dangerouslySetInnerHTML={{ __html: course.why_institute.intro }} />
            <div className="relative border-l-4 border-emerald-300 pl-8 space-y-8 ml-4">
              {course.why_institute.instructor_expertise && (
                <div className="relative">
                  <span className="absolute -left-[2.85rem] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow" />
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                    <h3 className="text-lg font-bold text-[#064e3b] mb-2"
                      dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.heading }} />
                    <p className="text-slate-600"
                      dangerouslySetInnerHTML={{ __html: course.why_institute.instructor_expertise.description }} />
                  </div>
                </div>
              )}
              {course.why_institute.training_modes && (
                <div className="relative">
                  <span className="absolute -left-[2.85rem] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow" />
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                    <h3 className="text-lg font-bold text-[#064e3b] mb-2"
                      dangerouslySetInnerHTML={{ __html: course.why_institute.training_modes.heading }} />
                    <ul className="space-y-2 mt-3">
                      {course.why_institute.training_modes.options.map((opt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1" />
                          <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: opt }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Certification */}
      {course.certification_info && (
        <section className="py-14 bg-gradient-to-br from-[#064e3b] to-[#065f46]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-emerald-400 text-[#064e3b] px-4 py-1 rounded-full text-sm font-bold mb-4">
                  OFFICIAL CERTIFICATION
                </span>
                <h2 className="text-3xl font-bold text-white mb-3"
                  dangerouslySetInnerHTML={{ __html: course.certification_info.heading }} />
                <p className="text-emerald-100 mb-6"
                  dangerouslySetInnerHTML={{ __html: course.certification_info.intro }} />
                <ul className="space-y-3">
                  {course.certification_info.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCertificate className="text-emerald-400 flex-shrink-0 mt-1" />
                      <span className="text-emerald-100 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="mt-6 inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-[#064e3b] px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                >
                  Get Certified <FaArrowRight />
                </button>
              </div>
              <div className="flex justify-center cursor-pointer" onClick={() => setShowBookingModal(true)}>
                <div className="w-48 rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  <img src="/certification.png" alt="ICLP Certification" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CourseAdvantagesTools course={course} />

      {/* Hiring Partners */}
      <section className="py-14 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#064e3b] mb-2 text-center">Our Hiring Partners</h2>
          <p className="text-slate-500 text-center mb-8">Top companies where our graduates work</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {hiringPartners.map((img, i) => (
              <div key={i} className="bg-[#f0fdf4] p-4 rounded-2xl flex items-center justify-center border border-emerald-100 hover:border-emerald-400 hover:shadow-md transition-all">
                <img src={img} alt={`Partner ${i + 1}`} className="max-h-14 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {course.faqs?.length > 0 && <CourseFAQs faqs={course.faqs} />}

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-teal-600">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Start Your {course.course_name} Journey in Pune?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">Limited seats available for the next batch</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-emerald-400 hover:bg-emerald-300 text-[#064e3b] px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="border-2 border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all"
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
