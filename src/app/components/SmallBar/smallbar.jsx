"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaBars, FaChevronDown } from "react-icons/fa";

const MobileAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#014a9f]/10 last:border-0">
      <button
        onPointerDown={(e) => { e.preventDefault(); setOpen(!open); }}
        style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-[#014a9f] bg-[#014a9f]/5 hover:bg-[#014a9f]/10 transition-all"
      >
        {title}
        <FaChevronDown className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-2 py-2 bg-white" style={{ touchAction: "pan-y" }}>
          {children}
        </div>
      )}
    </div>
  );
};

const SmallBar = () => {
  const [navData, setNavData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/Navbar.json")
      .then((r) => r.json())
      .then((data) => {
        setNavData(data.skillPrograms);
        if (data.skillPrograms?.categories?.[0]) {
          setSelectedCategory(data.skillPrograms.categories[0]);
        }
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsDropdownOpen(false);
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target))
        setIsMoreDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-[#d6efff] relative z-[900] rounded-lg shadow-[inset_0_1px_0_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-[#014a9f] hover:bg-[#014a9f]/10 focus:outline-none transition-all active:scale-95"
          >
            <FaBars className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center space-x-3 flex-1">

            {/* Home */}
            <li>
              <Link href="/" className="text-2xl text-[#014a9f] hover:text-[#013d7f] transition-all hover:scale-110 block p-2">
                <FaHome />
              </Link>
            </li>

            {/* Courses Mega Menu */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Courses
                <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && navData && selectedCategory && (
                <div className="absolute left-0 mt-2 w-screen max-w-3xl bg-white rounded-lg shadow-2xl border-2 border-[#014a9f]/20 z-50">
                  <div className="flex" style={{ maxHeight: "420px" }}>

                    {/* Left — categories */}
                    <div className="w-2/5 bg-[#014a9f]/5 border-r-2 border-[#014a9f]/10 rounded-l-lg flex flex-col">
                      <div className="overflow-y-auto p-3 flex-1" style={{ maxHeight: "380px" }}>
                        {navData.categories.map((category, i) => (
                          <Link
                            key={i}
                            href={category.cat_path ? `/courses/${category.cat_path}` : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsDropdownOpen(false)}
                            onMouseEnter={() => setSelectedCategory(category)}
                            className={`w-full text-left px-2.5 py-2 text-[12px] font-medium rounded transition-all mb-1 flex items-center justify-between group ${
                              selectedCategory?.title === category.title
                                ? "bg-[#014a9f] text-white shadow-md"
                                : "text-[#014a9f] hover:bg-[#014a9f]/10 hover:pl-3.5"
                            }`}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right — courses */}
                    <div className="w-3/5 flex flex-col">
                      <div className="p-4 border-b-2 border-[#014a9f]/10">
                        <h4 className="text-base font-bold text-[#014a9f]">{selectedCategory.title}</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">{selectedCategory.description}</p>
                      </div>
                      <div className="overflow-y-auto p-4" style={{ maxHeight: "340px" }}>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedCategory.courses.map((course, j) => (
                            <Link
                              key={j}
                              href={course.path || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsDropdownOpen(false)}
                              className="block px-3 py-2 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-4 rounded border-2 border-[#014a9f]/10 hover:border-[#014a9f]/30 transition-all"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Static links */}
            <li>
              <Link href="/about" target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/corporate-training" target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                Corporate Training
              </Link>
            </li>
            <li>
              <Link href="/contact" target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95 block">
                Contact Us
              </Link>
            </li>

            {/* More dropdown */}
            <li className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-semibold text-[#014a9f] hover:bg-[#014a9f] hover:text-white rounded-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                More
                <FaChevronDown className={`text-xs transition-transform ${isMoreDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border-2 border-[#014a9f]/20 z-50">
                  {[
                    { href: "/freelance-trainee", label: "Freelancers" },
                    { href: "/interview-questions", label: "Interview Questions" },
                    { href: "/blog", label: "Blog" },
                    { href: "/reviews", label: "Reviews" },
                    { href: "/testimonials", label: "Testimonials" },
                    { href: "/tutorial", label: "Tutorial" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-[12px] font-medium text-[#014a9f] hover:bg-[#014a9f] hover:text-white hover:pl-5 transition-all first:rounded-t-lg last:rounded-b-lg"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <ul className="space-y-1">

              {/* Mobile Courses */}
              <li>
                <button
                  onPointerDown={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1"
                >
                  Courses
                  <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && navData && (
                  <div style={{ touchAction: "pan-y" }}>
                    {navData.categories.map((category, i) => (
                      <MobileAccordion key={i} title={category.title}>
                        {category.courses.map((course, j) => (
                          <div key={j} className="py-1 px-2">
                            <Link
                              href={course.path || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="inline-block text-[12px] font-medium text-[#014a9f] border border-[#014a9f]/20 rounded px-2 py-1 hover:bg-[#014a9f] hover:text-white transition-all"
                            >
                              {course.name}
                            </Link>
                          </div>
                        ))}
                      </MobileAccordion>
                    ))}
                  </div>
                )}
              </li>

              {[
                { href: "/about", label: "About Us" },
                { href: "/corporate-training", label: "Corporate Training" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <div className="px-4 py-2">
                    <span
                      onPointerDown={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.open(href, "_blank"); }}
                      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", cursor: "pointer" }}
                      className="inline-block text-[15px] font-semibold text-[#014a9f] border border-[#014a9f]/20 rounded px-3 py-1.5 hover:bg-[#014a9f]/10 transition-all"
                    >
                      {label}
                    </span>
                  </div>
                </li>
              ))}

              {/* Mobile More */}
              <li>
                <button
                  onPointerDown={(e) => { e.preventDefault(); setIsMoreDropdownOpen(!isMoreDropdownOpen); }}
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-[#014a9f] hover:bg-[#014a9f]/10 rounded-lg my-1"
                >
                  More
                  <FaChevronDown className={`text-xs transition-transform ${isMoreDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isMoreDropdownOpen && (
                  <div className="pl-4 space-y-2 mt-2 py-2" style={{ touchAction: "pan-y" }}>
                    {[
                      { href: "/freelance-trainee", label: "Freelancers" },
                      { href: "/interview-questions", label: "Interview Questions" },
                      { href: "/blog", label: "Blog" },
                      { href: "/reviews", label: "Reviews" },
                      { href: "/testimonials", label: "Testimonials" },
                      { href: "/tutorial", label: "Tutorial" },
                    ].map(({ href, label }) => (
                      <div key={href} className="px-2">
                        <span
                          onPointerDown={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setIsMoreDropdownOpen(false); window.open(href, "_blank"); }}
                          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", cursor: "pointer" }}
                          className="inline-block text-[13px] font-medium text-[#014a9f] border border-[#014a9f]/20 rounded px-3 py-1.5 hover:bg-[#014a9f] hover:text-white transition-all"
                        >
                          {label}
                        </span>
                      </div>
                    ))}
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
