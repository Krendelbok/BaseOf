"use client";

import { useEffect, useMemo, useState } from "react";

type AuthMode = "signup" | "login";

type User = {
  email: string;
  password: string;
  plan: "free";
  createdAt: string;
};

type SessionUser = Omit<User, "password">;

type Brief = {
  name: string;
  style: string;
  customStyle: string;
  niche: string;
  description: string;
  colorNotes: string;
  includeSlogan: boolean;
  includeExtras: boolean;
};

type Project = Brief & {
  palette: string[];
  preferredColors: string[];
  slogan: string;
  extras: string[];
  direction: string;
  styleLine: string;
  variationIndex: number;
  logoSvg: string;
  coverSvg: string;
};

type SavedProject = {
  id: string;
  owner: string;
  savedAt: string;
  payload: Project;
};

type Usage = {
  firstProjectUsed: boolean;
  variationsDate: string;
  variationsUsed: number;
};

const STORAGE_KEYS = {
  authUser: "baseof.auth.user",
  accounts: "baseof.auth.accounts",
  projects: "baseof.projects",
  usage: "baseof.usage",
};

const INITIAL_BRIEF: Brief = {
  name: "",
  style: "Minimal and clean",
  customStyle: "",
  niche: "Freelance design",
  description: "",
  colorNotes: "",
  includeSlogan: true,
  includeExtras: true,
};

const colorDictionary: Record<string, string> = {
  red: "#e53935",
  "красный": "#e53935",
  white: "#ffffff",
  "белый": "#ffffff",
  black: "#101010",
  "черный": "#101010",
  "чёрный": "#101010",
  blue: "#2563eb",
  "синий": "#2563eb",
  teal: "#519aaa",
  "бирюзовый": "#519aaa",
  "голубой": "#519aaa",
  green: "#2f855a",
  "зеленый": "#2f855a",
  "зелёный": "#2f855a",
  yellow: "#f4c542",
  "желтый": "#f4c542",
  "жёлтый": "#f4c542",
  orange: "#f97316",
  "оранжевый": "#f97316",
  purple: "#7c3aed",
  "фиолетовый": "#7c3aed",
  pink: "#ec4899",
  "розовый": "#ec4899",
  gold: "#c9a227",
  "золотой": "#c9a227",
  silver: "#c0c0c0",
  "серебряный": "#c0c0c0",
  brown: "#8b5e3c",
  "коричневый": "#8b5e3c",
  gray: "#6b7280",
  grey: "#6b7280",
  "серый": "#6b7280",
};

const nichePresets: Record<string, { palette: string[]; slogan: string; extras: string[] }> = {
  "Freelance design": {
    palette: ["#519aaa", "#17333a", "#f1deba"],
    slogan: "Looks composed from the first touchpoint",
    extras: ["Telegram cover direction", "Pitch-ready intro tile", "Compact case-study card"],
  },
  "Creative studio": {
    palette: ["#519aaa", "#1d1f3b", "#f1ebff"],
    slogan: "A sharper visual spine for your studio",
    extras: ["Portfolio opener", "Service offer visual", "Social campaign starter"],
  },
  "Fitness coach": {
    palette: ["#519aaa", "#14292f", "#def6ef"],
    slogan: "Energy with a cleaner visual rhythm",
    extras: ["Program cover", "Offer carousel", "Transformation post direction"],
  },
  "Coffee shop": {
    palette: ["#519aaa", "#5a3b2d", "#f5e2cb"],
    slogan: "Warm brand energy people remember",
    extras: ["Menu cover", "Specials promo tile", "Storefront banner"],
  },
  "Online store": {
    palette: ["#519aaa", "#182634", "#f4f8fb"],
    slogan: "A product brand that feels easy to trust",
    extras: ["Store header", "Promo hero", "Card layout suggestion"],
  },
  Education: {
    palette: ["#519aaa", "#27324f", "#fbf0c8"],
    slogan: "Clear learning brand, ready to ship",
    extras: ["Course cover", "Lesson card", "Launch announcement asset"],
  },
  "Tech service": {
    palette: ["#519aaa", "#122730", "#dff2f5"],
    slogan: "Technical, calm, and visibly reliable",
    extras: ["Product cover", "Update tile", "Documentation header"],
  },
  Other: {
    palette: ["#519aaa", "#1f3941", "#eef7f8"],
    slogan: "A stronger base for the next brand step",
    extras: ["Primary cover", "Avatar concept", "Announcement post"],
  },
};

function loadJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    return (JSON.parse(window.localStorage.getItem(key) || "null") as T) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function normalizeHex(hex: string) {
  return hex.length === 4
    ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toLowerCase()
    : hex.toLowerCase();
}

function uniqueColors(list: string[]) {
  const seen = new Set<string>();
  return list.filter((value) => {
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractPreferredColors(text: string) {
  const source = text.toLowerCase();
  const found: string[] = [];
  const hexMatches = source.match(/#[0-9a-f]{3,6}\b/gi) || [];
  found.push(...hexMatches.map(normalizeHex));
  Object.entries(colorDictionary).forEach(([word, hex]) => {
    if (source.includes(word)) found.push(hex);
  });
  return uniqueColors(found);
}

function buildInitials(name: string) {
  const chunks = name
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return (chunks.map((chunk) => chunk[0]).join("") || name.slice(0, 2) || "BO").toUpperCase();
}

function makePalette(basePalette: string[], preferredColors: string[], variationIndex: number) {
  const merged = uniqueColors([...preferredColors, ...basePalette]);
  if (variationIndex % 2 === 1 && merged.length >= 3) {
    return [merged[1], merged[0], merged[2]];
  }
  return merged.slice(0, 3);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createLogoSvg(project: Project) {
  const bg = project.palette[0] || "#519aaa";
  const fg = project.palette[1] || "#ffffff";
  const accent = project.palette[2] || "#17333a";
  const initials = buildInitials(project.name);
  return `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo ${escapeHtml(project.name)}">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="264" height="264" rx="78" fill="url(#logoGradient)" />
      <rect x="34" y="34" width="232" height="232" rx="62" fill="rgba(255,255,255,0.06)" />
      <circle cx="228" cy="72" r="18" fill="${fg}" fill-opacity="0.92" />
      <text x="150" y="170" text-anchor="middle" font-family="Syne, sans-serif" font-size="96" font-weight="800" fill="${fg}">${escapeHtml(initials)}</text>
      <text x="150" y="235" text-anchor="middle" font-family="Manrope, sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${fg}" fill-opacity="0.86">${escapeHtml(project.name.toUpperCase().slice(0, 18))}</text>
    </svg>
  `.trim();
}

function createCoverSvg(project: Project) {
  const [c1, c2, c3] = [
    project.palette[0] || "#519aaa",
    project.palette[1] || "#ffffff",
    project.palette[2] || "#17333a",
  ];
  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cover ${escapeHtml(project.name)}">
      <defs>
        <linearGradient id="coverGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c3}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" rx="48" fill="url(#coverGradient)" />
      <rect x="26" y="26" width="1148" height="578" rx="38" fill="rgba(255,255,255,0.06)" />
      <path d="M810 70C970 110 1105 255 1128 470" stroke="rgba(255,255,255,0.20)" stroke-width="42" stroke-linecap="round" fill="none" />
      <text x="84" y="216" font-family="Syne, sans-serif" font-size="88" font-weight="800" fill="${c2}">${escapeHtml(project.name)}</text>
      <text x="84" y="294" font-family="Manrope, sans-serif" font-size="30" font-weight="600" fill="${c2}" fill-opacity="0.88">${escapeHtml(project.slogan)}</text>
      <text x="84" y="520" font-family="Manrope, sans-serif" font-size="24" font-weight="600" fill="${c2}" fill-opacity="0.72">${escapeHtml(project.styleLine)}</text>
      <text x="84" y="562" font-family="Manrope, sans-serif" font-size="22" font-weight="500" fill="${c2}" fill-opacity="0.56">BaseOf cover direction</text>
    </svg>
  `.trim();
}

function buildProjectPayload(brief: Brief, variationIndex = 0): Project {
  const preset = nichePresets[brief.niche] || nichePresets.Other;
  const preferredColors = extractPreferredColors(`${brief.name} ${brief.description} ${brief.colorNotes}`);
  const palette = makePalette(preset.palette, preferredColors, variationIndex);
  const styleLine = brief.customStyle ? `${brief.style}, ${brief.customStyle}` : brief.style;
  return {
    ...brief,
    palette,
    preferredColors,
    slogan: brief.includeSlogan ? preset.slogan : "Slogan disabled for this project",
    extras: brief.includeExtras ? preset.extras : ["Extra directions are turned off for this run"],
    direction: `${brief.name} should feel ${styleLine.toLowerCase()} in ${brief.niche.toLowerCase()}. ${
      preferredColors.length
        ? `Preferred colors were taken into account: ${preferredColors.join(", ")}.`
        : "Palette was inferred from category, naming, and style."
    }`,
    styleLine,
    variationIndex,
    logoSvg: "",
    coverSvg: "",
  };
}

function withRenderAssets(project: Project): Project {
  return {
    ...project,
    logoSvg: createLogoSvg(project),
    coverSvg: createCoverSvg(project),
  };
}

function slugify(input: string) {
  return input.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") || "baseof-project";
}

async function exportSvgAsPng(svgMarkup: string, filename: string, width: number, height: number) {
  const svgBlob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const image = new Image();
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("SVG load failed"));
    image.src = url;
  });
  ctx?.drawImage(image, 0, 0, width, height);
  URL.revokeObjectURL(url);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, "image/png");
}

function downloadTextFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function Home() {
  const [brief, setBrief] = useState<Brief>(INITIAL_BRIEF);
  const [project, setProject] = useState<Project | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [authOpen, setAuthOpen] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<SessionUser | null>(() =>
    loadJson<SessionUser | null>(STORAGE_KEYS.authUser, null),
  );
  const [accounts, setAccounts] = useState<User[]>(() =>
    loadJson<User[]>(STORAGE_KEYS.accounts, []),
  );
  const [projects, setProjects] = useState<SavedProject[]>(() =>
    loadJson<SavedProject[]>(STORAGE_KEYS.projects, []),
  );
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const userProjects = useMemo(() => {
    if (!currentUser) return [];
    return projects.filter((entry) => entry.owner === currentUser.email).slice(0, 4);
  }, [currentUser, projects]);

  function setBriefField<K extends keyof Brief>(key: K, value: Brief[K]) {
    setBrief((current) => ({ ...current, [key]: value }));
  }

  function openAuth(mode: AuthMode) {
    setAuthMode(mode);
    setAuthOpen(true);
  }

  function closeAuth() {
    setAuthOpen(false);
    setAuthPassword("");
  }

  function saveUsage(usage: Usage) {
    saveJson(STORAGE_KEYS.usage, usage);
  }

  function getUsage(): Usage {
    const today = new Date().toISOString().slice(0, 10);
    const usage = loadJson<Usage>(STORAGE_KEYS.usage, {
      firstProjectUsed: false,
      variationsDate: today,
      variationsUsed: 0,
    });
    if (usage.variationsDate !== today) {
      usage.variationsDate = today;
      usage.variationsUsed = 0;
    }
    return usage;
  }

  async function handleGenerate() {
    if (!brief.name.trim()) {
      setToast("Нужно хотя бы название проекта.");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    const nextProject = withRenderAssets(buildProjectPayload(brief, 0));
    setProject(nextProject);
    const usage = getUsage();
    usage.firstProjectUsed = true;
    saveUsage(usage);
    setLoading(false);
  }

  async function handleVariation() {
    if (!project) return;
    const usage = getUsage();
    if (usage.variationsUsed >= 2) {
      setToast("Лимит дополнительных вариантов на сегодня уже использован.");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 300));
    const variationIndex = usage.variationsUsed + 1;
    const nextProject = withRenderAssets(buildProjectPayload(brief, variationIndex));
    usage.variationsUsed = variationIndex;
    saveUsage(usage);
    setProject(nextProject);
    setLoading(false);
  }

  function handleSaveProject() {
    if (!project) return;
    if (!currentUser) {
      openAuth("signup");
      setToast("Сначала создай аккаунт, чтобы сохранять проекты.");
      return;
    }
    const nextProjects = [
      {
        id: `${slugify(project.name)}-${Date.now()}`,
        owner: currentUser.email,
        savedAt: new Date().toISOString(),
        payload: project,
      },
      ...projects,
    ];
    setProjects(nextProjects);
    saveJson(STORAGE_KEYS.projects, nextProjects);
    setToast("Проект сохранен.");
  }

  function handleAuthSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = authEmail.trim().toLowerCase();
    const password = authPassword.trim();
    if (!email || password.length < 6) {
      setToast("Нужен валидный email и пароль от 6 символов.");
      return;
    }

    if (authMode === "signup") {
      if (accounts.some((account) => account.email === email)) {
        setToast("Такой аккаунт уже существует.");
        return;
      }
      const newUser: User = {
        email,
        password,
        plan: "free",
        createdAt: new Date().toISOString(),
      };
      const nextAccounts = [...accounts, newUser];
      const sessionUser: SessionUser = { email, plan: "free", createdAt: newUser.createdAt };
      setAccounts(nextAccounts);
      setCurrentUser(sessionUser);
      saveJson(STORAGE_KEYS.accounts, nextAccounts);
      saveJson(STORAGE_KEYS.authUser, sessionUser);
      setToast("Аккаунт создан. Теперь можно сохранять проекты.");
      closeAuth();
      return;
    }

    const account = accounts.find((item) => item.email === email && item.password === password);
    if (!account) {
      setToast("Не получилось войти. Проверь email и пароль.");
      return;
    }
    const sessionUser: SessionUser = {
      email: account.email,
      plan: account.plan,
      createdAt: account.createdAt,
    };
    setCurrentUser(sessionUser);
    saveJson(STORAGE_KEYS.authUser, sessionUser);
    setToast("Вход выполнен.");
    closeAuth();
  }

  function handleLogout() {
    setCurrentUser(null);
    window.localStorage.removeItem(STORAGE_KEYS.authUser);
    setToast("Выход выполнен.");
  }

  return (
    <div className="app-shell">
      <header className="topbar glass-panel">
        <div className="brand-block">
          <div className="brand-name">BaseOf</div>
          <div className="brand-meta">local auth MVP inside Next.js</div>
        </div>
        <div className="topbar-tags">
          <span className="status-pill">Pro $1.99</span>
          <span className="status-pill subtle">{currentUser ? currentUser.email : "guest mode"}</span>
        </div>
        <div className="topbar-actions">
          {currentUser ? (
            <button className="ghost-button" onClick={handleLogout}>Выйти</button>
          ) : (
            <>
              <button className="ghost-button" onClick={() => openAuth("login")}>Войти</button>
              <button className="primary-button" onClick={() => openAuth("signup")}>Создать аккаунт</button>
            </>
          )}
        </div>
      </header>

      <main className="workspace">
        <section className="hero-strip">
          <div>
            <div className="hero-kicker">Регистрация уже работает</div>
            <h1 className="hero-title">Теперь BaseOf умеет создавать аккаунт, входить и сохранять проекты.</h1>
            <p className="hero-copy">
              Это рабочая локальная регистрация внутри браузера. Она уже годится для демо, проверки flow и пользовательских сценариев,
              а следующим слоем можно подключить Supabase или другой backend без пересборки всего интерфейса.
            </p>
          </div>
          <div className="hero-side glass-panel">
            <div className="hero-side-title">Что уже умеет auth</div>
            <ul className="hero-list">
              <li>создание аккаунта по email и паролю</li>
              <li>вход по сохраненным данным</li>
              <li>сессия в localStorage</li>
              <li>сохранение проектов на пользователя</li>
            </ul>
          </div>
        </section>

        <section className="workspace-grid">
          <div className="builder-card glass-panel">
            <div className="section-head">
              <div>
                <div className="section-kicker">Бриф</div>
                <h2>Собрать новый бренд-пак</h2>
              </div>
              <span className="status-pill">1-й запуск = Pro</span>
            </div>

            <label className="field">
              <span>Название проекта</span>
              <input
                value={brief.name}
                onChange={(event) => setBriefField("name", event.target.value)}
                placeholder="Red White Studio"
              />
            </label>

            <div className="field-grid">
              <label className="field">
                <span>Стиль</span>
                <select value={brief.style} onChange={(event) => setBriefField("style", event.target.value)}>
                  <option>Minimal and clean</option>
                  <option>Premium and calm</option>
                  <option>Bold and active</option>
                  <option>Tech and precise</option>
                  <option>Friendly and warm</option>
                </select>
              </label>
              <label className="field">
                <span>Категория</span>
                <select value={brief.niche} onChange={(event) => setBriefField("niche", event.target.value)}>
                  {Object.keys(nichePresets).map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="field">
              <span>Своя стилистическая заметка</span>
              <input
                value={brief.customStyle}
                onChange={(event) => setBriefField("customStyle", event.target.value)}
                placeholder="soft glass, glossy minimal, editorial tech"
              />
            </label>

            <label className="field">
              <span>Описание</span>
              <textarea
                value={brief.description}
                onChange={(event) => setBriefField("description", event.target.value)}
                placeholder="Что это за проект, для кого он и какое ощущение должен давать."
              />
            </label>

            <label className="field">
              <span>Цвета или ограничения</span>
              <input
                value={brief.colorNotes}
                onChange={(event) => setBriefField("colorNotes", event.target.value)}
                placeholder="красный и белый, без черного, акцент #519aaa"
              />
            </label>

            <div className="toggle-row">
              <label className="toggle-line">
                <input
                  type="checkbox"
                  checked={brief.includeSlogan}
                  onChange={(event) => setBriefField("includeSlogan", event.target.checked)}
                />
                <span>Добавить слоган</span>
              </label>
              <label className="toggle-line">
                <input
                  type="checkbox"
                  checked={brief.includeExtras}
                  onChange={(event) => setBriefField("includeExtras", event.target.checked)}
                />
                <span>Добавить доп. направления</span>
              </label>
            </div>

            <div className="button-row">
              <button className="primary-button wide" onClick={handleGenerate} disabled={loading}>
                {loading ? "Собираю..." : "Сгенерировать основу"}
              </button>
              <button className="ghost-button" onClick={handleVariation} disabled={!project || loading}>
                Новый вариант
              </button>
            </div>
          </div>

          <div className="results-card glass-panel">
            <div className="section-head">
              <div>
                <div className="section-kicker">Результат</div>
                <h2>Живой предпросмотр</h2>
              </div>
              <button className="ghost-button" onClick={handleSaveProject} disabled={!project}>
                Сохранить
              </button>
            </div>

            {!project ? (
              <div className="empty-state">Здесь появятся логотип, палитра и обложка после первой генерации.</div>
            ) : (
              <div className="results-layout">
                <div className="result-panel">
                  <div className="result-panel-head">
                    <span>Логотип</span>
                    <div className="inline-actions">
                      <button
                        className="ghost-button small"
                        onClick={() => downloadTextFile(`${slugify(project.name)}-logo.svg`, project.logoSvg, "image/svg+xml")}
                      >
                        SVG
                      </button>
                      <button
                        className="ghost-button small"
                        onClick={() => exportSvgAsPng(project.logoSvg, `${slugify(project.name)}-logo.png`, 1200, 1200)}
                      >
                        PNG
                      </button>
                    </div>
                  </div>
                  <div className="logo-stage" dangerouslySetInnerHTML={{ __html: project.logoSvg }} />
                </div>

                <div className="result-panel">
                  <div className="result-panel-head">
                    <span>Обложка</span>
                    <button
                      className="ghost-button small"
                      onClick={() => downloadTextFile(`${slugify(project.name)}-cover.svg`, project.coverSvg, "image/svg+xml")}
                    >
                      SVG
                    </button>
                  </div>
                  <div className="cover-stage">
                    <div
                      className="cover-card"
                      style={{ background: `linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[2]} 100%)` }}
                    >
                      <div className="cover-copy">
                        <strong>{project.name}</strong>
                        <span>{project.slogan}</span>
                        <small>{project.styleLine}</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-panel">
                  <div className="result-panel-head">
                    <span>Палитра</span>
                  </div>
                  <div className="palette-list">
                    {project.palette.map((color) => (
                      <div className="palette-chip" key={color}>
                        <div className="palette-swatch" style={{ background: color }} />
                        <code>{color}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="result-panel">
                  <div className="result-panel-head">
                    <span>Основа бренда</span>
                  </div>
                  <div className="copy-stack">
                    <div>
                      <strong>Слоган</strong>
                      <p>{project.slogan}</p>
                    </div>
                    <div>
                      <strong>Направление</strong>
                      <p>{project.direction}</p>
                    </div>
                    <div>
                      <strong>Следующие материалы</strong>
                      <ul>
                        {project.extras.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="saved-area">
          <div className="saved-head">
            <div>
              <div className="section-kicker">Аккаунт</div>
              <h2 className="saved-title">{currentUser ? "Сохраненные проекты" : "Регистрация нужна для сохранения"}</h2>
            </div>
          </div>
          <div className="saved-grid">
            {currentUser ? (
              userProjects.length ? (
                userProjects.map((entry) => (
                  <article className="saved-card glass-panel" key={entry.id}>
                    <strong>{entry.payload.name}</strong>
                    <span>{entry.payload.styleLine}</span>
                    <small>{new Date(entry.savedAt).toLocaleString()}</small>
                  </article>
                ))
              ) : (
                <div className="saved-card glass-panel">Пока нет сохраненных проектов для {currentUser.email}.</div>
              )
            ) : (
              <div className="saved-card glass-panel">
                Создай аккаунт, и после этого сохранение начнет работать прямо в этом приложении.
              </div>
            )}
          </div>
        </section>
      </main>

      {authOpen ? (
        <div className="modal-backdrop" onClick={closeAuth}>
          <div className="auth-modal glass-panel" onClick={(event) => event.stopPropagation()}>
            <div className="auth-switch">
              <button
                className={`ghost-button small ${authMode === "signup" ? "is-active" : ""}`}
                onClick={() => setAuthMode("signup")}
              >
                Создать
              </button>
              <button
                className={`ghost-button small ${authMode === "login" ? "is-active" : ""}`}
                onClick={() => setAuthMode("login")}
              >
                Войти
              </button>
            </div>
            <h3>{authMode === "signup" ? "Создать аккаунт BaseOf" : "Войти в BaseOf"}</h3>
            <p>
              Регистрация уже рабочая: аккаунт создается, сохраняется локально, после входа проекты можно записывать на пользователя.
            </p>
            <form className="auth-form" onSubmit={handleAuthSubmit}>
              <label className="field">
                <span>Email</span>
                <input value={authEmail} onChange={(event) => setAuthEmail(event.target.value)} type="email" required />
              </label>
              <label className="field">
                <span>Пароль</span>
                <input value={authPassword} onChange={(event) => setAuthPassword(event.target.value)} type="password" minLength={6} required />
              </label>
              <button className="primary-button wide" type="submit">
                {authMode === "signup" ? "Создать аккаунт" : "Войти"}
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
