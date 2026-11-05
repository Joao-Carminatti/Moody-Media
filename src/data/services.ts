// Dados dos serviços. Edite aqui: home, páginas de serviço, sitemap e menu leem deste arquivo.
// [DEFINIR] marca decisões comerciais que ainda precisam ser tomadas pelos sócios.
export type Service = {
  slug: string;
  title: string;
  for: string;
  includes: string[];
  result: string;
  headline: string; // texto antes do destaque serifado do H1
  em: string; // trecho em destaque (serifado itálico)
  intro: string;
  pains: [string, string][];
  deliverables: [string, string][];
  steps: [string, string][];
  metrics: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "social-media",
    title: "Social Media",
    for: "Quem precisa de presença consistente e profissional.",
    includes: ["Planejamento de conteúdo", "Criação e publicação", "Relatório mensal"],
    result: "Marca clara e constante nas redes.",
    headline: "Redes sociais com",
    em: "estratégia, não improviso.",
    intro: "Transformamos o perfil da sua empresa em um canal que explica o que você vende, gera confiança e leva o cliente até o contato. Tudo planejado em calendário, com linha editorial definida e relatório todo mês.",
    pains: [
      ["Conteúdo sem linha editorial", "Cada post fala de um assunto e o perfil não deixa claro o que você faz nem por que escolher você."],
      ["Postagens quando dá", "Sem calendário, o perfil some por semanas e o algoritmo (e o cliente) esquecem da marca."],
      ["Alcance sem contato", "Curtidas não pagam as contas. Falta um caminho claro do post até a mensagem ou o orçamento."],
    ],
    deliverables: [
      ["Diagnóstico do perfil", "Análise do perfil atual, do público e de concorrentes diretos para definir por onde começar."],
      ["Linha editorial", "Pilares de conteúdo, tom de voz e formatos que fazem sentido para o seu negócio."],
      ["Calendário mensal", "Planejamento das publicações do mês, aprovado por você antes de ir ao ar."],
      ["Criação de artes e roteiros", "Peças, legendas e roteiros de vídeo conforme o plano contratado."],
      ["Publicação e agendamento", "Postagem nos melhores horários, sem você precisar lembrar de nada."],
      ["Relatório mensal", "O que foi feito, o que funcionou e quais são os próximos passos, em linguagem simples."],
    ],
    steps: [
      ["Diagnóstico", "Reunião de alinhamento e análise do perfil, do público e do mercado."],
      ["Linha editorial", "Definimos pilares, tom de voz e identidade visual dos posts."],
      ["Produção", "Criação do conteúdo do mês e envio para a sua aprovação."],
      ["Publicação", "Agendamento, postagem e acompanhamento das interações."],
      ["Relatório e ajustes", "Revisão dos números e ajuste da estratégia para o mês seguinte."],
    ],
    metrics: ["Alcance e engajamento por formato", "Crescimento de seguidores qualificados", "Cliques no perfil e mensagens recebidas", "Conteúdos que mais geram conversa"],
  },
  {
    slug: "trafego-pago",
    title: "Tráfego Pago",
    for: "Quem quer gerar contatos e vendas com anúncios.",
    includes: ["Meta Ads e Google Ads", "Rastreamento de conversões", "Otimização contínua"],
    result: "Decisões guiadas por dados. Sem promessa de resultado garantido.",
    headline: "Anúncios que você consegue",
    em: "medir e otimizar.",
    intro: "Gerimos campanhas no Meta Ads e no Google Ads com rastreamento de ponta a ponta. Você sabe quanto investiu, quantos contatos chegaram e quanto cada um custou, e a cada semana ajustamos o que os dados mostram.",
    pains: [
      ["Anúncio sem rastreamento", "Sem pixel e conversões configurados, você otimiza no escuro e paga pelo clique errado."],
      ["Verba espalhada", "Campanhas sem hipótese definida gastam orçamento sem aprender nada com ele."],
      ["Cliques que não viram contato", "O anúncio funciona, mas a página de destino ou o atendimento deixam a venda escapar."],
    ],
    deliverables: [
      ["Auditoria de conta", "Revisão de contas, públicos e histórico de anúncios, quando já existirem."],
      ["Rastreamento de conversões", "Configuração de Pixel, Google Analytics 4 e Tag Manager para medir o que importa."],
      ["Estrutura de campanhas", "Campanhas no Meta Ads e no Google Ads organizadas por objetivo e público."],
      ["Criativos e textos", "Peças e copies dos anúncios conforme o plano contratado."],
      ["Otimização contínua", "Ajustes semanais de público, lances, criativos e orçamento."],
      ["Relatório mensal", "Investimento, resultados e custo por contato, com recomendações claras."],
    ],
    steps: [
      ["Diagnóstico e metas", "Entendemos o negócio, o ticket médio e o que é um bom contato para você."],
      ["Rastreamento", "Configuramos e testamos a medição antes de investir em mídia."],
      ["Campanhas no ar", "Publicamos as campanhas com hipóteses claras para testar."],
      ["Otimização", "Ajustes contínuos com base nos dados, não em palpite."],
      ["Relatório", "Prestação de contas mensal e planejamento do próximo ciclo."],
    ],
    metrics: ["Custo por lead ou contato", "Taxa de conversão da página de destino", "Investimento versus resultado", "Qualidade dos contatos gerados"],
    note: "O investimento em anúncios é pago direto às plataformas. Nosso serviço de gestão é cobrado à parte. Não prometemos resultado garantido.",
  },
  {
    slug: "websites",
    title: "Websites",
    for: "Quem precisa de um site rápido que converta.",
    includes: ["Design sob medida", "SEO técnico", "Alta performance"],
    result: "Vitrine rápida, acessível e pronta para anúncios.",
    headline: "Sites rápidos que",
    em: "transformam clique em contato.",
    intro: "Criamos sites sob medida, leves, acessíveis e prontos para receber anúncios. Cada página existe para levar o visitante a uma ação: chamar no WhatsApp, pedir um orçamento ou agendar uma conversa.",
    pains: [
      ["Site lento ou desatualizado", "Quem espera mais que alguns segundos fecha a aba, e o anúncio que levou até ali foi dinheiro perdido."],
      ["Experiência ruim no celular", "A maior parte dos acessos vem do celular, e um layout apertado ou confuso afasta o cliente."],
      ["Sem medição", "Sem rastreamento, você não sabe de onde vêm os contatos nem o que melhorar."],
    ],
    deliverables: [
      ["Design sob medida", "Layout pensado para a sua marca e para o seu público, sem template genérico."],
      ["Desenvolvimento moderno", "Código em Next.js e TypeScript, rápido, seguro e fácil de evoluir."],
      ["SEO técnico", "Estrutura, metadados e velocidade preparados para o Google encontrar e entender o site."],
      ["Landing pages", "Páginas focadas em conversão, prontas para receber o tráfego dos anúncios."],
      ["Performance medida", "Metas de desempenho e acessibilidade verificadas com Lighthouse."],
      ["Publicação", "Domínio, hospedagem e colocação no ar combinados em contrato."],
    ],
    steps: [
      ["Briefing", "Conversamos sobre objetivos, público, concorrentes e referências."],
      ["Estrutura e conteúdo", "Definimos páginas, mensagens e chamadas para ação."],
      ["Design", "Apresentamos o layout para aprovação antes de programar."],
      ["Desenvolvimento", "Programamos, testamos em vários dispositivos e otimizamos a velocidade."],
      ["Publicação e medição", "Site no ar, com rastreamento ativo e acompanhamento inicial."],
    ],
    metrics: ["Pontuação Lighthouse (desempenho, acessibilidade e SEO)", "Velocidade de carregamento no celular", "Taxa de contato por visita", "Indexação nos buscadores"],
  },
];

export const process: [string, string][] = [
  ["Diagnóstico", "Entendemos negócio, público e concorrência."],
  ["Estratégia", "Definimos metas, canais e prioridades."],
  ["Execução", "Conteúdo, anúncios e site no ar."],
  ["Relatório", "Números claros, todo mês."],
  ["Otimização", "Ajustamos o que os dados mostram."],
];
export const faq = [
  { q: "Quem paga o investimento em anúncios?", a: "O cliente paga direto às plataformas; nosso serviço de gestão é cobrado à parte." },
  { q: "Como funciona a contratação?", a: "Começamos por um diagnóstico gratuito, depois enviamos proposta e contrato transparente." },
  { q: "Como são os relatórios?", a: "Mensais, em linguagem clara, com o que foi feito e os próximos passos." },
  { q: "Há fidelidade contratual?", a: "[DEFINIR PRAZO E CONDIÇÕES COM O SÓCIO]" },
];
