// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import styles from "./TraineeDetails.module.css";
// import SEO from "../SEO/SEO";
// import trainerImage from "/trainer1.jpg"; // Make sure to add this image

// const FreelanceTrainer = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     languages: "",
//     technologies: "",
//     domainExperience: "",
//     trainingExperience: "",
//     availability: "",
//     resumeLink: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [activeTab, setActiveTab] = useState("form");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       emailjs.init("MgL_a24MvcF0eK67e");

//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         phone: formData.phone,
//         location: formData.location,
//         languages: formData.languages,
//         technologies: formData.technologies,
//         domain_experience: formData.domainExperience,
//         training_experience: formData.trainingExperience,
//         availability: formData.availability,
//         resume_link: formData.resumeLink,
//         time: new Date().toLocaleString(),
//       };

//       await emailjs.send("service_9uysd3c", "template_luo4vus", templateParams);

//       setSubmitStatus({
//         success: true,
//         message:
//           "Application submitted successfully! Please email your resume to iclphr@gmail.com",
//       });
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         location: "",
//         languages: "",
//         technologies: "",
//         domainExperience: "",
//         trainingExperience: "",
//         availability: "",
//         resumeLink: "",
//       });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setSubmitStatus({
//         success: false,
//         message: "Failed to submit application. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToSection = (sectionClass) => {
//     const section = document.querySelector(`.${sectionClass}`);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setTimeout(() => {
//       scrollToSection(
//         tab === "form"
//           ? styles.trainerFormContainer
//           : styles.trainerInfoContainer,
//       );
//     }, 50);
//   };

//   return (
//     <div className={styles.trainerContainer}>
//       <SEO
//         title="Hiring Freelance Trainers – Join Our Online Teaching Team"
//         description="We’re hiring skilled freelance trainers to teach students online. Share your expertise in programming, design, business, and more. Partner with a top-rated online learning institute and inspire the next generation."
//       />
//       <div className={styles.trainerHero}>
//         <div className={styles.trainerHeroContent}>
//           <div className={styles.trainerHeroText}>
//             <h1 className={styles.trainerHeroTitle}>
//               Become a Freelance Trainer
//             </h1>
//             <p className={styles.trainerHeroSubtitle}>
//               Share your expertise, inspire talents, and grow with ICLP
//               Technologies
//             </p>
//             <div className={styles.trainerHeroButtons}>
//               <button
//                 className={`${styles.trainerHeroButton} ${styles.trainerPrimaryButton}`}
//                 onClick={() => handleTabChange("form")}
//               >
//                 Apply Now
//               </button>
//               <button
//                 className={`${styles.trainerHeroButton} ${styles.trainerSecondaryButton}`}
//                 onClick={() => handleTabChange("info")}
//               >
//                 Learn More
//               </button>
//               <a
//                 href="tel:+918681026181"
//                 className={`${styles.trainerHeroButton} ${styles.trainerCallButton}`}
//               >
//                 Call for Enquiry
//               </a>
//             </div>
//           </div>
//           <div className={styles.trainerHeroImage}>
//             <img
//               src={trainerImage}
//               alt="Freelance Trainer"
//               className={styles.trainerIllustration}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className={styles.trainerTabContainer}>
//         <button
//           className={`${styles.trainerTabButton} ${
//             activeTab === "form" ? styles.trainerActiveTab : ""
//           }`}
//           onClick={() => handleTabChange("form")}
//         >
//           <span className={styles.trainerTabIcon}>📝</span>
//           Application Form
//         </button>
//         <button
//           className={`${styles.trainerTabButton} ${
//             activeTab === "info" ? styles.trainerActiveTab : ""
//           }`}
//           onClick={() => handleTabChange("info")}
//         >
//           <span className={styles.trainerTabIcon}>ℹ️</span>
//           Program Details
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className={styles.trainerMainContent}>
//         {activeTab === "form" ? (
//           <div className={styles.trainerFormContainer}>
//             <div className={styles.trainerFormCard}>
//               <div className={styles.trainerFormHeader}>
//                 <h2 className={styles.trainerFormTitle}>Trainer Application</h2>
//                 <p className={styles.trainerFormSubtitle}>
//                   Join our network of expert trainers
//                 </p>
//               </div>

