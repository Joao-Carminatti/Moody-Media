import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { why } from "@/data/content";
export const metadata: Metadata = { title: "Sobre", description: "Conheça os sócios da agência de marketing digital e como trabalhamos.", alternates: { canonical: "/sobre" } };
export default function Sobre() {
  return (
    <main>
      <PageHeader eyebrow="Sobre" title={`Quem está por trás da ${site.name}`} em="e como trabalhamos." lead={`Agência 100% remota, atendendo empresas do ${site.regions}. Somos uma agência nova e priorizamos método, transparência e atendimento direto.`} />
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <p className="label">Sócios</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {site.partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="h-full rounded-card border border-white/10 p-8">
                <div aria-hidden="true" className="grid size-16 place-items-center rounded-full border border-white/15 font-display text-xl text-white/70">{p.name.split(" ").filter((_, k, a) => k === 0 || k === a.length - 1).map((n) => n[0]).join("")}</div>
                <h2 className="mt-6 text-2xl font-light">{p.name}</h2>
                <p className="mt-1 text-sm text-muted">{p.role}</p>
                <p className="mt-4 text-white/75">{p.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10 bg-ink-2 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <p className="label">Como pensamos</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-[1.1] md:text-5xl">Princípios que <span className="hl">guiam o trabalho.</span></h2>
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {why.map(([t, d], i) => <div key={t} className="border-t border-white/15 pt-6"><span className="font-display text-sm text-white/40">0{i + 1}</span><h3 className="mt-3 text-xl font-normal">{t}</h3><p className="mt-2 text-muted">{d}</p></div>)}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 text-center"><Cta href="/contato" id="sobre_cta">Agendar diagnóstico gratuito →</Cta></section>
    </main>
  );
}
