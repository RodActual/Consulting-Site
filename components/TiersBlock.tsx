"use client";

import { useState } from "react";
import type { TierItem } from "@/lib/types";
import TierCard from "./TierCard";
import TierIntakeForm from "./TierIntakeForm";

const TIER_URLS: Record<string, string> = {
  "Email Marketing": "/services/email-marketing",
  "Site, Maintenance & SEO": "/services/website-design-and-seo",
  "Site, Maintenance, SEO & Ads": "/services/ads-management",
  "Full Digital Management": "/services/full-digital-management",
};

interface TiersBlockProps {
  items: TierItem[];
}

export default function TiersBlock({ items }: TiersBlockProps) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {items.map((item, j) => (
          <TierCard
            key={j}
            item={item}
            selected={selectedTier === item.name}
            learnMoreUrl={TIER_URLS[item.name]}
            onSelect={() => {
              if (item.isFull) return;
              setSelectedTier(selectedTier === item.name ? null : item.name);
            }}
          />
        ))}
      </div>
      {selectedTier && (
        <TierIntakeForm
          tierName={selectedTier}
          onClose={() => setSelectedTier(null)}
        />
      )}
    </div>
  );
}