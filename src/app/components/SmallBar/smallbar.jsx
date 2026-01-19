"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaBars, FaChevronDown } from "react-icons/fa";

const SmallBar = () => {
  const [skillPrograms, setSkillPrograms] = useState(null);
  const [streamWiseCourses, setStreamWiseCourses] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const moreDropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/Navbar.json")
      .then((response) => response.json())
      .then((data) => {
        setSkillPrograms(data.skillPrograms);
        if (data.skillPrograms?.categories?.[0]?.sections?.[0]) {
          setSelectedSection({
            categoryIndex: 0,
            sectionIndex: 0,
            section: data.skillPrograms.categories[0].sections[0]
          });
        }
      })
      .catch((error) => console.error("Error loading skill programs:", error));
  }, []);

  useEffect(() => {
    fetch("/data/stream.json")
      .then((response) => response.json())
      .then((data) => {
        setStreamWiseCourses(data.streamWiseCourses);
        if (data.streamWiseCourses?.[0]) {
          setSelectedStream(data.streamWiseCourses[0]);
        }
      })
      .catch((error) => console.error("Error loading courses:", error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setIsDropdown2Open(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubcategoryClick = (path) => {
    router.push(path);
    setIsDropdownOpen(false);
    setIsDropdown2Open(false);
    setIsMobileMenuOpen(false);
  };
    const handleSteamsClick = (path) => {
    router.push(`/course/${path}`);
    setIsDropdownOpen(false);
    setIsDropdown2Open(false);
    setIsMobileMenuOpen(false);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<nav className="w-full bg-[#d6efff] relative z-[900] rounded-lg
  shadow-[inset_0_1px_0_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-[#014a9f] hover:bg-[#014a9f]/10 focus:outline-none transition-all active:scale-95"
          >
            <FaBars className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center space-x-3 flex-1">
            {/* Home icon */}
            <li>
              <Link href="/" className="text-2xl text-[#014a9f] hover:text-[#013d7f] transition-all hover:scale-110 block p-2">
                <FaHome />
              </Link>
            </li>

            {/* Skill Programs Mega Menu */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Skill Programs
                <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && skillPrograms && selectedSection && (
                <div className="absolute left-0 mt-2 w-screen max-w-3xl bg-white rounded-lg shadow-2xl border-2 border-[#014a9f]/20 z-50">
                  <div className="flex" style={{ maxHeight: '400px' }}>
                    {/* Left Side - Categories/Sections */}
                    <div className="w-2/5 bg-[#014a9f]/5 border-r-2 border-[#014a9f]/10 rounded-l-lg flex flex-col">
                      <div className="overflow-y-auto p-3 flex-1 scrollbar-thin scrollbar-thumb-[#014a9f]/30 scrollbar-track-transparent" style={{ maxHeight: '340px' }}>
                        {skillPrograms.categories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="mb-4 last:mb-0">
                            <h3 className="text-[15px] font-bold text-[#014a9f] uppercase tracking-wide mb-2 px-2">
                              {category.title}
                            </h3>
                            <div className="space-y-1">
                              {category.sections.map((section, sectionIndex) => (
                                <button
                                  key={sectionIndex}
                                  onClick={() => setSelectedSection({
                                    categoryIndex,
                                    sectionIndex,
                                    section
                                  })}
                                  className={`w-full text-left px-2.5 py-2 text-[12px] font-medium rounded transition-all ${
                                    selectedSection.categoryIndex === categoryIndex && 
                                    selectedSection.sectionIndex === sectionIndex
                                      ? 'bg-[#014a9f] text-white shadow-md'
                                      : 'text-[#014a9f] hover:bg-[#014a9f]/10 hover:pl-3.5'
                                  }`}
                                >
                                  {section.title}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => handleSubcategoryClick("/skill-programs")}
                        className="m-3 mt-0 py-2 text-sm font-medium text-[#014a9f] bg-[#014a9f]/10 hover:bg-[#014a9f] hover:text-white rounded-lg transition-all border-2 border-[#014a9f]/20"
                      >
                        View All Programs →
                      </button>
                    </div>

                    {/* Right Side - Courses */}
                    <div className="w-3/5 flex flex-col">
                      <div className="p-4 border-b-2 border-[#014a9f]/10">
                        <h4 className="text-base font-bold text-[#014a9f]">
                          {selectedSection.section.title}
                        </h4>
                      </div>

                      <div className="overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-[#014a9f]/30 scrollbar-track-transparent" style={{ maxHeight: '340px' }}>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedSection.section.courses.map((course, courseIndex) => (
                            <button
                              key={courseIndex}
                              onClick={() => handleSubcategoryClick(course.path)}
                              className="text-left px-3 py-2 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-4 rounded border-2 border-[#014a9f]/10 hover:border-[#014a9f]/30 transition-all"
                            >
                              {course.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Degree Programs Mega Menu */}
            <li className="relative" ref={dropdownRef2}>
              <button
                onClick={() => setIsDropdown2Open(!isDropdown2Open)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Degree Programs
                <FaChevronDown className={`text-xs transition-transform ${isDropdown2Open ? 'rotate-180' : ''}`} />
              </button>

              {isDropdown2Open && streamWiseCourses.length > 0 && selectedStream && (
                <div className="absolute left-0 mt-2 w-screen max-w-3xl bg-white rounded-lg shadow-2xl border-2 border-[#014a9f]/20 z-50">
                  <div className="flex" style={{ maxHeight: '400px' }}>
                    {/* Left Side - Streams */}
                    <div className="w-2/5 bg-[#014a9f]/5 border-r-2 border-[#014a9f]/10 rounded-l-lg flex flex-col">
                      <div className="overflow-y-auto p-3 flex-1 scrollbar-thin scrollbar-thumb-[#014a9f]/30 scrollbar-track-transparent" style={{ maxHeight: '340px' }}>
                        <h3 className="text-[10px] font-bold text-[#014a9f] uppercase tracking-wide mb-2 px-2">
                          Streams
                        </h3>
                        <div className="space-y-1">
                          {streamWiseCourses.map((stream, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedStream(stream)}
                              className={`w-full text-left px-2.5 py-2 text-[12px] font-medium rounded transition-all ${
                                selectedStream.streamName === stream.streamName
                                  ? 'bg-[#014a9f] text-white shadow-md'
                                  : 'text-[#014a9f] hover:bg-[#014a9f]/10 hover:pl-3.5'
                              }`}
                            >
                              {stream.streamName}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleSubcategoryClick("/degree-programs")}
                        className="m-3 mt-0 py-2 text-sm font-medium text-[#014a9f] bg-[#014a9f]/10 hover:bg-[#014a9f] hover:text-white rounded-lg transition-all border-2 border-[#014a9f]/20"
                      >
                        Read more →
                      </button>
                    </div>

                    {/* Right Side - Courses */}
                    <div className="w-3/5 flex flex-col">
                      <div className="p-4 border-b-2 border-[#014a9f]/10">
                        <h4 className="text-base font-bold text-[#014a9f]">
                          {selectedStream.streamName}
                        </h4>
                      </div>

                      <div className="overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-[#014a9f]/30 scrollbar-track-transparent" style={{ maxHeight: '340px' }}>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedStream.courses.map((courseItem, i) => (
                            <button
                              key={i}
                              onClick={() => handleSteamsClick(courseItem.path)}
                              className="text-left px-3 py-2 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-4 rounded border-2 border-[#014a9f]/10 hover:border-[#014a9f]/30 transition-all"
                            >
                              {courseItem.course}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link href="/about" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/corporate-training" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                Corporate Training
              </Link>
            </li>

            <li>
              <Link href="/contact" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                Services
              </Link>
            </li>

            {/* More Dropdown */}
            <li className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                More
                <FaChevronDown className={`text-xs transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border-2 border-[#014a9f]/20 z-50">
                  <Link href="/freelance-trainee" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all rounded-t-lg">
                    Freelancers
                  </Link>
                  <Link href="/interview-questions" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all">
                    Interview Questions
                  </Link>
                  <Link href="/blog" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all">
                    Blog
                  </Link>
                  <Link href="/reviews" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all">
                    Reviews
                  </Link>
                  <Link href="/tutorial" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all rounded-b-lg">
                    Tutorial
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <ul className="space-y-1">
              {/* Mobile Skill Programs */}
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1"
                >
                  Skill Programs
                  <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && skillPrograms && (
                  <div className="pl-4 space-y-1 mt-2 max-h-96 overflow-y-auto">
                    {skillPrograms.categories.map((category, index) => (
                      <div key={index} className="border-l-2 border-[#014a9f]/20 pl-4 py-2 bg-[#014a9f]/5 rounded-r my-2.5 mx-2">
                        <div className="text-xs font-bold text-[#014a9f] uppercase mb-2">
                          {category.title}
                        </div>
                        {category.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-3">
                            <div className="text-[10px] font-bold text-[#014a9f]/80 uppercase mb-1.5">
                              {section.title}
                            </div>
                            {section.courses.map((course, courseIndex) => (
                              <button
                                key={courseIndex}
                                onClick={() => handleSubcategoryClick(course.path)}
                                onTouchEnd={() => handleSubcategoryClick(course.path)}
                                style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                                className="block w-full text-left px-3 py-2 text-[12px] font-medium text-[#014a9f] rounded transition-all my-1 hover:bg-[#014a9f] hover:text-white"
                              >
                                {course.name}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Degree Programs */}
              <li>
                <button
                  onClick={() => setIsDropdown2Open(!isDropdown2Open)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1"
                >
                  Degree Programs
                  <FaChevronDown className={`text-xs transition-transform ${isDropdown2Open ? 'rotate-180' : ''}`} />
                </button>

                {isDropdown2Open && streamWiseCourses.length > 0 && (
                  <div className="pl-4 space-y-1 mt-2 max-h-96 overflow-y-auto">
                    {streamWiseCourses.map((stream, index) => (
                      <div key={index} className="border-l-2 border-[#014a9f]/20 pl-4 py-2 bg-[#014a9f]/5 rounded-r my-2.5 mx-2">
                        <div className="text-xs font-bold text-[#014a9f] uppercase mb-2">
                          {stream.streamName}
                        </div>
                        {stream.courses.map((courseItem, i) => (
                          <button
                            key={i}
                            onClick={() => handleSteamsClick(courseItem.path)}
                            className="block w-full text-left px-3 py-2 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-4 rounded transition-all my-1"
                          >
                            {courseItem.course}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link href="/about" className="block px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/corporate-training" className="block px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1">
                  Corporate Training
                </Link>
              </li>

              <li>
                <Link href="/contact" className="block px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/" className="block px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1">
                  Services
                </Link>
              </li>

              {/* Mobile More Dropdown */}
              <li>
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1"
                >
                  More
                  <FaChevronDown className={`text-xs transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link href="/freelance-trainee" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-5 rounded transition-all">
                      Freelancers
                    </Link>
                    <Link href="/interview-questions" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-5 rounded transition-all">
                      Interview Questions
                    </Link>
                    <Link href="/blog" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-5 rounded transition-all">
                      Blog
                    </Link>
                    <Link href="/reviews" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-5 rounded transition-all">
                      Reviews
                    </Link>
                    <Link href="/tutorial" className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:text-white hover:bg-[#014a9f] hover:pl-5 rounded transition-all">
                      Tutorial
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SmallBar;
