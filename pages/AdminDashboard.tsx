import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import {
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
  ShieldCheck,
  Link as LinkIcon,
  Youtube,
  Globe,
  Image as ImageIcon,
  Film,
  Check,
  Download,
  Upload
} from "lucide-react";
import { getCurrentUser } from "../services/authService";
import {
  getCaseStudies,
  saveCaseStudy,
  deleteCaseStudy,
} from "../services/dataService";
import { CaseStudy, ProjectCategory } from "../types";

const AdminDashboard = () => {
  const user = getCurrentUser();
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<Partial<CaseStudy>>({
    title: "",
    slug: "",
    category: ProjectCategory.AI_AUTOMATION,
    categories: [ProjectCategory.AI_AUTOMATION],
    clientUrl: "",
    description: "",
    problem: "",
    system: "",
    outcome: "",
    stack: [],
    imageUrl: "",
    images: [],
    videoUrl: "",
    videos: [],
    published: false,
  });

  const [stackInput, setStackInput] = useState<string>("");
  const [imagesInput, setImagesInput] = useState<string>("");
  const [videosInput, setVideosInput] = useState<string>("");

  useEffect(() => {
    setStudies(getCaseStudies());
  }, []);

  if (!user || user.role !== "admin") return <Navigate to="/login" />;

  const exportJSON = () => {
    const currentStudies = getCaseStudies();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentStudies, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "novexis_case_studies.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed)) {
            localStorage.setItem("novexis_case_studies", JSON.stringify(parsed));
            setStudies(parsed);
            alert(`Successfully imported ${parsed.length} case study records!`);
          } else {
            alert("Invalid JSON format. Expected an array of case studies.");
          }
        } catch (err) {
          alert("Failed to parse JSON file.");
        }
      };
    }
  };

  const startEdit = (cs: CaseStudy) => {
    setEditingId(cs.id);
    setFormData({
      ...cs,
      categories: cs.categories && cs.categories.length > 0 ? cs.categories : [cs.category],
    });
    setStackInput(cs.stack ? cs.stack.join(", ") : "");
    setImagesInput(cs.images ? cs.images.join("\n") : (cs.imageUrl ? cs.imageUrl : ""));
    setVideosInput(cs.videos ? cs.videos.join("\n") : (cs.videoUrl ? cs.videoUrl : ""));
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setStackInput("");
    setImagesInput("");
    setVideosInput("");
    setFormData({
      id: Math.random().toString(36).substr(2, 9),
      title: "",
      slug: "",
      category: ProjectCategory.AI_AUTOMATION,
      categories: [ProjectCategory.AI_AUTOMATION],
      clientUrl: "",
      description: "",
      problem: "",
      system: "",
      outcome: "",
      stack: [],
      imageUrl: "",
      images: [],
      videoUrl: "",
      videos: [],
      published: false,
      createdAt: new Date().toISOString(),
    });
  };

  const toggleCategorySelect = (cat: ProjectCategory) => {
    const currentCats = formData.categories || [];
    let updatedCats: ProjectCategory[];

    if (currentCats.includes(cat)) {
      if (currentCats.length === 1) return;
      updatedCats = currentCats.filter((c) => c !== cat);
    } else {
      updatedCats = [...currentCats, cat];
    }

    setFormData({
      ...formData,
      categories: updatedCats,
      category: updatedCats[0],
    });
  };

  const handleSave = () => {
    if (formData.id && formData.title) {
      const parsedStack = stackInput
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const parsedImages = imagesInput
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const parsedVideos = videosInput
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const selectedCategories = formData.categories && formData.categories.length > 0
        ? formData.categories
        : [formData.category || ProjectCategory.AI_AUTOMATION];

      const primaryImg = parsedImages.length > 0 ? parsedImages[0] : (formData.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475");
      const primaryVid = parsedVideos.length > 0 ? parsedVideos[0] : (formData.videoUrl || "");

      const caseStudyToSave: CaseStudy = {
        id: formData.id,
        title: formData.title || "",
        slug: formData.slug || formData.title.toLowerCase().replace(/ /g, "-"),
        category: selectedCategories[0],
        categories: selectedCategories,
        clientUrl: formData.clientUrl ? formData.clientUrl.trim() : "",
        description: formData.description || "",
        problem: formData.problem || "",
        system: formData.system || "",
        outcome: formData.outcome || "",
        stack: parsedStack.length > 0 ? parsedStack : (formData.stack || []),
        imageUrl: primaryImg,
        images: parsedImages,
        videoUrl: primaryVid,
        videos: parsedVideos,
        published: formData.published !== undefined ? formData.published : true,
        createdAt: formData.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      saveCaseStudy(caseStudyToSave);
      setStudies(getCaseStudies());
      setEditingId(null);
      setIsAdding(false);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this system record? This cannot be undone.")) {
      deleteCaseStudy(id);
      setStudies(getCaseStudies());
    }
  };

  const togglePublish = (cs: CaseStudy) => {
    const updated = { ...cs, published: !cs.published };
    saveCaseStudy(updated);
    setStudies(getCaseStudies());
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-[#050505] min-h-screen text-white font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-heading font-black tracking-tighter flex items-center gap-3 uppercase">
            <ShieldCheck className="text-blue-500" /> System Management Portal
          </h1>
          <p className="text-xs font-semibold tracking-wider uppercase text-white/50 font-sans">
            Admin Session Active • {user.email}
          </p>
        </div>
        {!editingId && !isAdding && (
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={exportJSON}
              title="Export all case study data to JSON file"
              className="flex items-center gap-2 px-5 py-3 glass text-white/80 border border-white/10 hover:border-blue-500/50 hover:text-white font-bold rounded-full transition-all uppercase text-xs tracking-wider font-sans"
            >
              <Download size={14} /> Export JSON
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={importJSON}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Import case study data from JSON file"
              className="flex items-center gap-2 px-5 py-3 glass text-white/80 border border-white/10 hover:border-purple-500/50 hover:text-white font-bold rounded-full transition-all uppercase text-xs tracking-wider font-sans"
            >
              <Upload size={14} /> Import JSON
            </button>

            <button
              onClick={startAdd}
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all uppercase text-xs tracking-widest shadow-xl font-sans"
            >
              <Plus size={18} /> Initialize New Record
            </button>
          </div>
        )}
      </div>

      {editingId || isAdding ? (
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 bg-black/80">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h2 className="text-2xl font-heading font-black uppercase tracking-tight">
              {isAdding ? "New Deployment Record" : "Modifying System Record"}
            </h2>
            <button
              onClick={() => {
                setEditingId(null);
                setIsAdding(false);
              }}
              className="p-2 glass rounded-full hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent">
                System Title
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm font-sans"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Automated Lead Intelligence Pipeline"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent">
                URL Slug
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm font-sans"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value.toLowerCase().replace(/ /g, "-"),
                  })
                }
                placeholder="lead-intelligence-pipeline"
              />
            </div>
          </div>

          {/* MULTIPLE SYSTEM CATEGORIES SELECTION */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent flex items-center justify-between">
              <span>Select System Categories (Multiple allowed)</span>
              <span className="text-[11px] text-blue-400 font-normal">Click to toggle multiple categories</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {Object.values(ProjectCategory).map((cat) => {
                const isSelected = (formData.categories || [formData.category]).includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategorySelect(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all flex items-center gap-2 font-sans ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/20"
                        : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {isSelected && <Check size={14} className="text-white" />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Client Live Link (Optional) & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-accent flex items-center gap-2">
                <Globe size={14} /> Client Live Link (Optional)
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-emerald-500 text-sm font-sans"
                value={formData.clientUrl || ""}
                onChange={(e) =>
                  setFormData({ ...formData, clientUrl: e.target.value })
                }
                placeholder="https://clientwebsite.com (Optional)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent">
                Tech Stack (comma separated)
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm font-sans"
                value={stackInput}
                onChange={(e) => setStackInput(e.target.value)}
                placeholder="Python, n8n, OpenAI API, PostgreSQL"
              />
            </div>
          </div>

          {/* MULTIPLE IMAGES & MULTIPLE VIDEOS LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent flex items-center justify-between">
                <span className="flex items-center gap-2"><ImageIcon size={14} /> Multiple Image URLs</span>
                <span className="text-[10px] text-white/40 font-normal">One link per line</span>
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-xs font-sans min-h-[100px] leading-relaxed"
                value={imagesInput}
                onChange={(e) => setImagesInput(e.target.value)}
                placeholder="https://image1.jpg&#10;https://image2.jpg&#10;https://image3.jpg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent flex items-center justify-between">
                <span className="flex items-center gap-2"><Film size={14} /> Multiple Video URLs (Optional)</span>
                <span className="text-[10px] text-white/40 font-normal">One YouTube/Video link per line</span>
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-xs font-sans min-h-[100px] leading-relaxed"
                value={videosInput}
                onChange={(e) => setVideosInput(e.target.value)}
                placeholder="https://youtube.com/watch?v=...&#10;https://youtube.com/watch?v=..."
              />
            </div>
          </div>

          {/* Short Summary Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/60 font-accent">
              Short Summary Description
            </label>
            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[80px] text-sm font-sans"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Problem, System Built, Measurable Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-rose-400 font-accent">
                01 — Problem
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[120px] text-xs font-sans"
                value={formData.problem}
                onChange={(e) =>
                  setFormData({ ...formData, problem: e.target.value })
                }
                placeholder="What was manually inefficient?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-400 font-accent">
                02 — System Built
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[120px] text-xs font-sans"
                value={formData.system}
                onChange={(e) =>
                  setFormData({ ...formData, system: e.target.value })
                }
                placeholder="What did Novexis build?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-accent">
                03 — Measurable Outcome
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[120px] text-xs font-sans"
                value={formData.outcome}
                onChange={(e) =>
                  setFormData({ ...formData, outcome: e.target.value })
                }
                placeholder="What improved?"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:scale-[1.01] transition-all uppercase text-xs tracking-widest shadow-xl font-sans"
            >
              <Save size={18} /> Commit to Ledger
            </button>
            <button
              onClick={() => {
                setEditingId(null);
                setIsAdding(false);
              }}
              className="px-8 py-4 glass text-white/50 font-bold rounded-2xl border border-white/10 hover:text-white uppercase text-xs tracking-widest font-sans"
            >
              Abort
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {studies.map((cs) => (
            <div
              key={cs.id}
              className="glass p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-blue-500/30 transition-all bg-black/60 font-sans"
            >
              <div className="flex items-center gap-6">
                <img
                  src={cs.imageUrl}
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10"
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-heading font-black uppercase tracking-tight">
                    {cs.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs">
                    {(cs.categories || [cs.category]).map((cat, cIdx) => (
                      <span key={cIdx} className="text-blue-400 font-bold uppercase tracking-wider font-accent">
                        {cat}
                      </span>
                    ))}
                    {cs.clientUrl && (
                      <span className="text-emerald-400 font-bold flex items-center gap-1 font-sans">
                        <Globe size={12} /> Live Link
                      </span>
                    )}
                    {cs.videoUrl && (
                      <Youtube size={14} className="text-red-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePublish(cs)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest transition-all font-sans ${
                    cs.published
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-white/5 text-white/40 border border-white/5"
                  }`}
                >
                  {cs.published ? "LIVE" : "DRAFT"}
                </button>
                <button
                  onClick={() => startEdit(cs)}
                  className="p-3 glass rounded-xl text-white/60 hover:text-blue-400 transition-all border border-white/5"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(cs.id)}
                  className="p-3 glass rounded-xl text-white/60 hover:text-rose-400 transition-all border border-white/5"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
