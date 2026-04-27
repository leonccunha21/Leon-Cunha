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
    description: "Ferramenta completa para microempreendedores individuais gerenciarem vendas, ordens de serviço e clientes. Ideal para prestadores de serviços e pequenos comércios.",
    tags: ["Android", "Gestão", "Business"],
    link: "https://play.google.com/store/apps/details?id=com.zmstore.projectb",
    image: "/screenshots/playstore_meipro.png",
    downloads: "5+",
    rating: "N/A",
    category: "Productivity"
  },
  {
    id: 3,
    title: "ZM Placar de Jogos",
    description: "O placar mais completo para acompanhar suas partidas de Truco, Dados e outros jogos casuais com amigos. Suporte a histórico e temas personalizados.",
    tags: ["Utility", "Games", "Casual"],
    link: "https://play.google.com/store/apps/details?id=com.sorteador.leonc.nds02",
    image: "/screenshots/playstore_placar.png",
    downloads: "50+",
    rating: "5.0",
    category: "Tools"
  },
  {
    id: 4,
    title: "Número da Sorte: Sorteador",
    description: "Sorteador intuitivo para números e dados. Perfeito para decisões rápidas, sorteios e jogos de tabuleiro. Interface limpa e rápida.",
    tags: ["Utility", "Random", "Tools"],
    link: "https://play.google.com/store/apps/details?id=com.sorteador.leonc.sorteadordenumeros",
    image: "/screenshots/playstore_sorteador.png",
    downloads: "1.000+",
    rating: "4.9",
    category: "Tools"
  },
  {
    id: 6,
    title: "Frases & Indiretas Malucas",
    description: "Milhares de frases criativas, indiretas e cantadas para compartilhar em redes sociais. O app ideal para quem quer se expressar com humor.",
    tags: ["Social", "Entertainment", "Fun"],
    link: "https://play.google.com/store/apps/details?id=lc.leonc.frasesmalucas",
    image: "/screenshots/playstore_frases.png",
    downloads: "1.000+",
    rating: "4.5",
    category: "Entertainment"
  },
  {
    id: 2,
    title: "Galactic Empire: Idle Clicker",
    description: "Simulador espacial viciante onde você constrói seu império intergaláctico através de estratégias de clique e automação de recursos. Conquiste as estrelas!",
    tags: ["Game", "Idle", "Sci-Fi"],
    link: "https://play.google.com/store/apps/details?id=com.galactic.empire",
    image: "/screenshots/playstore_galactic.png",
    downloads: "10+",
    rating: "N/A",
    category: "Games"
  },
  {
    id: 5,
    title: "Garagem HotDeck: Galeria",
    description: "Colecione, negocie e descubra carros icônicos em uma galeria digital única. O paraíso dos colecionadores de Hot Wheels e miniaturas raras.",
    tags: ["Game", "Coleção", "Carros"],
    link: "https://play.google.com/store/apps/details?id=com.zm.zmprojectgaleria",
    image: "/screenshots/playstore_hotdeck.png",
    downloads: "50+",
    rating: "N/A",
    category: "Games"
  },
  {
    id: 7,
    title: "Guia do Técnico ZM",
    description: "O guia de bancada definitivo para reparar PCs, celulares, impressoras e videogames. Tudo que um técnico precisa em um só app.",
    tags: ["Tools", "Tecnologia", "Repair"],
    link: "https://play.google.com/store/apps/details?id=com.zmstore.guiadotecnico",
    image: "https://play-lh.googleusercontent.com/Y6d_JTJpB2M4X8DgKP5QMj6ZaRJ_Kzy_HHBjGluOm4WfFLUqG3cFX0-2D6kp8-jFZA=w1052-h592",
    downloads: "100+",
    rating: "N/A",
    category: "Tools"
  },
  {
    id: 8,
    title: "ZM Guia Remédio",
    description: "Reconhecimento visual de medicamentos com câmera. Guia completo de saúde com posologia, alertas e interações medicamentosas. Sua saúde em um clique.",
    tags: ["Saúde", "Tools", "Medical"],
    link: "https://play.google.com/store/apps/details?id=com.zmstore.projectr",
    image: "https://play-lh.googleusercontent.com/oAf72xUJCriIdBD7jbkqCLaBX7D3Ny7WXPW7nfrHBCFdpD1yY0y6cAV7e-yDAY3DgA=w1052-h592",
    downloads: "50+",
    rating: "N/A",
    category: "Health"
  },
  {
    id: 9,
    title: "ZM Quanto Gastei no Rolê?",
    description: "Seu copiloto financeiro para noites inesquecíveis. Controle seus gastos em baladas, bares e eventos em tempo real. Saiba exatamente quanto você gastou.",
    tags: ["Finanças", "Social", "Utility"],
    link: "https://play.google.com/store/apps/details?id=com.quantogastei.rolejava",
    image: "https://play-lh.googleusercontent.com/qV5JOelr7QiYZxVJCMR3b7hxT1vW3PzAuPxD5FRV-JHf2kPY8PBcFlniZDjGCFKj4w=w1052-h592",
    downloads: "100+",
    rating: "N/A",
    category: "Finance"
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
    highlights: ["+3k Downloads totais", "Foco em User Experience", "9 Apps Publicados"],
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
  { label: "Downloads Totais", value: "3k+", icon: "Download" },
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
