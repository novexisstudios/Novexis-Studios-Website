import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getPublishedCaseStudies } from "../services/dataService";
import { CaseStudy } from "../types";
import SEO from "../components/SEO";

const Portfolio = () => {
  const [projects, setProjects] = useState<CaseStudy[]>([]);

  useEffect(() => {
    setProjects(getPublishedCaseStudies());
  }, []);

  return (
    <>
      <SEO
        title="Case Studies | Novexis Studios"
        description="Explore Novexis Studios' portfolio of AI automation systems, workflow infrastructure, and software engineering case studies."
        url="/portfolio"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 bg-[#050505] min-h-screen text-white font-sans">
        <div className="mb-24 text-left max-w-4xl space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 block font-accent">
            [ SYSTEM DEPLOYMENTS ]
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
            CASE STUDIES.
          </h1>
          <p className="text-2xl text-white/60 leading-relaxed font-light font-sans">
            Real business operational challenges solved using AI agents, custom workflow automation engines, and reliable backend software infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {(projects || []).map((project, idx) => {
            const categoriesList = (project.categories && project.categories.length > 0)
              ? project.categories
              : (project.category ? [project.category] : []);
            const stackList = Array.isArray(project.stack) ? project.stack : [];

            return (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group block space-y-6 glass p-6 rounded-[2.5rem] border border-white/10 hover:border-blue-500/40 transition-all bg-black/60"
                >
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl">
                    <img
                      src={project.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-sans">
                        Inspect System <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>

                  <div className="px-2 space-y-3 font-sans">
                    <div className="flex flex-wrap items-center gap-2">
                      {categoriesList.map((cat, cIdx) => (
                        <span key={cIdx} className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase font-accent">
                          {cat}
                        </span>
                      ))}
                      {project.clientUrl && (
                        <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-wider font-sans ml-2">
                          • Live Demo Available
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-heading font-black group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed font-sans line-clamp-2">
                      {project.description}
                    </p>

                    {stackList.length > 0 && (
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 text-[11px] font-sans font-semibold">
                        {stackList.map((st, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-0.5 rounded bg-white/5 text-white/60 border border-white/5">
                            {st}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
