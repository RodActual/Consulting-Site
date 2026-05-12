import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Operations Architecture | Fractional Consultant",
  description: "I build secure, scalable digital operating systems for service businesses. Replace chaotic tools with a unified, encrypted infrastructure.",
  keywords: ["digital operations", "fractional consultant", "business systems", "secure infrastructure", "service business"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Digital Operations Architecture",
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
      </body>
    </html>
  );
}