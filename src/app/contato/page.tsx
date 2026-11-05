import type { Metadata } from "next";
import { site, waLink } from "@/config/site";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PageHeader } from "@/components/PageHeader";
export const metadata: Metadata = { title: "Contato", description: "Solicite um diagnóstico gratuito de marketing digital.", alternates: { canonical: "/contato" } };
export default function Contato() {
  return (
    <main>
      <PageHeader eyebrow="Contato" title="Solicite seu diagnóstico" em="gratuito." lead="Conte um pouco sobre o seu negócio. Respondemos com os próximos passos, sem compromisso." />
      <section className="mx-auto grid max-w-5xl gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="label">Prefere falar direto?</p>
          <ul className="mt-8 grid gap-6 text-lg">
            <li><span className="block text-sm text-muted">WhatsApp</span><WhatsAppLink href={waLink("Olá! Quero um diagnóstico gratuito.")} className="link-line">Chamar agora →</WhatsAppLink></li>
            <li><span className="block text-sm text-muted">E-mail</span><a className="link-line break-all" href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.social.instagram && <li><span className="block text-sm text-muted">Instagram</span><a className="link-line" href={site.social.instagram}>Instagram</a></li>}
            {site.social.linkedin && <li><span className="block text-sm text-muted">LinkedIn</span><a className="link-line" href={site.social.linkedin}>LinkedIn</a></li>}
          </ul>
          <p className="mt-10 max-w-sm text-sm text-muted">Atendimento remoto para {site.regions}.</p>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
