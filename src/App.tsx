import React, { useState, useEffect } from "react";
import { englishContent, arabicContent, Translation } from "./content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Architecture from "./components/Architecture";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Team from "./components/Team";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");

  // Dynamically toggle document-level metadata (lang and dir) for seamless Arabic RTL flipping
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (currentLang === "ar") {
      htmlElement.dir = "rtl";
      htmlElement.lang = "ar";
    } else {
      htmlElement.dir = "ltr";
      htmlElement.lang = "en";
    }
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const activeContent: Translation = currentLang === "en" ? englishContent : arabicContent;

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] selection:bg-[#ffdf9d] selection:text-[#251a00] font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* 0. TOP BAR / HEADER (Sticky with scroll-linked gold tube) */}
      <Header
        content={activeContent}
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
      />

      {/* 1. HERO (Ken Burns sunset template backdrop, elegant CTAs) */}
      <Hero content={activeContent} currentLang={currentLang} />

      {/* Main Layout Grid wrapper */}
      <main className="relative" id="main-content">
        {/* 2. PROBLEM (3 academic museum placard-style cards) */}
        <Problem content={activeContent} currentLang={currentLang} />

        {/* 3. SOLUTION (3 interactive pillars & smartphone high-res mockup overlay) */}
        <Solution content={activeContent} currentLang={currentLang} />

        {/* 4. ARCHITECTURE (Clickable 3-tier visual diagram and chatbot simulator) */}
        <Architecture content={activeContent} currentLang={currentLang} />

        {/* 5. FEATURES (Grid of MVP & future-vision items with live filter tabs) */}
        <Features content={activeContent} currentLang={currentLang} />

        {/* 6. DEMO (Walkthrough player console, SVG QRs & academic examiner guide) */}
        <Demo content={activeContent} currentLang={currentLang} />
      </main>

      {/* 7. TEAM & FOOTER (AASTMT college details, founders & supervisors placard) */}
      <Team content={activeContent} currentLang={currentLang} />
    </div>
  );
}
