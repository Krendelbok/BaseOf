const STORAGE_KEYS = {
  authUser: "baseof.auth.user",
  accounts: "baseof.auth.accounts",
  projects: "baseof.projects",
  usage: "baseof.usage"
};

const colorDictionary = {
  red: "#e53935",
  "красный": "#e53935",
  white: "#ffffff",
  "белый": "#ffffff",
  black: "#101010",
  "черный": "#101010",
  "чёрный": "#101010",
  blue: "#2563eb",
  "синий": "#2563eb",
  "голубой": "#519aaa",
  teal: "#519aaa",
  "бирюзовый": "#519aaa",
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
  "серый": "#6b7280"
};

const nichePresets = {
  "Freelance design": {
    palette: ["#519aaa", "#17333a", "#f1deba"],
    slogan: "Выглядит собранно с первого контакта",
    extras: ["Обложка для Telegram", "Визуал для презентации услуг", "Плашка для кейсов"]
  },
  "Creative studio": {
    palette: ["#519aaa", "#1d1f3b", "#f1ebff"],
    slogan: "Точная подача для сильной студии",
    extras: ["Обложка портфолио", "Визуал для оффера", "Сетап для соцсетей"]
  },
  "Fitness coach": {
    palette: ["#519aaa", "#14292f", "#def6ef"],
    slogan: "Уверенный ритм и читаемый бренд",
    extras: ["Обложка для программы", "Пост с пакетом услуг", "Карусель для прогресса"]
  },
  "Coffee shop": {
    palette: ["#519aaa", "#5a3b2d", "#f5e2cb"],
    slogan: "Теплый бренд, который легко вспомнить",
    extras: ["Меню-обложка", "Пост с новинкой", "Витринная карточка"]
  },
  "Online store": {
    palette: ["#519aaa", "#182634", "#f4f8fb"],
    slogan: "Товар выглядит надежно и чисто",
    extras: ["Хедер магазина", "Промо-баннер", "Карточка продукта"]
  },
  Education: {
    palette: ["#519aaa", "#27324f", "#fbf0c8"],
    slogan: "Знание упаковано спокойно и ясно",
    extras: ["Обложка курса", "Плашка урока", "Пост с анонсом"]
  },
  "Tech service": {
    palette: ["#519aaa", "#122730", "#dff2f5"],
    slogan: "Технично, чисто и без лишнего шума",
    extras: ["Обложка сервиса", "Визуал для обновления", "Скрин-рамка для продукта"]
  },
  Other: {
    palette: ["#519aaa", "#1f3941", "#eef7f8"],
    slogan: "Стартовая база для сильного бренда",
    extras: ["Главная обложка", "Аватарка бренда", "Пост-объявление"]
  }
};

const generatorForm = document.getElementById("generatorForm");
const generateButton = document.getElementById("generateButton");
const resultsBody = document.getElementById("resultsBody");
const resultStatus = document.getElementById("resultStatus");
const variationButton = document.getElementById("variationButton");
const saveProjectButton = document.getElementById("saveProjectButton");
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSubmitButton = document.getElementById("authSubmitButton");
const authNote = document.getElementById("authNote");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const modeButtons = Array.from(document.querySelectorAll("[data-auth-mode]"));
const openAuthButtons = Array.from(document.querySelectorAll("[data-open-auth]"));
const closeAuthModalButton = document.getElementById("closeAuthModal");

let authMode = "signup";
let currentProject = null;

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getAccounts() {
  return loadJson(STORAGE_KEYS.accounts, []);
}

function getCurrentUser() {
  return loadJson(STORAGE_KEYS.authUser, null);
}

function setCurrentUser(user) {
  saveJson(STORAGE_KEYS.authUser, user);
  syncAuthButtons();
}

function syncAuthButtons() {
  const user = getCurrentUser();
  openAuthButtons.forEach((button) => {
    const mode = button.dataset.openAuth;
    if (mode === "login") {
      button.textContent = user ? user.email : "Войти";
    }
    if (mode === "signup") {
      button.textContent = user ? "Аккаунт" : "Создать аккаунт";
    }
  });
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3000);
}

function openAuthModal(mode = "signup") {
  authMode = mode;
  authModal.classList.remove("hidden");
  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  authTitle.textContent = mode === "signup" ? "Создать аккаунт BaseOf" : "Войти в BaseOf";
  authSubmitButton.textContent = mode === "signup" ? "Создать аккаунт" : "Войти";
  authNote.textContent = mode === "signup"
    ? "Пока это локальный MVP-режим без сервера."
    : "Следующий слой проекта заменит это на реальную авторизацию.";
  authEmail.focus();
}

function closeAuthModal() {
  authModal.classList.add("hidden");
}

function normalizeHex(hex) {
  if (hex.length === 4) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toLowerCase();
  }
  return hex.toLowerCase();
}

