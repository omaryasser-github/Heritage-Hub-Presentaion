import React from "react";
import { Translation } from "../content";
import { Users, FileText, Github, Globe, GraduationCap, Award, BookOpen } from "lucide-react";

interface TeamProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Team({ content, currentLang }: TeamProps) {
  // Map icons to tech resource links
  const resourceIcons = [
    <FileText className="w-4 h-4 text-[#785a09]" />,
    <Github className="w-4 h-4 text-[#74584a]" />,
    <Globe className="w-4 h-4 text-[#785a09]" />
  ];

  return (
    <footer id="team" className="bg-[#1b1c1c] text-[#fcf9f8] pt-24 pb-12 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Academic Credentials Block (AASTMT Credentials) */}
        <div className="border border-[#D4AF37]/20 rounded-md p-8 bg-[#785a09]/5 mb-16 relative">
          {/* Subtle Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/45" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]/45" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]/45" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/45" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <div className="w-14 h-14 rounded-full bg-[#e9c16b]/10 border border-[#D4AF37]/45 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#e9c16b]" />
              </div>
              <div className={`${currentLang === "ar" ? "md:text-right" : ""}`}>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#e9c16b]">
                  {content.teamUniversity}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#f3f0f0]/75">
                  {content.teamCollege}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right shrink-0">
              <span className="font-mono text-xs text-[#e9c16b] bg-[#e9c16b]/15 border border-[#e9c16b]/25 px-3 py-1 rounded-full uppercase tracking-widest font-semibold mb-1">
                Bachelor Graduation Thesis
              </span>
              <span className="font-sans text-xs text-[#f3f0f0]/60">
                {content.teamYear}
              </span>
            </div>
          </div>
        </div>

        {/* Founders and Supervisors Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Founders Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6" id="team-founders-section">
            <h3 className="font-serif font-bold text-xl text-[#e9c16b] border-b border-[#fcf9f8]/10 pb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#D4AF37]" />
              {content.teamMembersTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="founders-grid">
              {content.teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f8]/3 border border-[#fcf9f8]/10 rounded-md p-4 flex gap-3.5 items-start hover:border-[#D4AF37]/50 transition-colors"
                  id={`founder-card-${idx}`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#e9c16b]/10 border border-[#e9c16b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#e9c16b] shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#f3f0f0]">
                      {member.name}
                    </h4>
                    <p className="font-sans text-[11px] text-[#fcf9f8]/60">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supervisors Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6" id="team-supervisors-section">
            <h3 className="font-serif font-bold text-xl text-[#e9c16b] border-b border-[#fcf9f8]/10 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              {content.teamSupervisorsTitle}
            </h3>

            <div className="space-y-4" id="supervisors-list">
              {content.teamSupervisors.map((supervisor, idx) => (
                <div
                  key={idx}
                  className="bg-[#785a09]/10 border border-[#D4AF37]/35 rounded-md p-4 hover:border-[#D4AF37] transition-colors"
                  id={`supervisor-card-${idx}`}
                >
                  <h4 className="font-serif font-bold text-sm text-[#e9c16b]">
                    {supervisor.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#fcf9f8]/70">
                    {supervisor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Resources, Disclaimers, and Credits */}
        <div className="border-t border-[#fcf9f8]/10 pt-10" id="footer-bottom-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Disclaimer & Copyright */}
            <div className="space-y-4 text-center md:text-left">
              <p className="font-serif font-bold text-sm text-[#e9c16b]">
                Heritage Hub
              </p>
              <p className="font-sans text-xs text-[#f3f0f0]/50 leading-relaxed max-w-md">
                {content.footerDisclaimer}
              </p>
              <p className="font-sans text-[11px] text-[#fcf9f8]/40">
                {content.footerCopyright}
              </p>
            </div>

            {/* Resources Links column */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#e9c16b] text-center md:text-right">
                {content.footerLinksTitle}
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end" id="resource-links-row">
                {/* Thesis link */}
                <a
                  href="#thesis-pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#fcf9f8]/5 border border-[#fcf9f8]/10 text-xs font-sans text-[#f3f0f0] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all justify-center"
                >
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <span>{content.footerThesisLabel}</span>
                </a>

                {/* Github Link */}
                <a
                  href="#github-repository"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#fcf9f8]/5 border border-[#fcf9f8]/10 text-xs font-sans text-[#f3f0f0] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all justify-center"
                >
                  <Github className="w-4 h-4 text-[#f3f0f0]" />
                  <span>{content.footerGithubLabel}</span>
                </a>

                {/* API Docs Link */}
                <a
                  href="#api-technical-docs"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#fcf9f8]/5 border border-[#fcf9f8]/10 text-xs font-sans text-[#f3f0f0] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all justify-center"
                >
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>{content.footerApiDocsLabel}</span>
                </a>
              </div>

              {/* Teammate separate gamification vision prototype citation */}
              <p className="font-mono text-[9px] text-[#f3f0f0]/35 leading-normal text-center md:text-right max-w-md md:ml-auto">
                * Note: Gamification features (daily streaks, XP, achievements) are out of scope for the core MVP and are demonstrated on a separate student showcase prototype website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
