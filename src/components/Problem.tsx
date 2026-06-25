import React from "react";
import { Translation } from "../content";
import { FileWarning, Layers, Languages } from "lucide-react";

interface ProblemProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Problem({ content, currentLang }: ProblemProps) {
  // Map icons to problems for visual elegance
  const icons = [
    <FileWarning className="w-6 h-6 text-[#74584a]" />,
    <Layers className="w-6 h-6 text-[#74584a]" />,
    <Languages className="w-6 h-6 text-[#74584a]" />
  ];

  return (
    <section
      id="problem"
      className="py-24 bg-[#fcf9f8] border-b border-[#eae7e7] relative overflow-hidden"
    >
      {/* Decorative side watermark */}
      <div className="absolute right-0 top-1/4 translate-x-1/3 opacity-3 select-none pointer-events-none hidden lg:block">
        <span className="font-serif text-[180px] font-bold text-[#74584a] tracking-widest leading-none">
          EGYPT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#785a09] uppercase block mb-3">
            01 / ACADEMIC FOUNDATIONS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#74584a] mb-4">
            {content.problemTitle}
          </h2>
          <p className="font-sans text-base text-[#4d4638] leading-relaxed">
            {content.problemSubtitle}
          </p>
        </div>

        {/* 3 Museum-Placard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="problem-cards-grid">
          {content.problems.map((prob, idx) => (
            <div
              key={prob.id}
              className="bg-[#FCFAED] border border-[#E5D9B6] rounded-md p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
              id={`problem-card-${idx}`}
            >
              {/* Top border gold highlights */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37]/40 via-[#B8860B]/70 to-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Museum Style Label */}
                <span className="font-mono text-[10px] tracking-widest text-[#7f7666] font-semibold block mb-6">
                  {prob.museumLabel}
                </span>

                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-[#f6f3f2] flex items-center justify-center mb-6 border border-[#E5D9B6]/60">
                  {icons[idx] || <FileWarning className="w-6 h-6 text-[#74584a]" />}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-[#74584a] mb-4 group-hover:text-[#785a09] transition-colors">
                  {prob.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#4d4638] leading-relaxed mb-6">
                  {prob.description}
                </p>
              </div>

              {/* Museum catalog accent at bottom */}
              <div className="pt-4 border-t border-[#eae7e7] flex items-center justify-between text-[11px] font-mono text-[#7f7666]">
                <span>AASTMT ARCHIVE 2026</span>
                <span className="font-bold group-hover:text-[#785a09] transition-colors">
                  SEC // 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
