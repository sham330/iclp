"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Head from "./Head";
import { blogs } from "../../../public/data/blog.js";

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];

export default function Blog() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogs
      .slice()
      .sort((a, b) => b.id - a.id)
      .filter((b) => {
        const matchSearch =
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          (b.metaDescription || "").toLowerCase().includes(search.toLowerCase());
        const matchCat = activeCategory === "All" || b.category === activeCategory;
        return matchSearch && matchCat;
      });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Head />

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#01377d] to-[#014a9f] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          ICLP Tech <span className="text-blue-300">Blog</span>
        </h1>
        <p className="text-[#97e7f5] text-lg mb-8 max-w-xl mx-auto">
          Insights, guides, and career tips for tech professionals
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
          />
        </div>
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center px-4 py-6 bg-slate-50 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#01377d] text-white shadow"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#01377d] hover:text-[#01377d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-2xl mb-2">No articles found</p>
            <p className="text-sm">Try a different search term or category</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <div
                key={blog.id}
                onClick={() => router.push(`/blog/${encodeURIComponent(blog.slug)}`)}
                className="bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {blog.category && (
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2">
                      {blog.category}
                    </span>
                  )}
                  <h2 className="text-[15px] font-bold text-[#01377d] mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  {blog.metaDescription && (
                    <p className="text-slate-500 text-sm line-clamp-2 flex-1 mb-4">
                      {blog.metaDescription}
                    </p>
                  )}
                  <span className="text-sm font-semibold text-blue-500 group-hover:underline mt-auto">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
