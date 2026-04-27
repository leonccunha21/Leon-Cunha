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
};

export const PROJECTS = [
  {
    id: 1,
    title: "MEI Pro: Gestão e Vendas",
    description: "Aplicativo robusto para microempreendedores individuais gerenciarem vendas, ordens de serviço e clientes de forma profissional. Inclui geração de PDF e controle financeiro.",
    tags: ["Android", "Gestão", "Negócios"],
    link: "https://play.google.com/store/apps/details?id=com.zmstore.projectb",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1200&auto=format&fit=crop",
    downloads: "10k+",
    rating: "5.0",
    category: "Tools"
  },
  {
    id: 2,
    title: "Galactic Empire: Idle",
    description: "Um jogo de simulação espacial viciante onde o jogador constrói um império intergaláctico através de estratégias de clique e automação de recursos.",
    tags: ["Game", "Idle", "Sci-Fi"],
    link: "https://play.google.com/store/apps/details?id=com.galactic.empire",
    image: "https://images.unsplash.com/photo-1518364538800-6eca3c2ca0ff?q=80&w=1200&auto=format&fit=crop",
    downloads: "1k+",
    rating: "4.2",
    category: "Games"
  },
  {
    id: 4,
    title: "HotDeck: Garagem Hot Wheels",
    description: "Organize sua coleção de carrinhos de forma digital, mantendo controle total sobre seus modelos raros, favoritos e variantes com fotos.",
    tags: ["Colecionismo", "Android", "Catalog."],
    link: "https://play.google.com/store/apps/details?id=com.zm.zmprojectgaleria",
    image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1200&auto=format&fit=crop",
    downloads: "500+",
    rating: "4.5",
    category: "Tools"
  },
  {
    id: 6,
    title: "Cantadas Malucas",
    description: "Aplicativo de entretenimento com centenas de frases criativas e divertidas para compartilhar em redes sociais e apps de mensagens.",
    tags: ["Social", "Fun"],
    link: "https://play.google.com/store/apps/details?id=lc.leonc.frasesmalucas",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200&auto=format&fit=crop",
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
    description: "Loja especializada em eletrônicos, acessórios para smartphones, games e presentes criativos em Brasília.",
    fullDescription: "Com sede em Samambaia Norte - DF, a ZM Store é referência local em atendimento e qualidade de produtos tecnológicos. Oferecemos o que há de mais moderno em acessórios, consoles e gadgets voltados para o público tech e gamer.",
    icon: "ShoppingBag",
    highlights: ["Loja Física em Samambaia", "Referência em Eletrônicos", "Atendimento Personalizado"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "zm-store-dev",
    name: "ZM Store Desenvolvimentos",
    slug: "zm-store-dev",
    type: "Software House & Indie Games",
    description: "Estúdio de criação de aplicativos mobile e jogos para Android, com milhares de downloads na Google Play Store.",
    fullDescription: "Focada em solucionar problemas cotidianos e proporcionar entretenimento, a ZM Store Desenvolvimentos já lançou diversos títulos de sucesso, somando mais de 20 mil downloads globais. Nossa arquitetura é pautada em performance e UX.",
    icon: "Smartphone",
    highlights: ["+20k Downloads totais", "Foco em User Experience", "Arquitetura Escalável"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "zm-digital",
    name: "ZM Digital",
    slug: "zm-digital",
    type: "Marketing & Strategy",
    description: "Agência focada em estratégias de marketing digital, SEO e posicionamento de marca para negócios em crescimento.",
    fullDescription: "Ajudamos empresas a encontrarem seu espaço no mundo digital através de tráfego pago, gestão de redes sociais e design estratégico que converte visualizações em vendas reais.",
    icon: "Target",
    highlights: ["Gestão de Tráfego Pago", "Design Estratégico", "SEO Avançado"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
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

export const CONTACT_INFO = {
  email: "leonccunha@hotmail.com",
  phone: "+55 (61) 98182-0906",
  address: "Brasília - DF"
};
