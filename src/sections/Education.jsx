import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EDUCATION"
          title="My Education"
          subtitle="Academic foundation in computer applications, full-stack architecture, and software engineering."
        />

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {edu.score}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {edu.degree}
                </h3>

                <p className="text-sm font-bold text-teal-700 mt-1 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.institution}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                    >
                      {item}
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
