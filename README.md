# VioletForge — AI-Powered Software Agency

A stunning Next.js marketing site for an AI-powered custom software agency. Features Three.js hero visuals, Framer Motion animations, a light purple theme, global timezone clocks, contact form, and an admin panel to manage portfolio projects.

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
| `/contact` | Contact form |
| `/admin` | Manage delivered projects (CRUD) |

## Admin / Projects

- Portfolio projects are stored in `data/projects.json`
- **GET** `/api/projects` — public, used on homepage
- **POST / PUT / DELETE** `/api/projects` — optional auth via `ADMIN_SECRET` env var

Copy `.env.example` to `.env.local` and set `ADMIN_SECRET` in production. In the admin UI, enter the same secret to enable create/update/delete.

## Tech Stack

- **Next.js 16** (App Router)
- **Three.js** + React Three Fiber + Drei
- **Framer Motion**
- **Tailwind CSS v4**
- **TypeScript**

## Customize

- Brand name and copy: search for `VioletForge` across `src/`
- Theme colors: `src/app/globals.css` (`--violet-*` variables)
- Sample projects: `data/projects.json`
