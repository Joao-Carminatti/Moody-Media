import Image from "next/image";
import type { Case } from "@/data/content";
// Moldura de navegador com o print do projeto; sem imagem, mostra um esqueleto neutro.
export function CaseVisual({ c, priority = false }: { c: Pick<Case, "title" | "image" | "demo">; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-card border border-white/10 bg-ink-2">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
        <i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/20" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {c.image ? (
          <Image src={c.image} alt={`Print do projeto ${c.title}`} fill priority={priority} sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 grid place-items-center p-8">
            <div className="w-full max-w-xs space-y-3">
              <i className="block h-2 w-1/3 rounded-full bg-white/15" />
              <i className="block h-5 w-full rounded bg-white/10" /><i className="block h-5 w-4/5 rounded bg-white/10" />
              <i className="mt-5 block h-8 w-28 rounded-full bg-white/20" />
              <div className="grid grid-cols-3 gap-2 pt-5"><i className="h-14 rounded bg-white/[0.07]" /><i className="h-14 rounded bg-white/[0.07]" /><i className="h-14 rounded bg-white/[0.07]" /></div>
            </div>
          </div>
        )}
        {c.demo && <span className="label absolute right-3 top-3 rounded-full border border-white/15 bg-ink/80 px-3 py-1 !text-[0.6rem] backdrop-blur">Demonstração</span>}
      </div>
    </div>
  );
}
