import { site } from "@/config/site";
// Troque por <svg> do logo quando existir.
export function Logo() {
  return <span className="text-[0.8rem] font-semibold uppercase tracking-[0.32em]">{site.name}</span>;
}
