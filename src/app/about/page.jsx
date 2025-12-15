"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CountUp from "react-countup";
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
import ModalBooking from "../components/ModalBooking/ModalBooking";

const CompanyScreen = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix = "" }) => {
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true, amount: 0.5 });

    return (
      <span ref={counterRef}>
        {isInView ? (
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            separator=","
            suffix={suffix}
            delay={0}
          />
        ) : (
          "0" + suffix
        )}
      </span>
    );
  };

  const tabs = [
    {
      title: "Who We Are",
      icon: <FaHandshake />,
      content: (
        <>
          <p className="text-slate-700 mb-4">
            We're a premier tech education provider bridging the gap between
            learning and career success.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-700">
              <FaUsers className="text-[#39FF14] flex-shrink-0" />
              <span>Industry-experienced instructors</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaBook className="text-[#39FF14] flex-shrink-0" />
              <span>Practical, project-based curriculum</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaShieldAlt className="text-[#39FF14] flex-shrink-0" />
              <span>Proven track record since 2015</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Our Vision",
      icon: <FaGlobe />,
      content: (
        <>
          <p className="text-slate-700 mb-4">
            To create a world where quality tech education is accessible to all
            aspiring professionals.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-700">
              <FaLightbulb className="text-[#39FF14] flex-shrink-0" />
              <span>Innovative learning platforms</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaRocket className="text-[#39FF14] flex-shrink-0" />
              <span>Global career opportunities</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaChartLine className="text-[#39FF14] flex-shrink-0" />
              <span>Continuous program evolution</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Choose Us",
      icon: <FaCheckCircle />,
      content: (
        <>
          <p className="text-slate-700 mb-4">
            What sets us apart in the competitive tech education space.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-700">
              <FaCalendarAlt className="text-[#39FF14] flex-shrink-0" />
              <span>Flexible scheduling options</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaMoneyBillWave className="text-[#39FF14] flex-shrink-0" />
              <span>Affordable payment plans</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <FaAward className="text-[#39FF14] flex-shrink-0" />
              <span>Industry-recognized certifications</span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  const stats = [
    { value: 1000, label: "Students Trained", icon: <FaUsers />, suffix: "+" },
    { value: 95, label: "Placement Rate", icon: <FaBullseye />, suffix: "%" },
    { value: 50, label: "Hiring Partners", icon: <FaHandshake />, suffix: "+" },
    { value: 24, label: "Learning Support", icon: <FaGraduationCap />, suffix: "/7" },
  ];

  const values = [
    {
      title: "Infinite Potential",
      icon: <FaInfinity />,
      description:
        "We believe every learner holds infinite career possibilities",
    },
    {
      title: "Hands-on Learning",
      icon: <FaLaptopCode />,
      description:
        "Practical skills that make a real difference in your career",
    },
    {
      title: "Industry Connect",
      icon: <FaNetworkWired />,
      description: "Direct pathways to employment with our partner network",
    },
    {
      title: "Career Mentorship",
      icon: <FaUserTie />,
      description: "Guidance from application to interview to job placement",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Yale Blue Background */}
      <section className="relative bg-[#01377d] min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-[#39FF14]/30"
          >
            <FaInfinity className="text-[#39FF14] text-2xl" />
            <span className="text-white font-semibold tracking-wide">
              ICLP Technologies
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Career with{" "}
            <span className="text-[#39FF14]">Infinite Possibilities</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#97e7f5] mb-10 max-w-3xl mx-auto">
            Industry-aligned training programs designed for real-world success
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-3 bg-[#39FF14] text-[#01377d] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2de000] transition-all shadow-lg shadow-[#39FF14]/30"
          >
            Explore Programs <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 "></div>
      </section>

      {/* Mission Statement - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <FaInfinity className="text-[#39FF14] text-4xl" />
              <h2 className="text-4xl font-bold text-[#01377d]">
                ICLP Technologies
              </h2>
            </div>
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">
              <strong className="text-[#01377d]">
                The Infinite Career Leading Platform
              </strong>{" "}
              is more than just a name; it's our belief that every learner holds
              infinite potential to build a thriving career.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              At ICLP, we don't just provide training—we become your career
              partner, guiding you with purpose, confidence, and clarity from
              learning to achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-slate-100 rounded-xl p-6 hover:border-[#39FF14] hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#39FF14] text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#01377d] mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs - Yale Blue Background */}
      <section className="bg-[#01377d] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === index
                    ? "bg-[#39FF14] text-[#01377d]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-[#39FF14]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Grid with Animated Counter - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#01377d] to-[#01377d]/80 rounded-xl p-8 text-center hover:scale-105 transition-transform shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#39FF14] text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[#97e7f5]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions - Yale Blue Background */}
      <section className="bg-[#01377d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Beyond Traditional Learning
              </h2>
              <p className="text-[#97e7f5] mb-4 leading-relaxed">
                Essentially owning knowledge remains insufficient in the
                competitive and constantly changing work market of today. How
                well you can use that information in practical settings is what
                counts most.
              </p>
              <p className="text-[#97e7f5] leading-relaxed">
                To prepare students for actual industrial difficulties, ICLP
                places a strong emphasis on experiential, hands-on learning. We
                provide you with skills that make truly a difference, bridging
                the gap between school and employment.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border-2 border-[#39FF14]">
                <FaLaptopCode className="text-[#39FF14] text-8xl mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Approach - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#01377d] mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Not just what we teach, but also how we teach it, is what sets us
              unique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserTie />,
                title: "Personalized Learning",
                description:
                  "We provide tailored experiences that match your objectives, learning style, and potential.",
              },
              {
                icon: <FaHandshake />,
                title: "Adaptive Programs",
                description:
                  "Our courses are flexible, interactive, and intensely engaging for optimal learning.",
              },
              {
                icon: <FaAward />,
                title: "Career Platform",
                description:
                  "ICLP is your launchpad for success, whether you're a student, job-seeker, or professional.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#39FF14]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#39FF14] text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#01377d] mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section - Yale Blue Background */}
      <section className="bg-[#01377d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                We Deliver Meaningful Outcomes
              </h2>
              <p className="text-[#97e7f5] mb-6 leading-relaxed">
                Our training is conducted by seasoned mentors who infuse each
                session with real-world knowledge and industry experience.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Resume writing and optimization",
                  "Mock interviews and coaching",
                  "Direct placement assistance",
                  "Ongoing career support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#39FF14] text-xl flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#39FF14] font-semibold text-lg">
                Our students undergo more than just training; they undergo
                transformation.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#39FF14]">
                  <FaGraduationCap className="text-[#39FF14] text-5xl" />
                  <p className="text-white text-sm mt-2">Learning</p>
                </div>
                <FaArrowRight className="text-[#39FF14] text-3xl" />
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#39FF14]">
                  <FaUserTie className="text-[#39FF14] text-5xl" />
                  <p className="text-white text-sm mt-2">Career</p>
                </div>
                <FaArrowRight className="text-[#39FF14] text-3xl" />
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#39FF14]">
                  <FaRocket className="text-[#39FF14] text-5xl" />
                  <p className="text-white text-sm mt-2">Success</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaUsers className="text-[#39FF14] text-5xl" />
              <h2 className="text-4xl font-bold text-[#01377d]">
                Join Our Growing Community
              </h2>
            </div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              We at ICLP Technologies are proud to have established a community
              that values education, creativity, and ongoing development.
            </p>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Our purpose is not to provide generic stuff. Our mission is to
              foster genuine potential, instill self-assurance, and assist
              fulfilling professional endeavours. Every learner's success story
              demonstrates our dedication.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39FF14] mb-2">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-slate-600">Career Focused</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39FF14] mb-2">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="text-slate-600">Learning Access</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39FF14] mb-2">∞</div>
                <div className="text-slate-600">Possibilities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexibility Section - Yale Blue Background */}
      <section className="bg-[#01377d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-[#39FF14] text-center">
                <FaLaptopCode className="text-[#39FF14] text-6xl mx-auto mb-4" />
                <p className="text-white font-semibold">Online</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-[#39FF14] text-center">
                <FaUsers className="text-[#39FF14] text-6xl mx-auto mb-4" />
                <p className="text-white font-semibold">Community</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Flexible Learning Options
              </h2>
              <p className="text-[#97e7f5] mb-4 leading-relaxed">
                Everyone can participate in ICLP, regardless of schedule or
                location, thanks to the flexibility of both online and offline
                learning options.
              </p>
              <p className="text-[#97e7f5] mb-6 leading-relaxed">
                Every facet of our strategy is intended to guarantee excellence,
                pertinence, and flexibility in a rapidly evolving work
                environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Self-paced online courses",
                  "Live virtual classrooms",
                  "In-person training centers",
                  "Hybrid learning models",
                  "Offline learning models",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#39FF14] flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Yale Blue with Neon Green Accent */}
      <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-24">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-[#97e7f5] mb-10">
            Join our next cohort and transform your career in weeks
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-3 bg-[#39FF14] text-[#01377d] px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#2de000] transition-all shadow-2xl shadow-[#39FF14]/40"
          >
            Apply Now <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-[#01377d] text-2xl z-10"
                onClick={() => setShowBookingModal(false)}
              >
                <FaTimes />
              </button>
              <div className="p-8">
                <ModalBooking onClose={() => setShowBookingModal(false)} />
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#39FF14] text-[#01377d] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#2de000] transition-all"
                >
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
