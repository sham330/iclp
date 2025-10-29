'use client';
import React, { useEffect, useState } from 'react';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './dialog.css';

const HomeAboutDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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
  // Open modal on page load - useEffect runs after component mounts
  useEffect(() => {
    // Small delay to ensure smooth appearance
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', course: '' });
          setIsSubmitting(false);
          setSubmitSuccess(false);
          handleClose();
        }, 3000);
      } else {
        const data = await res.json();
        alert(`❌ ${data.message || 'Failed to send booking details.'}`);
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Try again.');
      setIsSubmitting(false);
    }
  };
console.log("its working");
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog-container">
        {/* Close Button */}
        <button className="dialog-close-btn" onClick={handleClose}>
          <FaTimes size={20} />
        </button>

       
        

        {/* Content */}
        <div className="dialog-content">
          {submitSuccess ? (
            <div className="success-message">
              <FaCheckCircle size={36} color="#22c55e" />
              <h2>Enquiry Submitted!</h2>
              <p>We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="booking-form">
              <h2>Start Your Learning Journey</h2>
              <p>Get expert guidance on choosing the right course</p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
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

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <FaArrowRight />
              </button>
            </form>
          )}
        </div>

       {/* <div className="dialog-small-banner">
          <img src="/dialog.jpg" alt="Special Offer" />
        </div> */}
      </div>
    </div>
  );
};

export default HomeAboutDialog;