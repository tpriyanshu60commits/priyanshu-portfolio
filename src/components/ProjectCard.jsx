import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import Button from "./Button";
import ProjectMockup from "./ProjectMockup";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between glass-card-hover group border border-slate-200/90 relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div
        className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${project.accentColor} filter blur-3xl opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity`}
      ></div>

      <div className="space-y-6">
        {/* Project Visual / UI Preview */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group-hover:shadow-md transition-shadow">
          <ProjectMockup projectId={project.id} variant="card" />
        </div>

        {/* Project Info Header */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
            >
              {project.category}
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-500 mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          {project.liveDemo && (
            <Button
              href={project.liveDemo}
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              className="text-xs"
            >
              Live Demo
            </Button>
          )}

          {project.github && (
            <Button
              href={project.github}
              variant="secondary"
              size="sm"
              icon={GithubIcon}
              iconPosition="left"
              className="text-xs"
            >
              GitHub
            </Button>
          )}
        </div>

        <Link
          to={project.caseStudyUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 px-3 py-1.5 rounded-full hover:bg-teal-50/80 border border-transparent hover:border-teal-200 transition-all duration-200 group/link"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
