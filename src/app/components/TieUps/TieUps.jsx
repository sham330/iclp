import React from "react";
import SEO from "../SEO/SEO";


const TieUps = () => {
  // List of company images
  const companyImages = [
    "./companies/Accenture.png",
    "./companies/capgemini.webp",
    "./companies/Cognizant-Logo.jpg",
    "./companies/adastra.png",
    "./companies/data_matics.png",
    "./companies/dmi.png",
    "./course.PNG",
    "./companies/encore.jpeg",
    "./companies/HCLTech.png",
    "./companies/ibm.jpg",
    "./companies/images.png",
    "./companies/tcs.png",
    "./companies/transworld.jpg",
    "./companies/willy.png",
    "./companies/wipro.jpg",
    "./companies/zoho.png",
  ];


  // Duplicate images for smooth infinite scrolling effect
  const duplicatedImages = [...companyImages, ...companyImages];


  return (
    <div className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20">
      <SEO
        title="Best Online Courses with Top Company Tie-ups – TCS, Accenture, Zoho & More"
        description="Learn from the best online institute partnered with top companies like TCS, Accenture, Zoho, and CTS. Get certified, gain in-demand skills, and boost your chances of placement with our industry-aligned courses."
      />


      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Our Esteemed{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01377d] to-cyan-600">
              Hiring Partners
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Companies that trust our talent pipeline
          </p>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-300"></div>
          </div>
        </div>


        {/* Slider Container */}
        <div className="relative bg-white overflow-hidden mb-8 rounded-xl shadow-lg">
          {/* Top Border Accent */}
          <div className="h-1 bg-gradient-to-r from-[#01377d] via-blue-500 to-cyan-500"></div>


          {/* Slider */}
          <div className="py-8 overflow-hidden">
            <div className="flex animate-[scroll_40s_linear_infinite]">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 w-[240px]"
                >
                  <div className="bg-white rounded-lg p-4 border-2 border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-32 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Company ${index + 1}`}
                      className="max-w-full h-auto max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Bottom Border Accent */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-[#01377d]"></div>
        </div>


        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-700 font-medium">
            Our graduates have been placed in{" "}
            <span className="text-[#01377d] font-bold">100+ top tech companies</span>{" "}
            worldwide
          </p>
        </div>
      </div>
    </div>
  );
};


export default TieUps;
