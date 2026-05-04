# BaseOf: Vercel launch guide

Use this guide for the current static MVP in:

```text
/Users/matt/Desktop/Новая папка с объектами/BASEOF-COLLECTED/static-site
```

## Current State

Ready for first public Vercel deployment:

- Static multi-page website
- Pages for home, generator, services, examples, pricing, about and 404
- Local browser generator for logo, palette, cover and text direction
- SVG/PNG logo export and SVG cover export
- `vercel.json`, `robots.txt`, `sitemap.xml`
- Footer strip on every page: `Developed by Krendelbok`

Not real backend features yet:

- Server accounts
- Database project history
- Stripe payments
- OpenAI/API generation
- Server-side limits

## Fastest Deploy From Vercel UI

1. Open [vercel.com](https://vercel.com) and log in.
2. Create a new project.
3. Upload or import the folder:

```text
/Users/matt/Desktop/Новая папка с объектами/BASEOF-COLLECTED/static-site
```

4. Use these project settings:

- Framework preset: `Other`
- Build command: empty
- Output directory: empty
- Install command: empty

5. Deploy.

The first public URL should look like:

```text
https://baseof.vercel.app
```

Vercel project URLs use `vercel.app`, not `vercel.com`.

## If You Import The Whole BASEOF-COLLECTED Folder

If the whole collected folder is imported instead of only `static-site`, set:

- Root directory: `static-site`
- Framework preset: `Other`
- Build command: empty
- Output directory: empty
- Install command: empty

## CLI Deploy Option

From Terminal:

```bash
cd "/Users/matt/Desktop/Новая папка с объектами/BASEOF-COLLECTED/static-site"
npx vercel
```

For production:

```bash
npx vercel --prod
```

## Custom Domain

After deploy:

1. Open the project in Vercel.
2. Go to `Settings` -> `Domains`.
3. Add your domain, for example:
   - `baseof.org`
   - `www.baseof.org`
   - `baseof.net`
   - `www.baseof.net`
4. Follow Vercel DNS instructions exactly.

Do not type `https://` into the domain field.

## What To Check After Deploy

Open these pages:

- `/`
- `/generator`
- `/services`
- `/examples`
- `/pricing`
- `/about`

Then test the generator:

1. Enter a product or service name.
2. Select a marketplace or freelance category.
3. Generate a result.
4. Try SVG/PNG export.
5. Check mobile layout in browser dev tools.

## Next Product Phase

Recommended upgrade order:

1. Keep this static MVP live for feedback.
2. Move the UI into Next.js.
3. Add Supabase auth and project storage.
4. Add Stripe for `Pro $1.99`.
5. Add OpenAI generation through server routes.
6. Move limits from local browser storage to the backend.
