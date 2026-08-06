// app/course/[path]/head.jsx
const ORG_ID = "https://iclptech.in/#organization";

function buildSchema(course, canonical) {
  const name = course.course_name;
  const description =
    course.meta_description ||
    course.description ||
    `Join ${name} at ICLP Technologies with real-time projects, certification guidance, and placement assistance.`;

  const graph = [
    {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: "ICLP Technologies",
      url: "https://iclptech.in",
      logo: "https://iclptech.in/favicon.png",
      sameAs: [
        "https://www.instagram.com/iclp_technologies",
        "https://facebook.com/iclp-technologies",
        "http://linkedin.com/company/iclp-technologies",
        "https://twitter.com/iclp_tech",
        "https://youtube.com/@iclp_technologies",
      ],
      areaServed: { "@type": "Place", name: "Chennai" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8681026181",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name,
      provider: { "@id": ORG_ID },
      areaServed: "India",
      serviceType: `${name} with Placement Support`,
    },
    {
      "@type": "Course",
      "@id": `${canonical}#course`,
      name,
      description,
      provider: { "@id": ORG_ID },
      courseMode: ["Online", "Classroom"],
      inLanguage: "English",
      educationalLevel: course.skill_level || "Beginner to Advanced",
      occupationalCredentialAwarded: `${name} Completion Certificate`,
      timeRequired: "PT40H",
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        inLanguage: "English",
      },
      offers: {
        "@type": "Offer",
        url: canonical,
        price: "Contact for fees",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "500",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iclptech.in/" },
        { "@type": "ListItem", position: 2, name: "Courses", item: "https://iclptech.in/courses/" },
        { "@type": "ListItem", position: 3, name, item: canonical },
      ],
    },
  ];

  if (course.faqs && course.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: course.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export default function Head({ course, canonicalUrl }) {
  if (!course) return null;

  const canonical = canonicalUrl || `https://iclptech.in/courses/${course.path}/`;
  const schema = buildSchema(course, canonical);

  return (
    <>
      <title>{`${course.meta_title || course.course_name || "Iclp tech"} - ICLP`}</title>
      <meta name="description" content={course.meta_description || course.description} />

      <meta property="og:title" content={course.meta_title || course.course_name} />
      <meta property="og:description" content={course.meta_description || course.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={course.meta_title || course.course_name} />
      <meta name="twitter:description" content={course.meta_description || course.description} />
      <meta name="twitter:image" content="/favicon.png" />
      <meta name="keywords" content={`${course.course_name}, ${course.course_name}, ICLP Tech, Course training India`} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
