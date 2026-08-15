"use client";

import React from "react";
import { H3D_DATA } from "../../lib/data";
import { Compass, Building2 } from "lucide-react";

export const AboutManifesto: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#FFFFFF] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Background radial grid */}
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>ABOUT HORIZON 3D MEDIA CO.</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase leading-[1.08]">
              TRANSFORMING PUBLIC SPACES WITH SMART ADVERTISING.
            </h2>

            <div className="space-y-4 text-[#4A4E5C] font-sans text-sm sm:text-base leading-relaxed border-l-2 border-h3d-blue pl-6 my-6">
              <p>{H3D_DATA.manifesto.p1}</p>
              <p>{H3D_DATA.manifesto.p2}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-black/[0.08] text-xs font-mono">
              <div>
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">CORE REGION</div>
                <div className="text-[#0A0B0E] font-bold mt-1">Guruvayur Municipality</div>
              </div>
              <div>
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">INFRASTRUCTURE</div>
                <div className="text-[#0A0B0E] font-bold mt-1">Transit & Arterials</div>
              </div>
              <div>
                <div className="text-[#6B7280] uppercase text-[10px] font-semibold">NETWORK STANDARD</div>
                <div className="text-h3d-blue font-bold mt-1">High-Nit Display Tech</div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Quote Card */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-8 sm:p-10 space-y-6 shadow-md relative">
            <div className="w-8 h-8 rounded bg-h3d-blue/15 flex items-center justify-center text-h3d-blue">
              <Building2 className="w-4 h-4" />
            </div>

            <blockquote className="text-lg sm:text-xl font-display font-bold text-[#0A0B0E] leading-snug">
              &ldquo;{H3D_DATA.manifesto.quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-[#6B7280]">
              <span>H3D BRAND MANIFESTO</span>
              <span className="font-semibold text-[#0A0B0E]">EST. GURUVAYUR HUB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
