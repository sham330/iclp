"use client";

import React, { useRef, useState } from 'react';
import { FaLightbulb, FaUserTie, FaHandsHelping, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import './homeAbout.css';

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
      color: "#1FAA59"
    },
    { 
      icon: <FaUserTie />, 
      title: "Career Guidance", 
      text: "Job placement support and interview prep",
      color: "#1a2a6c"
    },
    { 
      icon: <FaHandsHelping />, 
      title: "Personalized", 
      text: "Tailored programs for your goals",
      color: "#1a6caa"
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
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      router.push('/about');
    }, 300);
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <span className="about-subtitle">WHO WE ARE</span>
            <h2 className="about-title">
              Transforming <span className="about-highlight">Careers</span> with ICLP
            </h2>
          </div>

          <p className="about-description">
            Your gateway to infinite career possibilities through cutting-edge training and personalized mentorship.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="about-feature-card"
                style={{ '--feature-color': feature.color }}
              >
                <div className="about-feature-icon">{feature.icon}</div>
                <div className="about-feature-content">
                  <h3 className="about-feature-title">{feature.title}</h3>
                  <p className="about-feature-text">{feature.text}</p>
                </div>
                <div className="about-feature-hover"></div>
              </div>
            ))}
          </div>

          <button 
            className="about-cta"
            onClick={handleNavigate}
          >
            <span>Discover More</span>
            <FaArrowRight className="about-cta-icon" />
          </button>
        </div>

        <div className="booking-form-container">
          {submitSuccess ? (
            <div className="booking-success-message">
              <FaCheckCircle className="success-icon" />
              <h3>Enquiry Submitted!</h3>
              <p>We'll contact you shortly.</p>
            </div>
          ) : (
            <div className="booking-form-wrapper">
              <h3>Start Your Learning Journey</h3>
              <p>Get expert guidance on choosing the right course</p>
              
              <form onSubmit={sendEmail} className="booking-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
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
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;