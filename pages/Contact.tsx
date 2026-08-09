import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <SEO
        title="Automate Your Business | Contact Novexis Studios"
        description="Tell us what's slowing your team down. We'll identify what can be automated and build the intelligent infrastructure."
        url="/contact"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 bg-[#050505] min-h-screen text-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE: HEADING & DETAILS */}
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
              [ AUTOMATION AUDIT & INQUIRY ]
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              WHAT SHOULD YOUR BUSINESS <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                STOP DOING MANUALLY?
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-light font-sans">
              Tell us what's slowing your team down. We'll audit your workflows and design a custom AI automation and software architecture for your business.
            </p>

            <div className="p-6 rounded-2xl glass border border-blue-500/30 bg-blue-950/20 text-xs text-blue-300 font-sans">
              CORE PROMISE: <strong className="text-white font-bold">"We automate the work your team shouldn't be doing."</strong>
            </div>

            <div className="space-y-6 pt-4 font-sans">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-blue-400 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold font-accent">
                    DIRECT EMAIL
                  </p>
                  <p className="text-lg font-bold text-white font-sans">
                    novexisstudios@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-purple-400 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold font-accent">
                    STUDIO BASE
                  </p>
                  <p className="text-lg font-bold text-white font-sans">
                    Digital First • Global Operation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: AUDIT FORM */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden bg-black/60 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle size={44} />
                  </div>
                  <h2 className="text-3xl font-heading font-black uppercase tracking-tight">
                    Transmission Received
                  </h2>
                  <p className="text-white/70 text-sm max-w-md mx-auto font-sans font-light">
                    Our engineering team is reviewing your process bottlenecks. We will respond within 12 hours with an initial system architecture proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-[0.2em] pt-4 block mx-auto font-sans"
                  >
                    Submit another inquiry →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 ml-1 font-accent">
                        Your Name / Company
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors text-sm font-sans text-white"
                        placeholder="John Doe (Acme Corp)"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 ml-1 font-accent">
                        Business Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors text-sm font-sans text-white"
                        placeholder="john@acmecorp.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 ml-1 font-accent">
                      Primary System Category
                    </label>
                    <select className="w-full bg-black border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors text-sm font-sans text-white">
                      <option value="01">01 — AI Automation & AI Agents</option>
                      <option value="02">02 — Custom Software & Web Systems</option>
                      <option value="03">03 — Sales & Lead Automation Engine</option>
                      <option value="04">04 — AI & Data Systems / RAG Knowledge Bases</option>
                      <option value="05">05 — Operations & Process Automation</option>
                      <option value="06">06 — Digital Experience (UI/UX, Product, Media)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 ml-1 font-accent">
                      What repetitive work is slowing your team down?
                    </label>
                    <textarea
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors min-h-[140px] text-sm font-sans text-white"
                      placeholder="Describe the manual tasks, data entry, follow-ups, or support workflows you want to automate..."
                    ></textarea>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full py-5 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-sans font-bold uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
                  >
                    {loading ? (
                      "Transmitting..."
                    ) : (
                      <>
                        FIND MY AUTOMATIONS <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
