"use client";

import { useState } from "react";

interface TierIntakeFormProps {
  tierName: string;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid #2a2520",
  borderRadius: "3px",
  padding: "10px 14px",
  color: "#d0c8b8",
  fontSize: "13px",
  fontFamily: "'Georgia', serif",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Courier New', monospace",
  fontSize: "10px",
  letterSpacing: "0.12em",
  color: "#5a5248",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "6px",
};

export default function TierIntakeForm({ tierName, onClose }: TierIntakeFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    currentSituation: "",
    timeline: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          selectedTier: tierName,
          _subject: `New Inquiry — ${tierName} — ${form.businessName}`,
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return (
    <div style={{
      border: "1px solid #2a4a2a",
      borderRadius: "4px",
      padding: "32px",
      textAlign: "center",
      background: "rgba(42,74,42,0.06)",
      marginTop: "24px",
    }}>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "11px", color: "#4a8a4a", letterSpacing: "0.15em", marginBottom: "10px" }}>
        INQUIRY RECEIVED
      </div>
      <div style={{ fontFamily: "'Georgia', serif", fontSize: "15px", color: "#d0c8b8", marginBottom: "6px" }}>
        Thanks, I'll be in touch within one business day.
      </div>
      <div style={{ fontSize: "12px", color: "#5a5248" }}>
        Your interest in <span style={{ color: "#c8a96e" }}>{tierName}</span> has been noted.
      </div>
    </div>
  );

  return (
    <div style={{
      marginTop: "24px",
      border: "1px solid #2a2520",
      borderRadius: "4px",
      padding: "28px",
      background: "rgba(255,255,255,0.015)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "#5a5248",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}>Getting Started With</div>
          <div style={{ fontFamily: "'Georgia', serif", fontSize: "18px", color: "#c8a96e" }}>
            {tierName}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#3a3530",
            cursor: "pointer",
            fontSize: "18px",
            padding: "0",
            lineHeight: "1",
          }}
        >✕</button>
      </div>

      <p style={{ margin: 0, fontSize: "13px", color: "#7a7268", lineHeight: "1.7" }}>
        Fill this out and I'll reach out within one business day to talk through next steps. No commitment required.
      </p>

      {/* Fields */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="First Last" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Business Name</label>
          <input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Business Name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email Address</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="you@yourbusiness.com" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Where are you at right now digitally?</label>
        <textarea
          name="currentSituation"
          value={form.currentSituation}
          onChange={handleChange}
          placeholder="e.g. No website yet, have an old one that needs work, running ads but not seeing results..."
          rows={3}
          style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      <div>
        <label style={labelStyle}>What's your ideal timeline to get started?</label>
        <select name="timeline" value={form.timeline} onChange={handleChange} style={inputStyle}>
          <option value="">Select one</option>
          <option>As soon as possible</option>
          <option>Within 30 days</option>
          <option>Within 60 days</option>
          <option>No hard deadline</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Anything else I should know?</label>
        <textarea
          name="additionalNotes"
          value={form.additionalNotes}
          onChange={handleChange}
          placeholder="Any context, questions, or concerns. All of it helps."
          rows={3}
          style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      {status === "error" && (
        <div style={{ fontSize: "12px", color: "#8a3a3a", fontFamily: "'Courier New', monospace" }}>
          Something went wrong. Please try again or email rodactual@proton.me directly.
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={handleSubmit}
          disabled={status === "submitting"}
          style={{
            background: status === "submitting" ? "transparent" : "#c8a96e",
            border: "1px solid #c8a96e",
            borderRadius: "3px",
            padding: "11px 28px",
            color: status === "submitting" ? "#c8a96e" : "#0a0908",
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            transition: "all 0.15s ease",
          }}
        >
          {status === "submitting" ? "Sending..." : "Send Inquiry"}
        </button>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#5a5248",
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            padding: "0",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}