"use client";
import React, { useState, useEffect } from 'react';

const ChristmasNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex items-end gap-3 max-w-xs animate-slideInLeft">
      
      {/* Smaller Santa GIF */}
      <div className="w-16 h-16 flex-shrink-0">
        <img 
          src="/merry_xmas.gif" 
          alt="Santa" 
          className="w-full h-full object-contain rounded-xl shadow-xl animate-bounce-slow"
        />
      </div>

      {/* Smaller Message Bubble - Like old simple style */}
      <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-xl p-3 shadow-xl max-w-xs hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-2">
          {/* Tiny Christmas Icon */}
          <div className="w-5 h-5 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs">🎅</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 font-semibold text-xs leading-tight">
              Merry Christmas! 🎄
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Special festive offers on all courses!
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs ml-1 hover:scale-110 transition-all duration-200"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChristmasNotification;
