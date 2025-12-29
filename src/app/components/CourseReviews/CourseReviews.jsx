// import React, { useEffect, useState } from "react";
// import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./CourseReviews.css";

// const CourseReviewsSlider = ({ courseName }) => {
//   // State to store generated reviews
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Indian names dataset
//   const indianNames = [
//     "Aarav Sharma", "Aanya Patel", "Advait Joshi", "Ananya Gupta", "Arjun Singh",
//     "Diya Reddy", "Ishaan Kumar", "Kavya Mishra", "Reyansh Choudhary", "Saanvi Desai",
//     "Vihaan Malhotra", "Anika Agarwal", "Dhruv Saxena", "Ira Chatterjee", "Kabir Khanna",
//     "Myra Bajaj", "Pranav Mehra", "Riya Kapoor", "Shaurya Nair", "Tara Srinivasan",
//     "Aadi Iyer", "Kiara Menon", "Rudra Banerjee", "Zara Oberoi", "Yuvan Chopra",
//     "Avni Kapoor", "Eshaan Reddy", "Navya Chawla", "Rehan Malhotra", "Siya Mehra"
//   ];

//   // Roles based on course
//   const getRoles = (course) => {
//     const roles = {
//       "Java": ["Java Developer", "Backend Engineer", "Full Stack Developer", "Spring Boot Developer", "Software Engineer"],
//       "Python": ["Data Scientist", "Python Developer", "ML Engineer", "Data Analyst", "Automation Engineer"],
//       "SAP": ["SAP Consultant", "SAP Analyst", "SAP Developer", "SAP Administrator", "SAP Functional Consultant"],
//       "Data Science": ["Data Scientist", "ML Engineer", "AI Researcher", "Data Analyst", "Business Analyst"],
//       "default": ["Software Engineer", "IT Consultant", "System Analyst", "Developer", "Tech Lead"]
//     };
//     return roles[course] || roles["default"];
//   };

//   // Generate random reviews for a course
//   const generateReviews = (course) => {
//     const courseReviews = [];
//     const roles = getRoles(course);
//     const months = ["January", "February", "March", "April", "May", "June"];
//     const currentYear = new Date().getFullYear();

