import React from "react";
import cravingsHeroImg from "../assets/images/cravings/cravings-hero.png";
import verdantxHeroImg from "../assets/images/verdantx/verdantx-hero.png";

export default function ProjectMockup({
  projectId,
  variant = "card", // 'card' (single viewport preview) or 'dual' (laptop device mockup)
  className = "",
}) {
  const isCravings = projectId === "cravings";
  const imageSrc = isCravings ? cravingsHeroImg : verdantxHeroImg;
  const projectTitle = isCravings ? "Cravings" : "VerdantX";
  const projectUrl = isCravings
    ? "https://cravings-liart.vercel.app"
    : "https://hack-in-motion-ricr-him-1092.vercel.app";

  if (variant === "dual") {
    return (
      <div className={`relative w-full overflow-hidden select-none ${className}`}>
        <div className="relative flex items-center justify-center py-4 px-2 sm:px-4">
          {/* Laptop Device Frame */}
          <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-slate-700/80">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-800/90 rounded-t-xl text-[11px] text-slate-300 border-b border-slate-700/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="bg-slate-950/70 px-4 py-1 rounded-md text-[10px] text-slate-300 font-mono flex items-center gap-1.5 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{projectUrl}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold hidden sm:block">
                Live App
              </div>
            </div>

            {/* Real Screenshot Viewport */}
            <div className="relative rounded-b-xl overflow-hidden aspect-[16/9] sm:aspect-[16/9.5] bg-slate-950 group">
              <img
                src={imageSrc}
                alt={`${projectTitle} real application screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-b-xl pointer-events-none"></div>
            </div>

            {/* Laptop Base Stand Hint */}
            <div className="h-2.5 bg-slate-800/80 rounded-b-lg flex justify-center items-center mt-0.5">
              <div className="w-20 h-1 bg-slate-600/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card Viewport Preview
  return (
    <div className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group ${className}`}>
      {/* Top mini browser bar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm border-b border-white/10 flex items-center justify-between text-[10px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
          <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
        </div>
        <span className="font-mono text-[9px] text-slate-400 truncate max-w-[180px]">
          {projectUrl.replace('https://', '')}
        </span>
        <span className="w-2"></span>
      </div>

      {/* Real Application Image */}
      <div className="w-full h-full pt-6">
        <img
          src={imageSrc}
          alt={`${projectTitle} live interface`}
          className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
