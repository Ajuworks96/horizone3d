"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { H3D_DATA } from "../../lib/data";
import { ArrowDown, ArrowRight, Eye, Layers, Compass, Radio } from "lucide-react";

interface HeroSceneProps {
  onOpenCampaignModal: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onOpenCampaignModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeAdIndex, setActiveAdIndex] = useState(0);

  // High-impact ads rotating inside the physical billboard screen
  const billboardAds = [
    {
      tag: "HORIZON 3D MEDIA",
      main: "WE TURN PUBLIC SPACE INTO MEDIA.",
      sub: "Guruvayur Municipality • High-Impact OOH Infrastructure",
      theme: "from-blue-900 via-[#0B1736] to-[#060D1E]",
      accent: "#0F52FF",
    },
    {
      tag: "DIGITAL TRANSIT NETWORK",
      main: "CAPTURING ATTENTION WHERE PEOPLE MOVE.",
      sub: "New Bus Stand Terminal • Strategic Arterial Billboards",
      theme: "from-indigo-950 via-[#0F1428] to-[#080B16]",
      accent: "#3B82F6",
    },
    {
      tag: "SMART PUBLIC SPACES",
      main: "ENGINEERING URBAN CIVIC EXCELLENCE.",
      sub: "High-Nit LED Billboards • Modern Shelter Branding",
      theme: "from-slate-900 via-[#121622] to-[#0A0D14]",
      accent: "#60A5FA",
    },
  ];

  // Rotate billboard advertisement simulation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAdIndex((prev) => (prev + 1) % billboardAds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardAds.length]);

  // Handle subtle mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / clientHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentAd = billboardAds[activeAdIndex];

  // Parallax calculations
  const bgTranslateY = scrollY * 0.15;
  const billboardScale = Math.min(1 + scrollY * 0.0004, 1.25);
  const billboardTranslateY = -scrollY * 0.25;
  const mouseRotateX = -mousePos.y * 3;
  const mouseRotateY = mousePos.x * 4;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[115vh] w-full overflow-hidden bg-[#FAF9F5] flex flex-col justify-between pt-24 md:pt-32 pb-16"
      style={{ perspective: "1200px" }}
    >
      {/* LAYER 0: Background Clean Architectural Grid & Ambient Light */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${bgTranslateY}px, 0)`,
        }}
      >
        <div className="absolute inset-0 bg-radial-grid-light opacity-80" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-h3d-blue/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10" />
      </div>

      {/* Hero Header Typography */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.08] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-xs font-mono tracking-widest text-h3d-blue uppercase">
              <Radio className="w-3.5 h-3.5 animate-pulse text-h3d-blue" />
              <span className="font-semibold">{H3D_DATA.heroSequence.badge}</span>
              <span className="text-black/30">•</span>
              <span className="text-[#4A4E5C]">GURUVAYUR TERRITORY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#0A0B0E] uppercase leading-[1.02]">
              SHAPING THE PLACES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
                PEOPLE LOOK.
              </span>
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base font-sans text-[#4A4E5C] leading-relaxed">
              {H3D_DATA.heroSequence.subheading}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCampaignModal}
                className="px-5 py-2.5 bg-h3d-blue hover:bg-blue-600 text-white rounded text-xs font-mono font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
              >
                <span>EXPLORE MEDIA SPACES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#canvas-story"
                className="px-4 py-2.5 bg-white hover:bg-black/5 border border-black/10 text-[#0A0B0E] rounded text-xs font-mono tracking-wider transition-all"
              >
                THE PHILOSOPHY ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LAYER 1 & 2: THE PHYSICAL BILLBOARD & 3D INTERACTIVE SCENE */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full my-8 md:my-12">
        <div
          className="relative transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `scale(${billboardScale}) translateY(${billboardTranslateY}px) rotateX(${mouseRotateX}deg) rotateY(${mouseRotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Billboard Overhead Lighting Stanchions */}
          <div className="flex justify-around px-12 -mb-2 relative z-30 pointer-events-none">
            {[0, 1, 2, 3].map((lamp) => (
              <div key={lamp} className="flex flex-col items-center">
                {/* Structural Stanchion arm */}
                <div className="w-1.5 h-6 bg-zinc-600 rounded-t-sm shadow-sm" />
                {/* Lamp fixture */}
                <div className="w-8 h-3 bg-zinc-800 rounded-sm border border-zinc-600 flex items-center justify-center">
                  <div className="w-6 h-1.5 bg-amber-100 rounded-full shadow-[0_0_12px_rgba(255,245,200,0.9)]" />
                </div>
                {/* Projected light cone */}
                <div
                  className="w-20 h-24 bg-gradient-to-b from-amber-100/20 via-blue-400/5 to-transparent blur-sm -mt-0.5"
                  style={{
                    clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Master Heavy-Duty Billboard Steel Frame */}
          <div className="relative bg-[#111319] border-4 border-zinc-800 rounded-md p-3 sm:p-4 shadow-2xl billboard-light-shadow">
            {/* Top Brand Plate */}
            <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#090B10] border border-white/10 rounded text-[10px] font-mono text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-white tracking-widest uppercase">H3D DISPLAY UNIT 01</span>
              </div>
              <span className="hidden sm:inline text-zinc-400">HIGHWAY ARTERIAL UNIPOLE • HIGH-NIT DIGITAL SIMULATION</span>
              <div className="flex items-center gap-1.5 text-h3d-blue font-semibold">
                <Compass className="w-3 h-3" />
                <span>GURUVAYUR HUB</span>
              </div>
            </div>

            {/* Active High-Definition Billboard Screen Area */}
            <div className="relative aspect-[16/8.5] sm:aspect-[16/8] rounded overflow-hidden bg-black border border-white/10 group">
              {/* Underlying Realistic OOH Photograph Layer */}
              <Image
                src="/images/hero-billboard.jpg"
                alt="Horizon 3D Media Billboard Structure"
                fill
                priority
                className="object-cover opacity-35 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-1000"
              />

              {/* Dynamic Ad Display Content with Atmospheric LED Texture */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentAd.theme} p-6 sm:p-10 md:p-14 flex flex-col justify-between transition-all duration-700 text-white`}>
                {/* Screen Scanlines and Dot-Pitch Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

                {/* Ad Content Top Meta */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-white tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-h3d-blue" />
                    {currentAd.tag}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-white/60 tracking-wider">
                    BROADCAST 0{activeAdIndex + 1} / 0{billboardAds.length}
                  </div>
                </div>

                {/* Ad Master Typography Headline */}
                <div className="relative z-10 my-auto space-y-2 sm:space-y-4 max-w-2xl">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.08] drop-shadow-md">
                    {currentAd.main}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-white/90 tracking-wide">
                    {currentAd.sub}
                  </p>
                </div>

                {/* Screen Bottom Controls & Interactive Triggers */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-3 sm:pt-4">
                  <div className="flex items-center gap-2">
                    {billboardAds.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveAdIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeAdIndex === i ? "w-8 bg-h3d-blue" : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Show Ad Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/70">
                    <Eye className="w-3.5 h-3.5 text-h3d-blue" />
                    <span>PUBLIC IMPACT VIEW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Catwalk & Steel Truss Below Billboard */}
            <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-400 px-2">
              <span>H3D MONOLITHIC UNIPOLE SYSTEM</span>
              <span className="hidden sm:inline">HIGH-NIT SURFACE • STRUCTURAL STEEL BASE</span>
              <span>SITE ID: H3D-GVY-001</span>
            </div>
          </div>

          {/* Structural Pillar Base Stanchion */}
          <div className="w-16 sm:w-24 h-12 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 mx-auto border-x-2 border-zinc-600 shadow-xl relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          </div>
        </div>
      </div>

      {/* LAYER 3: Bottom Telemetry Bar & Scroll Cue */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-md bg-white border border-black/[0.08] shadow-sm text-xs font-mono">
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">STRATEGIC HUB</div>
            <div className="text-[#0A0B0E] font-bold mt-0.5">Guruvayur Municipality</div>
          </div>
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">CORE POSITIONING</div>
            <div className="text-h3d-blue font-bold mt-0.5">Smart Public Advertising</div>
          </div>
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">MEDIA REACH</div>
            <div className="text-[#0A0B0E] font-bold mt-0.5">Transit & Arterial Network</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[#6B7280] text-[10px] uppercase">SCROLL TO ENTER</div>
              <div className="text-[#0A0B0E] font-medium mt-0.5">The City as Canvas</div>
            </div>
            <ArrowDown className="w-4 h-4 text-h3d-blue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
