import React, { useState } from "react";
import {
  X,
  ExternalLink,
  Code2,
  Check,
  ShieldCheck,
  Activity,
  Cpu,
  Server,
  Database,
  Globe,
} from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  mode: "demo" | "github";
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  mode,
  onClose,
}) => {
  if (!project) return null;
  const [activeTab, setActiveTab] = useState<
    "overview" | "telemetry" | "architecture"
  >("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#161b22] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1117]/95">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {project.title}{" "}
              {mode === "github" ? "— Source Repository" : "— Live Environment"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-800 px-6 bg-[#12161c] text-xs font-mono">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-4 border-b-2 font-medium transition-all ${
              activeTab === "overview"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            // Overview & Stack
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-4 border-b-2 font-medium transition-all ${
              activeTab === "architecture"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            // Architecture & APIs
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`py-3 px-4 border-b-2 font-medium transition-all ${
              activeTab === "telemetry"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            // Real-time Health
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-2 font-semibold">
                  Project Description
                </h4>
                <p className="text-slate-300 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.metrics && (
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-3">
                  <Activity size={20} className="text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-cyan-300 uppercase">
                      Benchmark & Performance
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {project.metrics}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-3 font-semibold">
                  Stack & Dependencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-cyan-500/30 text-cyan-300 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-cyan-400 font-bold">
                  // System Components
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-cyan-400" />
                    <span>Edge CDN & API Gateway (Cloudflare / Envoy)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server size={14} className="text-cyan-400" />
                    <span>Stateless Microservices (Node.js & Go cluster)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-cyan-400" />
                    <span>
                      Distributed Persistent Layer (PostgreSQL with
                      read-replicas + Redis cluster)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 space-y-2 text-slate-400">
                <div className="text-emerald-400 font-bold">
                  // Production Release Pipeline
                </div>
                <p className="text-xs leading-relaxed">
                  Automated linting, matrix test suites, containerized Docker
                  builds, and zero-downtime rolling deployments via Kubernetes
                  helm charts.
                </p>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Status</div>
                  <div className="text-emerald-400 font-bold text-sm mt-1 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />{" "}
                    Operational
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">
                    Latency
                  </div>
                  <div className="text-cyan-300 font-bold text-sm mt-1">
                    24ms avg
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">
                    Availability
                  </div>
                  <div className="text-cyan-300 font-bold text-sm mt-1">
                    99.99%
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800 font-mono text-xs text-slate-400">
                <div className="text-slate-200 mb-2 font-semibold">
                  // Healthcheck Logs
                </div>
                <div className="text-emerald-400/90">
                  &gt; [OK] GET /healthz 200 OK (1.2ms)
                </div>
                <div className="text-emerald-400/90">
                  &gt; [OK] DB Pool healthy: 42 connections idle
                </div>
                <div className="text-emerald-400/90">
                  &gt; [OK] Memory utilization: 18.4% nominal
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#0d1117]/95">
          <div className="text-xs font-mono text-slate-500">
            ID: <span className="text-slate-400">{project.id}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert(`Redirecting to live environment for: ${project.title}`);
                onClose();
              }}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-linear-to-r from-cyan-400 to-emerald-400 hover:opacity-90 rounded-md transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,242,254,0.25)] cursor-pointer"
            >
              <ExternalLink size={13} /> Open Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
