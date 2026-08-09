import React from "react";
import { motion } from "framer-motion";
import { INTEGRATIONS } from "../constants";

export const IntegrationsMap = () => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative font-sans">
      <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
          [ INTEGRATION NETWORK ]
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
          YOUR STACK. <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
            CONNECTED.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
          We connect the software your business already uses instead of forcing you to rebuild everything from scratch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INTEGRATIONS.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all group bg-black/50"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-xs text-blue-400 font-bold font-accent">
              <span>[CAT-0{idx + 1}]</span>
              <span className="text-white/50 uppercase">{cat.name}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {cat.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-white/90 font-medium group-hover:border-blue-500/30 transition-colors font-sans"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsMap;
