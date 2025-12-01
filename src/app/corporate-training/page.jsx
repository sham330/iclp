"use client";

import Image from "next/image";
import { CheckCircle, Users, Award, BookOpen, Clock, TrendingUp, Star } from "lucide-react";

export default function CorporateTraining() {
  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#01377d] via-[#01377d] to-[#014a9f] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#39FF14] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#97e7f5] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 bg-[#39FF14] bg-opacity-20 border border-[#39FF14] rounded-full mb-6">
              <span className="text-[#39FF14] text-sm font-semibold">🚀 Transform Your Workforce</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Build Stronger Teams with{" "}
              <span className="text-[#39FF14]">Customized Training</span>
            </h1>
            <p className="text-lg text-[#97e7f5] mb-8 leading-relaxed">
              Unlock your team's potential with industry-leading training programs designed to drive growth and innovation in your organization.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#39FF14] hover:bg-[#2ecc10] text-[#01377d] px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Enquire Now
              </button>
              <button className="border-2 border-[#97e7f5] hover:bg-[#97e7f5] hover:text-[#01377d] text-white px-8 py-4 rounded-lg font-semibold transition-all">
                View Programs
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#97e7f5] border-opacity-30">
              <div>
                <div className="text-3xl font-bold text-[#39FF14]">500+</div>
                <div className="text-sm text-[#97e7f5]">Companies Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#39FF14]">10K+</div>
                <div className="text-sm text-[#97e7f5]">Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#39FF14]">98%</div>
                <div className="text-sm text-[#97e7f5]">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#39FF14] rounded-2xl blur-2xl opacity-20"></div>
            <img
              src="/Corprate.jpg"
              alt="Corporate Trainer"
            
              className=" w-[550px] h-[650px] rounded-2xl object-cover relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#01377d] mb-4">
              Why Choose Credo Systemz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empower your organization with comprehensive training solutions that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Customized Training Programs",
                desc: "Tailored according to your organization's skill matrix and business objectives.",
                color: "#39FF14"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Industry Recognised Certification",
                desc: "Comprehensive training programs validated by industry leaders.",
                color: "#97e7f5"
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Interactive Learning Methods",
                desc: "Hands-on sessions, real-time projects & case studies.",
                color: "#39FF14"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "24/7 Expert Support",
                desc: "Trainer support, doubt solving & career mentoring.",
                color: "#97e7f5"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#39FF14] hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}20`, color: i % 2 === 0 ? '#39FF14' : '#97e7f5' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#01377d] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING MODES */}
      <section className="py-20 bg-[#01377d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Training Delivery
            </h2>
            <p className="text-lg text-[#97e7f5]">
              Choose the learning format that works best for your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 backdrop-blur-lg border border-[#97e7f5] border-opacity-30 rounded-2xl p-10">
              <div className="w-14 h-14 bg-[#39FF14] bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Online Training</h3>
              <ul className="space-y-3">
                {[
                  "Live interactive sessions",
                  "Recorded lectures for review",
                  "Virtual hands-on labs",
                  "Global accessibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#97e7f5]">
                    <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-lg border border-[#97e7f5] border-opacity-30 rounded-2xl p-10">
              <div className="w-14 h-14 bg-[#97e7f5] bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#97e7f5]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Offline Training</h3>
              <ul className="space-y-3">
                {[
                  "On-site instructor-led training",
                  "Face-to-face interaction",
                  "Team building activities",
                  "Customized schedules"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#97e7f5]">
                    <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT TRAINING */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#01377d] mb-16">
            Recent Corporate Training
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            <div>
              <div className="inline-block px-4 py-2 bg-[#39FF14] bg-opacity-10 border border-[#39FF14] rounded-full mb-4">
                <span className="text-[#01377d] text-sm font-semibold">Featured Program</span>
              </div>
              <h3 className="text-3xl font-bold text-[#01377d] mb-4">Angular Training</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Angular Corporate Training offers the best industrial standard curriculum designed to transform your team into full-stack development experts with hands-on projects and real-world applications.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#01377d]">5 Days</div>
                  <div className="text-sm text-gray-500">Duration</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-[#01377d]">25+</div>
                  <div className="text-sm text-gray-500">Participants</div>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-500 mb-2 block">Training Partner:</span>
                <img
                  src="/infosys.jpg"
                  alt="Infosys logo"
                 
                  className="w-[120px] h-[60px]  grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative group overflow-hidden rounded-xl">
                  <img
                    src={`/recent-coporate.webp`}
                    
                    alt="Training"
                    className="w-[300px] h-[200px] rounded-xl object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01377d] to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#01377d] to-[#014a9f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#39FF14] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Maximize Efficiency in Your Organisation
            </h2>
            <p className="text-lg text-[#97e7f5] mb-8 leading-relaxed">
              Upskill your workforce with on-demand curriculum tailored to your business needs. Drive innovation, boost productivity, and stay ahead in the competitive market.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Flexible scheduling options",
                "Custom curriculum development",
                "Post-training support",
                "Performance tracking & analytics"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                  <span className="text-[#97e7f5]">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#39FF14] hover:bg-[#2ecc10] text-[#01377d] px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Enquire Now
            </button>
          </div>

          <div className="flex gap-6">
            {[1, 2].map((num) => (
              <div key={num} className="flex-1 relative group">
                <div className="absolute inset-0 bg-[#39FF14] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <image
                  src={`/recent-coporate.webp`}
                 
                  alt="training"
                  className="w-[260px] h-[340px] rounded-2xl object-cover w-full h-96 relative z-10 shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#01377d] mb-4">Our Corporate Partners</h2>
          <p className="text-gray-600 mb-16">Trusted by industry leaders worldwide</p>
          
          <div className="flex flex-wrap justify-center items-center gap-16">
            {["accenture", "hcl", "infosys", "tcs", "techmahindra"].map((item) => (
              <div key={item} className="group">
              <img
  src="/tech-mahindra.jpg"
  alt={item}
  className="w-[140px] h-[70px] object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
/>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#01377d] mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#39FF14] text-[#39FF14]" />
              ))}
            </div>
            <p className="text-gray-600">Rated 4.9/5 by 200+ organizations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "An excellent place to learn cutting-edge technologies. The training methodology is outstanding and the trainers are highly experienced professionals who bring real-world insights to every session.",
                author: "CEO",
                company: "Tidalwave Infotech"
              },
              {
                text: "I would like to thank my trainer for the exceptional guidance and support. The curriculum was comprehensive and the hands-on approach helped our team master complex concepts quickly.",
                author: "CTO",
                company: "Jasmin Infotech Pvt Ltd"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#97e7f5] hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#39FF14] text-[#39FF14]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14] to-[#97e7f5]"></div>
                  <div>
                    <h4 className="font-bold text-[#01377d]">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}