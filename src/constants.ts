/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Leonardo Coutinho Cunha",
  role: "Fundador & Desenvolvedor Full Stack",
  bio: "Especialista em construir produtos digitais funcionais e interfaces focadas no usuário. Transformando ideias em apps de sucesso e soluções digitais inovadoras.",
  location: "Brasília - DF",
  phone: "+55 (61) 98182-0906",
  email: "leonccunha@hotmail.com",
};export const PROJECTS = [
  {
    id: 1,
    title: "MEI Pro: Gestão e Vendas",
    description: "Aplicativo robusto para microempreendedores individuais gerenciarem vendas, ordens de serviço e clientes de forma profissional. Inclui geração de PDF e controle financeiro.",
    tags: ["Android", "Gestão", "Negócios"],
    link: "https://play.google.com/store/apps/details?id=com.zmstore.projectb",
    image: "/screenshots/zm_store_apps.png",
    downloads: "5k+",
    rating: "4.8",
    category: "Productivity"
  },
  {
    id: 3,
    title: "ZM Placar de Jogos",
    description: "Ferramenta essencial para marcar pontos em jogos de Truco, Dados e outros passatempos casuais com amigos. Suporte a temas e histórico de partidas.",
    tags: ["Utilitário", "Jogos", "Casual"],
    link: "https://play.google.com/store/apps/details?id=com.sorteador.leonc.nds02",
    image: "/screenshots/zm_store_apps.png",
    downloads: "10k+",
    rating: "5.0",
    category: "Tools"
  },
  {
    id: 4,
    title: "HotDeck: Garagem Hot Wheels",
    description: "Organize sua coleção de carrinhos de forma digital, mantendo controle total sobre seus modelos raros, favoritos e variantes com fotos.",
    tags: ["Colecionismo", "Android", "Catalog."],
    link: "https://play.google.com/store/apps/details?id=com.zm.zmprojectgaleria",
    image: "/screenshots/zm_store_apps.png",
    downloads: "1k+",
    rating: "4.5",
    category: "Lifestyle"
  },
  {
    id: 5,
    title: "Lucky Number: Sorteador",
    description: "Sorteador de números e nomes intuitivo para rifas, sorteios em redes sociais e decisões rápidas com interface minimalista.",
    tags: ["Util", "Sorteio"],
    link: "https://play.google.com/store/apps/details?id=com.sorteador.leonc.sorteadordenumeros",
    image: "/screenshots/zm_store_apps.png",
    downloads: "500+",
    rating: "4.5",
    category: "Tools"
  },
  {
    id: 6,
    title: "Frases & Indiretas Malucas",
    description: "Aplicativo de entretenimento com centenas de frases criativas e divertidas para compartilhar em redes sociais e apps de mensagens.",
    tags: ["Social", "Fun"],
    link: "https://play.google.com/store/apps/details?id=lc.leonc.frasesmalucas",
    image: "/screenshots/zm_store_apps.png",
    downloads: "1k+",
    rating: "4.5",
    category: "Entertainment"
  }
];

