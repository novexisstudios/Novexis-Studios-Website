import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShieldCheck, LogOut, ArrowRight } from "lucide-react";
import { getCurrentUser, logout } from "../services/authService";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, [location]);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  const navLinks = [
    { name: "Systems", path: "/services" },
    { name: "Work", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col relative bg-[#050505] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3.5 group transition-all">
            <img
              src="/logo-transparent.png"
              alt="Novexis Studios Logo"
              width={40}
              height={40}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-black font-heading tracking-tighter bg-gradient-to-r from-blue-500 via-purple-400 to-white bg-clip-text text-transparent uppercase">
                  NOVEXIS
                </span>
                <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase hidden sm:inline font-accent">
                  Studios
                </span>
              </div>
              <span className="text-[9px] font-bold text-blue-400/90 tracking-[0.15em] uppercase hidden md:block font-sans">
                AI SYSTEMS × SOFTWARE ENGINEERING
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-[0.12em] font-sans transition-all hover:text-blue-400 ${
                  location.pathname === link.path
                    ? "text-white border-b-2 border-blue-500 pb-1"
                    : "text-white/60"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-full hover:scale-105 transition-all shadow-lg shadow-blue-500/20 font-sans"
            >
              <span>AUTOMATE YOUR BUSINESS</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU (Mobile & Tablet) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 p-6"
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={36} />
            </button>

            <div className="text-center mb-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 font-accent">
                NOVEXIS STUDIOS
              </span>
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider font-sans">
                AI SYSTEMS × SOFTWARE ENGINEERING
              </span>
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.path}
                  className="text-4xl sm:text-5xl font-heading font-black text-white hover:text-blue-400 uppercase tracking-tighter transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl shadow-blue-500/20 font-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>AUTOMATE YOUR BUSINESS</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN BODY */}
      <main className="flex-grow pt-24 bg-transparent relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-20 px-6 mt-20 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* COL 1 & 2: BRAND STORY */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo-transparent.png"
                alt="Novexis Studios"
                width={40}
                height={40}
              />
              <div>
                <h2 className="text-2xl font-black font-heading tracking-tighter uppercase leading-none">
                  NOVEXIS <span className="text-white/30">Studios</span>
                </h2>
                <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase block mt-1 font-accent">
                  AI SYSTEMS × SOFTWARE ENGINEERING
                </span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md text-base leading-relaxed font-light">
              Engineering intelligent infrastructure for modern businesses. We turn repetitive business processes into autonomous AI agents, workflow automation, and custom software systems.
            </p>
            <div className="text-xs text-white/40 font-sans">
              CORE PROMISE: <span className="text-white/90 font-bold">"We automate the work your team shouldn't be doing."</span>
            </div>
          </div>

          {/* COL 3: NAVIGATION */}
          <div>
            <h4 className="text-xs font-bold text-white/90 mb-6 uppercase tracking-widest font-accent">
              SYSTEM INDEX
            </h4>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Capabilities & Systems
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  The Systems Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Automation Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & SOCIAL */}
          <div>
            <h4 className="text-xs font-bold text-white/90 mb-6 uppercase tracking-widest font-accent">
              DIRECT TRANSMISSION
            </h4>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li>
                <a
                  href="mailto:novexisstudios@gmail.com"
                  className="hover:text-blue-400 transition-colors block text-white/90 font-bold"
                >
                  novexisstudios@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/novexis-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/novexis_studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] uppercase text-white/40 font-sans">
          <p>© {currentYear} Novexis Studios. All systems operational.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Protocol
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Engagement
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
