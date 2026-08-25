"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which is the best software training institute in Chennai?",
    answer: "ICLP Technologies offers industry-focused software and IT training with expert-led sessions, practical learning, real-time projects, certification and career support.",
  },
  {
    question: "What courses does ICLP Technologies offer?",
    answer: "ICLP offers training across programming, full stack development, web development, cloud and DevOps, software testing, cybersecurity, SAP, Oracle and other technology areas.",
  },
  {
    question: "Does ICLP provide placement assistance?",
    answer: "ICLP provides career and placement assistance including interview preparation, resume guidance, mock interviews and career mentoring, subject to the applicable program and eligibility.",
  },
  {
    question: "Does ICLP offer classroom training?",
    answer: "Classroom training is available for applicable programs. Learners can contact ICLP to check current location and batch availability.",
  },
  {
    question: "Are online classes available?",
    answer: "Online instructor-led training is available for selected programs and batches.",
  },
  {
    question: "Does ICLP provide real-time projects?",
    answer: "Applicable programs include practical and project-based learning to help learners apply their technical knowledge.",
  },
  {
    question: "Can working professionals join?",
    answer: "Yes. Working professionals can enquire about available weekday, weekend and online training schedules.",
  },
  {
    question: "How can I choose the right IT course?",
    answer: "Consider your educational background, existing skills, career goal, preferred technology and available learning time. ICLP's career counsellors can help you identify a suitable course.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf7ff] to-[#effcf6] !py-20 sm:!py-24 lg:!py-28"
      aria-labelledby="faq-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#01377d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00a878]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-flex rounded-full border border-[#00a878]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#087f5b] shadow-sm">
            Need to know
          </p>
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-[#01377d] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions About IT Training in Chennai
          </h2>
        </header>

        <div className="space-y-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article key={question} className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 motion-reduce:transition-none ${isOpen ? "border-[#00a878] shadow-lg shadow-[#00a878]/10" : "border-slate-200 shadow-sm hover:border-[#01377d]/30"}`}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left text-base font-bold text-slate-900 transition-colors duration-200 hover:text-[#01377d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00a878] sm:px-6 sm:text-lg motion-reduce:transition-none"
                  >
                    <span>{question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a878]/10 text-[#087f5b] transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180 bg-[#00a878] text-white" : ""}`}>
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
