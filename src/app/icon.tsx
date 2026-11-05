import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#14151a", color: "#c9d2e6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>M</div>, size);
}
