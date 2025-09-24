import React from "react";
import "./processChart.css";
import SEO from "../SEO/SEO";

const ProgramRoadmap = () => {
  const steps = [
    {
      number: "01",
      title: "Career Consultation",
      points: [
        "Free one-on-one counseling",
        "Identifying the right IT course based on interest & background",
      ],
      icon: "💬",
    },
    {
      number: "02",
      title: "Course Enrollment",
      points: [
        "Flexible course plans (Weekend/Weekday/Online)",
        "Language options available",
      ],
      icon: "📝",
    },
    {
      number: "03",
      title: "Training & Mentorship",
      points: [
        "Hands-on training by industry experts",
        "Real-time project guidance",
        "Personalized doubt-clearing sessions",
      ],
      icon: "👨‍🏫",
    },
    {
      number: "04",
      title: "Resume + Interview Prep",
      points: [
        "Professional resume building",
        "Mock interviews & HR grooming",
        "Job-specific profile customization",
      ],
      icon: "📄",
    },
    {
      number: "05",
      title: "Placement Assist",
      points: [
        "100% placement assistance",
        "Interview scheduling with partnered companies",
        "Support until placement confirmation",
      ],
      icon: "💼",
    },
    {
      number: "06",
      title: "Certification",
      points: ["ISO-certified course completion certificate"],
      icon: "🏆",
    },
  ];

  return (
    <div className="roadmap-container">
      <SEO
        title="Our Success Journey – Step-by-Step Student Growth Process"
        description="Explore our success line process chart that outlines every step of our student journey—from enrollment to certification, placement, and career growth. See how we guide learners to success through structured learning paths."
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/"
      />

      <div className="roadmap-background"></div>

      <div className="roadmap-content">
        <h2 className="roadmap-heading">
          Program <span className="roadmap-highlight">Roadmap</span>
        </h2>

        {/* Desktop Layout - Original 1-2-3-6-5-4 */}
        <div className="roadmap-desktop-layout">
          {/* Top Row */}
          <div className="roadmap-row roadmap-top-row">
            {steps.slice(0, 3).map((step, index) => (
              <React.Fragment key={`top-${index}`}>
                <div className="roadmap-step">
                  <div className="roadmap-step-content">
                    <div className="roadmap-step-header">
                      <div className="roadmap-step-number">{step.number}</div>
                      <div className="roadmap-step-icon">{step.icon}</div>
                    </div>
                    <h3 className="roadmap-title">{step.title}</h3>
                    <ul className="roadmap-list">
                      {step.points.map((point, i) => (
                        <li key={i} className="roadmap-list-item">
                          <span className="roadmap-bullet"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < 2 && (
                    <div className="roadmap-connector roadmap-horizontal"></div>
                  )}
                </div>
                {index === 2 && (
                  <div className="roadmap-connector roadmap-vertical"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Row - Reversed Order (6-5-4) */}
          <div className="roadmap-row roadmap-bottom-row">
            {[...steps.slice(3)].reverse().map((step, index) => (
              <React.Fragment key={`bottom-${index}`}>
                <div className="roadmap-step">
                  <div className="roadmap-step-content">
                    <div className="roadmap-step-header">
                      <div className="roadmap-step-number">{step.number}</div>
                      <div className="roadmap-step-icon">{step.icon}</div>
                    </div>
                    <h3 className="roadmap-title">{step.title}</h3>
                    <ul className="roadmap-list">
                      {step.points.map((point, i) => (
                        <li key={i} className="roadmap-list-item">
                          <span className="roadmap-bullet"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < 2 && (
                    <div className="roadmap-connector roadmap-horizontal"></div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Sequential 1-2-3-4-5-6 */}
        <div className="roadmap-mobile-layout">
          {steps.map((step, index) => (
            <React.Fragment key={`mobile-${index}`}>
              <div className="roadmap-step">
                <div className="roadmap-step-content">
                  <div className="roadmap-step-header">
                    <div className="roadmap-step-number">{step.number}</div>
                    <div className="roadmap-step-icon">{step.icon}</div>
                  </div>
                  <h3 className="roadmap-title">{step.title}</h3>
                  <ul className="roadmap-list">
                    {step.points.map((point, i) => (
                      <li key={i} className="roadmap-list-item">
                        <span className="roadmap-bullet"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="roadmap-connector roadmap-vertical-mobile"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramRoadmap;