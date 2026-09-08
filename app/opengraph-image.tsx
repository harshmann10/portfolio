import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Harsh Mann — Full-Stack AI Engineer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: 60,
          borderLeft: "2px solid #4f46e5",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#818cf8",
            fontSize: 18,
            letterSpacing: 3,
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 800, color: "#fafafa" }}>
            Harsh Mann
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#818cf8" }}>
            Full-Stack AI Engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#71717a",
            fontSize: 22,
          }}
        >
          harshmann.vercel.app · RAG · Vector Search · MERN
        </div>
      </div>
    ),
    { ...size }
  );
}
