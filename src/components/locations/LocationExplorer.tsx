"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H3D_DATA, MunicipalLocation } from "../../lib/data";
import { MapPin, Navigation, Eye, CheckCircle2, ArrowRight, Activity } from "lucide-react";

interface LocationExplorerProps {
  onSelectLocation: (locationName: string) => void;
}

export const LocationExplorer: React.FC<LocationExplorerProps> = ({ onSelectLocation }) => {
  const [selectedLocId, setSelectedLocId] = useState<string>("loc-1");

  const currentLocation =
    H3D_DATA.locations.find((l) => l.id === selectedLocId) || H3D_DATA.locations[0];

  return (
    <section id="locations" className="relative bg-[#FFFFFF] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Subtle background network grid */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Navigation className="w-3.5 h-3.5" />
              <span>TERRITORY & GEOGRAPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              WHERE ATTENTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                LIVES.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="text-xs font-mono text-emerald-600 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>GURUVAYUR MUNICIPAL NETWORK</span>
            </div>
            <p className="text-sm font-sans text-[#4A4E5C]">
              Concentrated media coverage across the municipal transit terminus, high-density pedestrian pilgrimage corridors, and vehicular bypass rings.
            </p>
          </div>
        </div>

        {/* Spatial Grid Layout: Interactive Vector Network Map + Selected Location Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Custom Vector Architectural Map Container */}
          <div className="lg:col-span-7 bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-6 relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-sm">
            {/* Map Top Metadata */}
            <div className="flex items-center justify-between z-10 text-[11px] font-mono text-[#6B7280] mb-4 pb-3 border-b border-black/[0.08]">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-h3d-blue" />
                <span className="text-[#0A0B0E] font-bold uppercase">MUNICIPAL SPATIAL TOPOLOGY</span>
              </div>
              <span>COORDS: 10.5946° N, 76.0416° E</span>
            </div>

            {/* Architectural Vector SVG Network Grid */}
            <div className="relative w-full h-80 sm:h-96 my-auto flex items-center justify-center">
              <svg
                viewBox="0 0 500 400"
                className="w-full h-full select-none overflow-visible"
              >
                {/* Municipal Boundary & Grid Lines */}
                <rect
                  x="20"
                  y="20"
                  width="460"
                  height="360"
                  fill="#FFFFFF"
                  stroke="rgba(10,11,14,0.08)"
                  strokeWidth="1"
                  rx="6"
                />

                {/* Primary Bypass Arterial Highway (Curved arterial) */}
                <path
                  d="M 30,350 C 140,320 200,200 370,140 C 420,120 470,90 480,40"
                  fill="none"
                  stroke="rgba(15,82,255,0.2)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 30,350 C 140,320 200,200 370,140 C 420,120 470,90 480,40"
                  fill="none"
                  stroke="#0F52FF"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                />

                {/* Secondary Municipal Streets and Transit Corridors */}
                <path
                  d="M 120,40 L 160,180 L 240,210 L 310,290 L 320,360"
                  fill="none"
                  stroke="rgba(10,11,14,0.2)"
                  strokeWidth="4"
                />
                <path
                  d="M 50,140 L 240,210 L 440,260"
                  fill="none"
                  stroke="rgba(10,11,14,0.2)"
                  strokeWidth="4"
                />
                <path
                  d="M 240,210 L 240,370"
                  fill="none"
                  stroke="rgba(10,11,14,0.2)"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />

                {/* Central Multi-Modal Node Concourse Indicator */}
                <circle
                  cx="240"
                  cy="210"
                  r="36"
                  fill="rgba(15,82,255,0.08)"
                  stroke="#0F52FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="240" cy="210" r="18" fill="rgba(15,82,255,0.2)" />

                {/* Sector Labels */}
                <text x="40" y="55" fill="#6B7280" fontSize="10" fontFamily="monospace" fontWeight="600">
                  NORTH TEMPLE SECTOR
                </text>
                <text x="310" y="375" fill="#6B7280" fontSize="10" fontFamily="monospace" fontWeight="600">
                  SOUTH MUNICIPAL ARTERIAL
                </text>
                <text x="340" y="65" fill="#0F52FF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  BYPASS CORRIDOR
                </text>

                {/* Interactive Hotspot Pins */}
                {H3D_DATA.locations.map((loc) => {
                  const isSelected = loc.id === selectedLocId;
                  const svgX = (loc.coords.x / 100) * 500;
                  const svgY = (loc.coords.y / 100) * 400;

                  return (
                    <g
                      key={loc.id}
                      onClick={() => setSelectedLocId(loc.id)}
                      className="cursor-pointer group"
                    >
                      {/* Radiating Ping when selected */}
                      {isSelected && (
                        <circle
                          cx={svgX}
                          cy={svgY}
                          r="22"
                          fill="none"
                          stroke="#0F52FF"
                          strokeWidth="2"
                          className="animate-ping opacity-60"
                        />
                      )}
                      {/* Outer Marker */}
                      <circle
                        cx={svgX}
                        cy={svgY}
                        r={isSelected ? "12" : "9"}
                        fill={isSelected ? "#0F52FF" : "#FFFFFF"}
                        stroke={isSelected ? "#0A0B0E" : "#0F52FF"}
                        strokeWidth="2.5"
                        className="transition-all duration-300 group-hover:scale-125 shadow-md"
                      />
                      {/* Inner Dot */}
                      <circle
                        cx={svgX}
                        cy={svgY}
                        r="4"
                        fill={isSelected ? "#FFFFFF" : "#0F52FF"}
                      />
                      {/* Location Tooltip Name */}
                      <text
                        x={svgX + 16}
                        y={svgY + 4}
                        fill={isSelected ? "#0A0B0E" : "#4A4E5C"}
                        fontSize="10.5"
                        fontFamily="monospace"
                        fontWeight={isSelected ? "bold" : "600"}
                        className="pointer-events-none transition-colors"
                      >
                        {loc.name.split(" ")[0]} {loc.name.split(" ")[1]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Quick Zone Toggles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-black/[0.08] z-10">
              {H3D_DATA.locations.map((loc) => {
                const isSelected = loc.id === selectedLocId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocId(loc.id)}
                    className={`p-2.5 rounded-md text-left transition-all text-xs font-mono truncate border ${
                      isSelected
                        ? "bg-white border-h3d-blue text-[#0A0B0E] font-bold shadow-sm"
                        : "bg-[#FFFFFF]/60 border-black/[0.08] text-[#6B7280] hover:text-[#0A0B0E]"
                    }`}
                  >
                    <div className="text-[9px] text-[#9CA3AF]">{loc.zone.split(" ")[0]}</div>
                    <div className="truncate">{loc.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Location Detail Card */}
          <div className="lg:col-span-5 bg-white border border-black/[0.08] rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-h3d-blue uppercase tracking-wider flex items-center gap-2 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>{currentLocation.zone}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A0B0E] tracking-tight">
                  {currentLocation.name}
                </h3>
                <div className="text-xs font-mono text-emerald-600 font-bold pt-1">
                  {currentLocation.type} • {currentLocation.dailyFootfall}
                </div>
              </div>

              <p className="text-sm text-[#4A4E5C] font-sans leading-relaxed">
                {currentLocation.keyHighlight}
              </p>

              {/* Dwell Profile */}
              <div className="p-3.5 rounded-md bg-[#FAF9F5] border border-black/[0.08] space-y-1">
                <div className="text-[10px] font-mono text-[#6B7280] uppercase font-semibold">
                  ATTENTION & DWELL PROFILE
                </div>
                <div className="text-xs font-mono text-[#0A0B0E] font-bold">
                  {currentLocation.dwellProfile}
                </div>
              </div>

              {/* Available Media Opportunities */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-semibold">
                  DEPLOYABLE MEDIA OPPORTUNITIES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentLocation.mediaAvailable.map((med, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-black/[0.06] text-xs text-[#2D3139] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-h3d-blue shrink-0" />
                      <span className="truncate">{med}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campaign Action */}
            <div className="pt-6 border-t border-black/[0.08]">
              <button
                onClick={() => onSelectLocation(currentLocation.name)}
                className="w-full py-3 px-5 bg-h3d-blue hover:bg-blue-600 text-white rounded font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.25)] transition-all"
              >
                <span>TARGET THIS MUNICIPAL ZONE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
