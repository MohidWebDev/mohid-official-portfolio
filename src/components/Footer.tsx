import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-cyan-500/10 bg-[#06090e]/75 backdrop-blur-md py-8 text-xs sm:text-sm text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand with Scroll-to-Top */}
        <a
          href="#hero"
          onClick={scrollToTop}
          id="footer-logo"
          className="font-extrabold tracking-wider text-white text-sm hover:text-cyan-400 transition-colors cursor-pointer"
        >
          MOHID YASEEN
        </a>

        {/* Center Copyright */}
        <div className="text-slate-400 text-center font-mono text-xs">
          © {currentYear} Mohid Yaseen. Built with Precision.
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-6 text-slate-400 font-mono text-xs sm:text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

