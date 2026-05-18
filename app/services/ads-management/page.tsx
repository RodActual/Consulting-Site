import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Google & Meta Ads Management for Small Businesses | Rodriguez Digital Operations",
  description: "Ad campaign setup, daily budget monitoring, and performance reporting for small businesses. Google Ads and Meta Ads managed alongside your website and local SEO. $1,000/mo, no contracts.",
  alternates: { canonical: "/services/ads-management" },
  openGraph: {
    title: "Google & Meta Ads Management for Small Businesses",
    description: "Ad campaigns managed alongside your website and local SEO. Daily monitoring, monthly reporting, no long-term contracts. $1,000/mo.",
    url: "https://rodriguezdigitalops.dev/services/ads-management",
  },
};

export default function AdsManagementPage() {
  return (
    <ServicePage
      label="Ads Management"
      h1="Google & Meta Ads Management for Small Businesses"
      tagline="Turn your ad budget into booked clients."
      intro="Running ads without a strategy is just burning money. I set up and manage your Google or Meta campaigns alongside your website and local SEO — so every channel is working together instead of against each other. Daily budget monitoring means you're never overspending on what isn't converting. Monthly reports tell you exactly what your ad dollars produced. No agency markups, no account managers you've never spoken to — just one person managing your full online presence."
      features={[
        "Everything in Site, Maintenance & SEO — custom site, updates, security, Google Business Profile, local SEO",
        "Ad campaign setup and management on Meta (Facebook/Instagram) or Google",
        "Daily budget monitoring so you're never overspending on underperforming ads",
        "Ad creative refreshes to prevent audience fatigue",
        "Monthly ad performance report covering spend, reach, leads, and cost per result",
      ]}
      price="$1,000/mo"
      priceNote="Month-to-month. No contracts, no lock-in. Cancel anytime with 30 days written notice. Ad spend is billed separately and goes directly to the platform — you keep full control of your budget."
      accentColor="#60a5fa"
    />
  );
}
