import Link from "next/link";
import { site, waLink } from "@/config/site";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./WhatsAppLink";
const nav: [string, string][] = [...services.map((s): [string, string] => [`/servicos/${s.slug}`, s.title]), ["/portfolio", "Portfólio"], ["/sobre", "Sobre"]];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/80 text-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" aria-label="Início"><Logo /></Link>
        <nav aria-label="Principal" className="hidden items-center gap-9 text-sm font-light text-white/70 md:flex">
          {nav.map(([h, l]) => <Link key={h} href={h} className="link-line py-1 transition-colors hover:text-white">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contato" className="hidden rounded-full border border-white/25 px-5 py-2 text-sm transition-colors hover:border-white hover:bg-white/5 md:inline-block">Diagnóstico gratuito</Link>
          <details className="group relative md:hidden">
            <summary aria-label="Abrir menu" className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="relative block h-3 w-4"><i className="absolute inset-x-0 top-0 h-px bg-white transition-transform group-open:translate-y-1.5 group-open:rotate-45" /><i className="absolute inset-x-0 bottom-0 h-px bg-white transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" /></span>
            </summary>
            <nav aria-label="Menu mobile" className="fadeup absolute right-0 top-12 grid w-64 gap-1 rounded-card border border-white/10 bg-ink-2 p-3 shadow-2xl">
              {nav.map(([h, l]) => <Link key={h} href={h} className="rounded-lg px-3 py-2.5 text-white/80 hover:bg-white/5 hover:text-white">{l}</Link>)}
              <Link href="/contato" className="btn btn-primary mt-2 !py-2.5 text-sm">Diagnóstico gratuito</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Logo /><p className="mt-5 max-w-xs text-sm font-light text-muted">{site.tagline}</p></div>
          <div>
            <p className="label">Serviços</p>
            <ul className="mt-5 grid gap-2.5 text-sm font-light text-white/80">{services.map((s) => <li key={s.slug}><Link href={`/servicos/${s.slug}`} className="link-line">{s.title}</Link></li>)}</ul>
          </div>
          <div>
            <p className="label">Agência</p>
            <ul className="mt-5 grid gap-2.5 text-sm font-light text-white/80">
              <li><Link href="/portfolio" className="link-line">Portfólio</Link></li>
              <li><Link href="/sobre" className="link-line">Sobre</Link></li>
              <li><Link href="/contato" className="link-line">Contato</Link></li>
              <li><Link href="/politica-de-privacidade" className="link-line">Privacidade</Link></li>
              <li><Link href="/termos" className="link-line">Termos</Link></li>
            </ul>
          </div>
          <div>
            <p className="label">Contato</p>
            <ul className="mt-5 grid gap-2.5 text-sm font-light text-white/80">
              <li><WhatsAppLink href={waLink("Olá!")} className="link-line">WhatsApp</WhatsAppLink></li>
              <li><a className="link-line break-all" href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.social.instagram && <li><a className="link-line" href={site.social.instagram}>Instagram</a></li>}
              {site.social.linkedin && <li><a className="link-line" href={site.social.linkedin}>LinkedIn</a></li>}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] pt-6 text-xs text-white/45">
          <p>© {new Date().getFullYear()} {site.name}{site.cnpj && ` · CNPJ ${site.cnpj}`}</p>
          <p>Atendimento remoto · {site.regions}</p>
        </div>
      </div>
    </footer>
  );
}
