import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, XCircle } from "lucide-react";

const REPETITIVE_TASKS = [
  { name: "LEAD RESEARCH", problem: "SDRs waste hours manually searching company web pages and LinkedIn profiles." },
  { name: "DATA ENTRY", problem: "Copying prospect data line-by-line across CRMs, spreadsheets, and email tools." },
  { name: "FOLLOW-UPS", problem: "High-value sales conversations forgotten due to manual follow-up overload." },
  { name: "CUSTOMER SUPPORT", problem: "Repetitive Tier-1 support tickets choking customer success teams daily." },
  { name: "EXECUTIVE REPORTING", problem: "Assembling weekly performance metrics manually from 6 different tools." },
  { name: "DOCUMENT PROCESSING", problem: "Manually reading PDFs, contracts, and invoices to extract invoice data." },
  { name: "CRM UPDATES", problem: "Deals stuck in wrong pipeline stages because sales reps forget to update logs." },
  { name: "INTERNAL OPERATIONS", problem: "Onboarding new clients, creating folders, and dispatching tasks by hand." },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative font-sans">
      {/* Header */}
      <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
        <div className="inline-flex items-center gap-2 text-rose-400 font-bold text-xs tracking-widest uppercase font-accent">
          <AlertTriangle size={14} />
          THE OPERATIONAL BOTTLENECK
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          YOUR BUSINESS RUNS ON PROCESSES. <br />
          <span className="text-rose-500">MOST OF THEM SHOULDN'T BE MANUAL.</span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl">
          Leads get researched manually. Follow-ups get forgotten. Data gets copied between tools.
          Reports are assembled by hand. Teams spend hours doing work software could already be doing.
        </p>
      </div>

      {/* Grid of 8 Repetitive Tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {REPETITIVE_TASKS.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass p-6 rounded-2xl border border-white/10 hover:border-rose-500/30 transition-all group bg-gradient-to-b from-white/[0.02] to-black/80"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-rose-400 tracking-wider font-accent">
                [MANUAL 0{idx + 1}]
              </span>
              <XCircle size={16} className="text-rose-500/50 group-hover:text-rose-500 transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-2">
              {item.name}
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-sans font-normal">
              {item.problem}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Transition Banner */}
      <div className="glass p-8 rounded-3xl border border-blue-500/30 text-center relative overflow-hidden bg-gradient-to-r from-blue-950/40 via-purple-950/20 to-black">
        <h3 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-2">
          WE TURN PROCESSES INTO <span className="text-blue-400">SYSTEMS.</span>
        </h3>
        <p className="text-white/60 text-sm max-w-xl mx-auto uppercase tracking-widest font-sans font-semibold">
          From human bottleneck to autonomous infrastructure
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
