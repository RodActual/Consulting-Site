import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";


export const metadata: Metadata = {
  title: "Rodriguez Digital Operations, LLC.",
  description: "I build secure, scalable digital operating systems for service businesses. Replace chaotic tools with a unified, encrypted infrastructure.",
  keywords: ["digital operations", "fractional consultant", "business systems", "secure infrastructure", "service business", "website hosting", "website building", "automation", "data management", "scalable systems", "ad management", "email marketing", "analytics", "custom solutions"],
  authors: [{ name: "Anthony Rodriguez" }],
  openGraph: {
    title: "Rodriguez Digital Operations, LLC.",
    description: "Stop juggling tools. I build secure, scalable systems for service businesses.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}