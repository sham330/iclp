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
import styles from "./TraineeDetails.module.css";
import SEO from "../SEO/SEO";
import trainerImage from "/trainer1.jpg";

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

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      scrollToSection(
        tab === "form"
          ? styles.trainerFormContainer
          : styles.trainerInfoContainer,
      );
    }, 50);
  };

  return (
    <div className={styles.trainerContainer}>
      <SEO
        title="Hiring Freelance Trainers – Join Our Online Teaching Team"
        description="We're hiring skilled freelance trainers to teach students online. Share your expertise in programming, design, business, and more. Partner with a top-rated online learning institute and inspire the next generation."
      />
      
      {/* Hero Section */}
      <div className={styles.trainerHero}>
        <div className={styles.trainerHeroContent}>
          <div className={styles.trainerHeroText}>
            <h1 className={styles.trainerHeroTitle}>
              Become a Freelance Trainer
            </h1>
            <p className={styles.trainerHeroSubtitle}>
              Share your expertise, inspire talents, and grow with ICLP
              Technologies
            </p>
            <div className={styles.trainerHeroButtons}>
              <button
                className={`${styles.trainerHeroButton} ${styles.trainerPrimaryButton}`}
                onClick={() => handleTabChange("form")}
              >
                Apply Now
              </button>
              <button
                className={`${styles.trainerHeroButton} ${styles.trainerSecondaryButton}`}
                onClick={() => handleTabChange("info")}
              >
                Learn More
              </button>
              <a
                href="tel:+918681026181"
                className={`${styles.trainerHeroButton} ${styles.trainerCallButton}`}
              >
                Call for Enquiry
              </a>
            </div>
          </div>
          <div className={styles.trainerHeroImage}>
            <img
              src={trainerImage}
              alt="Freelance Trainer"
              className={styles.trainerIllustration}
            />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.trainerTabContainer}>
        <button
          className={`${styles.trainerTabButton} ${
            activeTab === "form" ? styles.trainerActiveTab : ""
          }`}
          onClick={() => handleTabChange("form")}
        >
          <span className={styles.trainerTabIcon}>📝</span>
          Application Form
        </button>
        <button
          className={`${styles.trainerTabButton} ${
            activeTab === "info" ? styles.trainerActiveTab : ""
          }`}
          onClick={() => handleTabChange("info")}
        >
          <span className={styles.trainerTabIcon}>ℹ️</span>
          Program Details
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.trainerMainContent}>
        {activeTab === "form" ? (
          <div className={styles.trainerFormWrapper}>
            <div className={styles.trainerFormContainer}>
              <div className={styles.trainerFormCard}>
                <div className={styles.trainerFormHeader}>
                  <h2 className={styles.trainerFormTitle}>Trainer Application</h2>
                  <p className={styles.trainerFormSubtitle}>
                    Join our network of expert trainers
                  </p>
                </div>

                {submitStatus && (
                  <div
                    className={`${styles.trainerStatusMessage} ${
                      submitStatus.success
                        ? styles.trainerSuccess
                        : styles.trainerError
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.trainerForm}>
                  <div className={styles.trainerFormGrid}>
                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="name" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>Full Name</span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="email" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>Email</span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="phone" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>Phone</span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="location" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>Location</span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="City, Country"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="languages" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>
                          Languages Known
                        </span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        id="languages"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="English, Hindi, etc."
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label
                        htmlFor="technologies"
                        className={styles.trainerLabel}
                      >
                        <span className={styles.trainerLabelText}>
                          Technologies
                        </span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        id="technologies"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="Java, React, Python, etc."
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label
                        htmlFor="domainExperience"
                        className={styles.trainerLabel}
                      >
                        <span className={styles.trainerLabelText}>
                          Domain Experience (Years)
                        </span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        id="domainExperience"
                        name="domainExperience"
                        value={formData.domainExperience}
                        onChange={handleChange}
                        required
                        className={styles.trainerInput}
                        placeholder="5"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label
                        htmlFor="trainingExperience"
                        className={styles.trainerLabel}
                      >
                        <span className={styles.trainerLabelText}>
                          Training Experience (Years)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="trainingExperience"
                        name="trainingExperience"
                        value={formData.trainingExperience}
                        onChange={handleChange}
                        className={styles.trainerInput}
                        placeholder="2"
                      />
                    </div>

                    <div className={styles.trainerFormGroup}>
                      <label
                        htmlFor="availability"
                        className={styles.trainerLabel}
                      >
                        <span className={styles.trainerLabelText}>
                          Availability
                        </span>
                        <span className={styles.trainerRequired}>*</span>
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                        className={styles.trainerSelect}
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

                    <div className={styles.trainerFormGroup}>
                      <label htmlFor="resumeLink" className={styles.trainerLabel}>
                        <span className={styles.trainerLabelText}>
                          Resume Link
                        </span>
                      </label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className={styles.trainerInput}
                        placeholder="https://drive.google.com/your-resume"
                      />
                    </div>
                  </div>

                  <div className={styles.trainerResumeNotice}>
                    <div className={styles.trainerNoticeIcon}>📄</div>
                    <div>
                      <h3 className={styles.trainerNoticeTitle}>
                        Resume Submission
                      </h3>
                      <p className={styles.trainerNoticeText}>
                        Please email your resume (PDF format) to{" "}
                        <strong>hrteam.iclp@gmail.com</strong> with the subject
                        line: "Freelance Trainer Application - [Your Name]"
                      </p>
                    </div>
                  </div>

                  <div className={styles.trainerSubmitContainer}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.trainerSubmitButton}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.trainerSpinner}></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.trainerInfoWrapper}>
            <div className={styles.trainerInfoContainer}>
              <div className={styles.trainerInfoCard}>
                <h2 className={styles.trainerInfoTitle}>
                  Freelance Trainer Program
                </h2>

                <div className={styles.trainerInfoSection}>
                  <h3 className={styles.trainerSectionTitle}>
                    <span className={styles.trainerSectionIcon}>🌟</span>
                    Program Overview
                  </h3>
                  <p className={styles.trainerSectionText}>
                    Embarking on a journey as a freelance trainer offers IT
                    professionals a unique opportunity to share their expertise,
                    inspire upcoming talents, and earn additional income. At ICLP
                    Technologies, we are committed to creating a platform that not
                    only benefits learners but also enriches the trainers'
                    professional lives.
                  </p>
                </div>

                <div className={styles.trainerInfoSection}>
                  <h3 className={styles.trainerSectionTitle}>
                    <span className={styles.trainerSectionIcon}>💡</span>
                    What is Trainer Freelancing?
                  </h3>
                  <p className={styles.trainerSectionText}>
                    Trainer freelancing involves delivering specialized training
                    services to individuals or organizations on a contractual
                    basis. As a freelance trainer, you have the flexibility to
                    choose your projects and schedule, allowing you to engage in
                    part-time or full-time roles based on your training experience
                    and the feedback received.
                  </p>
                </div>

                <div className={styles.trainerInfoSection}>
                  <h3 className={styles.trainerSectionTitle}>
                    <span className={styles.trainerSectionIcon}>📚</span>
                    Training Formats
                  </h3>
                  <div className={styles.trainerFeaturesGrid}>
                    <div className={styles.trainerFeatureCard}>
                      <div className={styles.trainerFeatureIcon}>💻</div>
                      <h4 className={styles.trainerFeatureTitle}>
                        Online Training
                      </h4>
                      <p className={styles.trainerFeatureText}>
                        Deliver virtual sessions to participants across different
                        locations
                      </p>
                    </div>
                    <div className={styles.trainerFeatureCard}>
                      <div className={styles.trainerFeatureIcon}>🏢</div>
                      <h4 className={styles.trainerFeatureTitle}>
                        Offline Training
                      </h4>
                      <p className={styles.trainerFeatureText}>
                        Conduct in-person sessions at our training centers
                      </p>
                    </div>
                    <div className={styles.trainerFeatureCard}>
                      <div className={styles.trainerFeatureIcon}>🏛️</div>
                      <h4 className={styles.trainerFeatureTitle}>
                        Corporate Training
                      </h4>
                      <p className={styles.trainerFeatureText}>
                        Provide specialized training for corporate clients
                      </p>
                    </div>
                    <div className={styles.trainerFeatureCard}>
                      <div className={styles.trainerFeatureIcon}>👥</div>
                      <h4 className={styles.trainerFeatureTitle}>
                        Small Batch Training
                      </h4>
                      <p className={styles.trainerFeatureText}>
                        Manage small group sessions for personalized attention
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.trainerInfoSection}>
                  <h3 className={styles.trainerSectionTitle}>
                    <span className={styles.trainerSectionIcon}>💰</span>
                    Benefits
                  </h3>
                  <ul className={styles.trainerBenefitsList}>
                    <li className={styles.trainerBenefitItem}>
                      <div className={styles.trainerBulletPoint}>•</div>
                      <div>
                        <strong>Competitive Compensation:</strong> Earn based on
                        per-candidate and hourly rates
                      </div>
                    </li>
                    <li className={styles.trainerBenefitItem}>
                      <div className={styles.trainerBulletPoint}>•</div>
                      <div>
                        <strong>Flexible Schedule:</strong> Choose projects that
                        fit your availability
                      </div>
                    </li>
                    <li className={styles.trainerBenefitItem}>
                      <div className={styles.trainerBulletPoint}>•</div>
                      <div>
                        <strong>Professional Growth:</strong> Enhance your skills
                        while teaching
                      </div>
                    </li>
                    <li className={styles.trainerBenefitItem}>
                      <div className={styles.trainerBulletPoint}>•</div>
                      <div>
                        <strong>Recognition:</strong> Get certified and rewarded
                        for outstanding performance
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={styles.trainerInfoSection}>
                  <h3 className={styles.trainerSectionTitle}>
                    <span className={styles.trainerSectionIcon}>📋</span>
                    Onboarding Process
                  </h3>
                  <div className={styles.trainerProcessSteps}>
                    <div className={styles.trainerStep}>
                      <div className={styles.trainerStepNumber}>1</div>
                      <div className={styles.trainerStepContent}>
                        <h4 className={styles.trainerStepTitle}>
                          Submit Application
                        </h4>
                        <p className={styles.trainerStepText}>
                          Fill out the form and submit your resume
                        </p>
                      </div>
                    </div>
                    <div className={styles.trainerStep}>
                      <div className={styles.trainerStepNumber}>2</div>
                      <div className={styles.trainerStepContent}>
                        <h4 className={styles.trainerStepTitle}>HR Review</h4>
                        <p className={styles.trainerStepText}>
                          Our team will evaluate your application
                        </p>
                      </div>
                    </div>
                    <div className={styles.trainerStep}>
                      <div className={styles.trainerStepNumber}>3</div>
                      <div className={styles.trainerStepContent}>
                        <h4 className={styles.trainerStepTitle}>Interview</h4>
                        <p className={styles.trainerStepText}>
                          Telephonic discussion about opportunities
                        </p>
                      </div>
                    </div>
                    <div className={styles.trainerStep}>
                      <div className={styles.trainerStepNumber}>4</div>
                      <div className={styles.trainerStepContent}>
                        <h4 className={styles.trainerStepTitle}>
                          Start Training
                        </h4>
                        <p className={styles.trainerStepText}>
                          Begin sessions with our coordination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.trainerCtaSection}>
                  <h3 className={styles.trainerCtaTitle}>
                    Ready to Join Our Trainer Network?
                  </h3>
                  <button
                    className={styles.trainerCtaButton}
                    onClick={() => handleTabChange("form")}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelanceTrainer;