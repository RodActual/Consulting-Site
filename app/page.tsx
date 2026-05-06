import React, { useState } from "react";

// --- Types & Interfaces ---
interface TierItem {
  name: string;
  price: string;
  features: string[];
  note?: string;
  highlight?: boolean;
}

interface ContentBlock {
  type: "intro" | "pillars" | "highlight" | "section-title" | "table" | "tiers" | "simple-list" | "profile" | "flywheel" | "checklist";
  text?: string;
  items?: any[]; // Kept loose for mixed array types (pillars, profiles, lists), but can be strictly typed further.
  headers?: string[];
  rows?: string[][];
  steps?: string[];
}

interface SectionData {
  icon: string;
  content: ContentBlock[];
}

type OperatingSystemData = Record<string, SectionData>;

// --- Data ---
const SECTIONS = [
  "Overview",
  "The Operating System",
  "Engagement Tiers",
  "Capacity & Process",
  "Case Study",
];

const data: OperatingSystemData = {
  "Overview": {
    icon: "◈",
    content: [
      {
        type: "intro",
        text: "Most service businesses are held back by fragmented tools, insecure data, and chaotic workflows. I don't just build websites; I architect Digital Operating Systems.",
      },
      {
        type: "pillars",
        items: [
          { label: "Architect", desc: "Design a unified, secure infrastructure that replaces your scattered tools." },
          { label: "Stabilize", desc: "Eliminate data leaks, lost passwords, and communication silos with enterprise-grade encryption." },
          { label: "Scale", desc: "Automate lead flow and reporting so your business grows without increasing your workload." },
        ],
      },
      {
        type: "highlight",
        text: "You don't need another freelancer. You need a Digital Operations Partner who treats your business like a system, not a project.",
      },
    ],
  },
  "The Operating System": {
    icon: "⚙️",
    content: [
      { type: "section-title", text: "Your New Digital Infrastructure" },
      { type: "intro", text: "Every engagement includes a proprietary stack of privacy-first, enterprise tools. This isn't just software; it's your business's nervous system." },
      {
        type: "table",
        headers: ["Module", "Function", "Business Impact"],
        rows: [
          ["Secure Comms Hub", "Encrypted email with dedicated aliases (billing, support)", "Zero leakage. All client data stays private and organized."],
          ["Credential Command", "Shared, encrypted vaults for all logins & 2FA", "No more 'forgot password' emails. Instant access for you, secure control for me."],
          ["Live Reporting", "Real-time encrypted dashboards (Docs)", "Stop guessing. See your KPIs, ad spend, and tasks in a live, secure document."],
          ["Capacity Gating", "Smart scheduling with tiered availability", "Guaranteed focus. I only accept clients who fit my current operational bandwidth."],
        ],
      },
      { type: "highlight", text: "This stack is included in every tier. You aren't paying for tools; you're paying for the system that makes them work." },
    ],
  },
  "Engagement Tiers": {
    icon: "◇",
    content: [
      { type: "section-title", text: "System Stabilization (Entry)" },
      {
        type: "tiers",
        items: [
          {
            name: "Foundation",
            price: "$400/mo",
            features: [
              "Unified Communications Hub (Aliases)",
              "Credential Vault Setup & Migration",
              "Automated Backup Protocols",
              "Monthly Security Audit",
            ],
            note: "Ideal for businesses drowning in scattered tools.",
          },
        ],
      },
      { type: "section-title", text: "Operational Scaling (Core)" },
      {
        type: "tiers",
        items: [
          {
            name: "Growth Engine",
            price: "$650/mo",
            features: [
              "Everything in Foundation",
              "Lead Flow Automation (Form → CRM)",
              "Ad Ops Management (Meta/Google)",
              "Live Performance Dashboard",
              "Weekly Optimization Sprints",
            ],
            note: "The standard for scaling service businesses.",
            highlight: true,
          },
        ],
      },
      { type: "section-title", text: "Enterprise Infrastructure (Premium)" },
      {
        type: "tiers",
        items: [
          {
            name: "Full Ops",
            price: "$900–$1,200/mo",
            features: [
              "Everything in Growth",
              "Multi-Channel Orchestration",
              "Compliance & Audit Trails",
              "Strategic Quarterly Reviews",
              "Priority 24h Response SLA",
            ],
            note: "For businesses ready to scale to $1M+.",
          },
        ],
      },
      { type: "section-title", text: "One-Time Architecture Builds" },
      {
        type: "simple-list",
        items: [
          "System Audit & Roadmap: $1,500 (Includes full tool stack setup)",
          "Infrastructure Migration: $2,500+ (Moving from legacy tools to your OS)",
          "Custom Automation Scripts: Quoted based on complexity",
        ],
      },
    ],
  },
  "Capacity & Process": {
    icon: "◌",
    content: [
      { type: "intro", text: "Quality is non-negotiable. I operate on a Capacity-Gated Model to ensure every client receives 100% of my focus." },
      {
        type: "profile",
        items: [
          { label: "Max Active Clients", value: "4–5 Retainers" },
          { label: "New Builds", value: "1 per month (Summer peak)" },
          { label: "Onboarding", value: "Strict 30-day ramp-up protocol" },
          { label: "Exit Strategy", value: "Full credential handoff in <5 days" },
        ],
      },
      { type: "highlight", text: "If my calendar is full, it means I'm delivering maximum value to my current partners. I do not overpromise." },
      { type: "section-title", text: "The Onboarding Protocol" },
      {
        type: "checklist",
        items: [
          "System Audit & Gap Analysis",
          "Secure Vault Creation & Migration",
          "Comms Channel Setup (Aliases)",
          "Live Dashboard Initialization",
          "30-Day Stability Check-in",
        ],
      },
    ],
  },
  "Case Study": {
    icon: "◎",
    content: [
      { type: "intro", text: "JW Cleaning: From Chaos to Clarity." },
      {
        type: "profile",
        items: [
          { label: "Challenge", value: "Owner managed 4 different tools, lost leads in email, no secure password storage." },
          { label: "Solution", value: "Deployed 'Growth Engine' OS. Unified comms, automated lead capture, secured vault." },
          { label: "Result", value: "20% increase in booked calls, 100% data security, owner reclaimed 8hrs/week." },
        ],
      },
      { type: "highlight", text: "This isn't a website. It's a business transformation." },
    ],
  },
};

