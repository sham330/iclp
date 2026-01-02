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
    <section className="bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20">
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
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01377d] to-blue-600">ICLP</span> is the best?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICLP delivers India's best training with guaranteed career placement and industry-ready skills.
          </p>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-300"></div>
          </div>
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
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-xl p-6 text-center border-2 border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300"></div>
              
              {/* GIF Container with Blue Accent */}
              <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={item.gif}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>


              {/* Title */}
              <h3 className="relative text-base font-semibold text-gray-900 group-hover:text-[#01377d] transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01377d] to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
