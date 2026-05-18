import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LoginNotice() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#0a0908", 
      color: "#ccc8c8", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "500px" }}>
        <div style={{ 
          fontFamily: "monospace", 
          fontSize: "12px", 
          color: "#c8a96e", 
          letterSpacing: "0.2em",
          marginBottom: "24px"
        }}>
          SECURE ACCESS REQUIRED
        </div>
        
        <h1 style={{ fontSize: "24px", fontWeight: "400", color: "#FAFAFA", marginBottom: "16px" }}>
          Private Client Infrastructure
        </h1>
        
        <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#8a8278", marginBottom: "32px" }}>
          Client portals are restricted to authorized partners and accessible only via unique, private access keys provided during onboarding.
 
          <br /><br />
          If you are an active client and have lost your access key, 
          please contact Anthony Rodriguez directly.
        </p>

        <Link href="/" style={{ 
          fontSize: "11px", 
          color: "#c8a96e", 
          textDecoration: "none", 
          fontFamily: "monospace",
          border: "1px solid #c8a96e",
          padding: "10px 20px",
          borderRadius: "3px"
        }}>
          RETURN TO ARCHITECTURE OVERVIEW
        </Link>
      </div>
    </div>
  );
}