# BRANDING — o que alterar quando a marca estiver definida
1. **Nome, contatos, sócios, CNPJ, redes:** `src/config/site.ts`
2. **Paleta (PROVISÓRIA: grafite azulado + branco, com um único tom de destaque):** bloco `@theme` em `src/app/globals.css` (`--color-ink`, `--color-surface`, `--color-accent`, `--color-accent-light`) e `--glow-rgb` no `:root` (a palavra destacada dos títulos usa `.hl`). Valide contraste AA (≥ 4.5:1 para texto).
3. **Logo:** `src/components/Logo.tsx` (troque o texto por um `<svg>` inline ≤ 10 KB).
4. **Fontes:** `src/app/layout.tsx` (next/font): Manrope (títulos e texto) e IBM Plex Mono (rótulos).
5. **Serviços (textos das páginas), processo, FAQ:** `src/data/services.ts`. A primeira tela está em `src/components/Hero.tsx`.
6. **Favicon e OG:** substitua `src/app/icon.png` e `src/app/opengraph-image.png` (1200×630).

## Favicon e OG (atualizado)
Gerados por código: `src/app/icon.tsx` (letra/cores) e `src/app/opengraph-image.tsx` (nome + tagline do config). Para usar arquivos prontos, apague esses dois e coloque `icon.png` e `opengraph-image.png` (1200×630) em `src/app/`.

## Portfólio
`src/data/content.ts` → `cases`. Cada item gera card na home, listagem em `/portfolio` e página em `/portfolio/<slug>`. Prints em `public/portfolio/` (16:10). Troque os 3 exemplos (`demo: true`) pelos projetos reais; `results` só com números verificáveis.

## Dados reais
`src/data/content.ts`: `stats`, `cases` e `testimonials` vazios = seções ocultas. Preencha só com dados reais. Cases de demonstração devem ter `demo: true`.
