import React, { useState } from "react";
import { motion } from "framer-motion";
import { AUTOMATION_CARDS } from "../constants";
import { Clock } from "lucide-react";

export const ProcessAutomationCards = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto relative font-sans">
      {/* Header */}
      <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 block font-accent">
          [ CONVERSION AUTOMATIONS ]
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          IF YOUR TEAM DOES IT REPEATEDLY, <br />
          <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-white bg-clip-text text-transparent">
            WE CAN PROBABLY AUTOMATE IT.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
          Hover over any process module to inspect the autonomous execution workflow.
        </p>
      </div>

      {/* Grid of Automation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {AUTOMATION_CARDS.map((card, i) => {
          const isHovered = activeCard === card.id;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`glass p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                isHovered
                  ? "border-emerald-500/50 bg-emerald-950/20 shadow-2xl shadow-emerald-500/10 scale-[1.02]"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4 text-[11px] font-semibold">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider font-accent">[MODULE 0{i + 1}]</span>
                  <span className="text-white/40 uppercase tracking-wider">{card.category}</span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>

                {/* Trigger */}
                <div className="mb-6 bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-xs font-sans">
                  <span className="text-white/40 uppercase font-bold block mb-1 tracking-wider text-[10px]">TRIGGER:</span>
                  <span className="text-white/80 font-medium">{card.trigger}</span>
                </div>

                {/* Execution Flow Steps */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block mb-2 font-accent">
                    Autonomous Flow:
                  </span>
                  {card.flow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-white/80">
                      <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-emerald-400 shrink-0 font-accent">
                        {idx + 1}
                      </span>
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Output & ROI Estimate */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs text-white/70 font-sans">
                  <span className="text-emerald-400 font-bold">OUTPUT:</span> {card.output}
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400 pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-300">
                    <Clock size={13} className="text-emerald-400" /> {card.estimatedTimeSaved}
                  </span>
                  <span className="text-white/40 group-hover:text-white transition-colors uppercase text-[11px] font-accent">
                    Automate →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessAutomationCards;
