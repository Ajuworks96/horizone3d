"use client";

import React from "react";
import { H3D_DATA } from "../../lib/data";
import { ArrowUp, Radio } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-[#0A0B0E] border-t border-black/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-black/[0.06]">
          {/* Logo & Corporate Summary */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-h3d-blue flex items-center justify-center font-title font-bold text-white tracking-tight text-lg rounded-lg shadow-md shadow-blue-500/20">
                H3D
              </div>
              <span className="font-display font-bold text-base tracking-wide text-[#0A0B0E]">
                {H3D_DATA.company.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4E5C] font-sans leading-relaxed">
              {H3D_DATA.company.tagline} Operating premier outdoor advertising infrastructure, transit shelters, and high-brightness digital screens across Guruvayur Municipality.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-sans">
            <div className="space-y-3">
              <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-bold">MEDIA NETWORK</div>
              <div className="space-y-2">
                <div><a href="#media" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">LED Billboards</a></div>
                <div><a href="#media" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Large Unipoles</a></div>
                <div><a href="#media" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Transit Shelters</a></div>
                <div><a href="#media" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Waiting Benches</a></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-bold">PRIME LOCATIONS</div>
              <div className="space-y-2">
                <div><a href="#locations" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">New Bus Stand</a></div>
                <div><a href="#locations" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Temple Arterials</a></div>
                <div><a href="#locations" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Bypass Corridors</a></div>
                <div><a href="#locations" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Feeder Shelters</a></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-bold">HORIZON 3D</div>
              <div className="space-y-2">
                <div><a href="#municipal" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Civic Value</a></div>
                <div><a href="#about" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Manifesto & Vision</a></div>
                <div><a href="#contact" className="text-[#4A4E5C] hover:text-h3d-blue transition-colors">Campaign Desk</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-[#0A0B0E]">Guruvayur Municipal Hub, Kerala</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Horizon 3D Media Co. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white hover:bg-black/5 text-[#0A0B0E] border border-black/10 transition-colors flex items-center gap-1 shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
