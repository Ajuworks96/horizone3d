"use client";

import React, { useEffect, useRef } from "react";

export const InteractiveBackground: React.FC = () => {
  const primaryGlowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const secondaryPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Center initially
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    currentPos.current = { ...mousePos.current };
    secondaryPos.current = { ...mousePos.current };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      // Smooth lerp primary glow towards cursor
      const ease = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      // Smooth lag for secondary glow
      const easeSecondary = 0.04;
      secondaryPos.current.x += (mousePos.current.x - secondaryPos.current.x) * easeSecondary;
      secondaryPos.current.y += (mousePos.current.y - secondaryPos.current.y) * easeSecondary;

      if (primaryGlowRef.current) {
        primaryGlowRef.current.style.transform = `translate3d(${currentPos.current.x - 300}px, ${currentPos.current.y - 300}px, 0)`;
      }

      if (secondaryGlowRef.current) {
        secondaryGlowRef.current.style.transform = `translate3d(${secondaryPos.current.x - 200}px, ${secondaryPos.current.y - 200}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Primary Dynamic Mouse Glow */}
      <div
        ref={primaryGlowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/8 via-[#0F52FF]/6 to-indigo-400/5 blur-[140px] will-change-transform"
      />

      {/* Secondary Lagging Ambient Glow */}
      <div
        ref={secondaryGlowRef}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/6 via-blue-400/5 to-cyan-300/4 blur-[120px] will-change-transform"
      />

      {/* Subtle Static Ambient Lights in corners */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[150px]" />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-[160px]" />
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[160px]" />
    </div>
  );
};
