import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ExternalLink, Code2 } from "lucide-react";

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["contact", "experience", "projects", "stack", "hero"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/85 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-black/40 py-4"
          : "bg-[#0d1117]/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="group flex items-center gap-2 text-xl sm:text-2xl font-black tracking-wider text-white hover:text-cyan-400 transition-colors"
          id="nav-logo"
        >
          <span className="font-extrabold tracking-tight">MOHID YASEEN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`group relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
                id={`nav-link-${link.id}`}
              >
                <span>{link.label}</span>
                {/* Horizontal accent line with neon glow */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] transition-all duration-300 ease-out origin-center ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-70 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          {/* Resume CTA */}
          <button
            onClick={onResumeClick}
            id="nav-resume-btn"
            className="text-xs font-medium text-cyan-400 cursor-pointer border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,242,254,0.25)] px-4 py-1.5 rounded transition-all duration-200 active:scale-95 flex items-center gap-1.5"
          >
            Resume
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="text-xs font-medium text-cyan-400 border border-cyan-500/40 px-3 py-1 rounded"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-cyan-400 p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#161b22]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-base font-medium py-2.5 px-3.5 rounded-lg flex items-center justify-between transition-all ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/40 border-l-2 border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.15)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
