import React, { useEffect, useState } from "react";
import { Translation } from "../content";
import { ArrowRight, ChevronRight, Cpu } from "lucide-react";

interface HeroProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Hero({ content, currentLang }: HeroProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1b1c1c] text-[#fcf9f8] pt-16"
    >
      {/* Background Image Container with Ken Burns effect */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/src/assets/images/hero_egypt_sunset_1782398079787.jpg"
          alt="Majestic Egyptian Temple"
          className={`w-full h-full object-cover opacity-35 ${
            reduceMotion ? "" : "animate-kenburns"
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Warm museum-themed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c] via-[#1b1c1c]/80 to-[#74584a]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c1c] via-transparent to-[#1b1c1c]" />
      </div>

      {/* Decorative Golden Corner Glyphs/Brackets - Traditional museum motif */}
      <div className="absolute top-24 left-6 right-6 bottom-6 pointer-events-none border border-[#D4AF37]/15 z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Thesis Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#785a09]/20 border border-[#D4AF37]/30 text-[#e9c16b] text-xs font-semibold tracking-wider uppercase mb-8 animate-fadeIn"
          id="hero-graduation-badge"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          {content.heroGraduationBadge}
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e9c16b] tracking-tight leading-tight max-w-4xl mb-6 animate-slideUp"
          id="hero-headline"
          style={{ animationDelay: "150ms" }}
        >
          {content.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-base sm:text-lg md:text-xl text-[#f3f0f0]/85 max-w-3xl leading-relaxed mb-10 animate-slideUp"
          id="hero-subhead"
          style={{ animationDelay: "300ms" }}
        >
          {content.heroSubhead}
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-md animate-slideUp"
          id="hero-ctas"
          style={{ animationDelay: "450ms" }}
        >
          <button
            onClick={() => scrollToSection("demo")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:opacity-95 text-[#1b1c1c] font-sans font-bold text-sm shadow-lg shadow-[#785a09]/20 hover:shadow-[#785a09]/30 transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-cta-demo"
          >
            {content.heroCtaDemo}
            <ChevronRight className={`w-4 h-4 ${currentLang === "ar" ? "rotate-180" : ""}`} />
          </button>

          <button
            onClick={() => scrollToSection("architecture")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#E5D9B6]/40 hover:border-[#D4AF37]/80 bg-transparent text-[#e9c16b] font-sans font-semibold text-sm transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-cta-arch"
          >
            {content.heroCtaArch}
          </button>
        </div>

        {/* Tech Stack Indicator */}
        <div
          className="w-full border-t border-[#fcf9f8]/10 pt-8 animate-slideUp"
          style={{ animationDelay: "600ms" }}
          id="hero-tech-stack"
        >
          <p className="font-mono text-xs tracking-widest text-[#dcd9d9]/60 uppercase mb-4">
            {content.heroTechStackLabel}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-6 sm:gap-x-12 text-[#f3f0f0]/70 font-sans text-sm font-semibold">
            <span className="flex items-center gap-2 hover:text-[#e9c16b] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              React Native
            </span>
            <span className="flex items-center gap-2 hover:text-[#e9c16b] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              NestJS
            </span>
            <span className="flex items-center gap-2 hover:text-[#e9c16b] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              FastAPI
            </span>
            <span className="flex items-center gap-2 hover:text-[#e9c16b] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              PostgreSQL
            </span>
          </div>
        </div>
      </div>

      {/* Elegant scroll down prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[10px] tracking-widest text-[#fcf9f8]/55 uppercase">
          Scroll to explore
        </span>
        <div className="w-1 h-8 rounded-full bg-[#fcf9f8]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-3 rounded-full bg-[#D4AF37] animate-bounceScroll" />
        </div>
      </div>
    </section>
  );
}
