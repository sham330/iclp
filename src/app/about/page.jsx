import AboutClient from "./AboutClient";

export const metadata = {
  title: "About ICLP Technologies | Premier Tech Training Institute in Chennai",
  description:
    "Learn about ICLP Technologies — the Infinite Career Leading Platform. Discover our mission, vision, expert trainers, 1000+ trained students, 95% placement rate, and industry-aligned SAP, Oracle, Java & IT courses.",
  keywords:
    "ICLP Technologies, about ICLP, tech training institute Chennai, SAP training, Oracle training, Java training, IT courses Chennai, career training, placement assistance",
  alternates: {
    canonical: "https://iclptech.in/about/",
  },
  openGraph: {
    title: "About ICLP Technologies | Premier Tech Training Institute",
    description:
      "ICLP Technologies — Infinite Career Leading Platform. 1000+ students trained, 95% placement rate, expert mentors, SAP, Oracle, Java & full-stack courses.",
    url: "https://iclptech.in/about/",
    siteName: "ICLP Technologies",
    images: [
      {
        url: "https://iclptech.in/Logo.png",
        width: 1200,
        height: 630,
        alt: "ICLP Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ICLP Technologies | Premier Tech Training Institute",
    description:
      "1000+ students trained, 95% placement rate. SAP, Oracle, Java & IT courses with expert mentors and career support.",
    images: ["https://iclptech.in/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
