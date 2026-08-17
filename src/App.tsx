/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'github'>('demo');

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalMode('demo');
  };

  const handleGithubClick = (project: Project) => {
    setSelectedProject(project);
    setModalMode('github');
  };

  return (
    <div className="min-h-screen portfolio-ambient-bg text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onResumeClick={() => setResumeOpen(true)} />

        {/* 2. Technology Stack Section */}
        <TechStack />

        {/* 3. Featured Projects Section */}
        <FeaturedProjects
          onProjectClick={handleProjectClick}
          onGithubClick={handleGithubClick}
        />

        {/* 4. Experience Timeline Section */}
        <Experience />

        {/* 5. Get in Touch / Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        mode={modalMode}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
