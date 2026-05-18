import Link from "next/link";
import type { TierItem } from "@/lib/types";

interface TierCardProps {
  item: TierItem & { isFull?: boolean };
  onSelect: () => void;
  learnMoreUrl?: string;
}

export default function TierCard({ item, onSelect, learnMoreUrl }: TierCardProps) {
  const isFull = item.isFull;

  return (
    <div style={{
      border: isFull ? "1px solid #1a1a1a" : item.highlight ? "2px solid #c8a96e" : "1px solid #2a2a2a",
      borderRadius: "4px",
      padding: "20px",
      background: item.highlight ? "rgba(200,169,110,0.06)" : "rgba(255,255,255,0.02)",
      position: "relative",
      flex: "1",
      minWidth: "200px",
      transition: "all 0.15s ease",
      filter: isFull ? "grayscale(100%) brightness(0.6)" : "none",
      opacity: isFull ? 0.5 : 1,
      pointerEvents: isFull ? "none" : "auto",
    }}>

      {isFull ? (
        <div style={{
          position: "absolute",
          top: "-11px",
          left: "20px",
          background: "#333",
          color: "#fff",
          fontSize: "10px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          padding: "2px 10px",
          fontFamily: "'Courier New', monospace",
          border: "1px solid #444",
        }}>AT CAPACITY</div>
      ) : item.highlight && (
        <div style={{
          position: "absolute",
          top: "-11px",
          left: "20px",
          background: "#c8a96e",
          color: "#0a0a0a",
          fontSize: "10px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          padding: "2px 10px",
          fontFamily: "'Courier New', monospace",
        }}>MOST POPULAR</div>
      )}

      <div style={{ fontFamily: "'Georgia', serif", fontSize: "16px", color: "#e8e0d0", marginBottom: "8px" }}>
        {item.name}
      </div>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "22px", color: isFull ? "#555" : "#c8a96e", marginBottom: "16px" }}>
        {isFull ? "CLOSED" : item.price}
      </div>

      {item.features.map((f, i) => (
        <div key={i} style={{ fontSize: "12px", color: "#9a9080", marginBottom: "5px", display: "flex", alignItems: "flex-start" }}>
          <span style={{ color: isFull ? "#444" : "#c8a96e", flexShrink: 0, marginRight: "8px" }}>—</span>
          <span>{f}</span>
        </div>
      ))}

      {item.note && (
        <div style={{ marginTop: "14px", fontSize: "11px", color: "#5a5248", fontStyle: "italic" }}>
          {item.note}
        </div>
      )}

      {learnMoreUrl && (
        <Link href={learnMoreUrl} style={{
          display: "block",
          marginTop: "12px",
          fontSize: "10px",
          color: "#5a5248",
          textDecoration: "none",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.1em",
          textAlign: "center",
          transition: "color 0.15s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.color = "#c8a96e"}
        onMouseOut={(e) => e.currentTarget.style.color = "#5a5248"}
        >
          Learn more →
        </Link>
      )}

      <button
        disabled={isFull}
        onClick={onSelect}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "9px 0",
          background: "transparent",
          border: isFull ? "1px solid #333" : "1px solid #c8a96e",
          borderRadius: "3px",
          color: isFull ? "#444" : "#c8a96e",
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: isFull ? "not-allowed" : "pointer",
          transition: "all 0.15s ease",
        }}
      >
        {isFull ? "Join Waitlist" : "Get Started →"}
      </button>
    </div>
  );
}
