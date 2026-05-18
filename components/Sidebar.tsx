"use client";

import type { OperatingSystemData } from "@/lib/types";

interface SidebarProps {
  sections: string[];
  active: string;
  menuOpen: boolean;
  data: OperatingSystemData;
  onSelect: (section: string) => void;
}

export default function Sidebar({ sections, active, menuOpen, data, onSelect }: SidebarProps) {
  return (
    <div
      className={`sidebar ${menuOpen ? "" : "closed"}`}
      style={{
        width: "220px",
        flexShrink: 0,
        borderRight: "1px solid #1e1c1a",
        padding: "24px 0",
        background: "rgba(255,255,255,0.005)",
      }}
    >
      {sections.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          aria-selected={active === s}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            padding: "10px 24px",
            background: active === s ? "rgba(200,169,110,0.08)" : "transparent",
            border: "none",
            borderLeft: active === s ? "2px solid #c8a96e" : "2px solid transparent",
            cursor: "pointer",
            textAlign: "left",
            transition: "all 0.15s ease",
          }}
        >
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            color: active === s ? "#c8a96e" : "#5a5248",
          }}>
            {data[s].icon}
          </span>
          <span style={{
            fontSize: "12px",
            color: active === s ? "#d0c8b8" : "#5a5248",
            fontFamily: "'Georgia', serif",
          }}>
            {s}
          </span>
        </button>
      ))}
    </div>
  );
}