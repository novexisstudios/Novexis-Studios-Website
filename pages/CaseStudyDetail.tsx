import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PlayCircle, ExternalLink, Globe, Image as ImageIcon, Film } from "lucide-react";
import { getCaseStudyBySlug } from "../services/dataService";
import { getYoutubeEmbedUrl } from "../utils/videoUtils";
import SEO from "../components/SEO";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseStudyBySlug(slug || "");
  const [activeMediaTab, setActiveMediaTab] = useState<"video" | "gallery">("video");

  if (!project) return <Navigate to="/portfolio" />;

  const videoList = project.videos && project.videos.length > 0
    ? project.videos
    : (project.videoUrl ? [project.videoUrl] : []);

  const imageList = project.images && project.images.length > 0
    ? project.images
    : (project.imageUrl ? [project.imageUrl] : []);

  const categoriesList = project.categories && project.categories.length > 0
    ? project.categories
    : [project.category];

  return (
    <>
      <SEO
        title={`${project.title} | Novexis Studios`}
        description={project.description}
        url={`/portfolio/${project.slug}`}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 bg-[#050505] min-h-screen text-white font-sans">
        {/* Back Link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors font-sans text-xs uppercase tracking-widest group font-semibold"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform text-blue-400"
          />
          Back to Case Studies
        </Link>

        <div className="space-y-12">
          {/* HEADER */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {categoriesList.map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full glass border border-blue-500/30 text-blue-400 font-bold uppercase tracking-wider text-xs font-accent">
                    {cat}
                  </span>
                ))}
              </div>

              {/* CLIENT LIVE LINK BUTTON (OPTIONAL) */}
              {project.clientUrl && (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500 hover:text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/10 font-sans"
                >
                  <Globe size={14} />
                  <span>Visit Live System</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed font-sans">
              {project.description}
            </p>
          </header>

          {/* MULTIPLE VIDEOS & IMAGES MEDIA SECTION */}
          <div className="space-y-4">
            {(videoList.length > 0 || imageList.length > 1) && (
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-wider">
                {videoList.length > 0 && (
                  <button
                    onClick={() => setActiveMediaTab("video")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      activeMediaTab === "video"
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-white/50 hover:text-white"
                    }`}
                  >
                    <Film size={14} /> Videos ({videoList.length})
                  </button>
                )}
                {imageList.length > 0 && (
                  <button
                    onClick={() => setActiveMediaTab("gallery")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      activeMediaTab === "gallery" || videoList.length === 0
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-white/50 hover:text-white"
                    }`}
                  >
                    <ImageIcon size={14} /> Image Gallery ({imageList.length})
                  </button>
                )}
              </div>
            )}

            {/* VIDEO SECTION */}
            {(activeMediaTab === "video" && videoList.length > 0) ? (
              <div className="space-y-6">
                {videoList.map((vUrl, vIdx) => {
                  const embedUrl = getYoutubeEmbedUrl(vUrl);
                  return (
                    <div key={vIdx} className="aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl">
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={`${project.title} Video ${vIdx + 1}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video src={vUrl} controls className="w-full h-full object-cover" />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* IMAGE GALLERY SECTION */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {imageList.map((imgUrl, iIdx) => (
                  <div key={iIdx} className="aspect-[16/10] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl group">
                    <img
                      src={imgUrl}
                      alt={`${project.title} Screenshot ${iIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PROBLEM, SYSTEM, OUTCOME */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="md:col-span-2 space-y-12">
              <section className="space-y-4 glass p-8 rounded-3xl border border-rose-500/20 bg-rose-950/10">
                <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2 font-accent">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  PROBLEM STATEMENT
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-sans font-light">
                  {project.problem}
                </p>
              </section>

              <section className="space-y-4 glass p-8 rounded-3xl border border-blue-500/20 bg-blue-950/10">
                <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2 font-accent">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  THE SYSTEM BUILT
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-sans font-light">
                  {project.system}
                </p>
              </section>

              <section className="space-y-4 glass p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/10">
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2 font-accent">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  MEASURABLE OUTCOME
                </h2>
                <p className="text-lg text-white/90 leading-relaxed font-sans font-bold">
                  {project.outcome}
                </p>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/40 font-accent">
                  SYSTEM TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2 font-sans">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 rounded-xl text-xs font-semibold text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/40 font-accent">
                  SYSTEM STATUS REPORT
                </h4>
                <ul className="space-y-3 font-sans text-xs text-white/80 font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>AUTONOMOUS EXECUTION</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>ZERO MANUAL LAG</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>ENTERPRISE ACCURACY</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetail;
