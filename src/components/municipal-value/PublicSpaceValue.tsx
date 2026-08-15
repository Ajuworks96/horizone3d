"use client";

import React from "react";
import { H3D_DATA } from "../../lib/data";
import { Landmark, Users, TrendingUp, SunMedium, Shield, ArrowUpRight } from "lucide-react";

interface PublicSpaceValueProps {
  onOpenCampaignModal: () => void;
}

export const PublicSpaceValue: React.FC<PublicSpaceValueProps> = ({ onOpenCampaignModal }) => {
  const icons = [Landmark, TrendingUp, Users, SunMedium];

  return (
    <section id="municipal" className="relative bg-white py-24 sm:py-32 border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.06]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h3d-blue/10 text-xs font-semibold text-h3d-blue uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" />
              <span>Civic Partnership & Governance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.05]">
              Public Space. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                Shared Value.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm font-sans text-[#4A4E5C] leading-relaxed">
              We align public-sector urban enhancement with private-sector media investment. Transforming civic transit stops into well-maintained, lighted, and revenue-generating public infrastructure.
            </p>
            <div className="text-xs font-medium text-emerald-600">
              GURUVAYUR MUNICIPAL MODEL • SUSTAINABLE ADVERTISING
            </div>
          </div>
        </div>

        {/* 4 Pillars of Shared Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {H3D_DATA.municipalValue.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.num}
                className="bg-[#F8FAFC] border border-black/[0.06] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-h3d-blue/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-h3d-blue font-bold tracking-wider">
                      PILLAR {item.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white text-[#4A4E5C] group-hover:text-h3d-blue shadow-sm transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#0A0B0E] tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4E5C] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[11px] font-sans text-[#6B7280]">
                  <Shield className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>Civic Integration Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Municipal Partnership Callout */}
        <div className="bg-[#0A0B0E] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
              MUNICIPAL COLLABORATION & SPONSORSHIPS
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Looking to modernize municipal public transit assets?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans">
              Connect with Horizon 3D Media to review infrastructure proposals, bus stand modernization plans, and public space revitalization frameworks.
            </p>
          </div>

          <button
            onClick={onOpenCampaignModal}
            className="shrink-0 px-6 py-3.5 bg-h3d-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 active:scale-[0.98]"
          >
            <span>Partner with H3D</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
