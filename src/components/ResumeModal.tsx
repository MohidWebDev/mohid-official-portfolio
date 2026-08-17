import React from 'react';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES, TECH_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#161b22] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1117]/90">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
            <h3 className="text-lg font-bold text-white tracking-wide">
              Principal Engineer Resume | ARCHITECT.IO
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-md hover:bg-cyan-900/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <Download size={14} /> Print / PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm">
          
          {/* Summary / Contact Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white">Full-Stack Cloud Architect</h1>
              <p className="text-cyan-400 font-mono text-sm mt-1">San Francisco, CA • hello@architect.io</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded text-cyan-300">
                10+ Years Exp
              </span>
              <span className="px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded text-emerald-300">
                Available for Q1
              </span>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 font-semibold">
              // Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {TECH_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-[#0d1117] p-3.5 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs mb-2 text-cyan-300">{cat.title}</div>
                  <ul className="text-xs space-y-1 text-slate-400 font-mono">
                    {cat.skills.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 font-semibold">
              // Professional Experience
            </h4>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-cyan-500/40 pl-4 space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h5 className="font-bold text-white text-base">{exp.role}</h5>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-cyan-400 text-xs font-medium">{exp.company}</div>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 font-semibold">
                // Education & Certifications
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <GraduationCap size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>B.S. Computer Science — University of Technology (Honors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>AWS Certified Solutions Architect – Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Certified Kubernetes Administrator (CKA)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 font-semibold">
                // Core Philosophy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated to designing resilient, low-latency microservices with automated testing, continuous delivery pipelines, and elegant, accessible frontend interfaces.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
