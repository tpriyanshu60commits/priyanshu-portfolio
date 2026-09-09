import React from "react";
import { ArrowRight, Download } from "lucide-react";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import HeroVisual from "../components/HeroVisual";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-120px)] flex items-center justify-center py-8 sm:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow badge matching reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-slate-700 bg-white/90 border border-slate-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>FULL STACK DEVELOPER</span>
            </div>

            {/* Main Heading matching reference composition */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Hi, I'm <br />
              <span className="text-gradient-priyanshu">Priyanshu</span>{" "}
              <span className="text-gradient-tiwari">Tiwari.</span>
            </h1>

            {/* Description from Resume */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Full-Stack Developer specializing in the MERN stack with hands-on
              internship and project experience building modern web applications
              using React.js, Node.js, Express.js, and MongoDB, paired with
              practical GenAI and agentic AI workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                onClick={scrollToProjects}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-md hover:shadow-lg"
              >
                View My Projects
              </Button>

              <Button
                href="/Priyanshu_Tiwari_Resume.pdf"
                download="Priyanshu_Tiwari_Resume.pdf"
                variant="outline"
                size="lg"
                icon={Download}
                iconPosition="right"
                className="bg-white/80 backdrop-blur-sm"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                CONNECT WITH ME
              </span>
              <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
              <SocialLinks variant="icons" iconSize="md" />
            </div>
          </div>

          {/* Right Column: 3D Pastel Abstract Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