export const COMPANIES = [
  {
    id: "zm-store",
    name: "ZM Store",
    slug: "zm-store",
    type: "E-commerce & Varejo Físico",
    description: "Loja especializada em eletrônicos, acessórios para smartphones, games e presentes criativos.",
    fullDescription: "A ZM Store é referência em eletrônicos e acessórios tech. Com forte presença na Shopee e atendimento local, oferecemos produtos de alta qualidade, desde periféricos gamer até soluções para o dia a dia digital.",
    icon: "ShoppingBag",
    highlights: ["Loja Oficial Shopee", "Referência em Eletrônicos", "Atendimento Premium"],
    image: "/screenshots/shopee_zm_store.png",
    links: [
      { name: "Shopee", url: "https://shopee.com.br/zmstorebsb" }
    ]
  },
  {
    id: "zm-store-dev",
    name: "ZM Store Desenvolvimentos",
    slug: "zm-store-dev",
    type: "Software House & Indie Games",
    description: "Estúdio de criação de aplicativos mobile e jogos para Android, com milhares de downloads na Google Play Store.",
    fullDescription: "Focada em solucionar problemas cotidianos e proporcionar entretenimento, a ZM Store Desenvolvimentos já lançou diversos títulos de sucesso, somando milhares de downloads globais. Nossa arquitetura é pautada em performance e UX.",
    icon: "Smartphone",
    highlights: ["+25k Downloads totais", "Foco em User Experience", "9+ Apps Publicados"],
    image: "/screenshots/zm_store_apps.png",
    links: [
      { name: "Google Play", url: "https://play.google.com/store/apps/developer?id=ZM+Store+desenvolvimentos" }
    ]
  },
  {
    id: "zm-digital",
    name: "ZM Digital",
    slug: "zm-digital",
    type: "Marketing & Estratégia Digital",
    description: "Desenvolvimento web e estratégias de posicionamento de marca para negócios em crescimento.",
    fullDescription: "A ZM Digital atua na criação de portais, sites corporativos e estratégias de marketing. Nosso portfólio inclui clientes dos setores imobiliário, jornalismo e marcas pessoais, sempre focando em performance e conversão.",
    icon: "Target",
    highlights: ["Sites Institucionais", "Portais de Notícias", "SEO & Marketing"],
    image: "/screenshots/mrw_imovel.png",
    projects: [
      { name: "MRW Imóvel", url: "https://mrwimovel.com/", image: "/screenshots/mrw_imovel.png" },
      { name: "Portal Se Liga", url: "https://portalseliga.com/", image: "/screenshots/portal_seliga.png" },
      { name: "Maks Araújo", url: "https://www.maksaraujo.com.br/", image: "/screenshots/maks_araujo.png" }
    ]
  }
];

export const EXPERIENCE = [
  {
    company: "Projeção",
    role: "Técnico Educacional – Aux. Educacional - Arquivista",
    period: "2017 - 2024",
    description: "Apoio na organização, recuperação e administração de acervo e banco de dados em bibliotecas e centros de informação."
  },
  {
    company: "CNPq - COIAM",
    role: "Estagiário",
    period: "2016 - 2018",
    description: "Auxílio em tarefas diárias da coordenação, elaboração de planilhas e suporte administrativo."
  }
];

export const EDUCATION = [
  {
    title: "MBA em Gestão Escolar",
    institution: "UNIPROJEÇÃO",
    period: "Concluído em 2023"
  },
  {
    title: "Especialização em Marketing Digital e Mídias Sociais",
    institution: "UNIPROJEÇÃO",
    period: "Concluído em 2021"
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNIPROJEÇÃO",
    period: "Concluído em 2017"
  }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/leo-cunha-b18771280/", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "PlayStore", url: "https://play.google.com/store/apps/developer?id=ZM+Store+desenvolvimentos", icon: "Play" }
];

export const STATS = [
  { label: "Downloads Totais", value: "25k+", icon: "Download" },
  { label: "Projetos Ativos", value: "12", icon: "LayoutGrid" },
  { label: "Anos de Experiência", value: "8+", icon: "BriefcaseBusiness" },
  { label: "Clientes Satisfeitos", value: "150+", icon: "Target" },
];

export const SKILLS = [
  { name: "React / Next.js", level: 95 },
  { name: "Android (Kotlin/Java)", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Firebase / Firestore", level: 95 },
  { name: "E-commerce Strategy", level: 88 },
];

export const SERVICES = [
  {
    title: "Desenvolvimento Mobile",
    description: "Criação de aplicativos nativos e híbridos focados em alta performance e UX.",
    icon: "Smartphone"
  },
  {
    title: "E-commerce & Vendas",
    description: "Estratégias completas para vender mais online e integrar lojas físicas.",
    icon: "ShoppingBag"
  },
  {
    title: "Consultoria Tech",
    description: "Mentoria e arquitetura de software para startups e novos negócios.",
    icon: "Target"
  }
];

export const CONTACT_INFO = {
  email: "leonccunha@hotmail.com",
  phone: "+55 (61) 98182-0906",
  address: "Brasília - DF"
};
