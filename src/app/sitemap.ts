import { site } from "@/config/site";
import { services } from "@/data/services";
import { cases } from "@/data/content";
export default function sitemap() {
  const paths = ["", "/sobre", "/portfolio", "/contato", "/politica-de-privacidade", "/termos", ...services.map((s) => `/servicos/${s.slug}`), ...cases.map((c) => `/portfolio/${c.slug}`)];
  return paths.map((p) => ({ url: site.url + p, lastModified: new Date() }));
}
