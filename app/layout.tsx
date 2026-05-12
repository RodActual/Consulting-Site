import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";


export const metadata: Metadata = {
  title: "Rodriguez Digital Operations, LLC. | Fractional Consultant",
  description: "I build secure, scalable digital operating systems for service businesses. Replace chaotic tools with a unified, encrypted infrastructure.",
  keywords: ["digital operations", "fractional consultant", "business systems", "secure infrastructure", "service business"],
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
      </body>
    </html>
  );
}