import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Email Marketing for Small Businesses | Rodriguez Digital Operations",
  description: "Monthly email campaigns, list management, and performance reporting for small businesses. Stay top of mind with your customers without lifting a finger. $300/mo, no contracts.",
  alternates: { canonical: "/services/email-marketing" },
  openGraph: {
    title: "Email Marketing for Small Businesses",
    description: "Monthly email campaigns managed for you — copywriting, scheduling, and reporting included. $300/mo, cancel anytime.",
    url: "https://rodriguezdigitalops.dev/services/email-marketing",
  },
};

export default function EmailMarketingPage() {
  return (
    <ServicePage
      label="Email Marketing"
      h1="Email Marketing for Small Businesses"
      tagline="Stay top of mind with your customers — without lifting a finger."
      intro="You've already done the hard work of earning your customers. A consistent email campaign keeps them coming back, drives repeat business, and builds the kind of relationship that turns one-time clients into long-term referrals. I handle everything — the copy, the layout, the scheduling, and the reporting — so you don't have to think about it."
      features={[
        "Monthly newsletter or promotional email campaign",
        "List management and segmentation so the right message reaches the right people",
        "Campaign copywriting and layout built around your brand and voice",
        "Performance reporting — opens, clicks, unsubscribes — delivered monthly",
      ]}
      price="$300/mo"
      priceNote="Month-to-month. No contracts, no lock-in. Cancel anytime with 30 days written notice — no fees, no hassle. Additional email services outside this scope are quoted separately."
      accentColor="#34d399"
      tier="Email Marketing"
    />
  );
}
