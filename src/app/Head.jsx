export default function Head() {
  const title =
    "Best Software Training Institute in Chennai with Placement Support | ICLP Technologies";

  const description =
    "Best software training institute in Chennai offering online and classroom IT courses, real-time projects, certification guidance, internships, and placement support.";

  const canonicalUrl = "https://iclptech.in/";

  return (
    <>
      {/* 🔹 Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="online courses, programming, design, marketing, ICLP Tech, software training India"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔹 Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* 🔹 Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ICLP Tech" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://iclptech.in/Logo.png" />

      {/* 🔹 Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://iclptech.in/Logo.png" />
    </>
  );
}
