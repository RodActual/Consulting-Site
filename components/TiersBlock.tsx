"use client";

import { useState } from "react";
import type { TierItem } from "@/lib/types";
import TierCard from "./TierCard";
import TierIntakeForm from "./TierIntakeForm";

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
            onSelect={() => setSelectedTier(selectedTier === item.name ? null : item.name)}
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