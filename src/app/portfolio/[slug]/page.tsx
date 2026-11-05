import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/data/content";
import { services } from "@/data/services";
import { CaseVisual } from "@/components/CaseVisual";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
export const dynamicParams = false;
export const generateStaticParams = () => cases.map((c) => ({ slug: c.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return c ? { title: c.title, description: c.summary, alternates: { canonical: `/portfolio/${c.slug}` } } : {};
}
export default async function Case({ params }: P) {
  const { slug } = await params;
  const idx = cases.findIndex((x) => x.slug === slug);
  const c = cases[idx];
  if (!c) notFound();
  const next = cases[(idx + 1) % cases.length];
  const used = c.services.map((s) => services.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  return (
    <main>
      <section className="glow border-b border-white/[0.07]">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center md:pt-24">
          <nav aria-label="Trilha" className="label !text-[0.65rem]"><Link href="/" className="link-line">Início</Link> / <Link href="/portfolio" className="link-line">Portfólio</Link></nav>
          <Reveal><p className="label mt-12">{c.demo ? "Demonstração" : c.segment}{c.year && ` · ${c.year}`}</p></Reveal>
          <Reveal delay={0.08}><h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.25rem)] font-extralight leading-[1.08]">{c.title}</h1></Reveal>
          <Reveal delay={0.16}><p className="mx-auto mt-7 max-w-2xl text-lg font-light text-white/70">{c.summary}</p></Reveal>
        </div>
        <div className="mx-auto max-w-5xl px-5 pb-20"><Reveal delay={0.2}><CaseVisual c={c} priority /></Reveal></div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <dl className="grid gap-8 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div><dt className="label !text-[0.65rem]">Segmento</dt><dd className="mt-2 font-light">{c.segment}</dd></div>
          <div><dt className="label !text-[0.65rem]">Serviços</dt><dd className="mt-2 font-light">{used.map((s, i) => <span key={s.slug}>{i > 0 && ", "}<Link href={`/servicos/${s.slug}`} className="link-line">{s.title}</Link></span>)}</dd></div>
          {c.year && <div><dt className="label !text-[0.65rem]">Ano</dt><dd className="mt-2 font-light">{c.year}</dd></div>}
          {c.url && <div><dt className="label !text-[0.65rem]">Projeto no ar</dt><dd className="mt-2 font-light"><a href={c.url} target="_blank" rel="noopener noreferrer" className="link-line">Visitar site ↗</a></dd></div>}
        </dl>

        {(c.challenge || c.solution) && (
          <div className="mt-20 grid gap-14 md:grid-cols-2">
            {c.challenge && <div><p className="label">O desafio</p><p className="mt-5 text-lg font-light text-white/80">{c.challenge}</p></div>}
            {c.solution && <div><p className="label">A solução</p><p className="mt-5 text-lg font-light text-white/80">{c.solution}</p></div>}
          </div>
        )}

        {c.results && c.results.length > 0 && (
          <div className="mt-24">
            <p className="label text-center">Resultados</p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {c.results.map(([l, v]) => <li key={l} className="border-t border-white/15 pt-6 text-center"><p className="text-5xl font-extralight hl">{v}</p><p className="mt-3 text-sm font-light text-muted">{l}</p></li>)}
            </ul>
          </div>
        )}
      </section>

      {cases.length > 1 && (
        <Link href={`/portfolio/${next.slug}`} className="group block border-t border-white/[0.07] px-5 py-16 text-center transition-colors hover:bg-white/[0.02]">
          <p className="label">Próximo projeto</p>
          <p className="mt-4 text-3xl font-light md:text-4xl">{next.title} <span aria-hidden="true" className="inline-block text-white/40 transition-transform group-hover:translate-x-2 group-hover:text-white">→</span></p>
        </Link>
      )}

      <section className="glow border-t border-white/[0.07] px-5 py-28 text-center">
        <p className="label">Seu projeto</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extralight leading-[1.08] md:text-6xl">Vamos construir o <span className="hl">próximo?</span></h2>
        <div className="mt-11"><Cta href="/contato" id={`case_${c.slug}`}>Agendar diagnóstico gratuito <span aria-hidden="true">→</span></Cta></div>
      </section>
    </main>
  );
}
