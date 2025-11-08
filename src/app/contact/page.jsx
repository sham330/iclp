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
import React, { useState,useEffect } from "react";
import "./contact.css";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "emailjs-com";
import Head from "./Head";

const Contact = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    city: "",
    contact:"",
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
          contact:"",
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
    <div className="contact-page-container">
      <Head/>

      {/* WhatsApp Floating Button */}
      <div className="contact-whatsapp-float" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="contact-whatsapp-icon" />
      </div>

      <div className="contact-page-content">
        {/* Left Column */}
        <div className="contact-page-left">
          <h1 className="contact-page-heading">Get in Touch</h1>

          {/* Get in Touch Section */}
          <div className="contact-get-in-touch-section">
            <p className="contact-section-description">
              If you have any enquiry or any doubts related to the courses,
              please feel free to contact us. ICLP Tech, the best software
              training institute in Chennai, loves to assist you anytime 24*7.
              Contact us at the address, and number mentioned below.
            </p>
            <div className="contact-response-guarantee">
              <span className="contact-guarantee-badge">Guaranteed</span>
              We respond within 24 hours!
            </div>
          </div>

          {/* Enquiry Card */}
          <div className="contact-enquiry-card">
            <div className="contact-enquiry-card-header">
              <h2>Quick Enquiry</h2>
              <div className="contact-enquiry-card-badge">
                Fill to get callback
              </div>
            </div>

      <form className="contact-page-form" onSubmit={sendEmail}>
  <div className="contact-form-group">
    <input
      type="text"
      name="name"
      placeholder="Enter Name *"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="contact-form-group">
   <input
    type="text"
    name="contact"
    placeholder="Enter Phone Number or Email *"
    value={formData.contact}
    onChange={(e) => {
      const value = e.target.value;
      // ✅ Allow numbers only if user is entering a phone number
      if (/^\d*$/.test(value)) {
        handleChange({ target: { name: "contact", value } });
      } else {
        handleChange(e);
      }
    }}
    required
  />
  </div>

  <div className="contact-form-group">
    <input
      type="text"
      name="course"
      placeholder="Enter Interested Course Name *"
      value={formData.course}
      onChange={handleChange}
      required
    />
  </div>

  <div className="contact-form-group contact-double-group">
    <select
      name="state"
      value={formData.state}
      onChange={handleChange}
      required
    >
      <option value="">Select State *</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Other">Other</option>
    </select>

    <select
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
    >
      <option value="">Select City *</option>
      <option value="Chennai">Chennai</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <button
    type="submit"
    className="contact-submit-btn"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Sending..." : "Submit"}
  </button>
</form>

          </div>
        </div>

        {/* Right Column */}
        <div className="contact-page-right">
          {/* Contact Details Card */}
          <div className="contact-details-card">
            <h2 className="contact-details-heading">Contact Details</h2>
            <div className="contact-detail-item">
              <FaPhone className="contact-detail-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 86810 26181</p>
                <p>+91 93441 40385</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <IoMdMail className="contact-detail-icon" />
              <div>
                <h3>Email</h3>
                <p>info.iclptech@gmail.com</p>
                <p>helpdesk.iclp@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-detail-icon" />
              <div>
                <h3>Address</h3>
                <p>Guindy, Chennai</p>
                <p>Tamil Nadu, India - 600032</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-social-media-section">
              <h3 className="contact-social-heading">Connect With Us</h3>
              <div className="contact-social-icons">
                <a
                  href="https://linkedin.com/company/iclptech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contact-social-icon" />
                </a>
                <a
                  href="https://instagram.com/iclp_technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="contact-social-icon" />
                </a>
                <a
                  href="https://youtube.com/iclptech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="contact-social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map-container">
            <img
              src="/Guindy.png"
              alt="ICLP Tech Location in Guindy, Chennai"
              className="contact-map-image"
            />
            <div className="contact-map-overlay">
              <FaMapMarkerAlt className="contact-map-icon" />
              <span>Find us in Guindy, Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
