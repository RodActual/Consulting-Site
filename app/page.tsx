"use client";

import { useState } from "react";
import { SECTIONS, data } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import SectionContent from "@/components/SectionContent";
import ClientQuestionnaire from "@/components/ClientQuestionnaire";
import { Logo } from "@/components/Logo";

export default function BusinessPlan() {
  const [active, setActive] = useState<(typeof SECTIONS)[number]>(SECTIONS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (section: (typeof SECTIONS)[number]) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0908",
      color: "#e8e0d0",
      fontFamily: "'Georgia', serif",
      display: "flex",
      flexDirection: "column",
    }}>

{/* Header */}
<div style={{
  borderBottom: "1px solid #1e1c1a",
  padding: "32px 40px",
  background: "rgba(255,255,255,0.01)",
}}>
  
  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}> 
    <Logo style={{ width: "48px", height: "48px", minWidth: "48px", flexShrink: 0 }} />
    
    <div>
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "10px",
        letterSpacing: "0.2em",
        color: "#ccc8c8",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}>
        Digital Operations Architecture
      </div>

      <h1 style={{
        margin: 0,
        fontSize: "28px",
        fontWeight: "400",
        letterSpacing: "-0.01em",
        color: "#ccc8c8",
        lineHeight: "1.2",
      }}>
        Rodriguez Digital Operations, LLC.
      </h1>
      <div style={{ color: "#a8a397", fontSize: "13px", marginTop: "4px", fontStyle: "italic" }}>
        Building secure, scalable systems for service businesses.
      </div>
    </div>
  </div>

</div>

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

        {/* Main content */}
        <div className="main-content" style={{ flex: 1, padding: "36px 48px", overflowY: "auto", maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ fontSize: "20px", color: "#c8a96e" }}>{data[active].icon}</span>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "400", color: "#e8e0d0", letterSpacing: "-0.01em" }}>
              {active}
            </h2>
          </div>
          {active === "Client Questionnaire" ? (
            <ClientQuestionnaire />
          ) : (
            <SectionContent content={data[active].content} />
          )}
        </div>

      </div>

{/* Footer */}
      <div style={{
        borderTop: "1px solid #1e1c1a", // Darkened to match the sidebar borders
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#a8a397" }}>
          © 2026 Rodriguez Digital Operations, LLC. All rights reserved.
        </div>

        <div>
          <a href="/portal/login-notice" style={{ 
            fontSize: "10px", 
            color: "#8a8278", 
            textDecoration: "none", 
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.1em",
            borderBottom: "1px solid transparent",
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#c8a96e"}
          onMouseOut={(e) => e.currentTarget.style.color = "#8a8278"}
          >
            CLIENT PORTAL ACCESS
          </a>
        </div>
      </div>
    </div>
  );
}