"use client";

import React from "react";

interface H3DLogoProps {
  className?: string;
  variant?: "full" | "mark" | "horizontal";
  theme?: "light" | "dark" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
}

export const H3DLogo: React.FC<H3DLogoProps> = ({
  className = "",
  variant = "horizontal",
  theme = "light",
  size = "md",
}) => {
  const isDark = theme === "dark";

  // Size configurations
  const dimensions = {
    sm: { markW: 32, markH: 20, textH: 14, gap: "gap-2.5" },
    md: { markW: 42, markH: 26, textH: 18, gap: "gap-3" },
    lg: { markW: 56, markH: 34, textH: 22, gap: "gap-3.5" },
    xl: { markW: 72, markH: 44, textH: 28, gap: "gap-4" },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className}`}>
      {/* Stylized Vector H3D Mark */}
      <svg
        width={dimensions.markW}
        height={dimensions.markH}
        viewBox="0 0 110 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="h3d-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3E0" />
            <stop offset="50%" stopColor="#1B6CA8" />
            <stop offset="100%" stopColor="#134B75" />
          </linearGradient>
          <linearGradient id="h3d-white" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Letter H */}
        <path
          d="M 6 4 L 18 4 L 18 26 L 34 26 L 34 4 L 46 4 L 46 60 L 34 60 L 34 38 L 18 38 L 18 60 L 6 60 Z"
          fill={isDark ? "url(#h3d-white)" : "url(#h3d-gradient)"}
        />

        {/* Number 3 */}
        <path
          d="M 52 4 L 76 4 C 84 4 89 8 89 15 C 89 21 84 25 78 27 C 86 29 91 34 91 43 C 91 52 83 60 73 60 L 52 60 L 52 48 L 71 48 C 76 48 79 45 79 41 C 79 37 75 34 70 34 L 61 34 L 61 24 L 69 24 C 74 24 77 21 77 17 C 77 13 74 11 69 11 L 52 11 Z"
          fill={isDark ? "url(#h3d-white)" : "url(#h3d-gradient)"}
        />

        {/* Letter D */}
        <path
          d="M 94 4 L 94 60 L 102 60 C 114 60 120 48 120 32 C 120 16 114 4 102 4 Z M 106 14 C 110 14 112 21 112 32 C 112 43 110 50 106 50 Z"
          fill={isDark ? "url(#h3d-white)" : "url(#h3d-gradient)"}
        />
      </svg>

      {/* Brand Text Stack */}
      {variant !== "mark" && (
        <div className="flex flex-col leading-none select-none">
          <span
            className={`font-display font-extrabold tracking-tight uppercase ${
              isDark ? "text-white" : "text-[#103E60]"
            }`}
            style={{
              fontSize: size === "sm" ? "14px" : size === "md" ? "17px" : size === "lg" ? "21px" : "26px",
              letterSpacing: "-0.01em",
            }}
          >
            HORIZON 3D
          </span>
          <span
            className={`font-sans font-bold uppercase tracking-[0.22em] mt-0.5 ${
              isDark ? "text-cyan-400" : "text-[#1B6CA8]"
            }`}
            style={{
              fontSize: size === "sm" ? "9px" : size === "md" ? "10.5px" : size === "lg" ? "12px" : "14px",
            }}
          >
            MEDIA CO.
          </span>
        </div>
      )}
    </div>
  );
};
