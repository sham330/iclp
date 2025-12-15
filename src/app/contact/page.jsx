// import React, { useState } from "react";
// import "./Contact.css";
// import {
//   FaPhone,
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import SEO from "../../SEO/SEO";
// import { IoMdMail } from "react-icons/io";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     state: "",
//     city: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/8681026181", "_blank");
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         "service_tf9j3zs",
//         "template_lp7u8iq",
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           course: formData.course,
//           state: formData.state,
//           city: formData.city,
//         },
//         "0F_TVbKHW3Vt_OVd7",
//       );

//       alert("Your enquiry has been sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         course: "",
//         state: "",
//         city: "",
//       });
//     } catch (error) {
//       alert("Failed to send enquiry. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-page-container">
//       <SEO
//         title="Fast Contact Enquiry – Get Instant Responses for Online Courses"
//         description="Need quick information? Contact us now for fast responses on course details, enrolment, and offers. Get instant answers to your enquiries and take the first step toward your learning journey today!"
//       />

//       {/* WhatsApp Floating Button - moved to bottom right */}
//       <div className="contact-whatsapp-float" onClick={handleWhatsAppClick}>
//         <FaWhatsapp className="contact-whatsapp-icon" />
//       </div>

//       <div className="contact-page-content">
//         {/* Left Column */}
//         <div className="contact-page-left">
//           <h1 className="contact-page-heading">Get in Touch</h1>

//           {/* Get in Touch Section */}
//           <div className="contact-get-in-touch-section">
//             <p className="contact-section-description">
//               If you have any enquiry or any doubts related to the courses,
//               please feel free to contact us. ICLP Tech, the best software
//               training institute in Chennai, loves to assist you anytime 24*7.
//               Contact us at the address, and number mentioned below.
//             </p>
//             <div className="contact-response-guarantee">
//               <span className="contact-guarantee-badge">Guaranteed</span>
//               We respond within 24 hours!
//             </div>
//           </div>

//           {/* Enquiry Card - Below Get in Touch */}
//           <div className="contact-enquiry-card">
//             <div className="contact-enquiry-card-header">
//               <h2>Quick Enquiry</h2>
//               <div className="contact-enquiry-card-badge">
//                 Fill to get callback
//               </div>
//             </div>

