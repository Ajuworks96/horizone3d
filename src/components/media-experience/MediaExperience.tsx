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
    <section id="media" className="relative bg-transparent py-24 sm:py-32 border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h3d-blue/10 text-xs font-semibold text-h3d-blue uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Spatial Format Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              Media, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                In Motion.
              </span>
            </h2>
          </div>

          {/* Controls: Day / Night Illumination Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 rounded-xl bg-[#F8FAFC] border border-black/[0.08] text-xs font-sans shadow-sm">
              <button
                onClick={() => setNightMode(false)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all font-medium ${
                  !nightMode
                    ? "bg-amber-100 text-amber-900 font-bold border border-amber-300"
                    : "text-[#6B7280] hover:text-[#0A0B0E]"
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Daylight</span>
              </button>
              <button
                onClick={() => setNightMode(true)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all font-medium ${
                  nightMode
                    ? "bg-h3d-blue/10 text-h3d-blue font-bold border border-h3d-blue/30 shadow-sm"
                    : "text-[#6B7280] hover:text-[#0A0B0E]"
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-h3d-blue" />
                <span>Night Illumination</span>
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
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border relative ${
                  isSelected
                    ? "bg-[#0A0B0E] border-[#0A0B0E] text-white shadow-lg shadow-black/10 -translate-y-0.5"
                    : "bg-white border-black/[0.08] text-[#6B7280] hover:border-black/20 hover:text-[#0A0B0E]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isSelected ? "text-zinc-400" : "text-[#9CA3AF]"}>{format.tag}</span>
                  <span className={`font-semibold ${isSelected ? "text-blue-400" : "text-h3d-blue"}`}>{format.category}</span>
                </div>
                <div className="text-xs sm:text-sm font-display font-bold leading-snug">
                  {format.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Master Spatial Format Presentation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl">
          {/* Left Column: Visual Rendering with Day/Night Effect */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/[0.1] bg-black shadow-md">
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
                <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  FORMAT {currentFormat.tag} // {currentFormat.category}
                </div>
                <div className="px-2.5 py-1 rounded-full bg-h3d-blue backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>{nightMode ? "NIGHT ACTIVE" : "DAYLIGHT OPTIMIZED"}</span>
                </div>
              </div>

              {/* Bottom Specs Ticker */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90">
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
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">ILLUMINATION</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">{currentFormat.illumination}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">IMPACT ZONE</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">{currentFormat.impactZone}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">STRUCTURE</div>
                <div className="text-[#0A0B0E] font-semibold truncate mt-0.5">Heavy Gauge Certified</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] text-[9px] uppercase">TERRITORY</div>
                <div className="text-h3d-blue font-bold truncate mt-0.5">Guruvayur Network</div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification & Direct Booking Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-h3d-blue tracking-wider uppercase">
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
                <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
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
                className="w-full py-3.5 px-6 bg-h3d-blue hover:bg-blue-600 text-white rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all active:scale-[0.99]"
              >
                <span>BOOK THIS MEDIA FORMAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs font-sans text-[#6B7280]">
                Direct verification with H3D media operations desk
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
