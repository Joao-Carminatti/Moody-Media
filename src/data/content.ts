// Dados reais entram aqui. Listas vazias => seções ocultas (nada de cases/números inventados).
export const stats: { value: number; label: string; suffix?: string }[] = [];
// PORTFÓLIO. Cada item vira um card na home, em /portfolio e uma página em /portfolio/<slug>.
// Itens com demo: true aparecem marcados como "Demonstração". Troque pelos projetos reais e remova o demo.
// Imagem: coloque o print em public/portfolio/<arquivo>.webp (16:10, ~1600x1000) e use image: "/portfolio/<arquivo>.webp".
// results: só com dados reais e verificáveis (ex.: ["Lighthouse mobile", "98"]). Vazio = bloco oculto.
export type Case = {
  slug: string; title: string; segment: string; year?: string; summary: string;
  services: ("social-media" | "trafego-pago" | "websites")[];
  challenge?: string; solution?: string; results?: [string, string][];
  url?: string; image?: string; demo?: boolean;
};
export const cases: Case[] = [
  { slug: "exemplo-site-clinica", title: "Site institucional para clínica", segment: "Saúde e bem-estar", summary: "Exemplo do formato de entrega: site rápido, páginas por especialidade e botão de agendamento pelo WhatsApp.", services: ["websites"], demo: true },
  { slug: "exemplo-campanhas-varejo", title: "Campanhas para loja de varejo", segment: "Varejo", summary: "Exemplo do formato de entrega: rastreamento de conversões, campanhas no Meta Ads e relatório mensal.", services: ["trafego-pago", "social-media"], demo: true },
  { slug: "exemplo-presenca-restaurante", title: "Presença digital para restaurante", segment: "Alimentação", summary: "Exemplo do formato de entrega: linha editorial, calendário de conteúdo e acompanhamento de métricas.", services: ["social-media"], demo: true },
];
export const testimonials: { name: string; role: string; text: string }[] = [];
export const why = [
  ["Método documentado", "Cada projeto segue as mesmas etapas, do diagnóstico à otimização."],
  ["Performance técnica", "Sites rápidos e acessíveis, medidos com Lighthouse."],
  ["Comunicação clara", "Relatórios em linguagem simples, sem jargão."],
  ["Atendimento próximo", "Você fala direto com os sócios."],
];
export const serviceFaq: Record<string, { q: string; a: string }[]> = {
  "social-media": [{ q: "Quantas postagens por mês?", a: "[DEFINIR PACOTES]" }, { q: "Vocês produzem as imagens?", a: "Sim, conforme o plano contratado." }],
  "trafego-pago": [{ q: "Qual o investimento mínimo em anúncios?", a: "[DEFINIR]. Varia por segmento e objetivo." }, { q: "Há garantia de resultado?", a: "Não. Nenhuma agência séria promete isso; trabalhamos com metas e otimização contínua." }],
  websites: [{ q: "Qual o prazo de entrega?", a: "[DEFINIR PRAZOS]" }, { q: "O site fica meu?", a: "Sim. Combinamos domínio e hospedagem em contrato." }],
};
export const legal = {
  "politica-de-privacidade": { title: "Política de Privacidade", sections: [
    ["Dados coletados", "Coletamos os dados enviados no formulário (nome, empresa, segmento, cidade, serviço, investimento e WhatsApp) e, com seu consentimento, dados de navegação via analytics."],
    ["Finalidade", "Responder ao seu pedido de diagnóstico e melhorar o site."],
    ["Seus direitos (LGPD)", "Você pode solicitar acesso, correção ou exclusão dos dados pelo e-mail de contato."],
    ["Cookies", "Scripts de análise só carregam após o seu aceite no banner."]] },
  termos: { title: "Termos de Uso", sections: [
    ["Uso do site", "O conteúdo é informativo e não constitui promessa de resultados."],
    ["Propriedade intelectual", "Textos, marca e design pertencem à agência."],
    ["Alterações", "Estes termos podem ser atualizados a qualquer momento."]] },
} as const;
