"use client";
import { useState } from "react";
import { Star, Play } from "lucide-react";
import "./testimonials.css";

const reels = [
  { id: 1, src: "https://www.youtube.com/embed/WaqdIrpAVH8", label: "Student Success Story" },

];

const testimonials = [
  {
    name: "Arun Kumar",
    course: "Full Stack Developer",
    company: "Infosys",
    stars: 5,
    text: "ICLP's training completely transformed my career. The hands-on projects and real-world scenarios gave me the confidence to crack my dream job at Infosys within 2 months of completing the course.",
  },
  {
    name: "Priya Sharma",
    course: "Data Science with Python",
    company: "TCS",
    stars: 5,
    text: "The trainers at ICLP are industry experts who go beyond the syllabus. The live sessions were interactive and the doubt-clearing support was available 24/7. Highly recommend!",
  },
  {
    name: "Mohammed Farhan",
    course: "AWS DevOps",
    company: "HCL Technologies",
    stars: 5,
    text: "I joined ICLP with zero cloud knowledge and completed the AWS DevOps course in 6 weeks. The structured curriculum and mock interviews helped me land a role at HCL with a 40% salary hike.",
  },
  {
    name: "Sneha Reddy",
    course: "React JS",
    company: "Wipro",
    stars: 5,
    text: "Excellent teaching methodology. The projects were industry-grade and the placement support team was very proactive. Got placed at Wipro within 3 weeks of course completion.",
  },
  {
    name: "Karthik Rajan",
    course: "Cyber Security",
    company: "Tech Mahindra",
    stars: 5,
    text: "The Cyber Security course content was up-to-date with the latest threats and tools. Practical labs and CEH preparation sessions were extremely valuable. Best investment I've made.",
  },
  {
    name: "Divya Menon",
    course: "Salesforce",
    company: "Accenture",
    stars: 5,
    text: "From basics to advanced Salesforce concepts, the trainer covered everything with real-time examples. The certification guidance was spot on. Cleared my exam in the first attempt!",
  },
];

function ReelCard({ reel }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = !!reel.src;
  const videoId = hasVideo ? reel.src.split("/embed/")[1] : null;
  const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <div className="reel-card relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg border-2 border-[#01377d] w-48">
      {hasVideo && playing ? (
        <iframe
          src={`${reel.src}?autoplay=1&rel=0&cc_load_policy=0&iv_load_policy=3&modestbranding=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      ) : hasVideo ? (
        <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(true)}>
          <img src={thumb} alt={reel.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black bg-opacity-60 flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center">
          <Play className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-gray-400 text-sm text-center px-4">Coming Soon</span>
        </div>
      )}
    </div>
  );
}

function ReelsGrid({ reels }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {reels.map((reel) => <ReelCard key={reel.id} reel={reel} />)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#01377d] via-[#01377d] to-[#014a9f] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#39FF14] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#97e7f5] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-[#39FF14] bg-opacity-20 border border-[#39FF14] rounded-full mb-6">
            <span className="text-[#39FF14] text-sm font-semibold">⭐ Real Stories, Real Results</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            What Our <span className="text-[#39FF14]">Students Say</span>
          </h1>
          <p className="text-lg text-[#97e7f5] max-w-2xl mx-auto">
            Hear directly from our learners — their journeys, breakthroughs, and career transformations.
          </p>
        </div>
      </section>

      {/* REELS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#01377d] mb-3">Student Reels</h2>
            <p className="text-gray-600">Watch real experiences shared by our students</p>
          </div>

          <div className="flex justify-center">
            <ReelsGrid reels={reels} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-[#01377d]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Students Trained" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Placement Rate" },
            { value: "500+", label: "Companies Hired" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-[#39FF14] mb-1">{stat.value}</div>
              <div className="text-[#97e7f5] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#01377d] mb-3">Success Stories</h2>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#39FF14] text-[#39FF14]" />
              ))}
            </div>
            <p className="text-gray-600">Rated 4.9/5 by 10,000+ students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#39FF14] hover:shadow-xl transition-all group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#39FF14] text-[#39FF14]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#01377d] to-[#014a9f] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#01377d]">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.course} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-[#01377d] to-[#014a9f] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#39FF14] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-[#97e7f5] mb-8 text-lg">
            Join thousands of students who transformed their careers with ICLP Technologies.
          </p>
          <button className="bg-[#39FF14] hover:bg-[#2ecc10] text-[#01377d] px-10 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </section> */}
    </main>
  );
}
