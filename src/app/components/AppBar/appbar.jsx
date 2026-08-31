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
  const debounceTimerRef = useRef(null);

  const socialLinks = {
    instagram:
      "https://www.instagram.com/iclp_technologies?igsh=MWx5ZGZqbnJoOGUwcA%3D%3D&utm_source=qr",
    linkedin: "http://linkedin.com/in/iclp-technologies-b40044354",
    youTybe: "https://youtube.com/@iclp_technologies?si=zLBwqpP0k5LAdgNg",
  };

  const phoneNumber = "86810 26181";

  // Load all course names from courses.json and build category map
  useEffect(() => {
    // Build path→categoryPath map from Navbar.json
    const navbarCatMap = {};
    fetch("/data/Navbar.json")
      .then((r) => r.json())
      .then((navData) => {
        for (const cat of navData.skillPrograms?.categories ?? []) {
          for (const course of cat.courses ?? []) {
            // path is like "/courses/sap-courses/sap-fico-training-in-chennai"
            const parts = course.path?.split("/").filter(Boolean);
            if (parts && parts.length >= 3) {
              navbarCatMap[parts[2]] = parts[1]; // coursePath → categoryPath
            }
          }
        }
      })
      .catch(() => {});

    fetch("/data/courses.json")
      .then((r) => r.json())
      .then((data) => {
        const built = [];
        const catMap = {};
        for (const cat of data.categories ?? []) {
          if (!cat.path) continue;
          for (const sub of cat.sub_categories ?? []) {
            if (sub.path) catMap[sub.path] = cat.path;
            if (sub.course_name && sub.path)
              built.push({ name: sub.course_name, path: sub.path, categoryPath: cat.path });
          }
        }
        // merge with static list so nothing is lost
        const staticCourses = [
      { name: "Java", path: "java-training-in-chennai" },
      { name: "C Sharp", path: "c-sharp-training-in-chennai" },
      { name: "Control-M", path: "control-m-training-in-chennai" },
      {   path: "android-development-training-in-chennai", name: "Android Development" },
      { name: "R Programming", path: "r-programming-training-in-chennai" },
      { name: "JavaScript", path: "java-script-training-in-chennai" },
      { name: "Perl Scripting", path: "perl-scripting-training-in-chennai" },
      { name: "TypeScript", path: "type-script-training-in-chennai" },
      { name: "Full Stack Developer", path: "full-stack-developer-training-in-chennai" },
      { name: "Node JS", path: "node-js-training-in-chennai" },
      { name: "Hospital Administration", path: "hospital-administration-training-in-chennai" },
      { name: "Healthcare Analytics", path: "healthcare-analytics-training-in-chennai" },
      { name: "Food Technology", path: "food-technology-training-in-chennai" },
      { name: "React JS", path: "react-js-training-in-chennai" },
      { name: "Angular", path: "angular-developer-training-in-chennai" },
      { name: "WordPress", path: "wordpress-training-in-chennai" },
      { name: "Azure Data Factory", path: "azure-data-factory-training-in-chennai" },
      { name: "HTML", path: "html-developer-training-in-chennai" },
      { name: "CSS", path: "css-training-in-chennai" },
      { name: "BluePrism", path: "blue-prism-training" },
      { name: "MERN Stack", path: "mern-stack-training-in-chennnai" },
      { name: "RPA + Artificial Intelligence", path: "rpa-training-in-chennai" },
      { name: "UiPath", path: "uipath-training-in-chennai" },
      { name: "Apache Spark Advanced", path: "apache-spark-training-in-chennai" },
      { name: "Linux Administrator training", path: "linux-administrator-training-in-chennai" },
      { name: "Palo Alto training", path: "palo-alto-training-in-chennai" },
      { name: "Figma advanced training", path: "figma-advanced-training-in-chennai" },
      { name: "Vmware Vsphere training", path: "vmware-vsphere-training-in-chennai" },
      { name: "JQuery", path: "j-query-developer-training-chennnai" },
      { name: "Full Stack Java", path: "full-stack-java-training-in-chennai" },
      { name: "Python Full Stack", path: "python-full-stack-developer-training-in-chennai" },
      { name: "Groovy and Grails", path: "groovy-and-grails-training-in-chennai" },
      { name: "Workday HCM", path: "workday-hcm--training-in-chennai" },
      { name: "Salesforce", path: "salesforce-training-in-chennai" },
      { name: "Salesforce Developer", path: "salesforce-developer-training-in-chennai" },
      { name: "Azure DevOps", path: "azure-devops-training-in-chennai" },
      {name:"AWS DevOps",path:"aws-devops-training-in-chennai"},
      { name: "Tableau", path: "tableau-certification-training-in-chennai" },
      { name: "Motion Graphics Training", path: "motion-graphics-training-in-chennai" },
      { name: "Penetration Testing", path: "advanced-pentest-certification-training-in-chennai" },
      { name: "Network Security", path: "system-network-security-training-in-chennai" },
      { name: "CEH Preparation", path: "ceh-advanced-training-in-chennai" },
      { name: "Cloud Security", path: "ccsk-foundation-training-in-chennai" },
      { name: "Docker", path: "docker-training-in-chennai" },
      { name: "SOC Analyst", path: "soc-analyst-csa-training-in-chennai" },
      { name: "Git & GitHub", path: "git-github-training-in-chennai" },
      { name: "Terraform", path: "terraform-training-in-chennai" },
      { name: "Dotnet Fullstack", path: "dotnet-fullstack-training-in-chennai" },
      { name: "Kubernetes Training", path: "kubernetes-training-in-chennai" },
      { name: "HR Analytics Training", path: "hr-analytics-training-in-chennai" },
      { name: "Oracle Fusion Financials", path: "oracle-fusion-financials-training-in-chennai" },
      { name: "Kofax Online Training", path: "kofax-totalagility-training" },
      { name: "Video Editing Training", path: "video-editing-training-in-chennai" },
      { name: "Mobile App development", path: "mobile-app-development-training-in-chennai" },
      {name:"RAG Systems",path:"rag-systems-ai-certification-course-training-in-chennai"},
      { name: "Data Steward Training", path: "data-steward-training-in-chennai" },
      { name: "Snowflake Training", path: "snowflake-certification-training-in-chennai" },
      { name: "Databricks", path: "databricks-spark-certification-training-in-chennai" },
      { name: "SAP FICO Consultant", path: "sap-fico-consultant-training-in-chennai" },
      { name: "Hardware Network training", path: "hardware-networking-training-in-chennai" },
      { name: "AutoCAD", path: "autocad-training-in-chennai" },
      { name: "PLC & SCADA", path: "plc-scada-training-in-chennai" },
      {name:"Informatica Data Governance",path: "informatica-data-governance-training-in-chennai",},
      { name: "Cyber Law", path: "cyber-law-training-in-chennai" },
      { name: "Postgresql", path: "postgresql-admin-training-in-chennai" },
      { name: "Medical Coding", path: "medical-coding-cpc-training-in-chennai" },
      {  path: "ibm-maximo-training-in-chennai", name: "IBM Maximo Training" },
      {  path: "salesforce-developer-training-in-chennai", name: "Salesforce Developer Training" },
      { name: "Appian ", path: "appian-training-in-chennai" },
      { name: "ASP .Net", path: "asp-net-course-training-in-chennai" },
      { name: "Basics of Automation Testing", path: "automation-testing-training-in-chennai" },
      { name: "Linux", path: "linux-certification-training-in-chennai" },
      { name: "AI for Automation", path: "ai-for-automation-course-training-in-chennai" },
      { name: "API Testing (Postman Basics)", path: "api-testing-certification-training-in-chennai" },
      { name: "Bootstrap", path: "bootstrap-training-in-chennai" },
      { name: "OOPs", path: "oops-concepts-training-in-chennnai" },
      { name: "DevOps", path: "devops-training-in-chennai" },
      { name: "Workday Integration Training", path: "workday-integration-training-in-chennai", },
      { name: "Workday Payroll Training", path: "workday-payroll-training-in-chennai", },
      {name:"Pega",path: "pega-online-training-in-chennai"},
      {
        name: "Primavera P6", path: "primavera-p6-training-in-chennai",
      },
      { name: "AWS", path: "aws-training-in-chennai" },
      { name: "Cisco UCS", path: "cisco-ucs-training-in-chennai" },
      { name: "Cyber Security", path: "cyber-security-training-in-chennai" },
      { name: "Ethical Hacking", path: "ethical-hacking-training-in-chennai" },
      { name: "CISM", path: "cism-certification-training-in-chennai" },
      { name: "CyberArk", path: "cyber-ark-training-in-chennai" },
      { name: "CISA", path: "certified-information-systems-auditor-cisa-training-in-chennai" },
      { name: "CISM (Manager)", path: "certified-information-security-manager-cism-training-in-chennai" },
      { name: "Blockchain", path: "blockchain-training-in-chennai" },
      { name: "Selenium", path: "selenium-training-in-chennai" },
      { name: "Manual Testing", path: "manual-testing-training-in-chennai" },
      {  name:"LabVIEW",path: "labview-training-in-chennai",},
      { name: "JMeter", path: "jmeter-training-in-chennai" },
      { name: "Workday Studio Training", path: "workday-studio-training-in-chennai" },
      { name: "Software Testing", path: "software-testing-training-in-chennai" },
      { name: "Data Analytics Course", path: "data-analytics-training-in-chennai" },
      { name: "Workday financial training", path: "workday-financial-training-in-chennai" },
      { name: "Collibra", path: "collibra-training-in-chennai" },
      {  path: "oracle-integration-cloud-training-in-chennai",
        name: "Oracle Integration Cloud Training"
      },
      { path: "power-bi-otif-dashboard-training-in-chennai",
        name: "Power BI OTIF Dashboard Training" },
      { name: "Spring boot online training", path: "spring-boot-training-in-chennai" },
      { name: "ETL Testing", path: "etl-testing-training-in-chennai" },
      { name: "LoadRunner", path: "loadrunner-training-in-chennai" },
      { name: "Clinical Research & Pharmacovigilance Certification Course", path: "clinical-research-pharmacovigilance-training-in-chennai" },
      {path:"hospital-administration-training-in-chennai", name:"Hospital Administration Certification Course"},
      { name: "SoapUI", path: "soap-ui-training-in-chennai" },
      { name: "Team center PLM  training", path: "teamcenter-plm-training-in-chennai" },
      { name: "Business analyst  training", path: "business-analyst-training-in-chennai" },
      { name: "SAP treasury and risk management", path: "sap-treasury-and-risk-management-online-training" },
      { name: "Machine Learning", path: "machine-learning-training-in-chennai" },
      { name: "Data Science with Python", path: "data-science-training-in-chennai" },
      { name: "ML using R", path: "machine-learning-using-r-training-in-chennai" },
      { name: "AI & ML", path: "ai-ml-training-in-chennai" },
      { name: "Data Science", path: "data-science-course-online" },
      { name: "Tally Accounting", path: "tally-accounting-training-in-chennai" },
      { name: "Tally GST Training", path: "tally-gst-training-in-chennai" },
      { name: "Internet and Network Basics", path: "internet-and-network-basics-training-in-chennai" },
      { name: "Computer Fundamentals", path: "computer-fundamentals-training-in-chennai" },
      { name: "Basic Web designing", path: "basic-web-designing-training-in-chennai" },
      { name: "Programming Basics", path: "programming-basics-training-in-chennai" },
      { name: "Basic Graphic Designing", path: "basic-graphic-designing-training-in-chennai" },
      { name: "Digital Literacy", path: "digital-literacy-training-in-chennai" },
      { name: "AI", path: "artificial-intelligence-training-in-chennai" },
      { name: "ChatGPT", path: "chatgpt-online-course" },
      { name: "MSQL", path: "msql-training-in-chennai" },
      { name: "Soft Tech Skills", path: "soft-tech-skills-training-in-chennai", },
      { name: "SQL with PHP", path: "sql-with-php-training-in-chennai" },
      { name: "AR VR", path: "ar-vr-technologies-training-in-chennai", },
      { name: "PL/SQL", path: "pl-and-sql-training-in-chennai" },
      { name: "Excel", path: "microsoft-excel-training-in-chennai" },
      { name: "Microsoft Dynamics", path: "microsoft-dynamics-training-in-chennai" },
      { name: "Microsoft Azure", path: "microsoft-azure-training-in-chennai" },
      { name: "Excel Macros and VBA", path: "excel-macros-and-vba-training-in-chennai" },
      { name: "Digital Marketing", path: "digital-marketing-training-in-chennai" },
      {path:"certified-scrum-master-training-in-chennai", name:"Certified Scrum Master"},
      { name: "UI/UX", path: "ui-ux-designer-training-in-chennai" },
      { name: "CCNA", path: "ccna-training-in-chennai" },
      { name: "CCNP", path: "ccnp-training-in-chennai" },
      { name: "Fortinet", path: "fortinet-training-in-chennai" },
      { name: "SAS", path: "sas-training-in-chennai" },
      { name: "Informatica PowerCenter", path: "informatica-power-center-training-in-chennai" },
      { name: "Informatica ILM", path: "informatica-ilm-training-in-chennai" },
      { name: "Unix Shell Scripting", path: "unix-shell-scripting-training-in-chennai" },
      { name: "C and C++", path: "c-cpp-programming-training-in-chennai" },
      { name: "Corel Draw", path: "coreldraw-masterclass-training-in-chennai" },
      { name: "Alation Data Catalog", path: "alation-data-catalog-training-in-chennai", },
      { "name": "IBM DataPower", "path": "ibm-data-power-training-in-chennai" },
      { "name": "IBM Cognos", "path": "ibm-cognos-training-in-chennai" },
      { "name": "IBM Watson Analytics", "path": "ibm-watson-analytics-training-in-chennai" },
      { "name": "IBM SPSS", "path": "ibm-spss-training-in-chennai" },
      { "name": "IBM Cloud Essentials", "path": "ibm-cloud-essentials-training-in-chennai" },
      { "name": "IBM Bluemix", "path": "ibm-bluemix-training-in-chennai" },
      { "name": "IBM QRadar SIEM", "path": "ibm-qradar-siem-training-in-chennai" },
      { "name": "IBM BPM Administration", "path": "ibm-bpm-administration-training-in-chennai" },
      { "name": "IBM Sterling", "path": "ibm-sterling-training-in-chennai" },
      { "name": "WebSphere Application Server", "path": "websphere-application-server-training-in-chennai" },
      { "name": "IBM AIX", "path": "ibm-aix-training-in-chennai" },
      { "name": "IBM Mainframe Developer", "path": "ibm-mainframe-developer-training-in-chennai" },
      { "name": "IBM Tivoli", "path": "ibm-tivoli-training-in-chennai" },

      // SAP Courses
      { name: "SAP FICO", type: "sap", path: "sap-fico-training-in-chennai" },
      { name: "SAP MM", type: "sap", path: "sap-mm-training-in-chennai" },
      { name: "SAP SD", type: "sap", path: "sap-sd-training-in-chennai" },
      {name:"SAP WM",type:"sap",path:"sap-wm-training-in-chennai"},
      { name: "SAP Banking", type: "sap", path: "sap-banking-training-in-chennai", },
      {name:"SAP Integration Suite (CPI)",type:"sap",path:"sap-integration-suite-cpi-training-in-chennai"},
      {name:"SAP EWM",type:"sap", path: "sap-ewm-training-in-chennai"},
      { name: "SAP PP", type: "sap", path: "sap-pp-training-in-chennai" },
      { name: "SAP ABAP", type: "sap", path: "sap-abap-training-in-chennai" },
      { path: "sap-ps-training-in-chennai", type: "sap", name: "SAP PS" },
      {  path: "sap-fica-training-in-chennai", type: "sap", name: "SAP FICA" },
      { name: "SAP ui5 fiori", type: "sap", path: "sap-ui5-fiori-training-in-chennai", },
      { name: "SAP BPC", type: "sap", path: "sap-bpc-training-in-chennai" },
      { name: "SAP SCM", type: "sap", path: "sap-scm-training-in-chennai" },
      { name: "SAP Transportation Management", type: "sap", path: "sap-tm-training-in-chennai" },
      { name: "SAP SuccessFactors Online Training", type: "sap", path: "sap-successfactors-training-in-chennai" },
      { name: "SAP Quality Management (QM)", type: "sap", path: "sap-qm-training-in-chennai" },
      { name: "SAP Ariba Training", type: "sap", path: "sap-ariba-training-in-chennai" },
      { name: "SAP Master Data Governance (MDG) on S/4HANA", type: "sap", path: "sap-mdg-training-in-chennai" },
      { name: "Adobe Photoshop Certification", type: "sap" },
      { name: "SAP BASIS Administration", type: "sap", path: "sap-basis-administration-training-in-chennai" },
      { name: "SAP Sales Cloud (C4C) Training", type: "sap", path: "sap-sales-cloud-(c4c)-training-in-chennai" },
      { name: "SAP FSCM (Retail) Training", type: "sap", path: "sap-fscm" },
      { name: "SAP Business Technology Platform (BTP)", type: "sap", path: "sap-btp-training-in-chennai" },
      { name: "SAP CRM Training", type: "sap", path: "sap-crm-training-in-chennai" },
      { name: "SAP SRM Training", type: "sap", path: "sap-srm-training-in-chennai" },
      { name: "SAP APO Online Training", type: "sap", path: "sap-apo-training-in-chennai" },
      { name: "SAP IBP Online Training", type: "sap", path: "sap-ibp-training-in-chennai" },
      { name: "SAP BI/BW Training", type: "sap", path: "sap-bibw-training-in-chennai" },
      { name: "SAP Analytics Cloud Online Training", type: "sap", path: "sap-analytic-cloud-training-in-chennai" },
      { name: "SAP Security GRC Training", type: "sap", path: "sap-security-grc-training-in-chennai" },
      { name: "SAP IS Retail Training", type: "sap", path: "sap-is-retail-training-in-chennai" },
      { name: "SAP IS Utilities Training", type: "sap", path: "sap-is-utilities-training-in-chennai" },
      { name: "SAP PLM Training", type: "sap", path: "sap-plm-training-in-chennai" },
      { name: "SAP LE Certification Training", type: "sap", path: "sap-le-training-in-chennai" },
      { name: "SAP Healthcare Training", type: "sap", path: "sap-healthcare-training-chennai" },
      { name: "SAP IS Banking Training", type: "sap", path: "sap-is-banking-training-in-chennai" },
      { name: "SAP BPC Online Training", type: "sap", path: "sap-is-bpc-training-in-chennai" },
      { name: "SAP PM Course", type: "sap", path: "sap-pm-training-in-chennai" },
      { name: "SAP ESS Online", type: "sap", path: "sap-ess-training-in-chennai" },
      { name: "SAP Hybris E-Commerce Online Training", type: "sap", path: "sap-hybris-ecommerce-training-in-chennai" },
      { name: "SAP BO", type: "sap", path: "sap-bo-training-in-chennai" },
      { name: "SAP BOBJ Training", type: "sap", path: "sap-bobj-training-in-chennai" },
      { name: "SAP Fieldglass", type: "sap", path: "sap-fieldglass-training-in-chennai" },
      { name: "SAP Data Archiving", type: "sap", path: "sap-data-archiving-training-in-chennai" },
      { name: "SAP Solution Manager", type: "sap", path: "sap-solution-manager-training-in-chennai" },
      { name: "SAP Aerospace & Defense", type: "sap", path: "sap-aerospace-and-defense-training-in-chennai" },
      { name: " SAP IS Insurance Training", type: "sap", path: "sap-is-insurance-training-in-chennai" },

      // Oracle Courses
      { name: "Oracle Financials", type: "oracle", path: "oracle-financials-training-in-chennai" },
      { name: "Oracle SCM", type: "oracle", path: "oracle-scm-training-in-chennai" },
      { name: "Oracle HCM", type: "oracle", path: "oracle-hcm-training-in-chennai" },
      { name: "Oracle CPQ Training", type: "oracle", path: "oracle-cpq-training-in-chennai" },
      { name: "Oracle Procure to Pay Training", type: "oracle", path: "oracle-procure-to-pay-training-in-chennai" },
      { name: "Oracle Hyperion EPM Training", type: "oracle", path: "oracle-hyperion-epm-training-in-chennai" },
      { name: "Oracle GRC Controls Suite Fundamentals", type: "oracle", path: "oracle-grc-control-suit-fundamentals-vers-training-in-chennai" },
      { name: "Oracle Developer Course", type: "oracle", path: "oracle-developer-training-in-chennai" },
      { name: "Oracle SQL & PL/SQL", type: "oracle", path: "oracle-sql-plsql-training-in-chennai" },
      { name: "Oracle Forms and Reports", type: "oracle", path: "oracle-forms-and-reports" },
      { name: "Oracle Application Framework (OAF)", type: "oracle", path: "oracle-application-framework-training-in-chennai" },
      { name: "Oracle Cloud Infrastructure (OCI)", type: "oracle", path: "oracle-cloud-infrastructure-training-in-chennai" },
      { name: "WebLogic Server", type: "oracle", path: "oracle-weblogic-server-training-in-chennai" },
      { name: "Oracle PeopleSoft HRMS/HCM", type: "oracle", path: "oracle-peoplesoft-training-in-chennai" },
      { name: "Oracle Customer Care & Billing (CC&B)", type: "oracle", path: "oracle-customercare-training-in-chennai" },
      { name: "R12.x Oracle Inventory Management", type: "oracle", path: "oracle-r12-training-in-chennai" },
      { name: "R12.2 Oracle E-Business Tax", type: "oracle", path: "oracle-tax-reporting-training-in-chennai" },
      { name: "R12.x Oracle Order Management", type: "oracle", path: "oracle-order-management-training-in-chennai" }
    ];
        // merge: prefer JSON-sourced entries, fall back to static for any not in JSON
        const merged = [...built];
        for (const sc of staticCourses) {
          if (sc.path && !merged.find((c) => c.path === sc.path)) {
            merged.push({ ...sc, categoryPath: catMap[sc.path] || navbarCatMap[sc.path] || null });
          }
        }
        // also patch categoryPath for built entries using navbarCatMap
        for (const entry of merged) {
          if (!entry.categoryPath && entry.path) {
            entry.categoryPath = navbarCatMap[entry.path] || null;
          }
        }
        setAllCourses(merged);
      })
      .catch(() => {
        // fallback: use static list only
        setAllCourses(staticCourses.map((c) => ({ ...c, categoryPath: navbarCatMap[c.path] || null })));
      });
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

  const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  };

  const calculateMatchScore = (courseName, searchQuery) => {
    const normalizedCourse = normalizeText(courseName);
    const normalizedQuery = normalizeText(searchQuery);
    const courseWords = normalizedCourse.split(' ');
    const queryWords = normalizedQuery.split(' ');

    if (normalizedCourse === normalizedQuery) return 1000;
    if (normalizedCourse.startsWith(normalizedQuery)) return 900;
    if (courseWords.some(word => word === normalizedQuery)) return 800;
    if (courseWords.some(word => word.startsWith(normalizedQuery))) return 700;
    
    const matchingWords = queryWords.filter(qWord => 
      courseWords.some(cWord => cWord.includes(qWord))
    ).length;
    if (matchingWords > 0) return 600 + (matchingWords * 50);
    
    if (normalizedCourse.includes(normalizedQuery)) return 500;
    
    return 0;
  };

  const findBestMatch = (input) => {
    const normalizedInput = normalizeText(input);
    const scoredCourses = allCourses
      .map(course => ({
        course,
        score: calculateMatchScore(course.name, normalizedInput)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    return scoredCourses.length > 0 ? scoredCourses[0].course : null;
  };

  const navigateToCourse = (course) => {
    const slug = course.path || encodeURIComponent(course.name);
    const categoryPath = course.categoryPath;
    if (!categoryPath) {
      alert("Course page not found. Please try another search term.");
      return;
    }
    const url = `/courses/${categoryPath}/${slug}`;
    setSearchTerm("");
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    window.open(url, "_blank");
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
    setActiveSuggestion(-1);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (value.trim().length > 0) {
      debounceTimerRef.current = setTimeout(() => {
        const normalizedInput = normalizeText(value);
        const scoredResults = allCourses
          .map(course => ({
            course,
            score: calculateMatchScore(course.name, normalizedInput)
          }))
          .filter(item => item.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 10)
          .map(item => item.course);

        setSuggestions(scoredResults);
        setShowSuggestions(scoredResults.length > 0);
      }, 150);
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
          <p className="headingText">ICLP</p>
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
        <div className="button-container" style={showSuggestions ? { pointerEvents: 'none' } : {}}>
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