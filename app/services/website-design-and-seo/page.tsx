import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Website Design & Local SEO for Small Businesses | Rodriguez Digital Operations",
  description: "Custom websites built, hosted, and maintained for small businesses. Google Business Profile optimization and local SEO so you show up when people search for what you do. $750/mo or $500 one-time.",
  alternates: { canonical: "/services/website-design-and-seo" },
  openGraph: {
    title: "Website Design & Local SEO for Small Businesses",
    description: "Custom website built for your business, maintained and optimized for local search. $750/mo or $500 one-time build.",
    url: "https://rodriguezdigitalops.dev/services/website-design-and-seo",
  },
};

export default function WebsiteDesignPage() {
  return (
    <ServicePage
      label="Website Design & SEO"
      h1="Website Design & Local SEO for Small Businesses"
      tagline="A professional website that actually gets found."
      intro="Most small business websites just exist — they don't work. I build custom sites optimized for local search, then maintain them so they stay fast, secure, and up to date. No templates dropped on a page builder. No handoff to someone who doesn't know your business. You get a site built around how your customers actually search, and a partner who keeps it running month after month. Need a site without ongoing maintenance? The one-time build option hands everything off to you, fully set up."
      features={[
        "Custom website built specifically for your business — not a template",
        "Ongoing updates and content changes included",
        "Security monitoring and uptime checks so nothing quietly breaks",
        "Google Business Profile optimization to strengthen your local presence",
        "Local SEO — structured so you show up when people in your area search for what you do",
        "Monthly performance check-in to review what's working and what needs attention",
      ]}
      price="$750/mo"
      priceNote="Month-to-month. No contracts, no lock-in. Cancel anytime with 30 days written notice. Also available as a one-time build for $500 — site delivered fully set up with no ongoing commitment."
      accentColor="#c8a96e"
      tier="Site, Maintenance & SEO"
    />
  );
}