//     // Course-specific review templates
//     const templates = {
//       "Java": [
//         "The ${course} course helped me master Spring Boot and microservices. Got a ${rand(20,50)}% salary hike!",
//         "Excellent coverage of Java ${rand(8,17)} features. The ${rand(1,5)} projects were challenging but rewarding.",
//         "After this course, I landed a job at ${['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'][rand(0,4)]} as a ${roles[rand(0,roles.length-1)]}.",
//         "The ${['Hibernate', 'JPA', 'Spring Security', 'JDBC', 'JUnit'][rand(0,4)]} module was particularly valuable for my work at ${['Amazon', 'Google', 'Microsoft', 'Flipkart', 'Paytm'][rand(0,4)]}.",
//         "Perfect balance of theory and practical exercises. Completed ${rand(3,8)} real-world projects during the course."
//       ],
//       "Python": [
//         "The ${course} course helped me automate ${rand(50,90)}% of my daily tasks at ${['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'][rand(0,4)]}.",
//         "Learned ${['Pandas', 'NumPy', 'Django', 'Flask', 'TensorFlow'][rand(0,4)]} from scratch. Now using it daily in my role as ${roles[rand(0,roles.length-1)]}.",
//         "The ${rand(3,8)} projects were excellent preparation for my job at ${['Amazon', 'Google', 'Microsoft', 'Flipkart', 'Paytm'][rand(0,4)]}.",
//         "After completing this course, I got ${rand(2,5)} freelance projects on ${['Upwork', 'Fiverr', 'Freelancer', 'Toptal'][rand(0,3)]}.",
//         "The ${['data analysis', 'machine learning', 'web development', 'automation', 'API development'][rand(0,4)]} modules were game-changers for my career."
//       ],
//       "SAP": [
//         "The ${course} course helped me transition from ${['accounting', 'finance', 'HR', 'supply chain', 'IT'][rand(0,4)]} to SAP ${['FICO', 'MM', 'SD', 'PP', 'BW'][rand(0,4)]}.",
//         "After certification, I got ${rand(2,5)} job offers with ${rand(30,70)}% higher salary than my previous role.",
//         "The real-world ${rand(3,8)} case studies were exactly what I needed for my SAP ${['implementation', 'migration', 'upgrade', 'support'][rand(0,3)]} project.",
//         "Now working as ${roles[rand(0,roles.length-1)]} at ${['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'][rand(0,4)]} thanks to this course.",
//         "The ${['configuration', 'customization', 'testing', 'documentation', 'training'][rand(0,4)]} modules were particularly valuable for my SAP career."
//       ],
//       "Data Science": [
//         "The ${course} course helped me implement ${['machine learning', 'data visualization', 'predictive analytics', 'AI'][rand(0,3)]} at ${['Amazon', 'Google', 'Microsoft', 'Flipkart', 'Paytm'][rand(0,4)]}.",
//         "After this course, I got ${rand(2,5)} job offers with ${rand(40,80)}% salary increase in ${['Bangalore', 'Hyderabad', 'Pune', 'Gurgaon', 'Chennai'][rand(0,4)]}.",
//         "The ${rand(3,8)} projects using ${['Python', 'R', 'SQL', 'Tableau', 'Power BI'][rand(0,4)]} were excellent portfolio pieces.",
//         "Now working as ${roles[rand(0,roles.length-1)]} at ${['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'][rand(0,4)]} analyzing ${rand(5,20)}TB of data daily.",
//         "The ${['statistics', 'ML algorithms', 'data cleaning', 'feature engineering', 'model deployment'][rand(0,4)]} modules were career-changing."
//       ],
//       "default": [
//         "This ${course} course gave me the skills to transition into ${roles[rand(0,roles.length-1)]} role at ${['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'][rand(0,4)]}.",
//         "After completing the ${rand(3,8)} projects, I got ${rand(20,60)}% salary increase in my new job.",
//         "The ${['fundamentals', 'advanced topics', 'case studies', 'hands-on labs'][rand(0,3)]} were exactly what I needed for my career growth.",
//         "Now working at ${['Amazon', 'Google', 'Microsoft', 'Flipkart', 'Paytm'][rand(0,4)]} thanks to the skills from this course.",
//         "The certification helped me stand out in ${rand(5,20)} job interviews and get ${rand(2,5)} offers."
//       ]
//     };

//     // Helper function to generate random numbers
//     const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//     // Generate 300 unique reviews
//     for (let i = 0; i < 300; i++) {
//       const name = indianNames[rand(0, indianNames.length - 1)];
//       const role = roles[rand(0, roles.length - 1)];
//       const month = months[rand(0, months.length - 1)];
//       const template = (templates[course] || templates["default"])[rand(0, 4)];

//       // Process template with variables
//       const reviewText = template
//         .replace("${course}", course)
//         .replace("${rand(", "rand(")
//         .replace(/\${([^}]+)}/g, (match, p1) => eval(p1));

//       courseReviews.push({
//         id: i + 1,
//         name,
//         role,
//         review: reviewText,
//         stars: rand(4, 5), // Most reviews are 4-5 stars
//         date: `${month} ${currentYear}`
//       });
//     }

//     return courseReviews;
//   };

//   // Generate new reviews when course changes
//   useEffect(() => {
//     setLoading(true);
//     const generatedReviews = generateReviews(courseName);

//     // Shuffle and take 10 random reviews to display
//     const shuffled = [...generatedReviews].sort(() => 0.5 - Math.random());
//     setReviews(shuffled.slice(0, 10));
//     setLoading(false);
//   }, [courseName]);

//   const reviewHighlights = {
//     "Java": "4.9/5 (1,200+ learners)",
//     "Python": "4.8/5 (950+ learners)",
//     "SAP": "4.7/5 (800+ learners)",
//     "Data Science": "4.9/5 (1,100+ learners)",
//     "default": "4.8/5 (1,000+ learners)"
//   };

