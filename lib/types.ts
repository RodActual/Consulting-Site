export interface TierItem {
  name: string;
  price: string;
  features: string[];
  note?: string;
  highlight?: boolean;
  isFull?: boolean;
}

export interface ContentBlock {
  type:
    | "intro"
    | "pillars"
    | "highlight"
    | "section-title"
    | "table"
    | "tiers"
    | "simple-list"
    | "profile"
    | "flywheel"
    | "checklist";
  text?: string;
  items?: any[];
  headers?: string[];
  rows?: string[][];
  steps?: string[];
}

export interface SectionData {
  icon: string;
  content: ContentBlock[];
}

export type OperatingSystemData = Record<string, SectionData>;