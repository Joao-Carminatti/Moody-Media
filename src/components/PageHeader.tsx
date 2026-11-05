import { Reveal } from "./Reveal";
export function PageHeader({ eyebrow, title, em, lead }: { eyebrow: string; title: string; em?: string; lead?: string }) {
  return (
    <section className="glow relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <Reveal><p className="label">{eyebrow}</p></Reveal>
        <Reveal delay={0.08}><h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4rem)] font-extralight leading-[1.08]">{title}{em && <> <span className="hl">{em}</span></>}</h1></Reveal>
        {lead && <Reveal delay={0.16}><p className="mx-auto mt-7 max-w-2xl text-lg font-light text-muted">{lead}</p></Reveal>}
      </div>
    </section>
  );
}
