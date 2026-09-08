import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project case study — Harsh Mann";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const name = project?.name ?? "Case Study";
  const tagline = project?.caseStudy?.tagline ?? project?.description ?? "";
  const tech = project ? project.tech.join(" · ") : "";

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
          HARSH MANN — FULL-STACK AI ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#fafafa" }}>
            {name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: 1000,
            }}
          >
            {tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#71717a",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex" }}>harshmann.vercel.app</div>
          <div style={{ display: "flex" }}>{tech}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
