"use client";

import React, { useState } from "react";
import { H3D_DATA, ImplementationPhase } from "../../lib/data";
import { Check, Hammer, Play, Activity, SlidersHorizontal, ArrowRight } from "lucide-react";

export const BuildJourney: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const phaseIcons = [SlidersHorizontal, Hammer, Play, Activity];
  const currentPhase = H3D_DATA.implementationPhases[activePhaseIndex];

  return (
    <section id="process" className="relative bg-[#FFFFFF] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Hammer className="w-3.5 h-3.5" />
              <span>THE 4-PHASE EXECUTION FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              FROM BLUEPRINT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                TO BROADCAST.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="text-xs font-mono text-h3d-blue uppercase tracking-wider font-bold">
              SURVEY → BUILD → ACTIVATE → SCALE
            </div>
            <p className="text-sm font-sans text-[#4A4E5C]">
              A structured four-tier engineering and operational rollout ensuring structural safety, statutory compliance, and flawless brand execution.
            </p>
          </div>
        </div>

        {/* 4-Step Interactive Navigation Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {H3D_DATA.implementationPhases.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            const Icon = phaseIcons[idx];
            return (
              <button
                key={phase.step}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-lg text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-h3d-blue text-[#0A0B0E] shadow-[0_4px_20px_rgba(15,82,255,0.15)]"
                    : "bg-[#FAF9F5] border-black/[0.08] text-[#6B7280] hover:bg-white hover:text-[#0A0B0E]"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-h3d-blue" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-h3d-blue">PHASE {phase.step}</span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-h3d-blue" : "text-[#9CA3AF]"}`} />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-display font-bold uppercase tracking-tight">
                    {phase.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#6B7280] mt-1 truncate">
                    {phase.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Blueprint Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-6 sm:p-10 shadow-lg">
          {/* Left: Phase Technical Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-h3d-blue uppercase tracking-widest flex items-center gap-2 font-bold">
                <span>PHASE {currentPhase.step} // EXECUTION DETAILS</span>
                <span className="text-black/30">•</span>
                <span className="text-emerald-600">{currentPhase.specs}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase">
                {currentPhase.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#6B7280]">
                {currentPhase.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4A4E5C] font-sans leading-relaxed">
              {currentPhase.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-semibold">
                CORE PHASE DELIVERABLES
              </div>
              <div className="space-y-2">
                {currentPhase.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2.5 rounded bg-white border border-black/[0.06] text-xs sm:text-sm text-[#2D3139] font-medium shadow-sm"
                  >
                    <div className="w-4 h-4 rounded-full bg-h3d-blue/15 text-h3d-blue flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Architectural Blueprint / Structural Evolution Graphic */}
          <div className="lg:col-span-6 bg-white border border-black/[0.1] rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[340px] shadow-sm">
            {/* Blueprint Grid Lines & Status */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#6B7280] pb-3 border-b border-black/[0.08]">
              <span className="text-h3d-blue font-bold">SCHEMATIC: CAD-SPEC-0{activePhaseIndex + 1}</span>
              <span>SITE: GURUVAYUR TRANSIT ZONE</span>
            </div>

            {/* Architectural Isometric Wireframe Diagram */}
            <div className="my-auto py-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative w-48 h-32 border-2 border-dashed border-h3d-blue/40 rounded-lg flex flex-col items-center justify-center bg-h3d-blue/[0.04]">
                {activePhaseIndex === 0 && (
                  <div className="space-y-1.5 text-h3d-blue">
                    <div className="text-2xl font-mono font-bold">📐 SITE MAP</div>
                    <div className="text-[10px] font-mono text-[#0A0B0E] font-medium">Line-of-Sight Verified</div>
                  </div>
                )}
                {activePhaseIndex === 1 && (
                  <div className="space-y-1.5 text-amber-600">
                    <div className="text-2xl font-mono font-bold">🏗️ STEEL TRUSS</div>
                    <div className="text-[10px] font-mono text-[#0A0B0E] font-medium">Civil Base & Frame Erected</div>
                  </div>
                )}
                {activePhaseIndex === 2 && (
                  <div className="space-y-1.5 text-emerald-600">
                    <div className="text-2xl font-mono font-bold">⚡ LIVE SCREEN</div>
                    <div className="text-[10px] font-mono text-[#0A0B0E] font-medium">Illuminated & Broadcasting</div>
                  </div>
                )}
                {activePhaseIndex === 3 && (
                  <div className="space-y-1.5 text-blue-600">
                    <div className="text-2xl font-mono font-bold">📈 EXPANSION</div>
                    <div className="text-[10px] font-mono text-[#0A0B0E] font-medium">Network Scaling Active</div>
                  </div>
                )}
              </div>
              <div className="text-xs font-mono text-[#4A4E5C] max-w-xs">
                Structural integrity and continuous visual uptime guaranteed by H3D engineering.
              </div>
            </div>

            {/* Step navigation bottom bar */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] text-xs font-mono">
              <span className="text-[#6B7280]">STEP {activePhaseIndex + 1} OF 4</span>
              <button
                onClick={() => setActivePhaseIndex((prev) => (prev < 3 ? prev + 1 : 0))}
                className="text-h3d-blue hover:text-[#0A0B0E] font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>ADVANCE TIMELINE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
