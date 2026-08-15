"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveRight, Layers, Sparkles, Navigation } from "lucide-react";

export const CityCanvasStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const storyNodes = [
    {
      stage: "01",
      name: "CITY",
      tagline: "The Macro Environment",
      detail: "Dense municipal corridors, bypass junctions, and daily human commutes form the living pulse of the region.",
      focus: "Urban Scale",
    },
    {
      stage: "02",
      name: "STREET",
      tagline: "The Eye-Level Corridor",
      detail: "Pedestrian sidewalks, temple arteries, and market promenades where people dwell, walk, and look.",
      focus: "Pedestrian Axis",
    },
    {
      stage: "03",
      name: "BUS STOP",
      tagline: "The Commuter Hub",
      detail: "Transit shelters and waiting zones at the New Bus Stand where travelers pause for 8 to 25 minutes.",
      focus: "High-Dwell Time",
    },
    {
      stage: "04",
      name: "BILLBOARD",
      tagline: "The Structural Landmark",
      detail: "Monolithic frontlit unipoles and rooftop frameworks dominating the vehicular skyline with unmissable presence.",
      focus: "Long-Range Impact",
    },
    {
      stage: "05",
      name: "DIGITAL SCREEN",
      tagline: "The Dynamic Pulse",
      detail: "High-nit outdoor LED screen billboards bringing rich motion, real-time daylight contrast, and dayparting.",
      focus: "Broadcast Clarity",
    },
    {
      stage: "06",
      name: "PUBLIC SPACE",
      tagline: "The Shared Experience",
      detail: "Transforming civic infrastructure into aesthetically refined, functional, and commercial public landmarks.",
      focus: "Shared Civic Value",
    },
  ];

  return (
    <section id="canvas-story" className="relative bg-[#FFFFFF] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>THE OOH PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              THE CITY IS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                THE CANVAS.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="text-xs font-mono text-h3d-blue uppercase tracking-widest font-bold">
              SPACE → MEDIA → MOVEMENT → ATTENTION → IMPACT
            </div>
            <p className="text-sm font-sans text-[#4A4E5C]">
              Horizon 3D Media does not simply place ads. We engineer the exact physical touchpoints where real-world movement transforms into lasting visual impression.
            </p>
          </div>
        </div>

        {/* Interactive Step Timeline Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-12">
          {storyNodes.map((node, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={node.stage}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-md text-left transition-all duration-300 border relative overflow-hidden ${
                  isActive
                    ? "bg-white border-h3d-blue text-[#0A0B0E] shadow-[0_4px_20px_rgba(15,82,255,0.15)]"
                    : "bg-[#FAF9F5] border-black/[0.08] text-[#6B7280] hover:bg-white hover:text-[#0A0B0E]"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-h3d-blue" />
                )}
                <div className="text-[10px] font-mono text-[#9CA3AF] mb-1">{node.stage}</div>
                <div className="text-sm sm:text-base font-display font-bold uppercase tracking-wide">
                  {node.name}
                </div>
                <div className="text-[10px] font-mono text-h3d-blue mt-1 font-medium">
                  {node.focus}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Story Stage Showroom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-6 sm:p-10 shadow-lg">
          {/* Left: Dynamic Editorial Stage Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-h3d-blue tracking-widest uppercase flex items-center gap-2 font-bold">
                <span>STAGE {storyNodes[activeStep].stage}</span>
                <span className="text-black/30">•</span>
                <span>{storyNodes[activeStep].focus}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase">
                {storyNodes[activeStep].name}: {storyNodes[activeStep].tagline}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4A4E5C] leading-relaxed font-sans">
              {storyNodes[activeStep].detail}
            </p>

            <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                <Navigation className="w-3.5 h-3.5 text-h3d-blue" />
                <span>GURUVAYUR MUNICIPAL NETWORK</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : storyNodes.length - 1))}
                  className="px-3.5 py-1.5 rounded bg-white hover:bg-black/5 border border-black/10 text-xs font-mono text-[#0A0B0E]"
                  aria-label="Previous step"
                >
                  PREV
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < storyNodes.length - 1 ? prev + 1 : 0))}
                  className="px-3.5 py-1.5 rounded bg-h3d-blue hover:bg-blue-600 text-xs font-mono text-white font-semibold flex items-center gap-1 shadow-sm"
                  aria-label="Next step"
                >
                  <span>NEXT</span>
                  <MoveRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Immersive Photographic Context */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-lg overflow-hidden border border-black/[0.1] bg-black shadow-md group">
            <Image
              src={
                activeStep === 0
                  ? "/images/hero-billboard.jpg"
                  : activeStep === 1
                  ? "/images/street-pillar.jpg"
                  : activeStep === 2
                  ? "/images/transit-shelter.jpg"
                  : activeStep === 3
                  ? "/images/hero-billboard.jpg"
                  : activeStep === 4
                  ? "/images/led-screen.jpg"
                  : "/images/waiting-bench.jpg"
              }
              alt={storyNodes[activeStep].name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Overlay Tag in Image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 rounded bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                LOCATIONAL PROFILE: {storyNodes[activeStep].name} INFRASTRUCTURE
              </div>
              <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE SITE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
