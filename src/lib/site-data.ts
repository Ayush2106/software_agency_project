export const leadershipTeam = [
  {
    name: "Alex Chen",
    role: "CEO & AI Architect",
    region: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    region: "London",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Weber",
    role: "Head of Design",
    region: "Berlin",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Yuki Tanaka",
    role: "Lead Mobile",
    region: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

/** ISO 3166-1 alpha-2 — used with flagcdn.com */
export const deliveryCountries = [
  { code: "us", name: "United States", mapX: 18, mapY: 38 },
  { code: "ca", name: "Canada", mapX: 20, mapY: 28 },
  { code: "gb", name: "United Kingdom", mapX: 47, mapY: 30 },
  { code: "de", name: "Germany", mapX: 51, mapY: 32 },
  { code: "fr", name: "France", mapX: 48, mapY: 34 },
  { code: "ae", name: "UAE", mapX: 58, mapY: 42 },
  { code: "in", name: "India", mapX: 64, mapY: 44 },
  { code: "sg", name: "Singapore", mapX: 72, mapY: 48 },
  { code: "jp", name: "Japan", mapX: 78, mapY: 36 },
  { code: "au", name: "Australia", mapX: 82, mapY: 62 },
  { code: "br", name: "Brazil", mapX: 32, mapY: 58 },
  { code: "nl", name: "Netherlands", mapX: 49, mapY: 31 },
  { code: "es", name: "Spain", mapX: 46, mapY: 36 },
  { code: "za", name: "South Africa", mapX: 54, mapY: 68 },
  { code: "mx", name: "Mexico", mapX: 16, mapY: 44 },
];

export function flagUrl(code: string, width = 160) {
  return `https://flagcdn.com/w${width}/${code}.png`;
}

export const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-ready platforms, telehealth, AI diagnostics & patient portals.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    name: "Aviation",
    description: "Fleet ops, booking engines, maintenance dashboards & crew management.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
  },
  {
    name: "FinTech",
    description: "Trading dashboards, payment rails, fraud AI & regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
  },
  {
    name: "E-Commerce",
    description: "Headless storefronts, personalization engines & omnichannel logistics.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    name: "EdTech",
    description: "LMS platforms, adaptive learning AI & virtual classroom experiences.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    name: "Logistics",
    description: "Route optimization, warehouse IoT, real-time tracking & last-mile apps.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
];

export const saasShowcase = [
  {
    name: "FinPulse Pro",
    category: "B2B SaaS · FinTech",
    revenue: "$4.2M ARR",
    users: "12K+ active traders",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
  },
  {
    name: "HealthBridge Cloud",
    category: "Healthcare SaaS",
    revenue: "$2.8M ARR",
    users: "500K+ patient sessions",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=600&fit=crop",
  },
  {
    name: "RetailMind OS",
    category: "E-Commerce SaaS",
    revenue: "$6.1M ARR",
    users: "2M+ monthly orders",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "VioletForge didn't just build our platform — they architected a $4M ARR machine. Their AI workflows cut our launch timeline in half without a single security compromise.",
    name: "Sarah Mitchell",
    role: "CEO, FinPulse Global",
    company: "FinTech · USA",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "We've worked with agencies across London, Dubai, and Bangalore. VioletForge is in a league of their own — stunning design, obsessive QA, and they actually answer at 2 AM IST.",
    name: "Rajesh Kapoor",
    role: "VP Engineering, HealthBridge",
    company: "Healthcare · India",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "The iterative dev-test loops gave us confidence at every sprint. We shipped v1 in 6 weeks — competitors quoted us 6 months. Genuinely the fastest delivery we've ever seen.",
    name: "Elena Vasquez",
    role: "Product Director, Nova Retail",
    company: "E-Commerce · Spain",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "Our aviation ops dashboard handles 40+ airports in real time. The team understood complex logistics on day one. Investors called it 'enterprise-grade from week one.'",
    name: "James Okonkwo",
    role: "COO, AeroLink Systems",
    company: "Aviation · UK",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    desc: "Goals, users, tech audit & AI opportunity mapping.",
  },
  {
    step: 2,
    title: "Design",
    desc: "UX flows, prototypes & design system in Figma.",
  },
  {
    step: 3,
    title: "Develop",
    desc: "AI-augmented sprints with daily demos & transparency.",
  },
  {
    step: 4,
    title: "Test",
    desc: "Automated QA, security scans & UAT with your team.",
  },
  {
    step: 5,
    title: "Deploy",
    desc: "CI/CD, monitoring & zero-downtime go-live.",
  },
  {
    step: 6,
    title: "Iterate",
    desc: "Feedback loops back to develop & test — ship improvements anytime.",
  },
];