//               {submitStatus && (
//                 <div
//                   className={`${styles.trainerStatusMessage} ${
//                     submitStatus.success
//                       ? styles.trainerSuccess
//                       : styles.trainerError
//                   }`}
//                 >
//                   {submitStatus.message}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className={styles.trainerForm}>
//                 <div className={styles.trainerFormGrid}>
//                   {/* Row 1 */}
//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="name" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>Full Name</span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="John Doe"
//                     />
//                   </div>

//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="email" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>Email</span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   {/* Row 2 */}
//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="phone" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>Phone</span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="+91 9876543210"
//                     />
//                   </div>

//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="location" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>Location</span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="location"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="City, Country"
//                     />
//                   </div>

//                   {/* Row 3 */}
//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="languages" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>
//                         Languages Known
//                       </span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="languages"
//                       name="languages"
//                       value={formData.languages}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="English, Hindi, etc."
//                     />
//                   </div>

//                   <div className={styles.trainerFormGroup}>
//                     <label
//                       htmlFor="technologies"
//                       className={styles.trainerLabel}
//                     >
//                       <span className={styles.trainerLabelText}>
//                         Technologies
//                       </span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="technologies"
//                       name="technologies"
//                       value={formData.technologies}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="Java, React, Python, etc."
//                     />
//                   </div>

//                   {/* Row 4 */}
//                   <div className={styles.trainerFormGroup}>
//                     <label
//                       htmlFor="domainExperience"
//                       className={styles.trainerLabel}
//                     >
//                       <span className={styles.trainerLabelText}>
//                         Domain Experience (Years)
//                       </span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="domainExperience"
//                       name="domainExperience"
//                       value={formData.domainExperience}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerInput}
//                       placeholder="5"
//                     />
//                   </div>

//                   <div className={styles.trainerFormGroup}>
//                     <label
//                       htmlFor="trainingExperience"
//                       className={styles.trainerLabel}
//                     >
//                       <span className={styles.trainerLabelText}>
//                         Training Experience (Years)
//                       </span>
//                     </label>
//                     <input
//                       type="text"
//                       id="trainingExperience"
//                       name="trainingExperience"
//                       value={formData.trainingExperience}
//                       onChange={handleChange}
//                       className={styles.trainerInput}
//                       placeholder="2"
//                     />
//                   </div>

//                   {/* Row 5 */}
//                   <div className={styles.trainerFormGroup}>
//                     <label
//                       htmlFor="availability"
//                       className={styles.trainerLabel}
//                     >
//                       <span className={styles.trainerLabelText}>
//                         Availability
//                       </span>
//                       <span className={styles.trainerRequired}>*</span>
//                     </label>
//                     <select
//                       id="availability"
//                       name="availability"
//                       value={formData.availability}
//                       onChange={handleChange}
//                       required
//                       className={styles.trainerSelect}
//                     >
//                       <option value="">Select availability</option>
//                       <option value="Online only">Online only</option>
//                       <option value="Offline only">Offline only</option>
//                       <option value="Both online and offline">
//                         Both online and offline
//                       </option>
//                       <option value="Flexible">Flexible</option>
//                     </select>
//                   </div>

//                   <div className={styles.trainerFormGroup}>
//                     <label htmlFor="resumeLink" className={styles.trainerLabel}>
//                       <span className={styles.trainerLabelText}>
//                         Resume Link
//                       </span>
//                     </label>
//                     <input
//                       type="url"
//                       id="resumeLink"
//                       name="resumeLink"
//                       value={formData.resumeLink}
//                       onChange={handleChange}
//                       className={styles.trainerInput}
//                       placeholder="https://drive.google.com/your-resume"
//                     />
//                   </div>
//                 </div>

