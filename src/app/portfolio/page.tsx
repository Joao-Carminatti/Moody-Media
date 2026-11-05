import type { Metadata } from "next";
import { cases } from "@/data/content";
import { PageHeader } from "@/components/PageHeader";
import { CaseCard } from "@/components/CaseCard";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Portfólio", description: "Projetos de social media, tráfego pago e websites desenvolvidos pela agência.", alternates: { canonical: "/portfolio" } };
export default function Portfolio() {
  const onlyDemo = cases.length > 0 && cases.every((c) => c.demo);
  return (
    <main>
      <PageHeader eyebrow="Portfólio" title="Projetos que saem" em="do papel." lead={onlyDemo ? "Exemplos ilustrativos do nosso formato de entrega. Os primeiros projetos reais entram aqui assim que forem publicados." : "Uma seleção do nosso trabalho em social media, tráfego pago e websites."} />
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        {cases.length > 0 ? (
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {cases.map((c, i) => <Reveal key={c.slug} delay={(i % 2) * 0.08}><CaseCard c={c} /></Reveal>)}
          </div>
        ) : (
          <p className="mx-auto max-w-md text-center font-light text-muted">Estamos preparando nossos primeiros cases. Fale com a gente e seja um deles.</p>
        )}
      </section>
      <section className="glow border-t border-white/[0.07] px-5 py-28 text-center">
        <p className="label">Seu projeto</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extralight leading-[1.08] md:text-6xl">O próximo case pode ser <span className="hl">o seu.</span></h2>
        <div className="mt-11"><Cta href="/contato" id="portfolio_cta">Agendar diagnóstico gratuito <span aria-hidden="true">→</span></Cta></div>
      </section>
    </main>
  );
}
