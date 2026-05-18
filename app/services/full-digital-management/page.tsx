import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Full Digital Management for Small Businesses | Rodriguez Digital Operations",
  description: "Website, ads, email marketing, and social media managed by one person. No agency handoffs, no shared inboxes. Unified monthly reporting and priority response. $1,500/mo.",
  alternates: { canonical: "/services/full-digital-management" },
  openGraph: {
    title: "Full Digital Management for Small Businesses",
    description: "Your entire digital presence — website, ads, email, social — handled by one person. $1,500/mo, no contracts.",
    url: "https://rodriguezdigitalops.dev/services/full-digital-management",
  },
};

export default function FullDigitalManagementPage() {
  return (
    <ServicePage
      label="Full Digital Management"
      h1="Full Digital Management for Small Businesses"
      tagline="Your entire digital presence, handled by one person."
      intro="Website, ads, email, social media — all of it coordinated and managed by one person who knows your business. No agency where your account gets handed off to a junior employee. No shared inboxes where your request sits for three days. You get direct access to the person doing the work, a unified monthly report across every channel, and priority response when something needs attention fast. This is the plan for businesses that want everything handled and don't want to think about it."
      features={[
        "Everything in Site, Maintenance, SEO & Ads — website, updates, local SEO, Google Business Profile, ad campaigns",
        "Monthly email marketing campaign — copywriting, scheduling, and reporting included",
        "Social media content and scheduling across up to 2 platforms",
        "Unified monthly report covering website, ads, email, and social in one place",
        "Priority response — non-urgent requests within 2 business hours",
      ]}
      price="$1,500/mo"
      priceNote="Month-to-month. No contracts, no lock-in. Cancel anytime with 30 days written notice. Services requested outside this scope are quoted and added to your monthly rate."
      accentColor="#c8a96e"
      tier="Full Digital Management"
    />
  );
}
