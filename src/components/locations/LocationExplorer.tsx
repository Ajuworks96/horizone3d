"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H3D_DATA, MunicipalLocation } from "../../lib/data";
import { MapPin, ArrowRight, Sparkles, Users, Clock, CheckCircle2, ChevronRight } from "lucide-react";

interface LocationExplorerProps {
  onSelectLocation: (locationName: string) => void;
}

export const LocationExplorer: React.FC<LocationExplorerProps> = ({ onSelectLocation }) => {
  const [selectedLocId, setSelectedLocId] = useState<string>("loc-1");

  const currentLocation =
    H3D_DATA.locations.find((l) => l.id === selectedLocId) || H3D_DATA.locations[0];

  return (
    <section id="locations" className="relative bg-[#FFFFFF] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/60 via-white to-[#FAF9F5]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h3d-blue/10 text-xs font-semibold text-h3d-blue uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prime Strategic Network</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              Prime Locations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                Across Guruvayur.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>HIGH-IMPACT OOH MEDIA NETWORK</span>
            </div>
            <p className="text-sm font-sans text-[#4A4E5C] leading-relaxed">
              Explore our premier advertising sites across central transit hubs, high-traffic arterial bypasses, and bustling pilgrimage promenades.
            </p>
          </div>
        </div>

        {/* Location Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {H3D_DATA.locations.map((loc) => {
            const isSelected = loc.id === selectedLocId;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocId(loc.id)}
                className={`group p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0A0B0E] text-white border-[#0A0B0E] shadow-lg shadow-black/15 -translate-y-0.5"
                    : "bg-[#FAF9F5] hover:bg-white text-[#2D3139] border-black/[0.08] hover:border-black/20"
                }`}
              >
                <div className="space-y-1">
                  <div className={`text-[10px] font-bold tracking-wider uppercase ${
                    isSelected ? "text-h3d-blue-glow" : "text-[#6B7280]"
                  }`}>
                    {loc.tag}
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base leading-snug line-clamp-2">
                    {loc.name}
                  </div>
                </div>

                <div className={`mt-3 text-xs flex items-center justify-between font-medium ${
                  isSelected ? "text-zinc-300" : "text-[#6B7280]"
                }`}>
                  <span>{loc.dailyFootfall.split(" ")[0]} Reach</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-h3d-blue" : "group-hover:translate-x-0.5"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Banner for Selected Location */}
        <div className="bg-[#FAF9F5] border border-black/[0.08] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left / Hero: Real Location Photo with Atmosphere */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden group">
            <Image
              src={currentLocation.image}
              alt={currentLocation.name}
              fill
              priority
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

            {/* Overlaid Location Badge & Name */}
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>{currentLocation.zone}</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-h3d-blue text-white text-xs font-bold shadow-md shadow-blue-500/30">
                  {currentLocation.tag}
                </span>
              </div>

              <div className="space-y-2 max-w-xl">
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-300 uppercase">
                  {currentLocation.type}
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight drop-shadow-md">
                  {currentLocation.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Location Insights, Footfall & Available Media */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Highlight Overview */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Location Overview
                </div>
                <p className="text-sm sm:text-base text-[#2D3139] leading-relaxed font-sans">
                  {currentLocation.keyHighlight}
                </p>
              </div>

              {/* Real Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-medium">
                    <Users className="w-4 h-4 text-h3d-blue" />
                    <span>Daily Reach</span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-[#0A0B0E]">
                    {currentLocation.dailyFootfall}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-medium">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Dwell Exposure</span>
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-[#0A0B0E] line-clamp-2">
                    {currentLocation.dwellProfile}
                  </div>
                </div>
              </div>

              {/* Available Media Formats Pills */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Available Media at this Site
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentLocation.mediaAvailable.map((media, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-black/[0.08] text-xs font-medium text-[#0A0B0E]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-h3d-blue shrink-0" />
                      <span>{media}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Book This Location CTA */}
            <div className="pt-6 border-t border-black/[0.08]">
              <button
                onClick={() => onSelectLocation(currentLocation.name)}
                className="w-full py-3.5 px-6 bg-h3d-blue hover:bg-blue-600 text-white rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 active:scale-[0.99]"
              >
                <span>Book / Inquire This Location</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Zone Photo Gallery Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {H3D_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              onClick={() => setSelectedLocId(loc.id)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-black/[0.08] shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  {loc.tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-blue-300 font-semibold uppercase">{loc.zone}</div>
                  <h4 className="font-display font-bold text-sm leading-snug truncate">{loc.name}</h4>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-[#4A4E5C]">
                <span className="font-medium">{loc.dailyFootfall.split(" ")[0]} Reach</span>
                <span className="text-h3d-blue font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
