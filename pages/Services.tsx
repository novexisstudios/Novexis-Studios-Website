import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Settings,
  Cpu,
  LineChart,
  Code2,
  Video,
  Layers,
  Zap,
  BarChart3,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const CORE_SERVICES = [
  {
    title: "Engineering & Systems",
    items: [
      {
        name: "Full-Stack Ecosystems",
        description:
          "Bespoke Web, Mobile, and SaaS development. We build scalable software architectures, including custom CRM/CMS and E-commerce engines.",
      },
      {
        name: "Interactive & Backend",
        description:
          "High-performance Game Development (Unity/C#) and robust Custom API infrastructure for seamless system communication.",
      },
    ],
  },
  {
    title: "Creative & Media",
    items: [
      {
        name: "Content Pipelines",
        description:
          "End-to-end production: from scripting and ideation to recording AI-enhanced UGC style content and high-fidelity video editing.",
      },
      {
        name: "Social Distribution",
        description:
          "Managing the full media lifecycle, ensuring content is posted and optimized for maximum platform engagement.",
      },
    ],
  },
  {
    title: "Design & Identity",
    items: [
      {
        name: "Product Design",
        description:
          "Systemic UI/UX and Product Architecture focused on conversion and high-end digital aesthetics.",
      },
      {
        name: "Visual Assets",
        description:
          "Brand identity, graphic design (posters/banners), and proprietary visual assets for digital dominance.",
      },
    ],
  },
  {
    title: "Cloud & Automation",
    items: [
      {
        name: "Infrastructure & AI",
        description:
          "AWS Cloud services paired with intelligent n8n/Zapier automations to streamline complex business workflows.",
      },
    ],
  },
  {
    title: "Intelligence & Growth",
    items: [
      {
        name: "Data & SMM",
        description:
          "Deep-dive data analysis and intelligence coupled with strategic Social Media Management (SMM).",
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Solutions & Capabilities | Novexis Studios"
        description="Bespoke engineering, creative media, and automation systems by Novexis Studios."
        url="/services"
      />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-transparent min-h-screen">
        {/* Hero Header */}
        <div className="max-w-4xl mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Studio Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 leading-tight uppercase">
              Unified <span className="text-white/30">Intelligence.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light">
              We bridge the gap between heavy-duty engineering and cinematic
              creative direction to build resilient digital systems.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40 md:space-y-60">
          {CORE_SERVICES.map((category, idx) => (
            <section
              key={category.title}
              className="border-t border-white/10 pt-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                <div className="lg:col-span-4">
                  <span className="text-[14px] font-heading font-black tracking-[0.5em] text-blue-600 uppercase mb-8 block">
                    MODULE {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-tight uppercase mb-6">
                    {category.title}
                  </h2>
                  <p className="text-base text-white/40 font-medium max-w-xs uppercase tracking-wider leading-relaxed">
                    Engineered for high-performance and business scaling.
                  </p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {category.items.map((service, sIdx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="glass p-12 rounded-[2.5rem] group hover:border-blue-600/40 transition-all duration-500 shadow-xl border border-white/5"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-heading font-black tracking-tighter group-hover:text-blue-500 transition-colors leading-tight">
                          {service.name}
                        </h3>
                        <ChevronRight
                          className="text-white/10 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                          size={24}
                        />
                      </div>
                      <p className="text-white/50 text-xl leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Technical Audit Section */}
        <section className="mt-32 md:mt-48 relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
          <div className="glass p-16 md:p-24 rounded-[3rem] border border-white/10 text-center shadow-2xl overflow-hidden relative">
            <div className="flex justify-center gap-10 mb-12 text-white/10">
              <Zap size={40} />
              <Code2 size={40} />
              <BarChart3 size={40} />
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-10 uppercase">
              System Audit & Roadmap
            </h2>
            <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Let's analyze your current stack. I provide a technical roadmap
              for custom automations, software integrations, and content
              scaling.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-16 py-6 bg-white text-black text-base font-bold uppercase tracking-[0.1em] rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                >
                  Initialize Audit
                </Link>
              </motion.div>
              <p className="text-[13px] font-bold text-white/30 uppercase tracking-[0.4em]">
                Solo Ops • Direct Access
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
