import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header, Footer } from "@/components/Chrome";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Analytics } from "@/components/Analytics";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#14151a" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Agência de marketing digital`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "pt_BR", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${manrope.variable} ${mono.variable}`}><body><ScrollProgress /><Header />{children}<Footer /><Analytics /></body></html>;
}
