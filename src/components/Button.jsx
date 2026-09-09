import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  className = "",
  icon: Icon,
  iconPosition = "right",
  download,
  target,
  rel,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-sm hover:shadow-md focus:ring-slate-900",
    secondary:
      "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm focus:ring-slate-400",
    outline:
      "bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-100/60 focus:ring-slate-400",
    teal:
      "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-teal-600/20 focus:ring-teal-500",
    mint:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 focus:ring-emerald-400",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 focus:ring-slate-300",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    const computedTarget = target || (isExternal ? "_blank" : undefined);
    const computedRel =
      rel ||
      (computedTarget === "_blank" || isExternal
        ? "noopener noreferrer"
        : undefined);

    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        download={download}
        target={computedTarget}
        rel={computedRel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </button>
  );
}
