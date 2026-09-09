import React from "react";
import {
  GraduationCap,
  Code,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Bot,
  Server,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { skillsCategories } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Intro & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="ABOUT ME"
              title="Turning ideas into"
              highlight="real applications."
              highlightGradient="text-gradient-tiwari"
              subtitle="Full-Stack Developer specializing in the MERN stack with hands-on internship and project experience building web applications using React.js, Node.js, Express.js, and MongoDB."
            />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Experienced in JWT-based authentication, role-based access control,
              REST API development, payment processing, cloud media management,
              third-party API integration, and AI/LLM integration. Actively
              building practical GenAI and agentic AI workflows to combine
              full-stack engineering with modern AI capabilities.
            </p>

            {/* Credential Badges matching resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">MCA (7.5 CGPA)</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    SIRT College, Bhopal (2024–2026)
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Full-Stack & GenAI
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    MERN Stack & Agentic Workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competency Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {[
                { name: "MERN Stack", icon: Code },
                { name: "Full-Stack Dev", icon: Layers },
                { name: "GenAI & LLMs", icon: Sparkles },
                { name: "REST APIs", icon: Server },
                { name: "Auth & Security", icon: ShieldCheck },
                { name: "Payment & Maps", icon: CheckCircle2 },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                  >
                    <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: "My Tech Stack" Container */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Technical Profile
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  MERN & AI
                </span>
              </div>

              {/* Categorized Tech Rows */}
              <div className="space-y-4">
                {skillsCategories.slice(0, 5).map((cat) => (
                  <div key={cat.category} className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-800 bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${skill.color.replace(
                              "text-",
                              "bg-"
                            )}`}
                          ></span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