function uniqueColors(list) {
  const seen = new Set();
  return list.filter((value) => {
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractPreferredColors(text) {
  const source = text.toLowerCase();
  const found = [];
  const hexMatches = source.match(/#[0-9a-f]{3,6}\b/gi) || [];
  found.push(...hexMatches.map(normalizeHex));
  Object.entries(colorDictionary).forEach(([word, hex]) => {
    if (source.includes(word)) found.push(hex);
  });
  return uniqueColors(found);
}

function makePalette(basePalette, preferredColors, variationIndex) {
  const merged = uniqueColors([...preferredColors, ...basePalette]);
  if (variationIndex % 2 === 1 && merged.length >= 3) {
    return [merged[1], merged[0], merged[2]];
  }
  return merged.slice(0, 3);
}

function buildInitials(name) {
  const chunks = name.replace(/[^\p{L}\p{N}\s-]/gu, " ").split(/\s+/).filter(Boolean).slice(0, 2);
  return (chunks.map((chunk) => chunk[0]).join("") || name.slice(0, 2) || "BO").toUpperCase();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createLogoSvg(project) {
  const bg = project.palette[0] || "#519aaa";
  const fg = project.palette[1] || "#ffffff";
  const accent = project.palette[2] || "#17333a";
  const initials = buildInitials(project.name);
  return `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Логотип ${escapeHtml(project.name)}">
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

function createCoverSvg(project) {
  const [c1, c2, c3] = [
    project.palette[0] || "#519aaa",
    project.palette[1] || "#ffffff",
    project.palette[2] || "#17333a"
  ];
  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Обложка ${escapeHtml(project.name)}">
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

function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") || "baseof-project";
}

function downloadTextFile(filename, content, mimeType) {
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

async function exportSvgAsPng(svgMarkup, filename, width, height) {
  const svgBlob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const image = new Image();
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
    image.src = url;
  });
  ctx.drawImage(image, 0, 0, width, height);
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

function getUsage() {
  const today = new Date().toISOString().slice(0, 10);
  const usage = loadJson(STORAGE_KEYS.usage, {
    firstProjectUsed: false,
    variationsDate: today,
    variationsUsed: 0
  });
  if (usage.variationsDate !== today) {
    usage.variationsDate = today;
    usage.variationsUsed = 0;
  }
  return usage;
}

function saveUsage(usage) {
  saveJson(STORAGE_KEYS.usage, usage);
}

function readFormValues() {
  return {
    name: document.getElementById("bizName").value.trim(),
    style: document.getElementById("style").value.trim(),
    customStyle: document.getElementById("customStyle").value.trim(),
    niche: document.getElementById("niche").value.trim(),
    description: document.getElementById("bizDesc").value.trim(),
    colorNotes: document.getElementById("bizColors").value.trim(),
    includeSlogan: document.getElementById("includeSlogan").checked,
    includeExtras: document.getElementById("includeExtras").checked
  };
}

function buildProjectPayload(formValues, variationIndex = 0) {
  const preset = nichePresets[formValues.niche] || nichePresets.Other;
  const preferredColors = extractPreferredColors(`${formValues.name} ${formValues.description} ${formValues.colorNotes}`);
  const palette = makePalette(preset.palette, preferredColors, variationIndex);
  const styleLine = formValues.customStyle
    ? `${formValues.style}, ${formValues.customStyle}`
    : formValues.style;
  const extras = formValues.includeExtras ? preset.extras : ["Дополнительные направления отключены в этом запуске"];
  const direction = `${formValues.name} стоит подать как ${styleLine.toLowerCase()} бренд в категории «${formValues.niche}». ${
    preferredColors.length
      ? `Указанные цвета учтены как приоритет: ${preferredColors.join(", ")}.`
      : "Палитра подобрана по стилю, названию и категории."
  }`;

  const project = {
    ...formValues,
    palette,
    preferredColors,
    slogan: formValues.includeSlogan ? preset.slogan : "Слоган отключен для этого проекта",
    extras,
    direction,
    styleLine,
    variationIndex,
    logoSvg: "",
    coverSvg: ""
  };

  project.logoSvg = createLogoSvg(project);
  project.coverSvg = createCoverSvg(project);
  return project;
}

function renderProject(project) {
  const template = document.getElementById("resultTemplate");
  const fragment = template.content.cloneNode(true);

  fragment.getElementById("logoPreviewMount").innerHTML = project.logoSvg;

  const coverMount = fragment.getElementById("coverPreviewMount");
  coverMount.innerHTML = `
    <div class="cover-preview-card" style="background:linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[2]} 100%)">
      <div class="cover-preview-meta">
        <strong>${escapeHtml(project.name)}</strong>
        <span>${escapeHtml(project.slogan)}</span>
        <small>${escapeHtml(project.styleLine)}</small>
      </div>
    </div>
  `;

  const paletteMount = fragment.getElementById("paletteMount");
  project.palette.forEach((color) => {
    const chip = document.createElement("div");
    chip.className = "palette-chip";
    chip.innerHTML = `
      <div class="palette-swatch" style="background:${color}"></div>
      <code>${color}</code>
    `;
    paletteMount.appendChild(chip);
  });

  fragment.getElementById("sloganMount").textContent = project.slogan;
  fragment.getElementById("directionMount").textContent = project.direction;

  const extrasMount = fragment.getElementById("extrasMount");
  project.extras.forEach((extra) => {
    const item = document.createElement("li");
    item.textContent = extra;
    extrasMount.appendChild(item);
  });

  resultsBody.replaceChildren(fragment);
  resultStatus.textContent = project.preferredColors.length
    ? `Учтены пользовательские цвета: ${project.preferredColors.join(", ")}.`
    : "Цвета подобраны автоматически по брифу.";
  variationButton.disabled = false;
  saveProjectButton.disabled = false;

  resultsBody.querySelector("[data-export-logo='svg']").addEventListener("click", () => {
    downloadTextFile(`${slugify(project.name)}-logo.svg`, project.logoSvg, "image/svg+xml");
  });

  resultsBody.querySelector("[data-export-logo='png']").addEventListener("click", async () => {
    await exportSvgAsPng(project.logoSvg, `${slugify(project.name)}-logo.png`, 1200, 1200);
  });

  resultsBody.querySelector("[data-export-cover='svg']").addEventListener("click", () => {
    downloadTextFile(`${slugify(project.name)}-cover.svg`, project.coverSvg, "image/svg+xml");
  });
}

function saveProject(project) {
  const user = getCurrentUser();
  if (!user) {
    openAuthModal("signup");
    showToast("Сначала создай аккаунт, чтобы сохранять проекты.");
    return false;
  }
  const projects = loadJson(STORAGE_KEYS.projects, []);
  projects.unshift({
    id: `${slugify(project.name)}-${Date.now()}`,
    owner: user.email,
    savedAt: new Date().toISOString(),
    payload: project
  });
  saveJson(STORAGE_KEYS.projects, projects);
  showToast("Проект сохранен локально в MVP-режиме.");
  return true;
}

generatorForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const values = readFormValues();
  if (!values.name || !values.style) {
    showToast("Нужны хотя бы название и стиль.");
    return;
  }

  generateButton.disabled = true;
  generateButton.textContent = "Собираю...";

  await new Promise((resolve) => window.setTimeout(resolve, 650));

  const usage = getUsage();
  currentProject = buildProjectPayload(values, 0);
  renderProject(currentProject);
  usage.firstProjectUsed = true;
  saveUsage(usage);

  generateButton.disabled = false;
  generateButton.textContent = "Сгенерировать основу";
});

variationButton.addEventListener("click", async () => {
  if (!currentProject) return;
  const usage = getUsage();
  if (usage.variationsUsed >= 2) {
    showToast("Лимит дополнительных вариантов на сегодня уже использован.");
    return;
  }

  variationButton.disabled = true;
  variationButton.textContent = "Готовлю...";
  const nextVariation = usage.variationsUsed + 1;

  await new Promise((resolve) => window.setTimeout(resolve, 450));

  currentProject = buildProjectPayload(readFormValues(), nextVariation);
  renderProject(currentProject);
  usage.variationsUsed = nextVariation;
  saveUsage(usage);

  variationButton.disabled = false;
  variationButton.textContent = "Новый вариант";
});

saveProjectButton.addEventListener("click", () => {
  if (!currentProject) return;
  saveProject(currentProject);
});

openAuthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentUser = getCurrentUser();
    if (currentUser && (button.dataset.openAuth === "login" || button.dataset.openAuth === "signup")) {
      showToast(`Активный аккаунт: ${currentUser.email}`);
      return;
    }
    openAuthModal(button.dataset.openAuth || "signup");
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => openAuthModal(button.dataset.authMode));
});

closeAuthModalButton.addEventListener("click", closeAuthModal);

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value.trim();
  if (!email || password.length < 6) {
    showToast("Нужен валидный email и пароль от 6 символов.");
    return;
  }

  const accounts = getAccounts();
  if (authMode === "signup") {
    if (accounts.some((account) => account.email === email)) {
      showToast("Такой аккаунт уже существует. Попробуй вход.");
      return;
    }

    const user = {
      email,
      password,
      plan: "free",
      createdAt: new Date().toISOString()
    };
    accounts.push(user);
    saveJson(STORAGE_KEYS.accounts, accounts);
    setCurrentUser({ email, plan: "free" });
    closeAuthModal();
    showToast("Аккаунт создан.");
    return;
  }

  const account = accounts.find((item) => item.email === email && item.password === password);
  if (!account) {
    showToast("Не получилось войти. Проверь email и пароль.");
    return;
  }

  setCurrentUser({ email: account.email, plan: account.plan || "free" });
  closeAuthModal();
  showToast("Вход выполнен.");
});

syncAuthButtons();
