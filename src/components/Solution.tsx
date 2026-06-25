import React, { useState } from "react";
import { Translation } from "../content";
import { Compass, Sparkles, Navigation, CheckCircle2, ChevronRight, Tablet } from "lucide-react";

interface SolutionProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Solution({ content, currentLang }: SolutionProps) {
  const [activePillar, setActivePillar] = useState<string>("discover");

  const icons = {
    discover: <Navigation className="w-5 h-5 text-[#D4AF37]" />,
    immerse: <Compass className="w-5 h-5 text-[#74584a]" />,
    personalize: <Sparkles className="w-5 h-5 text-[#D4AF37]" />
  };

  return (
    <section
      id="solution"
      className="py-24 bg-[#f6f3f2] border-b border-[#eae7e7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#785a09] uppercase block mb-3">
            02 / THE INNOVATION
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#74584a] mb-4">
            {content.solutionTitle}
          </h2>
          <p className="font-sans text-base text-[#4d4638] leading-relaxed">
            {content.solutionSubtitle}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Solution Pillars (Interactive Selectors) */}
          <div className="lg:col-span-7 space-y-6" id="solution-pillars-col">
            {content.solutionPillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              const iconKey = pillar.id as keyof typeof icons;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`border transition-all duration-300 rounded-md p-6 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-md translate-y-[-2px]"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/40 hover:border-[#E5D9B6] hover:bg-[#FCFAED]/50"
                  }`}
                  id={`solution-pillar-${pillar.id}`}
                >
                  {/* Left accent bar */}
                  <div
                    className={`absolute top-0 bottom-0 w-1 transition-transform duration-300 ${
                      currentLang === "ar" ? "right-0" : "left-0"
                    }`}
                    style={{
                      backgroundColor: pillar.accent,
                      transform: isActive ? "scaleY(1)" : "scaleY(0)"
                    }}
                  />

                  <div className="flex gap-4 items-start">
                    {/* Icon Container */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        isActive
                          ? "bg-[#785a09]/10 border-[#D4AF37]/50"
                          : "bg-[#f6f3f2] border-[#E5D9B6]/30"
                      }`}
                    >
                      {icons[iconKey] || <Compass className="w-5 h-5 text-[#74584a]" />}
                    </div>

                    {/* Text Details */}
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-lg text-[#74584a] flex items-center gap-2">
                        {pillar.title}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        )}
                      </h3>
                      <p className="font-sans text-sm text-[#4d4638] leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Key bullet list (expanded when active) */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isActive ? "max-h-60 pt-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <ul className="space-y-2.5">
                          {pillar.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-[#4d4638] font-sans">
                              <CheckCircle2 className="w-4 h-4 text-[#785a09] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2: Phone Mockup Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center" id="solution-mockup-col">
            <div className="w-full max-w-[340px] bg-[#FCFAED] border-4 border-[#E5D9B6] rounded-xl overflow-hidden shadow-xl shadow-[#74584a]/5 relative group">
              {/* Camera Notch placeholder */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#E5D9B6] rounded-b-md z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#74584a]/20" />
              </div>

              {/* Mockup Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#1b1c1c]/80 backdrop-blur-sm border border-[#D4AF37]/25 py-2 px-3 rounded-md text-center">
                <span className="font-mono text-[9px] tracking-widest text-[#e9c16b] uppercase font-bold block">
                  {content.mockupBadge}
                </span>
              </div>

              {/* Embedded Mobile Image */}
              <div className="aspect-[3/4] relative overflow-hidden bg-[#74584a]/10">
                <img
                  src="/src/assets/images/app_mockup_discover_1782398098417.jpg"
                  alt="Heritage Hub Smartphone App Mockup"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#74584a]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Mockup description placard */}
            <div className="mt-6 text-center max-w-[340px] px-2">
              <h4 className="font-serif font-bold text-sm text-[#74584a] mb-2">
                {content.mockupHeading}
              </h4>
              <p className="font-sans text-xs text-[#4d4638]/80 leading-relaxed">
                {content.mockupDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
