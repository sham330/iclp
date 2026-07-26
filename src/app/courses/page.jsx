"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineRobot,
  AiOutlineDatabase,
  AiOutlineCloud,
  AiOutlineBarChart,
} from "react-icons/ai";
import { MdSecurity, MdStorage, MdOutlineDesignServices, MdOutlineCampaign, MdOutlineAdminPanelSettings, MdOutlineNetworkCheck } from "react-icons/md";
import { FaJava, FaSalesforce, FaMicrosoft, FaLayerGroup } from "react-icons/fa";
import { SiOracle, SiSap } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";
import "./topCategories.css";

// Icon mapping for each category
const iconMapping = {
  Oracle: <SiOracle />,
  "SAP Courses": <SiSap />,
  Programming: <AiOutlineCode />,
  "Full Stack Development": <FaLayerGroup />,
  "Web Development": <AiOutlineCode />,
  "Cloud Computing & DevOps": <AiOutlineCloud />,
  "Cloud & DevOps": <AiOutlineCloud />,
  "Cybersecurity & Ethical Hacking": <MdSecurity />,
  "Software Testing & Quality Assurance": <BiTestTube />,
  "Data Science & Artificial Intelligence": <AiOutlineRobot />,
  "Database Management System": <AiOutlineDatabase />,
  Microsoft: <FaMicrosoft />,
  "Digital Marketing & Business Tools": <MdOutlineCampaign />,
  "UI and UX": <MdOutlineDesignServices />,
  "CRM & Enterprise Solutions": <FaSalesforce />,
  Networking: <MdOutlineNetworkCheck />,
  "Data Analytics": <AiOutlineBarChart />,
  "Data Integration": <MdStorage />,
  "System Administration": <MdOutlineAdminPanelSettings />,
  IBM: <MdStorage />,
  "Corel Draw": <MdOutlineDesignServices />,
};

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => {
        const extractedCategories = data.categories.map((category) => ({
          name: category.category_name,
          icon: iconMapping[category.category_name] || <AiOutlineCode />,
          path:category.path
        }));
        setCategories(extractedCategories);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const handleSeeAllClick = () => {
    router.push(`/courses`);
  };

// ✅ assign the filter result to a variable first
const filteredCategories = categories.filter(category =>
  (category?.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
  (category?.course_name?.toLowerCase().includes(searchTerm.toLowerCase()))
);

const isCoursesPage = pathname === "/courses";

// ✅ now filteredCategories is defined and safe to use
const displayedCategories = isCoursesPage
  ? filteredCategories
  : filteredCategories.slice(0, 8);

  return (
    <div id="top-categories" className="top-categories-container">
      <div className="inner-container">
        {!isCoursesPage && (
          <>
            <h1 className="section-title">
              All <span className="highlight">Skills</span> in One
            </h1>
            <h3 className="section-subtitle">
              <span className="highlight">From Basic to Pro</span>, ICLP makes
              your path smooth
            </h3>
            <hr className="divider" />
          </>
        )}

        {/* 🔍 Search Bar (only on /courses page) */}
        {isCoursesPage && (
          <input
            type="text"
            placeholder="Search for a category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        )}

        <motion.div
          className="categories-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category, index) => (
              <motion.a
                key={index}
                href={`/courses/${category.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="category-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="category-icon">{category.icon}</div>
                {category.name}
                <p className="category-subtext">Click to explore</p>
              </motion.a>
            ))
          ) : (
            <p className="no-results">No matching categories found.</p>
          )}
        </motion.div>

        {/* "See All" Button (only on home page) */}
        {!isCoursesPage && (
          <button className="see-all-button" onClick={handleSeeAllClick}>
            See All
          </button>
        )}
      </div>
    </div>
  );
};

export default TopCategories;
