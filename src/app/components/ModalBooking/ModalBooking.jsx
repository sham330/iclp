"use client";
import React, { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import "./ModalBooking.css";
import SEO from "../SEO/SEO";

const ModalBooking = ({ onClose }) => {
  
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
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [shouldSend, setShouldSend] = useState(false);

  // ✅ Validation helpers
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submit
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setShouldSend(true); // triggers useEffect
    }
  };

  // ✅ Send data to Next.js API
  useEffect(() => {
    if (!shouldSend) return;

    const sendData = async () => {
      try {
        const res = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to send data");

        const data = await res.json();
        console.log("✅ API response:", data);

        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", course: "" });
      } catch (error) {
        console.error("❌ Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
        setShouldSend(false);
      }
    };

    sendData();
  }, [shouldSend, formData]);


  return (
    <motion.div
      className="mb-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <SEO
        title="Book Fast Enquiry for Limited Time Offers – Enroll Now!"
        description="Hurry! Book your enquiry now and grab limited-time offers on top online courses. Secure your spot in high-demand programs with special discounts and exclusive deals!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />

      <motion.div
        className="mb-modal-content"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="mb-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="mb-modal-body">
          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              className="mb-success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <FaCheckCircle className="mb-success-icon" />
              <h3>Enquiry Submitted!</h3>
              <p>We'll contact you shortly.</p>
            </motion.div>
          )}

          {/* Form Section */}
          {!submitSuccess && (
            <>
              <div className="mb-header">
                <h2 className="mb-title">Course Enquiry</h2>
                <p className="mb-subtitle">
                  Get more information about our programs
                </p>
              </div>

              <form onSubmit={sendEmail} className="mb-form" noValidate>
                <div className="mb-input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="mb-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={`mb-input ${errors.email ? "mb-input-error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="mb-error-message">{errors.email}</span>
                  )}
                </div>

                <div className="mb-input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`mb-input ${errors.phone ? "mb-input-error" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                  />
                  {errors.phone && (
                    <span className="mb-error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="mb-input-group">
                  <select
                    name="course"
                    className="mb-input"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Course</option>
                    <optgroup label="Regular Courses">
                      {courses
                        .filter((c) => c.type === "regular")
                        .map((course, index) => (
                          <option key={`regular-${index}`} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="SAP Courses">
                      {courses
                        .filter((c) => c.type === "sap")
                        .map((course, index) => (
                          <option key={`sap-${index}`} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Oracle Courses">
                      {courses
                        .filter((c) => c.type === "oracle")
                        .map((course, index) => (
                          <option key={`oracle-${index}`} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mb-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalBooking;