"use client";

import React, { useRef, useState } from 'react';
import { FaLightbulb, FaUserTie, FaHandsHelping, FaArrowRight, FaCheckCircle, FaUserCheck, FaBriefcase } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const HomeAbout = () => {
  const router = useRouter();
  const courses = [
    // Regular courses
    { name: "Java", type: "regular" },
    { name: "Python", type: "regular" },
    { name: "R Programming", type: "regular" },
    { name: "JavaScript", type: "regular" },
    { name: "PHP", type: "regular" },
    { name: "Full Stack Developer", type: "regular" },
    { name: "Node.js", type: "regular" },
    { name: "ReactJS", type: "regular" },
    { name: "Microsoft Azure", type: "regular" },
    { name: "AWS", type: "regular" },
    { name: "DevOps", type: "regular" },
    { name: "Cyber Security", type: "regular" },
    { name: "Ethical Hacking", type: "regular" },
    { name: "Selenium", type: "regular" },
    { name: "Manual Testing Course", type: "regular" },
    { name: "JMeter Course", type: "regular" },
    { name: "ETL Testing", type: "regular" },
    { name: "LoadRunner", type: "regular" },
    { name: "SoapUI", type: "regular" },
    { name: "Data Science Course", type: "regular" },
    { name: "Artificial Intelligence", type: "regular" },
    { name: "Digital Marketing", type: "regular" },
    { name: "Excel", type: "regular" },
    { name: "HTML", type: "regular" },
    { name: "UI and UX", type: "regular" },
    { name: "Salesforce", type: "regular" },
    { name: "C Sharp", type: "regular" },
    { name: "UNIX SHELL Scripting", type: "regular" },
    { name: "Workday HCM", type: "regular" },
    { name: "Salesforce Online Training", type: "regular" },
    { name: "Salesforce Developer", type: "regular" },
    { name: "Azure DevOps", type: "regular" },
    { name: "Angular", type: "regular" },
    { name: "WordPress", type: "regular" },
    { name: "CSS Online", type: "regular" },
    { name: "Machine Learning", type: "regular" },
    { name: "Data Science With Python", type: "regular" },
    { name: "Machine Learning with Python", type: "regular" },
    { name: "Machine Learning using R", type: "regular" },
    { name: "MySQL", type: "regular" },
    { name: "SQL with PHP", type: "regular" },
    { name: "Microsoft Dynamics 365", type: "regular" },
    { name: "Microsoft Excel", type: "regular" },
    { name: "Excel Macros and VBA", type: "regular" },
    { name: "jQuery", type: "regular" },
    // SAP Courses
    { name: "SAP FICO", type: "sap" },
    { name: "SAP MM", type: "sap" },
    { name: "SAP SD", type: "sap" },
    { name: "SAP PP", type: "sap" },
    { name: "SAP ABAP", type: "sap" },
    // Oracle Courses
    { name: "Oracle Financials", type: "oracle" },
    { name: "Oracle SCM", type: "oracle" },
    { name: "Oracle HCM", type: "oracle" },
  ];

  const features = [
    { 
      icon: <FaLightbulb />, 
      title: "Practical Learning", 
      text: "Real-world skills with hands-on projects",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: <FaUserTie />, 
      title: "Career Guidance", 
      text: "Job placement support and interview prep",
      color: "from-red-600 to-red-700"
    },
    { 
      icon: <FaHandsHelping />, 
      title: "Personalized", 
      text: "Tailored programs for your goals",
      color: "from-amber-500 to-amber-600"
    },
    { 
  icon: <FaUserCheck />, 
  title: "Mock Interviews", 
  text: "Real-time interview practice with expert feedback",
  color: "from-blue-500 to-blue-600"
},
{ 
  icon: <FaBriefcase />, 
  title: "Placement Support", 
  text: "Dedicated guidance to help you secure the right job",
  color: "from-emerald-500 to-emerald-600"
}


  ];

  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
        }),
      });

      if (res.ok) {
        setSubmitSuccess(true);

        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", course: "" });
          setIsSubmitting(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        const data = await res.json();
        alert(`❌ ${data.message || "Failed to send booking details."}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      alert("Failed to send booking details. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      router.push('/about');
    }, 300);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-red-50/30 to-amber-50/20 overflow-hidden" ref={sectionRef}>
      {/* Subtle Christmas Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Snowflakes */}
        <div className="absolute top-10 left-[5%] w-3 h-3 bg-red-200/30 rounded-full blur-sm"></div>
        <div className="absolute top-32 left-[15%] w-2 h-2 bg-amber-200/30 rounded-full blur-sm"></div>
        <div className="absolute top-20 right-[10%] w-3 h-3 bg-emerald-200/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-[20%] w-2 h-2 bg-red-200/30 rounded-full blur-sm"></div>
        
        {/* Elegant Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-amber-300/20 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-red-300/20 rounded-br-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-100 to-amber-100 text-red-800 text-sm font-semibold rounded-full border border-amber-200/50">
                WHO WE ARE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Transforming Careers with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600">
                  ICLP
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              Your gateway to infinite career possibilities through cutting-edge training and personalized mentorship.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/60 hover:border-amber-300/50"
                >
                  {/* Subtle Festive Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 via-amber-50/0 to-emerald-50/0 group-hover:from-red-50/30 group-hover:via-amber-50/30 group-hover:to-emerald-50/30 rounded-xl transition-all duration-300"></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl shadow-md`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleNavigate}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/30"
            >
              <span>Discover More</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Side - Booking Form */}
          <div className="relative">
            {/* Festive Card Accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-200/30 via-amber-200/30 to-emerald-200/30 rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              {/* Decorative Top Border */}
              <div className="h-1.5 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500"></div>

              {submitSuccess ? (
                <div className="p-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full text-white text-4xl shadow-lg">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h3>
                  <p className="text-slate-600">We'll contact you shortly.</p>
                </div>
              ) : (
                <div className="p-8 lg:p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                      Start Your Learning Journey
                    </h3>
                    <p className="text-slate-600">
                      Get expert guidance on choosing the right course
                    </p>
                  </div>
                  
                  <form onSubmit={sendEmail} className="space-y-5">
                    <div>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all duration-200 text-slate-900"
                      >
                        <option value="">Select a Course</option>
                        <optgroup label="Regular Courses">
                          {courses.filter(c => c.type === 'regular').map((course, index) => (
                            <option key={`regular-${index}`} value={course.name}>{course.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="SAP Courses">
                          {courses.filter(c => c.type === 'sap').map((course, index) => (
                            <option key={`sap-${index}`} value={course.name}>{course.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Oracle Courses">
                          {courses.filter(c => c.type === 'oracle').map((course, index) => (
                            <option key={`oracle-${index}`} value={course.name}>{course.name}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/30 disabled:border-slate-400"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
