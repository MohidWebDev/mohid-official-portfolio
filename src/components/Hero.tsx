import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ArrowRight, Code2, Briefcase, Check, Copy, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenSnippetModal?: () => void;
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const [copiedCard1, setCopiedCard1] = useState(false);
  const [copiedCard2, setCopiedCard2] = useState(false);

  const codeSnippet1 = `const App = () => {
  return (
    <div className=>
      Hello World
    </div>
  );
};`;

  const codeSnippet2 = `const express = require('express');
const app = express();
app.use(cors());`;

  const handleCopy = (text: string, cardIndex: number) => {
    navigator.clipboard.writeText(text);
    if (cardIndex === 1) {
      setCopiedCard1(true);
      setTimeout(() => setCopiedCard1(false), 2000);
    } else {
      setCopiedCard2(true);
      setTimeout(() => setCopiedCard2(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle background glow spots */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Building Robust <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#00e1fe] to-[#10b981]">
                Scalable Digital <br />
                Solutions.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal"
            >
              Full-Stack Software Engineer specializing in high-performance web applications. Crafting the digital infrastructure of tomorrow with precision and innovation.
            </motion.p>

            {/* CTA Buttons & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary Cyan CTA: View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-btn"
                className="bg-[#00f2fe] hover:bg-[#38f8ff] text-slate-950 font-bold px-5 py-3 rounded-md flex items-center gap-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] active:scale-95 cursor-pointer"
              >
                <FolderGit2 size={18} className="stroke-[2.5]" />
                <span>View Projects</span>
              </button>

              {/* Secondary Dark Outline CTA: Get in Touch */}
              <button
                onClick={() => scrollTo('contact')}
                id="hero-get-in-touch-btn"
                className="bg-[#161b22]/90 hover:bg-[#21262d] text-slate-200 border border-slate-700 hover:border-cyan-500/50 px-5 py-3 rounded-md text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Get in Touch
              </button>

              {/* Quick Link Button 1: Code / GitHub */}
              <button
                onClick={() => scrollTo('stack')}
                aria-label="View Tech Stack"
                title="View Technical Stack"
                className="w-11 h-11 rounded-md bg-[#161b22] border border-slate-700/80 hover:border-cyan-500/60 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95 cursor-pointer"
              >
                <Code2 size={19} />
              </button>

              {/* Quick Link Button 2: Briefcase / Experience */}
              <button
                onClick={() => scrollTo('experience')}
                aria-label="View Experience"
                title="View Experience Timeline"
                className="w-11 h-11 rounded-md bg-[#161b22] border border-slate-700/80 hover:border-cyan-500/60 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95 cursor-pointer"
              >
                <Briefcase size={18} />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Floating Glassmorphism Code Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6 sm:gap-10 lg:gap-12 w-full pt-4">
            
            {/* Top Code Card - Frontend / React (Positioned Top & Left) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="self-start w-full max-w-[380px] sm:max-w-[410px] bg-[#161b22]/90 backdrop-blur-md border border-cyan-500/20 rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-cyan-950/20 hover:border-cyan-500/40 transition-all duration-300 animate-float-slow z-10"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <button
                  onClick={() => handleCopy(codeSnippet1, 1)}
                  className="text-slate-500 hover:text-cyan-400 text-xs flex items-center gap-1 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCard1 ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>

              {/* Code Content */}
              <pre className="font-code hero-code-snippet text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                <code className="font-code">
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-amber-300">App</span> = () =&gt; &#123;
                  {'\n  '}<span className="text-purple-400 font-semibold">return</span> (
                  {'\n    '}&lt;<span className="text-pink-400">div</span> <span className="text-cyan-400">className</span>=&gt;
                  {'\n      '}<span className="text-slate-100 font-medium">Hello World</span>
                  {'\n    '}&lt;/<span className="text-pink-400">div</span>&gt;
                  {'\n  '});
                  {'\n'}&#125;;
                </code>
              </pre>
            </motion.div>

            {/* Bottom Offset Code Card - Backend / Express (Positioned Bottom & Right) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="self-end w-full max-w-[380px] sm:max-w-[410px] bg-[#161b22]/90 backdrop-blur-md border border-cyan-500/20 rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-cyan-950/20 hover:border-cyan-500/40 transition-all duration-300 animate-float-reverse z-10"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <button
                  onClick={() => handleCopy(codeSnippet2, 2)}
                  className="text-slate-500 hover:text-cyan-400 text-xs flex items-center gap-1 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCard2 ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>

              {/* Code Content */}
              <pre className="font-code hero-code-snippet text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                <code className="font-code">
                  <span className="text-purple-400 font-semibold">const</span> express = <span className="text-blue-400">require</span>(<span className="text-emerald-400">'express'</span>);
                  {'\n'}<span className="text-purple-400 font-semibold">const</span> app = <span className="text-cyan-400">express</span>();
                  {'\n'}app.<span className="text-blue-400">use</span>(<span className="text-cyan-400">cors</span>());
                </code>
              </pre>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
