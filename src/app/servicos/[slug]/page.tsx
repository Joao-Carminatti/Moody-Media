import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { serviceFaq } from "@/data/content";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: `${s.title}: ${s.for} ${s.result}`, alternates: { canonical: `/servicos/${s.slug}` } } : {};
}
const h2 = "mx-auto mt-6 max-w-3xl text-3xl font-light leading-[1.12] md:text-5xl";
const sec = "mx-auto max-w-5xl px-5 py-24 md:py-32 text-center";
export default async function Service({ params }: P) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  const s = services[idx];
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  const faqs = serviceFaq[s.slug] ?? [];
  const ld = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.intro, provider: { "@type": "ProfessionalService", name: site.name, url: site.url }, areaServed: site.regions };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="glow relative border-b border-white/[0.07]">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-16 text-center md:pb-28 md:pt-24">
          <nav aria-label="Trilha" className="label !text-[0.65rem]"><Link href="/" className="link-line">Início</Link> / Serviços / <span className="text-white">{s.title}</span></nav>
          <Reveal><p className="label mt-12">Serviço 0{idx + 1}</p></Reveal>
          <Reveal delay={0.08}><h1 className="mt-6 text-[clamp(2.3rem,5.8vw,4.5rem)] font-extralight leading-[1.07]">{s.headline} <span className="hl">{s.em}</span></h1></Reveal>
          <Reveal delay={0.16}><p className="mx-auto mt-8 max-w-2xl text-lg font-light text-white/70 md:text-xl">{s.intro}</p></Reveal>
          <Reveal delay={0.24}><div className="mt-11 flex flex-wrap items-center justify-center gap-x-9 gap-y-5"><Cta href="/contato" id={`servico_${s.slug}`}>Solicitar diagnóstico gratuito <span aria-hidden="true">→</span></Cta><Cta href="#entregaveis" id={`servico_${s.slug}_entregaveis`} variant="ghost">Ver entregáveis</Cta></div></Reveal>
          <dl className="mx-auto mt-16 grid max-w-3xl gap-6 border-t border-white/10 pt-8 text-left sm:grid-cols-3">
            <div><dt className="label !text-[0.65rem]">Para quem é</dt><dd className="mt-2 text-sm font-light text-white/85">{s.for}</dd></div>
            <div><dt className="label !text-[0.65rem]">O que você leva</dt><dd className="mt-2 text-sm font-light text-white/85">{s.result}</dd></div>
            <div><dt className="label !text-[0.65rem]">Prazo e investimento</dt><dd className="mt-2 text-sm font-light text-white/85">[DEFINIR]. Apresentados na proposta.</dd></div>
          </dl>
        </div>
      </section>

      <section className={sec}>
        <p className="label">Quando faz sentido</p>
        <h2 className={h2}>Problemas que costumamos <span className="hl">resolver.</span></h2>
        <div className="mt-16 grid gap-10 text-left md:grid-cols-3">
          {s.pains.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}><div className="border-t border-white/15 pt-6"><span className="label">0{i + 1}</span><h3 className="mt-4 text-xl font-normal">{t}</h3><p className="mt-3 font-light text-muted">{d}</p></div></Reveal>
          ))}
        </div>
      </section>

      <section id="entregaveis" className="scroll-mt-16 border-y border-white/[0.07] bg-ink-2/60">
        <div className={sec}>
          <p className="label">Entregáveis</p>
          <h2 className={h2}>O que está <span className="hl">incluído.</span></h2>
          <div className="mt-16 grid gap-x-14 text-left md:grid-cols-2">
            {s.deliverables.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.08}>
                <div className="grid grid-cols-[3rem_1fr] border-t border-white/15 py-7"><span className="label pt-1">0{i + 1}</span><div><h3 className="text-xl font-normal">{t}</h3><p className="mt-2 text-sm font-light text-muted">{d}</p></div></div>
              </Reveal>
            ))}
          </div>
          {s.note && <p className="mx-auto mt-10 max-w-2xl text-sm font-light text-white/65">{s.note}</p>}
        </div>
      </section>

      <section className={sec}>
        <p className="label">Como funciona</p>
        <h2 className={h2}>Do primeiro contato ao <span className="hl">relatório.</span></h2>
        <ol className="mt-16 border-b border-white/10 text-left">
          {s.steps.map(([t, d], i) => (
            <li key={t} className="list-none">
              <Reveal delay={i * 0.04}>
                <div className="grid gap-2 border-t border-white/10 py-7 md:grid-cols-[4rem_14rem_1fr] md:gap-8"><span className="label pt-1">0{i + 1}</span><h3 className="text-xl font-normal">{t}</h3><p className="font-light text-muted">{d}</p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 text-center md:pb-32">
        <p className="label">Como medimos</p>
        <h2 className={h2}>Indicadores no seu <span className="hl">relatório.</span></h2>
        <ul className="mt-14 grid gap-x-12 text-left md:grid-cols-2">
          {s.metrics.map((x) => <li key={x} className="border-t border-white/10 py-5 font-light text-white/85">{x}</li>)}
        </ul>
      </section>

      {faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-5 pb-24 text-center md:pb-32">
          <p className="label">Dúvidas</p><h2 className={h2}>Perguntas sobre <span className="hl">{s.title.toLowerCase()}.</span></h2>
          <div className="mt-12 border-b border-white/10 text-left">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-light [&::-webkit-details-marker]:hidden">{f.q}<span aria-hidden="true" className="text-2xl font-extralight leading-none text-white/50 transition-transform group-open:rotate-45">+</span></summary>
                <p className="pb-6 font-light text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-5 pb-24 text-center md:pb-32">
        <p className="label">Combine</p>
        <h2 className={h2}>Funciona melhor <span className="hl">junto.</span></h2>
        <div className="mt-14 border-b border-white/10 text-left">
          {others.map((o) => (
            <Link key={o.slug} href={`/servicos/${o.slug}`} className="group flex items-center justify-between gap-6 border-t border-white/10 py-8 transition-colors hover:bg-white/[0.025] md:px-3">
              <div><h3 className="text-2xl font-light">{o.title}</h3><p className="mt-1 text-sm font-light text-muted">{o.for}</p></div>
              <span aria-hidden="true" className="text-2xl font-extralight text-white/50 transition-transform group-hover:translate-x-2 group-hover:text-white">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="glow relative border-t border-white/[0.07] px-5 py-28 text-center md:py-36">
        <p className="label">Próximo passo</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extralight leading-[1.06] md:text-6xl">Vamos conversar sobre <span className="hl">{s.title.toLowerCase()}?</span></h2>
        <p className="mx-auto mt-7 max-w-xl text-lg font-light text-muted">O diagnóstico é gratuito e sem compromisso. Você sai com um plano claro, mesmo que decida não contratar.</p>
        <div className="mt-11"><Cta href="/contato" id={`servico_${s.slug}_final`}>Solicitar diagnóstico gratuito <span aria-hidden="true">→</span></Cta></div>
      </section>
    </main>
  );
}
