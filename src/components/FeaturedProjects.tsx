import React from "react";
import { motion } from "motion/react";
import { LayoutGrid, ExternalLink, Code2 } from "lucide-react";
import { FEATURED_PROJECTS } from "../data/portfolioData";
import { Project } from "../types";

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="text-cyan-400">
            <LayoutGrid size={24} className="stroke-[2.2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* 3-Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.12,
                ease: "easeOut",
              }}
              className="bg-[#161b22] border border-cyan-500/20 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,242,254,0.12)] transition-all duration-300 group"
            >
              <div>
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#0e2730]/90 text-cyan-300 border border-cyan-500/30 text-xs px-2.5 py-1 rounded font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                {/* Live Demo CTA */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`live-demo-btn-${project.id}`}
                  className="flex-1 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] py-2 px-3 rounded text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <ExternalLink size={14} className="stroke-[2.2]" />

                  <span>Live Demo</span>
                </a>

                {/* GitHub CTA */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`github-btn-${project.id}`}
                  className="flex-1 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 py-2 px-3 rounded text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <Code2 size={14} className="stroke-[2.2]" />

                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
