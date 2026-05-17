# PrimeAxis Solutions — AI-Powered Software Agency

A Next.js marketing site for PrimeAxis Solutions. Features Three.js hero visuals, Framer Motion animations, contact form with Gmail notifications, and a portfolio section.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services, about, global reach, portfolio, CTA |
| `/contact` | Contact form (emails you via Gmail) |

## Contact email (Gmail)

Copy `.env.example` to `.env.local` and set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_EMAIL_TO`.

## Portfolio

- Projects are stored in `data/projects.json`
- **GET** `/api/projects` — used on the homepage

## Tech Stack

- **Next.js 16** (App Router)
- **Three.js** + React Three Fiber + Drei
- **Framer Motion**
- **Tailwind CSS v4**
- **TypeScript**

## Customize

- Brand name and copy: search for `PrimeAxis` across `src/`
- Theme colors: `src/app/globals.css` (`--violet-*` variables)
- Sample projects: `data/projects.json`
