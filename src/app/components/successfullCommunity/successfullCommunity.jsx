"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaCheckCircle, FaBriefcase } from 'react-icons/fa';

const SuccessfulCommunity = () => {
  const [animatedValues, setAnimatedValues] = useState({
    value1: 0,
    value2: 0,
    value3: 0
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateValues = () => {
      const duration = 1500;
      const startTime = Date.now();
      const easeOutQuad = (t) => t * (2 - t);

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);

        setAnimatedValues({
          value1: Math.floor(easedProgress * 80),
          value2: Math.floor(easedProgress * 90),
          value3: Math.floor(easedProgress * 96)
        });

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setAnimatedValues({ value1: 0, value2: 0, value3: 0 });
            setTimeout(animateValues, 100);
          }, 5000);
        }
      };

      animate();
    };

    animateValues();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  const stats = [
    {
      icon: <FaUserGraduate size={40} />,
      value: animatedValues.value1,
      maxValue: 80,
      description: "Customers join ICLP by hearing success stories of our past students",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      progressColor: "stroke-emerald-500"
    },
    {
      icon: <FaCheckCircle size={40} />,
      value: animatedValues.value2,
      maxValue: 90,
      description: "Customers complete the course successfully without any delay",
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      progressColor: "stroke-red-600"
    },
    {
      icon: <FaBriefcase size={40} />,
      value: animatedValues.value3,
      maxValue: 96,
      description: "Customers get assured placement or build their portfolio",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
      progressColor: "stroke-amber-500"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-red-50/20 to-emerald-50/30 overflow-hidden"
    >
      {/* Subtle Christmas Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-red-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/30 via-red-400/30 via-amber-400/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 ">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Join our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600">
              Successful
            </span>{" "}
            Community
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-300"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-300"></div>
          </div>
        </div>

        {/* Stats Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              {/* Festive Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${stat.bgGradient} rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 group-hover:border-transparent">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/50 to-transparent rounded-bl-full"></div>

                <div className="flex flex-col items-center space-y-6">
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        className={stat.progressColor}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 90}`}
                        strokeDashoffset={`${2 * Math.PI * 90 * (1 - stat.value / 100)}`}
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                      />
                    </svg>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg mb-2`}>
                        {stat.icon}
                      </div>
                      <span className="text-4xl font-bold text-slate-900">
                        {stat.value}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-center text-slate-700 leading-relaxed text-base">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Border */}
    </div>
  );
};

export default SuccessfulCommunity;
