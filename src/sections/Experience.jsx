import React from "react";
import { Calendar, CheckCircle2, Building2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WORK EXPERIENCE"
          title="My Journey"
          subtitle="My professional experience and the skills I've gained along the way."
        />

        {/* Experience Timeline */}
        <div className="max-w-3xl relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-10 sm:space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-teal-500 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs glass-card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{item.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 text-xs font-medium px-2 py-0.5 rounded bg-slate-100">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100/90 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 mt-4 text-sm text-slate-600">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1.5">
                    Tech:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
