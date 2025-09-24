"use client";
import React, { useState } from "react";
import "./chatBot.css";
import SEO from "../SEO/SEO";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Predefined responses
  const responses = {
    hello:
      "Hello! Welcome to ICLP Technologies. How can we assist you with our courses today?",
    hi: "Hi there! Explore our courses in Programming, Web Development, Cloud Computing, and more. What interests you?",
    hey: "Hey! Ready to boost your skills? We offer 30+ courses across 9 categories. How can I help?",

    courses:
      "We offer comprehensive courses in:\n\n" +
      "• Programming (Java, Python, R, JavaScript, PHP)\n" +
      "• Web Development (Full Stack, Node.js, ReactJS)\n" +
      "• Cloud Computing & DevOps (Azure, AWS, DevOps)\n" +
      "• Cybersecurity & Ethical Hacking\n" +
      "• Software Testing (Selenium, JMeter, LoadRunner)\n" +
      "• Data Science & AI\n" +
      "• Digital Marketing & Excel\n" +
      "• UI/UX Design\n" +
      "• Salesforce CRM\n\n" +
      "Which course would you like to know more about?",

    programming:
      "Our Programming courses include:\n" +
      "• Java (35 hrs) - Master OOP and build applications\n" +
      "• Python (30 hrs) - For data analysis and web development\n" +
      "• JavaScript (27 hrs) - Build interactive web apps\n" +
      "All come with placement assurance and hands-on projects!",

    "web development":
      "Web Development offerings:\n" +
      "• Full Stack Developer (35 hrs) - Node.js + ReactJS\n" +
      "• ReactJS (28 hrs) - Build dynamic UIs\n" +
      "• Node.js (30 hrs) - Server-side JavaScript\n" +
      "Includes real projects like E-commerce websites",

    cloud:
      "Cloud Computing courses:\n" +
      "• Microsoft Azure (30 hrs) - Enterprise cloud solutions\n" +
      "• AWS (30 hrs) - Amazon Web Services mastery\n" +
      "• DevOps (35 hrs) - CI/CD pipelines and automation\n" +
      "Learn from industry experts with practical labs",

    cybersecurity:
      "Protect digital assets with:\n" +
      "• Cyber Security (35 hrs) - Defense strategies\n" +
      "• Ethical Hacking (35 hrs) - Offensive security\n" +
      "Includes hands-on penetration testing",

    "data science":
      "Transform data into insights:\n" +
      "• Data Science (35 hrs) - Pandas, Matplotlib, scikit-learn\n" +
      "• AI (35 hrs) - Neural networks, TensorFlow\n" +
      "Work on real-world predictive modeling projects",

    testing:
      "QA Engineering courses:\n" +
      "• Selenium (30 hrs) - Web automation testing\n" +
      "• JMeter (30 hrs) - Performance testing\n" +
      "• LoadRunner (30 hrs) - Enterprise load testing\n" +
      "Learn industry-standard testing tools",

    duration:
      "Course durations range from:\n" +
      "• 27-30 hours for foundational courses\n" +
      "• 35 hours for advanced programs\n" +
      "All include project work and flexible scheduling options",

    projects:
      "Every course includes practical projects:\n" +
      "• Programming: Build real applications\n" +
      "• Web Dev: Create portfolio-worthy websites\n" +
      "• Data Science: Work with real datasets\n" +
      "• Cybersecurity: Conduct security audits",

    placement:
      "Yes! All our courses come with placement assurance. We provide:\n" +
      "• Resume building workshops\n" +
      "• Interview preparation\n" +
      "• Job placement assistance\n" +
      "• Industry connections",

    contact:
      "Reach us at:\n" +
      "📞 86810 26181\n" +
      "📧 info@iclptechnologies.com\n" +
      "📍 [Your Institution Address]\n" +
      "🕘 Mon-Sat: 9AM-6PM",

    price:
      "Course fees start from ₹8,999\n" +
      "Special discounts available for:\n" +
      "• Students (20% off)\n" +
      "• Early registrations (15% off)\n" +
      "• Group enrollments (10% off)\n\n" +
      "Ask about our EMI options!",

    default:
      "I'm sorry, I didn't understand that. Here are some topics I can help with:\n" +
      "- Course information\n" +
      "- Duration and syllabus\n" +
      "- Fees and discounts\n" +
      "- Placement details\n" +
      "- Contact information\n\n" +
      "What would you like to know?",
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }]);

    // Generate bot response
    const userMessage = inputValue.toLowerCase();
    let botResponse = responses.default;

    Object.keys(responses).forEach((key) => {
      if (userMessage.includes(key)) {
        botResponse = responses[key];
      }
    });

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    setInputValue("");
  };

  return (
    <div className="chatbot-container">
      <SEO
        title="Unlimited Online Courses with User-Friendly Chatbot Support"
        description="Explore our wide range of online courses including Java, Python, R Programming, JavaScript, SAP, Oracle, and more. Get instant support with our user-friendly chatbot to guide you through course details, enrollment, and more. Enroll today and start learning with expert assistance every step of the way!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>ICLP TECHNOLOGIES</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
};

export default ChatBot;
