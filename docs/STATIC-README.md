# BaseOf MVP

Static MVP for `base.of`.

## What is already in place

- Landing page and product flow in one app
- Generator form with minimum required fields
- Color detection from title, description, and manual notes
- Logo concept preview
- Cover concept preview
- Palette generation
- Local email/password auth mock
- Local project saving
- Pricing model:
  - First project free
  - Pro at `$1.99/month`
  - Two extra variations per day
- Export:
  - Logo as SVG
  - Logo as PNG
  - Cover as SVG

## Files

- `index.html` — page structure
- `assets/app.css` — UI styles
- `assets/app.js` — generator logic, local auth, exports, and usage limits
- `DEPLOY-BASEOF.md` — full Vercel and domain launch guide

## Current status

This is a frontend MVP and stores everything in `localStorage`.

## Next real-product steps

1. Move this UI into Next.js or another app framework
2. Add real auth with email/password
3. Add Stripe subscription for Pro
4. Connect OpenAI API for real logo and cover generation
5. Store users and project history in a database
6. Add domain deployment for `base.of`

## Suggested stack for next phase

- Frontend: Next.js
- Auth + DB: Supabase
- Payments: Stripe
- Image generation: OpenAI
- Hosting: Vercel
