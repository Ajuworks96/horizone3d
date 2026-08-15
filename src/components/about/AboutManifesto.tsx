"use client";

import React from "react";
import { H3D_DATA } from "../../lib/data";
import { Compass, Building2 } from "lucide-react";
import { H3DLogo } from "../brand/H3DLogo";

export const AboutManifesto: React.FC = () => {
  return (
    <section id="about" className="relative bg-transparent py-24 sm:py-32 border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h3d-blue/10 text-xs font-semibold text-h3d-blue uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>About Horizon 3D Media Co.</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase leading-[1.08]">
              Transforming Public Spaces with Smart Advertising.
            </h2>

            <div className="space-y-4 text-[#4A4E5C] font-sans text-sm sm:text-base leading-relaxed border-l-2 border-h3d-blue pl-6 my-6">
              <p>{H3D_DATA.manifesto.p1}</p>
              <p>{H3D_DATA.manifesto.p2}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-black/[0.06] text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">CORE REGION</div>
                <div className="text-[#0A0B0E] font-bold mt-1">Guruvayur Municipality</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">INFRASTRUCTURE</div>
                <div className="text-[#0A0B0E] font-bold mt-1">Transit & Arterials</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-black/[0.06]">
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">NETWORK STANDARD</div>
                <div className="text-h3d-blue font-bold mt-1">High-Nit Display Tech</div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Quote Card */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-black/[0.08] rounded-2xl p-8 sm:p-10 space-y-6 shadow-xl relative">
            <H3DLogo size="lg" variant="horizontal" theme="light" />

            <blockquote className="text-lg sm:text-xl font-display font-bold text-[#0A0B0E] leading-snug">
              &ldquo;{H3D_DATA.manifesto.quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-sans text-[#6B7280]">
              <span>H3D Brand Manifesto</span>
              <span className="font-semibold text-[#0A0B0E]">Guruvayur Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
