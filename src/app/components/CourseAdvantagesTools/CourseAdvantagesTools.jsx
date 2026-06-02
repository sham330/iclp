"use client";
import { FaTools } from "react-icons/fa";

const CourseAdvantagesTools = ({ course }) => {
  const tools = course?.tools_covered;
  if (!tools || tools.length === 0) return null;

  return (
    <section className="py-10 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <FaTools className="text-xl" />
          </div>
          <h2 className="text-4xl font-bold text-[#01377d]">Tools Covered</h2>
        </div>
        <p className="text-slate-600 mb-8 text-lg">
          Industry-standard tools you will work with during this training
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 bg-slate-50 border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all rounded-xl p-4 text-center"
            >
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-[#01377d] flex items-center justify-center text-white font-bold text-lg">
                  {tool.name.charAt(0)}
                </div>
              )}
              <span className="text-slate-700 font-medium text-sm leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseAdvantagesTools;
