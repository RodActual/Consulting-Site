import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodriguez Digital Operations, LLC.",
  description: "I build secure, scalable digital operating systems for service businesses. Replace chaotic tools with a unified, encrypted infrastructure.",
  keywords: ["digital operations", "fractional consultant", "business systems", "secure infrastructure", "service business", "website hosting", "website building", "automation", "data management", "scalable systems", "ad management", "email marketing", "analytics", "custom solutions"],
  authors: [{ name: "Anthony Rodriguez" }],
  metadataBase: new URL("https://rodriguezdigitalops.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rodriguez Digital Operations, LLC.",
    description: "Stop juggling tools. I build secure, scalable systems for service businesses.",
    type: "website",
    url: "https://rodriguezdigitalops.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodriguez Digital Operations, LLC.",
    description: "Stop juggling tools. I build secure, scalable systems for service businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Google Knowledge Graph Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rodriguez Digital Operations, LLC",
    "founder": {
      "@type": "Person",
      "name": "Anthony Rodriguez"
    },
    "description": "Building secure, scalable systems for service businesses.",
    "url": "https://rodriguezdigitalops.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dayton",
      "addressRegion": "OH",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        
        {/* Hidden Schema Script for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <Analytics />
        <SpeedInsights />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RZLLGNYS74"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZLLGNYS74');
          `}
        </Script>
      </body>
    </html>
  );
}