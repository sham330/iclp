const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../public/data/courses.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const ORG_ID = "https://iclptech.in/#organization";

function buildOrg() {
  return {
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
  };
}

function buildSchema(course, categoryPath) {
  const coursePath = course.path;
  const baseUrl = `https://iclptech.in/courses/${categoryPath}/${coursePath}/`;
  const name = course.meta_title || course.name || course.course_name;
  const description =
    course.meta_description ||
    course.description ||
    `Join ${course.course_name} at ICLP Technologies with real-time projects, certification guidance, and placement assistance.`;

  const graph = [
    buildOrg(),
    {
      "@type": "Service",
      "@id": `${baseUrl}#service`,
      name: course.course_name,
      provider: { "@id": ORG_ID },
      areaServed: "India",
      serviceType: `${course.course_name} with Placement Support`,
    },
    {
      "@type": "Course",
      "@id": `${baseUrl}#course`,
      name: course.course_name,
      description,
      provider: { "@id": ORG_ID },
      courseMode: ["Online", "Classroom"],
      inLanguage: "English",
      educationalLevel: course.skill_level || "Beginner to Advanced",
      occupationalCredentialAwarded: `${course.course_name} Completion Certificate`,
      timeRequired: "PT40H",
      keywords: `${course.course_name}, ${course.course_name} Training, ${course.course_name} Course, ICLP Technologies`,
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        inLanguage: "English",
      },
      offers: {
        "@type": "Offer",
        url: baseUrl,
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
      "@id": `${baseUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iclptech.in/" },
        { "@type": "ListItem", position: 2, name: "Courses", item: "https://iclptech.in/courses/" },
        { "@type": "ListItem", position: 3, name: course.course_name, item: baseUrl },
      ],
    },
  ];

  if (course.faqs && course.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${baseUrl}#faq`,
      mainEntity: course.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

let added = 0;
for (const category of data.categories) {
  for (const course of category.sub_categories || []) {
    if (!course.schema) {
      course.schema = buildSchema(course, category.path);
      added++;
    }
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
console.log(`Done. Added schema to ${added} courses.`);
