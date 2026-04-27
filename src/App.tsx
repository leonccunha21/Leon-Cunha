/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useLocation,
  useNavigate
} from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  Play, 
  ExternalLink, 
  Mail, 
  Phone, 
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
  X,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { PROJECTS, EXPERIENCE, SOCIAL_LINKS, PERSONAL_INFO, COMPANIES, EDUCATION } from "./constants";

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

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Início", icon: ShoppingBag, href: "/" },
    { name: "Aplicativos", icon: LayoutGrid, href: "/apps" },
    { name: "Sobre & Carreira", icon: BriefcaseBusiness, href: "/sobre" },
    { name: "Contato", icon: MessageSquare, href: "/#contato" },
  ];

  return (
    <aside className="w-full lg:w-[400px] lg:h-screen sidebar-gradient text-white p-8 lg:p-12 flex flex-col justify-between lg:fixed lg:top-0 lg:left-0 z-40 overflow-y-auto">
      <div>
        <Link to="/" className="block group">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-2xl bg-indigo-500 mb-8 flex items-center justify-center text-3xl font-bold shadow-lg shadow-indigo-500/30 group-hover:bg-indigo-400 transition-colors"
          >
            ZM
          </motion.div>
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{PERSONAL_INFO.name}</h1>
        <p className="text-indigo-400 font-medium mb-6 uppercase tracking-widest text-[10px]">{PERSONAL_INFO.role}</p>
        <p className="text-slate-400 leading-relaxed text-sm mb-12">
          {PERSONAL_INFO.bio}
        </p>

        <nav className="space-y-2 mb-12">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.name}
                to={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                  isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={18} className={isActive ? "text-indigo-400" : "group-hover:text-indigo-400"} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <MapPin size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Localização</p>
              <p className="text-xs text-white font-medium truncate">{PERSONAL_INFO.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">E-mail</p>
              <p className="text-xs text-white font-medium truncate">{PERSONAL_INFO.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-800">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-4">Redes Sociais</p>
        <div className="flex gap-3 mb-8">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.name === "Linkedin" ? Linkedin : 
                         link.name === "Github" ? Github : Play;
            return (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition-all text-slate-400"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <Link 
          to="/apps"
          className="block w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-center text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Minha Store
        </Link>
      </div>
    </aside>
  );
};

const CompanyCard = ({ company, index }: { company: any; index: number; key?: string | number }) => {
  const Icon = company.icon === "ShoppingBag" ? ShoppingBag : 
                company.icon === "Smartphone" ? Smartphone : Target;

  return (
    <Link to={`/company/${company.slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="sleek-card p-6 group relative overflow-hidden cursor-pointer h-full flex flex-col"
      >
        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{company.name}</h3>
        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-4">{company.type}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">{company.description}</p>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest">
          Ver detalhes <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="sleek-card p-4 group h-full flex flex-col"
    >
      <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden relative shadow-inner">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {project.downloads && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-[9px] font-bold text-indigo-600 flex items-center gap-1 shadow-sm border border-slate-100">
            <Download size={10} />
            {project.downloads}
          </div>
        )}
      </div>
      <div className="px-1 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-bold text-slate-400 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-indigo-400" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noreferrer"
        className="absolute inset-0 z-10"
      />
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div className="flex-1 lg:ml-[400px] p-6 lg:p-16">
      {/* Hero / Welcome */}
      <section className="mb-24 pt-8 lg:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl"
        >
          <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Bem-vindo ao meu Portfólio</span>
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Transformando ideias em <span className="text-indigo-600">experiências digitais</span> memoráveis.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Sou especialista no ecossistema mobile e e-commerce, com foco em resultados reais e tecnologia de ponta para o mercado de Brasília e além.
          </p>
        </motion.div>
      </section>

      {/* Featured Companies */}
      <section id="empresas" className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Nossas Empresas</h3>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Ecossistema ZM</p>
          </div>
          <div className="h-px flex-1 mx-8 bg-slate-100 hidden md:block"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {COMPANIES.map((company, i) => (
            <CompanyCard 
              key={company.name} 
              company={company} 
              index={i} 
            />
          ))}
        </div>
      </section>

      {/* Hero Apps Summary */}
      <section className="mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/10 blur-[100px]" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold mb-6">Apps criados recentemente</h3>
            <p className="text-slate-400 mb-10 text-lg">
              Conheça alguns dos meus projetos mais recentes publicados na Google Play Store, focados em produtividade e utilitários.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {PROJECTS.slice(0, 2).map((p) => (
                 <div key={p.id} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="font-bold text-sm mb-1">{p.title}</p>
                    <p className="text-xs text-slate-400 line-clamp-1">{p.description}</p>
                 </div>
               ))}
            </div>
            <Link to="/apps" className="inline-flex items-center gap-2 font-bold text-indigo-400 hover:text-white transition-colors group">
              Explorar catálogo completo <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contato" className="mb-24">
        <div className="p-8 lg:p-16 bg-white border border-slate-200 rounded-[3rem] sleek-shadow grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Vamos Conversar?</span>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Pronto para elevar seu negócio ao próximo nível?</h3>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Estou à disposição para consultorias, desenvolvimento de projetos sob medida e parcerias estratégicas em Brasília e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`, '_blank')}
                className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 text-center"
              >
                Chamar no WhatsApp
              </button>
              <button 
                onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
                className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center"
              >
                Enviar E-mail
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-indigo-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <p className="text-2xl font-extrabold text-slate-900 mb-2">Estratégia</p>
              <p className="text-sm text-slate-500">Desenvolvimento focado em conversão e resultados reais.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-indigo-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <p className="text-2xl font-extrabold text-slate-900 mb-2">Mobile</p>
              <p className="text-sm text-slate-500">Experiências fluidas nas pontas dos dedos dos seus clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 uppercase tracking-[0.2em] gap-4">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
        <div className="flex gap-8">
          <Link to="/about" className="hover:text-indigo-600 transition-colors">Carreira</Link>
          <Link to="/apps" className="hover:text-indigo-600 transition-colors">Aplicativos</Link>
        </div>
      </footer>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="flex-1 lg:ml-[400px] p-6 lg:p-16 h-full">
      <section className="mb-16 pt-8 lg:pt-0">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Voltar ao Início
        </Link>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Explorar Store</h2>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          Catálogo completo de ferramentas e jogos desenvolvidos pela <span className="text-indigo-600 font-bold">ZM Store Desenvolvimentos</span>. Focados em utilidade, entretenimento e performance.
        </p>
      </section>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <section className="mb-24">
        <div className="p-8 lg:p-12 bg-indigo-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Gostou de algum aplicativo?</h3>
            <p className="text-indigo-100 opacity-80">Podemos criar algo exclusivo para o seu modelo de negócio.</p>
          </div>
          <button 
            onClick={() => window.open(`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`, '_blank')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-black/10"
          >
            Falar com Desenvolvedor
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex-1 lg:ml-[400px] p-6 lg:p-16 h-full">
      <section className="mb-24 pt-8 lg:pt-0">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Voltar ao Início
        </Link>
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Trajetória Profissional</h2>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          Construindo uma carreira sólida unindo tecnologia, educação e visão empreendedora ao longo de quase uma década de dedicação.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-16 mb-24">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <GraduationCap className="text-indigo-600" size={28} />
            Educação
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <h4 className="font-bold text-slate-900 text-lg mb-1">{edu.title}</h4>
                <p className="text-indigo-600 font-medium text-sm mb-4">{edu.institution}</p>
                <span className="inline-block px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <BriefcaseBusiness className="text-indigo-600" size={28} />
            Experiência
          </h3>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-slate-900 text-lg">{exp.role}</h4>
                   <span className="text-[10px] text-indigo-600 font-bold bg-white px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">{exp.period}</span>
                </div>
                <p className="text-sm text-slate-900 font-semibold mb-3">{exp.company}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="mb-24">
        <div className="p-8 lg:p-12 bg-slate-900 border border-slate-800 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Interessado em minha colaboração?</h3>
            <p className="text-slate-400 text-lg">Estou disponível para novos desafios e projetos de alta escala.</p>
          </div>
          <div className="flex gap-4 relative z-10 w-full md:w-auto">
            <button 
              onClick={() => window.open(`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`, '_blank')}
              className="flex-1 md:flex-none px-8 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
            >
              Falar agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


const CompanyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const company = COMPANIES.find(c => c.slug === slug);

  if (!company) {
    return (
      <div className="flex-1 lg:ml-[400px] flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Empresa não encontrada</h2>
          <button onClick={() => navigate("/")} className="text-indigo-600 font-bold flex items-center gap-2 mx-auto">
            <ArrowLeft size={18} /> Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const Icon = company.icon === "ShoppingBag" ? ShoppingBag : 
                company.icon === "Smartphone" ? Smartphone : Target;

  const isDev = company.id === "zm-store-dev";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 lg:ml-[400px] min-h-screen bg-white relative"
    >
      <div className="h-64 lg:h-96 w-full relative overflow-hidden">
        <img src={company.image} className="w-full h-full object-cover" alt={company.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <button 
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all z-20"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="px-6 lg:px-16 py-12 lg:-mt-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-2xl shadow-indigo-900/10 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-600/20">
                  <Icon size={36} />
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">{company.name}</h2>
                <div className="flex flex-wrap gap-3">
                  <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs py-2 px-4 bg-indigo-50 rounded-full">{company.type}</p>
                  {company.highlights.map((h: string) => (
                    <span key={h} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">{h}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    História e Propósito
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xl mb-12">
                    {company.fullDescription}
                  </p>
                </div>
                
                {isDev && (
                  <div className="mt-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                      Catálogo de Produtos Digitais
                      <div className="h-px flex-1 bg-slate-100"></div>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      {PROJECTS.map((app) => (
                        <div key={app.id} className="group relative">
                          <div className="aspect-video bg-slate-100 rounded-3xl mb-6 overflow-hidden shadow-sm ring-1 ring-slate-100">
                            <img src={app.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={app.title} />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{app.title}</h4>
                          <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">{app.description}</p>
                          <a 
                            href={app.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-900/10"
                          >
                            Google Play <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-4">
                 <div className="p-8 lg:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 sticky top-12">
                    <h3 className="font-bold text-slate-900 text-lg mb-8 uppercase tracking-widest">Contato Profissional</h3>
                <div className="space-y-4 mb-8">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">E-mail</p>
                      <p className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.email}</p>
                    </div>
                  </a>

                  <a 
                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">WhatsApp</p>
                      <p className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Localização</p>
                      <p className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => window.open(`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g,'')}`, '_blank')}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
                >
                  Solicitar Orçamento
                </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 relative">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<ProjectsPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/company/:slug" element={<CompanyPage />} />
        </Routes>
      </div>
    </Router>
  );
}
