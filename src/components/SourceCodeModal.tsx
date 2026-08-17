import React, { useState } from 'react';
import { X, Copy, Check, Code, Layers, FileCode2 } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [copied, setCopied] = useState(false);

  const architectureTree = `ARCHITECT.IO Portfolio Project Structure:
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.tsx              # High-impact typography & floating code cards
│   │   ├── TechStack.tsx         # 4-column categorical technical skills grid
│   │   ├── FeaturedProjects.tsx  # Dynamic 3-card project showcase
│   │   ├── Experience.tsx        # Glowing vertical timeline architecture
│   │   ├── Contact.tsx           # Direct reach-out & controlled message form
│   │   ├── Footer.tsx            # Minimalist branding & footer links
│   │   ├── ResumeModal.tsx       # Printable/interactive candidate resume
│   │   └── ProjectModal.tsx      # Live telemetry & architecture deep-dive
│   ├── data/
│   │   └── portfolioData.ts      # Structured data for projects & experience
│   ├── types.ts                  # TypeScript models and interfaces
│   ├── App.tsx                   # Master layout assembler
│   ├── main.tsx                  # React DOM mount point
│   └── index.css                 # Custom keyframes & Tailwind utilities
└── package.json`;

  const handleCopy = () => {
    navigator.clipboard.writeText(architectureTree);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#161b22] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1117]/95">
          <div className="flex items-center gap-3">
            <Layers className="text-cyan-400" size={18} />
            <h3 className="text-base font-bold text-white tracking-wide">
              Portfolio Architecture & Source Code
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              // Component Hierarchy
            </span>
            <button
              onClick={handleCopy}
              className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" /> Copied Tree
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy Tree
                </>
              )}
            </button>
          </div>

          <pre className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
            <code>{architectureTree}</code>
          </pre>

          <p className="text-xs text-slate-400 leading-relaxed">
            Built with React 19, TypeScript, Tailwind CSS v4, and Lucide React icons. Features floating code cards with CSS keyframes, vertical glowing timelines, responsive grid systems, and glassmorphic navigation.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-3 border-t border-slate-800 bg-[#0d1117]/95">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
