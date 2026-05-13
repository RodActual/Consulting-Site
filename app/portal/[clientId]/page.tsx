import { clientPortals } from "@/lib/portalData";
import { notFound } from "next/navigation";

export default function PortalPage({ params }: { params: { clientId: string } }) {
  const client = clientPortals[params.clientId];
  if (!client) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#09090b", color: "#ccc8c8", padding: "60px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ borderBottom: "1px solid #1e1c1a", paddingBottom: "24px", marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#c8a96e", letterSpacing: "0.1em" }}>SECURE CLIENT PORTAL</div>
          <h1 style={{ fontSize: "32px", fontWeight: "400", marginTop: "12px", color: "#FAFAFA" }}>{client.name}</h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {client.links.map((link: any, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
               style={{ padding: "30px", background: "rgba(255,255,255,0.02)", border: "1px solid #1e1c1a", borderRadius: "4px", textDecoration: "none", transition: "0.2s" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{link.icon}</div>
              <div style={{ fontSize: "18px", color: "#FAFAFA", marginBottom: "8px" }}>{link.label}</div>
              <div style={{ fontSize: "12px", color: "#7a7268" }}>Access Secure Resource →</div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "80px", padding: "24px", border: "1px solid #1e1c1a", borderRadius: "4px", background: "rgba(200,169,110,0.02)" }}>
          <h3 style={{ fontSize: "12px", color: "#c8a96e", textTransform: "uppercase", letterSpacing: "0.1em" }}>Account Administration</h3>
          <div style={{ display: "flex", gap: "40px", marginTop: "16px", fontSize: "13px" }}>
            <div><span style={{ color: "#5a5248" }}>Service Status:</span> {client.status}</div>
            <div><span style={{ color: "#5a5248" }}>Plan:</span> {client.tier}</div>
          </div>
        </div>
      </div>
    </div>
  );
}