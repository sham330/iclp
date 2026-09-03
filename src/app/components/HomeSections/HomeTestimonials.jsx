"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Play, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Jeeva",
    review: "I have completed my AWS Course at ICLP Technologies. Sanjib is a really good trainer. He took the time to solve my doubts and explained all the concepts very well.",
    stars: 4,
  },
  {
    name: "Shilpa",
    review: "I went for DevOps training at ICLP Technologies. My trainer Seeman gave clear examples for each concept and provided individual attention. Thanks to ICLP Technologies.",
    stars: 5,
  },
  {
    name: "Rajesh",
    review: "I had a great experience learning Python at ICLP Technologies. The instructor was very knowledgeable and supportive throughout the course.",
    stars: 4,
  },
  {
    name: "Priya",
    review: "The Data Science course at ICLP Technologies was insightful. The hands-on sessions helped me grasp the concepts better. Highly recommend this training institute.",
    stars: 5,
  },
  {
    name: "Arun",
    review: "The Full Stack Development program at ICLP exceeded my expectations. Practical projects and mock interviews prepared me perfectly for job placements. Excellent faculty!",
    stars: 5,
  },
  {
    name: "Meena",
    review: "ICLP's Cloud Computing course transformed my career. The lab sessions with real-world scenarios were particularly valuable. Got placed within a month of completion!",
    stars: 4,
  },
];

const videoStories = [
  { id: "d3u-3mpwftw", label: "Student Success Story" },
  { id: "q4FytP95PQQ", label: "Student Success Story" },
  { id: "KkDINvLDJco", label: "Student Success Story" },
  { id: "XgG9miWnX1k", label: "Student Success Story" },
];

function ReviewCard({ review }) {
  return (
    <article className="relative rounded-2xl border border-[#01377d]/10 bg-white p-6 shadow-xl shadow-[#01377d]/10 sm:p-8">
      <Quote className="absolute right-6 top-6 h-12 w-12 text-[#00a878]/15" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#01377d] to-[#00a878] text-lg font-bold text-white">
            {review.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#01377d]">{review.name}</h3>
            <div className="mt-1 flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className={`h-4 w-4 ${index < review.stars ? "fill-[#00a878] text-[#00a878]" : "text-slate-200"}`} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          “{review.review}”
        </blockquote>
      </div>
    </article>
  );
}

function VideoStory({ id, label }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-[#01377d]/20 bg-[#020c2b] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878] hover:shadow-xl hover:shadow-[#00a878]/10 motion-reduce:transition-none motion-reduce:hover:transform-none">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 h-full w-full"
          title={label}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7ff0c9]"
          aria-label={`Play ${label}`}
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={label}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#01377d]/90 text-white shadow-lg transition-colors duration-200 hover:bg-[#00a878] motion-reduce:transition-none">
            <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function HomeTestimonials() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  const showPrevious = () => setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  const showNext = () => setActiveReview((current) => (current + 1) % reviews.length);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-flex rounded-full border border-[#7ff0c9]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#7ff0c9] shadow-sm">
            Student Stories
          </p>
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Student Success Stories
          </h2>
          <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">From Learning to Career</h3>
          <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
            Hear directly from learners about their training experience, projects, instructors and career journey.
          </p>
        </header>

        <div className="mt-14 border-b border-white/15 pb-14 sm:mt-16 sm:pb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Video Stories</h3>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {videoStories.map((story) => (
              <VideoStory key={story.id} {...story} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Learner Reviews</h3>
          <div className="relative">
            <ReviewCard review={review} />
            <button
              type="button"
              onClick={showPrevious}
              className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#01377d] shadow-md transition-colors duration-200 hover:bg-[#01377d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-2 sm:-left-5 motion-reduce:transition-none"
              aria-label="Previous student story"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#01377d] shadow-md transition-colors duration-200 hover:bg-[#01377d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a878] focus-visible:ring-offset-2 sm:-right-5 motion-reduce:transition-none"
              aria-label="Next student story"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Student stories">
            {reviews.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveReview(index)}
                className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff0c9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01377d] motion-reduce:transition-none ${index === activeReview ? "w-8 bg-[#7ff0c9]" : "w-2 bg-white/40"}`}
                aria-label={`Show ${item.name}'s review`}
                aria-selected={index === activeReview}
                role="tab"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
