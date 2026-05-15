# BaseOf Static Site

Project folder:

```text
/Users/matt/Downloads/Новая папка с объектами/BASEOF-COLLECTED/static-site
```

This folder contains the current public website files.

## Pages

- `index.html` — main landing page
- `generator.html` — local brand/card generator
- `services.html` — use cases for freelancers and marketplaces
- `examples.html` — example outputs
- `pricing.html` — pricing model
- `account.html` — registration, login, saved projects
- `about.html` — project positioning
- `404.html` — custom not found page
- `api/logo.js` — Vercel Function for AI SVG logos through Groq

## Vercel Settings

- Framework preset: `Other`
- Root directory: `static-site` if importing the whole `BASEOF-COLLECTED` folder
- Build command: leave empty
- Output directory: leave empty
- Install command: leave empty

If you upload only this folder, the root directory is just the uploaded folder.

## Environment Variables

Add these in Vercel Project Settings -> Environment Variables:

- `GROQ_API_KEY` — required for AI logo generation
- `GROQ_MODEL` — optional, defaults to `llama-3.3-70b-versatile`

Without `GROQ_API_KEY`, the generator still works and shows a local backup logo.

## Temporary Payment

Subscription payment currently uses DonationAlerts:

```text
https://www.donationalerts.com/r/baseof
```

Important: any donation from $2 counts as a subscription, but the buyer must include their BaseOf profile nickname or Telegram contact in the donation message so the subscription can be connected to the account manually.
