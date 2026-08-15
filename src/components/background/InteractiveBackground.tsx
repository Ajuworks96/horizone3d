"use client";

import React, { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  vx: number;
  vy: number;
  hue: number;
}

export const InteractiveBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const secondarySpotlightRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -500, y: -500, targetX: -500, targetY: -500 });
  const mouseVelocity = useRef(0);
  const lastMousePos = useRef({ x: -500, y: -500 });
  const isMoving = useRef(false);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);
  const trailPoints = useRef<TrailPoint[]>([]);

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let baseHue = 220; // Starts around Royal Blue (220) to Indigo/Cyan (190-260)

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calculate speed
      const dx = x - (lastMousePos.current.x === -500 ? x : lastMousePos.current.x);
      const dy = y - (lastMousePos.current.y === -500 ? y : lastMousePos.current.y);
      const dist = Math.sqrt(dx * dx + dy * dy);
      mouseVelocity.current = Math.min(dist * 0.4, 15);

      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
      lastMousePos.current = { x, y };

      isMoving.current = true;
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 400);

      // Cycle hues smoothly while moving
      baseHue = (baseHue + 0.8) % 360;
      // Keep in vibrant range (Blue, Cyan, Violet, Indigo: 180 to 280)
      const currentHue = 190 + (baseHue % 90);

      // Spawn fluid glowing particles ONLY on mouse movement
      if (dist > 2) {
        trailPoints.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          radius: Math.random() * 20 + 20 + mouseVelocity.current * 2,
          alpha: Math.min(0.65, 0.3 + mouseVelocity.current * 0.05),
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          hue: currentHue,
        });

        if (trailPoints.current.length > 40) {
          trailPoints.current.shift();
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        handleMouseMove({
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY,
        } as MouseEvent);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    let animId: number;

    const animate = () => {
      // Smooth lerp for main cursor spotlight position
      const ease = 0.12;
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * ease;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * ease;

      // Update interactive CSS spotlight divs directly under mouse
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mousePos.current.x - 250}px, ${mousePos.current.y - 250}px, 0)`;
        spotlightRef.current.style.opacity = isMoving.current ? "0.85" : "0.35";
      }

      if (secondarySpotlightRef.current) {
        const secEase = 0.06;
        const sx = mousePos.current.x;
        const sy = mousePos.current.y;
        secondarySpotlightRef.current.style.transform = `translate3d(${sx - 180}px, ${sy - 180}px, 0)`;
        secondarySpotlightRef.current.style.opacity = isMoving.current ? "0.75" : "0.2";
      }

      // Draw dynamic fluid trail on canvas
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < trailPoints.current.length; i++) {
        const p = trailPoints.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.93; // Smooth fade out
        p.radius *= 0.98;

        if (p.alpha > 0.01) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          gradient.addColorStop(0, `hsla(${p.hue}, 90%, 55%, ${p.alpha * 0.45})`);
          gradient.addColorStop(0.5, `hsla(${p.hue + 20}, 85%, 60%, ${p.alpha * 0.25})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 90%, 55%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      trailPoints.current = trailPoints.current.filter((p) => p.alpha > 0.015);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animId);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Primary Dynamic Luminous Spotlight - Follows Mouse Smoothly */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0F52FF]/20 via-[#6366F1]/15 to-[#06B6D4]/20 blur-[100px] transition-opacity duration-500 will-change-transform"
      />

      {/* Secondary Trailing Chromatic Hue Spotlight */}
      <div
        ref={secondarySpotlightRef}
        className="absolute top-0 left-0 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#A855F7]/25 via-[#3B82F6]/20 to-[#10B981]/15 blur-[80px] transition-opacity duration-700 will-change-transform"
      />

      {/* Dynamic Fluid Canvas Trail - Only Draws When Moving Mouse */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none filter blur-[15px]"
      />
    </div>
  );
};
