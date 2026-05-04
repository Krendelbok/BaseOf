# BaseOf: Vercel launch guide

This file is the practical launch map for the current `baseof-site` build.

## 1. What this project is right now

Current state:

- Static frontend MVP
- Opens directly as HTML
- Ready for Vercel static deployment
- Includes:
  - `index.html`
  - `404.html`
  - `vercel.json`
  - `robots.txt`
  - `sitemap.xml`
  - `assets/app.css`
  - `assets/app.js`
  - `assets/favicon.svg`

What is real:

- Generator UI
- Local account mock
- Local project save
- Logo SVG/PNG export
- Cover SVG export
- Color detection from title and brief

What is not real yet:

- Server auth
- Stripe subscription
- OpenAI generation through API
- Database
- Real hosted user accounts

## 2. Important domain reality

Vercel preview/project URLs do **not** use `vercel.com`.

Correct preview/project domain pattern:

- `your-project-name.vercel.app`

So for your first live version, the normal Vercel URL should be something like:

- `baseof.vercel.app`

Not:

- `baseof.vercel.com`

## 3. Domain availability checked on April 27, 2026

Checked results:

- `baseof.com` — unavailable
- `baseof.org` — available for `$8.99/year`
- `baseof.net` — available for `$13.50/year`

Practical recommendation:

1. Use `baseof.vercel.app` first
2. Buy `baseof.org` if you want the cleanest low-cost custom domain
3. Buy `baseof.net` only if you want both

## 4. Fastest launch path

If you want the fastest real public URL:

1. Create or open your Vercel account
2. Create a new project
3. Point Vercel at the folder:
   - `/Users/matt/Downloads/baseof-site`
4. Deploy it as a static site
5. Your first live URL should become something like:
   - `baseof.vercel.app`

## 5. What to upload to Vercel

Project root should be:

- `/Users/matt/Downloads/baseof-site`

Do not upload:

- `/Users/matt`
- unrelated desktop files
- downloads root

The deployment root should be the folder containing:

- `index.html`
- `vercel.json`
- `assets/`

## 6. Vercel project settings

Recommended settings for this exact version:

- Framework preset: `Other`
- Root directory: `baseof-site`
- Build command: leave empty
- Output directory: leave empty
- Install command: leave empty

Reason:

- This version is static and does not need a build step

## 7. Custom domain flow

After project deploy:

1. Open Vercel project
2. Go to `Settings`
3. Go to `Domains`
4. Add one of:
   - `baseof.org`
   - `www.baseof.org`
   - `baseof.net`
   - `www.baseof.net`
5. Follow Vercel DNS instructions exactly

Important:

- Vercel automatically handles SSL after DNS is correct
- Do not put `https://` into the domain field

## 8. DNS exceptions and gotchas

Common issues:

1. Domain bought outside Vercel:
   - you must update DNS manually

2. Domain bought inside Vercel:
   - setup is easier, but still wait for propagation

3. Domain was used elsewhere before:
   - you may need to remove old DNS records

4. `www` works but apex domain does not:
   - apex record is probably not pointed correctly

5. SSL warning after setup:
   - usually propagation delay, not a broken project

## 9. What this current `vercel.json` already does

The included `vercel.json` already gives you:

- clean URLs
- no trailing slash requirement
- cache headers for static assets
- basic security headers

That means you do **not** need to invent extra config before the first launch.

## 10. What to change before showing real users

These are the next real product tasks:

1. Replace local auth with backend auth
2. Replace local project save with database storage
3. Connect Stripe for `Pro $1.99`
4. Connect OpenAI for actual logo and cover generation
5. Add server-side usage limits instead of local browser limits

## 11. Best production stack for the next phase

Recommended stack:

1. Frontend: `Next.js`
2. Auth + database: `Supabase`
3. Payments: `Stripe`
4. Generation:
   - text + structured outputs: OpenAI responses
   - image/logo generation: OpenAI images
5. Hosting: `Vercel`

## 12. Why not keep this static forever

This current version is great for:

- showing concept
- testing flow
- iterating UI
- validating what users want

It is not enough for:

- paid subscriptions
- secure accounts
- real user project history
- real AI generation billing

## 13. Safest upgrade order

Recommended order:

1. Deploy current static MVP to `baseof.vercel.app`
2. Attach custom domain if wanted
3. Clone this UI into Next.js
4. Add Supabase auth
5. Add Stripe plan logic
6. Add OpenAI generation
7. Add real dashboard/history

## 14. If something breaks on Vercel

Check these first:

1. Root directory is wrong
2. Files were uploaded from the wrong folder
3. You added a build command even though this project is static
4. Domain DNS is still propagating
5. Browser is caching an old deploy

## 15. The exact realistic public URLs you can target now

Immediate:

- `baseof.vercel.app`

Likely next:

- `baseof.org`
- `www.baseof.org`

Also possible:

- `baseof.net`
- `www.baseof.net`

Not realistic from current availability check:

- `baseof.com`

Not the correct Vercel format:

- `baseof.vercel.com`

## 16. My recommendation

Launch order I would use:

1. Publish this build as `baseof.vercel.app`
2. If you want a cleaner name, buy `baseof.org`
3. After that, rebuild this same product in Next.js with real backend features
