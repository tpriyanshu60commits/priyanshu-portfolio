import React from "react";
import SocialLinks from "./SocialLinks";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-base tracking-tight shadow-sm">
              PT
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Priyanshu Tiwari
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Full-Stack Developer | MERN Stack | GenAI & Agentic AI
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <SocialLinks variant="icons" iconSize="sm" />
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© 2026 Priyanshu Tiwari</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
