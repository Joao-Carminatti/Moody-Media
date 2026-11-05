import Link from "next/link";
import { site } from "@/config/site";
import { services, process as steps, faq } from "@/data/services";
import { stats, cases, testimonials, why } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Cta } from "@/components/Cta";
import { CaseCard } from "@/components/CaseCard";

const h2 = "mx-auto mt-6 max-w-3xl text-3xl font-light leading-[1.12] md:text-5xl";
const sec = "mx-auto max-w-5xl px-5 py-24 md:py-36";
const problems = [
  ["Presença sem direção", "Postar todo dia sem estratégia gera alcance, mas não gera cliente."],
  ["Anúncio sem medição", "Sem rastreamento correto, você otimiza no escuro e paga pelo clique errado."],
  ["Site que não converte", "O clique chega, mas uma página lenta ou confusa deixa a venda escapar."],
];
function Faq() {
  return (
    <div className="mt-12 border-b border-white/10 text-left">
      {faq.map((f) => (
        <details key={f.q} className="group border-t border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-light [&::-webkit-details-marker]:hidden">{f.q}<span aria-hidden="true" className="text-2xl font-extralight leading-none text-white/50 transition-transform group-open:rotate-45">+</span></summary>
          <p className="pb-6 font-light text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
export default function Home() {
  const ld = [
    { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email },
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, description: site.description, url: site.url, areaServed: site.regions },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero />

      {stats.length > 0 && <section className="mx-auto grid max-w-5xl gap-6 border-t border-white/[0.07] px-5 py-16 md:grid-cols-4">{stats.map((s) => <Counter key={s.label} {...s} />)}</section>}

      <section className={`${sec} border-t border-white/[0.07] text-center`}>
        <p className="label">O problema</p>
        <h2 className={h2}>Você não precisa de mais posts. Precisa de um <span className="hl">sistema.</span></h2>
        <div className="mt-16 grid gap-10 text-left md:grid-cols-3">
          {problems.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="border-t border-white/15 pt-6"><span className="label">0{i + 1}</span><h3 className="mt-4 text-xl font-normal">{t}</h3><p className="mt-3 font-light text-muted">{d}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="servicos" className={`${sec} pt-0 text-center`}>
        <p className="label">Serviços</p>
        <h2 className={h2}>Três frentes. <span className="hl">Uma estratégia.</span></h2>
        <div className="mt-16 border-b border-white/10 text-left">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <a href={`/servicos/${s.slug}`} className="group grid items-center gap-3 border-t border-white/10 py-9 transition-colors hover:bg-white/[0.025] md:grid-cols-[4rem_1fr_1.3fr_auto] md:gap-8 md:px-3">
                <span className="label">0{i + 1}</span>
                <h3 className="text-3xl font-light">{s.title}</h3>
                <p className="font-light text-muted">{s.for} <span className="mt-1 block text-sm text-white/40">{s.includes.join(" · ")}</span></p>
                <span aria-hidden="true" className="text-2xl font-extralight text-white/50 transition-transform group-hover:translate-x-2 group-hover:text-white">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="metodo" className="scroll-mt-16 border-y border-white/[0.07] bg-ink-2/60">
        <div className={`${sec} text-center`}>
          <p className="label">Método</p>
          <h2 className={h2}>Do diagnóstico à <span className="hl">otimização.</span></h2>
          <ol className="mt-16 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map(([t, d], i) => (
              <li key={t} className="list-none">
                <Reveal delay={i * 0.06}>
                  <div className="border-t border-white/15 pt-5"><span className="label">0{i + 1}</span><h3 className="mt-4 text-lg font-normal">{t}</h3><p className="mt-2 text-sm font-light text-muted">{d}</p></div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${sec} text-center`}>
        <p className="label">Por que nós</p>
        <h2 className={h2}>Diferenciais que você pode <span className="hl">verificar.</span></h2>
        <div className="mt-16 grid gap-x-14 gap-y-10 text-left md:grid-cols-2">
          {why.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}><div className="border-t border-white/15 pt-6"><span className="label">0{i + 1}</span><h3 className="mt-4 text-xl font-normal">{t}</h3><p className="mt-2 font-light text-muted">{d}</p></div></Reveal>
          ))}
        </div>
      </section>

      {cases.length > 0 && (
        <section className={`${sec} pt-0 text-center`}>
          <p className="label">Portfólio</p>
          <h2 className={h2}>Nosso trabalho <span className="hl">em prática.</span></h2>
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {cases.slice(0, 3).map((c, i) => <Reveal key={c.slug} delay={i * 0.08}><CaseCard c={c} /></Reveal>)}
          </div>
          <Link href="/portfolio" className="btn btn-ghost mt-14">Ver todos os projetos →</Link>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className={`${sec} pt-0 text-center`}><p className="label">Depoimentos</p><h2 className={h2}>O que dizem os clientes</h2>
          <div className="mt-14 grid gap-8 text-left md:grid-cols-2">{testimonials.map((t) => <blockquote key={t.name} className="border-l border-white/25 pl-6"><p className="text-xl font-light">{t.text}</p><footer className="mt-3 text-sm text-muted">{t.name}, {t.role}</footer></blockquote>)}</div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-5 pb-24 text-center md:pb-36">
        <p className="label">Dúvidas</p>
        <h2 className={h2}>Antes de você <span className="hl">perguntar.</span></h2>
        <Faq />
      </section>

      <section className="glow relative border-t border-white/[0.07] px-5 py-28 text-center md:py-40">
        <p className="label">Próximo passo</p>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extralight leading-[1.06] md:text-7xl">Vamos descobrir a sua <span className="hl">oportunidade?</span></h2>
        <p className="mx-auto mt-7 max-w-xl text-lg font-light text-muted">Peça um diagnóstico gratuito e saia com um plano claro, sem compromisso.</p>
        <div className="mt-12"><Cta href="/contato" id="cta_final">Agendar diagnóstico gratuito <span aria-hidden="true">→</span></Cta></div>
      </section>
    </main>
  );
}
