import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Server, Database, Wrench, Cpu } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'monitor':
        return <Monitor className="text-cyan-400" size={20} />;
      case 'server':
        return <Server className="text-cyan-400" size={20} />;
      case 'database':
        return <Database className="text-cyan-400" size={20} />;
      case 'wrench':
        return <Wrench className="text-cyan-400" size={20} />;
      default:
        return <Cpu className="text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="text-cyan-400">
            <Cpu size={24} className="stroke-[2.2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technology Stack
          </h2>
        </motion.div>

        {/* 4-Column Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              id={`tech-card-${category.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-[#161b22] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.12)] transition-all duration-300 group"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-1 rounded-md bg-cyan-950/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Cyan Dot Bullets */}
              <ul className="space-y-3.5">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe] shrink-0" />
                    <span className="font-normal">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
