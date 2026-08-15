"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Header } from "../components/navigation/Header";
import { CampaignModal } from "../components/navigation/CampaignModal";
import { HeroScene } from "../components/hero/HeroScene";
import { CityCanvasStory } from "../components/canvas-story/CityCanvasStory";
import { MediaExperience } from "../components/media-experience/MediaExperience";
import { LocationExplorer } from "../components/locations/LocationExplorer";
import { PublicSpaceValue } from "../components/municipal-value/PublicSpaceValue";
import { BuildJourney } from "../components/implementation/BuildJourney";
import { FutureCity } from "../components/future-vision/FutureCity";
import { AboutManifesto } from "../components/about/AboutManifesto";
import { ContactExperience } from "../components/contact/ContactExperience";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [selectedFormatId, setSelectedFormatId] = useState<string | undefined>(undefined);
  const [selectedLocationId, setSelectedLocationId] = useState<string | undefined>(undefined);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenCampaignModal = (formatId?: string, locationId?: string) => {
    setSelectedFormatId(formatId);
    setSelectedLocationId(locationId);
    setIsCampaignModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-[#0A0B0E] selection:bg-h3d-blue selection:text-white">
      {/* Editorial Navigation Header */}
      <Header onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* Interactive Campaign Modal */}
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        initialFormatId={selectedFormatId}
        initialLocationId={selectedLocationId}
      />

      {/* 01. Flagship 3D Parallax Hero Scene */}
      <HeroScene onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 02. "The City is the Canvas" Editorial Story */}
      <CityCanvasStory />

      {/* 03. "Media, in Motion" Spatial Format Explorer */}
      <MediaExperience
        onSelectFormat={(formatId) => handleOpenCampaignModal(formatId, undefined)}
      />

      {/* 04. "Where Attention Lives" Guruvayur Municipality Explorer */}
      <LocationExplorer
        onSelectLocation={(locationName) => handleOpenCampaignModal(undefined, locationName)}
      />

      {/* 05. "Public Space. Shared Value." Municipal Model */}
      <PublicSpaceValue onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 06. "From Blueprint to Broadcast" 4-Phase Build Journey */}
      <BuildJourney />

      {/* 07. "The City is Getting Smarter" Future Vision */}
      <FutureCity />

      {/* 08. Authentic About Manifesto */}
      <AboutManifesto />

      {/* 09. "Put Your Brand in the Right Place" Contact Experience */}
      <ContactExperience onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 10. Architectural Minimal Footer */}
      <Footer />
    </main>
  );
}
