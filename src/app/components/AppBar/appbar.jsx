"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaInfoCircle,
  FaSearch,
  FaYoutube,
} from "react-icons/fa";
import "../AppBar/appbar.css";
const AppBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const socialLinks = {
    instagram:
      "https://www.instagram.com/iclp_technologies?igsh=MWx5ZGZqbnJoOGUwcA%3D%3D&utm_source=qr",
    linkedin: "http://linkedin.com/in/iclp-technologies-b40044354",
    youTybe: "https://youtube.com/@iclp_technologies?si=zLBwqpP0k5LAdgNg",
  };

  const phoneNumber = "86810 26181";

  // Load all course names from your JSON data
  useEffect(() => {
    const courses = [
      { name: "Java", path: "java-online-training" },
      { name: "Python", path: "python-development-online-training" },
      { name: "C Sharp", path: "c-sharp-online-training" },
      { name: "R Programming", path: "r-programming-online-training" },
      { name: "JavaScript", path: "java-script-online-training" },
      { name: "Perl Scripting", path: "perl-scripting-online-training" },
      { name: "TypeScript", path: "type-script-online-training" },
      { name: "Full Stack Developer", path: "full-stack-developer-online-training" },
      { name: "Node JS", path: "node-js-online-training" },
       {course: "Hospital Administration",path: "hospital-administration-course"},
       {name: "Healthcare Analytics",path: "healthcare-analytics-course"},
      {name:"Food Technology",path:"food-technology-course"},
      { name: "React JS", path: "react-js-online-training" },
      { name: "Angular", path: "angular-developer-online-training" },
      { name: "WordPress", path: "wordpress" },
      { name: "HTML", path: "html-developer-online-training" },
      { name: "CSS", path: "css-online-training" },
      { name: "JQuery", path: "j-query-developer-online-training" },
      { name: "Full Stack Java", path: "full-stack-java-training-online" },
      { name: "Python Full Stack", path: "python-full-stack-developer-online-training" },
      { name: "Groovy and Grails", path: "groovy-and-grails-online-training" },
      { name: "Workday HCM", path: "workday-hcm-online-course" },
      { name: "Salesforce", path: "salesforce-online-training" },
      { name: "Salesforce Developer", path: "salesforce-developer-training" },
      { name: "Azure DevOps", path: "azure-devops-training" },
      { name: "Microsoft Azure", path: "microsoftazure-training" },
      { name: "Oracle Fusion Financials", path: "oracle-fusion-financials" },
      { name: "Kofax Online Training", path: "kofax-totalagility-training" },
      { name: "Snowflake Training", path: "snowflake-certification-training" },
      {name:"Databricks",path:"databricks-spark-certification-training"},
      {name:"Postgresql",path:"postgresql-admin-online-training"},
      {name:"Medical Coding",path:"medical-coding-cpc-course"},
      {name:"Appian ",path: "appian-online-training"},
      {name:"ASP .Net",path:"asp-net-course-training"},
      { name: "Basics of Automation Testing", path: "automation-testing-online-course" },
      {name:"Linux",path:"linux-certification-training"},
      { name: "AI for Automation", path: "ai-for-automation-course" },
      { name: "API Testing (Postman Basics)", path: "api-testing-certification-training" },
      {name:"Bootstrap",path:"bootstrap-course-training"},
      { name: "DevOps", path: "devops-training" },
      { name: "Workday Integration Training", path: "workday-integration-training", },
      { name: "Workday Payroll Training", path: "workday-payroll-training", },
      {
        name: "Primavera P6", path: "primavera-p6-online-training",
      },
      { name: "AWS", path: "aws-online-training" },
      { name: "Cisco UCS", path: "cisco-ucs-training" },
      { name: "Cyber Security", path: "cyber-security-online-training" },
      { name: "Ethical Hacking", path: "ethical-hacking--online-training" },
      { name: "CISM", path: "cism-certification-online-training" },
      { name: "CyberArk", path: "cyber-ark-training" },
      { name: "CISA", path: "certified-information-systems-auditor-cisa" },
      { name: "CISM (Manager)", path: "certified-information-security-manager-cism" },
      { name: "Blockchain", path: "blockchain-online-training" },
      { name: "Selenium", path: "selenium-training-online" },
      { name: "Manual Testing", path: "manual-testing-course-online" },
      { name: "JMeter", path: "j-meter-course-online" },
      { name: "Workday Studio Training", path: "workday-studio-training" },
      { name: "Software Testing", path: "software-testing-certification-course" },
      { name: "Data Analytics Course", path: "data-analytics-course" },
      { name: "Workday financial training", path: "workday-financial-training" },
      { name: "Collibra", path: "collibra-online-training-course" },
      { name: "Spring boot online training", path: "spring-boot-online-training" },
      { name: "ETL Testing", path: "etl-testing-online-training" },
      { name: "LoadRunner", path: "load-runner-online-training" },
      { name: "SoapUI", path: "soap-ui-online-training" },
      { name: "Team center PLM  training", path: "teamcenter-plm-online-training" },
      { name: "Business analyst  training", path: "business-analyst-online-training" },
      { name: "SAP treasury and risk management", path: "sap-treasury-and-risk-management-online-training" },
      { name: "Machine Learning", path: "machine-learning-online-course" },
      { name: "Data Science with Python", path: "data-science-with-python-training" },
      { name: "ML using R", path: "machine-learning-using-r-course" },
      {  name:"AI & ML",path: "ai-ml-training"},
      { name: "Data Science", path: "data-science-course-online" },
      {  name:"Tally Accounting",path: "tally-accounting-online-training"},
      {name:"Internet and Network Basics",path:"internet-and-network-basics-training"},
      {name:"Computer Fundamentals",  path: "computer-fundamentals-training"},
      {name:"Basic Web designing",path:"basic-web-designing-course"},
      {name:"Programming Basics",path:"programming-basics-training"},
      { name:"Basic Graphic Designing", path: "basic-graphic-designing-course"},
      {name:"Digital Literacy",path:"digital-literacy-training"},
      { name: "AI", path: "artificial-intelligence-course-online" },
      { name: "ChatGPT", path: "chatgpt-online-course" },
      { name: "MSQL", path: "msql-online-training" },
      {name:"Soft Tech Skills",  path: "soft-tech-skills-training",},
      { name: "SQL with PHP", path: "sql-with-php-online-training" },
      { name:"AR VR", path: "ar-vr-technologies-training",},
      { name: "PL/SQL", path: "pl-and-sql-online-training" },
      { name: "Excel", path: "microsoft-excel-online-training" },
      { name: "Microsoft Dynamics", path: "microsoft-dynamics-online-training" },
      { name: "Microsoft Azure", path: "microsoft-azure-online-training" },
      { name: "Excel Macros and VBA", path: "excel-macros-and-vba-online-training" },
      { name: "Digital Marketing", path: "digital-marketing-online-training" },
      { name: "UI/UX", path: "ui-and-ux-online-training" },
      { name: "Salesforce", path: "salesforce-online-training" },
      { name: "CCNA", path: "ccna-online-training" },
      { name: "CCNP", path: "ccnp-online-training" },
      { name: "Fortinet", path: "fortinet-online-training" },
      { name: "SAS", path: "sas-course-online" },
      { name: "Informatica PowerCenter", path: "informatica-power-center-course" },
      { name: "Informatica ILM", path: "informatica-ilm-online-training" },
      { name: "Unix Shell Scripting", path: "unix-shell-scripting-online-training" },
      { name: "C and C++", path: "c-cpp-programming-course" },
      { name: "Corel Draw", path: "coreldraw-masterclass" },
      { name: "Alation Data Catalog", path: "alation-data-catalog-training", },
      { "name": "IBM DataPower", "path": "ibm-data-power" },
      { "name": "IBM Cognos", "path": "ibm-cognos" },
      { "name": "IBM Watson Analytics", "path": "ibm-watson-analytics" },
      { "name": "IBM SPSS", "path": "ibm-spss" },
      { "name": "IBM Cloud Essentials", "path": "ibm-cloud-essentials" },
      { "name": "IBM Bluemix", "path": "ibm-bluemix" },
      { "name": "IBM QRadar SIEM", "path": "ibm-qradar-siem" },
      { "name": "IBM BPM Administration", "path": "ibm-bpm-administration" },
      { "name": "IBM Sterling", "path": "ibm-sterling" },
      { "name": "WebSphere Application Server", "path": "websphere-application-server" },
      { "name": "IBM AIX", "path": "ibm-aix" },
      { "name": "IBM Mainframe Developer", "path": "ibm-mainframe-developer" },
      { "name": "IBM Tivoli", "path": "ibm-tivoli" },

      // SAP Courses
      { name: "SAP FICO", type: "sap", path: "sap-fico" },
      { name: "SAP MM", type: "sap", path: "sap-mm" },
      { name: "SAP SD", type: "sap", path: "sap-sd" },
      { name: "SAP PP", type: "sap", path: "sap-pp" },
      { name: "SAP ABAP", type: "sap", path: "sap-abap" },
            {path:"sap-ps",type: "sap", name:"SAP PS"},
      { name: "SAP ui5 fiori", type: "sap",  path: "sap-ui5-fiori-training", },

      { name: "SAP SCM", type: "sap", path: "sap-scm" },
      { name: "SAP Transportation Management", type: "sap", path: "sap-transportation-management" },
      { name: "SAP SuccessFactors Online Training", type: "sap", path: "sap-successfactors-online-training" },
      { name: "SAP Quality Management (QM)", type: "sap", path: "sap-quality-management-(qm)" },
      { name: "SAP Ariba Training", type: "sap", path: "sap-ariba-training" },
      { name: "SAP Master Data Governance (MDG) on S/4HANA", type: "sap", path: "sap-master-data-governance-(mdg)-on-s-4hana" },
      { name: "Adobe Photoshop Certification", type: "sap" },
      { name: "SAP BASIS Administration", type: "sap", path: "sap-basis-administration" },
      { name: "SAP Sales Cloud (C4C) Training", type: "sap", path: "sap-sales-cloud-(c4c)-training" },
      { name: "SAP FSCM (Retail) Training", type: "sap", path: "sap-fscm" },
      { name: "SAP Business Technology Platform (BTP)", type: "sap", path: "sap-btp-training" },
      { name: "SAP CRM Training", type: "sap", path: "sap-crm" },
      { name: "SAP SRM Training", type: "sap", path: "sap-srm" },
      { name: "SAP APO Online Training", type: "sap", path: "sap-apo" },
      { name: "SAP IBP Online Training", type: "sap", path: "sap-ibp" },
      { name: "SAP BI/BW Training", type: "sap", path: "sap-bibw" },
      { name: "SAP Analytics Cloud Online Training", type: "sap", path: "sap-analytic-cloud" },
      { name: "SAP Security GRC Training", type: "sap", path: "sap-security-grc" },
      { name: "SAP IS Retail Training", type: "sap", path: "sap-is-retail" },
      { name: "SAP IS Utilities Training", type: "sap", path: "sap-is-utilities" },
      { name: "SAP PLM Training", type: "sap", path: "sap-plm" },
      { name: "SAP LE Certification Training", type: "sap", path: "sap-le" },
      { name: "SAP Healthcare Training", type: "sap", path: "sap-healthcare" },
      { name: "SAP IS Banking Training", type: "sap", path: "sap-is-banking" },
      { name: "SAP BPC Online Training", type: "sap", path: "sap-is-bpc" },
      { name: "SAP PM Course", type: "sap", path: "sap-pm" },
      { name: "SAP ESS Online", type: "sap", path: "sap-ess" },
      { name: "SAP Hybris E-Commerce Online Training", type: "sap", path: "sap-hybris-ecommerce" },
      { name: "SAP BO", type: "sap", path: "sap-bo" },
      { name: "SAP BOBJ Training", type: "sap", path: "sap-bobj" },
      { name: "SAP Fieldglass", type: "sap", path: "sap-fieldglass" },
      { name: "SAP Data Archiving", type: "sap", path: "sap-data-archiving" },
      { name: "SAP Solution Manager", type: "sap", path: "sap-solution-manager" },
      { name: "SAP Aerospace & Defense", type: "sap", path: "sap-aerospace-and-defense" },
      { name: " SAP IS Insurance Training", type: "sap", path: "sap-is-insurance" },

      // Oracle Courses
      { name: "Oracle Financials", type: "oracle", path: "oracle-financials" },
      { name: "Oracle SCM", type: "oracle", path: "oracle-scm" },
      { name: "Oracle HCM", type: "oracle", path: "oracle-hcm" },
      { name: "Oracle CPQ Training", type: "oracle", path: "oracle-cpq" },
      { name: "Oracle Procure to Pay Training", type: "oracle", path: "oracle-procure-to-pay" },
      { name: "Oracle Hyperion EPM Training", type: "oracle", path: "oracle-hyperion-epm" },
      { name: "Oracle GRC Controls Suite Fundamentals", type: "oracle", path: "oracle-grc-control-suit-fundamentals-vers" },
      { name: "Oracle Developer Course", type: "oracle", path: "oracle-developer" },
      { name: "Oracle SQL & PL/SQL", type: "oracle", path: "oracle-sql-plsql" },
      { name: "Oracle Forms and Reports", type: "oracle", path: "oracle-forms-and-reports" },
      { name: "Oracle Application Framework (OAF)", type: "oracle", path: "oracle-application-framework" },
      { name: "Oracle Cloud Infrastructure (OCI)", type: "oracle", path: "oracle-cloud-infrastructure" },
      { name: "WebLogic Server", type: "oracle", path: "oracle-weblogic-server" },
      { name: "Oracle PeopleSoft HRMS/HCM", type: "oracle", path: "oracle-peoplesoft" },
      { name: "Oracle Customer Care & Billing (CC&B)", type: "oracle", path: "oracle-customercare" },
      { name: "R12.x Oracle Inventory Management", type: "oracle", path: "oracle-r12" },
      { name: "R12.2 Oracle E-Business Tax", type: "oracle", path: "oracle-tax-reporting" },
      { name: "R12.x Oracle Order Management", type: "oracle", path: "oracle-order-management" }
    ];

    setAllCourses(courses);
  }, []);

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleAboutClick = () => {
    router.push("/freelance-trainee");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const findBestMatch = (input) => {
    const exactMatch = allCourses.find(
      (course) => course.name.toLowerCase() === input.toLowerCase(),
    );
    if (exactMatch) return exactMatch;

    const partialMatches = allCourses.filter((course) =>
      course.name.toLowerCase().includes(input.toLowerCase()),
    );
    if (partialMatches.length > 0) return partialMatches[0];

    const fuzzyMatches = allCourses.filter((course) =>
      course.name.toLowerCase().startsWith(input.toLowerCase().charAt(0)),
    );
    if (fuzzyMatches.length > 0) return fuzzyMatches[0];

    return null;
  };

  const navigateToCourse = (course) => {
    if (course.type === "sap") {
      // Use path if available, otherwise fallback to name
      const urlPath = course.path || encodeURIComponent(course.name);
      router.push(`/courses/sap/${urlPath}`);
    } else if (course.type === "oracle") {
      // Use path if available, otherwise fallback to name
      const urlPath = course.path || encodeURIComponent(course.name);
      router.push(`/courses/oracle/${urlPath}`);
    } else {
      router.push(`/course/${encodeURIComponent(course.path)}`);
    }
    setSearchTerm("");
    setShowSuggestions(false);
    setActiveSuggestion(-1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // If there's an active suggestion (from keyboard navigation), use that
      if (activeSuggestion >= 0 && suggestions[activeSuggestion]) {
        navigateToCourse(suggestions[activeSuggestion]);
      } else {
        // Otherwise try to find the best match
        const bestMatch = findBestMatch(searchTerm.trim());
        if (bestMatch) {
          navigateToCourse(bestMatch);
        } else {
          alert("Course not found. Please try another search term.");
        }
      }
    }
  };

  const handleSuggestionClick = (course) => {
    // Focus the input first to prevent immediate blur
    searchInputRef.current?.focus();
    navigateToCourse(course);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveSuggestion(-1); // Reset active suggestion when typing

    if (value.length > 0) {
      const filtered = allCourses.filter((course) =>
        course.name.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleInputBlur = () => {
    // Only hide suggestions if the blur wasn't caused by clicking a suggestion
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (!suggestionsRef.current?.contains(activeElement)) {
        setShowSuggestions(false);
      }
    }, 200);
  };

  const handleKeyDown = (e) => {
    // Arrow down - move to next suggestion
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    }
    // Arrow up - move to previous suggestion
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
    }
    // Enter - select the active suggestion or submit search
    else if (e.key === "Enter") {
      if (activeSuggestion >= 0 && suggestions[activeSuggestion]) {
        e.preventDefault();
        navigateToCourse(suggestions[activeSuggestion]);
      }
    }
  };

  // Scroll active suggestion into view
  useEffect(() => {
    if (activeSuggestion >= 0 && suggestionsRef.current) {
      const activeItem = suggestionsRef.current.children[activeSuggestion];
      if (activeItem) {
        activeItem.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [activeSuggestion]);

  return (
    <>
      <nav className="appbar">
 {/* Logo */}
<div className="logo-shine-wrapper">
  <img
    src="/assets/logo/logo2.png"
    alt="ICLP Logo"
    className="appbar-logo"
  />
  <span className="logo-shine"></span>
</div>


        {/* Title (Now comes first) */}
        {/* Title with Subtitle */}
        <div className="title-container" onClick={handleHomeClick}>
          <h1 className="headingText">ICLP</h1>
          <p className="subtitle">Upgrade to New Era</p>
        </div>

        {/* Search Bar with Suggestions (Now placed after the title) */}
        <div className="search-container">
          <form className="appbar-search" onSubmit={handleSearch}>
            {/* Your search input element goes here */}
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              className="search-input-dark"
              autoComplete="off"
              onTouchStart={() =>
                searchTerm.length > 0 && setShowSuggestions(true)
              }
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </form>

          {/* REPLACE THE EXISTING SUGGESTIONS CODE WITH THE NEW VERSION BELOW */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-dropdown" ref={suggestionsRef}>
              {suggestions.map((course, index) => (
                <li
                  key={index}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    handleSuggestionClick(course);
                  }}
                  className={
                    index === activeSuggestion ? "active-suggestion" : ""
                  }
                >
                  {course.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Button Container */}
        <div className="button-container">
          {/* About Button */}
          <button className="about-button" onClick={handleAboutClick}>
            <FaInfoCircle className="about-icon" /> Freelance Trainer
          </button>

          {/* Enquiry Button */}
          <button className="enquiry-button" onClick={handleCall}>
            <FaPhone className="phone-icon" /> Enquiry 86810 26181
          </button>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href={socialLinks.youTybe}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </nav>

      {/* Enhanced Marquee Banner */}
      <div className="dynamic-banner">
        <div className="dynamic-banner__track">
          <div className="dynamic-banner__content">
            <span className="dynamic-banner__text">
              We are hiring{" "}
              <span className="highlight-text">passionate trainers</span> to
              join our growing team! Share your{" "}
              <span className="highlight-text">expertise</span> with aspiring
              professionals in a{" "}
              <span className="highlight-text">
                dynamic learning environment
              </span>
              . Enjoy{" "}
              <span className="highlight-text">competitive compensation</span>,{" "}
              <span className="highlight-text">flexible schedules</span>, and
              rewarding teaching experiences. Whether you're a{" "}
              <span className="highlight-text">seasoned instructor</span> or{" "}
              <span className="highlight-text">industry expert</span>, we
              provide the platform to{" "}
              <span className="highlight-text">shape futures</span>.{" "}
              <span className="highlight-text">Apply now</span> to become part
              of our <span className="highlight-text">elite training team</span>
              !
            </span>
          </div>
        </div>
      </div>
      {/* <HolidayMarquee /> */}
    </>
  );
};

export default AppBar;