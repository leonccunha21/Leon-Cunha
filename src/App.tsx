/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useLocation,
  useNavigate
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { 
  Github, 
  Linkedin, 
  Play, 
  ExternalLink, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  Download,
  Smartphone,
  LayoutGrid,
  BriefcaseBusiness,
  MessageSquare,
  ShoppingBag,
  Target,
  GraduationCap,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Code2,
  Cpu,
  Phone,
  Star,
  Clock,
  Instagram,
  Menu,
  X,
  Home,
  User,
  Folder
} from "lucide-react";
import { useState } from "react";
import { PROJECTS, EXPERIENCE, SOCIAL_LINKS, PERSONAL_INFO, COMPANIES, EDUCATION, STATS, SKILLS, SERVICES } from "./constants";

// --- Components ---

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Visão Geral", href: "/", icon: Terminal },
    { name: "Ecossistema", href: "/apps", icon: LayoutGrid },
    { name: "Perfil Técnico", href: "/sobre", icon: Cpu },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Ultra-Professional Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 transition-all duration-300"
        style={{ background: 'rgba(8, 11, 18, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center">
               <span className="text-white font-black text-xs">LC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-slate-200 font-bold text-sm tracking-tight leading-none">{PERSONAL_INFO.name}</p>
              <p className="text-slate-500 font-mono text-[9px] uppercase tracking-widest leading-none mt-1">Engenharia de Software</p>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200 font-medium'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div layoutId="desktop-nav-indicator" className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-500 rounded-t-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 pr-4 border-r border-white/10">
              {SOCIAL_LINKS.slice(0,2).map(link => {
                const Icon = link.name === "LinkedIn" ? Linkedin : Github;
                return (
                  <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <Link to="/pedido-app" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Iniciar Projeto
            </Link>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-black font-bold text-xs transition-all">
              Contato
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <motion.div 
          initial={false}
          animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10, pointerEvents: 'none' }}
          className="md:hidden absolute top-16 left-0 right-0 h-[calc(100dvh-64px)] bg-[#080b12] px-6 py-8 flex flex-col"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} onClick={() => setOpen(false)}
                className={`flex items-center gap-4 text-2xl font-bold tracking-tight ${isActive(link.href) ? 'text-white' : 'text-slate-500'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-full h-px bg-white/5 my-2" />
            
            <Link to="/pedido-app" onClick={() => setOpen(false)} className="flex items-center gap-4 text-xl font-medium text-slate-400">
              Serviços Mobile
            </Link>
            <Link to="/pedido-marketing" onClick={() => setOpen(false)} className="flex items-center gap-4 text-xl font-medium text-slate-400">
              Marketing Digital
            </Link>
          </div>

          <div className="mt-auto pb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-black font-bold mb-6">
               Entrar em Contato
            </a>
          </div>
        </motion.div>
      </header>

      {/* Native-style Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080b12]/95 border-t border-white/5 pb-safe"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <nav className="flex items-center justify-around w-full h-[64px] px-2">
          {[
            { href: '/', icon: Terminal, label: 'Início' },
            { href: '/apps', icon: LayoutGrid, label: 'Apps' },
            { href: '/pedido-app', icon: Code2, label: 'Serviços' },
            { href: '/sobre', icon: User, label: 'Perfil' },
          ].map(tab => {
            const active = isActive(tab.href);
            return (
              <Link key={tab.href} to={tab.href}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                  active ? 'text-white' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <tab.icon size={22} strokeWidth={active ? 2.5 : 2} />
                <span className={`text-[10px] whitespace-nowrap ${active ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
      {STATS.map((stat, i) => {
        const Icon = stat.icon === "Download" ? Download : 
                     stat.icon === "Smartphone" ? Smartphone :
                     stat.icon === "BriefcaseBusiness" ? BriefcaseBusiness : Target;
        const isHighlight = stat.label === "Downloads totais";
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`stat-card p-6 rounded-2xl group relative overflow-hidden ${
              isHighlight 
                ? "border border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.15)] bg-cyan-500/5" 
                : ""
            }`}
          >
            {isHighlight && (
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 pointer-events-none" />
            )}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
              isHighlight ? "bg-cyan-500/20 text-cyan-300" : "bg-cyan-500/10 text-cyan-400"
            }`}>
              <Icon size={20} />
            </div>
            <p className={`text-3xl font-black mb-1 font-mono ${
              isHighlight ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-white"
            }`}>{stat.value}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-[9px] text-slate-500 mt-1">{stat.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-10">
        <Cpu className="text-purple-500" size={24} />
        <h3 className="text-2xl font-black text-white font-mono uppercase">Stack Tecnológico</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
      </div>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
        {SKILLS.map((skill, i) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-end font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">{skill.category}</span>
                <span className="text-sm font-bold text-slate-200">{skill.name}</span>
              </div>
              <span className="text-xs font-black text-cyan-400">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                className="skill-bar-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompaniesSection = () => {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <Terminal className="text-cyan-400" size={24} />
        <h3 className="text-2xl font-black text-white font-mono uppercase">DIR // Ecossistema ZM</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
      </div>
      
      <div className="flex flex-col gap-3 font-mono">
        {COMPANIES.map((company, i) => {
          return (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={`/empresa/${company.slug}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-[#0d1117]/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                    <Folder size={20} />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-white font-bold text-base group-hover:text-cyan-400 transition-colors">
                      {company.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      // {company.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                   <span className="hidden sm:block text-[10px] text-cyan-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     cd ./acessar
                   </span>
                   <ChevronRight size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const CompanyPage = () => {
  const { slug } = useParams();
  const company = COMPANIES.find(c => c.slug === slug);
  const navigate = useNavigate();

  if (!company) {
    return (
      <div className="flex-1 lg:ml-[320px] flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Empresa não encontrada</h2>
          <button onClick={() => navigate('/')} className="btn-primary">Voltar ao Início</button>
        </div>
      </div>
    );
  }

  const Icon = company.icon === "ShoppingBag" ? ShoppingBag :
               company.icon === "Target" ? Target : Smartphone;

  const linkIconColor = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('instagram')) return { bg: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-500/30', text: 'text-pink-400', icon: <Instagram size={16} /> };
    if (n.includes('shopee') || n.includes('loja')) return { bg: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-500/30', text: 'text-orange-400', icon: <ShoppingBag size={16} /> };
    if (n.includes('google') || n.includes('maps') || n.includes('localização')) return { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400', icon: <MapPin size={16} /> };
    if (n.includes('github')) return { bg: 'from-slate-500/20 to-slate-600/20', border: 'border-slate-500/30', text: 'text-slate-300', icon: <Github size={16} /> };
    if (n.includes('whatsapp')) return { bg: 'from-green-400/20 to-green-600/20', border: 'border-green-400/30', text: 'text-green-400', icon: <Phone size={16} /> };
    if (n.includes('play store') || n.includes('apps')) return { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: <Play size={16} /> };
    return { bg: 'from-slate-700/30 to-slate-600/20', border: 'border-slate-600/30', text: 'text-slate-400', icon: <ExternalLink size={16} /> };
  };

  return (
    <div className="flex-1 p-0 sm:p-0 lg:p-0 grid-bg min-h-screen pt-16 pb-24 md:pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #080b12 60%, #0d1a2e 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(6,182,212,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.06),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-16 pt-8 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 mb-12 transition-colors font-mono text-xs tracking-widest uppercase">
            <ArrowLeft size={14} /> Terminal_Principal
          </Link>
          
          <div className="flex items-start gap-8">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Icon size={36} />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                {company.type}
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-4">{company.name}</h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">{company.fullDescription}</p>
            </div>
          </div>

          {/* Highlights — horizontal pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {company.highlights.map((h: string) => (
              <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-[11px] font-mono font-bold text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          <div>

            {/* Structured Sections (e.g. ZM Digital) */}
            {company.sections ? (
              <div className="space-y-12 mb-12">
                {company.sections.map((section: any) => (
                  <div key={section.id}>
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        {section.icon === "Globe" && <ExternalLink size={18} className="text-cyan-400" />}
                        {section.icon === "Instagram" && <Instagram size={18} className="text-pink-400" />}
                        {section.icon === "Target" && <Target size={18} className="text-purple-400" />}
                      </div>
                      <h3 className="text-xl font-black text-white font-mono uppercase tracking-widest">
                        {section.title}_
                        <span className="text-cyan-400 ml-2 text-base">({section.items.length})</span>
                      </h3>
                    </div>

                    {/* Sites — card com thumbnail */}
                    {section.type === "projects" && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((item: any) => (
                          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="group">
                            <div className="glass-card p-4 rounded-xl border border-slate-800/50 hover:border-cyan-500/40 transition-all h-full flex flex-col justify-between text-center">
                              <div>
                                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-slate-900 border border-slate-800">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <span className="font-black text-slate-200 group-hover:text-cyan-400 transition-colors">{item.name}</span>
                                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-500 font-mono">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Redes Sociais — pill style com Instagram */}
                    {section.type === "social" && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((item: any) => (
                          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="group">
                            <div className="glass-card p-6 rounded-xl border border-slate-800/50 hover:border-pink-500/40 transition-all flex flex-col items-center justify-center text-center h-full">
                              <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Instagram size={20} className="text-pink-400" />
                              </div>
                              <div className="w-full">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <span className="font-black text-slate-200 group-hover:text-pink-400 transition-colors text-sm break-words">{item.name}</span>
                                  <ArrowUpRight size={12} className="text-slate-600 group-hover:text-pink-400 shrink-0 transition-colors" />
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Marketing Digital — checklist style */}
                    {section.type === "services" && (
                      <div className="grid sm:grid-cols-2 gap-3">
                        {section.items.map((item: any) => (
                          <div key={item.name} className="glass-card p-6 rounded-xl border border-slate-800/50 hover:border-purple-500/30 transition-all flex flex-col items-center justify-center text-center h-full group">
                            <div className="w-10 h-10 mb-3 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <Target size={16} className="text-purple-400" />
                            </div>
                            <div className="w-full">
                              <p className="font-black text-slate-200 text-sm mb-2 group-hover:text-purple-400 transition-colors break-words">{item.name}</p>
                              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="border-b border-slate-800/50 mt-10" />
                  </div>
                ))}
              </div>
            ) : (
              /* Flat projects grid for other companies (ZM Store Dev, ZM Store) */
              company.projects && (
                <div className="mb-12">
                  <h3 className="text-xl font-black text-white mb-6 font-mono uppercase tracking-widest">Principais Entregas_ <span className="text-cyan-400">({company.projects.length})</span></h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {company.projects.map((p: any) => (
                      <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group">
                        <div className="glass-card p-4 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-all h-full flex flex-col text-center">
                          <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-slate-900 border border-slate-800">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                          </div>
                          <div className="flex items-center justify-center gap-2 mt-auto">
                            <span className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{p.name}</span>
                            <ArrowUpRight size={14} className="text-slate-500" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )
            )}
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center">
              <h3 className="text-2xl font-black text-white mb-4">Pronto para começar seu projeto?</h3>
              <p className="text-slate-400 mb-8">Solicite um orçamento agora mesmo e transforme sua ideia em realidade.</p>
              <Link 
                to={company.slug === 'zm-store-dev' ? '/pedido-app' : '/pedido-marketing'} 
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageSquare size={18} /> INICIAR_SOLICITAÇÃO
              </Link>
            </div>
          </div>


          <aside className="space-y-5">
            {/* Physical Store card */}
            {company.physicalInfo && (
              <div className="rounded-2xl border border-cyan-500/20 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent px-6 py-4 border-b border-cyan-500/10 flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={18} />
                  <h3 className="text-sm font-black text-white font-mono uppercase tracking-widest">Loja Física</h3>
                </div>
                <div className="glass-card p-6 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-slate-300 leading-relaxed">{company.physicalInfo.address}</p>
                  </div>
                  <a href={`tel:${company.physicalInfo.phone}`} className="flex items-center gap-3 group">
                    <Phone className="text-green-400 shrink-0" size={16} />
                    <span className="text-sm text-slate-300 font-bold group-hover:text-green-400 transition-colors">{company.physicalInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-400 shrink-0" size={16} fill="currentColor" />
                    <div>
                      <span className="text-base font-black text-yellow-400">{company.physicalInfo.rating}</span>
                      <span className="text-xs text-slate-500 ml-2 font-mono">Google Maps</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-cyan-400 shrink-0" size={16} />
                    <span className="text-xs text-slate-400 font-mono leading-relaxed">{company.physicalInfo.hours}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Official Channels */}
            <div className="rounded-2xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-3">
                <ExternalLink className="text-cyan-400" size={16} />
                <h3 className="text-sm font-black text-white font-mono uppercase tracking-widest">Canais Oficiais</h3>
              </div>
              <div className="glass-card p-4 space-y-2">
                {company.links?.map((link: any) => {
                  const style = linkIconColor(link.name);
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 w-full p-3 rounded-xl bg-gradient-to-r ${style.bg} border ${style.border} hover:opacity-90 transition-all group`}
                    >
                      <div className={`w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center shrink-0 ${style.text}`}>
                        {style.icon}
                      </div>
                      <span className={`text-xs font-bold ${style.text} flex-1 leading-tight`}>{link.name}</span>
                      <ArrowUpRight size={13} className={`${style.text} opacity-60 group-hover:opacity-100 transition-opacity`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-6 text-center">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Tem interesse?</p>
              <p className="text-white font-black text-lg mb-5">Vamos trabalhar juntos.</p>
              <Link
                to={company.slug === 'zm-store-dev' ? '/pedido-app' : '/pedido-marketing'}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare size={16} /> SOLICITAR_ORÇAMENTO
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const OrderFormPage = ({ type }: { type: 'app' | 'marketing' }) => {
  const navigate = useNavigate();
  
  const options = type === 'app' ? [
    "Aplicativo Android Nativo",
    "Aplicativo iOS / Multiplataforma",
    "Manutenção / Atualização de App",
    "Outro Projeto Mobile"
  ] : [
    "Site Institucional",
    "Portal de Notícias / Blog",
    "E-commerce / Loja Virtual",
    "Gestão de Tráfego / SEO",
    "Social Media & Design"
  ];

  return (
    <div className="flex-1 p-4 sm:p-8 lg:p-16 grid-bg min-h-screen pt-20 pb-24 md:pb-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-12 transition-colors font-mono text-sm">
          <ArrowLeft size={16} /> CANCELAR_SOLICITAÇÃO
        </Link>

        <div className="glass-card p-8 lg:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              {type === 'app' ? <Smartphone size={24} /> : <Target size={24} />}
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">
                Pedido de {type === 'app' ? 'Desenvolvimento de App' : 'Serviços Digitais'}
              </h1>
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">Preencha os dados abaixo para orçamento_</p>
            </div>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Solicitação enviada com sucesso! Entraremos em contato em breve.'); navigate('/'); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Seu Nome_</label>
                <input type="text" required placeholder="Ex: João Silva" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">E-mail de Contato_</label>
                <input type="email" required placeholder="joao@exemplo.com" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Tipo de Serviço_</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {options.map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-4 bg-slate-900/30 border border-slate-800 rounded-xl cursor-pointer hover:border-cyan-500/50 transition-all group">
                    <input type="radio" name="service" value={opt} className="w-4 h-4 accent-cyan-500" required />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Descrição do Projeto_</label>
              <textarea rows={4} required placeholder="Conte um pouco sobre sua ideia, objetivos e funcionalidades principais..." className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all resize-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Estimativa de Investimento_</label>
              <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all appearance-none">
                <option value="low">R$ 1.000 — R$ 5.000</option>
                <option value="mid">R$ 5.000 — R$ 15.000</option>
                <option value="high">Acima de R$ 15.000</option>
                <option value="unsure">Não tenho certeza ainda</option>
              </select>
            </div>

            <button type="submit" className="w-full py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group">
              ENVIAR_SOLICITAÇÃO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="project-card flex flex-col group h-full"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          {project.downloads && (
            <div className="glass-card px-2.5 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1">
              <Download size={10} className="text-cyan-400" /> {project.downloads}
            </div>
          )}
          {project.rating !== "—" && (
            <div className="glass-card px-2.5 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1">
              <span className="text-yellow-400">★</span> {project.rating}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">{project.category} // {project.year}</p>
        </div>
        <h3 className="text-xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-bold" style={{ color: project.color || '#b054ff' }}>{project.subtitle}</p>
        
        <p className="text-sm text-slate-400 mt-4 mb-6 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-800/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-xl text-xs font-mono font-bold transition-all border border-slate-700 hover:border-cyan-500/50"
        >
          Acessar Play Store <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div className="flex-1 p-4 sm:p-8 lg:p-16 grid-bg min-h-screen relative pt-20 pb-24 md:pb-16">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero */}
        <section className="mb-24 pt-12 lg:pt-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
          >
            {/* Tech Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-black/50 border border-slate-800 shadow-[0_0_15px_rgba(0,229,255,0.1)] mb-8 font-mono text-[11px] text-cyan-400 uppercase tracking-widest backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYS.STATUS // DEVELOPER_ONLINE
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white max-w-3xl">
              Transformando ideias em <br className="hidden sm:block"/>
              <span className="gradient-text">experiências digitais memoráveis</span>
              <span className="animate-pulse text-cyan-500 ml-1">_</span>
            </h2>

            {/* Description as a terminal block */}
            <div className="max-w-2xl bg-[#0d1117]/80 border border-slate-800 rounded-xl p-5 mb-10 font-mono text-sm shadow-xl backdrop-blur-sm">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                <br/>
                &nbsp;&nbsp;role: <span className="text-green-400">"Android & Full Stack"</span>,
                <br/>
                &nbsp;&nbsp;focus: <span className="text-green-400">"Performance & Resultados"</span>,
                <br/>
                &nbsp;&nbsp;frameworks: [<span className="text-green-400">"Kotlin"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>]
                <br/>
                {'}'};
              </p>
            </div>

            {/* Tech Buttons */}
            <div className="flex flex-wrap gap-4">
               <Link to="/apps" className="btn-primary flex items-center gap-2 font-mono text-xs uppercase tracking-wider group">
                 <Terminal size={16} /> ./ver_projetos.sh
               </Link>
               <Link to="/sobre" className="glass-card hover:bg-slate-800 flex items-center gap-2 px-6 py-3 rounded-xl text-white font-mono text-xs uppercase tracking-wider border border-slate-700 hover:border-cyan-500/50 transition-all">
                 <User size={16} className="text-cyan-400" /> ./sobre_mim.md
               </Link>
               <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="glass-card hover:bg-slate-800 flex items-center gap-2 px-6 py-3 rounded-xl text-white font-mono text-xs uppercase tracking-wider border border-slate-700 hover:border-cyan-500/50 transition-all">
                 <Code2 size={16} className="text-cyan-400" /> &lt;Contato /&gt;
               </a>
            </div>
          </motion.div>
        </section>

        <StatsSection />
        <CompaniesSection />
        <SkillsSection />

        {/* All Apps */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
             <div className="flex items-center gap-4">
                <Smartphone className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-black text-white font-mono uppercase">Catálogo Completo — {PROJECTS.length} Apps</h3>
             </div>
             <Link to="/apps" className="text-sm font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
               Ver detalhes <ArrowRight size={16} />
             </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
             {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </section>

      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="flex-1 p-4 sm:p-8 lg:p-16 grid-bg min-h-screen pt-20 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16 pt-8 lg:pt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 mb-6 font-mono text-[10px] text-purple-400 uppercase tracking-widest">
            <LayoutGrid size={12} /> Ecossistema
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Projetos & Aplicações</h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Exploração do catálogo completo desenvolvido pela ZM Store. De ferramentas de produtividade B2B a jogos idle escaláveis.
          </p>
        </section>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center mb-12">
          <h3 className="text-3xl font-black text-white mb-4">Tem uma ideia para um App?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Desenvolvemos aplicativos nativos de alta performance para Android. Vamos transformar sua visão em um produto de sucesso.</p>
          <Link 
            to="/pedido-app" 
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <MessageSquare size={20} /> INICIAR_PROJETO_MOBILE
          </Link>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex-1 p-4 sm:p-8 lg:p-16 grid-bg min-h-screen pt-20 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-20 pt-8 lg:pt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 mb-8 font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
            <User size={12} /> Perfil Profissional & Biografia
          </div>
          
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                Leonardo Cunha<span className="text-cyan-500">.</span>
              </h1>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-3xl">
                <p>
                  Sou um desenvolvedor apaixonado por transformar problemas complexos em soluções digitais elegantes e escaláveis. Com foco em <span className="text-white font-bold">Android Nativo (Kotlin)</span> e <span className="text-white font-bold">Web Moderno (React)</span>, minha trajetória é marcada pelo empreendedorismo e pela entrega constante de valor através de software.
                </p>
                <p>
                  Como fundador da <span className="text-cyan-400 font-bold">ZM Store Desenvolvimentos</span>, publiquei 9 aplicativos na Google Play Store, alcançando a marca de mais de 15 mil downloads. Meu trabalho vai além do código: envolve a concepção do produto, design de experiência e estratégias de crescimento.
                </p>
                <p>
                  Acredito na tecnologia como ferramenta de impacto real, seja automatizando processos para microempreendedores ou criando comunidades vibrantes para colecionadores.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-12">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Localização_</p>
                    <p className="text-sm font-bold text-slate-200">Brasília, DF — Brasil</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Formação_</p>
                    <p className="text-sm font-bold text-slate-200">ADS & MBA Gestão Escolar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <img 
                  src="/profile_tech_avatar.png" 
                  alt="Leonardo Cunha" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/10">
                   <p className="text-white font-black text-sm mb-1 uppercase tracking-tight">Leonardo C. Cunha</p>
                   <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Software Engineer & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-20 mb-24">
          {/* Main Column: Experience */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <BriefcaseBusiness className="text-cyan-400" size={24} />
               <h3 className="text-2xl font-black text-white font-mono uppercase">Trajetória Profissional_</h3>
               <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
            </div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-px before:bg-slate-800">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-7 top-6 w-3 h-3 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 group-hover:scale-150 group-hover:bg-cyan-500 transition-all duration-300" />
                  <div className="glass-card p-8 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <span className="text-cyan-400 font-mono text-[10px] font-bold tracking-widest px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20 w-fit">{exp.period}</span>
                      <h4 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">{exp.company}</h4>
                    </div>
                    <h4 className="font-black text-white text-2xl mb-3 group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                       {exp.tech.map(t => (
                         <span key={t} className="text-[9px] font-mono text-slate-300 bg-slate-900/50 px-2.5 py-1.5 rounded border border-slate-700/50 group-hover:border-cyan-500/20 transition-colors">{t}</span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sidebar Column: Education & Values */}
          <aside className="space-y-16">
            {/* Education Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-purple-400" size={22} />
                <h3 className="text-lg font-black text-white font-mono uppercase">Formação_</h3>
              </div>
              <div className="space-y-4">
                {EDUCATION.slice(0, 4).map((edu, i) => (
                  <motion.div 
                    key={edu.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-purple-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="text-xl">{edu.icon}</div>
                    <div>
                       <h4 className="font-bold text-white text-sm mb-1 leading-snug">{edu.title}</h4>
                       <p className="text-[11px] text-slate-500 mb-2">{edu.institution}</p>
                       <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Values Section */}
            <section className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-cyan-400" size={20} />
                <h3 className="text-lg font-black text-white font-mono uppercase">Filosofia_</h3>
              </div>
              <div className="space-y-6">
                 {[
                   { t: "Foco no Usuário", d: "Software que resolve problemas reais, sem fricção." },
                   { t: "Alta Performance", d: "Código otimizado e interfaces instantâneas." },
                   { t: "Aprendizado Contínuo", d: "Evolução constante no stack tecnológico." }
                 ].map(val => (
                   <div key={val.t}>
                      <h4 className="text-sm font-bold text-white mb-1">{val.t}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{val.d}</p>
                   </div>
                 ))}
              </div>
            </section>

            {/* CV Download CTA */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Currículo Detalhado_</p>
               <a href="#" className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 text-sm">
                  <Download size={18} /> BAIXAR_CV.PDF
               </a>
            </div>
          </aside>
        </div>

        {/* Closing CTA */}
        <section className="mt-12 text-center py-20 border-t border-slate-800/50">
           <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">Vamos construir algo juntos?</h3>
           <p className="text-slate-400 mb-10 max-w-xl mx-auto">Estou sempre aberto a novos desafios e parcerias em projetos de alto impacto. Entre em contato e vamos conversar sobre sua ideia.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary flex items-center gap-2">
                 <Mail size={18} /> ENVIAR_EMAIL
              </a>
              <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                 <Phone size={18} /> WHATSAPP
              </a>
           </div>
        </section>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Analytics />
      <div className="min-h-screen bg-[#080b12] text-slate-200">
        <Navbar />
        {/* Added pt-16 for desktop header and pb-16 for mobile bottom bar */}
        <div className="pt-16 pb-[64px] md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<ProjectsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/empresa/:slug" element={<CompanyPage />} />
            <Route path="/pedido-app" element={<OrderFormPage type="app" />} />
            <Route path="/pedido-marketing" element={<OrderFormPage type="marketing" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
