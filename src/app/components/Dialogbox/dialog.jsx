"use client";
import React, { useEffect, useState } from 'react';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

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
    // Your exact same courses array
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

  useEffect(() => {
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[1000] flex justify-center items-center p-4">
        
        {/* Main Container */}
        <div className="bg-white rounded-[12px] w-full max-w-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative flex flex-col overflow-hidden">
          
          {/* Close Button */}
          <button 
            className="absolute top-[12px] right-[12px] bg-transparent border-none cursor-pointer z-10"
            onClick={handleClose}
          >
            <FaTimes size={20} />
          </button>

          {/* Content Area - Takes most space */}
          <div className="p-[24px] flex-1 flex flex-col gap-[16px] pt-16 pb-20">
            {submitSuccess ? (
              <div className="success-message text-center gap-[12px] flex flex-col items-center flex-1 justify-center">
                <FaCheckCircle size={36} color="#22c55e" />
                <h2 className="text-2xl font-bold">Enquiry Submitted!</h2>
                <p className="text-gray-600">We'll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-[16px] flex-1">
                <h2 className="text-2xl font-bold text-center">Start Your Learning Journey</h2>
                <p className="text-center text-gray-600">Get expert guidance on choosing the right course</p>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-[12px] rounded-[8px] border border-[#ddd] text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-[12px] rounded-[8px] border border-[#ddd] text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-[12px] rounded-[8px] border border-[#ddd] text-base"
                />
                
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full p-[12px] rounded-[8px] border border-[#ddd] text-base bg-white"
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
                  className="w-full p-[12px] bg-[#1faa59] hover:bg-[#159048] text-white font-semibold border-none rounded-[8px] cursor-pointer flex items-center justify-center gap-[8px] transition-all duration-300 text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'} 
                  <FaArrowRight />
                </button>
              </form>
            )}
          </div>

       
        </div>
      </div>
    </>
  );
};

export default HomeAboutDialog;
