import React from "react";
import { motion } from "framer-motion";
import { X, Check, Sparkles } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative font-sans">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
          [ TRANSFORMATION PIPELINE ]
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          FROM MANUAL <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TO AUTONOMOUS.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light">
          Compare traditional human overhead with Novexis automated infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* BEFORE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-rose-500/20 bg-gradient-to-b from-rose-950/10 to-black relative"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-rose-500/20">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest font-accent">[ TRADITIONAL METHOD ]</span>
            <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold font-sans">MANUAL & SLOW</span>
          </div>

          <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-6">
            Sales & Ops Team manually:
          </h3>

          <ul className="space-y-4 text-white/70 text-sm md:text-base font-sans font-light">
            <li className="flex items-start gap-3">
              <X size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>Manually searches web & LinkedIn for prospect company data</span>
            </li>
            <li className="flex items-start gap-3">
              <X size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>Researches tech stacks & news items line-by-line</span>
            </li>
            <li className="flex items-start gap-3">
              <X size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>Writes custom outreach emails individually</span>
            </li>
            <li className="flex items-start gap-3">
              <X size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>Forgets follow-up timing & leaves replies hanging</span>
            </li>
            <li className="flex items-start gap-3">
              <X size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>Manually copies notes and updates deal stages in CRM</span>
            </li>
          </ul>

          <div className="mt-10 pt-6 border-t border-rose-500/20 text-xs font-semibold text-rose-400">
            RESULT: High operational cost, missed deals, team burnout.
          </div>
        </motion.div>

        {/* AFTER BOX */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 via-blue-950/10 to-black relative shadow-2xl shadow-emerald-500/10"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-500/20">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-accent">[ NOVEXIS AI PIPELINE ]</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1 font-sans">
              <Sparkles size={12} /> AUTONOMOUS ENGINE
            </span>
          </div>

          <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-6">
            AI System 8-Step Pipeline:
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs text-white">
            {[
              { step: "01", name: "Discover" },
              { step: "02", name: "Enrich" },
              { step: "03", name: "Score" },
              { step: "04", name: "Personalize" },
              { step: "05", name: "Contact" },
              { step: "06", name: "Follow Up" },
              { step: "07", name: "Update CRM" },
              { step: "08", name: "Report" },
            ].map((st) => (
              <div key={st.step} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between font-sans">
                <span className="text-emerald-400 font-bold">{st.step}</span>
                <span className="font-heading font-bold uppercase tracking-tight">{st.name}</span>
                <Check size={14} className="text-emerald-400" />
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-500/20 text-xs font-bold text-emerald-400 flex items-center justify-between font-sans">
            <span>RESULT: 100% automated execution, zero human lag.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
