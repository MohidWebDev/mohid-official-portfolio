import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="text-cyan-400">
            <Briefcase size={24} className="stroke-[2.2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 border-l-2 border-cyan-500/30 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className="relative group transition-all"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00f2fe] shadow-[0_0_12px_#00f2fe] ring-4 ring-cyan-500/20 group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Details */}
              <div className="bg-[#161b22]/40 hover:bg-[#161b22]/90 border border-transparent hover:border-cyan-500/20 rounded-xl p-5 -m-5 transition-all duration-300">
                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {exp.role}
                </h3>

                {/* Company and Period */}
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium mb-3">
                  <span className="text-[#00f2fe] font-semibold">{exp.company}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-400 font-mono text-xs sm:text-sm">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
