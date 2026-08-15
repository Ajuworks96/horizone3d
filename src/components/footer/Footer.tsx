"use client";

import React from "react";
import { H3D_DATA } from "../../lib/data";
import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { H3DLogo } from "../brand/H3DLogo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0B0E] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden z-10">
      {/* Background Ambient Glow in Footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-h3d-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-16 border-b border-white/10">
          <div className="space-y-3 max-w-xl">
            <H3DLogo size="lg" theme="dark" variant="horizontal" />
            <p className="text-sm text-zinc-400 font-sans leading-relaxed pt-2">
              {H3D_DATA.company.tagline} Transforming public spaces into revenue-generating, beautifully maintained civic media infrastructure across Guruvayur Municipality.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/919947834661?text=Hello%20Horizon%203D%20Media,%20I%20would%20like%20to%20inquire%20about%20advertising%20spaces.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
            >
              <span>WhatsApp Inquiries</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${H3D_DATA.company.email}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl flex items-center gap-2 border border-white/15 transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{H3D_DATA.company.email}</span>
            </a>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10 text-sm font-sans">
          <div className="space-y-4">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Media Formats
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#media" className="hover:text-white transition-colors">3D LED Billboards</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Arterial Unipoles</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Transit Shelters</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Civic Waiting Benches</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Wayfinding Totems</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Prime Locations
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#locations" className="hover:text-white transition-colors">New Bus Stand Terminal</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">East Temple Corridor</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">West Nada Artery</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Municipal Bypass Ring</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Feeder Shelters</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Organization
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#municipal" className="hover:text-white transition-colors">Civic Value Model</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Brand Manifesto</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Campaign Planner</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Contact Desk
            </div>
            <div className="space-y-3 text-zinc-400 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Guruvayur Municipality, Thrissur Dist., Kerala, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{H3D_DATA.company.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{H3D_DATA.company.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-sans">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300 font-medium">Guruvayur Municipal Hub • Active</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Horizon 3D Media Co. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 shadow-sm border border-white/10 active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
