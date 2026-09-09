import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";

export default function HeroVisual({ className = "" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative w-full max-w-[500px] lg:max-w-[550px] aspect-square mx-auto flex items-center justify-center select-none py-2 ${className}`}
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 0.35}deg) rotateX(${-mousePos.y * 0.35}deg)`,
        transition: "transform 0.25s ease-out",
      }}
    >
      {/* Background Multi-Layered Soft Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-rose-200/35 via-purple-200/25 to-teal-200/40 filter blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-200/30 filter blur-2xl pointer-events-none animate-soft-float" style={{ animationDelay: "2s" }}></div>

      {/* 3D Pastel Abstract Composition */}
      <div className="relative w-full h-full flex items-center justify-center animate-soft-float">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full filter drop-shadow-[0_20px_45px_rgba(15,23,42,0.07)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Iridescent Central Orb Radial Gradient */}
            <radialGradient id="orbGlow" cx="38%" cy="36%" r="62%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#fed7aa" stopOpacity="0.75" />
              <stop offset="48%" stopColor="#fbcfe8" stopOpacity="0.8" />
              <stop offset="72%" stopColor="#c4b5fd" stopOpacity="0.85" />
              <stop offset="92%" stopColor="#99f6e4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.95" />
            </radialGradient>

            {/* Mint to Vibrant Teal Silk Gradient */}
            <linearGradient id="silkMintTeal" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#5eead4" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#14b8a6" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.85" />
            </linearGradient>

            {/* Coral to Rose Ribbon Gradient */}
            <linearGradient id="silkCoralPink" x1="90%" y1="10%" x2="10%" y2="90%">
              <stop offset="0%" stopColor="#ffe4e6" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#fb7185" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#f43f5e" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.82" />
            </linearGradient>

            {/* Lavender to Soft Violet Sheen */}
            <linearGradient id="silkLavender" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>

            {/* Specular Ridge Highlights */}
            <linearGradient id="specularSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Soft Shadow Filter for 3D Depth */}
            <filter id="softDepth" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Layer 1: Background Ethereal Swirl Ribbon (Lavender) */}
          <path
            d="M 180,390 C 110,480 290,560 410,500 C 530,440 560,290 490,200 C 420,110 320,150 230,230 Z"
            fill="url(#silkLavender)"
            opacity="0.65"
            filter="url(#softDepth)"
          />

          {/* Layer 2: Delicate Celestial Orbital Dashed Rings */}
          <circle
            cx="300"
            cy="300"
            r="215"
            stroke="rgba(203, 213, 225, 0.45)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="240"
            ry="170"
            stroke="rgba(45, 212, 191, 0.25)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            transform="rotate(-25 300 300)"
          />

          {/* Layer 3: Central Large Iridescent Pastel Sphere */}
          <circle
            cx="300"
            cy="295"
            r="165"
            fill="url(#orbGlow)"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="2.5"
            className="filter drop-shadow-[0_15px_30px_rgba(20,184,166,0.15)]"
          />

          {/* Inner Translucent Light Arc on Sphere */}
          <path
            d="M 200,230 C 230,175 300,150 370,165 C 435,180 470,235 460,290"
            stroke="url(#specularSheen)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Layer 4: Volumetric 3D Silk Ribbons wrapping around the sphere */}
          {/* Coral & Pink Flowing Ridge */}
          <path
            d="M 150,290 C 110,180 230,90 350,115 C 470,140 535,270 465,385 C 405,485 265,515 195,445 C 145,390 170,345 150,290 Z"
            fill="url(#silkCoralPink)"
            opacity="0.82"
          />

          {/* Foreground Mint & Teal Silk Wave Ribbon */}
          <path
            d="M 170,240 C 245,150 395,160 475,255 C 540,340 485,475 375,495 C 255,515 150,430 180,325 C 200,255 230,225 300,215 C 385,205 435,290 395,365 C 365,420 295,415 255,375 C 225,345 235,305 275,285 C 315,265 345,295 325,325"
            fill="url(#silkMintTeal)"
            stroke="url(#specularSheen)"
            strokeWidth="2.5"
            opacity="0.92"
          />

          {/* Layer 5: Bright Satin Light Crests & Specular 3D Highlights */}
          <path
            d="M 195,245 C 265,175 385,185 455,275 C 505,345 465,445 375,465 C 285,485 195,415 215,325 C 235,255 295,235 365,245 C 425,255 445,325 415,375"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.65"
            fill="none"
          />

          <path
            d="M 255,285 C 315,235 395,245 425,315 C 445,365 405,415 345,425"
            stroke="url(#specularSheen)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.85"
            fill="none"
          />

          {/* Layer 6: Floating Colorful Orbit Particles / Nodes matching reference */}
          <circle cx="170" cy="160" r="7" fill="#2dd4bf" opacity="0.85" />
          <circle cx="490" cy="170" r="9" fill="#fb7185" opacity="0.85" />
          <circle cx="515" cy="430" r="7" fill="#c084fc" opacity="0.9" />
          <circle cx="140" cy="450" r="8" fill="#14b8a6" opacity="0.75" />
          <circle cx="320" cy="90" r="5.5" fill="#f43f5e" opacity="0.8" />
          <circle cx="475" cy="300" r="4.5" fill="#38bdf8" opacity="0.8" />
        </svg>

        {/* Floating Badge 1: Top Right - Clean UI & Reliable APIs */}
        <div
          className="absolute top-4 sm:top-6 -right-2 sm:right-2 z-20 glass-card px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2 shadow-lg border border-slate-200/90 animate-soft-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-5 h-5 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </div>
          <span className="text-xs font-bold text-slate-800 tracking-tight whitespace-nowrap">
            Clean UI & Reliable APIs
          </span>
        </div>

        {/* Floating Badge 2: Bottom - MERN Stack Developer */}
        <div
          className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 z-20 glass-card px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg border border-slate-200/90 animate-soft-float"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-800 tracking-tight whitespace-nowrap">
            MERN Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
}
