"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";
import "./blog.css";
import ModalBooking from "../components/ModalBooking/ModalBooking";
import Head from "./Head";


const Blog = () => {
  // State for booking modal
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Booking form handlers
  const handleBookingClick = (title) => {
    setSelectedCourse(title);
    setShowBookingForm(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
    document.body.style.overflow = "auto";
  };

  // Custom hook for animation triggers
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return [ref, controls];
  };

  // Book flipping animation for educational theme
  const BookParticle = ({ size, left, top, delay }) => {
    return (
      <motion.div
        className="iclp-book-particle"
        style={{
          width: size,
          height: size * 1.4,
          left: `${left}%`,
          top: `${top}%`,
        }}
        initial={{ opacity: 0, y: -20, rotateY: 0 }}
        animate={{
          opacity: [0, 0.6, 0],
          y: [0, -40],
          rotateY: [0, 180],
          x: [0, Math.random() > 0.5 ? 20 : -20],
        }}
        transition={{
          duration: 8 + Math.random() * 5,
          delay,
          repeat: Infinity,
          repeatDelay: Math.random() * 5,
        }}
      >
        <div className="iclp-book-cover"></div>
        <div className="iclp-book-pages"></div>
      </motion.div>
    );
  };

  // Graduation Cap Path Component
  const GraduationPath = () => {
    const [ref, controls] = useScrollAnimation();

    return (
      <motion.div
        className="iclp-graduation-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <svg
          className="iclp-graduation-path"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M 100 200 Q 200 100 300 200 T 500 200 T 700 200"
            fill="none"
            stroke="url(#iclp-grad-gradient)"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient
              id="iclp-grad-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6c5ce7" />
              <stop offset="100%" stopColor="#00cec9" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    );
  };

  // Learning Step Component with graduation cap
  const LearningStep = ({ step, index, totalSteps }) => {
    const [ref, controls] = useScrollAnimation();
    const position = (index / (totalSteps - 1)) * 100;

    return (
      <motion.div
        ref={ref}
        className="iclp-learning-step"
        style={{ left: `${position}%` }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.7 + index * 0.2,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="iclp-step-connector"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
        />
        <motion.div
          className="iclp-step-icon-container"
          whileHover={{ rotate: 15 }}
        >
          <span className="iclp-step-icon">{step.icon}</span>
          <span className="iclp-step-number">0{index + 1}</span>
          <div className="iclp-graduation-cap"></div>
        </motion.div>
        <div className="iclp-step-content">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </motion.div>
    );
  };

  // New Course Highlight Component
  const CourseHighlight = ({ course, onEnrollClick }) => {
    const [ref, controls] = useScrollAnimation();

    return (
      <motion.div
        ref={ref}
        className="iclp-course-card"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              delay: course.delay,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        whileHover={{ y: -5 }}
      >
        <div className="iclp-course-badge">New</div>
        <div className="iclp-course-icon">{course.icon}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="iclp-course-details">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <button className="iclp-course-button" onClick={onEnrollClick}>
          Explore Course
        </button>
      </motion.div>
    );
  };

  // New Testimonial Component
  const StudentTestimonial = ({ testimonial }) => {
    const [ref, controls] = useScrollAnimation();

    return (
      <motion.div
        ref={ref}
        className="iclp-testimonial-card"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: testimonial.delay,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <div className="iclp-testimonial-content">
          <div className="iclp-testimonial-quote">"</div>
          <p>{testimonial.quote}</p>
        </div>
        <div className="iclp-testimonial-author">
          <div className="iclp-author-avatar">{testimonial.avatar}</div>
          <div className="iclp-author-info">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
            <div className="iclp-author-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`iclp-star ${i < testimonial.rating ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Content data
  const learningJourney = [
    {
      id: 1,
      title: "Admission & Orientation",
      description:
        "Begin your journey with our comprehensive onboarding process",
      icon: "📚",
    },
    {
      id: 2,
      title: "Interactive Learning",
      description: "Engage in hands-on sessions with industry experts",
      icon: "👨‍🏫",
    },
    {
      id: 3,
      title: "Project Work",
      description: "Apply knowledge through real-world projects",
      icon: "💻",
    },
    {
      id: 4,
      title: "Skill Assessment",
      description: "Regular evaluations to track your progress",
      icon: "📝",
    },
    {
      id: 5,
      title: "Placement Prep",
      description: "Interview training and resume building",
      icon: "🤝",
    },
    {
      id: 6,
      title: "Career Launch",
      description: "Get placed in top companies",
      icon: "🎓",
    },
  ];

  const techArticles = [
    {
      id: 1,
      title: "The Future of Full Stack Development ",
      excerpt: "Explore emerging trends shaping full stack development",
      category: "Development",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Python vs R for Data Science",
      excerpt: "Comprehensive comparison for data science applications",
      category: "Data Science",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Java Best Practices",
      excerpt: "Industry-standard practices for enterprise applications",
      category: "Programming",
      readTime: "12 min read",
      featured: true,
    },
    {
      id: 4,
      title: "Cloud Computing Fundamentals",
      excerpt: "Understanding the basics of cloud infrastructure",
      category: "Cloud",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 5,
      title: "AI Ethics in Modern Applications",
      excerpt: "The importance of responsible AI development",
      category: "AI/ML",
      readTime: "11 min read",
      featured: true,
    },
    {
      id: 6,
      title: "DevOps Culture Transformation",
      excerpt: "How DevOps practices revolutionize software delivery",
      category: "DevOps",
      readTime: "7 min read",
      featured: false,
    },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Advanced Full Stack Development",
      description:
        "Master both frontend and backend technologies with real-world projects",
      icon: "💻",
      duration: "6 Months",
      level: "Advanced",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Data Science Specialization",
      description:
        "Comprehensive training in data analysis, visualization, and machine learning",
      icon: "📊",
      duration: "5 Months",
      level: "Intermediate",
      delay: 0.3,
    },
    {
      id: 3,
      title: "Cloud Architecture Certification",
      description: "Learn to design and deploy scalable cloud solutions",
      icon: "☁️",
      duration: "4 Months",
      level: "Advanced",
      delay: 0.5,
    },
  ];

  const studentTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Developer at TechSolutions",
      quote:
        "ICLP's Full Stack program transformed my career. The hands-on projects gave me the confidence to tackle real-world challenges immediately after graduation.",
      avatar: "👩",
      rating: 5,
      delay: 0.2,
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Data Analyst at DataInsights",
      quote:
        "The Data Science curriculum was perfectly aligned with industry needs. I received multiple job offers before completing the course!",
      avatar: "👨",
      rating: 5,
      delay: 0.4,
    },
    {
      id: 3,
      name: "Ananya Gupta",
      role: "Cloud Engineer at CloudScale",
      quote:
        "The instructors' industry experience made all the difference. I learned current best practices, not just textbook theories.",
      avatar: "👩",
      rating: 4,
      delay: 0.6,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Free Webinar: AI ",
      date: "1 hr",
      description:
        "Learn about the latest advancements in artificial intelligence",
      speaker: "Dr. Sanjay Mehta, AI Researcher",
    },
    {
      id: 2,
      title: "Coding Bootcamp Weekend",
      date: "1 hr",
      description: "Intensive hands-on coding experience for beginners",
      speaker: "ICLP Senior Instructors",
    },
    {
      id: 3,
      title: "Tech Career Fair",
      date: "1 hr",
      description: "Meet top tech employers and explore opportunities",
      speaker: "ICLP Placement Team",
    },
  ];

  return (
    <div className="iclp-blog-container">
     <Head/>

      {/* Animated Book Particles */}
      <div className="iclp-books-container">
        {[...Array(10)].map((_, i) => (
          <BookParticle
            key={i}
            size={20 + Math.random() * 20}
            left={Math.random() * 100}
            top={Math.random() * 100}
            delay={Math.random() * 3}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        className="iclp-blog-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="iclp-hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            ICLP Tech <span className="iclp-highlight">Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Empowering the next generation of tech professionals through
            innovative education
          </motion.p>

          <motion.button
            className="iclp-connect-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBookingClick("ICLP Programs")}
          >
            Connect With Us
          </motion.button>
        </motion.div>

        <motion.div
          className="iclp-scroll-indicator"
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="iclp-scroll-text">Scroll to explore</span>
          <div className="iclp-scroll-arrow">↓</div>
        </motion.div>
      </motion.section>

      {/* Learning Journey with Graduation Path */}
      <section className="iclp-learning-journey">
        <motion.div
          className="iclp-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            Our <span className="iclp-highlight">Learning</span> Journey
          </h2>
          <p className="iclp-section-subtitle">
            The ICLP proven path to tech career success
          </p>
        </motion.div>

        <div className="iclp-journey-wrapper">
          <GraduationPath />
          <div className="iclp-learning-steps">
            {learningJourney.map((step, index) => (
              <LearningStep
                key={step.id}
                step={step}
                index={index}
                totalSteps={learningJourney.length}
              />
            ))}
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>

      {/* Featured Courses Section */}
      <section className="iclp-featured-courses">
        <motion.div
          className="iclp-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            <span className="iclp-highlight">Featured</span> Courses
          </h2>
          <p className="iclp-section-subtitle">
            Explore our most popular career-transforming programs
          </p>
        </motion.div>

        <div className="iclp-courses-grid">
          {featuredCourses.map((course) => (
            <CourseHighlight
              key={course.id}
              course={course}
              onEnrollClick={() => handleBookingClick(course.title)}
            />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="iclp-featured-articles">
        <motion.div
          className="iclp-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            Latest <span className="iclp-highlight">Tech</span> Articles
          </h2>
          <p className="iclp-section-subtitle">
            Stay updated with technology and education trends
          </p>
        </motion.div>

        <div className="iclp-articles-grid">
          {techArticles.map((article, index) => {
            const [ref, controls] = useScrollAnimation();

            return (
              <motion.div
                key={article.id}
                ref={ref}
                className={`iclp-article-card ${article.featured ? "featured" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.15,
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                {article.featured && (
                  <div className="iclp-featured-badge">Featured</div>
                )}
                <div className="iclp-article-category">{article.category}</div>
                <h3>{article.title}</h3>
                <p className="iclp-article-excerpt">{article.excerpt}</p>
                <div className="iclp-article-footer">
                  <span>{article.readTime}</span>
                  <motion.button
                    className="iclp-read-article"
                    onClick={() => handleBookingClick(article.title)}
                    whileHover={{ x: 5 }}
                  >
                    Read Article →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="iclp-testimonials-section">
        <motion.div
          className="iclp-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            Student <span className="iclp-highlight">Success</span> Stories
          </h2>
          <p className="iclp-section-subtitle">
            Hear from our alumni who transformed their careers
          </p>
        </motion.div>

        <div className="iclp-testimonials-grid">
          {studentTestimonials.map((testimonial) => (
            <StudentTestimonial
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="iclp-events-section">
        <motion.div
          className="iclp-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            <span className="iclp-highlight">Upcoming</span> Events
          </h2>
          <p className="iclp-section-subtitle">
            Join our interactive sessions and workshops
          </p>
        </motion.div>

        <div className="iclp-events-timeline">
          {upcomingEvents.map((event, index) => {
            const [ref, controls] = useScrollAnimation();

            return (
              <motion.div
                key={event.id}
                ref={ref}
                className="iclp-event-card"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                <div className="iclp-event-date">
                  <span>{event.date}</span>
                </div>
                <div className="iclp-event-details">
                  <h3>{event.title}</h3>
                  <p className="iclp-event-description">{event.description}</p>
                  <p className="iclp-event-speaker">Speaker: {event.speaker}</p>
                  <button
                    className="iclp-event-button"
                    onClick={() => handleBookingClick(event.title)}
                  >
                    Register Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Newsletter Subscription */}

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="booking-modal active">
          <div
            className="booking-modal-overlay"
            onClick={handleCloseBooking}
          ></div>

          <div className="booking-modal-container">
            <button
              className="booking-modal-close"
              onClick={handleCloseBooking}
            >
              <FaTimes />
            </button>

            <div className="booking-modal-header">
              <h2>Enroll in {selectedCourse}</h2>
              <p>Complete the form below to get started</p>
            </div>

            <div className="booking-modal-content">
              <ModalBooking
                onClose={handleCloseBooking}
                initialCourse={selectedCourse}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
