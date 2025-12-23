"use client";

import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaHandshake, FaGraduationCap } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1000, label: "Students Trained", icon: <FaUsers />, suffix: "+" },
  { value: 95, label: "Placement Rate", icon: <FaBullseye />, suffix: "%" },
  { value: 50, label: "Hiring Partners", icon: <FaHandshake />, suffix: "+" },
  { value: 24, label: "Learning Support", icon: <FaGraduationCap />, suffix: "/7" },
];

const AnimatedCounter = ({ value, suffix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      setCount(Math.floor(value * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
        hasAnimated.current = true;
      }
    };
    
    animate();
  }, [value, duration]);

  return (
    <span className="text-4xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const NewAbout = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 rounded-xl p-8 text-center hover:scale-105 transition-transform shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <div className="text-white text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                />
              </h3>
              <p className="text-[#97e7f5] font-medium text-lg group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
