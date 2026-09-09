import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2, Leaf, Zap, Trophy } from "lucide-react";
import Button from "../components/Button";
import ProjectMockup from "../components/ProjectMockup";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { GithubIcon } from "../components/Icons";
import { projectsData } from "../data/projects";

export default function VerdantX() {
  const project = projectsData.find((p) => p.id === "verdantx");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white/80 border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Case Study Header Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200">
            <Leaf className="w-3.5 h-3.5" />
            <span>Featured Case Study • Top 10 Hackathon Winner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-slate-700">
            {project.subtitle}
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={project.liveDemo}
              variant="primary"
              size="md"
              icon={ExternalLink}
              iconPosition="right"
            >
              Live Demo
            </Button>
            <Button
              href={project.github}
              variant="secondary"
              size="md"
              icon={GithubIcon}
              iconPosition="left"
            >
              GitHub Repository
            </Button>
          </div>
        </div>

        {/* Hero Device Mockup */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-tr from-emerald-100/40 via-teal-50/40 to-cyan-50/40 border border-slate-200/80 shadow-lg">
            <ProjectMockup projectId="verdantx" variant="dual" />
          </div>
        </div>
      </div>

      {/* Case Study Deep Dive Content */}
      <div className="py-12 sm:py-16 space-y-16">
        {/* Hackathon Honor Badge */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
              HackInMotion Hackathon: 10th Position (out of 120 Teams)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Recognized for developing and presenting VerdantX, a full-stack environmental intelligence and health advisory platform.
            </p>
          </div>
        </div>

        {/* Section 1: Resume-Supported Technical Highlights */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Core Engineering Deliverables
              </h3>
              <p className="text-xs text-slate-500">
                Key technical capabilities engineered into the VerdantX platform
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {project.resumeBullets.map((bullet, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 flex items-start gap-3 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Architecture & Data Flow Diagram */}
        <div>
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              VerdantX Intelligence & AI Architecture
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Decoupled architecture integrating real-time weather & AQI APIs, an EPA risk classification engine, Groq LLMs with SSE streaming, and Leaflet environmental mapping.
            </p>
          </div>

          <ArchitectureDiagram type="verdantx" />
        </div>

        {/* Section 3: Key Features Breakdown */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Key Technical & Environmental Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, index) => (
              <div
                key={index}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-2 glass-card-hover"
              >
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation within Case Study */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects/cravings"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full"
          >
            <span>← Previous: Cravings</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Back to Featured Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
