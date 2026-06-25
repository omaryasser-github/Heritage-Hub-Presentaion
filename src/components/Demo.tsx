import React, { useState } from "react";
import { Translation } from "../content";
import { Play, Download, CheckCircle, Monitor, Smartphone, Volume2, Shield } from "lucide-react";

interface DemoProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Demo({ content, currentLang }: DemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // SVG QR Code generator function for robust, zero-broken-image, high-fidelity QR renderings
  const renderQrCode = (seedText: string) => {
    return (
      <svg
        viewBox="0 0 100 100"
        className="w-36 h-36 mx-auto text-[#74584a] p-2 bg-[#fcf9f8] border border-[#E5D9B6]/60 rounded-md shadow-inner"
        id={`qr-${seedText.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {/* Core QR anchors */}
        <rect x="5" y="5" width="25" height="25" fill="currentColor" rx="1" />
        <rect x="9" y="9" width="17" height="17" fill="none" stroke="#FCFAED" strokeWidth="4" />
        <rect x="13" y="13" width="9" height="9" fill="#D4AF37" />

        <rect x="70" y="5" width="25" height="25" fill="currentColor" rx="1" />
        <rect x="74" y="9" width="17" height="17" fill="none" stroke="#FCFAED" strokeWidth="4" />
        <rect x="78" y="13" width="9" height="9" fill="#D4AF37" />

        <rect x="5" y="70" width="25" height="25" fill="currentColor" rx="1" />
        <rect x="9" y="74" width="17" height="17" fill="none" stroke="#FCFAED" strokeWidth="4" />
        <rect x="13" y="78" width="9" height="9" fill="#D4AF37" />

        {/* Decorative micro modules (mimicking a complex QR grid) */}
        <rect x="40" y="5" width="6" height="6" fill="currentColor" />
        <rect x="50" y="10" width="8" height="4" fill="#D4AF37" />
        <rect x="45" y="20" width="10" height="6" fill="currentColor" />
        <rect x="60" y="15" width="4" height="10" fill="currentColor" />

        <rect x="5" y="40" width="6" height="6" fill="currentColor" />
        <rect x="15" y="50" width="10" height="4" fill="currentColor" />
        <rect x="10" y="60" width="4" height="8" fill="#D4AF37" />

        <rect x="40" y="40" width="15" height="15" fill="currentColor" />
        <rect x="43" y="43" width="9" height="9" fill="#FCFAED" />
        <rect x="46" y="46" width="3" height="3" fill="#D4AF37" />

        <rect x="75" y="45" width="8" height="8" fill="currentColor" />
        <rect x="85" y="40" width="10" height="4" fill="currentColor" />
        <rect x="80" y="55" width="4" height="10" fill="#D4AF37" />

        <rect x="40" y="75" width="10" height="6" fill="currentColor" />
        <rect x="55" y="80" width="8" height="10" fill="currentColor" />
        <rect x="45" y="90" width="12" height="4" fill="#D4AF37" />

        <rect x="75" y="75" width="6" height="15" fill="currentColor" />
        <rect x="85" y="85" width="10" height="10" fill="#D4AF37" />
        <rect x="90" y="75" width="5" height="5" fill="currentColor" />

        {/* Small center decorative compass glyph (for museum look) */}
        <circle cx="50" cy="50" r="4" fill="#74584a" />
      </svg>
    );
  };

  return (
    <section
      id="demo"
      className="py-24 bg-[#fcf9f8] border-b border-[#eae7e7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#785a09] uppercase block mb-3">
            05 / EXAMINER PORTAL
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#74584a] mb-4">
            {content.demoTitle}
          </h2>
          <p className="font-sans text-base text-[#4d4638] leading-relaxed">
            {content.demoSubtitle}
          </p>
        </div>

        {/* Grid: Video Walkthrough and QR Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: Video walkthrough (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="demo-video-col">
            <div className="bg-[#FCFAED] border border-[#E5D9B6] rounded-md p-6 shadow-sm flex-grow">
              <h3 className="font-serif font-bold text-xl text-[#74584a] mb-2 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-[#785a09]" />
                {content.demoVideoTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4d4638] mb-6">
                {content.demoVideoDesc}
              </p>

              {/* 16:9 Interactive Media Console */}
              <div
                className="relative aspect-video rounded bg-[#1b1c1c] overflow-hidden border border-[#E5D9B6]/40 shadow-inner group cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
                id="video-player-container"
              >
                {!isPlaying ? (
                  // Player Poster Cover
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/90 via-[#1b1c1c]/40 to-[#1b1c1c]/90" />

                    <img
                      src="/src/assets/images/hero_egypt_sunset_1782398079787.jpg"
                      alt="walkthrough backdrop"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none group-hover:scale-101 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Centered Play Button */}
                    <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white translate-x-0.5" />
                    </div>

                    <span className="relative z-20 font-mono text-[10px] tracking-widest text-[#e9c16b] uppercase mt-4 bg-[#1b1c1c]/80 px-3 py-1.5 rounded border border-[#D4AF37]/20">
                      Launch Video Player (Interactive)
                    </span>
                  </div>
                ) : (
                  // Active Animated Walkthrough Simulation (examiners get a beautiful preview)
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1b1c1c] animate-fadeIn">
                    {/* Simulated Screen Recording Graphics */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white font-mono text-[9px] opacity-70">
                      <span>● WALKTHROUGH_ACTIVE_1080P_60FPS</span>
                      <span>0:42 / 1:30</span>
                    </div>

                    {/* Simulated Active App State Visuals (Slideshow style mock) */}
                    <div className="text-center px-6 max-w-md space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 to-[#B8860B]/20 border border-[#D4AF37] flex items-center justify-center mx-auto animate-pulse">
                        <Smartphone className="w-8 h-8 text-[#e9c16b]" />
                      </div>
                      <p className="font-serif font-bold text-base text-[#e9c16b]">
                        Simulated Walkthrough Player
                      </p>
                      <p className="font-sans text-xs text-[#f3f0f0]/80">
                        This console simulates the 90s app review. In a production environment, this is replaced by the video file hosted at `/assets/videos/walkthrough.mp4`.
                      </p>
                    </div>

                    {/* Player Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[9px] opacity-70">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span>PLAYING</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(false);
                        }}
                        className="px-2 py-1 rounded bg-[#74584a] text-white text-[8px] hover:bg-[#785a09] font-bold"
                      >
                        PAUSE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Examiner download portals (5 cols) */}
          <div className="lg:col-span-5 bg-[#FCFAED] border border-[#E5D9B6] rounded-md p-6 shadow-sm flex flex-col justify-between" id="demo-qr-col">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#74584a] mb-2 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#74584a]" />
                {content.demoDownloadTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4d4638] mb-8">
                Scan these secure download channels to run the physical React Native binary packages on testbed platforms.
              </p>

              {/* QR side-by-side wrappers */}
              <div className="grid grid-cols-2 gap-6 text-center" id="qr-codes-grid">
                {/* Android Portal */}
                <div className="space-y-3">
                  {renderQrCode("Android APK Bundle")}
                  <p className="font-serif font-bold text-xs text-[#74584a]">
                    {content.demoQrApkLabel}
                  </p>
                  <a
                    href="#android-apk-download"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#785a09]/5 border border-[#D4AF37]/20 text-[10px] font-semibold text-[#74584a] hover:bg-[#785a09] hover:text-white transition-all"
                  >
                    <Download className="w-3 h-3" />
                    <span>APK Package</span>
                  </a>
                </div>

                {/* iOS Portal */}
                <div className="space-y-3">
                  {renderQrCode("iOS TestFlight Sandbox")}
                  <p className="font-serif font-bold text-xs text-[#74584a]">
                    {content.demoQrIosLabel}
                  </p>
                  <a
                    href="#ios-testflight-access"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#785a09]/5 border border-[#D4AF37]/20 text-[10px] font-semibold text-[#74584a] hover:bg-[#785a09] hover:text-white transition-all"
                  >
                    <Download className="w-3 h-3" />
                    <span>TestFlight iOS</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 pt-4 border-t border-[#eae7e7] flex gap-2 items-start text-[10px] font-sans text-[#7f7666] leading-relaxed">
              <Shield className="w-4 h-4 text-[#785a09] shrink-0 mt-0.5" />
              <span>
                Examiner packages are statically sandboxed. Communication utilizes mock databases where external network gateway access (FastAPI, NestJS REST Nodes) is unavailable.
              </span>
            </div>
          </div>
        </div>

        {/* Examiner Guide checklist - "What examiners should try live" */}
        <div className="mt-12 bg-[#FCFAED] border border-[#D4AF37] rounded-md p-6 sm:p-8" id="examiners-checklist">
          <h3 className="font-serif font-bold text-lg text-[#74584a] mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#785a09]" />
            {content.demoWalkthroughTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="checklist-steps-grid">
            {content.demoWalkthroughSteps.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-[#785a09]/10 text-[#785a09] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#4d4638] leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