//             <form className="contact-page-form" onSubmit={sendEmail}>
//               <div className="contact-form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Name *"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="contact-form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email Address *"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="contact-form-group contact-phone-group">
//                 <select className="contact-country-code">
//                   <option>+91</option>
//                 </select>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter Mobile Number *"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="contact-form-group">
//                 <input
//                   type="text"
//                   name="course"
//                   placeholder="Enter Interested Course Name *"
//                   value={formData.course}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="contact-form-group contact-double-group">
//                 <select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select State *</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select City *</option>
//                   <option value="Chennai">Chennai</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="contact-submit-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="contact-page-right">
//           {/* Contact Details Card */}
//           <div className="contact-details-card">
//             <h2 className="contact-details-heading">Contact Details</h2>
//             <div className="contact-detail-item">
//               <FaPhone className="contact-detail-icon" />
//               <div>
//                 <h3>Phone</h3>
//                 <p>+91 86810 26181</p>
//                 <p>+91 93441 40385</p>
//               </div>
//             </div>
//             <div className="contact-detail-item">
//               <IoMdMail className="contact-detail-icon" />
//               <div>
//                 <h3>Email</h3>
//                 <p>info@iclptech.com</p>
//                 <p>support@iclptech.com</p>
//               </div>
//             </div>
//             <div className="contact-detail-item">
//               <FaMapMarkerAlt className="contact-detail-icon" />
//               <div>
//                 <h3>Address</h3>
//                 <p>Guindy, Chennai</p>
//                 <p>Tamil Nadu, India - 600032</p>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="contact-social-media-section">
//               <h3 className="contact-social-heading">Connect With Us</h3>
//               <div className="contact-social-icons">
//                 <a
//                   href="https://linkedin.com/company/iclptech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin className="contact-social-icon" />
//                 </a>
//                 <a
//                   href="https://instagram.com/iclp_technologies"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram className="contact-social-icon" />
//                 </a>
//                 <a
//                   href="https://youtube.com/iclptech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaYoutube className="contact-social-icon" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Map - Below Contact Details */}
//           <div className="contact-map-container">
//             <img
//               src="/Guindy.png"
//               alt="ICLP Tech Location in Guindy, Chennai"
//               className="contact-map-image"
//             />
//             <div className="contact-map-overlay">
//               <FaMapMarkerAlt className="contact-map-icon" />
//               <span>Find us in Guindy, Chennai</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client";
import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Head from "./Head";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    city: "",
    contact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8681026181", "_blank");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Your enquiry has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          state: "",
          city: "",
          contact: "",
        });
      } else {
        alert(`❌ Failed: ${data.message || "Please try again."}`);
      }
    } catch (error) {
      alert("❌ Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head />

      {/* WhatsApp Floating Button */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-[#39FF14] hover:bg-[#2de000] p-4 rounded-full shadow-2xl cursor-pointer transition-all hover:scale-110 shadow-[#39FF14]/50"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="text-[#01377d] text-3xl" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-[#97e7f5] max-w-3xl mx-auto">
            Have questions about our courses? We're here to help you 24/7
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form Section */}
          <div>
            {/* Info Card */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border-2 border-slate-100">
              <h2 className="text-2xl font-bold text-[#01377d] mb-4">
                Why Contact Us?
              </h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                If you have any enquiry or any doubts related to the courses,
                please feel free to contact us. ICLP Tech, the best software
                training institute in Chennai, loves to assist you anytime 24*7.
              </p>
              <div className="flex items-center gap-3 bg-[#39FF14]/10 border-l-4 border-[#39FF14] p-4 rounded-lg">
                <FaClock className="text-[#39FF14] text-2xl flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#01377d]">
                    Guaranteed Response
                  </p>
                  <p className="text-slate-600 text-sm">
                    We respond within 24 hours!
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-[#01377d]">
                  Quick Enquiry
                </h2>
                <span className="bg-[#39FF14] text-[#01377d] px-4 py-2 rounded-full text-sm font-semibold">
                  Get Callback
                </span>
              </div>

              <form onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter phone number or email"
                    value={formData.contact}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        handleChange({ target: { name: "contact", value } });
                      } else {
                        handleChange(e);
                      }
                    }}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Interested Course *
                  </label>
                  <input
                    type="text"
                    name="course"
                    placeholder="Enter course name"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700 bg-white"
                    >
                      <option value="">Select State</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700 bg-white"
                    >
                      <option value="">Select City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] font-bold py-4 px-6 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#39FF14]/30"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaCheckCircle /> Submit Enquiry
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div>
            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-[#01377d] to-[#014a9f] rounded-2xl p-8 mb-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#39FF14] pb-4">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#39FF14] p-3 rounded-lg">
                    <FaPhone className="text-[#01377d] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#39FF14]">
                      Phone
                    </h3>
                    <p className="text-[#97e7f5]">+91 86810 26181</p>
                    <p className="text-[#97e7f5]">+91 93441 40385</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#39FF14] p-3 rounded-lg">
                    <IoMdMail className="text-[#01377d] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#39FF14]">
                      Email
                    </h3>
                    <p className="text-[#97e7f5]">info.iclptech@gmail.com</p>
                    <p className="text-[#97e7f5]">helpdesk.iclp@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#39FF14] p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-[#01377d] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#39FF14]">
                      Address
                    </h3>
                    <p className="text-[#97e7f5]">Guindy, Chennai</p>
                    <p className="text-[#97e7f5]">
                      Tamil Nadu, India - 600032
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-bold text-lg mb-4 text-[#39FF14]">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/iclptech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#39FF14] p-3 rounded-lg transition-all hover:scale-110 group"
                  >
                    <FaLinkedin className="text-white group-hover:text-[#01377d] text-2xl" />
                  </a>
                  <a
                    href="https://instagram.com/iclp_technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#39FF14] p-3 rounded-lg transition-all hover:scale-110 group"
                  >
                    <FaInstagram className="text-white group-hover:text-[#01377d] text-2xl" />
                  </a>
                  <a
                    href="https://youtube.com/iclptech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#39FF14] p-3 rounded-lg transition-all hover:scale-110 group"
                  >
                    <FaYoutube className="text-white group-hover:text-[#01377d] text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg group">
              <img
                src="/Guindy.png"
                alt="ICLP Tech Location in Guindy, Chennai"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/90 to-transparent flex items-end justify-center pb-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#39FF14]">
                  <FaMapMarkerAlt className="text-[#39FF14] text-xl" />
                  <span className="text-white font-semibold">
                    Find us in Guindy, Chennai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-100 hover:border-[#39FF14] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <FaClock className="text-[#39FF14] text-3xl" />
              <h3 className="font-bold text-[#01377d] text-lg">
                24/7 Support
              </h3>
            </div>
            <p className="text-slate-600">
              Round-the-clock assistance for all your queries
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-100 hover:border-[#39FF14] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <FaCheckCircle className="text-[#39FF14] text-3xl" />
              <h3 className="font-bold text-[#01377d] text-lg">
                Quick Response
              </h3>
            </div>
            <p className="text-slate-600">
              Get answers within 24 hours guaranteed
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-100 hover:border-[#39FF14] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <FaWhatsapp className="text-[#39FF14] text-3xl" />
              <h3 className="font-bold text-[#01377d] text-lg">
                WhatsApp Ready
              </h3>
            </div>
            <p className="text-slate-600">
              Instant messaging support available anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