//                 <div className={styles.trainerResumeNotice}>
//                   <div className={styles.trainerNoticeIcon}>📄</div>
//                   <div>
//                     <h3 className={styles.trainerNoticeTitle}>
//                       Resume Submission
//                     </h3>
//                     <p className={styles.trainerNoticeText}>
//                       Please email your resume (PDF format) to{" "}
//                       <strong>hr.iclptech@gmail.com</strong> with the subject
//                       line: "Freelance Trainer Application - [Your Name]"
//                     </p>
//                   </div>
//                 </div>

//                 <div className={styles.trainerSubmitContainer}>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={styles.trainerSubmitButton}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <span className={styles.trainerSpinner}></span>
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit Application"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         ) : (
//           <div className={styles.trainerInfoContainer}>
//             <div className={styles.trainerInfoCard}>
//               <h2 className={styles.trainerInfoTitle}>
//                 Freelance Trainer Program
//               </h2>

//               <div className={styles.trainerInfoSection}>
//                 <h3 className={styles.trainerSectionTitle}>
//                   <span className={styles.trainerSectionIcon}>🌟</span>
//                   Program Overview
//                 </h3>
//                 <p className={styles.trainerSectionText}>
//                   Embarking on a journey as a freelance trainer offers IT
//                   professionals a unique opportunity to share their expertise,
//                   inspire upcoming talents, and earn additional income. At ICLP
//                   Technologies, we are committed to creating a platform that not
//                   only benefits learners but also enriches the trainers'
//                   professional lives.
//                 </p>
//               </div>

//               <div className={styles.trainerInfoSection}>
//                 <h3 className={styles.trainerSectionTitle}>
//                   <span className={styles.trainerSectionIcon}>💡</span>
//                   What is Trainer Freelancing?
//                 </h3>
//                 <p className={styles.trainerSectionText}>
//                   Trainer freelancing involves delivering specialized training
//                   services to individuals or organizations on a contractual
//                   basis. As a freelance trainer, you have the flexibility to
//                   choose your projects and schedule, allowing you to engage in
//                   part-time or full-time roles based on your training experience
//                   and the feedback received.
//                 </p>
//               </div>