// --- Components ---

function TierCard({ item }: { item: TierItem }) {
  return (
    <div style={{
      border: item.highlight ? "2px solid #c8a96e" : "1px solid #2a2a2a",
      borderRadius: "4px",
      padding: "20px",
      background: item.highlight ? "rgba(200,169,110,0.06)" : "rgba(255,255,255,0.02)",
      position: "relative",
      flex: "1",
      minWidth: "200px",
    }}>
      {item.highlight && (
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
        }}>CORE SYSTEM</div>
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
    </div>
  );
}

function Flywheel({ steps }: { steps: string[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px", margin: "20px 0" }}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div style={{
            background: "rgba(200,169,110,0.1)",
            border: "1px solid rgba(200,169,110,0.3)",
            borderRadius: "3px",
            padding: "6px 12px",
            fontSize: "12px",
            color: "#c8a96e",
            fontFamily: "'Courier New', monospace",
          }}>
            {step}
          </div>
          {i < steps.length - 1 && <span style={{ color: "#3a3530", fontSize: "16px" }}>→</span>}
        </React.Fragment>
      ))}
      <span style={{ color: "#3a3530", fontSize: "16px" }}>→ ↺</span>
    </div>
  );
}

function SectionContent({ content }: { content: ContentBlock[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ color: "#b0a898", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>{block.text}</p>
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
          }}>{block.text}</div>
        );
        if (block.type === "section-title") return (
          <div key={i} style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "#5a5248",
            textTransform: "uppercase",
            borderBottom: "1px solid #1e1c1a",
            paddingBottom: "6px",
            marginTop: "8px",
          }}>{block.text}</div>
        );
        if (block.type === "pillars") return (
          <div key={i} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {block.items?.map((p, j) => (
              <div key={j} style={{
                flex: "1", minWidth: "160px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid #2a2520",
                borderRadius: "3px",
                padding: "16px",
              }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "11px", color: "#c8a96e", marginBottom: "4px" }}>{p.label}</div>
                <div style={{ fontSize: "12px", color: "#7a7268", lineHeight: "1.6" }}>{p.desc}</div>
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
                      color: "#5a5248", textTransform: "uppercase",
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
                        padding: "10px 12px", color: k === 0 ? "#d0c8b8" : "#7a7268",
                        verticalAlign: "top", lineHeight: "1.5",
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        if (block.type === "tiers") return (
          <div key={i} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {block.items?.map((item, j) => <TierCard key={j} item={item as TierItem} />)}
          </div>
        );
        if (block.type === "simple-list") return (
          <ul key={i} style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {block.items?.map((item, j) => (
              <li key={j} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#8a8278" }}>
                <span style={{ color: "#3a3530", flexShrink: 0, marginTop: "1px" }}>◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        if (block.type === "profile") return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {block.items?.map((item, j) => (
              <div key={j} style={{
                display: "grid", gridTemplateColumns: "160px 1fr",
                gap: "16px", padding: "10px 0",
                borderBottom: "1px solid #1a1815",
              }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#5a5248", textTransform: "uppercase" }}>{item.label}</div>
                <div style={{ fontSize: "13px", color: "#8a8278", lineHeight: "1.6" }}>{item.value}</div>
              </div>
            ))}
          </div>
        );
        if (block.type === "flywheel" && block.steps) return <Flywheel key={i} steps={block.steps} />;
        if (block.type === "checklist") return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {block.items?.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#8a8278" }}>
                <span style={{ color: "#2a4a2a", border: "1px solid #2a4a2a", width: "14px", height: "14px", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
        return null;
      })}
    </div>
  );
}

export default function BusinessPlan() {
  const [active, setActive] = useState(SECTIONS[0]);

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
        padding: "32px 40px 24px",
        background: "rgba(255,255,255,0.01)",
      }}>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "#5a5248",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}>Digital Operations Architecture</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "400",
              letterSpacing: "-0.01em",
              color: "#e8e0d0",
              lineHeight: "1.2",
            }}>Fractional Digital Operations</h1>
            <div style={{ color: "#5a5248", fontSize: "13px", marginTop: "4px", fontStyle: "italic" }}>
              Building secure, scalable systems for service businesses.
            </div>
          </div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            color: "#3a3530",
            textAlign: "right",
            lineHeight: "1.8",
          }}>
            <div>Solo Consultant</div>
            <div>Est. April 2026</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{
          width: "220px",
          flexShrink: 0,
          borderRight: "1px solid #1e1c1a",
          padding: "24px 0",
          background: "rgba(255,255,255,0.005)",
        }}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
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
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: active === s ? "#c8a96e" : "#5a5248" }}>
                {data[s].icon}
              </span>
              <span style={{ fontSize: "12px", color: active === s ? "#d0c8b8" : "#5a5248", fontFamily: "'Georgia', serif" }}>
                {s}
              </span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "36px 48px", overflowY: "auto", maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ fontSize: "20px", color: "#c8a96e" }}>{data[active].icon}</span>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "400", color: "#e8e0d0", letterSpacing: "-0.01em" }}>
              {active}
            </h2>
          </div>
          <SectionContent content={data[active].content} />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1a1815",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#2a2520" }}>
          © 2026 Digital Operations Architecture
        </div>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#2a2520" }}>
          Powered by Proton Workspace
        </div>
      </div>
    </div>
  );
}