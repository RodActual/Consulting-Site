import Link from "next/link";
import { Logo } from "@/components/Logo";

interface ServicePageProps {
  label: string;
  h1: string;
  tagline: string;
  intro: string;
  features: string[];
  price: string;
  priceNote: string;
  accentColor?: string;
}

export default function ServicePage({
  label,
  h1,
  tagline,
  intro,
  features,
  price,
  priceNote,
  accentColor = "#c8a96e",
}: ServicePageProps) {
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
      <header style={{
        borderBottom: "1px solid #1e1c1a",
        padding: "24px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
          <Logo style={{ width: "36px", height: "36px", flexShrink: 0 }} />
          <div>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#5a5248",
              textTransform: "uppercase",
            }}>
              Rodriguez Digital Operations
            </div>
            <div style={{ fontSize: "14px", color: "#ccc8c8", lineHeight: "1.3" }}>
              Digital Operations Architecture
            </div>
          </div>
        </Link>
        <Link href="/" style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "#5a5248",
          textDecoration: "none",
          textTransform: "uppercase",
        }}>
          ← Overview
        </Link>
      </header>

      {/* Main */}
      <main style={{ flex: 1, maxWidth: "760px", margin: "0 auto", padding: "64px 40px", width: "100%" }}>

        {/* Label */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: accentColor,
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          {label}
        </div>

        {/* H1 */}
        <h1 style={{
          margin: "0 0 16px",
          fontSize: "36px",
          fontWeight: "400",
          color: "#e8e0d0",
          lineHeight: "1.2",
          letterSpacing: "-0.01em",
        }}>
          {h1}
        </h1>

        {/* Tagline */}
        <p style={{
          margin: "0 0 40px",
          fontSize: "18px",
          color: "#a8a397",
          lineHeight: "1.6",
          fontStyle: "italic",
        }}>
          {tagline}
        </p>

        <div style={{ borderTop: "1px solid #1e1c1a", marginBottom: "40px" }} />

        {/* Intro */}
        <p style={{
          margin: "0 0 40px",
          fontSize: "15px",
          color: "#b0a898",
          lineHeight: "1.9",
        }}>
          {intro}
        </p>

        {/* What's Included */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "#a8a397",
          textTransform: "uppercase",
          borderBottom: "1px solid #1e1c1a",
          paddingBottom: "6px",
          marginBottom: "24px",
        }}>
          What&apos;s Included
        </div>

        <ul style={{ margin: "0 0 48px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "#8a8278", lineHeight: "1.6" }}>
              <span style={{ color: accentColor, flexShrink: 0, marginTop: "2px" }}>—</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div style={{
          border: "1px solid #2a2520",
          borderRadius: "4px",
          padding: "28px 32px",
          background: "rgba(255,255,255,0.015)",
          marginBottom: "40px",
        }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "#5a5248",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            Pricing
          </div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "32px",
            color: accentColor,
            marginBottom: "10px",
          }}>
            {price}
          </div>
          <div style={{ fontSize: "12px", color: "#5a5248", lineHeight: "1.7" }}>
            {priceNote}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          borderLeft: "3px solid #c8a96e",
          paddingLeft: "20px",
          marginBottom: "40px",
        }}>
          <div style={{ fontSize: "15px", color: "#c8a96e", fontStyle: "italic", lineHeight: "1.7", marginBottom: "4px" }}>
            Every engagement starts with a free discovery call.
          </div>
          <div style={{ fontSize: "13px", color: "#5a5248", lineHeight: "1.6" }}>
            No commitment required. I&apos;ll reach out within one business day.
          </div>
        </div>

        <Link href="/" style={{
          display: "inline-block",
          background: "#c8a96e",
          color: "#0a0908",
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "13px 32px",
          borderRadius: "3px",
          textDecoration: "none",
        }}>
          Start the Questionnaire
        </Link>

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1e1c1a",
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#a8a397" }}>
          © 2026 Rodriguez Digital Operations, LLC. All rights reserved.
        </div>
        <Link href="/portal/login-notice" className="portal-link">
          CLIENT PORTAL ACCESS
        </Link>
      </footer>

    </div>
  );
}
