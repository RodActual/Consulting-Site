import type { TierItem } from "@/lib/types";

interface TierCardProps {
  item: TierItem;
  selected: boolean;
  onSelect: () => void;
}

export default function TierCard({ item, selected, onSelect }: TierCardProps) {
  return (
    <div style={{
      border: selected ? "2px solid #c8a96e" : item.highlight ? "2px solid #c8a96e" : "1px solid #2a2a2a",
      borderRadius: "4px",
      padding: "20px",
      background: selected
        ? "rgba(200,169,110,0.10)"
        : item.highlight
          ? "rgba(200,169,110,0.06)"
          : "rgba(255,255,255,0.02)",
      position: "relative",
      flex: "1",
      minWidth: "200px",
      transition: "all 0.15s ease",
    }}>
      {item.highlight && !selected && (
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
      {selected && (
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
        }}>SELECTED</div>
      )}
      <div style={{ fontFamily: "'Georgia', serif", fontSize: "16px", color: "#e8e0d0", marginBottom: "8px" }}>
        {item.name}
      </div>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "22px", color: "#c8a96e", marginBottom: "16px" }}>
        {item.price}
      </div>
      {item.features.map((f, i) => (
        <div key={i} style={{ fontSize: "12px", color: "#9a9080", marginBottom: "5px", display: "flex", alignItems: "flex-start" }}>
          <span style={{ color: "#c8a96e", flexShrink: 0, marginRight: "8px" }}>—</span>
          <span>{f}</span>
        </div>
      ))}
      {item.note && (
        <div style={{ marginTop: "14px", fontSize: "11px", color: "#5a5248", fontStyle: "italic" }}>
          {item.note}
        </div>
      )}
      <button
        onClick={onSelect}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "9px 0",
          background: selected ? "#c8a96e" : "transparent",
          border: "1px solid #c8a96e",
          borderRadius: "3px",
          color: selected ? "#0a0908" : "#c8a96e",
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
      >
        {selected ? "✓ Selected" : "Select This Plan"}
      </button>
    </div>
  );
}