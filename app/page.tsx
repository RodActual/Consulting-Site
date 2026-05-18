import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import HomeClient from "@/components/HomeClient";

export default function BusinessPlan() {
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
      </header>

      <Suspense fallback={null}>
        <HomeClient />
      </Suspense>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1e1c1a",
        padding: "32px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "24px",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#a8a397" }}>
          © 2026 Rodriguez Digital Operations, LLC. All rights reserved.
        </div>

        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
          {[
            { label: "Email Marketing", href: "/services/email-marketing" },
            { label: "Website Design & SEO", href: "/services/website-design-and-seo" },
            { label: "Ads Management", href: "/services/ads-management" },
            { label: "Full Digital Management", href: "/services/full-digital-management" },
            { label: "Dayton, OH", href: "/dayton-ohio-web-design" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="footer-service-link">
              {label}
            </Link>
          ))}
        </nav>

        <a href="/portal/login-notice" className="portal-link">
          CLIENT PORTAL ACCESS
        </a>
      </footer>

    </div>
  );
}
