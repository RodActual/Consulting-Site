"use client";

import { clientPortals } from "@/lib/portalData";
import { notFound } from "next/navigation";
import { use } from "react";

export default function PortalPage({ params }: { params: Promise<{ clientId: string }> }) {
  // 1. Unwrap the params promise using React's use() hook
  const resolvedParams = use(params);
  const clientId = resolvedParams.clientId;
  
  const client = clientPortals[clientId];

  if (!client) {
    notFound();
  }

  // 2. Build the encoded Tier Change Email URL
  const clientName = client.name;
  const upgradeBody = encodeURIComponent(
    `Hi Anthony,\n\nI would like to discuss changing the current service tier for ${clientName}.\n\nPlease mark the tier you are interested in moving to:\n\n[ ] Digital Foundation (Security, Vaults, Maintenance)\n[ ] Digital Growth (Ads, SEO, Lead Gen)\n[ ] Digital Enterprise (Fractional Operations Partner)\n\nBest regards,`
  );

  const upgradeUrl = `mailto:anthony@yourdomain.com?subject=Tier Change Request: ${clientName}&body=${upgradeBody}`;

  return (
    <div style={{ minHeight: "100vh", background: "#09090b", color: "#ccc8c8", padding: "60px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ borderBottom: "1px solid #1e1c1a", paddingBottom: "24px", marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#c8a96e", letterSpacing: "0.1em" }}>
            SECURE CLIENT PORTAL
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "400", marginTop: "12px", color: "#FAFAFA" }}>
            {client.name}
          </h1>
        </div>

        {/* Resource Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {client.links.map((link: any, i: number) => (
            <a 
              key={i} 
              href={link.url} 
              target={link.url.startsWith('mailto') ? '_self' : '_blank'} 
              rel="noopener noreferrer" 
              style={{ 
                padding: "30px", 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid #1e1c1a", 
                borderRadius: "4px", 
                textDecoration: "none", 
                transition: "all 0.2s ease" 
              }}
            >
              <div style={{ fontSize: "18px", color: "#FAFAFA", marginBottom: "8px" }}>
                {link.label}
              </div>
              <div style={{ fontSize: "12px", color: "#7a7268", lineHeight: "1.5" }}>
                {link.subtext || "Access Secure Resource →"}
              </div>
            </a>
          ))}
        </div>

        {/* Administration Section */}
        <div style={{ 
          marginTop: "80px", 
          padding: "24px", 
          border: "1px solid #1e1c1a", 
          borderRadius: "4px", 
          background: "rgba(200,169,110,0.02)" 
        }}>
          <h3 style={{ fontSize: "12px", color: "#c8a96e", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Account Administration
          </h3>
          <div style={{ display: "flex", gap: "40px", marginTop: "16px", fontSize: "13px" }}>
            <div>
              <span style={{ color: "#5a5248" }}>Service Status:</span> {client.agreement?.status || "Active"}
            </div>
            <div>
              <span style={{ color: "#5a5248" }}>Plan:</span> {client.agreement?.tier || "Standard"}
            </div>
          </div>
        </div>

        {/* Service Management */}
        <div style={{ 
          marginTop: "20px", 
          padding: "24px", 
          border: "1px solid #1e1c1a", 
          borderRadius: "4px", 
          background: "rgba(255,255,255,0.01)" 
        }}>
          <h3 style={{ fontSize: "12px", color: "#c8a96e", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Service Management
          </h3>
          <div style={{ display: "flex", gap: "24px", marginTop: "16px", fontSize: "13px" }}>
            <a 
              href={upgradeUrl} // Using our new variable
              style={{ color: "#FAFAFA", textDecoration: "none", borderBottom: "1px solid #c8a96e", paddingBottom: "2px" }}
            >
              Request Tier Change
            </a>
            <a 
              href={client.serviceRequests?.cancelUrl} 
              style={{ color: "#7a7268", textDecoration: "none", transition: "0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ff4444")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#7a7268")}
            >
              Notify End of Service
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}