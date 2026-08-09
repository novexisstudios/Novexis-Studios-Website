import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MessageSquare,
  Mail,
  FileText,
  Database,
  Cpu,
  Brain,
  Zap,
  CheckSquare,
  BarChart3,
  Server,
  Workflow,
  ArrowDown
} from "lucide-react";

interface LayerData {
  id: string;
  name: string;
  badge: string;
  description: string;
  color: string;
  items: { label: string; sub: string; icon: React.ReactNode }[];
}

const ARCHITECTURE_LAYERS: LayerData[] = [
  {
    id: "layer-1",
    name: "01 — INPUT LAYER",
    badge: "INGESTION",
    description: "Captures business events, messages, forms, and documents from all digital touchpoints.",
    color: "from-blue-600 to-indigo-600",
    items: [
      { label: "Website Forms", sub: "Webhooks & APIs", icon: <Globe size={16} /> },
      { label: "WhatsApp & SMS", sub: "Direct Messaging", icon: <MessageSquare size={16} /> },
      { label: "Inbound Email", sub: "IMAP / SMTP", icon: <Mail size={16} /> },
      { label: "Documents & PDFs", sub: "OCR & Ingestion", icon: <FileText size={16} /> },
      { label: "CRM & DB Events", sub: "State Triggers", icon: <Database size={16} /> },
    ]
  },
  {
    id: "layer-2",
    name: "02 — INTELLIGENCE LAYER",
    badge: "AI CORE",
    description: "LLMs, RAG knowledge bases, extraction, classification, and autonomous decision logic.",
    color: "from-purple-600 to-blue-600",
    items: [
      { label: "LLM Reasoning Engines", sub: "GPT-4o / Claude 3.5", icon: <Brain size={16} /> },
      { label: "AI Domain Agents", sub: "Multi-Agent System", icon: <Cpu size={16} /> },
      { label: "RAG Vector Lookup", sub: "Pinecone / Qdrant", icon: <Database size={16} /> },
      { label: "Document Extraction", sub: "Structured Parsing", icon: <FileText size={16} /> },
      { label: "Decision Logic Rules", sub: "Deterministic Safety", icon: <Zap size={16} /> },
    ]
  },
  {
    id: "layer-3",
    name: "03 — AUTOMATION ENGINE",
    badge: "ORCHESTRATION",
    description: "Workflow rules, condition evaluation, trigger dispatching, and human approval gates.",
    color: "from-indigo-600 to-cyan-600",
    items: [
      { label: "Workflow Engine", sub: "n8n / Custom Python", icon: <Workflow size={16} /> },
      { label: "Business Rules", sub: "Custom Logic", icon: <Zap size={16} /> },
      { label: "Trigger Dispatcher", sub: "Event Loop", icon: <Server size={16} /> },
      { label: "Human Approval Gates", sub: "Slack / Email Gates", icon: <CheckSquare size={16} /> },
    ]
  },
  {
    id: "layer-4",
    name: "04 — ACTION LAYER",
    badge: "EXECUTION",
    description: "Autonomous execution of business actions across external tools, CRMs, and APIs.",
    color: "from-cyan-600 to-emerald-600",
    items: [
      { label: "Email Dispatch", sub: "Resend / SMTP", icon: <Mail size={16} /> },
      { label: "WhatsApp Messages", sub: "Meta Business API", icon: <MessageSquare size={16} /> },
      { label: "CRM Deal Updates", sub: "HubSpot / Salesforce", icon: <Database size={16} /> },
      { label: "ERP & Database Write", sub: "PostgreSQL / SAP", icon: <Server size={16} /> },
      { label: "Internal Slack Alerts", sub: "Channel Notifications", icon: <MessageSquare size={16} /> },
    ]
  },
  {
    id: "layer-5",
    name: "05 — INSIGHTS LAYER",
    badge: "ANALYTICS",
    description: "Automated executive dashboards, latency monitoring, error logs, and performance reports.",
    color: "from-emerald-600 to-blue-600",
    items: [
      { label: "Executive Dashboards", sub: "Real-Time ROI Metrics", icon: <BarChart3 size={16} /> },
      { label: "AI Performance Reports", sub: "Weekly Slack Summaries", icon: <FileText size={16} /> },
      { label: "Latency & Error Logs", sub: "Sentry / Datadog", icon: <Server size={16} /> },
    ]
  }
];

export const AutomationArchitecture = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto relative font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-4">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
          [ SYSTEM SCHEMATIC ]
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          INTELLIGENCE, <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
            WIRED INTO YOUR BUSINESS.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          How Novexis transforms raw business inputs into autonomous, error-free execution.
        </p>
      </div>

      {/* 5-Tier Vertical Architecture Stack */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {ARCHITECTURE_LAYERS.map((layer, idx) => {
          const isHovered = hoveredLayer === layer.id;
          return (
            <React.Fragment key={layer.id}>
              <motion.div
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
                whileHover={{ scale: 1.01 }}
                className={`glass p-6 md:p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden ${
                  isHovered
                    ? "border-blue-500/60 bg-blue-950/20 shadow-2xl shadow-blue-500/10"
                    : "border-white/10 bg-black/50"
                }`}
              >
                {/* Top bar of each layer */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-sm md:text-base font-heading font-black tracking-tight text-white uppercase">
                      {layer.name}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 font-accent">
                      {layer.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 max-w-md font-sans">
                    {layer.description}
                  </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {layer.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 hover:bg-white/5 transition-all text-center flex flex-col items-center justify-center space-y-1.5"
                    >
                      <div className="text-blue-400 mb-1">{item.icon}</div>
                      <span className="text-xs font-bold font-heading text-white tracking-tight block">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-white/40 block uppercase font-medium">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Arrow Connector between layers */}
              {idx < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 animate-pulse">
                    <ArrowDown size={14} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default AutomationArchitecture;
