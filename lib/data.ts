import type { OperatingSystemData } from "./types";

export const SECTIONS = [
  "Overview",
  "The Digital Foundation",
  "What I Offer",
  "Capacity & Process",
  "Who You're Working With",
  "Client Questionnaire",
];

export const data: Record<string, { icon: string; content: any[] }> = {
  "Overview": {
    icon: "◈",
    content: [
      {
        type: "intro",
        text: "Most service businesses are held back by fragmented tools, insecure data, and chaotic workflows. I don't just build websites; I architect Digital Operating Systems.",
      },
      {
        type: "pillars",
        items: [
          { label: "Centralize", desc: "Design a unified, secure infrastructure that replaces your scattered tools." },
          { label: "Protect", desc: "Eliminate data leaks, lost passwords, and communication silos with enterprise-grade encryption." },
          { label: "Automate", desc: "Automate lead flow and reporting so your business grows without increasing your workload." },
        ],
      },
      {
        type: "highlight",
        text: "You don't need another freelancer. You need a Digital Operations Partner who treats your business like a system, not a project.",
      },
    ],
  },
  "The Digital Foundation": {
    icon: "◈",
    content: [
      { type: "section-title", text: "How I Operate Behind The Scenes" },
      {
        type: "intro",
        text: "This is the infrastructure I run my practice on. Not billed to you, not negotiable. Every client I work with benefits from a consultant who operates on a private, organized, and accountable foundation.",
      },
      {
        type: "table",
        headers: ["What It Is", "What It Means For You"],
        rows: [
          [
            "Encrypted Communication & Storage",
            "Your files, emails, and shared documents live in Proton Drive, not a personal Gmail or a free Dropbox. Everything is end-to-end encrypted by default.",
          ],
          [
            "Secure Password Management",
            "Every login, credential, and access key related to your accounts is stored in Proton Pass. No sticky notes, no texting passwords, no shared spreadsheets.",
          ],
          [
            "Clean Invoicing & Billing",
            "All invoices and payments run through Found, a dedicated business account. You always have a clear record of what was billed and when.",
          ],
          [
            "Honest Time Tracking",
            "Every hour worked is logged in Toggl Track in real time. Your monthly report reflects actual time spent, not an estimate.",
          ],
        ],
      },
      {
        type: "highlight",
        text: "These are my standards, not your deliverables. You benefit from them because I refuse to work any other way.",
      },
    ],
  },
  "What I Offer": {
    icon: "◈",
    content: [
      { type: "section-title", text: "Monthly Plans" },
      {
        type: "intro",
        text: "All plans are month-to-month. No contracts, no lock-in. Pick what fits your business now, you can always add more later. Clients can move between plans at any time with 30 days written notice.",
      },
      {
        type: "tiers",
        items: [
          {
            name: "Email Marketing",
            price: "$300/mo",
            features: [
              "Monthly newsletter or promotional email campaign",
              "List management and segmentation",
              "Performance reporting (opens, clicks, unsubscribes)",
              "Campaign copywriting and layout",
            ],
            note: "For businesses with an existing customer list that want to stay top of mind without lifting a finger. Any additional email services outside this scope will be quoted and added to your monthly rate. Cancel anytime with 7 days written notice, no fees.",
          },
          {
            name: "Site, Maintenance & SEO",
            price: "$750/mo",
            features: [
              "Custom website built for your business",
              "Ongoing updates and content changes",
              "Security monitoring and uptime checks",
              "Google Business Profile optimization",
              "Local SEO: show up when people search for what you do",
              "Monthly performance check-in",
            ],
            note: "For businesses that want a professional web presence that actually gets found. Any additional site or SEO work outside this scope will be quoted and added to your monthly rate. Cancel anytime with 7 days written notice, no fees.",
          },
          {
            name: "Site, Maintenance, SEO & Ads",
            price: "$1,000/mo",
            features: [
              "Everything in Site, Maintenance & SEO",
              "Ad campaign setup and management (Meta or Google)",
              "Daily budget monitoring and ad creative refreshes",
              "Monthly ad performance report",
            ],
            note: "For businesses ready to actively bring in new leads alongside a maintained, visible web presence. Any additional ad or site work outside this scope will be quoted and added to your monthly rate. Cancel anytime with 7 days written notice, no fees.",
            highlight: true,
          },
          {
            name: "Full Digital Management",
            price: "$1,500/mo",
            features: [
              "Everything in Site, Maintenance, SEO & Ads",
              "Monthly email marketing campaign",
              "Social media content and scheduling (up to 2 platforms)",
              "Unified monthly report across all channels",
              "Priority response - within 2 business hours",
            ],
            note: "For businesses that want everything handled in one place by one person. Any services requested outside this scope will be quoted and added to your monthly rate. Cancel anytime with 7 days written notice, no fees.",
          },
        ],
      },
      { type: "section-title", text: "One-Time Fees" },
      {
        type: "simple-list",
        items: [
          "Website Build (No Maintenance): $500 — A clean, professional site built and handed off fully to you. No ongoing commitment.",
          "Platform Migration & Takeover Setup: $250 — Paid once before work begins. Covers account access, audit, and initial setup. Followed by your choice of Site, Maintenance & SEO ($750/mo) or Site, Maintenance, SEO & Ads ($1,000/mo).",
        ],
      },
      { type: "section-title", text: "Not Sure Which Fits?" },
      {
        type: "intro",
        text: "Every engagement starts with a free discovery call. Fill out the questionnaire in the Client Questionnaire section and I'll reach out within one business day to talk through what makes sense for your business.",
      },
      {
        type: "highlight",
        text: "You're not committing to anything by reaching out. The first conversation is always free.",
      },
    ],
  },
  "Capacity & Process": {
    icon: "◈",
    content: [
      { type: "section-title", text: "How I Work" },
      {
        type: "intro",
        text: "I keep my client list small on purpose. Every business I work with gets my direct attention: not a ticketing system, not a shared inbox, not someone I delegated it to. That only works if I'm not stretched thin.",
      },
      {
        type: "profile",
        items: [
          { label: "Active Clients", value: "4–5 at any given time. When I'm full, I'm full." },
          { label: "New Projects", value: "One new website build per month during peak season." },
          { label: "Onboarding", value: "Every new client goes through a 30-day ramp-up so nothing gets missed and nothing gets rushed." },
          { label: "Off-boarding", value: "If we part ways, you leave with everything. Full credential handoff within 5 business days, no hassle." },
        ],
      },
      { type: "section-title", text: "What Onboarding Looks Like" },
      {
        type: "intro",
        text: "The first 30 days aren't billable chaos; they follow a defined process so you know exactly what's happening and when.",
      },
      {
        type: "checklist",
        items: [
          "Audit your current tools, accounts, and digital presence",
          "Identify gaps and quick wins",
          "Set up secure credential storage for all managed accounts",
          "Build or connect your communication channels",
          "Launch your dashboard or site and confirm everything is stable",
          "30-day check-in to make sure it's all working for you",
        ],
      },
      {
        type: "highlight",
        text: "If my calendar is full, it means the businesses I'm already working with are getting everything I've got. I'd rather tell you that upfront than overpromise.",
      },
    ],
  },
  "Who You're Working With": {
    icon: "◈",
    content: [
      { type: "section-title", text: "Who You're Working With" },
      {
        type: "intro",
        text: "I'm Anthony Rodriguez, a solo digital operations consultant based in Dayton, Ohio. Before building this practice, I spent six years in the U.S. Army as a Squad Leader and another three years deploying enterprise CRM systems for one of the largest automotive software companies in the country. I know what it means to be accountable for a system that has to work.",
      },
      {
        type: "profile",
        items: [
          { label: "Focus", value: "Website management, digital operations, and ad strategy for small service businesses." },
          { label: "Background", value: "U.S. Army Combat Engineer (Squad Leader), CRM Implementation Specialist at Reynolds & Reynolds, and B.S. Cybersecurity & Networking graduate from Miami University." },
          { label: "Certifications", value: "CompTIA Security+ | ICAgile Certified Professional (ICP)" },
          { label: "Clearance", value: "U.S. Government Secret Clearance (inactive, eligible for reinstatement)." },
          { label: "Approach", value: "Solo and intentional. I cap my client roster so every business I work with gets my full attention, not a junior employee's." },
          { label: "Location", value: "Dayton, Ohio — available remotely." },
          { label: "Response Time", value: "Non-urgent requests within 1 business day. Site emergencies within 4 business hours." },
        ],
      },
      {
        type: "highlight",
        text: "I started this practice because most small businesses don't need an agency, they need one person who knows what they're doing and actually shows up.",
      },
    ],
  },
  "Client Questionnaire": {
    icon: "◈",
    content: [],
  },
};