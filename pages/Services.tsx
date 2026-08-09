import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

const Services = () => {
  return (
    <>
      <SEO
        title="Systems & Capabilities | Novexis Studios"
        description="Novexis builds AI-powered business systems, workflow automation, AI agents and custom software infrastructure."
        url="/services"
      />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-[#050505] min-h-screen text-white font-sans">
        {/* Hero Header */}
        <div className="max-w-4xl mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs block font-accent">
              [ CAPABILITY MATRIX ]
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              SYSTEMS <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                WE BUILD.
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/60 leading-relaxed font-light">
              Intelligent infrastructure designed around how your business actually works. We bridge AI engineering, software infrastructure, and autonomous workflows.
            </p>
          </motion.div>
        </div>

        {/* Capabilities Categories */}
        <div className="space-y-24">
          {SERVICES.map((category) => (
            <section
              key={category.id}
              className={`border-t border-white/10 pt-16 ${category.isSecondary ? "opacity-80" : ""}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-bold tracking-[0.25em] text-blue-400 uppercase block font-accent">
                    MODULE {category.id} {category.isSecondary && "— SUPPORTING LAYER"}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase leading-none">
                    {category.title}
                  </h2>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">
                    "{category.tagline}"
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service, sIdx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.06 }}
                      className="glass p-8 rounded-3xl group hover:border-blue-500/40 transition-all border border-white/10 bg-black/60"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-heading font-black tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                          {service.name}
                        </h3>
                        <ChevronRight
                          className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-2"
                          size={20}
                        />
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed font-sans mb-4 font-light">
                        {service.description}
                      </p>
                      {service.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5 font-sans">
                          {service.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-white/50 border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Technical Audit Section */}
        <section className="mt-32 md:mt-48 relative">
          <div className="glass p-12 md:p-20 rounded-[3rem] border border-blue-500/30 text-center shadow-2xl overflow-hidden relative bg-gradient-to-b from-blue-950/20 to-black">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 block mb-4 font-accent">
              [ AUTOMATION AUDIT ]
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6 uppercase">
              Identify Your Bottlenecks
            </h2>
            <p className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans">
              Let's analyze your current workflows and tools to design a custom automation architecture for your business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl shadow-blue-500/30"
            >
              <span>FIND MY AUTOMATIONS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
