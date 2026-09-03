"use client";

import {
  BriefcaseBusiness,
  Code2,
  Globe2,
  MessageCircle,
  Star,
  UserRound,
} from "lucide-react";

const countries = [
  { name: "USA", code: "us" },
  { name: "INDIA", code: "in" },
  { name: "UK", code: "gb" },
  { name: "AUSTRALIA", code: "au" },
];

const features = [
  { icon: UserRound, label: "Expert Trainers" },
  { icon: Code2, label: "Hands-on Projects" },
  { icon: BriefcaseBusiness, label: "Job Assistance" },
];

export default function TrainingBanner() {
  return (
    <section className="relative overflow-hidden bg-[#00162f] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[300px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_50%,rgba(0,106,255,0.07),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">

          {/* LEFT — title + features */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              {/* Globe icon — hidden on mobile */}
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#158cff] to-[#1d5eea] shadow-[0_8px_24px_rgba(0,110,255,0.3)]">
                <Globe2 size={30} strokeWidth={1.5} className="text-white" />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-[#35a9ff] uppercase mb-1">
                  Learn&nbsp;•&nbsp;Practice&nbsp;•&nbsp;Grow
                </p>
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                  World-Class Training&nbsp;
                  <span className="bg-gradient-to-r from-[#35a9ff] to-[#158cff] bg-clip-text text-transparent">
                    Anytime, Anywhere
                  </span>
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

            {/* Features */}
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className={`flex items-center gap-2 ${
                      index !== 0 ? "border-l border-white/20 pl-5" : ""
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.6} className="text-[#1598ff] shrink-0" />
                    <span className="text-sm font-medium whitespace-nowrap">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MIDDLE — countries */}
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:w-[200px] lg:shrink-0">
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex h-9 items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-[#09284b] to-[#0b315b] px-3"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="h-5 w-7 rounded-sm object-cover shrink-0"
                />
                <span className="text-xs font-semibold tracking-wide">{country.name}</span>
              </div>
            ))}
            <div className="flex h-9 items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-[#09284b] to-[#0b315b] px-3">
              <span className="text-base leading-none">🌎</span>
              <span className="text-xs font-semibold">& More</span>
            </div>
          </div>

          {/* RIGHT — CTA */}
          <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-[#09294c]/95 to-[#061d38]/95 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] lg:w-[320px] lg:shrink-0">
            <p className="text-center text-base font-bold">Have Questions?</p>
            <p className="text-center text-sm font-medium text-[#36aaff] mt-0.5">
              Talk to our experts!
            </p>

            {/* Chat button */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 flex-1 items-center justify-center rounded-xl bg-[#ff9718] text-sm font-bold shadow-[0_6px_16px_rgba(255,151,24,0.25)] transition hover:bg-[#ffa32f] hover:scale-[1.02]"
              >
                CHAT NOW
              </a>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <MessageCircle size={24} strokeWidth={2} className="text-[#25D366]" />
              </div>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="#ffc400" strokeWidth={0} className="text-[#ffc400]" />
                ))}
              </div>
              <span className="text-xs font-medium text-white/80">4.9/5 from 2k+ learners</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
