import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Mail,
  MessageSquare,
  FileText,
  Database,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Layers
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  description: string;
}

const INPUT_NODES: NodeItem[] = [
  { id: "web", name: "Website Forms", type: "Input", icon: <Globe size={16} />, description: "Inbound leads & web hooks" },
  { id: "mail", name: "Inbound Email", type: "Input", icon: <Mail size={16} />, description: "Customer inquiries & support" },
  { id: "wa", name: "WhatsApp API", type: "Input", icon: <MessageSquare size={16} />, description: "Direct customer messaging" },
  { id: "crm", name: "CRM Events", type: "Input", icon: <Database size={16} />, description: "Deal stage updates" },
  { id: "doc", name: "Documents", type: "Input", icon: <FileText size={16} />, description: "PDFs, Invoices, Contracts" },
];

const AI_CORE_MODULES = [
  { id: "res", name: "Research & Enrich", detail: "Scrapes & enriches lead data" },
  { id: "qual", name: "AI Qualification", detail: "Evaluates lead against ICP" },
  { id: "dec", name: "Decision Engine", detail: "Determines optimal action" },
  { id: "gen", name: "Response Generation", detail: "Synthesizes personalized response" },
  { id: "exec", name: "Action Dispatcher", detail: "Triggers downstream systems" },
];

const OUTCOME_NODES: NodeItem[] = [
  { id: "out-crm", name: "CRM Updated", type: "Outcome", icon: <Database size={16} />, description: "Lead enriched & stage set" },
  { id: "out-mail", name: "Email Dispatched", type: "Outcome", icon: <Mail size={16} />, description: "Personalized outreach sent" },
  { id: "out-wa", name: "WhatsApp Sent", type: "Outcome", icon: <MessageSquare size={16} />, description: "Instant response delivered" },
  { id: "out-erp", name: "ERP & Finance Sync", type: "Outcome", icon: <Server size={16} />, description: "Data logged & invoice ready" },
];

export const HeroSystemFlow = () => {
  const [activeInput, setActiveInput] = useState<string>("web");
  const [activeModule, setActiveModule] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  React.useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % AI_CORE_MODULES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const selectedInputObj = INPUT_NODES.find((n) => n.id === activeInput) || INPUT_NODES[0];

  return (
    <div className="w-full glass rounded-[2.5rem] border border-white/10 p-6 md:p-10 relative overflow-hidden shadow-2xl bg-black/60 font-sans">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header technical bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs font-semibold">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-white/90 font-bold uppercase tracking-wider">NOVEXIS CORE ENGINE</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-blue-400 hidden sm:inline uppercase tracking-wider font-bold">[STATUS: ACTIVE]</span>
        </div>
        <div className="flex items-center gap-4 text-white/50 text-[11px] uppercase tracking-wider">
          <span>LATENCY: <strong className="text-white">11ms</strong></span>
          <span>SYSTEM: <strong className="text-white">AUTONOMOUS</strong></span>
        </div>
      </div>

      {/* Interactive Architecture Flow Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* COL 1: INPUTS */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-2 flex items-center gap-2 font-accent">
            <Layers size={14} className="text-blue-400" />
            01 — Business Inputs
          </div>

          {INPUT_NODES.map((node) => {
            const isSelected = activeInput === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setActiveInput(node.id);
                  setIsSimulating(false);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? "bg-blue-600/20 border-blue-500/80 text-white shadow-lg shadow-blue-500/10 scale-[1.02]"
                    : "bg-white/[0.03] border-white/5 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isSelected ? "bg-blue-500 text-white" : "bg-white/5 text-white/40 group-hover:text-white"}`}>
                    {node.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold font-heading uppercase tracking-tight">{node.name}</div>
                    <div className="text-[11px] text-white/50">{node.description}</div>
                  </div>
                </div>
                {isSelected && (
                  <motion.div layoutId="input-indicator" className="w-1.5 h-6 bg-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* COL 2: AI CORE ENGINE */}
        <div className="lg:col-span-5 relative py-6 lg:py-0">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-400 mb-4 flex items-center justify-center gap-2 font-accent">
            <Cpu size={14} className="animate-pulse" />
            02 — Intelligent AI Processing Core
          </div>

          <div className="glass p-6 rounded-3xl border border-blue-500/30 relative overflow-hidden bg-gradient-to-b from-blue-950/20 to-black/80 shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="relative z-10 space-y-3">
              {AI_CORE_MODULES.map((mod, idx) => {
                const isActive = activeModule === idx;
                return (
                  <div
                    key={mod.id}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-blue-600/30 border-blue-400 text-white shadow-md shadow-blue-500/20 translate-x-1"
                        : "bg-white/5 border-white/5 text-white/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isActive ? "bg-blue-500 text-white" : "bg-white/10 text-white/40"}`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold font-heading uppercase">{mod.name}</div>
                        <div className="text-[11px] text-white/50">{mod.detail}</div>
                      </div>
                    </div>

                    {isActive && (
                      <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                        <Sparkles size={12} className="animate-spin text-emerald-400" /> RUNNING
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5 font-medium">
                <Zap size={12} className="text-yellow-400" /> Auto-Routing
              </span>
              <span className="text-white/90 font-bold uppercase tracking-wide">Input: {selectedInputObj.name}</span>
            </div>
          </div>
        </div>

        {/* COL 3: OUTCOMES */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-2 flex items-center gap-2 font-accent">
            <CheckCircle2 size={14} className="text-emerald-400" />
            03 — Automated Business Action
          </div>

          {OUTCOME_NODES.map((out) => (
            <div
              key={out.id}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white/70 hover:border-emerald-500/40 hover:text-white transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                {out.icon}
              </div>
              <div>
                <div className="text-xs font-bold font-heading uppercase tracking-tight flex items-center gap-2">
                  {out.name}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </div>
                <div className="text-[11px] text-white/50">{out.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/50 font-sans tracking-wide">
        "Novexis connects fragmented business inputs directly to intelligent, autonomous execution."
      </div>
    </div>
  );
};

export default HeroSystemFlow;
