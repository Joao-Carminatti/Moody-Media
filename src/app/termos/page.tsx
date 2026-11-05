import type { Metadata } from "next";
import { legal } from "@/data/content";
import { PageHeader } from "@/components/PageHeader";
const d = legal["termos"];
export const metadata: Metadata = { title: d.title, alternates: { canonical: "/termos" } };
export default function Page() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title={d.title} lead="Texto-base: revisar com assessoria jurídica antes de publicar." />
      <div className="mx-auto max-w-3xl px-5 py-16">
        {d.sections.map(([t, x]) => <section key={t} className="border-t border-white/10 py-8"><h2 className="text-xl font-light">{t}</h2><p className="mt-2 text-muted">{x}</p></section>)}
      </div>
    </main>
  );
}