//               <div className={styles.trainerInfoSection}>
//                 <h3 className={styles.trainerSectionTitle}>
//                   <span className={styles.trainerSectionIcon}>📚</span>
//                   Training Formats
//                 </h3>
//                 <div className={styles.trainerFeaturesGrid}>
//                   <div className={styles.trainerFeatureCard}>
//                     <div className={styles.trainerFeatureIcon}>💻</div>
//                     <h4 className={styles.trainerFeatureTitle}>
//                       Online Training
//                     </h4>
//                     <p className={styles.trainerFeatureText}>
//                       Deliver virtual sessions to participants across different
//                       locations
//                     </p>
//                   </div>
//                   <div className={styles.trainerFeatureCard}>
//                     <div className={styles.trainerFeatureIcon}>🏢</div>
//                     <h4 className={styles.trainerFeatureTitle}>
//                       Offline Training
//                     </h4>
//                     <p className={styles.trainerFeatureText}>
//                       Conduct in-person sessions at our training centers
//                     </p>
//                   </div>
//                   <div className={styles.trainerFeatureCard}>
//                     <div className={styles.trainerFeatureIcon}>🏛️</div>
//                     <h4 className={styles.trainerFeatureTitle}>
//                       Corporate Training
//                     </h4>
//                     <p className={styles.trainerFeatureText}>
//                       Provide specialized training for corporate clients
//                     </p>
//                   </div>
//                   <div className={styles.trainerFeatureCard}>
//                     <div className={styles.trainerFeatureIcon}>👥</div>
//                     <h4 className={styles.trainerFeatureTitle}>
//                       Small Batch Training
//                     </h4>
//                     <p className={styles.trainerFeatureText}>
//                       Manage small group sessions for personalized attention
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.trainerInfoSection}>
//                 <h3 className={styles.trainerSectionTitle}>
//                   <span className={styles.trainerSectionIcon}>💰</span>
//                   Benefits
//                 </h3>
//                 <ul className={styles.trainerBenefitsList}>
//                   <li className={styles.trainerBenefitItem}>
//                     <div className={styles.trainerBulletPoint}>•</div>
//                     <div>
//                       <strong>Competitive Compensation:</strong> Earn based on
//                       per-candidate and hourly rates
//                     </div>
//                   </li>
//                   <li className={styles.trainerBenefitItem}>
//                     <div className={styles.trainerBulletPoint}>•</div>
//                     <div>
//                       <strong>Flexible Schedule:</strong> Choose projects that
//                       fit your availability
//                     </div>
//                   </li>
//                   <li className={styles.trainerBenefitItem}>
//                     <div className={styles.trainerBulletPoint}>•</div>
//                     <div>
//                       <strong>Professional Growth:</strong> Enhance your skills
//                       while teaching
//                     </div>
//                   </li>
//                   <li className={styles.trainerBenefitItem}>
//                     <div className={styles.trainerBulletPoint}>•</div>
//                     <div>
//                       <strong>Recognition:</strong> Get certified and rewarded
//                       for outstanding performance
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               <div className={styles.trainerInfoSection}>
//                 <h3 className={styles.trainerSectionTitle}>
//                   <span className={styles.trainerSectionIcon}>📋</span>
//                   Onboarding Process
//                 </h3>
//                 <div className={styles.trainerProcessSteps}>
//                   <div className={styles.trainerStep}>
//                     <div className={styles.trainerStepNumber}>1</div>
//                     <div className={styles.trainerStepContent}>
//                       <h4 className={styles.trainerStepTitle}>
//                         Submit Application
//                       </h4>
//                       <p className={styles.trainerStepText}>
//                         Fill out the form and submit your resume
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.trainerStep}>
//                     <div className={styles.trainerStepNumber}>2</div>
//                     <div className={styles.trainerStepContent}>
//                       <h4 className={styles.trainerStepTitle}>HR Review</h4>
//                       <p className={styles.trainerStepText}>
//                         Our team will evaluate your application
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.trainerStep}>
//                     <div className={styles.trainerStepNumber}>3</div>
//                     <div className={styles.trainerStepContent}>
//                       <h4 className={styles.trainerStepTitle}>Interview</h4>
//                       <p className={styles.trainerStepText}>
//                         Telephonic discussion about opportunities
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.trainerStep}>
//                     <div className={styles.trainerStepNumber}>4</div>
//                     <div className={styles.trainerStepContent}>
//                       <h4 className={styles.trainerStepTitle}>
//                         Start Training
//                       </h4>
//                       <p className={styles.trainerStepText}>
//                         Begin sessions with our coordination
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.trainerCtaSection}>
//                 <h3 className={styles.trainerCtaTitle}>
//                   Ready to Join Our Trainer Network?
//                 </h3>
//                 <button
//                   className={styles.trainerCtaButton}
//                   onClick={() => handleTabChange("form")}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FreelanceTrainer;
"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "./Head";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaBuilding,
  FaUsers,
  FaChalkboardTeacher,
  FaDollarSign,
  FaClock,
  FaTrophy,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const FreelanceTrainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    languages: "",
    technologies: "",
    domainExperience: "",
    trainingExperience: "",
    availability: "",
    resumeLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init("MgL_a24MvcF0eK67e");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        languages: formData.languages,
        technologies: formData.technologies,
        domain_experience: formData.domainExperience,
        training_experience: formData.trainingExperience,
        availability: formData.availability,
        resume_link: formData.resumeLink,
        time: new Date().toLocaleString(),
      };

      await emailjs.send("service_9uysd3c", "template_luo4vus", templateParams);

      setSubmitStatus({
        success: true,
        message:
          "Application submitted successfully! Please email your resume to iclphr@gmail.com",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        languages: "",
        technologies: "",
        domainExperience: "",
        trainingExperience: "",
        availability: "",
        resumeLink: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to submit application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white">
      <Head />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#01377d] to-[#014a9f] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#97e7f5] to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Become a Freelance{" "}
                <span className="text-[#39FF14]">Trainer</span>
              </h1>
              <p className="text-xl text-[#97e7f5] mb-8">
                Share your expertise, inspire talents, and grow with ICLP
                Technologies
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleTabChange("form")}
                  className="inline-flex items-center gap-2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
                >
                  Apply Now <FaArrowRight />
                </button>
                <button
                  onClick={() => handleTabChange("info")}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/30"
                >
                  Learn More
                </button>
                <a
                  href="tel:+918681026181"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all border border-[#39FF14]"
                >
                  <FaPhone /> Call for Enquiry
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/trainer1.jpg"
                alt="Freelance Trainer"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b-2 border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            <button
              onClick={() => handleTabChange("form")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all border-b-4 ${
                activeTab === "form"
                  ? "border-[#39FF14] text-[#01377d]"
                  : "border-transparent text-slate-500 hover:text-[#01377d]"
              }`}
            >
              <span className="text-2xl">📝</span>
              Application Form
            </button>
            <button
              onClick={() => handleTabChange("info")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all border-b-4 ${
                activeTab === "info"
                  ? "border-[#39FF14] text-[#01377d]"
                  : "border-transparent text-slate-500 hover:text-[#01377d]"
              }`}
            >
              <span className="text-2xl">ℹ️</span>
              Program Details
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "form" ? (
          <div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-[#01377d] mb-3">
                    Trainer Application
                  </h2>
                  <p className="text-lg text-slate-600">
                    Join our network of expert trainers
                  </p>
                </div>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg border-2 ${
                      submitStatus.success
                        ? "bg-green-50 border-[#39FF14] text-green-800"
                        : "bg-red-50 border-red-300 text-red-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus.success ? (
                        <FaCheckCircle className="text-[#39FF14]" />
                      ) : (
                        <span>❌</span>
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, Country"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Languages Known <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        required
                        placeholder="English, Hindi, etc."
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Technologies <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleChange}
                        required
                        placeholder="Java, React, Python, etc."
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Domain Experience (Years){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="domainExperience"
                        value={formData.domainExperience}
                        onChange={handleChange}
                        required
                        placeholder="5"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Training Experience (Years)
                      </label>
                      <input
                        type="text"
                        name="trainingExperience"
                        value={formData.trainingExperience}
                        onChange={handleChange}
                        placeholder="2"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Availability <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700 bg-white"
                      >
                        <option value="">Select availability</option>
                        <option value="Online only">Online only</option>
                        <option value="Offline only">Offline only</option>
                        <option value="Both online and offline">
                          Both online and offline
                        </option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Resume Link (Optional)
                      </label>
                      <input
                        type="url"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        placeholder="https://drive.google.com/your-resume"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#39FF14] focus:outline-none transition-colors text-slate-700"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-[#01377d] p-6 rounded-lg">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <FaEnvelope className="text-[#01377d] text-3xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#01377d] text-lg mb-2">
                          Resume Submission
                        </h3>
                        <p className="text-slate-700">
                          Please email your resume (PDF format) to{" "}
                          <strong className="text-[#01377d]">
                            hrteam.iclp@gmail.com
                          </strong>{" "}
                          with the subject line: "Freelance Trainer Application
                          - [Your Name]"
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] font-bold py-4 px-6 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#39FF14]/30"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span> Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FaCheckCircle /> Submit Application
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-5xl mx-auto">
              {/* Program Overview */}
              <div className="bg-slate-50 rounded-2xl p-8 mb-8 border-2 border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🌟</span>
                  <h2 className="text-3xl font-bold text-[#01377d]">
                    Program Overview
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Embarking on a journey as a freelance trainer offers IT
                  professionals a unique opportunity to share their expertise,
                  inspire upcoming talents, and earn additional income. At ICLP
                  Technologies, we are committed to creating a platform that not
                  only benefits learners but also enriches the trainers'
                  professional lives.
                </p>
              </div>

              {/* What is Trainer Freelancing */}
              <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">💡</span>
                  <h2 className="text-3xl font-bold text-[#01377d]">
                    What is Trainer Freelancing?
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Trainer freelancing involves delivering specialized training
                  services to individuals or organizations on a contractual
                  basis. As a freelance trainer, you have the flexibility to
                  choose your projects and schedule, allowing you to engage in
                  part-time or full-time roles based on your training
                  experience and the feedback received.
                </p>
              </div>

              {/* Training Formats */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">📚</span>
                  <h2 className="text-3xl font-bold text-[#01377d]">
                    Training Formats
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#39FF14] hover:shadow-lg transition-all">
                    <FaLaptopCode className="text-[#39FF14] text-5xl mb-4" />
                    <h3 className="text-xl font-bold text-[#01377d] mb-3">
                      Online Training
                    </h3>
                    <p className="text-slate-600">
                      Deliver virtual sessions to participants across different
                      locations
                    </p>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#39FF14] hover:shadow-lg transition-all">
                    <FaBuilding className="text-[#39FF14] text-5xl mb-4" />
                    <h3 className="text-xl font-bold text-[#01377d] mb-3">
                      Offline Training
                    </h3>
                    <p className="text-slate-600">
                      Conduct in-person sessions at our training centers
                    </p>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#39FF14] hover:shadow-lg transition-all">
                    <FaChalkboardTeacher className="text-[#39FF14] text-5xl mb-4" />
                    <h3 className="text-xl font-bold text-[#01377d] mb-3">
                      Corporate Training
                    </h3>
                    <p className="text-slate-600">
                      Provide specialized training for corporate clients
                    </p>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#39FF14] hover:shadow-lg transition-all">
                    <FaUsers className="text-[#39FF14] text-5xl mb-4" />
                    <h3 className="text-xl font-bold text-[#01377d] mb-3">
                      Small Batch Training
                    </h3>
                    <p className="text-slate-600">
                      Manage small group sessions for personalized attention
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-[#01377d] to-[#014a9f] rounded-2xl p-8 mb-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">💰</span>
                  <h2 className="text-3xl font-bold">Benefits</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FaDollarSign className="text-[#39FF14] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#39FF14]">
                        Competitive Compensation:
                      </strong>
                      <span className="text-[#97e7f5]">
                        {" "}
                        Earn based on per-candidate and hourly rates
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaClock className="text-[#39FF14] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#39FF14]">
                        Flexible Schedule:
                      </strong>
                      <span className="text-[#97e7f5]">
                        {" "}
                        Choose projects that fit your availability
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#39FF14] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#39FF14]">
                        Professional Growth:
                      </strong>
                      <span className="text-[#97e7f5]">
                        {" "}
                        Enhance your skills while teaching
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaTrophy className="text-[#39FF14] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#39FF14]">Recognition:</strong>
                      <span className="text-[#97e7f5]">
                        {" "}
                        Get certified and rewarded for outstanding performance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboarding Process */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 mb-8">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">📋</span>
                  <h2 className="text-3xl font-bold text-[#01377d]">
                    Onboarding Process
                  </h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      num: "1",
                      title: "Submit Application",
                      desc: "Fill out the form and submit your resume",
                    },
                    {
                      num: "2",
                      title: "HR Review",
                      desc: "Our team will evaluate your application",
                    },
                    {
                      num: "3",
                      title: "Interview",
                      desc: "Telephonic discussion about opportunities",
                    },
                    {
                      num: "4",
                      title: "Start Training",
                      desc: "Begin sessions with our coordination",
                    },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-[#39FF14] text-[#01377d] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {step.num}
                      </div>
                      <h4 className="font-bold text-[#01377d] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-slate-50 rounded-2xl p-12 text-center border-2 border-slate-200">
                <h3 className="text-3xl font-bold text-[#01377d] mb-4">
                  Ready to Join Our Trainer Network?
                </h3>
                <p className="text-slate-600 mb-6">
                  Start your journey as a freelance trainer today
                </p>
                <button
                  onClick={() => handleTabChange("form")}
                  className="inline-flex items-center gap-2 bg-[#39FF14] hover:bg-[#2de000] text-[#01377d] px-10 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-[#39FF14]/30"
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelanceTrainer;
