import { MapPin } from "lucide-react";

const locations = [
  "T. Nagar",
  "Anna Nagar",
  "OMR",
  "Velachery",
  "Adyar",
  "Tambaram",
  "Porur",
  "Guindy",
  "Nungambakkam",
  "Mylapore",
  "Perambur",
  "Pallavaram",
  "Sholinganallur",
];

export default function HomeChennaiLocations() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="chennai-locations-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7ff0c9]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7ff0c9] shadow-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Chennai Coverage
          </p>
          <h2 id="chennai-locations-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Serving Learners Across Chennai
          </h2>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            ICLP Technologies serves learners looking for software and IT training across Chennai, including:
          </p>
        </header>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" aria-label="Chennai locations served">
          {locations.map((location) => (
            <li
              key={location}
              className="group flex min-h-14 items-center gap-3 rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878] hover:text-[#01377d] hover:shadow-xl hover:shadow-black/30 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <MapPin className="h-5 w-5 shrink-0 text-[#01377d] transition-colors duration-200 group-hover:text-[#00a878] motion-reduce:transition-none" aria-hidden="true" />
              <span>{location}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
