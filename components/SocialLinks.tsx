"use client";

import Script from "next/script";

export default function SocialLinks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "10px",
        letterSpacing: "0.15em",
        color: "#a8a397",
        textTransform: "uppercase",
        borderBottom: "1px solid #1e1c1a",
        paddingBottom: "6px",
      }}>
        Connect
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>

        {/* LinkedIn Badge */}
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="anthony-rodriguez-digitalops"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/anthony-rodriguez-digitalops?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#60a5fa", fontSize: "13px" }}
          >
            Anthony Rodriguez — LinkedIn
          </a>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/RodActual"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 16px",
            border: "1px solid #2a2520",
            borderRadius: "3px",
            background: "rgba(255,255,255,0.02)",
            textDecoration: "none",
            color: "#ccc8c8",
            fontFamily: "'Courier New', monospace",
            fontSize: "12px",
            letterSpacing: "0.05em",
            transition: "border-color 0.15s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = "#c8a96e"}
          onMouseOut={(e) => e.currentTarget.style.borderColor = "#2a2520"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ccc8c8" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          RodActual
        </a>

      </div>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />

    </div>
  );
}
