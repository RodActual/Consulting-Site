"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICES = [
  { label: "Website Design & SEO", href: "/services/website-design-and-seo" },
  { label: "Ads Management", href: "/services/ads-management" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Full Digital Management", href: "/services/full-digital-management" },
  { label: "Dayton, OH", href: "/dayton-ohio-web-design" },
];

export default function ServiceNav() {
  const pathname = usePathname();

  return (
    <nav style={{
      borderBottom: "1px solid #1e1c1a",
      padding: "0 40px",
      display: "flex",
      gap: "0",
      overflowX: "auto",
    }}>
      {SERVICES.map(({ label, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: active ? "#c8a96e" : "#5a5248",
              padding: "12px 20px",
              borderBottom: active ? "2px solid #c8a96e" : "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
