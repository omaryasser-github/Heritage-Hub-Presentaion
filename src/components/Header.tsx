import React, { useEffect, useState } from "react";
import { Translation } from "../content";
import { Globe, Menu, X, Compass } from "lucide-react";

interface HeaderProps {
  content: Translation;
  currentLang: "en" | "ar";
  onToggleLang: () => void;
}

export default function Header({ content, currentLang, onToggleLang }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  const navItems = [
    { label: content.navProblem, target: "problem" },
    { label: content.navSolution, target: "solution" },
    { label: content.navArchitecture, target: "architecture" },
    { label: content.navFeatures, target: "features" },
    { label: content.navDemo, target: "demo" },
    { label: content.navTeam, target: "team" }
  ];

  return (
    <header
      id="top-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fcf9f8]/95 backdrop-blur-md shadow-md border-b border-[#E5D9B6]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Gold Scroll Progress Indicator - "Gold Tube" */}
      <div className="w-full h-1 bg-[#eae7e7]">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
          id="logo-button"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-4 h-4 text-[#fcf9f8]" />
          </div>
          <span className="font-serif font-bold text-xl tracking-wide text-[#74584a] group-hover:text-[#785a09] transition-colors duration-200">
            Heritage Hub
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" id="desktop-nav">
          {navItems.map((item, idx) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="px-3 py-2 text-sm font-sans font-medium text-[#4d4638] hover:text-[#785a09] transition-colors duration-200 relative group"
              id={`nav-item-${item.target}`}
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
            </button>
          ))}
        </nav>

        {/* Controls (Language & CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#7f7666]/30 text-xs font-semibold text-[#74584a] hover:bg-[#785a09] hover:text-white transition-all duration-300"
            id="lang-toggle-desktop"
            title={currentLang === "en" ? "تبديل إلى العربية" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === "en" ? "العربية" : "English"}</span>
          </button>

          {/* Core Demo Button */}
          <button
            onClick={() => scrollToSection("demo")}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white font-sans text-xs font-semibold tracking-wider uppercase border border-[#B8860B]/20 shadow-sm transition-all duration-300 active:scale-95"
            id="header-cta-button"
          >
            {content.ctaButton}
          </button>
        </div>

        {/* Mobile menu and Language toggle for mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#7f7666]/20 text-xs font-medium text-[#74584a]"
            id="lang-toggle-mobile"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === "en" ? "عربي" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#74584a] hover:text-[#785a09] focus:outline-none"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f8]/98 border-b border-[#E5D9B6] animate-fadeIn" id="mobile-drawer">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="block w-full text-left px-3 py-3 text-base font-sans font-medium text-[#4d4638] border-b border-[#f0eded] hover:bg-[#f6f3f2] hover:text-[#785a09]"
                id={`mobile-nav-${item.target}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("demo")}
                className="w-full py-3 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#fcf9f8] font-sans text-center text-sm font-semibold tracking-wider uppercase"
                id="mobile-drawer-cta"
              >
                {content.ctaButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
