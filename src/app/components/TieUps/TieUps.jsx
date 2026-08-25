import Image from "next/image";

const careerDestinations = [
  { name: "Accenture", logo: "/companies/Accenture.png" },
  { name: "Capgemini", logo: "/companies/capgemini.webp" },
  { name: "Cognizant", logo: "/companies/Cognizant-Logo.jpg" },
  { name: "Adastra", logo: "/companies/adastra.png" },
  { name: "Datamatics", logo: "/companies/data_matics.png" },
  { name: "DMI", logo: "/companies/dmi.png" },
  { name: "CodeShip", logo: "/course.PNG" },
  { name: "Encore", logo: "/companies/encore.jpeg" },
  { name: "HCLTech", logo: "/companies/HCLTech.png" },
  { name: "IBM", logo: "/companies/ibm.jpg" },
  { name: "Intel", logo: "/companies/images.png" },
  { name: "TCS", logo: "/companies/tcs.png" },
  { name: "Transworld International Removals", logo: "/companies/transworld.jpg" },
  { name: "Wipro", logo: "/companies/wipro.jpg" },
  { name: "Willy Tech", logo: "/companies/willy.png" },
  { name: "Zoho", logo: "/companies/zoho.png" },
];

function DestinationLogo({ name, logo }) {
  return (
    <article
      tabIndex={0}
      aria-label={`${name} career destination`}
      className="group flex min-h-32 items-center justify-center rounded-xl border border-white/20 bg-white p-5 shadow-lg shadow-black/20 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#00a878] hover:shadow-xl hover:shadow-black/30 focus-visible:border-[#00a878] focus-visible:ring-2 focus-visible:ring-[#7ff0c9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020c2b] motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={200}
        height={80}
        className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
      />
    </article>
  );
}

export default function TieUps() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#020c2b] via-[#01377d] to-[#062f50] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="career-destinations-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00a878]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-flex rounded-full border border-[#7ff0c9]/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#7ff0c9] shadow-sm">
            Career Destinations
          </p>
          <h2 id="career-destinations-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Companies Where Our Learners Have Built Their Careers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            Explore some of the companies represented in our learners&apos; career journeys.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {careerDestinations.map((destination) => (
            <DestinationLogo key={destination.name} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
