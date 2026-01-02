"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  FaStar,
  FaDownload,
  FaCheckCircle,
  FaPhone,
  FaTrophy,
  FaClock,
  FaUsers,
  FaCertificate,
  FaChevronDown,
  FaChevronRight,
  FaShieldAlt,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import Head from "./Head";


// Lazy load components to improve initial load
const ModalBooking = dynamic(() => import("../../components/ModalBooking/ModalBooking"), { ssr: false });
const CourseReviews = dynamic(() => import("../../components/CourseReviews/CourseReviews"));
const RelatedCourses = dynamic(() => import("../../components/RelatedCourses/RelatedCourses"));
const CourseFAQs = dynamic(() => import("../../components/faq/faq"));
const CourseAdvantagesTools = dynamic(() => import("../../components/CourseAdvantagesTools/CourseAdvantagesTools"));


const CourseDetails = () => {
  const params = useParams();
  const path = params?.path;
  const courseName = params?.courseName;


  const [course, setCourse] = useState(null);
  const [additionalContent, setAdditionalContent] = useState(null);
  const [openModule, setOpenModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);


  // Memoize static data to prevent recalculation
  const learnerCount = useMemo(() => Math.floor(Math.random() * 4000) + 1000, []);
  
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


  const profilePictures = useMemo(() => [
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
  ], []);


  const profilePics = useMemo(() => {
    const shuffled = [...profilePictures].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [profilePictures]);


  useEffect(() => {
    setLoading(true);


    Promise.all([
      fetch("/data/courses.json").then((res) => res.json()),
      fetch("/data/additionalContent.json").then((res) => res.json()),
    ])
      .then(([coursesData, additionalData]) => {
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
          const additionalContentKey = Object.keys(additionalData).find(
            (key) => key === foundCourse.course_name
          );
          setAdditionalContent(additionalData[additionalContentKey] || {});
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [path, courseName]);


  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };


  const downloadSyllabusPDF = () => {
    if (!course) return;


    const doc = new jsPDF();


    const addWatermark = (doc) => {
      const watermarkText = "ICLP TECH";
      doc.setFontSize(50);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(169, 169, 169);
      doc.setGState(doc.GState({ opacity: 0.2 }));


      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();


      for (let i = 0; i < pageWidth; i += 150) {
        for (let j = 0; j < pageHeight; j += 150) {
          doc.text(watermarkText, i, j, { angle: -45, align: "center" });
        }
      }


      doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(0, 0, 0);
    };


    let yPos = 20;


    doc.setFontSize(22);
    doc.setTextColor(1, 55, 125);
    doc.text(course.course_name, 15, yPos);
    yPos += 10;


    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Course Description:", 15, yPos);
    yPos += 5;


    doc.setFontSize(12);
    const descriptionLines = doc.splitTextToSize(
      additionalContent?.courseDescription || course.description,
      180
    );
    doc.text(descriptionLines, 15, yPos);
    yPos += descriptionLines.length * 7 + 15;


    doc.setFontSize(14);
    doc.setTextColor(1, 55, 125);
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
    doc.setTextColor(1, 55, 125);
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
      styles: { fontSize: 12, cellPadding: 5, valign: "middle", halign: "left" },
      headStyles: { fillColor: [1, 55, 125], textColor: [255, 255, 255], fontStyle: "bold" },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 100 } },
      didDrawPage: (data) => { addWatermark(doc); },
    });


    doc.save(`${course.course_name}_Syllabus.pdf`);
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#01377d] border-t-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }


  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-slate-400 font-semibold">Course not found</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <Head />


      {/* Hero Section - Reduced padding */}
      <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left Content */}
            <div className="text-white">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                ONLINE COURSE
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.course_name}
              </h1>


              {/* Rating and Learners */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-blue-500 text-xl" />
                  ))}
                  <FaStar className="text-blue-500/50 text-xl" />
                  <span className="text-[#97e7f5] ml-2">
                    4.8 ({learnerCount.toLocaleString()} learners)
                  </span>
                </div>
              </div>


              {/* Profile Pics */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-3">
                  {profilePics.map((pic, index) => (
                    <img
                      key={index}
                      src={pic}
                      alt={`Learner ${index + 1}`}
                      className="w-12 h-12 rounded-full border-4 border-[#01377d] object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-[#97e7f5] font-semibold">
                  +{(learnerCount - 3).toLocaleString()} enrolled
                </span>
              </div>


              <p className="text-[#97e7f5] text-lg leading-relaxed mb-6">
                {additionalContent?.courseDescription || course.description}
              </p>


              <button
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
              >
                ENROLL NOW <FaArrowRight />
              </button>
            </div>


            {/* Right Card - Course Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#01377d] mb-4">
                Course Highlights
              </h3>


              <div className="space-y-3">
                {[
                  { icon: <FaTrophy />, text: "Projects – Hands-on Task Execution" },
                  { icon: <FaClock />, text: "Training – Flexible Learning Hours" },
                  { icon: <FaUsers />, text: "Duration – 40+ Hours of Mastery" },
                  { icon: <FaBriefcase />, text: "Placement – 100% Career Assistance" },
                  { icon: <FaShieldAlt />, text: "Support – 24/7 Expert Guidance" },
                  { icon: <FaGraduationCap />, text: "Access – Lifetime Learning Benefits" },
                  { icon: <FaCertificate />, text: "Certification – ISO Accredited" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 hover:bg-[#3b82f6]/10 p-2 rounded transition-colors">
                    <div className="text-2xl flex-shrink-0 text-blue-500">
                      {item.icon}
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>


              <div className="mt-6 bg-[#01377d] rounded-lg p-4 text-center">
                <a
                  href="tel:+918681026181"
                  className="text-white flex items-center justify-center gap-2 hover:text-[#3b82f6] transition-colors"
                >
                  <FaPhone className="text-blue-500" />
                  Or call us at: <strong>+91 8681026181</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What You'll Learn Section - Reduced padding */}
      <section className="py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h2 className="text-4xl font-bold text-[#01377d] mb-6">
                Skills You'll Gain
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.what_youll_learn.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg hover:bg-[#3b82f6]/10 transition-colors"
                  >
                    <FaCheckCircle className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Hiring Partners Preview */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[#01377d] mb-4 text-center">
                Our Graduates Work At
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {hiringPartners.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg flex items-center justify-center hover:shadow-lg hover:border-[#3b82f6] border-2 border-transparent transition-all"
                  >
                    <img
                      src={image}
                      alt={`Partner ${index + 1}`}
                      className="max-h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  document.querySelector(".hiring-partners-full")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-blue-500 hover:bg-[#3b82f6] text-white py-3 rounded-lg font-semibold transition-colors"
              >
                View All Companies
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Syllabus Section - Reduced padding */}
      <section className="py-10 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#01377d] mb-6 text-center">
            Course Curriculum
          </h2>


          <div className="grid lg:grid-cols-3 gap-6">
            {/* Accordion */}
            <div className="lg:col-span-2 space-y-3">
              {course.syllabus.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-[#3b82f6] transition-colors"
                >
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-[#01377d] text-lg">
                        {module.module}
                      </span>
                    </div>
                    {openModule === index ? (
                      <FaChevronDown className="text-[#3b82f6] text-xl" />
                    ) : (
                      <FaChevronRight className="text-slate-400 text-xl" />
                    )}
                  </button>


                  {openModule === index && (
                    <div className="px-5 pb-5">
                      <ul className="space-y-2">
                        {module.subtopics.map((topic, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-start gap-3 text-slate-700"
                          >
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


            {/* Sidebar */}
            <div className="space-y-4">
              {/* Company Logo */}
              <div className="bg-white rounded-xl p-5 text-center border-2 border-slate-200">
                <img
                  src="/Logo.png"
                  alt="ICLP Technologies"
                  className="h-16 mx-auto mb-4"
                  loading="lazy"
                />
                <button
                  onClick={downloadSyllabusPDF}
                  className="w-full bg-blue-500 hover:bg-[#3b82f6] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaDownload /> Download Full Syllabus
                </button>
              </div>


              {/* Book Enquiry */}
              <div className="bg-gradient-to-br from-[#01377d] to-[#014a9f] rounded-xl p-5 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Have Questions?</h3>
                <p className="text-[#97e7f5] mb-4">
                  Book a free consultation with our experts
                </p>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-blue-500 hover:bg-[#3b82f6] text-white py-3 px-4 rounded-lg font-bold transition-all hover:scale-105"
                >
                  Book Free Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certificate Section - Reduced padding */}
      <section className="py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                OFFICIAL CERTIFICATION
              </span>
              <h2 className="text-4xl font-bold text-[#01377d] mb-3">
                ICLP <span className="text-blue-500">Certification</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Earn a recognized credential that validates your technical
                expertise and opens doors to new career opportunities.
              </p>


              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: <FaShieldAlt />, text: "Globally Recognized" },
                  { icon: <FaTrophy />, text: "Skills Validation" },
                  { icon: <FaGraduationCap />, text: "Career Advancement" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-blue-500 text-4xl mb-2">{item.icon}</div>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>


              <button
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
              >
                Get Certified <FaArrowRight />
              </button>
            </div>


            <div
              onClick={() => setShowBookingModal(true)}
              className="cursor-pointer group flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[260px] sm:max-h-[320px] lg:max-h-[380px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500 group-hover:border-[#3b82f6] transition-all duration-300">
                <img
                  src="/certification.png"
                  alt="ICLP Certification"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <CourseAdvantagesTools courseName={course.course_name} />


      {/* Full Hiring Partners - Reduced padding */}
      <section className="py-10 bg-slate-50 hiring-partners-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#01377d] mb-3 text-center">
            Our Hiring Partners
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Top companies where our graduates work
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {hiringPartners.map((image, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl flex items-center justify-center hover:shadow-xl transition-shadow border-2 border-slate-200 hover:border-[#3b82f6]"
              >
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <CourseReviews />


      {/* CTA Section - Reduced padding */}
      <section className="py-10 bg-gradient-to-r from-[#01377d] to-[#014a9f]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-3">
            Ready to Start Your {course.course_name} Journey?
          </h2>
          <p className="text-[#97e7f5] text-xl mb-6">
            Limited seats available for the next batch
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-blue-500 hover:bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white/10 backdrop-blur-sm hover:bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/30"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>


      <RelatedCourses currentCourseName={course.course_name} />


      {/* Modal */}
      {showBookingModal && (
        <ModalBooking onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
};


export default CourseDetails;
