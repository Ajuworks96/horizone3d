"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Header } from "../components/navigation/Header";
import { CampaignModal } from "../components/navigation/CampaignModal";
import { HeroScene } from "../components/hero/HeroScene";
import { MediaExperience } from "../components/media-experience/MediaExperience";
import { LocationExplorer } from "../components/locations/LocationExplorer";
import { PublicSpaceValue } from "../components/municipal-value/PublicSpaceValue";
import { AboutManifesto } from "../components/about/AboutManifesto";
import { ContactExperience } from "../components/contact/ContactExperience";
import { Footer } from "../components/footer/Footer";
import { InteractiveBackground } from "../components/background/InteractiveBackground";

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
    <main className="relative min-h-screen bg-white text-[#0A0B0E] selection:bg-h3d-blue selection:text-white">
      {/* Premium Interactive Ambient Mouse Background Animation */}
      <InteractiveBackground />

      {/* Editorial Navigation Header */}
      <Header onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* Interactive Campaign Modal */}
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        initialFormatId={selectedFormatId}
        initialLocationId={selectedLocationId}
      />

      {/* 01. Flagship 3D Parallax Hero Scene (100% Intact as requested) */}
      <HeroScene onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 02. "Media, in Motion" Spatial Format Explorer */}
      <MediaExperience
        onSelectFormat={(formatId) => handleOpenCampaignModal(formatId, undefined)}
      />

      {/* 03. "Where Attention Lives" Guruvayur Prime Locations Portfolio */}
      <LocationExplorer
        onSelectLocation={(locationName) => handleOpenCampaignModal(undefined, locationName)}
      />

      {/* 04. "Public Space. Shared Value." Civic Impact Model */}
      <PublicSpaceValue onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 05. Authentic About Manifesto & Vision */}
      <AboutManifesto />

      {/* 06. "Put Your Brand in the Right Place" Direct Contact Experience */}
      <ContactExperience onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* 07. Minimal Clean Footer */}
      <Footer />
    </main>
  );
}
