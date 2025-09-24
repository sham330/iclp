"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import '../successfullCommunity/successfullCommunity.css';

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
          // Animation complete, wait 5 seconds and restart
          setTimeout(() => {
            setAnimatedValues({ value1: 0, value2: 0, value3: 0 });
            setTimeout(animateValues, 100); // Small delay before restarting
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

  return (
    <div className="successful-community" ref={sectionRef}>
      <h2 className="section-title">Join our <span className="highlight">Successful</span> Community</h2>
      
      <div className="stats-container">
        <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-circle">
            <div className="circle-icon">
              <FaUserGraduate size={40} />
            </div>
            <span className="percentage">{animatedValues.value1}%</span>
            <div className="circle-progress" style={{ '--progress': 80 }}></div>
          </div>
          <p className="stat-description">Customers join ICLP by hearing success stories of our past students</p>
        </div>
        
        <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-circle">
            <div className="circle-icon">
              <FaCheckCircle size={40} />
            </div>
            <span className="percentage">{animatedValues.value2}%</span>
            <div className="circle-progress" style={{ '--progress': 90 }}></div>
          </div>
          <p className="stat-description">Customers complete the course successfully without any delay</p>
        </div>
        
        <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-circle">
            <div className="circle-icon">
              <FaBriefcase size={40} />
            </div>
            <span className="percentage">{animatedValues.value3}%</span>
            <div className="circle-progress" style={{ '--progress': 96 }}></div>
          </div>
          <p className="stat-description">Customers get assured placement or build their portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulCommunity;