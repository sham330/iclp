"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaBullseye,
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaTimes,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBook,
  FaAward,
  FaShieldAlt,
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaInfinity,
  FaUserTie,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";
import "./companyScreen.css";
import ModalBooking from "../components/ModalBooking/ModalBooking";

const CompanyScreen = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Who We Are",
      icon: <FaHandshake />,
      content: (
        <>
          <p>
            We're a premier tech education provider bridging the gap between
            learning and career success.
          </p>
          <ul>
            <li>
              <FaUsers /> Industry-experienced instructors
            </li>
            <li>
              <FaBook /> Practical, project-based curriculum
            </li>
            <li>
              <FaShieldAlt /> Proven track record since 2015
            </li>
          </ul>
        </>
      ),
      color: "#4f46e5",
    },
    {
      title: "Our Vision",
      icon: <FaGlobe />,
      content: (
        <>
          <p>
            To create a world where quality tech education is accessible to all
            aspiring professionals.
          </p>
          <ul>
            <li>
              <FaLightbulb /> Innovative learning platforms
            </li>
            <li>
              <FaRocket /> Global career opportunities
            </li>
            <li>
              <FaChartLine /> Continuous program evolution
            </li>
          </ul>
        </>
      ),
      color: "#10b981",
    },
    {
      title: "Why Choose Us",
      icon: <FaCheckCircle />,
      content: (
        <>
          <p>What sets us apart in the competitive tech education space.</p>
          <ul>
            <li>
              <FaCalendarAlt /> Flexible scheduling options
            </li>
            <li>
              <FaMoneyBillWave /> Affordable payment plans
            </li>
            <li>
              <FaAward /> Industry-recognized certifications
            </li>
          </ul>
        </>
      ),
      color: "#f59e0b",
    },
  ];

  const stats = [
    { value: "1000+", label: "Students Trained", icon: <FaUsers /> },
    { value: "95%", label: "Placement Rate", icon: <FaBullseye /> },
    { value: "50+", label: "Hiring Partners", icon: <FaHandshake /> },
    { value: "24/7", label: "Learning Support", icon: <FaGraduationCap /> },
  ];

  const values = [
    {
      title: "Infinite Potential",
      icon: <FaInfinity />,
      description:
        "We believe every learner holds infinite career possibilities",
      color: "#6366f1",
    },
    {
      title: "Hands-on Learning",
      icon: <FaLaptopCode />,
      description:
        "Practical skills that make a real difference in your career",
      color: "#10b981",
    },
    {
      title: "Industry Connect",
      icon: <FaNetworkWired />,
      description: "Direct pathways to employment with our partner network",
      color: "#f59e0b",
    },
    {
      title: "Career Mentorship",
      icon: <FaUserTie />,
      description: "Guidance from application to interview to job placement",
      color: "#ec4899",
    },
  ];

  return (
    <div className="iclp-tech-container">
      {/* Hero Section */}
      <section
        className="iclp-tech-hero"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(6,95,70,0.9) 100%), url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="iclp-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="iclp-logo-badge"
          >
            <FaInfinity className="iclp-infinity-icon" />
            <span>ICLP Technologies</span>
          </motion.div>
          <h1>
            Transform Your Career with <span>Infinite Possibilities</span>
          </h1>
          <p>
            Industry-aligned training programs designed for real-world success
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBookingModal(true)}
            className="iclp-cta-button"
          >
            Explore Programs <FaArrowRight />
          </motion.button>
        </motion.div>
        <div className="iclp-hero-accent"></div>
      </section>

      {/* Mission Statement */}
      <section className="iclp-mission-section">
        <div className="iclp-mission-container">
          <motion.div
            className="iclp-mission-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              <FaInfinity className="mission-icon" /> ICLP Technologies
            </h2>
            <p className="iclp-mission-statement">
              <strong>The Infinite Career Leading Platform</strong> is more than
              just a name; it's our belief that every learner holds infinite
              potential to build a thriving career.
            </p>
            <p>
              At ICLP, we don't just provide training—we become your career
              partner, guiding you with purpose, confidence, and clarity from
              learning to achievement.
            </p>
          </motion.div>

          <div className="iclp-mission-features">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="iclp-mission-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ borderTop: `4px solid ${value.color}` }}
              >
                <div
                  className="iclp-feature-icon"
                  style={{ color: value.color }}
                >
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <div className="iclp-tab-container">
        <div className="iclp-tab-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`iclp-tab-button ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
              style={{
                color: activeTab === index ? tab.color : "#64748b",
                borderColor: activeTab === index ? tab.color : "transparent",
              }}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="iclp-tab-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            style={{ borderLeft: `4px solid ${tabs[activeTab].color}` }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Grid */}
      <div className="iclp-stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="iclp-stat-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="iclp-stat-icon" style={{ color: "#4f46e5" }}>
              {stat.icon}
            </div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Value Propositions Section */}
      <section className="iclp-value-props">
        <motion.div
          className="iclp-value-props-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="iclp-value-props-text">
            <h2>Beyond Traditional Learning</h2>
            <p>
              Essentially owning knowledge remains insufficient in the
              competitive and constantly changing work market of today. How well
              you can use that information in practical settings is what counts
              most.
            </p>
            <p>
              To prepare students for actual industrial difficulties, ICLP
              places a strong emphasis on experiential, hands-on learning. We
              provide you with skills that make truly a difference, bridging the
              gap between school and employment.
            </p>
          </div>
          <div className="iclp-value-props-image">
            <div className="iclp-image-placeholder">
              <FaLaptopCode className="iclp-large-icon" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Teaching Approach */}
      <section className="iclp-teaching-approach">
        <h2>Our Teaching Philosophy</h2>
        <p className="iclp-approach-intro">
          Not just what we teach, but also how we teach it, is what sets us
          unique.
        </p>

        <div className="iclp-approach-grid">
          <motion.div
            className="iclp-approach-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="iclp-approach-icon">
              <FaUserTie />
            </div>
            <h3>Personalized Learning</h3>
            <p>
              We provide tailored experiences that match your objectives,
              learning style, and potential.
            </p>
          </motion.div>

          <motion.div
            className="iclp-approach-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="iclp-approach-icon">
              <FaHandshake />
            </div>
            <h3>Adaptive Programs</h3>
            <p>
              Our courses are flexible, interactive, and intensely engaging for
              optimal learning.
            </p>
          </motion.div>

          <motion.div
            className="iclp-approach-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="iclp-approach-icon">
              <FaAward />
            </div>
            <h3>Career Platform</h3>
            <p>
              ICLP is your launchpad for success, whether you're a student,
              job-seeker, or professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="iclp-outcomes-section">
        <div className="iclp-outcomes-container">
          <motion.div
            className="iclp-outcomes-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>We Deliver Meaningful Outcomes</h2>
            <p>
              Our training is conducted by seasoned mentors who infuse each
              session with real-world knowledge and industry experience.
            </p>
            <ul className="iclp-outcomes-list">
              <li>
                <FaCheckCircle /> Resume writing and optimization
              </li>
              <li>
                <FaCheckCircle /> Mock interviews and coaching
              </li>
              <li>
                <FaCheckCircle /> Direct placement assistance
              </li>
              <li>
                <FaCheckCircle /> Ongoing career support
              </li>
            </ul>
            <p className="iclp-outcomes-highlight">
              Our students undergo more than just training; they undergo
              transformation.
            </p>
          </motion.div>
          <motion.div
            className="iclp-outcomes-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="iclp-outcomes-graphic">
              <div className="iclp-graphic-item">
                <FaGraduationCap />
                <span>Learning</span>
              </div>
              <div className="iclp-graphic-arrow">
                <FaArrowRight />
              </div>
              <div className="iclp-graphic-item">
                <FaUserTie />
                <span>Career</span>
              </div>
              <div className="iclp-graphic-arrow">
                <FaArrowRight />
              </div>
              <div className="iclp-graphic-item">
                <FaRocket />
                <span>Success</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="iclp-community-section">
        <motion.div
          className="iclp-community-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            <FaUsers /> Join Our Growing Community
          </h2>
          <p>
            We at ICLP Technologies are proud to have established a community
            that values education, creativity, and ongoing development.
          </p>
          <p>
            Our purpose is not to provide generic stuff. Our mission is to
            foster genuine potential, instill self-assurance, and assist
            fulfilling professional endeavours. Every learner's success story
            demonstrates our dedication.
          </p>
          <div className="iclp-community-stats">
            <div className="iclp-community-stat">
              <strong>100%</strong>
              <span>Career Focused</span>
            </div>
            <div className="iclp-community-stat">
              <strong>24/7</strong>
              <span>Learning Access</span>
            </div>
            <div className="iclp-community-stat">
              <strong>∞</strong>
              <span>Possibilities</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Flexibility Section */}
      <section className="iclp-flexibility-section">
        <div className="iclp-flexibility-container">
          <motion.div
            className="iclp-flexibility-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="iclp-flexibility-visual">
              <div className="iclp-visual-online">
                <FaLaptopCode />
                <span>Online</span>
              </div>
              <div className="iclp-visual-offline">
                <FaUsers />
                <span>Community</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="iclp-flexibility-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Flexible Learning Options</h2>
            <p>
              Everyone can participate in ICLP, regardless of schedule or
              location, thanks to the flexibility of both online and offline
              learning options.
            </p>
            <p>
              Every facet of our strategy is intended to guarantee excellence,
              pertinence, and flexibility in a rapidly evolving work
              environment.
            </p>
            <ul className="iclp-flexibility-list">
              <li>
                <FaCheckCircle /> Self-paced online courses
              </li>
              <li>
                <FaCheckCircle /> Live virtual classrooms
              </li>
              <li>
                <FaCheckCircle /> In-person training centers
              </li>
              <li>
                <FaCheckCircle /> Hybrid learning models
              </li>
              <li>
                <FaCheckCircle /> Offline learning models
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <div
        className="iclp-cta-section"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,42,108,0.9) 0%, rgba(31,170,89,0.9) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="iclp-cta-content"
        >
          <h2>Ready to Start Your Tech Journey?</h2>
          <p>Join our next cohort and transform your career in weeks</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBookingModal(true)}
            className="iclp-cta-button"
          >
            Apply Now <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            className="iclp-tech-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="iclp-tech-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="iclp-tech-modal-close"
                onClick={() => setShowBookingModal(false)}
              >
                <FaTimes />
              </button>
              <ModalBooking onClose={() => setShowBookingModal(false)} />
              <div className="iclp-tech-modal-submit-container">
                <button type="submit" className="iclp-tech-modal-submit">
                  Submit Application
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyScreen;
