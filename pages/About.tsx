import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Code2, Layers, Cpu } from "lucide-react";
import SEO from "@/components/SEO";

const pillars = [
  {
    title: "Technical Systems",
    icon: <Code2 className="text-blue-500" size={32} />,
    description:
      "Building resilient, scalable backend architectures and high-concurrency systems that serve as the backbone for modern digital products.",
    points: [
      "Distributed Networks",
      "Cloud-Native Systems",
      "API Infrastructure",
    ],
  },
  {
    title: "Creative Media",
    icon: <Layers className="text-purple-500" size={32} />,
    description:
      "Merging cinematic storytelling with technical precision. We develop high-fidelity visual content and automated media pipelines.",
    points: ["Motion Graphics", "VFX Integration", "Post-Production"],
  },
  {
    title: "Product Design",
    icon: <Cpu className="text-white/60" size={32} />,
    description:
      "Human-centric design systems rooted in performance and accessibility. We create interfaces that are intuitive and aesthetically superior.",
    points: ["Atomic Design", "UI/UX Strategy", "Brand Systems"],
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About | Novexis Studios"
        description="Novexis Studios | AI, Dev, Video, Marketing, Design & Creative Content Systems"
        url="/about"
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <section className="mb-40">
          <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter mb-10 uppercase leading-none">
            THE STUDIO.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-2xl text-white/60 leading-relaxed font-light">
                Novexis Studios is a premier creative-technology studio
                dedicated to building the systems that power modern digital
                experiences.
              </p>
              <p className="text-xl text-white/40 leading-relaxed">
                We work at the intersection of high-end media production,
                scalable software engineering, and intelligent automation. By
                merging technical rigor with creative intuition, we ensure every
                system is both beautiful and resilient.
              </p>
              <p className="text-xl text-white/40 leading-relaxed">
                Based on a digital-first operation, we partner with production
                houses, tech startups, and visionary brands to develop
                infrastructure that scales with their growth.
              </p>
            </div>
            <div className="glass p-12 rounded-[3rem] border border-white/10 space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="flex items-center gap-8">
                <ShieldCheck className="text-blue-500" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Enterprise grade
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Zap className="text-purple-500" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Velocity focused
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Globe className="text-white/60" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Global operations
                </p>
              </div>
              <p className="text-base text-white/30 italic pt-8 border-t border-white/5">
                "Our mission is to help brands and founders move beyond static
                content and into dynamic, resilient systems."
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-heading font-black tracking-tighter uppercase mb-4">
              OUR CAPABILITIES.
            </h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-sm font-bold">
              Engineering × Design × Content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-12 rounded-[3rem] border border-white/5 relative group hover:border-blue-500/30 transition-all shadow-2xl"
              >
                <div className="mb-8">{pillar.icon}</div>
                <h3 className="text-3xl font-heading font-black mb-4 uppercase tracking-tighter">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed font-light mb-8">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-white/30 uppercase tracking-widest flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-32 text-center py-12 border-t border-white/5">
          <h2 className="text-3xl font-heading font-black mb-4 uppercase tracking-tighter">
            Initialize Partnership.
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto mb-8 text-xl font-light">
            Connect with us to begin building your studio-grade digital
            infrastructure.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <a
              href="#/contact"
              className="px-14 py-4 bg-white text-black font-bold rounded-full uppercase tracking-[0.15em] text-sm shadow-2xl hover:bg-blue-600 hover:text-white transition-all"
            >
              Initialize Connection
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;
