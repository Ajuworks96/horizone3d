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
    sm: { markW: 46, markH: 19, textH: 14, gap: "gap-2.5" },
    md: { markW: 60, markH: 25, textH: 18, gap: "gap-3" },
    lg: { markW: 80, markH: 33, textH: 22, gap: "gap-3.5" },
    xl: { markW: 104, markH: 43, textH: 28, gap: "gap-4" },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className}`}>
      {/* Official Stylized Vector H3D Mark */}
      <svg
        width={dimensions.markW}
        height={dimensions.markH}
        viewBox="0 0 160 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 overflow-visible"
      >
        <defs>
          <linearGradient id="h3d-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3E0" />
            <stop offset="55%" stopColor="#1B6CA8" />
            <stop offset="100%" stopColor="#11456D" />
          </linearGradient>
          <linearGradient id="h3d-white" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Letter H */}
        <path
          d="M 6 5 L 18 5 L 18 26 L 34 26 L 34 5 L 46 5 L 46 59 L 34 59 L 34 38 L 18 38 L 18 59 L 6 59 Z"
          fill={isDark ? "url(#h3d-white)" : "url(#h3d-gradient)"}
        />

        {/* Number 3 */}
        <path
          d="M 52 5 L 78 5 C 86 5 91 9 91 17 C 91 22.5 86 26.5 80 28 C 88 29.5 93 34.5 93 43.5 C 93 53 85 59 73 59 L 52 59 L 52 48 L 71 48 C 76 48 80 45 80 41 C 80 37 76 34 70 34 L 61 34 L 61 24 L 69 24 C 74 24 78 21 78 16.5 C 78 13 74 11 68 11 L 52 11 Z"
          fill={isDark ? "url(#h3d-white)" : "url(#h3d-gradient)"}
        />

        {/* Letter D (Generous right bowl & fully unclipped) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 98 5 L 116 5 C 138 5 152 16 152 32 C 152 48 138 59 116 59 L 98 59 Z M 110 16 L 110 48 L 116 48 C 128 48 138 42 138 32 C 138 22 128 16 116 16 Z"
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
