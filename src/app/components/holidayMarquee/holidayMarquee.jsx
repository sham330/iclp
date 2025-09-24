"use client";
import React, { useState, useEffect } from "react";
import "./holidayMarquee.css";
import SEO from "../SEO/SEO";

const HolidayMarquee = () => {
  const [currentHoliday, setCurrentHoliday] = useState(null);
  const [nextHoliday, setNextHoliday] = useState(null);

  const indiaHolidays = [
    { name: "New Year's Day", date: "2025-01-01" },
    { name: "Pongal", date: "2025-01-14" },
    { name: "Republic Day", date: "2025-01-26" },
    { name: "Mahashivratri", date: "2025-02-26" },
    { name: "Holi", date: "2025-03-14" },
    { name: "Good Friday", date: "2025-04-18" },
    { name: "Ram Navami", date: "2025-04-06" },
    { name: "May Day", date: "2025-05-01" },
    { name: "Eid al-Adha", date: "2025-06-06" },
    { name: "Independence Day", date: "2025-08-15" },
    { name: "Ganesh Chaturthi", date: "2025-08-27" },
    { name: "Gandhi Jayanti", date: "2025-10-02" },
    { name: "Dussehra", date: "2025-10-02" },
    { name: "Diwali", date: "2025-10-20" },
    { name: "Christmas", date: "2025-12-25" },
  ];

  useEffect(() => {
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const current = indiaHolidays.find((h) => h.date === todayStr);
    if (current) {
      setCurrentHoliday(current);
      setNextHoliday(null);
    } else {
      const upcoming =
        indiaHolidays.find((h) => h.date >= todayStr) || indiaHolidays[0];
      setNextHoliday(upcoming);
    }
  }, []);

  const formatDate = (dateStr) => {
    const options = { day: "numeric", month: "long" };
    return new Date(dateStr).toLocaleDateString("en-IN", options);
  };

  const getMarqueeContent = () => {
    if (currentHoliday) {
      return (
        <>
          <span className="holiday-icon">🎉</span>
          <span className="holiday-text">
            <strong>Today is {currentHoliday.name}!</strong> Celebrate with us -
            <span className="highlight-offer"> 10% OFF</span> on all courses!
            Limited time offer valid today only. Use code
            <span className="promo-code"> HOLIDAY10</span> at checkout.
          </span>
          <span className="holiday-icon">🎉</span>
        </>
      );
    } else if (nextHoliday) {
      return (
        <>
          <span className="holiday-icon">🗓️</span>
          <span className="holiday-text">
            <strong>
              Next holiday: {nextHoliday.name} on {formatDate(nextHoliday.date)}
            </strong>{" "}
            - Get ready for our special{" "}
            <span className="highlight-offer">10% holiday discount</span>! Mark
            your calendar and save with code{" "}
            <span className="promo-code">HOLIDAY10</span>.
          </span>
          <span className="holiday-icon">🗓️</span>
        </>
      );
    } else {
      return (
        <span className="holiday-text">
          Special <span className="highlight-offer">10% discount</span> on all
          government holidays! Check our holiday schedule for upcoming offers.
        </span>
      );
    }
  };

  return (
    <div className="holiday-marquee-container">
      <SEO
        title="Special Festival Offers – Enroll in Online Courses with Discounts"
        description="Celebrate the season with our exclusive festival offers! Get special discounts on top-rated online courses. Limited-time festival deals on certifications, training, and more—hurry, book now!"
      />

      <div className="holiday-marquee-track">
        <div className="holiday-marquee-content">{getMarqueeContent()}</div>
      </div>
    </div>
  );
};

export default HolidayMarquee;
