"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./reviews.css";
import SEO from "../../SEO/SEO";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetching reviews from JSON file
    fetch("/data/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

  return (
    <section className="iclptech-reviews-container">
      <SEO
        title="Student Reviews – Best Online Learning Institute"
        description="Read real student reviews and success stories from our top-rated online courses. Discover why learners trust us for certifications, interview prep, and career growth."
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
        url="https://iclptech.in/reviews"
      />

      <div className="iclptech-reviews-header">
        <h2 className="iclptech-reviews-heading">
          We've heard{" "}
          <span className="iclptech-highlight-text">things like</span>
        </h2>
        <p className="iclptech-reviews-subtext">
          ICLP Technologies Reviews from students who have completed their
          training. Share your experiences, feedback, and testimonials with us.
        </p>
      </div>

      <div className="iclptech-reviews-grid">
        {reviews.map((review, index) => (
          <article className="iclptech-review-card" key={index}>
            <div className="iclptech-quote-icon">
              <FaQuoteLeft />
            </div>
            <blockquote className="iclptech-review-text">
              {review.review}
            </blockquote>
            <footer className="iclptech-review-footer">
              <div className="iclptech-profile-icon">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div className="iclptech-reviewer-info">
                <p className="iclptech-reviewer-name">{review.name}</p>
                <div className="iclptech-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.stars
                          ? "iclptech-star-filled"
                          : "iclptech-star-empty"
                      }
                    />
                  ))}
                </div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
