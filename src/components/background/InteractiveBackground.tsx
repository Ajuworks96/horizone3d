"use client";

import React, { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  color: string;
}

export const InteractiveBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const rawMouse = useRef({ x: -100, y: -100 });
  const trail = useRef<TrailPoint[]>([]);
  const time = useRef(0);

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

    const colors = [
      "rgba(15, 82, 255, 0.4)",
      "rgba(99, 102, 241, 0.4)",
      "rgba(6, 182, 212, 0.4)",
      "rgba(168, 85, 247, 0.35)",
    ];

    let colorIdx = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = e.clientX / window.innerWidth;
      mouse.current.targetY = e.clientY / window.innerHeight;
      rawMouse.current.x = e.clientX;
      rawMouse.current.y = e.clientY;

      // Add trail point on movement
      colorIdx = (colorIdx + 1) % colors.length;
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: Math.random() * 25 + 30,
        alpha: 0.6,
        color: colors[colorIdx],
      });

      if (trail.current.length > 35) {
        trail.current.shift();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.current.targetX = e.touches[0].clientX / window.innerWidth;
        mouse.current.targetY = e.touches[0].clientY / window.innerHeight;
        rawMouse.current.x = e.touches[0].clientX;
        rawMouse.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    let animId: number;

    const animate = () => {
      time.current += 0.02;

      // Smooth mouse lerp
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.1;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.1;

      const mx = (mouse.current.x - 0.5) * 2;
      const my = (mouse.current.y - 0.5) * 2;

      // Orb 1: Royal Blue - Tracks mouse with inertia
      if (orb1Ref.current) {
        const x = mouse.current.x * 100 + Math.sin(time.current * 0.8) * 10;
        const y = mouse.current.y * 100 + Math.cos(time.current * 0.8) * 10;
        orb1Ref.current.style.transform = `translate3d(${x - 50}vw, ${y - 50}vh, 0) scale(${1 + Math.sin(time.current) * 0.15})`;
      }

      // Orb 2: Electric Purple/Violet - Counter orbit
      if (orb2Ref.current) {
        const x = (1 - mouse.current.x) * 90 + Math.cos(time.current * 0.9) * 15;
        const y = (1 - mouse.current.y) * 90 + Math.sin(time.current * 0.9) * 15;
        orb2Ref.current.style.transform = `translate3d(${x - 45}vw, ${y - 45}vh, 0) scale(${1 + Math.cos(time.current * 1.1) * 0.2})`;
      }

      // Orb 3: Cyan / Turquoise - Fluid center wave
      if (orb3Ref.current) {
        const x = 50 + mx * 30 + Math.sin(time.current * 1.2) * 20;
        const y = 50 + my * 30 + Math.cos(time.current * 0.7) * 20;
        orb3Ref.current.style.transform = `translate3d(${x - 50}vw, ${y - 50}vh, 0) scale(${1.1 + Math.sin(time.current * 0.9) * 0.15})`;
      }

      // Draw interactive canvas trail
      ctx.clearRect(0, 0, width, height);

      // Render glowing trail
      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i];
        p.alpha *= 0.94;
        p.radius *= 0.98;

        if (p.alpha > 0.01) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          grad.addColorStop(0, p.color.replace(/[\d\.]+\)$/, `${p.alpha})`));
          grad.addColorStop(1, "rgba(15, 82, 255, 0)");

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Filter dead points
      trail.current = trail.current.filter((p) => p.alpha > 0.02);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFBFF]">
      {/* Background Animated Chromatic Mesh Layer */}
      <div className="absolute inset-0 opacity-80 filter blur-[90px] sm:blur-[130px] will-change-transform">
        {/* Orb 1: Royal Blue / Ultra Blue */}
        <div
          ref={orb1Ref}
          className="absolute top-1/2 left-1/2 -mt-[350px] -ml-[350px] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#0F52FF] via-[#3B82F6] to-[#60A5FA] opacity-60 mix-blend-multiply"
        />

        {/* Orb 2: Electric Purple / Indigo */}
        <div
          ref={orb2Ref}
          className="absolute top-1/2 left-1/2 -mt-[320px] -ml-[320px] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#6366F1] to-[#3B82F6] opacity-55 mix-blend-multiply"
        />

        {/* Orb 3: Radiant Cyan / Turquoise */}
        <div
          ref={orb3Ref}
          className="absolute top-1/2 left-1/2 -mt-[300px] -ml-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#06B6D4] via-[#0EA5E9] to-[#38BDF8] opacity-55 mix-blend-multiply"
        />
      </div>

      {/* Interactive Mouse Trail Dynamic Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none filter blur-[20px] mix-blend-multiply opacity-90"
      />

      {/* Subtle White Frosting Overlay to keep content cards ultra-crisp */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[30px]" />
    </div>
  );
};
