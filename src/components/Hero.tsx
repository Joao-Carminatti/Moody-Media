import { site } from "@/config/site";
import { Cta } from "./Cta";
const dots = [["14%", "12%", "0s"], ["22%", "78%", "1.2s"], ["38%", "6%", "2.4s"], ["52%", "90%", "3.1s"], ["66%", "18%", "4.2s"], ["74%", "70%", "0.6s"], ["84%", "34%", "2s"], ["30%", "50%", "3.6s"], ["90%", "86%", "1.8s"]];
const words = ["Medir", "Otimizar", "Escalar"];
const d = (n: number) => ({ "--d": `${n}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="glow absolute inset-0 -z-10" />
      <div aria-hidden="true" className="drift absolute left-1/2 top-1/3 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />
      {dots.map(([t, l, dl]) => <i key={t + l} aria-hidden="true" style={{ top: t, left: l, "--d": dl } as React.CSSProperties} className="twinkle absolute -z-10 size-[3px] rounded-full bg-white" />)}

      <div className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center">
        <p className="rise text-sm font-semibold uppercase tracking-[0.4em] md:text-base" style={d(0.1)}>{site.name}</p>
        <p className="rise label mt-4 !text-[0.65rem] md:!text-xs" style={d(0.25)}>Social media · Tráfego pago · Websites</p>
        <div className="rise hair mt-7" style={d(0.4)} aria-hidden="true" />

        <h1 className="rise mt-12 text-[clamp(2.7rem,7.4vw,5.75rem)] font-extralight leading-[1.04]" style={d(0.5)}>
          Crescimento não é <span className="block hl">sorte.</span>
        </h1>
        <p className="rise mt-9 max-w-2xl text-lg font-light text-white/75 md:text-2xl" style={d(0.8)}>
          É método aplicado a presença, anúncios e site: planejado, medido e ajustado todo mês.
        </p>

        <div className="rise mt-12 flex flex-wrap items-center justify-center gap-x-9 gap-y-5" style={d(1.0)}>
          <Cta href="/contato" id="hero_diagnostico">Agendar diagnóstico gratuito <span aria-hidden="true">→</span></Cta>
          <Cta href="#metodo" id="hero_metodo" variant="ghost">Conhecer o método</Cta>
        </div>
        <p className="rise label mt-8 !text-[0.65rem] !tracking-[0.2em] md:!text-xs" style={d(1.15)}>Gratuito · sem compromisso · direto com os sócios</p>

        <div className="rise mt-14 flex flex-col items-center gap-5" style={d(1.3)}>
          <div className="hair" aria-hidden="true" />
          <p className="label !text-[0.7rem] md:!text-sm">
            <span className="sr-only">Medir, otimizar, escalar.</span>
            <span aria-hidden="true">{words.map((w, i) => <span key={w} className="cycle" style={d(i * 3)}>{w}{i < 2 ? ", " : "."}{" "}</span>)}</span>
          </p>
          <div className="flex gap-3" aria-hidden="true">{words.map((w, i) => <i key={w} className="cycle-dot size-1.5 rounded-full bg-[#3a3e4c]" style={d(i * 3)} />)}</div>
        </div>
      </div>
    </section>
  );
}
