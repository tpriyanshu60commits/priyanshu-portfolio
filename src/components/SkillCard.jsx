import React from "react";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Languages: Terminal,
  Tools: Wrench,
};

export default function SkillCard({ category, skills, description }) {
  const IconComponent = categoryIcons[category] || Code2;

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 glass-card-hover border border-slate-200/80 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
            <IconComponent className="w-5 h-5 text-teal-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {category}
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {skills.length} core technologies
            </span>
          </div>
        </div>

        {description && (
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Skills Chips Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${skill.bg} shadow-2xs hover:scale-105 transition-transform duration-150`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${skill.color}`} />
              <span className="text-slate-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span>Production Ready</span>
        <span className="text-teal-600 font-semibold">Active</span>
      </div>
    </div>
  );
}
