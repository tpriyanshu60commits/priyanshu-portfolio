import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email Address",
      value: "ppriyanshuttiwari2003@gmail.com",
      href: "mailto:ppriyanshuttiwari2003@gmail.com",
      icon: Mail,
      accentColor: "bg-teal-50 text-teal-600 border-teal-200",
      hoverBorder: "hover:border-teal-300",
      hoverText: "group-hover:text-teal-600",
      badge: "Direct Mail",
    },
    {
      name: "Phone Number",
      value: "+91 9630815802",
      href: "tel:9630815802",
      icon: Phone,
      accentColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      hoverBorder: "hover:border-emerald-300",
      hoverText: "group-hover:text-emerald-600",
      badge: "Voice / WhatsApp",
    },
    {
      name: "LinkedIn Profile",
      value: "linkedin.com/in/ppriyanshu-tiwarii/",
      href: "https://www.linkedin.com/in/ppriyanshu-tiwarii/",
      icon: LinkedinIcon,
      accentColor: "bg-blue-50 text-blue-600 border-blue-200",
      hoverBorder: "hover:border-blue-300",
      hoverText: "group-hover:text-blue-600",
      badge: "Professional Network",
    },
    {
      name: "GitHub Profile",
      value: "github.com/tpriyanshu60commits",
      href: "https://github.com/tpriyanshu60commits",
      icon: GithubIcon,
      accentColor: "bg-slate-100 text-slate-900 border-slate-200",
      hoverBorder: "hover:border-slate-400",
      hoverText: "group-hover:text-slate-900",
      badge: "Code Repositories",
    },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let's build"
            highlight="something together."
            highlightGradient="text-gradient-together"
            subtitle="I'm always open to discussing new engineering opportunities, full-stack roles, collaborations, or technical projects. Feel free to reach out through any channel below."
          />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.name}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs glass-card-hover group flex items-center justify-between transition-all duration-200 ${method.hoverBorder}`}
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${method.accentColor} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {method.name}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 hidden sm:inline-block">
                        {method.badge}
                      </span>
                    </div>
                    <div
                      className={`text-sm sm:text-base font-bold text-slate-900 truncate transition-colors ${method.hoverText}`}
                    >
                      {method.value}
                    </div>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center text-slate-500 shrink-0 ml-3 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Location & Availability Note */}
        <div className="mt-8 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span>Based in Bhopal, Madhya Pradesh, India • Available for Remote & Onsite Roles</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
