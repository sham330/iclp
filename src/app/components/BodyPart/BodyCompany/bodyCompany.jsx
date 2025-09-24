import React from "react";
import "../BodyCompany/bodyCompany.css"; // Ensure CSS file is linked

const CompanySection = () => {
  return (
    <div className="company-section">
      <div className="company-wrapper">
        {/* WHO WE ARE */}
        <div className="company-card">
          <h1 className="company-title">WHO WE ARE?</h1>
          <p className="company-text">
            We <strong>ICLP Technologies</strong> specialize in providing
            top-tier software training and placement services designed to equip
            individuals with the skills and knowledge needed to excel in today’s
            fast-paced tech industry. Our comprehensive programs are tailored to
            meet the unique needs of aspiring professionals, ensuring they are
            job-ready and highly competitive.
          </p>
        </div>

        {/* OUR VISION */}
        <div className="company-card">
          <h2 className="company-title">OUR VISION</h2>
          <p className="company-text">
            To be the most trusted platform for IT education and career
            transformation, enabling learners to thrive in the digital economy.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="company-card">
          <h2 className="company-title">OUR MISSION</h2>
          <p className="company-text">
            To provide high-quality, hands-on training in trending technologies.
            To bridge the gap between academic knowledge and industry
            requirements. To support every learner’s journey from student to
            successful IT professional.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div className="company-card">
          <h2 className="company-title">WHY CHOOSE US?</h2>
          <p className="company-text">
            At <strong>ICLP</strong>, we are committed to empowering individuals
            with industry-leading software training and real-world experience.
            Our expert mentors, with extensive hands-on industry knowledge,
            deliver top-quality training designed to help you master the latest
            technologies.
          </p>

          <ul className="company-list">
            <li>
              <strong> Comprehensive Training</strong> – Hands-on learning in
              trending technologies.
            </li>
            <li>
              <strong> Industry-Experienced Mentors</strong> – Learn from
              professionals with real-world expertise.
            </li>
            <li>
              <strong> Career Support</strong> – Resume building, interview
              preparation, and placement assistance.
            </li>
            <li>
              <strong> UG & PG Guidance</strong> – Support for students in
              choosing the right career path.
            </li>
          </ul>

          <p className="company-cta">
            At <strong>ICLP</strong>, we don’t just teach — we prepare you for
            success in the competitive job market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
