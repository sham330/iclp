"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaBars, FaChevronDown } from "react-icons/fa";
import "./smallbar.css";

const SmallBar = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error loading courses:", error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubcategoryClick = (path) => {
    router.push(`/course/${path}`);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="smallbar">
      <div className="nav-container">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>

        <Link href="/" className="home-icon-lg">
          <FaHome />
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="dropdown" ref={dropdownRef}>
            <span
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              All Courses <FaChevronDown className="dropdown-icon" />
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {categories.map((category, index) => (
                  <li key={index} className="dropdown-submenu">
                    <span className="submenu-title">
                      {category.category_name} ▸
                    </span>
                    <ul className="sub-menu">
                      {category.sub_categories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <button
                            className="subcategory-button"
                            onClick={() =>
                              handleSubcategoryClick(subcategory.path)
                            }
                          >
                            {subcategory.course_name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Tutorial as the second item in nav bar */}
          <li>
            <Link href="/tutorial">Tutorial</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>

          {/* More Dropdown with Certifications inside */}
          <li className="dropdown" ref={moreDropdownRef}>
            <span
              className="dropdown-toggle"
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
            >
              More <FaChevronDown className="dropdown-icon" />
            </span>
            {isMoreDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="/freelance-trainee" className="subcategory-button">
                    Freelancers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/interview-questions"
                    className="subcategory-button"
                  >
                    Interview Questions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="subcategory-button">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="subcategory-button">
                    Reviews
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SmallBar;