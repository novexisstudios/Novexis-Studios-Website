import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  ChevronRight,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
  Zap,
  Activity,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import HeroSystemFlow from "../components/HeroSystemFlow";
import ProblemSection from "../components/ProblemSection";
import AgentGrid from "../components/AgentGrid";
import BeforeAfterSection from "../components/BeforeAfterSection";
import AutomationArchitecture from "../components/AutomationArchitecture";
import IntegrationsMap from "../components/IntegrationsMap";
import ProcessAutomationCards from "../components/ProcessAutomationCards";
import NovexisMethodSection from "../components/NovexisMethodSection";
import { SERVICES, INITIAL_CASE_STUDIES, BRAND_MESSAGING } from "../constants";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <>
      <SEO
        title="Novexis Studios — AI Automation & Software Engineering"
        description="Novexis Studios builds AI-powered business systems, workflow automation, AI agents and custom software that eliminate repetitive work and scale modern businesses."
      />

      <div className="relative bg-[#050505] min-h-screen text-white overflow-hidden font-sans">
        {/* ================================================== */}
        {/* 1. HERO SECTION */}
        {/* ================================================== */}
        <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-12 pb-20 max-w-7xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 font-accent text-xs font-bold tracking-[0.2em] uppercase">
              <Cpu size={14} className="text-blue-400 animate-pulse" />
              {BRAND_MESSAGING.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center space-y-2 mb-6"
          >
            <h1 className="text-[clamp(2.75rem,8vw,7.5rem)] font-heading font-black tracking-tighter uppercase leading-[0.88] max-w-5xl mx-auto">
              {BRAND_MESSAGING.headlineMain} <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-white bg-clip-text text-transparent">
                {BRAND_MESSAGING.headlineSub}
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-xl md:text-2xl text-white/70 font-sans font-light max-w-3xl mx-auto text-center leading-relaxed mb-8"
          >
            "{BRAND_MESSAGING.heroSubtext}"
          </motion.p>

          {/* Core Promise Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-10 w-full"
          >
            <div className="glass px-6 py-3.5 rounded-full border border-blue-500/30 text-center bg-blue-950/20">
              <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-blue-300">
                CORE PROMISE: <strong className="text-white font-extrabold">"{BRAND_MESSAGING.corePromise}"</strong>
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <span>{BRAND_MESSAGING.primaryCTA}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="#systems-stack"
              className="w-full sm:w-auto text-center px-10 py-5 glass text-white font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-full border border-white/20 hover:border-blue-500/50 transition-all hover:bg-white/5"
            >
              {BRAND_MESSAGING.secondaryCTA}
            </a>
          </motion.div>

          {/* Supporting line */}
          <div className="text-center font-sans font-semibold text-[10px] sm:text-xs text-white/50 tracking-[0.25em] uppercase mb-12">
            {BRAND_MESSAGING.supportingLine}
          </div>

          {/* Hero Interactive System Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full"
          >
            <HeroSystemFlow />
          </motion.div>
        </section>

        {/* ================================================== */}
        {/* 2. THE PROBLEM SECTION */}
        {/* ================================================== */}
        <ProblemSection />

        {/* ================================================== */}
        {/* 3. NOVEXIS SYSTEM STACK */}
        {/* ================================================== */}
        <section id="systems-stack" className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative">
          <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
              [ CAPABILITY MATRIX ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              SYSTEMS <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                WE BUILD.
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
              Intelligent infrastructure designed around how your business actually works.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`glass p-8 md:p-12 rounded-[2.5rem] border transition-all ${
                  cat.isSecondary
                    ? "border-white/10 opacity-80 bg-black/40"
                    : "border-white/15 bg-gradient-to-b from-white/[0.03] to-black/80 hover:border-blue-500/40"
                }`}
              >
                {/* Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block mb-1 font-accent">
                      MODULE {cat.id} {cat.isSecondary && "— SUPPORTING LAYER"}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 max-w-md font-sans leading-relaxed">
                    "{cat.tagline}"
                  </p>
                </div>

                {/* Service Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group"
                    >
                      <h4 className="text-lg font-heading font-bold text-white uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                        {item.name}
                        <ChevronRight size={16} className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed font-sans mb-4 font-light">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5 font-sans">
                          {item.tags.map((t, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-white/50 border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 4. AI AGENTS SECTION */}
        {/* ================================================== */}
        <AgentGrid />

        {/* ================================================== */}
        {/* 5. FROM MANUAL TO AUTONOMOUS */}
        {/* ================================================== */}
        <BeforeAfterSection />

        {/* ================================================== */}
        {/* 6. AUTOMATION ARCHITECTURE */}
        {/* ================================================== */}
        <AutomationArchitecture />

        {/* ================================================== */}
        {/* 7. INTEGRATIONS MAP */}
        {/* ================================================== */}
        <IntegrationsMap />

        {/* ================================================== */}
        {/* 8. WHAT CAN WE AUTOMATE? */}
        {/* ================================================== */}
        <ProcessAutomationCards />

        {/* ================================================== */}
        {/* 9. NOVEXIS METHOD */}
        {/* ================================================== */}
        <NovexisMethodSection />

        {/* ================================================== */}
        {/* 10. CASE STUDIES / WORK */}
        {/* ================================================== */}
        <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative">
          <div className="max-w-4xl mb-16 md:mb-24 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
              [ PROVEN ARCHITECTURES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              SYSTEM <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                CASE STUDIES.
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
              Real business operational problems solved with automated software infrastructure.
            </p>
          </div>

          <div className="space-y-12">
            {INITIAL_CASE_STUDIES.map((cs) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-500/40 transition-all bg-black/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 text-xs">
                  <span className="text-blue-400 font-bold uppercase tracking-widest font-accent">{cs.category}</span>
                  <span className="text-white/40 uppercase font-semibold">CASE STUDY #{cs.id}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-8">
                  {cs.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm font-sans mb-8">
                  {/* PROBLEM */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-rose-500/20">
                    <span className="text-xs font-bold text-rose-400 uppercase block mb-2 font-accent">PROBLEM:</span>
                    <p className="text-white/70 text-xs leading-relaxed font-normal">{cs.problem}</p>
                  </div>

                  {/* SYSTEM */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-blue-500/20">
                    <span className="text-xs font-bold text-blue-400 uppercase block mb-2 font-accent">SYSTEM BUILT:</span>
                    <p className="text-white/70 text-xs leading-relaxed font-normal">{cs.system}</p>
                  </div>

                  {/* STACK */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20">
                    <span className="text-xs font-bold text-purple-400 uppercase block mb-2 font-accent">TECH STACK:</span>
                    <div className="flex flex-wrap gap-1 mt-1 font-sans">
                      {cs.stack.map((st, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-white/70">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* OUTCOME */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-400 uppercase block mb-2 font-accent">OUTCOME:</span>
                    <p className="text-white/90 text-xs leading-relaxed font-bold">{cs.outcome}</p>
                  </div>
                </div>

                <div className="text-right">
                  <Link
                    to={`/portfolio/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white uppercase tracking-wider transition-colors font-sans"
                  >
                    <span>INSPECT FULL SYSTEM ARCHITECTURE</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 11. DIGITAL EXPERIENCE (SUPPORTING CAPABILITIES) */}
        {/* ================================================== */}
        <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative">
          <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 bg-gradient-to-b from-purple-950/20 via-black to-black relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1 font-accent">
                  [ SUPPORTING CAPABILITIES ]
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase text-white">
                  DIGITAL EXPERIENCE.
                </h2>
              </div>
              <div className="px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 font-sans text-xs font-bold uppercase tracking-wider">
                ENGINEERING IS THE CORE. DESIGN MAKES IT HUMAN.
              </div>
            </div>

            <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed font-sans">
              "The systems we build still need to be experienced. When your underlying automation system requires a human-facing interface, brand system, product visual, or launch media, our design and creative production capabilities bring it to life."
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center font-sans text-xs">
              {[
                "Product Design",
                "UI/UX Systems",
                "Brand Systems",
                "Web Design",
                "Motion Design",
                "Video Editing",
                "3D & WebGL"
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/90 font-bold uppercase tracking-tight">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 12. THE SYSTEMS STUDIO */}
        {/* ================================================== */}
        <section className="py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-accent">
                [ STUDIO IDENTITY ]
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
                THE SYSTEMS <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  STUDIO.
                </span>
              </h2>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Novexis Studios is an AI automation and software engineering studio focused on building intelligent infrastructure for modern businesses.
              </p>
              <p className="text-base text-white/50 leading-relaxed font-sans font-light">
                We combine AI, software engineering, and workflow automation to turn repetitive business processes into autonomous systems. When the system needs a human-facing layer, our capabilities across product design, branding, video, and digital media bring it to life.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {[
                {
                  code: "PILLAR 01",
                  title: "AI-FIRST",
                  desc: "Intelligence embedded directly into business workflows to eliminate manual data entry and repetitive task dispatching."
                },
                {
                  code: "PILLAR 02",
                  title: "ENGINEERED",
                  desc: "Reliable software, clean backend architectures, and secure APIs behind every single automation pipeline."
                },
                {
                  code: "PILLAR 03",
                  title: "OUTCOME-DRIVEN",
                  desc: "Built around measurable improvements in time saved, operational error reduction, and scaling without adding headcount."
                }
              ].map((pil, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/10 bg-black/60">
                  <span className="text-xs font-bold text-blue-400 tracking-widest block mb-2 font-accent">{pil.code}</span>
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight mb-2">{pil.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-sans font-light">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 13. FINAL CTA */}
        {/* ================================================== */}
        <section className="py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto glass p-10 sm:p-16 md:p-20 rounded-[3rem] text-center border border-white/10 shadow-2xl bg-gradient-to-b from-blue-950/30 via-black to-black">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block mb-4 font-accent">
              [ AUTOMATION AUDIT ]
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter mb-6 leading-[0.9] uppercase">
              WHAT SHOULD YOUR BUSINESS <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                STOP DOING MANUALLY?
              </span>
            </h2>

            <p className="text-white/70 mb-10 text-base sm:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Tell us what's slowing your team down. We'll identify what can be automated and build the systems to execute it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <span>FIND MY AUTOMATIONS</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 glass text-white font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-full border border-white/20 hover:border-blue-500/50 transition-all hover:bg-white/5"
              >
                START A PROJECT
              </Link>
            </div>

            <div className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em] font-sans">
              AI AUTOMATION · SOFTWARE ENGINEERING · INTELLIGENT SYSTEMS
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
