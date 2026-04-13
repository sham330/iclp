"use client";
import React, { useEffect, useState } from 'react';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HomeAboutDialog = ({ onClose } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    experience: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
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

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const validate = () => {
    const errs = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email address';
    if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone)) errs.phone = 'Invalid phone number';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
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
          setFormData({ name: '', email: '', phone: '', course: '', qualification: '', experience: '', notes: '' });
          setErrors({});
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

  const inputCls = (field) =>
    `w-full p-[9px] rounded-[8px] border text-sm bg-white ${errors[field] ? 'border-red-500' : 'border-[#ddd]'}`;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[1000] flex justify-center items-center p-4 overflow-y-auto">
        <div className="bg-white rounded-[16px] w-full max-w-[760px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative flex flex-col md:flex-row overflow-hidden my-auto">

          {/* Close Button */}
          <button
            className="absolute top-[12px] right-[12px] bg-transparent border-none cursor-pointer z-10 text-gray-500 hover:text-black"
            onClick={handleClose}
          >
            <FaTimes size={18} />
          </button>

          {/* LEFT - FORM */}
          <div className="w-full md:w-1/2 p-[20px] flex flex-col gap-[10px] pt-10">
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center flex-1 gap-4 py-16">
                <FaCheckCircle size={40} color="#22c55e" />
                <h2 className="text-2xl font-bold">Enquiry Submitted!</h2>
                <p className="text-gray-600">We'll contact you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold leading-snug">Start Your IT Career with Expert Guidance</h2>
                <p className="text-gray-500 text-xs -mt-2">Get personalized course recommendations from industry experts</p>

                <form onSubmit={sendEmail} className="space-y-[8px]">
                  <input
                    type="text" name="name" placeholder="Full Name"
                    value={formData.name} onChange={handleChange} required
                    className={inputCls('name')}
                  />

                  <div>
                    <input
                      type="tel" name="phone" placeholder="Mobile Number"
                      value={formData.phone} onChange={handleChange} required
                      className={inputCls('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={formData.email} onChange={handleChange} required
                      className={inputCls('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <select name="course" value={formData.course} onChange={handleChange} required className={inputCls('course')}>
                    <option value="">Select Your Course</option>
                    <optgroup label="Regular Courses">
                      {courses.filter(c => c.type === 'regular').map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
                    </optgroup>
                    <optgroup label="SAP Courses">
                      {courses.filter(c => c.type === 'sap').map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
                    </optgroup>
                    <optgroup label="Oracle Courses">
                      {courses.filter(c => c.type === 'oracle').map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
                    </optgroup>
                  </select>

                  <div className="flex gap-2">
                    <select name="qualification" value={formData.qualification} onChange={handleChange} required className={inputCls('qualification')}>
                      <option value="">Current Qualification</option>
                      <option value="High School">High School</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="PhD">PhD</option>
                      <option value="Other">Other</option>
                    </select>
                    <select name="experience" value={formData.experience} onChange={handleChange} required className={inputCls('experience')}>
                      <option value="">Experience Level</option>
                      <option value="No Experience">No Experience</option>
                      <option value="0-1 years">0–1 Years</option>
                      <option value="1-3 years">1–3 Years</option>
                      <option value="3-5 years">3–5 Years</option>
                      <option value="5+ years">5+ Years</option>
                    </select>
                  </div>

                  <textarea
                    name="notes" placeholder="Tell us your goal (optional)"
                    value={formData.notes} onChange={handleChange} rows={3}
                    className="w-full p-[9px] rounded-[8px] border border-[#ddd] text-sm resize-none"
                  />

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition-all"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Career Guidance'} <FaArrowRight />
                  </button>

                  <p className="text-xs text-gray-400 text-center">Limited seats available for upcoming batch</p>
                </form>
              </>
            )}
          </div>

          {/* RIGHT - INFO PANEL */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-teal-500 text-white p-[20px] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-sm">
                {['1000+ Students Trained', 'Placement Assistance Available', 'Industry Expert Trainers', 'Your data is safe & confidential'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-sm text-white/80 mb-3">Have questions? Chat with us directly</p>
              <a
                href="https://wa.me/918681026181"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-all"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeAboutDialog;
