"use client";
import React from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaDatabase,
  FaShareAlt,
  FaCookieBite,
  FaLock,
  FaUserCheck,
  FaExternalLinkAlt,
  FaGlobe,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Overview",
    content: (
      <p>
        We respect your privacy and are dedicated to safeguarding your personal
        information. This Privacy Policy outlines our practices regarding the
        collection, use, and protection of your data when you interact with our
        platform.
      </p>
    ),
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-[#01377d] mb-1">a. Personal Information</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location details</li>
            <li>Educational qualifications and resume (for training and placement services)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#01377d] mb-1">b. Usage Data</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on the website</li>
            <li>Device and system information</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#01377d] mb-1">c. Communication Information</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Details shared through contact forms, emails, WhatsApp, or phone calls</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: <FaUserShield />,
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>To provide training, certification, and placement services</li>
        <li>To manage registrations and user accounts</li>
        <li>To process payments securely</li>
        <li>To communicate updates, offers, and important notifications</li>
        <li>To improve website performance and user experience</li>
        <li>To ensure security and prevent fraudulent activities</li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: <FaShareAlt />,
    title: "Sharing and Disclosure of Information",
    content: (
      <>
        <p className="text-slate-600 mb-3">
          We do not sell or rent your personal information. However, we may share
          your information with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Training partners, recruiters, and certification providers</li>
          <li>Third-party service providers supporting our business operations</li>
          <li>Payment gateway providers for secure transactions</li>
          <li>Government or legal authorities when required by law</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    icon: <FaCookieBite />,
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="text-slate-600 mb-3">
          We use cookies and similar technologies to enhance your browsing
          experience. Cookies help us:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 mb-3">
          <li>Understand user behavior</li>
          <li>Remember preferences</li>
          <li>Improve website functionality</li>
        </ul>
        <p className="text-slate-600">
          You can disable cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    id: 6,
    icon: <FaDatabase />,
    title: "Data Retention",
    content: (
      <p className="text-slate-600">
        We retain your personal information only for as long as necessary to
        fulfill the purposes outlined in this policy or as required by applicable
        laws. After that, the data is securely deleted or anonymized.
      </p>
    ),
  },
  {
    id: 7,
    icon: <FaLock />,
    title: "Data Security",
    content: (
      <>
        <p className="text-slate-600 mb-3">
          We implement appropriate security measures to protect your personal data
          from unauthorized access, alteration, or disclosure.
        </p>
        <p className="text-slate-600">
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: 8,
    icon: <FaUserCheck />,
    title: "Your Rights",
    content: (
      <>
        <p className="text-slate-600 mb-3">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 mb-3">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className="text-slate-600">
          To exercise these rights, contact us at:{" "}
          <a
            href="mailto:helpdesk.iclp@gmail.com"
            className="text-[#01377d] font-medium hover:underline"
          >
            helpdesk.iclp@gmail.com
          </a>
        </p>
      </>
    ),
  },
  {
    id: 9,
    icon: <FaExternalLinkAlt />,
    title: "Third-Party Links",
    content: (
      <p className="text-slate-600">
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those external sites.
      </p>
    ),
  },
  {
    id: 10,
    icon: <FaGlobe />,
    title: "International Users",
    content: (
      <p className="text-slate-600">
        If you access our services from outside India, your information may be
        transferred to and processed in India in accordance with this Privacy
        Policy.
      </p>
    ),
  },
  {
    id: 11,
    icon: <FaSyncAlt />,
    title: "Changes to This Privacy Policy",
    content: (
      <p className="text-slate-600">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>
    ),
  },
  {
    id: 12,
    icon: <FaEnvelope />,
    title: "Privacy Policy Questions",
    content: (
      <>
        <p className="text-slate-600 mb-3">
          If you have any questions or concerns regarding this Privacy Policy or
          our data practices, please contact us:
        </p>
        <div className="space-y-1 text-slate-600">
          <p>
            <span className="font-semibold text-[#01377d]">Email:</span>{" "}
            <a
              href="mailto:helpdesk.iclp@gmail.com"
              className="text-[#01377d] hover:underline"
            >
              helpdesk.iclp@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-[#01377d]">Phone:</span>{" "}
            <a href="tel:+918681026181" className="text-[#01377d] hover:underline">
              +91 86810 26181
            </a>
          </p>
          <p>
            <span className="font-semibold text-[#01377d]">Website:</span>{" "}
            <a
              href="https://iclptech.in"
              className="text-[#01377d] hover:underline"
            >
              https://iclptech.in
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#01377d] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full mb-5 border border-[#39FF14]/30">
            <FaShieldAlt className="text-[#39FF14] text-xl" />
            <span className="text-white font-semibold tracking-wide text-sm">
              Privacy Policy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Privacy Matters
          </h1>
          <p className="text-[#97e7f5] text-lg">
            ICLP Technologies is committed to protecting your personal
            information and being transparent about how we use it.
          </p>
          <p className="text-white/50 text-sm mt-4">
            Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: June 2025
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-[#01377d] rounded-lg p-5 text-slate-700 text-sm leading-relaxed">
          ICLP Technologies ("we", "our", or "us") is committed to protecting
          your privacy. This Privacy Policy explains how your information is
          collected, used, and disclosed when you use our website{" "}
          <a
            href="https://iclptech.in"
            className="text-[#01377d] font-medium hover:underline"
          >
            https://iclptech.in
          </a>{" "}
          and our services.
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-4 pb-16 space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 bg-[#01377d] px-6 py-4">
              <span className="text-[#39FF14] text-lg">{section.icon}</span>
              <h2 className="text-white font-semibold text-base">
                {section.id}. {section.title}
              </h2>
            </div>
            <div className="px-6 py-5 text-sm leading-relaxed">{section.content}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
