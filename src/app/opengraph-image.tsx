import { ImageResponse } from "next/og";
import { site } from "@/config/site";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#14151a", color: "#fff" }}>
      <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
      <div style={{ fontSize: 36, marginTop: 24, color: "#c9d2e6" }}>{site.tagline}</div>
    </div>), size);
}