//   const courseHighlight = reviewHighlights[courseName] || reviewHighlights["default"];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: Math.min(3, reviews.length),
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: Math.min(2, reviews.length),
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   const CustomPrevArrow = (props) => (
//     <button
//       {...props}
//       className="cdrs-arrow cdrs-arrow-prev"
//       aria-label="Previous review"
//     >
//       <FaChevronLeft />
//     </button>
//   );

//   const CustomNextArrow = (props) => (
//     <button
//       {...props}
//       className="cdrs-arrow cdrs-arrow-next"
//       aria-label="Next review"
//     >
//       <FaChevronRight />
//     </button>
//   );

//   if (loading) {
//     return (
//       <section className="cdrs-section">
//         <div className="cdrs-container">
//           <div className="cdrs-header">
//             <h2 className="cdrs-title">Loading Reviews...</h2>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="cdrs-section">
//       <div className="cdrs-container">
//         <div className="cdrs-header">
//           <h2 className="cdrs-title">{courseName} <span>Reviews</span></h2>
//           <p className="cdrs-subtitle">Average rating: <strong>{courseHighlight}</strong></p>
//         </div>

//         <div className="cdrs-slider-container">
//           <Slider
//             {...sliderSettings}
//             prevArrow={<CustomPrevArrow />}
//             nextArrow={<CustomNextArrow />}
//           >
//             {reviews.map((review) => (
//               <div key={review.id} className="cdrs-review-card">
//                 <div className="cdrs-review-content">
//                   <FaQuoteLeft className="cdrs-review-quote" />
//                   <p className="cdrs-review-text">{review.review}</p>
//                   <div className="cdrs-review-rating">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar
//                         key={i}
//                         className={i < review.stars ? "cdrs-star-filled" : "cdrs-star-empty"}
//                       />
//                     ))}
//                     <span className="cdrs-rating-text">{review.stars}.0</span>
//                   </div>
//                 </div>
//                 <div className="cdrs-review-footer">
//                   <div className="cdrs-reviewer-avatar">
//                     {review.name.charAt(0)}
//                   </div>
//                   <div className="cdrs-reviewer-info">
//                     <h4 className="cdrs-reviewer-name">{review.name}</h4>
//                     <p className="cdrs-reviewer-role">{review.role}</p>
//                     <p className="cdrs-review-date">{review.date}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseReviewsSlider;
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const CourseReviewsSlider = ({ courseName = "Java" }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const indianNames = [
    "Aarav Sharma",
    "Aanya Patel",
    "Advait Joshi",
    "Ananya Gupta",
    "Arjun Singh",
    "Diya Reddy",
    "Ishaan Kumar",
    "Kavya Mishra",
    "Reyansh Choudhary",
    "Saanvi Desai",
    "Vihaan Malhotra",
    "Anika Agarwal",
    "Dhruv Saxena",
    "Ira Chatterjee",
    "Kabir Khanna",
    "Myra Bajaj",
    "Pranav Mehra",
    "Riya Kapoor",
    "Shaurya Nair",
    "Tara Srinivasan",
  ];

  const getRoles = (course) => {
    const roles = {
      Java: [
        "Java Developer",
        "Backend Engineer",
        "Full Stack Developer",
        "Spring Boot Developer",
        "Software Engineer",
      ],
      Python: [
        "Data Scientist",
        "Python Developer",
        "ML Engineer",
        "Data Analyst",
        "Automation Engineer",
      ],
      SAP: [
        "SAP Consultant",
        "SAP Analyst",
        "SAP Developer",
        "SAP Administrator",
        "SAP Functional Consultant",
      ],
      "Data Science": [
        "Data Scientist",
        "ML Engineer",
        "AI Researcher",
        "Data Analyst",
        "Business Analyst",
      ],
      default: [
        "Software Engineer",
        "IT Consultant",
        "System Analyst",
        "Developer",
        "Tech Lead",
      ],
    };
    return roles[course] || roles["default"];
  };

  const generateReviews = (course) => {
    const courseReviews = [];
    const roles = getRoles(course);
    const months = ["January", "February", "March", "April", "May", "June"];
    const currentYear = new Date().getFullYear();
    const companies = ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant"];
    const techCompanies = ["Amazon", "Google", "Microsoft", "Flipkart", "Paytm"];

    const templates = {
      Java: [
        `The ${course} course helped me master Spring Boot and microservices. Got a significant salary hike!`,
        `Excellent coverage of Java features. The projects were challenging but rewarding.`,
        `After this course, I landed a job at ${companies[Math.floor(Math.random() * companies.length)]}.`,
        `Perfect balance of theory and practical exercises. Completed multiple real-world projects.`,
        `The training prepared me well for my role at ${techCompanies[Math.floor(Math.random() * techCompanies.length)]}.`,
      ],
      Python: [
        `The ${course} course helped me automate most of my daily tasks at work.`,
        `Learned essential Python frameworks from scratch. Now using them daily in my role.`,
        `The projects were excellent preparation for my current job.`,
        `After completing this course, I secured multiple freelance projects.`,
        `The modules were game-changers for my career advancement.`,
      ],
      default: [
        `This ${course} course gave me the skills to transition into my current role.`,
        `After completing the projects, I received a substantial salary increase.`,
        `The training was exactly what I needed for my career growth.`,
        `Now working at a leading tech company thanks to this course.`,
        `The certification helped me stand out in job interviews.`,
      ],
    };

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < 10; i++) {
      const name = indianNames[rand(0, indianNames.length - 1)];
      const role = roles[rand(0, roles.length - 1)];
      const month = months[rand(0, months.length - 1)];
      const templateList = templates[course] || templates["default"];
      const reviewText = templateList[rand(0, templateList.length - 1)];

      courseReviews.push({
        id: i + 1,
        name,
        role,
        review: reviewText,
        stars: rand(4, 5),
        date: `${month} ${currentYear}`,
      });
    }

    return courseReviews;
  };

  useEffect(() => {
    setLoading(true);
    const generatedReviews = generateReviews(courseName);
    setReviews(generatedReviews);
    setLoading(false);
  }, [courseName]);

  const reviewHighlights = {
    Java: "4.9/5 (1,200+ learners)",
    Python: "4.8/5 (950+ learners)",
    SAP: "4.7/5 (800+ learners)",
    "Data Science": "4.9/5 (1,100+ learners)",
    default: "4.8/5 (1,000+ learners)",
  };

  const courseHighlight = reviewHighlights[courseName] || reviewHighlights["default"];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">Loading Reviews...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
           <span className="text-blue-600">Reviews</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Average rating: <strong className="text-blue-700">{courseHighlight}</strong>
          </p>
        </div>

        {/* Mobile View - Single Card */}
        <div className="block lg:hidden relative">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600">
            <Quote className="w-10 h-10 text-blue-200 mb-4" />
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              {reviews[currentIndex]?.review}
            </p>
            
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < reviews[currentIndex]?.stars
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm font-semibold text-gray-700 ml-1">
                {reviews[currentIndex]?.stars}.0
              </span>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                {reviews[currentIndex]?.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">
                  {reviews[currentIndex]?.name}
                </h4>
                <p className="text-sm text-blue-600 truncate">
                  {reviews[currentIndex]?.role}
                </p>
                <p className="text-xs text-gray-500">
                  {reviews[currentIndex]?.date}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop View - Three Cards */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={review?.id || idx}
                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600 transition-transform hover:scale-105"
              >
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <p className="text-gray-700 text-sm mb-6 leading-relaxed h-24 overflow-hidden">
                  {review?.review}
                </p>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review?.stars
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1">
                    {review?.stars}.0
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {review?.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">
                      {review?.name}
                    </h4>
                    <p className="text-xs text-blue-600 truncate">
                      {review?.role}
                    </p>
                    <p className="text-xs text-gray-500">
                      {review?.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseReviewsSlider;