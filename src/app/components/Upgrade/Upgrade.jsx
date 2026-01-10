"use client";

const UpgradeCareer = () => {
  return (
    <section className="relative bg-white py-10 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h2 className="font-bold leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-[52px] text-[#014a9f]">
                Ready to{" "}
                <span className="text-[#32ff00]">Upgrade</span>{" "}
                Your Career?
              </span>

              <span className="block text-3xl sm:text-4xl lg:text-[42px] text-[#014a9f] mt-3">
                From Student to Job-Ready Professional
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#014a9f] leading-relaxed max-w-xl">
              At{" "}
              <strong className="text-[#014a9f] font-semibold">
                ICLP Technologies
              </strong>
              , we help you learn real industry skills, practice on live
              scenarios, and get guided by expert mentors — so you feel confident
              to clear interviews and get placed faster.
            </p>

            {/* FEATURES */}
            <ul className="space-y-4 text-[#014a9f] font-medium">
              <li className="flex items-center gap-3">
                <span className="text-[#32ff00] text-xl">✔</span>
                Mentor-led training
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#32ff00] text-xl">✔</span>
                Practical, hands-on learning
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#32ff00] text-xl">✔</span>
                Resume + interview support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#32ff00] text-xl">✔</span>
                Placement assistance
              </li>
            </ul>

           
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-[36px] border-[3px] border-[#1e0f6e]/10 translate-x-4 translate-y-4 -z-10" />

            <div className="rounded-[36px] overflow-hidden shadow-2xl border-[3px] border-[#1e0f6e]/20">
              <img
                src="/upgrade-carrer.jfif"
                alt="Upgrade Your Career"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft blobs */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#32ff00]/20 rounded-full blur-3xl -z-20" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00b4d8]/20 rounded-full blur-3xl -z-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpgradeCareer;
