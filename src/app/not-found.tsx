import Link from "next/link";
export default function NotFound() {
  return (
    <main className="glow grid min-h-[70svh] place-items-center px-5 text-center">
      <div>
        <p className="label">Erro 404</p>
        <h1 className="mt-5 text-4xl font-light md:text-6xl">Página <span className="hl">não encontrada.</span></h1>
        <Link href="/" className="btn btn-primary mt-9">Voltar ao início</Link>
      </div>
    </main>
  );
}
