"use client";

import { useState } from "react";

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
  transition: "border-color 0.15s ease",
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

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0px",
};

const groupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: "'Courier New', monospace",
  fontSize: "10px",
  letterSpacing: "0.15em",
  color: "#5a5248",
  textTransform: "uppercase",
  borderBottom: "1px solid #1e1c1a",
  paddingBottom: "6px",
  marginTop: "8px",
  marginBottom: "4px",
};

export default function ClientQuestionnaire() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    industry: "",
    location: "",
    yearsInBusiness: "",
    hasLogo: "",
    brandColors: "",
    brandFeel: "",
    existingSite: "",
    existingSiteUrl: "",
    primaryGoal: "",
    targetAudience: "",
    competitors: "",
    successLookLike: "",
    timeline: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New Discovery Questionnaire — ${form.businessName}`,
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
      padding: "40px",
      textAlign: "center",
      background: "rgba(42,74,42,0.06)",
    }}>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "12px", color: "#4a8a4a", letterSpacing: "0.15em", marginBottom: "12px" }}>
        QUESTIONNAIRE RECEIVED
      </div>
      <div style={{ fontFamily: "'Georgia', serif", fontSize: "16px", color: "#d0c8b8", marginBottom: "8px" }}>
        Thank you, I'll be in touch within one business day.
      </div>
      <div style={{ fontSize: "12px", color: "#5a5248" }}>
        A copy of your responses has been sent to rodactual@proton.me
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <p style={{ color: "#b0a898", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
        Fill this out as completely as you can. There are no wrong answers — this helps me understand your business before our first conversation so we can skip the small talk and get straight to what matters.
      </p>

      {/* Business Basics */}
      <div style={groupStyle}>
        <div style={sectionLabelStyle}>Business Basics</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { label: "Business Name", name: "businessName", placeholder: "Company LLC" },
            { label: "Your Name", name: "ownerName", placeholder: "First Last" },
            { label: "Email Address", name: "email", placeholder: "you@yourbusiness.com" },
            { label: "Phone Number", name: "phone", placeholder: "(555) 000-0000" },
            { label: "Industry / Type of Business", name: "industry", placeholder: "" },
            { label: "City & State", name: "location", placeholder: "City, State" },
          ].map(f => (
            <div key={f.name} style={fieldStyle}>
              <label style={labelStyle}>{f.label}</label>
              <input
                name={f.name}
                value={(form as any)[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder}
                style={inputStyle}
              />
            </div>
          ))}
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>How long have you been in business?</label>
          <select name="yearsInBusiness" value={form.yearsInBusiness} onChange={handleChange} style={inputStyle}>
            <option value="">Select one</option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>
        </div>
      </div>

      {/* Branding */}
      <div style={groupStyle}>
        <div style={sectionLabelStyle}>Branding</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Do you have a logo?</label>
            <select name="hasLogo" value={form.hasLogo} onChange={handleChange} style={inputStyle}>
              <option value="">Select one</option>
              <option>Yes — I'll send it over</option>
              <option>No — I need one</option>
              <option>I have something rough</option>
            </select>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Do you have an existing website?</label>
            <select name="existingSite" value={form.existingSite} onChange={handleChange} style={inputStyle}>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        {form.existingSite === "Yes" && (
          <div style={fieldStyle}>
            <label style={labelStyle}>Existing Website URL</label>
            <input
              name="existingSiteUrl"
              value={form.existingSiteUrl}
              onChange={handleChange}
              placeholder="https://yoursite.com"
              style={inputStyle}
            />
          </div>
        )}
        <div style={fieldStyle}>
          <label style={labelStyle}>Brand colors (if you have them)</label>
          <input
            name="brandColors"
            value={form.brandColors}
            onChange={handleChange}
            placeholder="e.g. Navy blue and white, or 'no idea yet'"
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>How would you describe the feel you want your website to have?</label>
          <textarea
            name="brandFeel"
            value={form.brandFeel}
            onChange={handleChange}
            placeholder="e.g. Clean and professional, friendly and approachable, bold and modern..."
            rows={3}
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
          />
        </div>
      </div>

      {/* Goals */}
      <div style={groupStyle}>
        <div style={sectionLabelStyle}>Goals</div>
        <div style={fieldStyle}>
          <label style={labelStyle}>What is the primary goal of your website?</label>
          <select name="primaryGoal" value={form.primaryGoal} onChange={handleChange} style={inputStyle}>
            <option value="">Select one</option>
            <option>Generate leads / get more calls</option>
            <option>Sell products online</option>
            <option>Build credibility and look professional</option>
            <option>Replace an outdated site</option>
            <option>All of the above</option>
          </select>
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Who is your ideal customer?</label>
          <textarea
            name="targetAudience"
            value={form.targetAudience}
            onChange={handleChange}
            placeholder="e.g. Homeowners in the Dayton area, ages 30–55, busy professionals..."
            rows={3}
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Any competitors or sites you admire? (links welcome)</label>
          <textarea
            name="competitors"
            value={form.competitors}
            onChange={handleChange}
            placeholder="e.g. 'I like how cleaningco.com looks' or 'nothing in particular'"
            rows={3}
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>What does success look like 6 months from now?</label>
          <textarea
            name="successLookLike"
            value={form.successLookLike}
            onChange={handleChange}
            placeholder="e.g. More booked appointments, a site I'm proud to show people, leads coming in without me chasing them..."
            rows={3}
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>What's your ideal timeline to launch?</label>
          <select name="timeline" value={form.timeline} onChange={handleChange} style={inputStyle}>
            <option value="">Select one</option>
            <option>As soon as possible</option>
            <option>Within 30 days</option>
            <option>Within 60 days</option>
            <option>No hard deadline</option>
          </select>
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Anything else I should know?</label>
          <textarea
            name="additionalNotes"
            value={form.additionalNotes}
            onChange={handleChange}
            placeholder="Anything at all — context helps."
            rows={4}
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
          />
        </div>
      </div>

      {status === "error" && (
        <div style={{ fontSize: "12px", color: "#8a3a3a", fontFamily: "'Courier New', monospace" }}>
          Something went wrong. Please try again or email rodactual@proton.me directly.
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === "submitting"}
        style={{
          alignSelf: "flex-start",
          background: status === "submitting" ? "transparent" : "#c8a96e",
          border: "1px solid #c8a96e",
          borderRadius: "3px",
          padding: "12px 28px",
          color: status === "submitting" ? "#c8a96e" : "#0a0908",
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          transition: "all 0.15s ease",
        }}
      >
        {status === "submitting" ? "Sending..." : "Submit Questionnaire"}
      </button>
    </div>
  );
}