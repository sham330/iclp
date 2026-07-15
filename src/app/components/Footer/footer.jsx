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
    { name: "SAP FICO", url: "/courses/sap-courses/sap-fico-training-in-chennai" },
    { name: "SAP MM", url: "/courses/sap-courses/sap-mm-training-in-chennai" },
    { name: "SAP SD", url: "/courses/sap-courses/sap-sd-training-in-chennai" },
    { name: "SAP ABAP", url: "/courses/sap-courses/sap-abap-training-in-chennai" },
    { name: "Python", url: "/courses/programming/python-development-online-training-in-chennai" },
    { name: "Java", url: "/courses/programming/java-online-training-in-chennai" },
    { name: "R Programming", url: "/courses/programming/r-programming-online-training-in-chennai" },
    { name: "JavaScript", url: "/courses/programming/java-script-online-training-in-chennai" },
    { name: "PHP", url: "/courses/programming/php-online-training-in-chennai" },
    { name: "Node.js", url: "/courses/web-development/node-js-online-training-in-chennai" },
    { name: "ReactJS", url: "/courses/web-development/react-js-online-training-in-chennai" },
    { name: "Angular", url: "/courses/web-development/angular-developer-online-training-in-chennai" },
    { name: "MERN Stack", url: "/courses/web-development/mern-stack-training-in-chennnai" },
    { name: "Full Stack Java", url: "/courses/web-development/full-stack-java-training-in-chennai" },
    { name: "Microsoft Azure", url: "/courses/cloud-computing-devops/microsoft-azure-online-training-in-chennai" },
    { name: "AWS", url: "/courses/cloud-computing-devops/aws-online-training-in-chennai" },
    { name: "DevOps", url: "/courses/cloud-computing-devops/devops-training-in-chennai" },
    { name: "Docker", url: "/courses/cloud-computing-devops/docker-training-in-chennai" },
    { name: "Kubernetes", url: "/courses/cloud-computing-devops/kubernetes-training-in-chennai" },
    { name: "Cyber Security", url: "/courses/cybersecurity-ethical-hacking/cyber-security-online-training-in-chennai" },
    { name: "Ethical Hacking", url: "/courses/cybersecurity-ethical-hacking/ethical-hacking--online-training-in-chennai" },
    { name: "Selenium", url: "/courses/software-testing-quality-assurance/selenium-training-in-chennai" },
    { name: "Manual Testing", url: "/courses/software-testing-quality-assurance/manual-testing-course-online-training-in-chennai" },
    { name: "JMeter", url: "/courses/software-testing-quality-assurance/jmeter-online-training-in-chennai" },
    { name: "Artificial Intelligence", url: "/courses/data-science-artificial-intelligence/artificial-intelligence-course-online-training-in-chennai" },
    { name: "Machine Learning", url: "/courses/data-science-artificial-intelligence/machine-learning-online-course-chennai" },
    { name: "Data Science", url: "/courses/data-science-artificial-intelligence/data-science-with-python-training-in-chennai" },
    { name: "Power BI", url: "/courses/data-science-artificial-intelligence/power-bi-online-training-in-chennai" },
    { name: "Digital Marketing", url: "/courses/digital-marketing-business-tools/digital-marketing-online-training-in-chennai" },
    { name: "UI and UX", url: "/courses/ui-and-ux/ui-ux-designer-online-training-in-chennai" },
    { name: "Salesforce", url: "/courses/crm-enterprise-solutions/salesforce-online-training-in-chennai" },
    { name: "Workday HCM", url: "/courses/crm-enterprise-solutions/workday-hcm--training-in-chennai" },
    { name: "Azure DevOps", url: "/courses/cloud-computing-devops/azure-devops-training-in-chennai" },
    { name: "MySQL", url: "/courses/database-management-system/msql-online-training-in-chennai" },
    { name: "Excel", url: "/courses/microsoft/microsoft-excel-online-training-in-chennai" },
    { name: "CCNA", url: "/courses/networking/ccna-online-training-in-chennai" },
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
      text: "careerhub@iclptech.in",
      url: "mailto:careerhub@iclptech.in",
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