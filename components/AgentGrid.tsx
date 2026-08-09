import React from "react";
import { motion } from "framer-motion";
import { AI_AGENTS } from "../constants";
import { Cpu, Activity, ArrowUpRight } from "lucide-react";

export const AgentGrid = () => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto relative font-sans">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase font-accent">
          <Cpu size={14} className="animate-spin text-blue-400" />
          AUTONOMOUS WORKFORCE
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          AI AGENTS FOR <br />
          <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
            REAL BUSINESS WORK.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
          Not chatbots. Systems that perform actual work.
        </p>
      </div>

      {/* Grid of 6 AI Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {AI_AGENTS.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/60 shadow-xl"
          >
            {/* Top Card Header */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs font-semibold">
                <span className="text-blue-400 font-bold tracking-wider font-accent">[SYS-{String(i + 1).padStart(2, "0")}]</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] font-sans">{agent.status}</span>
                </div>
              </div>

              {/* Agent Title & Tagline */}
              <div className="mb-4">
                <h3 className="text-2xl font-heading font-black tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  {agent.name}
                  <ArrowUpRight size={18} className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <span className="text-xs text-blue-300 font-medium block mt-1 uppercase tracking-wider font-sans">
                  {agent.tagline}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                "{agent.description}"
              </p>

              {/* Capabilities */}
              <div className="space-y-2 mb-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block mb-2 font-accent">
                  Core Capabilities:
                </span>
                {agent.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-white/40">
              <span className="flex items-center gap-1.5 font-medium">
                <Activity size={12} className="text-blue-400" /> Latency: {agent.latency}
              </span>
              <span className="text-white/70 group-hover:text-white transition-colors uppercase font-bold">
                Deploy Agent →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AgentGrid;
