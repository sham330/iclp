"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaHome, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
    }
  }, [count, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01377d] to-[#014a9f] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-10 text-center">

        {/* Animated check icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-5 animate-bounce">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#01377d] mb-2">
          Thank You!
        </h1>
        <p className="text-slate-600 text-lg mb-6">
          Your enquiry has been submitted successfully. Our team will contact you shortly.
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full border-4 border-[#014a9f] flex items-center justify-center text-xl font-bold text-[#014a9f]">
            {count}
          </div>
          <span className="text-slate-500 text-sm">Redirecting to home...</span>
        </div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="tel:+918681026181"
            className="flex items-center justify-center gap-2 bg-[#01377d] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#014a9f] transition-all"
          >
            <FaPhone /> Call Us
          </a>
          <a
            href="https://wa.me/918681026181"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => router.push("/")}
          className="flex items-center justify-center gap-2 mx-auto text-sm text-slate-500 hover:text-[#01377d] transition-all"
        >
          <FaHome /> Go to Home now
        </button>
      </div>
    </div>
  );
}
