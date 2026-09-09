import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  highlightGradient = "text-gradient-tiwari",
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 sm:mb-10 md:mb-12 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-slate-600 bg-slate-100/90 border border-slate-200/80 mb-3.5 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}{" "}
          {highlight && (
            <span className={highlightGradient}>{highlight}</span>
          )}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
