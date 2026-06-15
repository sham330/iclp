import { CheckCircle, Globe, Award, Users, TrendingUp } from "lucide-react";

const features = [
  { label: "Quality Training", icon: Award },
  { label: "Global Standards", icon: Globe },
  { label: "Verified Excellence", icon: CheckCircle },
  { label: "Industry Trusted", icon: Users },
];

export default function CertificationSection() {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">

        {/* Left Logo */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-36 md:w-44 md:h-44 shadow shrink-0 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <img
            src="/Logo.png"
            alt="Certification"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-blue-500/30 text-white text-sm px-4 py-1 rounded-full mb-3">
            <Globe size={14} />
            Internationally Certified
          </span>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ISO 9001:2015 Certified Institution
          </h2>

          {/* Description */}
          <p className="text-blue-100 mb-3 max-w-2xl">
            ICLP Technologies is proudly certified under ISO 9001:2015 standards, reflecting our commitment to delivering high-quality software training services, professional development programs, and industry-focused learning solutions.
          </p>
          <p className="text-blue-100 mb-5 max-w-2xl">
            Our certification demonstrates adherence to internationally recognized quality management practices, ensuring excellence in training delivery, student support, and continuous improvement.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {features.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 hover:bg-white hover:text-blue-700 text-white px-4 py-2 rounded-full text-sm backdrop-blur transition-all duration-300 cursor-default group"
              >
                <Icon size={16} className="text-green-400 group-hover:text-blue-600 transition-colors duration-300" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
