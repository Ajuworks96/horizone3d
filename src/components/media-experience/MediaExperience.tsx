"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H3D_DATA, MediaFormat } from "../../lib/data";
import {
  Sun,
  Moon,
  Maximize2,
  Clock,
  MapPin,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface MediaExperienceProps {
  onSelectFormat: (formatId: string) => void;
}

export const MediaExperience: React.FC<MediaExperienceProps> = ({ onSelectFormat }) => {
  const [selectedFormatId, setSelectedFormatId] = useState<string>("led-screen-billboards");
  const [nightMode, setNightMode] = useState<boolean>(true);

  const currentFormat =
    H3D_DATA.mediaFormats.find((f) => f.id === selectedFormatId) || H3D_DATA.mediaFormats[0];

  return (
    <section id="media" className="relative bg-[#FAF9F5] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>SPATIAL FORMAT EXPLORER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              MEDIA, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                IN MOTION.
              </span>
            </h2>
          </div>

          {/* Controls: Day / Night Illumination Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 rounded-md bg-white border border-black/[0.1] text-xs font-mono shadow-sm">
              <button
                onClick={() => setNightMode(false)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded transition-all ${
                  !nightMode
                    ? "bg-amber-100 text-amber-900 font-bold border border-amber-300"
                    : "text-[#6B7280] hover:text-[#0A0B0E]"
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>DAYLIGHT</span>
              </button>
              <button
                onClick={() => setNightMode(true)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded transition-all ${
                  nightMode
                    ? "bg-h3d-blue/10 text-h3d-blue font-bold border border-h3d-blue/30 shadow-sm"
                    : "text-[#6B7280] hover:text-[#0A0B0E]"
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-h3d-blue" />
                <span>NIGHT ILLUMINATION</span>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Interactive Format Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {H3D_DATA.mediaFormats.map((format) => {
            const isSelected = format.id === selectedFormatId;
            return (
              <button
                key={format.id}
                onClick={() => setSelectedFormatId(format.id)}
                className={`p-3.5 rounded-md text-left transition-all duration-200 border relative ${
                  isSelected
                    ? "bg-white border-h3d-blue text-[#0A0B0E] shadow-[0_4px_20px_rgba(15,82,255,0.15)]"
                    : "bg-[#FFFFFF]/70 border-black/[0.08] text-[#6B7280] hover:bg-white hover:text-[#0A0B0E]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#9CA3AF] mb-1">
                  <span>{format.tag}</span>
                  <span className="text-h3d-blue font-semibold">{format.category}</span>
                </div>
                <div className="text-xs sm:text-sm font-display font-bold leading-snug">
                  {format.name}
                </div>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-h3d-blue" />
                )}
              </button>
            );
          })}
        </div>

        {/* Master Spatial Format Presentation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-black/[0.08] rounded-lg p-6 sm:p-10 shadow-lg">
          {/* Left Column: Visual Rendering with Day/Night Effect */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/[0.1] bg-black shadow-md">
              <Image
                src={currentFormat.image}
                alt={currentFormat.name}
                fill
                className={`object-cover transition-all duration-700 ${
                  nightMode ? "brightness-105 contrast-110" : "brightness-95 contrast-95"
                }`}
              />

              {/* Dynamic Day/Night Lighting Filter Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  nightMode
                    ? "bg-blue-950/20 mix-blend-multiply"
                    : "bg-amber-100/10 mix-blend-soft-light"
                }`}
              />

              {/* Format Badge Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="px-3 py-1 rounded bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  FORMAT {currentFormat.tag} // {currentFormat.category}
                </div>
                <div className="px-2.5 py-1 rounded bg-h3d-blue backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>{nightMode ? "NIGHT ACTIVE" : "DAYLIGHT OPTIMIZED"}</span>
                </div>
              </div>

              {/* Bottom Specs Ticker */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90">
                <div className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>{currentFormat.dimensions}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>Dwell: {currentFormat.dwellTime}</span>
                </div>
              </div>
            </div>

            {/* Architectural Engineering Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-[11px] font-mono">
              <div className="p-3 rounded-md bg-[#FAF9F5] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">ILLUMINATION</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">{currentFormat.illumination}</div>
              </div>
              <div className="p-3 rounded-md bg-[#FAF9F5] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">IMPACT ZONE</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">{currentFormat.impactZone}</div>
              </div>
              <div className="p-3 rounded-md bg-[#FAF9F5] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">STRUCTURE</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">Heavy Gauge Certified</div>
              </div>
              <div className="p-3 rounded-md bg-[#FAF9F5] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">TERRITORY</div>
                <div className="text-h3d-blue font-bold truncate mt-0.5">Guruvayur Network</div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification & Direct Booking Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-h3d-blue tracking-wider uppercase font-bold">
                  ARCHITECTURAL PROFILE
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A0B0E] tracking-tight">
                  {currentFormat.name}
                </h3>
              </div>

              <p className="text-sm text-[#4A4E5C] font-sans leading-relaxed">
                {currentFormat.description}
              </p>

              {/* Key Engineering Features */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-semibold">
                  ENGINEERING SPECIFICATIONS
                </div>
                <ul className="space-y-2">
                  {currentFormat.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#2D3139] font-sans">
                      <ShieldCheck className="w-4 h-4 text-h3d-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conversion Trigger Button */}
            <div className="pt-6 border-t border-black/[0.08] space-y-3">
              <button
                onClick={() => onSelectFormat(currentFormat.id)}
                className="w-full py-3.5 px-6 bg-h3d-blue hover:bg-blue-600 text-white rounded font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
              >
                <span>BOOK THIS MEDIA FORMAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[10px] font-mono text-[#6B7280]">
                Direct verification with H3D media operations desk
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
