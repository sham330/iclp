"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Head from "./Head";

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
    <div className="min-h-screen bg-white">
      <Head />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We've heard{" "}
            <span className="text-[#39FF14]">things like</span>
          </h2>
          <p className="text-xl text-[#97e7f5] max-w-4xl mx-auto leading-relaxed">
            ICLP Technologies Reviews from students who have completed their
            training. Share your experiences, feedback, and testimonials with us.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-[#39FF14] hover:shadow-2xl transition-all group relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#39FF14] opacity-20 group-hover:opacity-40 transition-opacity">
                  <FaQuoteLeft className="text-5xl" />
                </div>

                {/* Review Text */}
                <blockquote className="relative z-10 mb-6">
                  <p className="text-slate-700 leading-relaxed text-base">
                    "{review.review}"
                  </p>
                </blockquote>

                {/* Reviewer Info */}
                <footer className="flex items-center gap-4 pt-6 border-t-2 border-slate-100">
                  {/* Profile Icon */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#01377d] to-[#014a9f] flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  {/* Name and Stars */}
                  <div className="flex-1">
                    <p className="font-bold text-[#01377d] text-lg mb-2">
                      {review.name}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.stars
                              ? "text-[#39FF14] text-lg"
                              : "text-slate-300 text-lg"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-slate-300 text-6xl mb-4">💬</div>
            <p className="text-2xl text-slate-400 font-semibold">
              Loading reviews...
            </p>
          </div>
        )}
      </section>

     

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-2">
                500+
              </div>
              <div className="text-[#97e7f5] font-semibold">
                Happy Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-2">
                4.9
              </div>
              <div className="text-[#97e7f5] font-semibold">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-2">
                95%
              </div>
              <div className="text-[#97e7f5] font-semibold">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-2">
                100%
              </div>
              <div className="text-[#97e7f5] font-semibold">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
