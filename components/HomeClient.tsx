"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SECTIONS, data } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import SectionContent from "@/components/SectionContent";
import ClientQuestionnaire from "@/components/ClientQuestionnaire";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  const initialSection = (SECTIONS.includes(sectionParam as typeof SECTIONS[number]) ? sectionParam : SECTIONS[0]) as typeof SECTIONS[number];

  const [active, setActive] = useState<(typeof SECTIONS)[number]>(initialSection);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleSelect = (section: (typeof SECTIONS)[number]) => {
    setActive(section);
    setMenuOpen(false);
  };

  const handleTierSelect = (tier: string) => {
    setSelectedTier(tier);
    setActive("Client Questionnaire");
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="mobile-menu-bar" style={{ display: "none", borderBottom: "1px solid #1e1c1a" }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 24px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#d0c8b8",
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>{active}</span>
          <span style={{ color: "#c8a96e", fontSize: "16px" }}>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Body */}
      <div className="main-layout" style={{ display: "flex", flex: 1, position: "relative" }}>
        <Sidebar
          sections={SECTIONS}
          active={active}
          menuOpen={menuOpen}
          data={data}
          onSelect={handleSelect}
        />

        <main className="main-content" style={{ flex: 1, padding: "36px 48px", overflowY: "auto", maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ fontSize: "20px", color: "#c8a96e" }}>{data[active].icon}</span>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "400", color: "#e8e0d0", letterSpacing: "-0.01em" }}>
              {active}
            </h2>
          </div>
          {active === "Client Questionnaire" ? (
            <ClientQuestionnaire selectedTier={selectedTier ?? undefined} />
          ) : (
            <SectionContent content={data[active].content} onTierSelect={handleTierSelect} />
          )}
        </main>
      </div>
    </>
  );
}
