"use client";

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
  "The Digital Foundation",
  "What I Offer",
  "Capacity & Process",
  "Who You're Working With",
  "Client Questionnaire",
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
          { label: "Centralize", desc: "Design a unified, secure infrastructure that replaces your scattered tools." },
          { label: "Protect", desc: "Eliminate data leaks, lost passwords, and communication silos with enterprise-grade encryption." },
          { label: "Automate", desc: "Automate lead flow and reporting so your business grows without increasing your workload." },
        ],
      },
      {
        type: "highlight",
        text: "You don't need another freelancer. You need a Digital Operations Partner who treats your business like a system, not a project.",
      },
    ],
  },
"The Digital Foundation": {
  icon: "◈",
  content: [
    { type: "section-title", text: "How I Operate Behind The Scenes" },
    { 
      type: "intro", 
      text: "This is the infrastructure I run my practice on — not billed to you, not negotiable. Every client I work with benefits from a consultant who operates on a private, organized, and accountable foundation." 
    },
    {
      type: "table",
      headers: ["What It Is", "What It Means For You"],
      rows: [
        [
          "Encrypted Communication & Storage",
          "Your files, emails, and shared documents live in Proton Drive — not a personal Gmail or a free Dropbox. Everything is end-to-end encrypted by default."
        ],
        [
          "Secure Password Management",
          "Every login, credential, and access key related to your accounts is stored in Proton Pass. No sticky notes, no texting passwords, no shared spreadsheets."
        ],
        [
          "Clean Invoicing & Billing",
          "All invoices and payments run through Found, a dedicated business account. You always have a clear record of what was billed and when."
        ],
        [
          "Honest Time Tracking",
          "Every hour worked is logged in Toggl Track in real time. Your monthly report reflects actual time spent — not an estimate."
        ],
      ],
    },
    { 
      type: "highlight", 
      text: "These are my standards, not your deliverables. You benefit from them because I refuse to work any other way." 
    },
  ],
},
"What I Offer": {
  icon: "◈",
  content: [
    { type: "section-title", text: "Monthly Retainers" },
    {
      type: "tiers",
      items: [
        {
          name: "Site & Maintenance",
          price: "$750/mo",
          features: [
            "Custom website built for your business",
            "Ongoing updates and content changes",
            "Security monitoring and uptime checks",
            "Monthly performance check-in",
          ],
          note: "For businesses that want a professional web presence without the headache of managing it themselves.",
        },
        {
          name: "Site, Maintenance & Ads",
          price: "$1,000/mo",
          features: [
            "Everything in Site & Maintenance",
            "Ad campaign setup and management (Meta or Google)",
            "Daily budget monitoring and ad creative refreshes",
            "Monthly ad performance report",
          ],
          note: "For businesses ready to actively bring in new leads alongside a maintained web presence.",
          highlight: true,
        },
        {
          name: "Takeover & Cleanup",
          price: "$750/mo",
          features: [
            "Full takeover of your existing website",
            "30-day cleanup: outdated content, broken links, speed issues",
            "Hosting migration if needed",
            "Ongoing maintenance after cleanup is complete",
          ],
          note: "First 30 days billed at $900/mo to cover the cleanup workload. Drops to $750/mo once the site is in good shape.",
        },
      ],
    },
    { type: "section-title", text: "One-Time Builds" },
    {
      type: "simple-list",
      items: [
        "Website Build (No Maintenance): $500 — A clean, professional site handed off fully to you.",
      ],
    },
    {
      type: "highlight",
      text: "Not sure which fits? Every engagement starts with a free conversation to figure out what your business actually needs.",
    },
  ],
},
  "Capacity & Process": {
  icon: "◈",
  content: [
    { type: "section-title", text: "How I Work" },
    {
      type: "intro",
      text: "I keep my client list small on purpose. Every business I work with gets my direct attention — not a ticketing system, not a shared inbox, not someone I delegated it to. That only works if I'm not stretched thin.",
    },
    {
      type: "profile",
      items: [
        { label: "Active Clients", value: "4–5 at any given time. When I'm full, I'm full." },
        { label: "New Projects", value: "One new website build per month during peak season." },
        { label: "Onboarding", value: "Every new client goes through a 30-day ramp-up so nothing gets missed and nothing gets rushed." },
        { label: "Off-boarding", value: "If we part ways, you leave with everything — full credential handoff within 5 business days, no hassle." },
      ],
    },
    { type: "section-title", text: "What Onboarding Looks Like" },
    {
      type: "intro",
      text: "The first 30 days aren't billable chaos — they follow a defined process so you know exactly what's happening and when.",
    },
    {
      type: "checklist",
      items: [
        "Audit your current tools, accounts, and digital presence",
        "Identify gaps and quick wins",
        "Set up secure credential storage for all managed accounts",
        "Build or connect your communication channels",
        "Launch your dashboard or site and confirm everything is stable",
        "30-day check-in to make sure it's all working for you",
      ],
    },
    {
      type: "highlight",
      text: "If my calendar is full, it means the businesses I'm already working with are getting everything I've got. I'd rather tell you that upfront than overpromise.",
    },
  ],
},
  "Who You're Working With": {
  icon: "◈",
  content: [
    { type: "section-title", text: "Who You're Working With" },
    {
      type: "intro",
      text: "I'm Anthony Rodriguez — a solo digital operations consultant based in Dayton, Ohio. Before building this practice, I spent six years in the U.S. Army as a Squad Leader and another three years deploying enterprise CRM systems for one of the largest automotive software companies in the country. I know what it means to be accountable for a system that has to work.",
    },
    {
      type: "profile",
      items: [
        { label: "Focus", value: "Website management, digital operations, and ad strategy for small service businesses." },
       { label: "Background", value: "U.S. Army Combat Engineer (Squad Leader), CRM Implementation Specialist at Reynolds & Reynolds, and B.S. Cybersecurity & Networking graduate from Miami University — GPA 3.94." },
        { label: "Clearance", value: "U.S. Government Secret Clearance — inactive, eligible for reinstatement." },
        { label: "Approach", value: "Solo and intentional. I cap my client roster so every business I work with gets my full attention — not a junior employee's." },
        { label: "Location", value: "Dayton, Ohio — available remotely." },
        { label: "Response Time", value: "Non-urgent requests within 1 business day. Site emergencies within 4 business hours." },
      ],
    },
    {
      type: "highlight",
      text: "I started this practice because most small businesses don't need an agency — they need one person who knows what they're doing and actually shows up.",
    },
  ],
},

  "Client Questionnaire": {
    icon: "◈",
    content: [],
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

function ClientQuestionnaire() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    // Business Basics
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    industry: "",
    location: "",
    yearsInBusiness: "",
    // Branding
    hasLogo: "",
    brandColors: "",
    brandFeel: "",
    existingSite: "",
    existingSiteUrl: "",
    // Goals
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
        Thank you — I'll be in touch within one business day.
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
            }}>Rodriguez Digital Operations, LLC.</h1>
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
          {active === "Client Questionnaire" ? (
  <ClientQuestionnaire />
) : (
  <SectionContent content={data[active].content} />
)}
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
          © 2026 Rodriguez Digital Operations, LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
}