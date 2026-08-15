"use client";

import React, { useState, useEffect } from "react";
import { H3D_DATA } from "../../lib/data";
import { Menu, X, ArrowUpRight, Radio } from "lucide-react";

interface HeaderProps {
  onOpenCampaignModal: (formatId?: string, locationId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCampaignModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    // Live IST / Guruvayur clock
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(`${now.toLocaleTimeString("en-GB", options)} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "MEDIA", href: "#media" },
    { label: "SPACES", href: "#locations" },
    { label: "MUNICIPAL", href: "#municipal" },
    { label: "PROCESS", href: "#process" },
    { label: "VISION", href: "#vision" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[0.08] py-3.5 shadow-sm"
            : "bg-gradient-to-b from-[#FAF9F5]/90 via-[#FAF9F5]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Civic Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-h3d-blue flex items-center justify-center font-title font-bold text-white tracking-tighter text-lg rounded-sm group-hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(15,82,255,0.35)]">
              H3D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-[#0A0B0E] uppercase group-hover:text-h3d-blue transition-colors">
                HORIZON 3D
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase">
                OOH MEDIA CO.
              </span>
            </div>
          </a>

          {/* Desktop Live Telemetry / Coordinates */}
          <div className="hidden lg:flex items-center gap-4 px-3.5 py-1.5 rounded border border-black/[0.08] bg-black/[0.03] text-[11px] font-mono text-[#4A4E5C]">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <Radio className="w-3 h-3 animate-pulse" />
              <span className="font-bold">{timeString || "LIVE"}</span>
            </span>
            <span className="text-black/20">|</span>
            <span className="font-medium text-[#0A0B0E]">GURUVAYUR HUB</span>
            <span className="text-black/20">|</span>
            <span className="text-[#6B7280]">{H3D_DATA.company.coordinates}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono font-medium tracking-wider text-[#2D3139] hover:text-h3d-blue transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-h3d-blue hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCampaignModal()}
              className="relative group overflow-hidden px-4 py-2 bg-h3d-blue hover:bg-blue-600 text-white rounded-sm text-xs font-mono font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_20px_rgba(15,82,255,0.25)]"
            >
              <span>PLAN A CAMPAIGN</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0A0B0E] hover:text-h3d-blue border border-black/10 rounded-sm bg-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 text-[11px] font-mono text-[#6B7280]">
              <span>GURUVAYUR HUB</span>
              <span className="text-emerald-600 font-bold">{timeString}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-mono tracking-wider text-[#0A0B0E] hover:text-h3d-blue hover:bg-black/5 rounded border border-transparent hover:border-black/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCampaignModal();
                }}
                className="w-full py-3 bg-h3d-blue text-white text-center rounded text-xs font-mono font-bold tracking-wider"
              >
                PLAN A CAMPAIGN →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
