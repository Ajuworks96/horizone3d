"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { H3D_DATA } from "../../lib/data";
import { ArrowDown, ArrowRight, Eye, Play, Pause, Volume2, VolumeX, Sparkles, MonitorPlay } from "lucide-react";

interface HeroSceneProps {
  onOpenCampaignModal: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onOpenCampaignModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeAdIndex, setActiveAdIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeMode, setActiveMode] = useState<"visual" | "video">("visual");

  // Real, high-impact ad campaigns showcasing real OOH visuals
  const billboardAds = [
    {
      id: "anamorphic",
      tag: "3D ANAMORPHIC DISPLAY",
      client: "HORIZON 3D • IMMERSIVE OOH",
      headline: "NEXT-GEN 3D EXPERIENCES",
      sub: "Curved Architectural LED • High-Impact Optical Illusion",
      image: "/images/led-screen.jpg",
      badge: "8K UHD • 10,000 NITS",
      glowColor: "rgba(255, 100, 50, 0.45)",
    },
    {
      id: "unipole",
      tag: "HIGHWAY ARTERIAL UNIPOLE",
      client: "AUTOMOTIVE & LUXURY CAMPAIGNS",
      headline: "CAPTURING MILLIONS ON THE MOVE",
      sub: "Guruvayur Highway Arterial Corridor • 24/7 Illumination",
      image: "/images/hero-billboard.jpg",
      badge: "PRIME CORRIDOR • 150K+ DAILY REACH",
      glowColor: "rgba(15, 82, 255, 0.4)",
    },
    {
      id: "smart-totem",
      tag: "DIGITAL TRANSIT HUB",
      client: "GURUVAYUR CIVIC NETWORK",
      headline: "SMART CIVIC MEDIA INFRASTRUCTURE",
      sub: "Interactive Pedestrian Totems • Real-Time Passenger Information",
      image: "/images/smart-totem.jpg",
      badge: "CENTRAL BUS TERMINAL • HIGH FOOTFALL",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: "shelter",
      tag: "PREMIUM TRANSIT SHELTER",
      client: "URBAN STREET-LEVEL BRANDING",
      headline: "POINT-OF-DECISION IMPACT",
      sub: "High-Visibility Street Pillars • Integrated Urban Furniture",
      image: "/images/transit-shelter.jpg",
      badge: "PEDESTRIAN EYE-LEVEL DOMINANCE",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
  ];

  // Auto-rotate ad slides if on visual mode
  useEffect(() => {
    if (activeMode !== "visual") return;
    const timer = setInterval(() => {
      setActiveAdIndex((prev) => (prev + 1) % billboardAds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeMode, billboardAds.length]);

  // Handle video play/pause
  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle subtle mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 2;
      const y = (e.clientY / clientHeight - 0.5) * 2;
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
  const billboardScale = Math.min(1 + scrollY * 0.0004, 1.2);
  const billboardTranslateY = -scrollY * 0.2;
  const mouseRotateX = -mousePos.y * 2.5;
  const mouseRotateY = mousePos.x * 3.5;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[115vh] w-full overflow-hidden bg-[#FAF9F5] flex flex-col justify-between pt-24 md:pt-32 pb-16"
      style={{ perspective: "1200px" }}
    >
      {/* Background Architectural Grid & Ambient Light */}
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
              <Sparkles className="w-3.5 h-3.5 text-h3d-blue animate-pulse" />
              <span className="font-semibold">{H3D_DATA.heroSequence.badge}</span>
              <span className="text-black/30">•</span>
              <span className="text-[#4A4E5C]">GURUVAYUR HUB</span>
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
                className="px-5 py-2.5 bg-h3d-blue hover:bg-blue-600 text-white rounded-lg text-xs font-mono font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
              >
                <span>EXPLORE MEDIA SPACES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#canvas-story"
                className="px-4 py-2.5 bg-white hover:bg-black/5 border border-black/10 text-[#0A0B0E] rounded-lg text-xs font-mono tracking-wider transition-all"
              >
                THE PHILOSOPHY ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* THE PHYSICAL BILLBOARD & 3D REALISTIC SCREEN */}
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
                <div className="w-1.5 h-6 bg-zinc-600 rounded-t-sm shadow-sm" />
                <div className="w-8 h-3 bg-zinc-800 rounded-sm border border-zinc-600 flex items-center justify-center">
                  <div className="w-6 h-1.5 bg-amber-100 rounded-full shadow-[0_0_12px_rgba(255,245,200,0.9)]" />
                </div>
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
          <div
            className="relative bg-[#0d0f14] border-4 border-zinc-800 rounded-xl p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-500"
            style={{
              boxShadow: `0 20px 60px -10px ${currentAd.glowColor}, 0 0 30px rgba(0,0,0,0.8)`,
            }}
          >
            {/* Top Display Status Bar & Mode Switcher */}
            <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#06080c] border border-white/10 rounded-lg text-[11px] font-mono text-white/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="font-bold text-white tracking-widest uppercase">
                  H3D DIGITAL DISPLAY 01
                </span>
                <span className="hidden md:inline text-zinc-500">|</span>
                <span className="hidden md:inline text-xs text-zinc-400 font-sans">
                  {activeMode === "video" ? "4K Video Stream" : currentAd.client}
                </span>
              </div>

              {/* Toggle Between Real Visual Ads & Video Stream */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMode("visual")}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                    activeMode === "visual"
                      ? "bg-h3d-blue text-white font-bold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  3D AD REEL
                </button>
                <button
                  onClick={() => setActiveMode("video")}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono flex items-center gap-1 transition-all ${
                    activeMode === "video"
                      ? "bg-emerald-500 text-white font-bold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <MonitorPlay className="w-3 h-3" />
                  <span>MOTION VIDEO</span>
                </button>
              </div>
            </div>

            {/* Active High-Definition Billboard Screen Area */}
            <div className="relative aspect-[16/8.5] sm:aspect-[16/8] rounded-lg overflow-hidden bg-black border border-white/15 group shadow-inner">
              {/* MODE 1: Photorealistic 3D Billboard Ad Visual Reel */}
              {activeMode === "visual" && (
                <>
                  {billboardAds.map((ad, idx) => (
                    <div
                      key={ad.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        activeAdIndex === idx ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                      }`}
                    >
                      <Image
                        src={ad.image}
                        alt={ad.headline}
                        fill
                        priority={idx === 0}
                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                      />

                      {/* Cinematic Lighting Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

                      {/* High-Impact Commercial Overlay Content */}
                      <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white">
                        {/* Top Metadata */}
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono tracking-wider text-white">
                            <span className="w-2 h-2 rounded-full bg-h3d-blue animate-ping" />
                            <span className="font-bold">{ad.tag}</span>
                          </div>

                          <div className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono text-zinc-200">
                            {ad.badge}
                          </div>
                        </div>

                        {/* Middle Headline */}
                        <div className="my-auto space-y-2 sm:space-y-3 max-w-2xl">
                          <div className="text-xs sm:text-sm font-mono tracking-widest text-blue-400 uppercase font-semibold">
                            {ad.client}
                          </div>
                          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            {ad.headline}
                          </h2>
                          <p className="text-xs sm:text-sm font-sans text-zinc-200 line-clamp-2 max-w-xl">
                            {ad.sub}
                          </p>
                        </div>

                        {/* Bottom Slide Indicators */}
                        <div className="flex items-center justify-between border-t border-white/20 pt-3">
                          <div className="flex items-center gap-2">
                            {billboardAds.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveAdIndex(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  activeAdIndex === i ? "w-8 bg-h3d-blue shadow-[0_0_10px_#0F52FF]" : "w-2 bg-white/40 hover:bg-white/80"
                                }`}
                                aria-label={`Select Ad ${i + 1}`}
                              />
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300">
                            <Eye className="w-3.5 h-3.5 text-h3d-blue" />
                            <span>LIVE OOH BROADCAST</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* MODE 2: Real Motion Video Stream */}
              {activeMode === "video" && (
                <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://vjs.zencdn.net/v/oceans.mp4"
                  />

                  {/* Video Screen HUD & Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/80 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span>LIVE 4K CINEMATIC STREAM</span>
                      </div>
                      <div className="text-xs font-mono text-white/80">
                        1080P • 60 FPS • DIGITAL FEED
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/20 pt-3 pointer-events-auto">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleVideoPlay}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                          title={isVideoPlaying ? "Pause Video" : "Play Video"}
                        >
                          {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                          title={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="text-xs font-mono text-white/90">
                        HORIZON 3D DIGITAL AD ENGINE
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Realistic LED Dot Matrix / Scanline Texture Over Screen */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 pointer-events-none z-20" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_3px] pointer-events-none opacity-30 z-20" />
            </div>

            {/* Industrial Bottom Truss Info */}
            <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400 px-2">
              <span className="text-zinc-300 font-semibold">H3D SMART MONOLITHIC DISPLAY</span>
              <span className="hidden sm:inline">HIGH-NIT SURFACE • STRUCTURAL STEEL MAST</span>
              <span className="text-h3d-blue font-bold">SITE: GURUVAYUR-001</span>
            </div>
          </div>

          {/* Heavy Steel Structural Base */}
          <div className="w-16 sm:w-24 h-12 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 mx-auto border-x-2 border-zinc-600 shadow-xl relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          </div>
        </div>
      </div>

      {/* LAYER 3: Strategic Stats Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm text-xs font-mono">
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">STRATEGIC HUB</div>
            <div className="text-[#0A0B0E] font-bold mt-0.5">Guruvayur Municipality</div>
          </div>
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">CORE CAPABILITY</div>
            <div className="text-h3d-blue font-bold mt-0.5">3D & Digital Billboard Media</div>
          </div>
          <div>
            <div className="text-[#6B7280] text-[10px] uppercase">MEDIA REACH</div>
            <div className="text-[#0A0B0E] font-bold mt-0.5">Transit & Arterial Network</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[#6B7280] text-[10px] uppercase">SCROLL TO EXPLORE</div>
              <div className="text-[#0A0B0E] font-medium mt-0.5">City As Canvas</div>
            </div>
            <ArrowDown className="w-4 h-4 text-h3d-blue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

