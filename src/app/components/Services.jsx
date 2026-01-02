"use client";
import React, { useState } from "react";
import { MapPin, Search, Navigation } from "lucide-react";

const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const areas = [
    "T. Nagar", "Mylapore", "Triplicane", "Egmore", "Nungambakkam",
    "Royapettah", "George Town", "Royapuram", "Washermanpet", "Tondiarpet",
    "Perambur", "Vyasarpadi", "Kodungaiyur", "Adyar", "Besant Nagar",
    "Thiruvanmiyur", "Saidapet", "Velachery", "Guindy", "Ashok Nagar",
    "KK Nagar", "Anna Nagar", "Mogappair", "Ambattur", "Avadi",
    "Padi", "Thoraipakkam", "Perungudi", "Kandanchavadi", "Sholinganallur",
    "Navalur", "Siruseri", "Tambaram", "Chromepet", "Pallavaram",
    "Medavakkam", "Madipakkam", "Pallikaranai", "Porur", "Kundrathur"
  ];

  const filteredAreas = areas.filter(area =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#01377d] px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Navigation className="w-4 h-4" />
            <span>SERVING ACROSS CHENNAI</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Training Centers in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01377d] to-cyan-600">
              Chennai
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We provide quality IT training across 40+ locations in Chennai. Find the nearest center to you.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-blue-100 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm group-hover:text-[#01377d] transition-colors">
                    {area}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Chennai</p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01377d] to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg" />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No areas found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#01377d] to-blue-600 rounded-xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">40+</h3>
            <p className="text-blue-100">Service Areas</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-blue-100">Training Centers</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">5000+</h3>
            <p className="text-blue-100">Students Trained</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find your area? We're expanding rapidly!
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-[#3b82f6] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <MapPin className="w-5 h-5" />
            Contact Us for More Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
