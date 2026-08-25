import { CheckCircle, Globe, Award, Users, TrendingUp } from "lucide-react";

const features = [
  { label: "Quality Training", icon: Award },
  { label: "Global Standards", icon: Globe },
  { label: "Verified Excellence", icon: CheckCircle },
  { label: "Industry Trusted", icon: Users },
];

export default function CertificationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] !py-16 sm:!py-20 lg:!py-24" aria-labelledby="certification-heading">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 md:flex-row lg:gap-12 lg:px-8">

        {/* Left Logo */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-center w-36 h-36 md:w-44 md:h-44 shadow shrink-0 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <img
            src="/iso.png"
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
          <h2 id="certification-heading" className="mb-3 text-2xl font-bold text-white md:text-3xl">
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
    </section>
  );
}
