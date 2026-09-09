import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/tpriyanshu60commits",
    icon: GithubIcon,
    color: "hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100",
    label: "github.com/tpriyanshu60commits",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ppriyanshu-tiwarii/",
    icon: LinkedinIcon,
    color: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50",
    label: "linkedin.com/in/ppriyanshu-tiwarii",
  },
  {
    name: "Email",
    url: "mailto:ppriyanshuttiwari2003@gmail.com",
    icon: Mail,
    color: "hover:text-teal-600 hover:border-teal-300 hover:bg-teal-50",
    label: "ppriyanshuttiwari2003@gmail.com",
  },
];

export default function SocialLinks({
  variant = "icons", // 'icons', 'pills', 'cards'
  className = "",
  iconSize = "md",
}) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-11 h-11",
  };

  const iconDimensionMap = {
    sm: "w-4 h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5",
  };

  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {socialLinksData.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 bg-white/90 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon className="w-4 h-4 text-slate-700" />
              <span>{item.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={`space-y-3 ${className}`}>
        {socialLinksData.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl glass-card glass-card-hover group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {item.name}
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    {item.label}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {socialLinksData.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`${sizeMap[iconSize]} rounded-full bg-white/90 border border-slate-200/90 text-slate-600 flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${item.color}`}
          >
            <Icon className={iconDimensionMap[iconSize]} />
          </a>
        );
      })}
    </div>
  );
}
