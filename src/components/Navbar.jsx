import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/#about" },
    { name: "Projects", id: "projects", path: "/#projects" },
    { name: "Skills", id: "skills", path: "/#skills" },
    { name: "Experience", id: "experience", path: "/#experience" },
    { name: "Achievements", id: "achievements", path: "/#achievements" },
    { name: "Education", id: "education", path: "/#education" },
    { name: "Contact", id: "contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy when on home page (checked bottom to top)
      if (location.pathname === "/") {
        const sections = [
          "contact",
          "education",
          "achievements",
          "experience",
          "skills",
          "projects",
          "about",
          "home",
        ];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(link.path);
    } else if (link.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(link.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-base tracking-tight shadow-sm group-hover:scale-105 transition-transform">
              PT
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === "/" && activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-slate-900 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Resume Button (Opens in new tab) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/Priyanshu_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              iconPosition="right"
              className="text-xs font-semibold px-4 py-2"
            >
              Resume
            </Button>
          </div>

          {/* Mobile / Tablet Menu Button (Opens in new tab) */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/Priyanshu_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Resume ↗
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button
              href="/Priyanshu_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={FileText}
              iconPosition="left"
              className="w-full justify-center"
            >
              View Full Resume ↗
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
