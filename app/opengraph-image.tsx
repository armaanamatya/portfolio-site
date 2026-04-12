import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(180deg, rgba(116,255,228,0.10) 0%, rgba(4,7,8,0.92) 18%, rgba(2,3,4,1) 100%)",
          color: "#f4f7f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(132,255,231,0.8)",
          }}
        >
          <span>Applied AI Research + Systems</span>
          <span>Armaan Amatya</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
            I build and study AI systems at the edge of model behavior and real-world scale.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.5, color: "rgba(244,247,246,0.7)" }}>
            Multimodal systems. Long-horizon agent evaluation. Product-grade infrastructure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 26,
            color: "rgba(244,247,246,0.68)",
          }}
        >
          <span>30% lower latency</span>
          <span>1,000+ students served</span>
          <span>98% precision</span>
        </div>
      </div>
    ),
    size,
  );
}
