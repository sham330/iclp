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
  "id": 3,
  "title": "Top Platforms for SAP Online Learning in 2025: Where to Invest for Real Career Gains",
  "slug": "Top-Platforms-for-SAP-Online-Learning-2025",
  "image": "/blog-3.jpg",
  "intro": "If you’re looking for a SAP training platform in 2025, you want more than just video lectures—you want certification-aligned content, hands-on practice, instructor support, and job outcomes. This guide compares the top platforms to help you invest in your SAP career wisely.",
  "sections": [
    {
      "heading": "What Buyers Look for in a Great SAP Learning Platform",
      "points": [
        "Alignment with official SAP certification paths (updates, module coverage).",
        "Access to live systems or sandbox environments to practise, not just slides.",
        "Exam preparation tools: mock exams, study guides, possibly exam vouchers.",
        "Flexibility: self-paced vs instructor-led, scheduling, access to content.",
        "Support & mentorship: instructors, forums, feedback.",
        "Cost vs value: price of subscription or course + extras like labs, practice, updates + job/placement assistance."
      ]
    },
    {
      "heading": "Top SAP Learning Platforms in 2025",
      "points": [
        "SAP Learning Hub (Official by SAP) – Full certificate-aligned content, access to live SAP systems, guided learning journeys, expert sessions. Best for professionals wanting certification and ongoing learning.",
        "openSAP – Free or low-cost SAP MOOCs covering new features. Good for exploration or staying up-to-date with SAP innovations.",
        "Coursera / Udemy + Specialist Paths – Module-focused courses (SAP FICO, MM, etc.), affordable, some offer lifetime access. Check for hands-on labs and updated content.",
        "ICLPTech – Based in India. Offers SAP courses (FICO, MM, SD, ABAP) with chatbot support, placement assistance, and certification-oriented training.",
        "Other India-based Institutes – Regional institutes providing project-based learning, live labs, and placement support. Verify credentials and hands-on exposure."
      ]
    },
    {
      "heading": "ICLPTech Deep Dive: What You Get & What to Check",
      "points": [
        "Courses in SAP modules: FICO, MM, SD, PP, ABAP.",
        "Support features: expert mentorship, 100% placement assistance, ISO-certified certificate.",
        "Additional benefits: Chatbot support, flexible course combos, job placement & interview scheduling."
      ],
      "note": "Check system access, course version updates, trainer credentials, placement assistance, batch size, and student reviews before enrolling."
    },
    {
      "heading": "Recommendation Based on Your Goals",
      "points": [
        "Full certification + strong job placement → SAP Learning Hub + localized provider like ICLPTech.",
        "Learn one module (e.g. FICO or ABAP) → Smaller provider like ICLPTech + optional Coursera/Udemy specialization.",
        "Keep costs down while getting certified → openSAP or free/low-cost courses + ICLPTech for practical support."
      ]
    },
    {
      "heading": "Pricing & Value: What You Should Expect in 2025",
      "points": [
        "Official SAP subscriptions / hubs are expensive but include quality content, updates, system access, and exam alignment.",
        "Regional providers (like ICLPTech) can be cost-effective, especially for Indian learners, but value depends on real practice and placement support.",
        "Consider hidden costs: exam fees, required software/hardware, lab fees, materials, etc."
      ]
    },
    {
      "heading": "Final Thoughts: How to Choose & Buy with Confidence",
      "points": [
        "List your goals: modules, job role, timeline.",
        "Shortlist 2–3 platforms matching goal + budget.",
        "Request demo/trial to test content quality and instructor responsiveness.",
        "Compare total cost vs benefits: system access, mentorship, placement, exam support.",
        "Read reviews & success stories from learners in your region or similar modules."
      ]
    }
  ],
  "conclusion": "Choosing the right SAP learning platform in 2025 requires balancing cost, content quality, hands-on practice, mentorship, and certification alignment. By following these guidelines and evaluating providers like ICLPTech, learners in India can make informed decisions to maximize career gains."
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
},{
  "id": 5,
  "title": "Most In-Demand SAP Modules to Learn Online in 2025",
  "slug": "in-demand-sap-modules-2025",
  "image": "/blog-5.jpg",
  "intro": "SAP continues to dominate the enterprise software market, helping companies streamline processes, improve efficiency, and gain a competitive edge. In 2025, demand for SAP professionals is higher than ever. Choosing the right module can open doors to high-paying jobs worldwide.",
  "sections": [
    {
      "heading": "Why Choose SAP in 2025?",
      "points": [
        "High global demand: SAP powers 80%+ of Fortune 500 companies.",
        "Future-proof career: Modules are adapting to AI, automation, and cloud transformation.",
        "Lucrative salaries: SAP consultants earn 20–30% higher than non-SAP IT roles.",
        "Industry versatility: SAP professionals are needed in finance, HR, logistics, supply chain, and more."
      ]
    },
    {
      "heading": "Top SAP Modules in Demand for 2025",
      "points": [
        "SAP S/4HANA (Finance & Logistics) – Enterprises shifting to S/4HANA need experts in Finance (FI) and Logistics (MM/SD). Roles: SAP S/4HANA Consultant, SAP Finance Analyst, SAP Supply Chain Specialist. Salary: $85,000–$130,000.",
        "SAP FICO (Financial Accounting & Controlling) – Critical for enterprise finance, compliance, and reporting. Roles: SAP FICO Consultant, Financial Analyst, SAP Accountant. Industries: Banking, insurance, retail, manufacturing.",
        "SAP HCM / SuccessFactors – Companies investing in digital HR transformation. Roles: HR Consultant, SAP HCM Specialist, SuccessFactors Analyst. Best for: HR professionals switching to SAP roles.",
        "SAP MM (Materials Management) – Essential for supply chain, procurement, and inventory management. Roles: SAP MM Consultant, Procurement Analyst, Supply Chain Specialist. Future scope: Integration with AI-based demand forecasting tools.",
        "SAP SD (Sales & Distribution) – Crucial for sales, billing, and customer experience management. Roles: SAP SD Consultant, Business Analyst, CRM Specialist. Industries: E-commerce, retail, FMCG, logistics.",
        "SAP ABAP (Advanced Business Application Programming) – Core programming module for customizing SAP applications. Roles: SAP ABAP Developer, SAP Technical Consultant. Scope: Cloud + AI integration.",
        "SAP BASIS & Security – Critical due to cybersecurity and cloud migrations. Roles: SAP BASIS Administrator, SAP Security Consultant. Hot trend: SAP Cloud Security with AI monitoring.",
        "SAP Analytics Cloud (SAC) – Data-driven decision-making is essential. Roles: BI Consultant, Data Analyst, SAP Analytics Specialist. Future scope: AI-driven predictive analytics.",
        "SAP EWM (Extended Warehouse Management) – Growing e-commerce and global trade require warehouse optimization. Roles: SAP EWM Consultant, Logistics Manager, Supply Chain Analyst. Industries: Logistics, manufacturing, retail.",
        "SAP Ariba (Procurement & Sourcing) – Cloud-based procurement solutions are a priority for global businesses. Roles: SAP Ariba Consultant, Procurement Manager, Vendor Specialist. Industries: Manufacturing, pharma, energy."
      ]
    },
    {
      "heading": "Skills That Make You a Top SAP Professional in 2025",
      "points": [
        "Strong domain knowledge (finance, HR, supply chain, etc.)",
        "Hands-on project experience",
        "Cloud & AI knowledge alongside SAP",
        "SAP certification from a recognized training provider"
      ]
    },
    {
      "heading": "Why Learn SAP Online with ICLP Tech?",
      "points": [
        "100% online courses – Learn at your own pace, anytime, anywhere.",
        "Industry-recognized certifications – Boost credibility with top employers.",
        "Real-time projects & case studies – Hands-on experience.",
        "Expert trainers – 10+ years of SAP industry expertise.",
        "Affordable pricing – Learn premium SAP modules without breaking the bank."
      ]
    },
    {
      "heading": "Final Thoughts",
      "points": [
        "Choosing the right SAP module in 2025 can skyrocket career opportunities and earning potential.",
        "Specialize in finance (FICO), HR (SuccessFactors), supply chain (MM, SD, EWM), or technical development (ABAP, BASIS).",
        "Start your SAP learning journey today with ICLP Tech and become an in-demand SAP professional in 2025."
      ]
    },
    {
      "heading": "FAQs – Most In-Demand SAP Modules",
      "faqs": [
        {
          "q": "Which SAP module is best for beginners in 2025?",
          "a": "SAP FICO and SAP MM are great for beginners as they cover finance and supply chain basics, offering wide career opportunities."
        },
        {
          "q": "What is the most in-demand SAP module in 2025?",
          "a": "SAP S/4HANA (Finance & Logistics), SAP FICO, and SAP SuccessFactors are the most in-demand SAP modules in 2025."
        },
        {
          "q": "Can I learn SAP online without prior IT experience?",
          "a": "Yes. Many SAP modules like FICO, MM, and HCM are suitable for learners without coding or IT backgrounds."
        },
        {
          "q": "How long does it take to learn SAP online?",
          "a": "On average, it takes 3–6 months to complete an SAP module online and gain job-ready skills."
        },
        {
          "q": "Why choose ICLP Tech for SAP courses?",
          "a": "ICLP Tech offers online SAP training with expert instructors, real-world projects, and certification at affordable prices."
        }
      ]
    }
  ],
  "metaTitle": "Most In-Demand SAP Modules to Learn Online in 2025 | ICLP",
  "metaDescription": "Discover the top SAP modules in 2025—FICO, S/4HANA, MM, SD & more. Learn online with ICLP Tech and boost your SAP career with certification courses.",
  "url": "https://iclp.com/blog/in-demand-sap-modules-2025"
},{
  "id": 6,
  "title": "Top Mistakes to Avoid When Choosing an SAP Online Course",
  "slug": "mistakes-to-avoid-choosing-sap-online-course",
  "image": "/blog-6.png",
  "intro": "SAP is one of the most powerful ERP solutions used by leading global enterprises. Choosing the right SAP online course can make or break your career. Avoid these common mistakes to save time, money, and ensure career growth.",
  "metaTitle": "Top Mistakes to Avoid When Choosing an SAP Online Course | ICLPTech",
  "metaDescription": "Don’t waste time on the wrong SAP course! Discover the top mistakes learners make when choosing SAP online training & how ICLPTech can help you succeed.",
  "url": "https://iclptech.in/blog/mistakes-to-avoid-choosing-sap-online-course",
  "sections": [
    {
      "heading": "Common Mistakes Learners Make When Choosing SAP Courses",
      "points": [
        "Ignoring the Accreditation & Certification – Choose SAP courses from accredited platforms like ICLPTech.",
        "Choosing Price Over Quality – Focus on updated content, hands-on training, and expert trainers.",
        "Overlooking Module Relevance – Select modules that match your career goals and background.",
        "Not Checking for Real-Time Projects – Look for courses with case studies and practical projects.",
        "Ignoring Trainer Experience – Learn from trainers with 10+ years of SAP industry experience.",
        "Overlooking Career Support & Placement Assistance – Opt for platforms that provide resume guidance, networking, and interview prep.",
        "Ignoring Flexibility & Learning Format – Choose self-paced or flexible online courses to balance work and learning."
      ]
    },
    {
      "heading": "Why Choose ICLPTech for SAP Online Courses?",
      "points": [
        "100% Online SAP Training – Learn at your own pace with live + recorded sessions.",
        "Industry-Recognized Certification – Trusted by top global employers.",
        "Real-Time Case Studies & Projects – Gain job-ready skills, not just theory.",
        "Expert Trainers with 10+ Years Experience – Learn from seasoned SAP professionals.",
        "Affordable Courses – Premium SAP training at competitive prices.",
        "Placement Assistance – Resume building, interview prep, and career guidance."
      ]
    },
    {
      "heading": "Final Thoughts",
      "points": [
        "Avoid common mistakes like ignoring certification, choosing the wrong module, or compromising on quality.",
        "Invest in a reliable training platform offering accredited courses, real-time projects, and career support.",
        "Start your SAP career today with ICLPTech SAP Online Courses."
      ]
    },
    {
      "heading": "FAQs – SAP Online Courses",
      "faqs": [
        {
          "q": "Which SAP module should I choose in 2025?",
          "a": "Choose based on your career path—SAP FICO for finance, MM/SD for supply chain, and SuccessFactors for HR."
        },
        {
          "q": "Are online SAP courses worth it?",
          "a": "Yes. Accredited SAP courses with certification, projects, and expert trainers can boost your career significantly."
        },
        {
          "q": "How long does it take to complete an SAP online course?",
          "a": "Most SAP modules take 3–6 months to complete, depending on the course structure and learning pace."
        },
        {
          "q": "What is the average salary of an SAP consultant in 2025?",
          "a": "SAP consultants earn between ₹6 LPA to ₹18 LPA in India, and globally $80K+ depending on experience and specialization."
        },
        {
          "q": "Why should I choose ICLPTech for SAP online training?",
          "a": "ICLPTech offers certified SAP training with real-time projects, flexible learning, affordable pricing, and placement support."
        }
      ]
    }
  ],
  "conclusion": "Your SAP career depends on the training program you choose. Avoid common mistakes and invest in accredited courses with hands-on projects and placement support. Start your SAP journey today with ICLPTech and become an in-demand SAP professional in 2025."
},{
  "id": 7,
  "title": "Step-by-Step Guide to Becoming SAP Certified Through Online Courses",
  "slug": "sap-certification-online-guide-2025",
  "image": "/blog-7.jpeg",
  "metaTitle": "Step-by-Step Guide to Becoming SAP Certified Through Online Courses | ICLP Tech",
  "metaDescription": "Boost your career with SAP certification! Follow this step-by-step guide to become SAP certified through flexible online courses with ICLP Tech.",
  "url": "https://iclptech.in/blog/sap-certification-online-guide-2025",
  "intro": "If you’re serious about boosting your career in enterprise software, SAP certification is one of the most recognized credentials in the IT and business world. From ERP to supply chain, finance, and analytics, SAP skills are in high demand. The good news? You don’t need to wait for an offline class—SAP online courses make certification accessible, flexible, and career-focused. In this guide, we’ll walk you through the exact steps to become SAP certified through online learning—so you can save time, cut costs, and start advancing your career faster.",
  "sections": [
    {
      "heading": "Why Choose SAP Online Courses?",
      "points": [
        "Flexibility – Learn anytime, anywhere, without disrupting your job schedule.",
        "Affordability – Online SAP courses often cost less than classroom programs.",
        "Certification Readiness – Top platforms align their modules with official SAP exam patterns.",
        "Practical Learning – Courses include hands-on projects, case studies, and simulations."
      ]
    },
    {
      "heading": "Step 1: Choose Your SAP Module",
      "points": [
        "SAP S/4HANA Finance",
        "SAP Sales & Distribution (SD)",
        "SAP Materials Management (MM)",
        "SAP SuccessFactors (HR & Talent Management)",
        "SAP ABAP Development"
      ],
      "note": "👉 Tip: Pick a module that matches your career goals and skills. Finance professionals can choose SAP FICO, while HR professionals can opt for SuccessFactors."
    },
    {
      "heading": "Step 2: Select a Reliable Online Training Provider",
      "points": [
        "Official SAP Learning Hub access or accredited material",
        "Instructor-led sessions + self-paced video modules",
        "Live SAP system access for practice",
        "Certification exam preparation",
        "Placement support or career guidance"
      ]
    },
    {
      "heading": "Step 3: Build a Structured Study Plan",
      "points": [
        "Dedicate 1–2 hours daily or weekends for study.",
        "Break down modules into milestones (e.g., finish FI basics in 2 weeks).",
        "Use practice questions and mock tests to track progress."
      ]
    },
    {
      "heading": "Step 4: Gain Hands-On SAP Experience",
      "points": [
        "Use your provider’s SAP sandbox system for real practice.",
        "Work on real-time projects or case studies (e.g., inventory management with SAP MM).",
        "Join SAP forums and communities to learn from real-world challenges."
      ]
    },
    {
      "heading": "Step 5: Prepare & Register for the SAP Certification Exam",
      "points": [
        "Review official SAP exam guides.",
        "Take timed practice tests to build confidence.",
        "Focus on key exam-weighted topics.",
        "Register for your chosen module exam on the SAP Training & Certification Shop."
      ]
    },
    {
      "heading": "Step 6: Earn & Showcase Your Certification",
      "points": [
        "Receive a digital SAP certification badge.",
        "Add it to your LinkedIn profile.",
        "Highlight it on your resume and portfolio websites.",
        "Increase your visibility with recruiters and employers."
      ]
    },
    {
      "heading": "Step 7: Keep Learning & Stay Certified",
      "points": [
        "Subscribe to SAP Learning Hub for updates.",
        "Attend webinars and workshops.",
        "Join SAP user groups for networking.",
        "Stay current with re-certification requirements."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Which SAP module is best for me?",
      "a": "Choose based on your career path—SAP FICO for finance, MM/SD for supply chain, SuccessFactors for HR, and ABAP for developers."
    },
    {
      "q": "Are SAP online courses worth it?",
      "a": "Yes! Accredited SAP online courses with projects and expert trainers can significantly boost your career."
    },
    {
      "q": "How long does it take to get SAP certified?",
      "a": "Most SAP modules take 3–6 months depending on the course and your learning pace."
    },
    {
      "q": "What is the salary of SAP certified professionals?",
      "a": "SAP consultants earn ₹6–18 LPA in India and $80K+ globally, based on module and experience."
    },
    {
      "q": "Does ICLP Tech provide placement support?",
      "a": "Yes. ICLP Tech offers resume guidance, interview prep, and career assistance along with SAP certification training."
    }
  ],
  "conclusion": "Becoming SAP certified through online courses is one of the smartest career investments you can make. By choosing the right module, enrolling in a trusted training provider, and committing to structured learning, you’ll unlock high-paying SAP career opportunities worldwide. 👉 Start today with ICLP Tech’s SAP Online Courses and take the first step toward SAP career success in 2025!"
},{
  "id": 8,
  "title": "Can You Learn SAP Online Without IT Background? Beginner-Friendly Options",
  "slug": "learn-sap-online-without-it-background",
  "image": "/blog-8.jpg",
  "metaTitle": "Can You Learn SAP Online Without IT Background? Beginner-Friendly SAP Training | ICLP Tech",
  "metaDescription": "Yes, you can learn SAP online without an IT background. Explore beginner-friendly SAP functional modules like FI, MM, SD, HR, and SuccessFactors. Start with ICLP Tech’s SAP training in Chennai.",
  "url": "https://iclptech.in/blog/learn-sap-online-without-it-background",
  "intro": "Are you interested in learning SAP but worried because you don’t have an IT background? Good news: you can learn SAP online without being a developer, programmer, or having deep technical knowledge. At ICLP Tech, a leading SAP online training institute in Chennai, we believe that many SAP functional modules are beginner-friendly. This post explains which modules suit non-IT professionals and how to succeed from scratch.",
  "sections": [
    {
      "heading": "1. What is SAP, and Why Does It Matter?",
      "points": [
        "SAP (Systems, Applications, and Products) is a suite of software used by global companies to manage business operations like finance, procurement, HR, and sales.",
        "SAP skills give you a strong career edge with demand for consultants across industries.",
        "Functional roles often need business knowledge more than coding, making them accessible to non-IT learners."
      ]
    },
    {
      "heading": "2. Do You Need an IT or Programming Background to Learn SAP?",
      "points": [
        "Technical modules (ABAP, BASIS, HANA) need IT skills.",
        "Functional modules (FI, CO, MM, SD, HR, SuccessFactors) focus on business processes, not coding.",
        "Non-IT professionals excel in functional modules by applying their domain knowledge."
      ]
    },
    {
      "heading": "3. Beginner-Friendly SAP Modules for Non-IT Professionals",
      "points": [
        "SAP FI / FICO – Financial accounting, AP/AR, general ledger.",
        "SAP MM – Purchasing, inventory, procurement, vendor management.",
        "SAP SD – Sales orders, deliveries, billing.",
        "SAP HR / HCM – Payroll, employee data, time management.",
        "SAP SuccessFactors – Cloud-based HR system, simple to use."
      ],
      "note": "👉 Choose a module based on your domain. Finance grads → FICO, Procurement → MM, Sales → SD, HR → HCM/SuccessFactors."
    },
    {
      "heading": "4. How to Start Learning SAP Online Without IT Background",
      "points": [
        "Identify your background and map it to an SAP module.",
        "Take beginner-friendly online courses like ICLP Tech’s SAP training in Chennai.",
        "Follow structured paths: basics → navigation → configuration → real projects.",
        "Learn with live classes, case studies, and video tutorials.",
        "Practice on SAP demo systems to gain confidence.",
        "Get certified to validate your expertise."
      ]
    },
    {
      "heading": "5. Benefits of Learning SAP Online for Non-IT Professionals",
      "points": [
        "Flexibility – Learn anytime, anywhere.",
        "Cost-effective – Online courses are budget-friendly.",
        "Replayability – Rewatch recorded sessions anytime.",
        "Business-focused – No coding stress, only real applications.",
        "Globally recognized SAP certification adds career value."
      ]
    },
    {
      "heading": "6. Common Challenges & How to Overcome Them",
      "points": [
        "Technical terminology → Use glossaries and analogies.",
        "Fear of coding → Stick to functional modules.",
        "Lack of practice → Use demo SAP systems regularly.",
        "Low motivation → Join peer groups, set clear goals."
      ]
    },
    {
      "heading": "7. Why Choose ICLP Tech’s SAP Training in Chennai?",
      "points": [
        "Expert trainers with real SAP + business knowledge.",
        "Beginner-friendly focus on FI, MM, SD, HR modules.",
        "Live classes, recordings, and case studies.",
        "1-on-1 mentorship and placement support.",
        "Industry-recognized SAP certification guidance."
      ]
    },
    {
      "heading": "8. Real Success Stories",
      "points": [
        "“As a commerce graduate, I completed SAP FICO training at ICLP Tech and became a Junior SAP FI Consultant.”",
        "“With my HR background, I chose SAP HCM. The step-by-step guidance made it easy for me to switch careers.”"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I learn SAP online without IT background?",
      "a": "Yes. Functional modules like FI, MM, SD, HR, and SuccessFactors are designed for business users and don’t require coding."
    },
    {
      "q": "Which SAP modules are best for beginners from non-IT backgrounds?",
      "a": "SAP FI, MM, SD, HR, and SuccessFactors are ideal for non-IT professionals."
    },
    {
      "q": "Do I need programming skills for SAP?",
      "a": "No. Only technical modules like ABAP require coding. Functional modules are business-oriented."
    },
    {
      "q": "Is SAP training useful for commerce and HR graduates?",
      "a": "Yes. Commerce grads thrive in SAP FICO, while HR professionals succeed in SAP HR/HCM and SuccessFactors."
    },
    {
      "q": "Does ICLP Tech provide SAP training with placement support?",
      "a": "Yes. ICLP Tech offers live training, mentorship, case studies, and placement guidance in Chennai."
    }
  ],
  "conclusion": "So, can you learn SAP online without an IT background? Absolutely. With beginner-friendly functional modules, structured training, and practice on demo systems, non-IT professionals can build strong SAP careers. 👉 Start today with ICLP Tech’s SAP online training in Chennai and transform your career in 2025!"
},,{
  "id": 9,
  "title": "SAP Online Courses with Certification: A Complete Guide",
  "slug": "sap-online-courses-with-certification-guide",
  "image": "/blog-9.png",
  "metaTitle": "SAP Online Courses with Certification | Best SAP Training & Platforms",
  "metaDescription": "Boost your career with the best SAP certification courses online. Explore SAP FICO online course with certification, online SAP courses in Chennai, and the best platforms to learn SAP online. Flexible, affordable & globally recognized SAP training.",
  "url": "https://iclptech.in/blog/sap-online-courses-with-certification-guide",
  "intro": "SAP skills are among the most in-demand in today’s digital world. From finance and logistics to supply chain and HR, SAP powers the backbone of many global organizations. For professionals and students aiming to boost their careers, SAP online courses with certification provide a flexible, affordable, and globally recognized way to gain expertise.",
  "sections": [
    {
      "heading": "1. What is SAP and Why is it Important?",
      "points": [
        "SAP (Systems, Applications, and Products) is one of the leading ERP solutions used across industries like manufacturing, retail, healthcare, and banking.",
        "Over 400,000 companies worldwide use SAP to streamline operations.",
        "SAP certifications validate your skills and increase credibility in the job market."
      ]
    },
    {
      "heading": "2. Types of SAP Courses Available Online",
      "points": [
        "Functional Modules – Business-focused (FI/CO, MM, SD, HR).",
        "Technical Modules – IT-focused (ABAP, Basis, HANA).",
        "Analytics & Cloud – SAP Analytics Cloud, SAP S/4HANA.",
        "Beginner vs Advanced – Choose modules based on your career goals."
      ]
    },
    {
      "heading": "3. Benefits of Learning SAP Online",
      "points": [
        "Flexibility – Learn at your own pace from anywhere.",
        "Cost-effective – More affordable than classroom training.",
        "Global Access – Learn from top trainers worldwide.",
        "Certification Recognition – SAP-certified professionals are highly valued."
      ]
    },
    {
      "heading": "4. How to Choose the Right SAP Online Course",
      "points": [
        "Define your career goals: functional vs. technical.",
        "Prefer SAP-authorized providers for valid certifications.",
        "Ensure hands-on access to SAP systems for real practice.",
        "Check reviews, ratings, and instructor expertise."
      ],
      "note": "👉 If you’re in India, many institutions offer SAP online courses in Chennai with flexible options."
    },
    {
      "heading": "5. SAP Certification Path: Step-by-Step Guide",
      "points": [
        "Associate Certification – Beginner level.",
        "Specialist Certification – Role-specific expertise.",
        "Professional Certification – Advanced consultant level.",
        "Exam Format: 180 mins, multiple-choice, online or test centers.",
        "Preparation: Use SAP Learning Hub, OpenSAP, and practice tests."
      ]
    },
    {
      "heading": "6. Best Platforms to Learn SAP Online",
      "points": [
        "SAP Learning Hub – Official training platform.",
        "OpenSAP – Free beginner & advanced courses.",
        "Coursera & Udemy – Affordable with flexible schedules.",
        "LinkedIn Learning – Quick SAP skill-building.",
        "Authorized SAP Training Partners – For certification prep."
      ]
    },
    {
      "heading": "7. Career Opportunities After SAP Certification",
      "points": [
        "Roles: SAP Consultant, Business Analyst, Project Manager, Basis Admin, Data & Cloud Specialist.",
        "Salary: Entry-level ₹4–6 LPA; Experienced ₹12–25 LPA+ in India.",
        "Globally: SAP-certified experts earn 20–30% higher salaries."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I learn SAP without IT background?",
      "a": "Yes. Functional modules like FICO, MM, SD, and HR are suitable for non-IT professionals."
    },
    {
      "q": "How long does it take to complete SAP certification?",
      "a": "Depending on the module, it usually takes 2–6 months of study."
    },
    {
      "q": "Is SAP certification worth it in 2025 and beyond?",
      "a": "Absolutely. With SAP S/4HANA and cloud ERP growth, SAP skills are more relevant than ever."
    }
  ],
  "conclusion": "Learning SAP online with certification is one of the smartest career moves in 2025. With flexible online training, recognized credentials, and strong job opportunities, SAP remains a top choice for professionals across industries. 👉 Start today with ICLP Tech’s SAP training and boost your career!"
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
