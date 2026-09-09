import React from "react";
import { Trophy, Award, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { achievementsData } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RECOGNITION"
          title="Honors & Achievements"
          subtitle="Milestones in competitive hackathons and digital engineering contributions."
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft background aura */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-teal-300/20 to-emerald-200/20 filter blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-teal-500/10 border border-teal-200/80 flex items-center justify-center text-teal-700 shadow-2xs">
                    {item.id === "hackinmotion" ? (
                      <Trophy className="w-6 h-6 text-amber-600" />
                    ) : (
                      <Award className="w-6 h-6 text-teal-600" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-teal-700 mt-1">
                    {item.rank}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
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
