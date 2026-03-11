"use client";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaCertificate,
  FaBookOpen,
  FaInfoCircle,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaUserCog,
  FaComments,
  FaBlog,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllAreas, setShowAllAreas] = useState(false);

  // Data
  const quickLinks = [
    {
      icon: <FaBookOpen />,
      name: "Interview Questions",
      url: "/interview-questions",
    },
    {
      icon: <FaInfoCircle />,
      name: "About",
      url: "/about",
    },
    {
      icon: <FaGraduationCap />,
      name: "Tutorials",
      url: "/tutorial",
    },
    {
      icon: <FaUserCog />,
      name: "Freelancers",
      url: "/freelance-trainee",
    },
    {
      icon: <FaComments />,
      name: "Contact Us",
      url: "/contact",
    },
    {
      icon: <FaBlog />,
      name: "Blog",
      url: "/blog",
    },
  ];

  const allCourses = [
    { name: "Python", url: "/course/python-development-online-training/" },
    { name: "Java", url: "/course/java-online-training/" },
    { name: "R Programming", url: "/course/r-programming-online-training/" },
    { name: "JavaScript", url: "/course/java-script-online-training/" },
    { name: "PHP", url: "/course/sql-with-php-online-training/" },
    { name: "Full Stack Developer", url: "/course/full-stack-developer-online-training/" },
    { name: "Node.js", url: "/course/node-js-online-training/" },
    { name: "ReactJS", url: "/course/react-js-online-training/" },
    { name: "Microsoft Azure", url: "/course/azure-devops-training/" },
    { name: "AWS", url: "/course/aws-devops-training/" },
    { name: "DevOps", url: "/course/devops-training/" },
    { name: "Cyber Security", url: "/course/cyber-security-online-training/" },
    { name: "Ethical Hacking", url: "/course/ethical-hacking--online-training/" },
    { name: "Selenium", url: "/course/selenium-training-online/" },
    { name: "Manual Testing Course", url: "/course/manual-testing-course-online/" },
    { name: "JMeter Course", url: "/course/j-meter-course-online/" },
    { name: "ETL Testing", url: "/course/etl-testing-online-training/" },
    { name: "LoadRunner", url: "/course/load-runner-online-training/" },
    { name: "SoapUI", url: "/course/soap-ui-online-training/" },
    { name: "Data Science Course", url: "/course/data-science-course-online/" },
    { name: "Artificial Intelligence", url: "/course/artificial-intelligence-course-online/" },
    { name: "Digital Marketing", url: "/course/digital-marketing-online-training/" },
    { name: "Excel", url: "/course/microsoft-excel-online-training/" },
    { name: "HTML", url: "/course/html-developer-online-training/" },
    { name: "UI and UX", url: "/course/ui-and-ux-online-training/" },
    { name: "Salesforce", url: "/course/salesforce-online-training/" },
    { name: "C Sharp", url: "/course/c-sharp-online-training/" },
    { name: "UNIX SHELL Scripting", url: "/course/unix-shell-scripting-online-training/" },
    { name: "Workday HCM", url: "/course/workday-hcm-online-course/" },
    { name: "Salesforce Online Training", url: "/course/salesforce-online-training/" },
    { name: "Salesforce Developer", url: "/course/salesforce-developer-training/" },
    { name: "Azure DevOps", url: "/course/azure-devops-training/" },
    { name: "Angular", url: "/course/angular-developer-online-training/" },
    { name: "WordPress", url: "/course/wordpress/" },
    { name: "CSS Online", url: "/course/css-online-training/" },
    { name: "Machine Learning", url: "/course/machine-learning-online-course/" },
    { name: "Data Science With Python", url: "/course/data-science-with-python-training/" },
    { name: "Machine Learning with Python", url: "/course/machine-learning-online-course/" },
    { name: "Machine Learning using R", url:"/course/r-programming-online-training/" },
    { name: "MySQL", url: "/course/msql-online-training/" },
    { name: "SQL with PHP", url: "/course/sql-with-php-online-training/" },
    { name: "Microsoft Dynamics 365", url: "/course/microsoft-dynamics-online-training/" },
    { name: "Excel Macros and VBA", url: "/course/excel-macros-and-vba-online-training/" },
    { name: "jQuery", url: "/course/j-query-developer-online-training/" },
    { name: "SAP FICO", url: "/courses/sap/sap-fico" },
    { name: "SAP MM", url: "/courses/sap/sap-mm" },
    { name: "SAP SD", url: "/courses/sap/sap-sd" },
    { name: "SAP PP", url: "/courses/sap/sap-pp" },
    { name: "SAP ABAP", url: "/courses/sap/sap-abap" },
    { name: "Oracle Financials", url: "/courses/oracle/oracle-financials" },
    { name: "Oracle SCM", url:"/courses/oracle/oracle-scm" },
    { name: "Oracle HCM", url: "/courses/oracle/oracle-hcm" }
  ];

  const areas = [
    "T. Nagar", "Mylapore", "Triplicane", "Egmore", "Nungambakkam",
    "Royapettah", "George Town", "Royapuram", "Washermanpet", "Tondiarpet",
    "Perambur", "Vyasarpadi", "Kodungaiyur", "Adyar", "Besant Nagar",
    "Thiruvanmiyur", "Saidapet", "Velachery", "Guindy", "Ashok Nagar",
    "KK Nagar", "Anna Nagar", "Mogappair", "Ambattur", "Avadi",
    "Padi", "Thoraipakkam", "Perungudi", "Kandanchavadi", "Sholinganallur",
    "Navalur", "Siruseri", "Tambaram", "Chromepet", "Pallavaram",
    "Medavakkam", "Madipakkam", "Pallikaranai", "Porur", "Kundrathur"
  ];

  const displayedCourses = showAllCourses ? allCourses : allCourses.slice(0, 11);
  const displayedAreas = showAllAreas ? areas : areas.slice(0, 15);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "helpdesk.iclp@gmail.com",
      url: "mailto:helpdesk.iclp@gmail.com",
    },
    { icon: <FaPhone />, text: "+91 86810 26181", url: "tel:+918681026181" },
    { icon: <FaPhone />, text: "+91 93441 40385", url: "tel:+919344140385" },
    {
      icon: <FaWhatsapp />,
      text: "Chat on WhatsApp",
      url: "https://wa.me/918681026181",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/iclp-technologies",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/iclp_technologies",
      name: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      url: "http://linkedin.com/company/iclp-technologies",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/iclp_tech",
      name: "Twitter",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@iclp_technologies",
      name: "YouTube",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Links */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" />
            Quick Links
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {quickLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.url}
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
                {index < quickLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Popular Courses */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaCertificate className="text-blue-400" />
            Popular Courses
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {displayedCourses.map((course, index) => (
              <React.Fragment key={index}>
                <a
                  href={course.url}
                  className="hover:text-blue-400 transition-colors"
                >
                  {course.name}
                </a>
                {index < displayedCourses.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
            {allCourses.length > 11 && (
              <>
                <span className="text-gray-600">|</span>
                <button
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                >
                  {showAllCourses ? (
                    <>
                      <FaChevronUp /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> Show More
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            Areas We Serve in Chennai
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {displayedAreas.map((area, index) => (
              <React.Fragment key={index}>
                <span className="hover:text-blue-400 transition-colors cursor-default">
                  {area}
                </span>
                {index < displayedAreas.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
            {areas.length > 15 && (
              <>
                <span className="text-gray-600">|</span>
                <button
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  onClick={() => setShowAllAreas(!showAllAreas)}
                >
                  {showAllAreas ? (
                    <>
                      <FaChevronUp /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> Show More
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Contact and Social */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {contactInfo.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">{item.icon}</span>
                  <a
                    href={item.url}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.text}
                  </a>
                </div>
                {index < contactInfo.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social, index) => (
              <React.Fragment key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mb-8 text-xs text-gray-400 leading-relaxed border-t border-gray-700 pt-8">
          <p>
            On Our Website all Courses, Technologies, logos, and certification
            titles we use are their respective owners' property. Trademarks &
            their intellectual Property belong to respective owners. All the
            firm, service, or product names on our website are solely for
            identification purposes. We do not own, endorse or have the
            copyright or officially partnered of any brand/logo name in any
            manner. Few graphics on our website are freely available on public
            domains. we use all these just for the purpose of training only.
          </p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center gap-2 text-sm mb-6 justify-center">
          <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="/cookie-policy" className="hover:text-blue-400 transition-colors">
            Cookie Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} ICLP Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;