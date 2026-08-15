"use client";

import React from "react";
import Image from "next/image";
import { H3D_DATA } from "../../lib/data";
import { Cpu, Compass, Wifi, Radio, Sparkles } from "lucide-react";

export const FutureCity: React.FC = () => {
  const visionIcons = [Sparkles, Wifi, Radio, Compass];

  return (
    <section id="vision" className="relative bg-[#FAF9F5] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>FUTURE ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              THE CITY IS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                GETTING SMARTER.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="text-xs font-mono text-h3d-blue uppercase tracking-wider font-bold">
              DATA-RESPONSIVE URBAN MEDIA
            </div>
            <p className="text-sm font-sans text-[#4A4E5C]">
              Integrating real-time transit telemetry, commuter navigation, and civic broadcasts into the physical outdoor advertising fabric.
            </p>
          </div>
        </div>

        {/* Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4 Vision Focus Areas */}
          <div className="lg:col-span-6 space-y-3.5">
            {H3D_DATA.futureVision.map((item, idx) => {
              const Icon = visionIcons[idx];
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-lg bg-white border border-black/[0.08] hover:border-h3d-blue/40 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded bg-[#FAF9F5] group-hover:bg-h3d-blue/15 text-[#4A4E5C] group-hover:text-h3d-blue transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-base sm:text-lg font-display font-bold text-[#0A0B0E] tracking-tight">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A4E5C] font-sans leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Realistic Smart Wayfinding Totem in Pedestrian Plaza */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-black/[0.1] bg-black shadow-lg group">
            <Image
              src="/images/smart-totem.jpg"
              alt="Smart City Wayfinding Totem"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                SMART-CITY DIGITAL TOTEM // GURUVAYUR CONCOURSE
              </div>
              <div className="text-[11px] font-mono text-emerald-400 font-semibold bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                LIVE INTERACTIVE PILOT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
