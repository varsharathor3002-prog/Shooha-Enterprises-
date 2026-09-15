# Shooha Enterprises — Website

A 5-page marketing website for **Shooha Enterprises** (chip-level repair for
Laptop, Desktop, Printer & LCD/LED Monitor), built with React, React Router
and Tailwind CSS v4.

## Pages

| Route        | Page     | Content                                             |
| ------------ | -------- | ---------------------------------------------------- |
| `/`          | Home     | Hero, brands strip, services preview, why-choose-us, process, CTA |
| `/about`     | About    | Company story, owner, mission/vision/values, stats    |
| `/services`  | Services | Full service breakdown with anchor links (`/services#laptop-repair`, etc.) |
| `/gallery`   | Gallery  | Repair category showcase + brands strip               |
| `/contact`   | Contact  | Contact info cards, enquiry form, embedded map, hours  |

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, Layout (page shell), ScrollToTop
    ui/           Button, Container, SectionHeading, PageHeader,
                   StatsStrip, WhatsAppButton — shared building blocks
    home/         Hero, ServicesPreview, WhyChooseUs, ProcessSteps,
                   BrandsStrip, CTASection — Home-page sections (CTASection
                   is also reused on other pages)
    contact/      ContactForm
  data/
    siteConfig.js  Business name, phone, email, address, hours — edit here
    services.js     The 6 services shown on Home & Services pages
    gallery.js      Gallery page tiles
  pages/          One file per route, composed from the components above
  App.jsx         Route definitions
  index.css       Tailwind import + theme tokens (colors, fonts) + custom utilities
```

## Customizing

- **Business details** (phone, WhatsApp, email, address, hours): edit
  `src/data/siteConfig.js` — every page pulls from this single file.
- **Services**: edit `src/data/services.js`.
- **Colors / fonts**: edit the `@theme` block at the top of `src/index.css`.
- **Placeholder numbers**: `src/components/ui/StatsStrip.jsx` has
  illustrative stats (years of experience, devices repaired) — update with
  your real figures before publishing.
- **Contact form**: `src/components/contact/ContactForm.jsx` currently opens
  the visitor's email client via a `mailto:` link (no backend needed). Swap
  this for a form service (Formspree, EmailJS) or your own API if you want
  submissions to land directly in an inbox/database.

## Tech stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vite.dev/)

## Deploying

The build output (`npm run build`) is a static site in `dist/` — it can be
deployed to any static host (Netlify, Vercel, GitHub Pages, etc.). Since
routing uses `BrowserRouter`, configure your host to fall back to
`index.html` for unknown paths (a typical SPA rewrite rule).
