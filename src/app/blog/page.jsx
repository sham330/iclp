"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";
import "./blog.css";
import ModalBooking from "../components/ModalBooking/ModalBooking";
import Head from "./Head";
import { useRouter } from "next/navigation";

const Blog = () => {
  // State for booking modal
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
const router = useRouter();
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
  const blogs = [
  {
    "id": 1,
    "title": "Java Online Training by ICLP Tech: Hands-On Projects & Certification",
    "slug":"Java-Online-Training-ICLP-Tech",
    "image": "/blog-java.png",
    "intro": "Thinking about a career in software development? Java remains one of the most powerful and in-demand programming languages across the globe. From banking apps to enterprise software and Android applications, Java is everywhere. At ICLP Tech, our Java Online Training Course is designed to help you master the language step by step, build real projects, and earn a certification that employers trust.",
    "sections": [
      {
        "heading": "Why Learn Java in 2025?",
        "points": [
          "High demand for Java developers – IT companies, startups, and MNCs are actively hiring.",
          "Versatility – Java powers web apps, mobile apps, enterprise systems, and cloud-based tools.",
          "Beginner-friendly – Even if you’ve never coded before, Java is one of the best places to start.",
          "ICLP Tech’s Java online training blends beginner-friendly learning with advanced concepts to prepare you for real-world development."
        ]
      },
      {
        "heading": "What You’ll Get with ICLP’s Java Online Training",
        "points": [
          "Comprehensive Curriculum – Basics to advanced (OOP, collections, multithreading, JDBC, Spring & Hibernate).",
          "Hands-On Projects – Build real apps like library management system or e-commerce cart.",
          "Expert Trainers – Industry professionals with real coding & teaching experience.",
          "Flexible Learning – Self-paced modules, live classes, and recorded sessions.",
          "Certification & Placement Support – Certificate from ICLP Tech + interview prep."
        ],
        "keywords": [
          "Java online classes with placement",
          "hands-on Java projects",
          "self-paced Java online course"
        ]
      },
      {
        "heading": "Who Should Join?",
        "points": [
          "Beginners with no prior coding experience",
          "Students aiming to boost career opportunities",
          "Working professionals looking to upskill",
          "Tech enthusiasts planning a career switch into IT"
        ],
        "note": "No matter where you are—whether in Chennai, Bangalore, or anywhere in India—ICLP Tech’s Java online training course makes learning flexible and accessible."
      },
      {
        "heading": "Why Choose ICLP Tech for Java Online Training?",
        "points": [
          "Structured learning path (beginner to advanced)",
          "Real-world project experience",
          "Lifetime access to learning resources",
          "Personal guidance from trainers",
          "Career-focused training with placement assistance"
        ]
      },
      {
        "heading": "Course Syllabus Snapshot",
        "syllabus": [
          "Introduction to Java & Setup",
          "Core Java Programming – variables, loops, arrays",
          "OOP Concepts – inheritance, polymorphism, encapsulation",
          "Collections & Generics",
          "Multithreading & Exception Handling",
          "Database Connectivity (JDBC)",
          "Web Development with JSP & Servlets",
          "Frameworks – Spring & Hibernate",
          "Capstone Projects – build and deploy applications"
        ]
      },
      {
        "heading": "FAQs – Java Online Course at ICLP Tech",
        "faqs": [
          {
            "q": "Do I need coding knowledge before starting?",
            "a": "No, the course is designed for complete beginners as well as professionals."
          },
          {
            "q": "Will I get a certificate?",
            "a": "Yes! You’ll receive an industry-recognized certification from ICLP Tech."
          },
          {
            "q": "What career opportunities can I expect?",
            "a": "Java Developer, Backend Developer, Full Stack Developer, Android Developer, and more."
          },
          {
            "q": "How long will it take to complete?",
            "a": "The course typically takes 6–8 weeks, depending on your schedule."
          },
          {
            "q": "Does ICLP Tech offer placement support?",
            "a": "Yes, you’ll get career guidance and interview preparation to land your dream job."
          }
        ]
      }
    ],
    "conclusion": "Java is not just a programming language—it’s your gateway to high-demand tech careers. At ICLP Tech, our Java online training helps you learn coding in the most practical way possible—through projects, mentorship, and real-world practice. Don’t wait! Enroll in ICLP Tech’s Java Online Course today and start your journey toward becoming a professional Java developer."
  },
  {
  "id": 4,
  "title": "Best Java Online Course for Beginners – Learn Java with Projects & Placement",
  "slug":"Java-Online-Course-for-Beginners",
  "image": "/blog-java.png",
  "intro": "In today’s fast-paced digital world, the demand for skilled software developers continues to rise—especially those who know Java. Whether you're just starting your tech journey or planning a career switch, enrolling in the best Java online course for beginners can be your gateway to a successful IT career. At ICLPTech, we offer a comprehensive Java programming course online that includes real-world projects, hands-on training, certification, and 100% placement support.",
  "sections": [
    {
      "heading": "Why Java Is Still the Best Programming Language to Learn in 2025",
      "points": [
        "Java remains one of the most in-demand and widely used programming languages in 2025, used to build Android apps, enterprise software, web applications, and backend systems.",
        "Its robustness, cross-platform compatibility, and vast community make it ideal for both beginners and professionals.",
        "According to multiple job portals, Java developer roles are consistently among the highest-paying tech jobs in India and abroad.",
        "Enrolling in a Java course for beginners opens opportunities in software development, automation, cloud computing, and mobile app development."
      ]
    },
    {
      "heading": "What to Expect from the Best Java Online Course",
      "points": [
        "Structured Curriculum: Covering Core Java, OOP, Exception Handling, JDBC, Collections, Multithreading, and Intro to frameworks like Spring.",
        "Real-Time Projects: Build practical applications to showcase your skills to employers.",
        "Certification: A recognized certificate that adds value to your resume.",
        "Live Classes & Mentorship: Direct interaction with trainers who guide you through real-world use cases.",
        "Placement Assistance: Resume building, mock interviews, and job referrals."
      ]
    },
    {
      "heading": "Why Choose ICLPTech’s Java Online Course",
      "points": [
        "Live Online Classes by Industry Experts",
        "Hands-on Projects & Assignments",
        "Doubt-Clearing Sessions and One-on-One Mentorship",
        "Industry-Recognized Certification",
        "Resume Building & Interview Preparation",
        "100% Placement Support",
        "Weekend and Weekday Batches Available"
      ],
      "note": "Whether you're from a technical background or not, our Java course for freshers ensures that you understand programming from the ground up."
    },
    {
      "heading": "Real-Time Projects That Build Your Confidence",
      "points": [
        "Online Banking Application",
        "Employee Management System",
        "E-Commerce Product Catalog",
        "Student Report Generator",
        "Simple Chat Application using Java Socket Programming"
      ],
      "note": "These projects will form part of your developer portfolio, which is crucial when applying for jobs as a fresher."
    },
    {
      "heading": "Placement Support and Career Guidance",
      "points": [
        "Resume and LinkedIn Profile Optimization",
        "Technical Mock Interviews",
        "HR Interview Preparation",
        "Referrals to Hiring Partners",
        "Access to Job Portals and Internal Job Boards"
      ],
      "note": "With our Java course with 100% placement assistance, you won’t just learn—you’ll get hired."
    },
    {
      "heading": "Who Should Enroll in This Java Online Course?",
      "points": [
        "College students preparing for IT careers",
        "Fresh graduates looking to get into software development",
        "Working professionals planning a career switch into IT",
        "Non-technical background individuals who want to break into tech",
        "Anyone looking for a beginner-friendly Java course online"
      ],
      "note": "No prior programming knowledge is required—our instructors start from the very basics and gradually take you to advanced topics."
    },
    {
      "heading": "Frequently Asked Questions (FAQs)",
      "faqs": [
        {
          "q": "Is Java still worth learning in 2025?",
          "a": "Absolutely. Java remains one of the most widely used languages across industries. From web development to Android apps and enterprise systems, Java continues to dominate."
        },
        {
          "q": "Can I get a job after learning Java online?",
          "a": "Yes. Our course is designed to be job-oriented, with projects, certification, and placement support included to help you land your first role."
        },
        {
          "q": "What is the duration of the course?",
          "a": "The course typically spans 2–3 months, depending on your chosen batch and pace."
        },
        {
          "q": "Do I need to know coding before joining?",
          "a": "Not at all. This is a Java course for beginners, so we start from scratch."
        },
        {
          "q": "Will I get a certificate?",
          "a": "Yes. Upon completion, you’ll receive an industry-recognized certificate from ICLPTech."
        }
      ]
    }
  ],
  "conclusion": "Java is more than just a programming language—it’s a career path. If you want to break into software development, web applications, or mobile apps, now is the perfect time to start. ICLPTech’s Java online course for beginners provides everything you need to go from zero to job-ready: expert instruction, real-world projects, and certification."
}

]


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
    {blogs.map((blog, index) => {
      const [ref, controls] = useScrollAnimation();

      return (
        <motion.div
          key={blog.id}
          ref={ref}
          className="iclp-article-card"
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
          {/* Blog Image */}
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />

          {/* Title */}
          <h3>{blog.title}</h3>

          {/* Intro / Excerpt */}
          <p className="iclp-article-excerpt">{blog.intro}</p>

          {/* Footer with Read More button */}
          <div className="iclp-article-footer">
            <motion.button
              className="iclp-read-article"
              onClick={() => router.push(`/blog/${encodeURIComponent(blog.slug)}`)}
              whileHover={{ x: 5 }}
            >
              Read More →
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
