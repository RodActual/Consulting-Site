import React from "react";

interface FlywheelProps {
  steps: string[];
}

export default function Flywheel({ steps }: FlywheelProps) {
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
          {i < steps.length - 1 && (
            <span style={{ color: "#3a3530", fontSize: "16px" }}>→</span>
          )}
        </React.Fragment>
      ))}
      <span style={{ color: "#3a3530", fontSize: "16px" }}>→ ↺</span>
    </div>
  );
}