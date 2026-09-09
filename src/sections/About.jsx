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

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Turning ideas into"
            highlight="real applications."
            highlightGradient="text-gradient-tiwari"
            subtitle="Full-Stack Developer specializing in the MERN stack with hands-on internship and project experience building modern web applications using React.js, Node.js, Express.js, and MongoDB."
          />

          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Experienced in JWT-based authentication, role-based access control,
              REST API development, payment processing, cloud media management,
              third-party API integration, and AI/LLM integration. Actively
              building practical GenAI and agentic AI workflows to combine
              full-stack engineering with modern AI capabilities.
            </p>

            {/* Credential Badges matching resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/90 flex items-center gap-3.5 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">MCA (7.5 CGPA)</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    SIRT College, Bhopal (2024–2026)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/90 flex items-center gap-3.5 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center shrink-0">
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

            {/* Core Competency Highlights */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Core Competencies
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {[
                  { name: "MERN Stack", icon: Code },
                  { name: "Full-Stack Dev", icon: Layers },
                  { name: "GenAI & LLMs", icon: Sparkles },
                  { name: "REST APIs", icon: Server },
                  { name: "Auth & RBAC", icon: ShieldCheck },
                  { name: "Integrations", icon: CheckCircle2 },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs justify-center sm:justify-start"
                    >
                      <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
