"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Briefcase,
  ShieldCheck,
  Zap,
  Star,
  Clock,
  Globe
} from "lucide-react";

const features = [
  {
    title: "Experienced Expert Instructors",
    icon: GraduationCap,
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Assured 100% Placement Support",
    icon: Award,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Industry Focused Curriculum",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Dedicated Mentor Connect",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Best Industry Projects",
    icon: Briefcase,
    color: "from-rose-500 to-pink-600"
  },
];

export default function WhyInventateq() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Why <span className="text-[#01377d]">ICLP</span> is the best?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Inventateq delivers India's best training with guaranteed career placement and industry-ready skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-center shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full`}>
                
                {/* Icon Ring Effect */}
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 w-24 h-24 bg-white/20 rounded-2xl blur-xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative w-20 h-20 mx-auto bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon 
                      size={40} 
                      strokeWidth={2} 
                      className="text-gray-900 drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:scale-105 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
