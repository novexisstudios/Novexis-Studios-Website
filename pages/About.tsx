import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Code2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "AI-FIRST",
    code: "PILLAR 01",
    icon: <Cpu className="text-blue-400" size={32} />,
    description: "Intelligence embedded directly into business workflows to eliminate manual data entry, manual outreach, and repetitive task dispatching.",
    points: ["Multi-Agent AI Workflows", "Vector Knowledge Search", "LLM Decision Logic"],
  },
  {
    title: "ENGINEERED",
    code: "PILLAR 02",
    icon: <Code2 className="text-purple-400" size={32} />,
    description: "Reliable software, clean backend architectures, APIs, and databases behind every serious automation system.",
    points: ["High-Throughput APIs", "Cloud Infrastructure", "Robust Type Safety"],
  },
  {
    title: "OUTCOME-DRIVEN",
    code: "PILLAR 03",
    icon: <Zap className="text-emerald-400" size={32} />,
    description: "Built around measurable improvements in time, cost, operational error reduction, and scaling without constantly adding headcount.",
    points: ["Zero Human Lag", "Error Reduction", "Scalable Growth"],
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About The Systems Studio | Novexis Studios"
        description="Novexis Studios is an AI automation and software engineering studio focused on building intelligent infrastructure for modern businesses."
        url="/about"
      />
      <div className="max-w-7xl mx-auto px-6 py-20 bg-[#050505] min-h-screen text-white font-sans">
        <section className="mb-32">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block mb-4 font-accent">
            [ STUDIO IDENTITY ]
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-10 uppercase leading-[0.9]">
            THE SYSTEMS <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
              STUDIO.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-white/70 text-lg md:text-xl font-light leading-relaxed font-sans">
              <p className="text-white text-2xl font-normal">
                Novexis Studios is an AI automation and software engineering studio focused on building intelligent infrastructure for modern businesses.
              </p>
              <p>
                We combine AI, software engineering and workflow automation to turn repetitive business processes into autonomous systems.
              </p>
              <p className="text-white/50 text-base">
                When the system needs a human-facing layer, our capabilities across product design, branding, video and digital media bring it to life.
              </p>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-white/10 space-y-8 relative overflow-hidden shadow-2xl bg-black/60">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              <div className="flex items-center gap-6">
                <ShieldCheck className="text-blue-400 shrink-0" size={32} />
                <div>
                  <p className="text-lg font-heading font-bold uppercase tracking-tight">
                    Enterprise Grade Infrastructure
                  </p>
                  <p className="text-xs text-white/50 font-sans">Secure, deterministic, scalable logic</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Zap className="text-purple-400 shrink-0" size={32} />
                <div>
                  <p className="text-lg font-heading font-bold uppercase tracking-tight">
                    Velocity & Automation Focused
                  </p>
                  <p className="text-xs text-white/50 font-sans">Eliminating human lag from execution</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Globe className="text-emerald-400 shrink-0" size={32} />
                <div>
                  <p className="text-lg font-heading font-bold uppercase tracking-tight">
                    Global Operations
                  </p>
                  <p className="text-xs text-white/50 font-sans">Digital-first engineering partner</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs text-white/50 italic font-sans">
                "Our core mission is to turn repetitive business operations into autonomous, scalable infrastructure."
              </div>
            </div>
          </div>
        </section>

        {/* 3 PILLARS */}
        <section className="mb-32">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 font-accent">
              [ CORE FOUNDATION ]
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase">
              OUR THREE PILLARS.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border border-white/10 relative group hover:border-blue-500/40 transition-all bg-black/60"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">{pillar.icon}</div>
                  <span className="text-xs font-bold text-blue-400 font-accent">{pillar.code}</span>
                </div>

                <h3 className="text-3xl font-heading font-black mb-3 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans mb-8 font-light">
                  {pillar.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {pillar.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-white/60 font-semibold uppercase tracking-wider flex items-center gap-2 font-sans"
                    >
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tighter">
            Initialize Partnership.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-base font-light font-sans">
            Connect with us to begin automating your business operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-sans font-bold rounded-full uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all"
          >
            <span>AUTOMATE YOUR BUSINESS</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
