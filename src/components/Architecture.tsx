import React, { useState } from "react";
import { Translation } from "../content";
import { Server, Database, Smartphone, ShieldCheck, RefreshCw, Cpu, Check } from "lucide-react";

interface ArchitectureProps {
  content: Translation;
  currentLang: "en" | "ar";
}

export default function Architecture({ content, currentLang }: ArchitectureProps) {
  const [selectedNode, setSelectedNode] = useState<string>("nestjs");
  const [activeStep, setActiveStep] = useState<number>(-1);

  const nodeIcons = {
    "react-native": <Smartphone className="w-6 h-6 text-[#785a09]" />,
    "nestjs": <ShieldCheck className="w-6 h-6 text-[#74584a]" />,
    "fastapi": <Cpu className="w-6 h-6 text-[#785a09]" />,
    "postgresql": <Database className="w-6 h-6 text-[#74584a]" />,
    "fallback": <RefreshCw className="w-6 h-6 text-[#785a09]" />
  };

  const activeNode = content.archNodes.find((n) => n.id === selectedNode) || content.archNodes[1];

  // Helper to highlight a connection line in the chatbot flow
  const isLineActive = (fromNode: string, toNode: string) => {
    if (activeStep === -1) return false;
    const currentStep = content.archFlowSteps[activeStep];
    if (!currentStep) return false;

    // Map step identifiers to schema keys
    const match = (name: string, nodeId: string) => {
      if (nodeId === "react-native" && name.includes("Client")) return true;
      if (nodeId === "nestjs" && name.includes("NestJS")) return true;
      if (nodeId === "fastapi" && name.includes("FastAPI")) return true;
      return false;
    };

    return match(currentStep.from, fromNode) && match(currentStep.to, toNode);
  };

  return (
    <section
      id="architecture"
      className="py-24 bg-[#fcf9f8] border-b border-[#eae7e7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#785a09] uppercase block mb-3">
            03 / SYSTEM ARCHITECTURE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#74584a] mb-4">
            {content.archTitle}
          </h2>
          <p className="font-sans text-base text-[#4d4638] leading-relaxed">
            {content.archSubtitle}
          </p>
        </div>

        {/* Top interactive notification */}
        <div className="text-center mb-8">
          <p className="inline-block px-4 py-2 bg-[#FCFAED] border border-[#E5D9B6] rounded-md font-sans text-xs text-[#7f7666] italic">
            💡 {content.archInteractiveNotice}
          </p>
        </div>

        {/* Core Layout: Diagram and Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Interactive Diagram Stage (L-Grid 7 cols) */}
          <div className="lg:col-span-7 bg-[#FCFAED] border border-[#E5D9B6] rounded-lg p-6 sm:p-8 shadow-sm">
            {/* Visual Header */}
            <div className="flex justify-between items-center border-b border-[#E5D9B6]/40 pb-4 mb-8">
              <span className="font-mono text-xs text-[#7f7666] font-bold">
                HERITAGE HUB 3-TIER SCHEMATIC
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase">
                  Active Blueprint
                </span>
              </div>
            </div>

            {/* The Visual Node Tree Diagram */}
            <div className="relative py-10 flex flex-col items-center gap-16" id="architecture-diagram-container">
              {/* TIER 1: CLIENT LAYER */}
              <div className="w-full flex justify-center relative">
                <div
                  onClick={() => setSelectedNode("react-native")}
                  onMouseEnter={() => setSelectedNode("react-native")}
                  className={`w-52 px-4 py-3 rounded-md border text-center transition-all duration-300 cursor-pointer relative z-20 ${
                    selectedNode === "react-native"
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/50"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/50 hover:border-[#E5D9B6]"
                  }`}
                  id="diag-node-react-native"
                >
                  <div className="absolute top-1 right-2 font-mono text-[8px] text-[#7f7666]">TIER 1</div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Smartphone className="w-4 h-4 text-[#785a09]" />
                    <span className="font-serif font-bold text-xs text-[#74584a]">React Native Mobile</span>
                  </div>
                  <p className="font-sans text-[10px] text-[#4d4638]/70">Expo Client (RTL Engine)</p>
                </div>

                {/* SVG connection line down from React Native to NestJS API */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 h-16 w-1 z-10">
                  <div
                    className={`w-0.5 h-full mx-auto transition-colors duration-300 ${
                      isLineActive("React Native Client", "NestJS API Gateway") ||
                      isLineActive("NestJS API Gateway", "React Native Client")
                        ? "bg-[#D4AF37]"
                        : "bg-[#7f7666]/30"
                    }`}
                  />
                  {/* Arrowhead */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-4 border-t-[#7f7666]/50 border-x-4 border-x-transparent" />
                </div>

                {/* Dynamic flow labels on connectors */}
                {activeStep !== -1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 bg-[#1b1c1c] text-[#e9c16b] font-mono text-[9px] px-2 py-0.5 rounded shadow">
                    REST Request (JSON + JWT)
                  </div>
                )}
              </div>

              {/* TIER 2: GATEWAY LAYER (NestJS Central Shield) */}
              <div className="w-full flex justify-center relative">
                <div
                  onClick={() => setSelectedNode("nestjs")}
                  onMouseEnter={() => setSelectedNode("nestjs")}
                  className={`w-64 px-4 py-3 rounded-md border text-center transition-all duration-300 cursor-pointer relative z-20 ${
                    selectedNode === "nestjs"
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/50"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/50 hover:border-[#E5D9B6]"
                  }`}
                  id="diag-node-nestjs"
                >
                  <div className="absolute top-1 right-2 font-mono text-[8px] text-[#7f7666]">TIER 2</div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#74584a]" />
                    <span className="font-serif font-bold text-xs text-[#74584a]">NestJS Gateway</span>
                  </div>
                  <p className="font-sans text-[10px] text-[#4d4638]/70">Auth, Cache, API Gateway Routing</p>

                  {/* Warning Sticker */}
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#74584a] text-white font-mono text-[8px] px-2 py-0.5 rounded tracking-wider uppercase whitespace-nowrap">
                    Sole Client Entrypoint
                  </span>
                </div>

                {/* SVG connection lines radiating downwards */}
                <svg className="absolute top-full left-0 right-0 h-16 w-full pointer-events-none z-10" style={{ transform: currentLang === "ar" ? "scaleX(-1)" : "none" }}>
                  {/* Connection to PostgreSQL */}
                  <path
                    d="M 320 0 Q 200 40 180 64"
                    fill="none"
                    stroke={isLineActive("NestJS API Gateway", "PostgreSQL Database") ? "#D4AF37" : "#7f7666"}
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  {/* Connection to FastAPI */}
                  <path
                    d="M 320 0 Q 320 40 320 64"
                    fill="none"
                    stroke={
                      isLineActive("NestJS API Gateway", "FastAPI AI Service") ||
                      isLineActive("FastAPI AI Service", "NestJS API Gateway")
                        ? "#D4AF37"
                        : "#7f7666"
                    }
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  {/* Connection to Fallback / Cache */}
                  <path
                    d="M 320 0 Q 440 40 460 64"
                    fill="none"
                    stroke={selectedNode === "fallback" ? "#D4AF37" : "#7f7666"}
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>

              {/* TIER 3: SERVICES LAYER (Postgres, FastAPI AI, Resiliency) */}
              <div className="w-full grid grid-cols-3 gap-4 relative z-20" id="tier-3-row">
                {/* Database */}
                <div
                  onClick={() => setSelectedNode("postgresql")}
                  onMouseEnter={() => setSelectedNode("postgresql")}
                  className={`px-3 py-3 rounded-md border text-center transition-all duration-300 cursor-pointer ${
                    selectedNode === "postgresql"
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-lg"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/50 hover:border-[#E5D9B6]"
                  }`}
                  id="diag-node-postgresql"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Database className="w-3.5 h-3.5 text-[#74584a]" />
                    <span className="font-serif font-bold text-xs text-[#74584a]">PostgreSQL</span>
                  </div>
                  <p className="font-sans text-[9px] text-[#4d4638]/60">Relational DB (Prisma)</p>
                </div>

                {/* FastAPI AI */}
                <div
                  onClick={() => setSelectedNode("fastapi")}
                  onMouseEnter={() => setSelectedNode("fastapi")}
                  className={`px-3 py-3 rounded-md border text-center transition-all duration-300 cursor-pointer ${
                    selectedNode === "fastapi"
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-lg"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/50 hover:border-[#E5D9B6]"
                  }`}
                  id="diag-node-fastapi"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-[#785a09]" />
                    <span className="font-serif font-bold text-xs text-[#74584a]">FastAPI AI</span>
                  </div>
                  <p className="font-sans text-[9px] text-[#4d4638]/60">Chatbot, Recs, Gemini</p>
                </div>

                {/* Graceful Fallback */}
                <div
                  onClick={() => setSelectedNode("fallback")}
                  onMouseEnter={() => setSelectedNode("fallback")}
                  className={`px-3 py-3 rounded-md border text-center transition-all duration-300 cursor-pointer ${
                    selectedNode === "fallback"
                      ? "bg-[#FCFAED] border-[#D4AF37] shadow-lg"
                      : "bg-[#fcf9f8] border-[#E5D9B6]/50 hover:border-[#E5D9B6]"
                  }`}
                  id="diag-node-fallback"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <RefreshCw className="w-3.5 h-3.5 text-[#785a09]" />
                    <span className="font-serif font-bold text-xs text-[#74584a]">Fallback</span>
                  </div>
                  <p className="font-sans text-[9px] text-[#4d4638]/60">High Availability Layer</p>
                </div>
              </div>
            </div>

            {/* Chatbot Flow Simulation Player */}
            <div className="mt-8 pt-6 border-t border-[#E5D9B6]/40">
              <h4 className="font-serif font-bold text-xs text-[#74584a] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                {content.archFlowTitle}
              </h4>

              <div className="flex flex-col sm:flex-row gap-2 mb-4" id="flow-sim-triggers">
                {content.archFlowSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`px-2.5 py-1.5 rounded text-left font-mono text-[10px] border transition-all ${
                      activeStep === idx
                        ? "bg-[#74584a] text-white border-[#74584a]"
                        : "bg-[#fcf9f8] text-[#4d4638] border-[#E5D9B6]/40 hover:border-[#E5D9B6]"
                    }`}
                    id={`flow-step-btn-${idx}`}
                  >
                    {step.label}
                  </button>
                ))}
                {activeStep !== -1 && (
                  <button
                    onClick={() => setActiveStep(-1)}
                    className="px-2.5 py-1.5 rounded font-mono text-[10px] text-[#ba1a1a] border border-[#ba1a1a]/30 hover:bg-[#ba1a1a]/5"
                    id="flow-step-reset"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Active Step Panel */}
              <div className="bg-[#fcf9f8] border border-[#E5D9B6]/30 rounded p-3 min-h-[64px]">
                {activeStep === -1 ? (
                  <p className="font-sans text-xs text-[#7f7666] italic">
                    Click any simulation step above to trace how an end-user chatbot request routes dynamically through the layers of the Heritage Hub architecture.
                  </p>
                ) : (
                  <div className="flex items-start gap-2.5 animate-fadeIn">
                    <div className="w-4 h-4 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-[9px] font-mono shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs text-[#74584a] mb-0.5">
                        {content.archFlowSteps[activeStep].label}: {content.archFlowSteps[activeStep].from} ➔ {content.archFlowSteps[activeStep].to}
                      </p>
                      <p className="font-sans text-[11px] text-[#4d4638] leading-normal">
                        {content.archFlowSteps[activeStep].desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Inspect Panel (L-Grid 5 cols) */}
          <div
            className="lg:col-span-5 bg-[#FCFAED] border border-[#D4AF37] rounded-lg p-6 sm:p-8 shadow-md relative"
            id="architecture-inspect-panel"
          >
            {/* Museum Card Corner Accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />

            {/* Inspect Badge */}
            <div className="inline-block px-2.5 py-1 bg-[#ffdf9d] text-[#251a00] font-mono text-[9px] tracking-wider uppercase font-bold rounded mb-6">
              {activeNode.badge}
            </div>

            {/* Subsystem Name */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#785a09]/10 flex items-center justify-center">
                {nodeIcons[activeNode.id as keyof typeof nodeIcons] || <Server className="w-5 h-5 text-[#74584a]" />}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#74584a]">
                  {activeNode.title}
                </h3>
                <span className="font-sans text-xs text-[#7f7666]">
                  {activeNode.subtitle}
                </span>
              </div>
            </div>

            {/* Tech details badge */}
            <div className="bg-[#fcf9f8] border border-[#E5D9B6]/40 px-3 py-1.5 rounded font-mono text-[10px] text-[#74584a] font-semibold mb-6">
              STACK: {activeNode.tech}
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#4d4638] leading-relaxed mb-6">
              {activeNode.description}
            </p>

            {/* Key Engineering Details */}
            <div className="space-y-3 pt-4 border-t border-[#E5D9B6]/40">
              <h4 className="font-serif font-bold text-xs text-[#74584a] uppercase tracking-wider">
                Key Engineering Focus
              </h4>
              <ul className="space-y-2.5">
                {activeNode.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-[#4d4638]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
