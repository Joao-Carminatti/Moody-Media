import Link from "next/link";
import { services } from "@/data/services";
import type { Case } from "@/data/content";
import { CaseVisual } from "./CaseVisual";
export function CaseCard({ c }: { c: Case }) {
  const tags = c.services.map((s) => services.find((x) => x.slug === s)?.title).filter(Boolean);
  return (
    <Link href={`/portfolio/${c.slug}`} className="group block text-left">
      <CaseVisual c={c} />
      <p className="label mt-6 !text-[0.65rem]">{c.segment}{c.year && ` · ${c.year}`}</p>
      <h3 className="mt-3 flex items-center justify-between gap-4 text-2xl font-light">{c.title}<span aria-hidden="true" className="text-xl font-extralight text-white/40 transition-transform group-hover:translate-x-1.5 group-hover:text-white">→</span></h3>
      <p className="mt-2 text-sm font-light text-muted">{c.summary}</p>
      <p className="mt-4 flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-white/70">{t}</span>)}</p>
    </Link>
  );
}
