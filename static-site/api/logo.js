const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "llama-3.3-70b-versatile";

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  let raw = "";
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initialsFromName(name) {
  const chunks = String(name || "BaseOf")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return (chunks.map((chunk) => chunk[0]).join("") || "BO").toUpperCase();
}

function fallbackLogo(payload) {
  const rawName = String(payload.name || "BaseOf");
  const name = escapeXml(rawName);
  const palette = Array.isArray(payload.palette) ? payload.palette : [];
  const bg = palette[0] || "#2f7d8c";
  const fg = palette[1] || "#101114";
  const accent = palette[2] || "#f4bd43";
  const initials = escapeXml(initialsFromName(rawName));

  return `
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo ${name}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${escapeXml(bg)}" />
          <stop offset="100%" stop-color="${escapeXml(fg)}" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="34" stdDeviation="28" flood-color="#101114" flood-opacity="0.22" />
        </filter>
      </defs>
      <rect width="1024" height="1024" rx="160" fill="url(#g)" />
      <path d="M166 310C258 168 404 124 518 164c94 33 126 119 222 119 44 0 84-18 118-42v436c-76 104-194 172-344 172-214 0-372-124-372-294 0-92 38-178 24-245Z" fill="#fff" fill-opacity="0.12" />
      <circle cx="748" cy="266" r="74" fill="${escapeXml(accent)}" filter="url(#shadow)" />
      <rect x="244" y="250" width="536" height="536" rx="116" fill="#fff" fill-opacity="0.12" stroke="#fff" stroke-opacity="0.24" stroke-width="12" />
      <text x="512" y="564" text-anchor="middle" font-family="Arial, sans-serif" font-size="220" font-weight="900" fill="#ffffff">${initials}</text>
      <text x="512" y="688" text-anchor="middle" font-family="Arial, sans-serif" font-size="54" font-weight="800" letter-spacing="8" fill="#ffffff" fill-opacity="0.82">${escapeXml(rawName.toUpperCase().slice(0, 18))}</text>
    </svg>
  `.trim();
}

function sanitizeSvg(svg) {
  let safe = String(svg || "").trim();
  const start = safe.indexOf("<svg");
  const end = safe.lastIndexOf("</svg>");
  if (start === -1 || end === -1) return "";

  safe = safe.slice(start, end + "</svg>".length);
  safe = safe
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\s(?:xlink:)?href\s*=\s*(['"]).*?\1/gi, "");

  if (!/<svg[^>]+xmlns=/i.test(safe)) {
    safe = safe.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!/<svg[^>]+viewBox=/i.test(safe)) {
    safe = safe.replace("<svg", '<svg viewBox="0 0 1024 1024"');
  }
  if (!/<svg[^>]+role=/i.test(safe)) {
    safe = safe.replace("<svg", '<svg role="img"');
  }

  return safe;
}

function buildPrompt(payload) {
  return `
Create a distinctive logo image as self-contained SVG for BaseOf generator.

Project name: ${payload.name || "BaseOf"}
Niche: ${payload.niche || "marketplace/freelance"}
Style: ${payload.style || "clean"} ${payload.customStyle || ""}
Description: ${payload.description || "No extra description"}
Color notes: ${payload.colorNotes || "Use palette if helpful"}
Palette: ${(payload.palette || []).join(", ") || "choose a strong balanced palette"}
Variation index: ${payload.variationIndex || 0}

Return JSON only with:
{
  "svg": "<svg ...>...</svg>",
  "concept": "one short sentence",
  "prompt": "short image prompt that inspired the logo"
}

SVG rules:
- 1024 by 1024 square logo image.
- Use abstract brand shapes, marketplace/product-card energy, and visual feeling from the project name.
- Do not create a template made only of initials; initials are allowed only as a supporting detail.
- Use no external links, no raster images, no scripts, no foreignObject, no markdown.
- Keep text readable and minimal.
`.trim();
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 200, { ok: true });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON" });
  }

  if (!payload.name || String(payload.name).trim().length < 2) {
    return sendJson(res, 400, { error: "Project name is required" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    return sendJson(res, 200, {
      source: "local",
      model: "fallback",
      concept: "GROQ_API_KEY is not configured, so BaseOf used the local backup logo.",
      svg: fallbackLogo(payload)
    });
  }

  try {
    const groqResponse = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        temperature: 0.92,
        max_tokens: 4096,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "You are a senior brand designer. Return strict JSON only. The SVG must be safe, self-contained, and visually distinctive."
          },
          {
            role: "user",
            content: buildPrompt(payload)
          }
        ]
      })
    });

    if (!groqResponse.ok) {
      const detail = await groqResponse.text();
      return sendJson(res, 200, {
        source: "local",
        model,
        concept: `Groq returned ${groqResponse.status}; backup logo used.`,
        detail: detail.slice(0, 500),
        svg: fallbackLogo(payload)
      });
    }

    const data = await groqResponse.json();
    const content = data.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(content);
    const svg = sanitizeSvg(parsed.svg);

    if (!svg) {
      return sendJson(res, 200, {
        source: "local",
        model,
        concept: "Groq returned an invalid SVG; backup logo used.",
        svg: fallbackLogo(payload)
      });
    }

    return sendJson(res, 200, {
      source: "groq",
      model,
      concept: String(parsed.concept || "AI-generated brand mark.").slice(0, 220),
      prompt: String(parsed.prompt || "").slice(0, 500),
      svg
    });
  } catch (error) {
    return sendJson(res, 200, {
      source: "local",
      model,
      concept: "Groq request failed; backup logo used.",
      error: error.message,
      svg: fallbackLogo(payload)
    });
  }
};
