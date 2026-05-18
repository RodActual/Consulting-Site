import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Web Design in Dayton, Ohio | Rodriguez Digital Operations",
  description: "Custom websites for Dayton Ohio small businesses. Local SEO, Google Business Profile optimization, and ad management by a Dayton-based consultant. No contracts, month-to-month.",
  alternates: { canonical: "/dayton-ohio-web-design" },
  openGraph: {
    title: "Web Design in Dayton, Ohio",
    description: "Custom websites for Dayton Ohio small businesses — built, hosted, and maintained by a local consultant.",
    url: "https://rodriguezdigitalops.dev/dayton-ohio-web-design",
  },
};

export default function DaytonWebDesignPage() {
  return (
    <ServicePage
      label="Dayton, Ohio"
      h1="Web Design in Dayton, Ohio"
      tagline="Local websites built to get found and convert — by someone who knows the market."
      intro="I'm Anthony Rodriguez, a digital operations consultant based in Dayton, Ohio. I build custom websites for local businesses that need to show up in search results and turn visitors into customers or clients. Whether you run a service business looking for more leads or a product business selling online, I handle the build, the hosting, the SEO, and everything that keeps it running. Working with a local consultant means you get someone who understands the Dayton market, responds when you need them, and doesn't disappear after launch."
      features={[
        "Custom website built for your business — not a Wix template or a page builder",
        "Hosted and maintained monthly — updates, security monitoring, and uptime checks",
        "Google Business Profile optimization so you show up in local search",
        "Local SEO — structured so Dayton-area customers find you first",
        "Optional ad campaign management on Google or Meta",
        "Optional email marketing to stay in front of your existing customers",
      ]}
      price="$750/mo"
      priceNote="Month-to-month, no contracts. Also available as a one-time website build for $500 with no ongoing commitment. Based in Dayton — available remotely anywhere."
      accentColor="#c8a96e"
    />
  );
}
