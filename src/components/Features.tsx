import React, { useState } from "react";
import { Translation } from "../content";
import {
  Languages,
  Compass,
  Layers,
  BookOpen,
  Sparkles,
  Star,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  Lock,
  ChevronRight,
  Eye
} from "lucide-react";

interface FeaturesProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Features({ content, currentLang }: FeaturesProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "mvp" | "future">("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    "UX/UI": <Languages className="w-5 h-5 text-[#74584a]" />,
    "تجربة المستخدم": <Languages className="w-5 h-5 text-[#74584a]" />,
    "Discovery": <Compass className="w-5 h-5 text-[#785a09]" />,
    "الاستكشاف": <Compass className="w-5 h-5 text-[#785a09]" />,
    "Immersion": <Layers className="w-5 h-5 text-[#74584a]" />,
    "المعايشة الغامرة": <Layers className="w-5 h-5 text-[#74584a]" />,
    "Education": <BookOpen className="w-5 h-5 text-[#785a09]" />,
    "التعليم": <BookOpen className="w-5 h-5 text-[#785a09]" />,
    "AI/ML": <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
    "الذكاء الاصطناعي": <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
    "Social": <Star className="w-5 h-5 text-[#74584a]" />,
    "التفاعل الاجتماعي": <Star className="w-5 h-5 text-[#74584a]" />,
    "Scholarly": <CheckCircle2 className="w-5 h-5 text-[#785a09]" />,
    "الأكاديمي": <CheckCircle2 className="w-5 h-5 text-[#785a09]" />,
    "Security": <ShieldCheck className="w-5 h-5 text-[#74584a]" />,
    "الأمان": <ShieldCheck className="w-5 h-5 text-[#74584a]" />,
    "Engagement": <Trophy className="w-5 h-5 text-[#D4AF37]" />,
    "التفاعل": <Trophy className="w-5 h-5 text-[#D4AF37]" />,
    "Management": <Lock className="w-5 h-5 text-[#74584a]" />,
    "الإدارة": <Lock className="w-5 h-5 text-[#74584a]" />
  };

  const filteredFeatures = content.featuresList.filter((feat) => {
    if (activeFilter === "mvp") return feat.isMvp;
    if (activeFilter === "future") return !feat.isMvp;
    return true;
  });

  return (
    <section
      id="features"
      className="py-24 bg-[#f6f3f2] border-b border-[#eae7e7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#785a09] uppercase block mb-3">
            04 / FEATURES MATRIX
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#74584a] mb-4">
            {content.featuresTitle}
          </h2>
          <p className="font-sans text-base text-[#4d4638] leading-relaxed">
            {content.featuresSubtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center items-center gap-2 mb-12" id="feature-tabs">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 sm:px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-[#74584a] text-white shadow-sm"
                : "bg-[#fcf9f8] text-[#7f7666] border border-[#E5D9B6]/40 hover:border-[#E5D9B6]"
            }`}
            id="feature-tab-all"
          >
            {content.featuresFilterAll}
          </button>
          <button
            onClick={() => setActiveFilter("mvp")}
            className={`px-4 sm:px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              activeFilter === "mvp"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1b1c1c] shadow-sm font-bold"
                : "bg-[#fcf9f8] text-[#7f7666] border border-[#E5D9B6]/40 hover:border-[#E5D9B6]"
            }`}
            id="feature-tab-mvp"
          >
            <span>{content.featuresFilterMvp}</span>
          </button>
          <button
            onClick={() => setActiveFilter("future")}
            className={`px-4 sm:px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === "future"
                ? "bg-[#7f7666] text-[#fcf9f8] shadow-sm"
                : "bg-[#fcf9f8] text-[#7f7666] border border-[#E5D9B6]/40 hover:border-[#E5D9B6]"
            }`}
            id="feature-tab-future"
          >
            {content.featuresFilterFuture}
          </button>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn"
          id="features-cards-grid"
        >
          {filteredFeatures.map((feat) => {
            const icon = categoryIcons[feat.category] || <Compass className="w-5 h-5 text-[#74584a]" />;

            return (
              <div
                key={feat.id}
                className="bg-[#FCFAED] border border-[#E5D9B6] rounded-md p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group hover:translate-y-[-2px]"
                id={`feature-card-${feat.id}`}
              >
                <div>
                  {/* Top line with Category & Status Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[9px] tracking-widest text-[#7f7666] font-bold uppercase flex items-center gap-1.5 bg-[#f6f3f2] px-2 py-1 rounded">
                      {icon}
                      {feat.category}
                    </span>

                    {feat.isMvp ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffdf9d] text-[#4c3700] text-[10px] font-sans font-bold tracking-wider uppercase flex items-center gap-1 border border-[#D4AF37]/35">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#785a09] shrink-0" />
                        MVP ✓
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#eae7e7] text-[#4d4638] text-[10px] font-sans font-semibold tracking-wider uppercase">
                        {currentLang === "en" ? feat.tag : feat.tagAr}
                      </span>
                    )}
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-serif font-bold text-lg text-[#74584a] mb-2 group-hover:text-[#785a09] transition-colors">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-sans text-xs text-[#4d4638] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Future links or small detail footnotes */}
                {!feat.isMvp && feat.title.toLowerCase().includes("gamification") && (
                  <div className="pt-4 mt-6 border-t border-[#eae7e7] flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#7f7666] tracking-wide italic">
                      Separate Prototype Project
                    </span>
                    <a
                      href="#demo"
                      className="inline-flex items-center gap-1 text-[10px] font-bold font-sans text-[#785a09] hover:underline"
                    >
                      <span>{currentLang === "en" ? "View Vision" : "شاهد الرؤية"}</span>
                      <ChevronRight className={`w-3 h-3 ${currentLang === "ar" ? "rotate-180" : ""}`} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
