"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { H3DLogo } from "../brand/H3DLogo";

interface HeaderProps {
  onOpenCampaignModal: (formatId?: string, locationId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCampaignModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Media Formats", href: "#media" },
    { label: "Locations", href: "#locations" },
    { label: "Civic Value", href: "#municipal" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-gradient-to-b from-white/90 via-white/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
            <H3DLogo size="md" variant="horizontal" theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A4E5C] hover:text-h3d-blue transition-colors relative py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCampaignModal()}
              className="relative group overflow-hidden px-5 py-2.5 bg-h3d-blue hover:bg-blue-600 text-white rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98]"
            >
              <span>Plan Campaign</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0A0B0E] hover:text-h3d-blue border border-black/10 rounded-lg bg-white shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#0A0B0E] hover:text-h3d-blue hover:bg-black/5 rounded-lg transition-colors"
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
                className="w-full py-3 bg-h3d-blue text-white text-center rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>Plan Campaign</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

