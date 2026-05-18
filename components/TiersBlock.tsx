"use client";

import type { TierItem } from "@/lib/types";
import TierCard from "./TierCard";

const TIER_URLS: Record<string, string> = {
  "Email Marketing": "/services/email-marketing",
  "Site, Maintenance & SEO": "/services/website-design-and-seo",
  "Site, Maintenance, SEO & Ads": "/services/ads-management",
  "Full Digital Management": "/services/full-digital-management",
};

interface TiersBlockProps {
  items: TierItem[];
  onTierSelect?: (tier: string) => void;
}

export default function TiersBlock({ items, onTierSelect }: TiersBlockProps) {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {items.map((item, j) => (
        <TierCard
          key={j}
          item={item}
          learnMoreUrl={TIER_URLS[item.name]}
          onSelect={() => {
            if (item.isFull) return;
            onTierSelect?.(item.name);
          }}
        />
      ))}
    </div>
  );
}