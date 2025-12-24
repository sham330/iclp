"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Experienced Expert Instructors",
    gif: "/instructor.gif"
  },
  {
    title: "Assured 100% Placement Support",
    gif: "/placement.gif"
  },
  {
    title: "Industry Focused Curriculum",
    gif: "/curriculam.gif"
  },
  {
    title: "Dedicated Mentor Connect",
    gif: "/mentor.gif"
  },
  {
    title: "Best Industry Projects",
    gif: "/projects.gif"
  },
];

export default function WhyInventateq() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#01377d]">ICLP</span> is the best?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICLP delivers India's best training with guaranteed career placement and industry-ready skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-[#01377d] transition-colors duration-300"
            >
              {/* GIF */}
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src={item.gif}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}