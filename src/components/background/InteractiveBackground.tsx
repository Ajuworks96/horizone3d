"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100, isHovering: false, isMoving: false });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastMoveTime = useRef(Date.now());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

    // Initialize particles
    const particleCount = Math.min(Math.floor((width * height) / 25000), 45);
    const particles: Particle[] = [];
    const colors = ["#0F52FF", "#2563EB", "#3B82F6", "#60A5FA", "#06B6D4"];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.35 + 0.15;
      const baseSize = Math.random() * 2.5 + 1.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: baseSize,
        baseSize,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      mousePos.current.isMoving = true;
      lastMoveTime.current = Date.now();

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        mousePos.current.isHovering = true;
      } else {
        mousePos.current.isHovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check if mouse stopped moving
      if (Date.now() - lastMoveTime.current > 300) {
        mousePos.current.isMoving = false;
      }

      // Smooth lerp for outer cursor ring
      const ringEase = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringEase;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringEase;

      // Update and draw interactive radial spotlight
      if (mousePos.current.x > 0 && mousePos.current.y > 0) {
        const gradient = ctx.createRadialGradient(
          ringPos.current.x,
          ringPos.current.y,
          0,
          ringPos.current.x,
          ringPos.current.y,
          mousePos.current.isHovering ? 280 : 220
        );
        gradient.addColorStop(0, "rgba(15, 82, 255, 0.12)");
        gradient.addColorStop(0.4, "rgba(59, 130, 246, 0.06)");
        gradient.addColorStop(1, "rgba(15, 82, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          ringPos.current.x,
          ringPos.current.y,
          mousePos.current.isHovering ? 280 : 220,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Distance from mouse
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        // Mouse interaction: attract/repel & glow brighter
        if (dist < maxDist) {
          const force = (1 - dist / maxDist);
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
          p.alpha = Math.min(1, p.baseAlpha + force * 0.7);
          p.size = p.baseSize + force * 2.5;

          // Draw line to mouse cursor
          ctx.beginPath();
          ctx.strokeStyle = `rgba(15, 82, 255, ${force * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mousePos.current.x, mousePos.current.y);
          ctx.stroke();
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          p.size += (p.baseSize - p.size) * 0.05;
        }

        // Draw connecting lines between nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pDist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (pDist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(15, 82, 255, ${0.12 * (1 - pDist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Update custom cursor elements
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px, 0)`;
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x - (mousePos.current.isHovering ? 24 : 16)}px, ${ringPos.current.y - (mousePos.current.isHovering ? 24 : 16)}px, 0)`;
        cursorRingRef.current.style.width = mousePos.current.isHovering ? "48px" : "32px";
        cursorRingRef.current.style.height = mousePos.current.isHovering ? "48px" : "32px";
        cursorRingRef.current.style.borderColor = mousePos.current.isHovering
          ? "rgba(15, 82, 255, 0.8)"
          : "rgba(15, 82, 255, 0.35)";
        cursorRingRef.current.style.backgroundColor = mousePos.current.isHovering
          ? "rgba(15, 82, 255, 0.08)"
          : "transparent";
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-20"
      />

      {/* Sleek Custom Cursor Spotlight Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 rounded-full border border-h3d-blue/40 pointer-events-none z-50 transition-[width,height,border-color,background-color] duration-200 ease-out hidden md:block"
        style={{ willChange: "transform" }}
      />

      {/* Crisp Center Pointer Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-h3d-blue pointer-events-none z-50 hidden md:block shadow-[0_0_8px_rgba(15,82,255,0.8)]"
        style={{ willChange: "transform" }}
      />
    </>
  );
};
