import React from "react";
import { motion } from "framer-motion";
import { NOVEXIS_METHOD } from "../constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const NovexisMethodSection = () => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative font-sans">
      <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 block font-accent">
          [ ENGINEERING METHODOLOGY ]
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          THE NOVEXIS <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
            METHOD.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
          How we take your business from manual processes to scalable, automated infrastructure.
        </p>
      </div>

      {/* Pipeline: Horizontal on Desktop, Vertical on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {NOVEXIS_METHOD.map((m, idx) => (
          <motion.div
            key={m.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/40 transition-all group flex flex-col justify-between relative bg-black/60"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-2xl font-black text-purple-400 font-heading tracking-tighter">
                  {m.step}
                </span>
                <CheckCircle2 size={16} className="text-white/20 group-hover:text-purple-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight mb-1">
                {m.title}
              </h3>
              <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-4 font-accent">
                {m.subtitle}
              </span>

              <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
                "{m.description}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-bold text-white/40 uppercase flex items-center justify-between font-accent">
              <span>STAGE {m.step}</span>
              <ArrowRight size={12} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NovexisMethodSection;
