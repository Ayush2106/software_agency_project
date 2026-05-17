/** ISO 3166-1 alpha-2 — used with flagcdn.com */
export const deliveryCountries = [
  {
    code: "in",
    name: "India",
    mapX: 38,
    mapY: 42,
    detail: "National education & enterprise platforms",
  },
  {
    code: "au",
    name: "Australia",
    mapX: 72,
    mapY: 72,
    detail: "B2C operations · Apply For Me",
  },
];

export function flagUrl(code: string, width = 160) {
  return `https://flagcdn.com/w${width}/${code}.png`;
}

export const industries = [
  {
    name: "B2C Operations",
    description:
      "Platforms for high-volume manual workflows — onboarding, team ops, client tracking, and extensions that keep humans in the loop.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0e0e0b?w=800&h=600&fit=crop",
  },
  {
    name: "Government & EdTech",
    description:
      "Nationwide education systems, digital assessment records, and public-sector tools built for scale, security, and NEP-aligned delivery.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    name: "Development Finance",
    description:
      "Multi-country financing and costing platforms with precise formulas, budgets, and approval flows for international programmes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    name: "Enterprise Web Apps",
    description:
      "Custom dashboards, internal tools, and production web systems architected for reliability — not template sites.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    name: "Workforce & Services",
    description:
      "Software for service businesses where coordination, consistency, and visibility matter as much as the UI.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    name: "AI-Ready Products",
    description:
      "LLM integrations, automation, and AI-augmented development when they add real value — never as a gimmick.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "We started ApplyForMe because job searching felt like a second full-time job — and consistency is hard when life does not pause. PrimeAxis built the platform our team runs every day: onboarding, role intake, ops workflows, and client visibility. They understood that our promise is real people and real applications, not bots, and the software reflects that.",
    name: "Sneha Achunala",
    role: "Co-founder",
    company: "Apply For Me · Australia",
    rating: 5,
  },
  {
    quote:
      "Scaling a human application team means the product has to be dependable, clear, and fast for both clients and staff. PrimeAxis delivered that — from the Chrome extension flow to dashboards our operators use daily. They treated our mission like their own and helped us turn a frustrating problem into a structured service job seekers can trust.",
    name: "Ojus Madan",
    role: "Co-founder",
    company: "Apply For Me · Australia",
    rating: 5,
  },
  {
    quote:
      "On the national financing platform, every formula and activity cost has to reconcile — there is no room for mismatch at any currency level. PrimeAxis brought strong engineering discipline to complex calculations, multi-country plans, and approval workflows. They shipped with the precision and reliability a programme of this scale demands.",
    name: "Vansh Bansal",
    role: "Engineering",
    company: "World-Scale National Financing & Costing Platform",
    rating: 5,
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    desc: "Goals, users, constraints, and a clear scope for your product.",
  },
  {
    step: 2,
    title: "Design",
    desc: "UX flows, prototypes, and UI direction before we write production code.",
  },
  {
    step: 3,
    title: "Develop",
    desc: "AI-augmented sprints with regular demos and transparent progress.",
  },
  {
    step: 4,
    title: "Test",
    desc: "QA, edge cases, and review with your team — especially for data-heavy systems.",
  },
  {
    step: 5,
    title: "Deploy",
    desc: "Production release, monitoring, and a stable handover.",
  },
  {
    step: 6,
    title: "Iterate",
    desc: "Improvements and new features as your product and users grow.",
  },
];
