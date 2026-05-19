import type { ContentBlock, TierItem } from "@/lib/types";
import TiersBlock from "./TiersBlock";
import SocialLinks from "./SocialLinks";

interface SectionContentProps {
  content: ContentBlock[];
  onTierSelect?: (tier: string) => void;
}

export default function SectionContent({ content, onTierSelect }: SectionContentProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ color: "#b0a898", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
            {block.text}
          </p>
        );

        if (block.type === "highlight") return (
          <div key={i} style={{
            borderLeft: "3px solid #c8a96e",
            paddingLeft: "16px",
            color: "#c8a96e",
            fontFamily: "'Georgia', serif",
            fontSize: "14px",
            fontStyle: "italic",
            lineHeight: "1.7",
          }}>
            {block.text}
          </div>
        );

        if (block.type === "section-title") return (
          <div key={i} style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "#a8a397",
            textTransform: "uppercase",
            borderBottom: "1px solid #1e1c1a",
            paddingBottom: "6px",
            marginTop: "8px",
          }}>
            {block.text}
          </div>
        );

        if (block.type === "pillars") return (
          <div key={i} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {block.items?.map((p: any, j) => (
              <div key={j} style={{
                flex: "1", minWidth: "160px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid #2a2520",
                borderRadius: "3px",
                padding: "16px",
              }}>
                {/* UPDATED: This label now uses the specific color from your data.ts file! 
                  If no color is provided, it falls back to the default gold.
                */}
                <div style={{ 
                  fontFamily: "'Courier New', monospace", 
                  fontSize: "11px", 
                  color: p.color || "#c8a96e", 
                  marginBottom: "4px" 
                }}>
                  {p.label}
                </div>
                <div style={{ fontSize: "12px", color: "#7a7268", lineHeight: "1.6" }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        );

        if (block.type === "table" && block.headers && block.rows) return (
          <div key={i} style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
              <thead>
                <tr>
                  {block.headers.map((h, j) => (
                    <th key={j} style={{
                      textAlign: "left", padding: "8px 12px",
                      fontFamily: "'Courier New', monospace",
                      fontSize: "10px", letterSpacing: "0.1em",
                      color: "#a8a397", textTransform: "uppercase",
                      borderBottom: "1px solid #2a2520",
                      background: "rgba(255,255,255,0.01)",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} style={{ borderBottom: "1px solid #1a1815" }}>
                    {row.map((cell, k) => (
                      <td key={k} style={{
                        padding: "10px 12px",
                        color: k === 0 ? "#d0c8b8" : "#7a7268",
                        verticalAlign: "top",
                        lineHeight: "1.5",
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

        if (block.type === "tiers") return (
          <TiersBlock key={i} items={block.items as TierItem[]} onTierSelect={onTierSelect} />
        );

        if (block.type === "simple-list") return (
          <ul key={i} style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {block.items?.map((item: any, j) => (
              <li key={j} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#8a8278" }}>
                <span style={{ color: "#3a3530", flexShrink: 0, marginTop: "1px" }}>◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

        if (block.type === "profile") return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {block.items?.map((item: any, j) => (
              <div key={j} style={{
                display: "grid", gridTemplateColumns: "160px 1fr",
                gap: "16px", padding: "10px 0",
                borderBottom: "1px solid #1a1815",
              }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#a8a397", textTransform: "uppercase" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "13px", color: "#8a8278", lineHeight: "1.6" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        );

        if (block.type === "checklist") return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {block.items?.map((item: any, j) => (
              <div key={j} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#8a8278" }}>
                <span style={{
                  color: "#2a4a2a",
                  border: "1px solid #2a4a2a",
                  width: "14px", height: "14px",
                  borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );

        if (block.type === "social-links") return (
          <SocialLinks key={i} />
        );

        return null;
      })}
    </div>
  );
}