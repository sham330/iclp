import React from "react";
import SEO from "../SEO/SEO";

const Accreditations = () => {
  return (
    <div className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <SEO
        title="ISO & Pearson Accredited Online Courses – Learn with Certified Experts"
        description="Enroll in ISO and Pearson accredited online courses across various categories including Programming (Java, Python, JavaScript), Data Science, AI, SAP, Oracle, and more. Gain certified expertise with flexible schedules, time and money-saving options, and expert support through our user-friendly chatbot. Get the best of knowledge, certification, and career advancement from our accredited courses!"
        image="https://drive.google.com/drive/u/0/folders/1SxfUxy5nkpMbPMkit0Szg2eL7TmknHIv"
      />

      {/* Subtle Christmas Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-amber-600/10 rounded-full blur-3xl"></div>
        
        {/* Subtle Snow Particles */}
        <div className="absolute top-10 left-[20%] w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-[40%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-[30%] w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-[20%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Elegant Top Border */}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section - Reduced spacing */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-white">
              Accreditations
            </span>
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/50 to-amber-500/50"></div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-500/50 to-emerald-500/50"></div>
          </div>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Recognized and certified by leading global standards organizations
          </p>
        </div>

        {/* Accreditation Logos - Reduced Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Pearson Logo */}
          <div className="group relative">
            {/* Festive Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 via-amber-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card - Reduced padding */}
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-700 group-hover:border-amber-500/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-amber-500/10">
              {/* Corner Accents - Smaller */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-400/30 rounded-bl-xl"></div>
              
              {/* Image container - Reduced size */}
              <div className="relative bg-white rounded-lg p-2 flex items-center justify-center min-h-[120px] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/Pearson.jpg"
                  alt="Pearson Accreditation"
                  className="max-w-full h-auto max-h-[100px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* ISO Logo */}
          <div className="group relative">
            {/* Festive Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 via-amber-500/20 to-red-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card - Reduced padding */}
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-700 group-hover:border-red-500/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/10">
              {/* Corner Accents - Smaller */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/30 rounded-bl-xl"></div>
              
              {/* Image container - Reduced size */}
              <div className="relative bg-white rounded-lg p-2 flex items-center justify-center min-h-[120px] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/ISO.jpg"
                  alt="ISO Accreditation"
                  className="max-w-full h-auto max-h-[100px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* MSME Logo */}
          <div className="group relative sm:col-span-2 lg:col-span-1">
            {/* Festive Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500/20 via-red-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card - Reduced padding */}
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-700 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/10">
              {/* Corner Accents - Smaller */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-400/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-400/30 rounded-bl-xl"></div>
              
              {/* Image container - Reduced size */}
              <div className="relative bg-white rounded-lg p-2 flex items-center justify-center min-h-[120px] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/MSME.jpg"
                  alt="MSME Accreditation"
                  className="max-w-full h-auto max-h-[100px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Border */}
    </div>
  );
};

export default Accreditations;
