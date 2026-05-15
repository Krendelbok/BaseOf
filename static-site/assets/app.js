const STORAGE_KEYS = {
  authUser: "baseof.auth.user",
  accounts: "baseof.auth.accounts",
  projects: "baseof.projects",
  usage: "baseof.usage",
  language: "baseof.language"
};

const DONATION_URL = "https://www.donationalerts.com/r/baseof";

const TRANSLATIONS = {
  "Главная": "Home",
  "Генератор": "Generator",
  "Услуги": "Services",
  "Примеры": "Examples",
  "Цены": "Pricing",
  "Регистрация": "Sign up",
  "О проекте": "About",
  "Аккаунт": "Account",
  "Войти": "Sign in",
  "Выйти": "Sign out",
  "Создать": "Create",
  "Создать аккаунт": "Create account",
  "Новый аккаунт": "New account",
  "Уже есть аккаунт": "Already have an account",
  "На главную": "Home",
  "Вернуться на главную": "Back home",
  "Открыть генератор": "Open generator",
  "Оплата через DonationAlerts (временно)": "DonationAlerts payment (temporary)",
  "ВНИМАНИЕ! Это временный способ оплаты для покупки подписки. Любой донат = подписка, но вы должны указать либо свой ник профиля на сайте, либо свои контактные данные Telegram.": "IMPORTANT! This is a temporary payment method for buying a subscription. Any donation = subscription, but you must include either your profile nickname on the site or your Telegram contact details.",
  "Минимальный донат уже выставлен на 2$ в любых валютах. Заранее спасибо за поддержку!": "The minimum donation is already set to $2 in any currency. Thank you in advance for the support!",
  "Оплатить подписку": "Pay for subscription",
  "Укажи ник или Telegram в донате, чтобы я мог вручную включить подписку.": "Add your site nickname or Telegram in the donation message so the subscription can be enabled manually.",
  "Freelance, Amazon, Wildberries, Ozon": "Freelance, Amazon, Wildberries, Ozon",
  "BaseOf собирает основу бренда и карточки товара из одного короткого брифа.": "BaseOf builds a brand and product-card foundation from one short brief.",
  "Сайт заточен под быстрый старт: фрилансер получает аккуратную подачу услуги, а продавец маркетплейса — визуальную базу для карточки, обложки и промо-блока.": "The site is tuned for a fast start: freelancers get a clean service presentation, and marketplace sellers get a visual base for a product card, cover, and promo block.",
  "Открыть генератор": "Open generator",
  "Посмотреть примеры": "View examples",
  "Название, палитра, короткий оффер и визуальная структура для первого экрана карточки.": "Name, palette, short offer, and visual structure for the first screen of a listing.",
  "Для кого": "Who it is for",
  "Две аудитории, один быстрый результат": "Two audiences, one fast result",
  "Фрилансеры и студии": "Freelancers and studios",
  "BaseOf помогает упаковать услугу: логотип-концепт, палитра, обложка портфолио и короткое направление для презентации клиенту.": "BaseOf helps package a service: logo concept, palette, portfolio cover, and a short direction for a client presentation.",
  "Карточки товаров": "Product cards",
  "Для Amazon, Wildberries и Ozon можно быстро собрать визуальный тон, оффер, цветовую систему и основу промо-баннера.": "For Amazon, Wildberries, and Ozon, you can quickly build visual tone, offer, color system, and a promo-banner foundation.",
  "Как работает": "How it works",
  "От идеи до готового набора": "From idea to ready kit",
  "Заполняешь бриф": "Fill the brief",
  "Название, ниша, стиль, цвета и короткое описание продукта или услуги.": "Name, niche, style, colors, and a short product or service description.",
  "Получаешь основу": "Get the foundation",
  "Генератор показывает логотип, палитру, обложку и текстовое направление.": "The generator shows a logo, palette, cover, and text direction.",
  "Экспортируешь": "Export",
  "Логотип можно скачать в SVG/PNG, а обложку — в SVG для дальнейшей доработки.": "Download the logo as SVG/PNG and the cover as SVG for further editing.",
  "Доделываешь карточку": "Finish the listing",
  "Берешь основу в Canva, Figma или Photoshop и собираешь финальные слайды товара.": "Take the foundation into Canva, Figma, or Photoshop and assemble final product slides.",
  "Маркетплейсы": "Marketplaces",
  "Сайт уже говорит с теми, кто делает карточки товаров.": "The site already speaks to people who make product cards.",
  "BaseOf не обещает магическую кнопку продаж. Его задача проще и полезнее: быстро дать визуальную систему, которую можно превратить в первый экран карточки, инфографику преимуществ, обложку набора и промо-баннер.": "BaseOf does not promise a magic sales button. Its job is simpler and more useful: quickly give you a visual system that can become a first listing slide, benefit infographic, bundle cover, and promo banner.",
  "Формат подходит не только для логотипов, но и для реальной упаковки товаров: от первого слайда до набора визуальных подсказок для дизайнера.": "The format works not only for logos, but also for real product packaging: from the first slide to visual cues for a designer.",
  "Собери основу под товар, услугу или магазин и сразу забери материалы для дальнейшей работы.": "Build a foundation for a product, service, or store and immediately take the materials into your next step.",
  "Собрать проект": "Build project",
  "Generator": "Generator",
  "Собери основу за один проход.": "Build the foundation in one pass.",
  "Введи название, нишу, стиль и ограничения. BaseOf создаст AI-логотип, палитру, обложку и текстовую основу для услуги или карточки товара.": "Enter the name, niche, style, and constraints. BaseOf will create an AI logo, palette, cover, and text foundation for a service or product card.",
  "Бриф": "Brief",
  "Собрать основу": "Build foundation",
  "1-й запуск = Pro": "1st run = Pro",
  "Название проекта": "Project name",
  "Стиль": "Style",
  "Минималистичный и чистый": "Minimal and clean",
  "Плотный и продающий": "Dense and sales-focused",
  "Премиальный и спокойный": "Premium and calm",
  "Технологичный и точный": "Technical and precise",
  "Мягкий и дружелюбный": "Soft and friendly",
  "Категория": "Category",
  "Карточка товара": "Product card",
  "Фриланс / дизайн": "Freelance / design",
  "Креативная студия": "Creative studio",
  "Интернет-магазин": "Online store",
  "Образование": "Education",
  "Тех-сервис": "Tech service",
  "Другое": "Other",
  "Своя стилистическая заметка": "Custom style note",
  "Описание": "Description",
  "Цвета или ограничения": "Colors or constraints",
  "Добавить слоган": "Add slogan",
  "Добавить доп. направления": "Add extra directions",
  "Сгенерировать AI-основу": "Generate AI foundation",
  "Собери первый набор, сохрани его в аккаунте и скачай файлы для дальнейшей работы. AI-логотип создается через Groq, а локальный вариант остается резервом.": "Build your first kit, save it to your account, and download the files for further work. The AI logo is created through Groq, while the local version stays as backup.",
  "Результат": "Result",
  "Живой предпросмотр": "Live preview",
  "Новый вариант": "New variant",
  "Сохранить": "Save",
  "Пока пусто. Заполни бриф, и здесь появятся логотип, палитра и обложка.": "Empty for now. Fill the brief and the logo, palette, and cover will appear here.",
  "Сюда встанет основной результат BaseOf.": "The main BaseOf result will appear here.",
  "Логотип": "Logo",
  "Обложка": "Cover",
  "Палитра": "Palette",
  "Текстовая основа": "Text foundation",
  "Слоган": "Slogan",
  "Направление": "Direction",
  "Что ещё можно сделать": "What else to make",
  "AI-логотип": "AI logo",
  "Нестандартные идеи для генератора": "Unusual generator ideas",
  "Что может выделить BaseOf среди обычных генераторов": "What can make BaseOf stand out from ordinary generators",
  "Marketplace scan score": "Marketplace scan score",
  "Оценка читаемости первого слайда: виден ли товар, выгода, бренд и главный акцент за 3 секунды.": "A first-slide readability score: whether product, benefit, brand, and main accent are visible in 3 seconds.",
  "AI taste mode": "AI taste mode",
  "Переключатель вкуса: спокойный премиум, агрессивная продажа, clean Amazon, яркий WB/Ozon.": "Taste switcher: calm premium, aggressive sales, clean Amazon, bright WB/Ozon.",
  "Competitor contrast": "Competitor contrast",
  "Подсказки, как визуально отличиться от соседних карточек без грязного дизайна.": "Hints for standing apart from nearby listings without messy design.",
  "Packshot prompt": "Packshot prompt",
  "Готовый промпт для будущего рендера товара: фон, свет, ракурс, материалы и настроение.": "A ready prompt for future product rendering: background, light, angle, materials, and mood.",
  "Platform presets": "Platform presets",
  "Отдельные режимы под Amazon, Wildberries, Ozon и фриланс-портфолио.": "Separate modes for Amazon, Wildberries, Ozon, and freelance portfolios.",
  "Before/after slide": "Before/after slide",
  "Идея слайда, где товар показывается через проблему до покупки и результат после.": "A slide idea showing the problem before purchase and the result after.",
  "Pricing": "Pricing",
  "Один понятный запуск без лишней витрины.": "One clear launch without extra storefront noise.",
  "Первый проект помогает проверить направление, а Pro подходит для тех, кто регулярно собирает визуальные основы для услуг, магазинов и карточек товаров.": "The first project helps test a direction, while Pro fits people who regularly build visual foundations for services, stores, and product cards.",
  "Первый проект": "First project",
  "Для проверки идеи, интерфейса и первого результата.": "For testing the idea, interface, and first result.",
  "Один полный бренд-набор": "One full brand kit",
  "Логотип SVG/PNG": "Logo SVG/PNG",
  "Обложка SVG": "Cover SVG",
  "Палитра и текстовое направление": "Palette and text direction",
  "Тариф для дополнительных вариантов и сохранения истории.": "A plan for extra variants and saved history.",
  "2 дополнительных варианта в день": "2 extra variants per day",
  "Сохранение проектов в аккаунте": "Saved projects in account",
  "Больше шаблонов под маркетплейсы": "More marketplace templates",
  "Удобная история бренд-наборов": "Convenient brand-kit history",
  "Временная оплата подписки": "Temporary subscription payment",
  "Сейчас подписка включается вручную после доната. В сообщении DonationAlerts обязательно напиши ник профиля BaseOf или Telegram, чтобы платеж можно было связать с аккаунтом.": "For now, subscriptions are enabled manually after a donation. In the DonationAlerts message, be sure to write your BaseOf profile nickname or Telegram so the payment can be linked to your account.",
  "Перейти к оплате": "Go to payment",
  "Когда нужен Pro": "When Pro is useful",
  "Pro имеет смысл, если ты делаешь карточки товаров партиями, тестируешь несколько визуальных направлений или готовишь разные варианты для клиента.": "Pro makes sense if you create product cards in batches, test several visual directions, or prepare variants for a client.",
  "Бесплатный старт остается для первого проекта, чтобы спокойно понять формат и качество результата.": "The free start remains for the first project, so you can understand the format and result quality calmly.",
  "Account": "Account",
  "Создай аккаунт и сохраняй свои наборы.": "Create an account and save your kits.",
  "Аккаунт нужен для проектов, палитр и вариантов, к которым удобно возвращаться после генерации.": "An account stores projects, palettes, and variants you can return to after generation.",
  "Имя": "Name",
  "Пароль": "Password",
  "Минимум 6 символов": "At least 6 characters",
  "Твой пароль": "Your password",
  "Профиль": "Profile",
  "Тариф": "Plan",
  "Сохраненные проекты": "Saved projects",
  "Создать новый": "Create new",
  "После доната напиши ник профиля или Telegram": "After donating, write your profile nickname or Telegram",
  "Это временный способ покупки подписки: любой донат от $2 считается оплатой, но без ника или контакта подписку невозможно привязать к аккаунту.": "This is a temporary subscription payment method: any donation from $2 counts as payment, but without a nickname or contact the subscription cannot be linked to your account.",
  "Открыть DonationAlerts": "Open DonationAlerts",
  "Services": "Services",
  "Не пустая витрина, а понятная упаковка задач.": "Not an empty storefront, but a clear task package.",
  "BaseOf лучше всего работает там, где нужно быстро показать направление: для портфолио фрилансера, обложки услуги, карточки товара или визуального теста перед полноценным дизайном.": "BaseOf works best where you need to show a direction quickly: freelance portfolio, service cover, product card, or a visual test before full design.",
  "Пакеты": "Packages",
  "Что можно собирать внутри BaseOf": "What you can build inside BaseOf",
  "Упаковка услуги": "Service packaging",
  "Быстрый логотип-концепт, палитра, слоган и обложка для профиля, кейса или презентации клиенту.": "A fast logo concept, palette, slogan, and cover for a profile, case, or client presentation.",
  "Мини-бренд магазина": "Store mini-brand",
  "Основа для баннера, аватарки, промо-плашек и единого вида товарной линейки.": "A foundation for a banner, avatar, promo badges, and a unified product-line look.",
  "Где это полезно сразу": "Where it is useful right away",
  "Чистый hero image direction, короткое УТП и визуальный язык для A+ content.": "Clean hero image direction, short USP, and visual language for A+ content.",
  "Главная обложка, выделение преимущества и яркий, но не шумный цветовой акцент.": "Main cover, highlighted benefit, and a bright but clean color accent.",
  "Аккуратная структура карточки: товар, выгода, характеристики, доверие.": "A neat listing structure: product, benefit, specs, trust.",
  "Единый стартовый стиль для предложения, аватарки, кейсов и первого контакта с клиентом.": "One starting style for offer, avatar, cases, and first client contact.",
  "Самый быстрый способ понять BaseOf — собрать один тестовый проект.": "The fastest way to understand BaseOf is to build one test project.",
  "Перейти в генератор": "Go to generator",
  "Examples": "Examples",
  "Покажи направление до большого дизайна.": "Show the direction before full design.",
  "Эти примеры не притворяются финальными AI-рендерами. Они показывают, какую основу можно быстро получить и затем доработать в рабочем редакторе.": "These examples do not pretend to be final AI renders. They show what foundation you can get quickly and then refine in a work editor.",
  "Электроника": "Electronics",
  "Контрастная палитра, сильный первый слайд, блоки под выгоды и характеристики.": "Contrast palette, strong first slide, blocks for benefits and specs.",
  "Косметика": "Cosmetics",
  "Мягкая подача, чистый фон, акцент на составе и понятный визуальный ритм.": "Soft presentation, clean background, focus on ingredients, and clear visual rhythm.",
  "Дизайнер услуг": "Service designer",
  "Логотип-концепт, обложка профиля и единый вид для кейсов.": "Logo concept, profile cover, and consistent case look.",
  "Что получается на выходе": "What you get",
  "Генератор отдает логотип в SVG/PNG, обложку в SVG, палитру, слоган, направление и список следующих визуалов.": "The generator returns a logo in SVG/PNG, a cover in SVG, a palette, slogan, direction, and a list of next visuals.",
  "Этого достаточно, чтобы показать идею, протестировать позиционирование или быстро начать карточку товара без пустого листа.": "That is enough to show an idea, test positioning, or quickly start a product card without a blank page.",
  "Лучший пример будет тот, который ты соберешь под свой товар или услугу.": "The best example will be the one you build for your own product or service.",
  "Собрать пример": "Build example",
  "About": "About",
  "BaseOf нужен, чтобы старт не упирался в пустой лист.": "BaseOf exists so the start does not get stuck on a blank page.",
  "Проект помогает быстро получить первую визуальную систему для услуги, магазина или карточки товара. Это не замена дизайнеру, а быстрый черновик, который уже выглядит собранно.": "The project helps quickly get a first visual system for a service, store, or product card. It is not a designer replacement, but a fast draft that already looks assembled.",
  "Быстрый старт": "Fast start",
  "Короткий бриф превращается в логотип-концепт, палитру, обложку и текстовое направление.": "A short brief becomes a logo concept, palette, cover, and text direction.",
  "Рабочий фокус": "Work focus",
  "BaseOf помогает не спорить с пустым листом, а сразу выбрать визуальный курс для товара или услуги.": "BaseOf helps you stop arguing with a blank page and choose a visual course for a product or service.",
  "Главный фокус": "Main focus",
  "Фрилансеры, создатели карточек товаров и небольшие продавцы, которым нужна быстрая визуальная основа.": "Freelancers, product-card creators, and small sellers who need a fast visual foundation.",
  "Зарегистрируйся, чтобы сохранять проекты и быстрее возвращаться к своим наборам.": "Sign up to save projects and return to your kits faster.",
  "Эта страница не найдена.": "This page was not found.",
  "Возможно, ссылка устарела. Главная, генератор и страницы проекта доступны через верхнее меню.": "The link may be outdated. Home, generator, and project pages are available through the top menu.",
  "Как к тебе обращаться": "How should we call you",
  "Например: premium tech, clean marketplace, glossy minimal": "For example: premium tech, clean marketplace, glossy minimal",
  "Коротко: что за товар или услуга, для кого, какой эффект должен быть у первого экрана.": "Briefly: what product or service it is, who it is for, and what effect the first screen should have.",
  "красный и белый, без черного, акцент #2f7d8c": "red and white, no black, accent #2f7d8c",
  "Создать аккаунт BaseOf": "Create a BaseOf account",
  "Войти в BaseOf": "Sign in to BaseOf",
  "После регистрации можно сохранить текущий проект.": "After signing up, you can save the current project.",
  "Войди, чтобы продолжить работу со своими проектами.": "Sign in to continue working with your projects.",
  "Groq создает AI-логотип. Локальный вариант уже показан как резерв.": "Groq is creating the AI logo. The local version is already shown as backup.",
  "AI-логотип готов. Палитра и текстовая основа собраны по брифу.": "AI logo is ready. Palette and text foundation were built from the brief.",
  "AI-ключ не настроен, поэтому показан резервный локальный логотип.": "The AI key is not configured, so the backup local logo is shown.",
  "AI-логотип временно недоступен, поэтому показан резервный локальный вариант.": "The AI logo is temporarily unavailable, so the backup local version is shown.",
  "Учтены пользовательские цвета": "Custom colors applied",
  "Цвета подобраны автоматически по брифу.": "Colors were selected automatically from the brief.",
  "Зарегистрируйся, чтобы сохранять проекты.": "Sign up to save projects.",
  "Проект сохранен в аккаунте.": "Project saved to account.",
  "Нужны хотя бы название и стиль.": "At least a name and style are required.",
  "Собираю...": "Building...",
  "Лимит дополнительных вариантов на сегодня уже использован.": "The extra variant limit for today has already been used.",
  "Готовлю...": "Preparing...",
  "Активный аккаунт": "Active account",
  "Выход выполнен.": "Signed out.",
  "Пока нет сохраненных проектов": "No saved projects yet",
  "Открой генератор, собери первый набор и нажми «Сохранить».": "Open the generator, build your first kit, and click Save.",
  "Стартовая база для сильного бренда": "A starting base for a strong brand",
  "Дополнительные направления отключены в этом запуске": "Extra directions are disabled for this run",
  "Слоган отключен для этого проекта": "Slogan is disabled for this project",
  "Локальный резервный логотип": "Backup local logo",
  "Быстрый резервный знак на базе названия, палитры и категории.": "A quick backup mark based on the name, palette, and category.",
  "Выглядит собранно с первого контакта": "Looks polished from the first contact",
  "Обложка портфолио": "Portfolio cover",
  "Плашка для кейсов": "Case badge",
  "Мини-презентация услуги": "Mini service presentation",
  "Карточка сразу объясняет ценность товара": "The product card explains value immediately",
  "Главный слайд товара": "Main product slide",
  "Инфографика преимуществ": "Benefit infographic",
  "Баннер для акции": "Promo banner",
  "Товар читается быстро и выглядит дороже": "The product reads quickly and looks more premium",
  "Обложка карточки": "Listing cover",
  "Слайд с УТП": "USP slide",
  "Плашка состава или комплектации": "Ingredients or bundle badge",
  "Точная подача для сильной студии": "Precise presentation for a strong studio",
  "Визуал для оффера": "Offer visual",
  "Сетап для соцсетей": "Social media setup",
  "Магазин выглядит надежно и чисто": "The store looks trustworthy and clean",
  "Хедер магазина": "Store header",
  "Промо-баннер": "Promo banner",
  "Карточка продукта": "Product card",
  "Знание упаковано спокойно и ясно": "Knowledge is packaged calmly and clearly",
  "Обложка курса": "Course cover",
  "Плашка урока": "Lesson badge",
  "Пост с анонсом": "Announcement post",
  "Технично, чисто и без лишнего шума": "Technical, clean, and without extra noise",
  "Обложка сервиса": "Service cover",
  "Визуал для обновления": "Update visual",
  "Скрин-рамка для продукта": "Product screenshot frame",
  "Главная обложка": "Main cover",
  "Аватарка бренда": "Brand avatar",
  "Пост-объявление": "Announcement post",
  "BaseOf — бренд-основа для фрилансеров и карточек товаров": "BaseOf — brand foundations for freelancers and product cards",
  "Генератор BaseOf — логотип, палитра и обложка": "BaseOf Generator — logo, palette, and cover",
  "Цены BaseOf — запуск и Pro": "BaseOf Pricing — start and Pro",
  "Аккаунт BaseOf — регистрация и вход": "BaseOf Account — sign up and sign in",
  "Услуги BaseOf — фриланс и карточки товаров": "BaseOf Services — freelance and product cards",
  "Примеры BaseOf — карточки, обложки и бренд-основы": "BaseOf Examples — cards, covers, and brand foundations",
  "О BaseOf — быстрый старт визуальной основы": "About BaseOf — fast visual foundation",
  "BaseOf — Страница не найдена": "BaseOf — Page not found",
  "Нужен email и пароль от 6 символов.": "Email and a password of at least 6 characters are required.",
  "Такой аккаунт уже существует. Попробуй вход.": "This account already exists. Try signing in.",
  "Аккаунт создан.": "Account created.",
  "Аккаунт не найден. Зарегистрируйся или проверь email.": "Account not found. Sign up or check the email.",
  "Не получилось войти. Проверь пароль.": "Could not sign in. Check the password.",
  "Вход выполнен.": "Signed in."
};

function getCurrentLang() {
  return localStorage.getItem(STORAGE_KEYS.language) === "en" ? "en" : "ru";
}

function t(ruText) {
  return getCurrentLang() === "en" ? (TRANSLATIONS[ruText] || ruText) : ruText;
}

const colorDictionary = {
  red: "#ee5f55",
  "красный": "#ee5f55",
  white: "#ffffff",
  "белый": "#ffffff",
  black: "#101114",
  "черный": "#101114",
  "чёрный": "#101114",
  blue: "#4457ff",
  "синий": "#4457ff",
  "голубой": "#2f7d8c",
  teal: "#2f7d8c",
  "бирюзовый": "#2f7d8c",
  green: "#1c8b66",
  "зеленый": "#1c8b66",
  "зелёный": "#1c8b66",
  yellow: "#f4bd43",
  "желтый": "#f4bd43",
  "жёлтый": "#f4bd43",
  orange: "#f28b2e",
  "оранжевый": "#f28b2e",
  purple: "#7a5cff",
  "фиолетовый": "#7a5cff",
  pink: "#e85f9d",
  "розовый": "#e85f9d",
  gold: "#c79a24",
  "золотой": "#c79a24",
  silver: "#aeb7c2",
  "серебряный": "#aeb7c2",
  brown: "#8b5e3c",
  "коричневый": "#8b5e3c",
  gray: "#728091",
  grey: "#728091",
  "серый": "#728091"
};

const nichePresets = {
  "Freelance design": {
    palette: ["#2f7d8c", "#101114", "#f4bd43"],
    slogan: "Выглядит собранно с первого контакта",
    extras: ["Обложка портфолио", "Плашка для кейсов", "Мини-презентация услуги"]
  },
  "Marketplace card": {
    palette: ["#ee5f55", "#101114", "#f4bd43"],
    slogan: "Карточка сразу объясняет ценность товара",
    extras: ["Главный слайд товара", "Инфографика преимуществ", "Баннер для акции"]
  },
  "Amazon listing": {
    palette: ["#4457ff", "#101114", "#f4bd43"],
    slogan: "Clear product value for a fast listing scan",
    extras: ["Hero image direction", "Benefit bullets", "A+ content block"]
  },
  "Wildberries/Ozon": {
    palette: ["#7a5cff", "#101114", "#2f7d8c"],
    slogan: "Товар читается быстро и выглядит дороже",
    extras: ["Обложка карточки", "Слайд с УТП", "Плашка состава или комплектации"]
  },
  "Creative studio": {
    palette: ["#2f7d8c", "#25213f", "#ee5f55"],
    slogan: "Точная подача для сильной студии",
    extras: ["Обложка портфолио", "Визуал для оффера", "Сетап для соцсетей"]
  },
  "Online store": {
    palette: ["#1c8b66", "#101114", "#e9edf4"],
    slogan: "Магазин выглядит надежно и чисто",
    extras: ["Хедер магазина", "Промо-баннер", "Карточка продукта"]
  },
  Education: {
    palette: ["#4457ff", "#27324f", "#f4bd43"],
    slogan: "Знание упаковано спокойно и ясно",
    extras: ["Обложка курса", "Плашка урока", "Пост с анонсом"]
  },
  "Tech service": {
    palette: ["#2f7d8c", "#101114", "#dbeafe"],
    slogan: "Технично, чисто и без лишнего шума",
    extras: ["Обложка сервиса", "Визуал для обновления", "Скрин-рамка для продукта"]
  },
  Other: {
    palette: ["#2f7d8c", "#101114", "#e9edf4"],
    slogan: "Стартовая база для сильного бренда",
    extras: ["Главная обложка", "Аватарка бренда", "Пост-объявление"]
  }
};

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
  syncAccountLinks();
  window.dispatchEvent(new CustomEvent("baseof-auth-change"));
}

function clearCurrentUser() {
  localStorage.removeItem(STORAGE_KEYS.authUser);
  syncAccountLinks();
  window.dispatchEvent(new CustomEvent("baseof-auth-change"));
}

function syncAccountLinks() {
  const user = getCurrentUser();
  document.querySelectorAll("[data-account-link]").forEach((link) => {
    link.textContent = user ? t("Аккаунт") : t("Регистрация");
    link.setAttribute("href", "./account.html");
    if (user) link.setAttribute("title", user.email);
  });
  document.querySelectorAll("[data-login-control]").forEach((link) => {
    link.textContent = user ? t("Аккаунт") : t("Войти");
    link.setAttribute("href", user ? "./account.html" : "./account.html#login");
    if (user) link.setAttribute("title", user.email);
  });
  document.querySelectorAll("[data-register-control]").forEach((link) => {
    link.textContent = user ? t("Выйти") : t("Регистрация");
    link.setAttribute("href", user ? "#" : "./account.html");
    link.toggleAttribute("data-logout-control", Boolean(user));
  });
}

function applyLanguage(root = document.body) {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.__baseofOriginalText) node.__baseofOriginalText = node.nodeValue;
    const original = node.__baseofOriginalText;
    const trimmed = original.trim();
    const replacement = lang === "en" ? TRANSLATIONS[trimmed] : trimmed;
    if (!replacement) return;
    node.nodeValue = original.replace(trimmed, replacement);
  });

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
    if (!field.dataset.baseofPlaceholder) field.dataset.baseofPlaceholder = field.getAttribute("placeholder") || "";
    const original = field.dataset.baseofPlaceholder;
    field.setAttribute("placeholder", lang === "en" ? (TRANSLATIONS[original] || original) : original);
  });

  document.querySelectorAll("[aria-label]").forEach((node) => {
    if (!node.dataset.baseofAriaLabel) node.dataset.baseofAriaLabel = node.getAttribute("aria-label") || "";
    const original = node.dataset.baseofAriaLabel;
    node.setAttribute("aria-label", lang === "en" ? (TRANSLATIONS[original] || original) : original);
  });

  if (!document.documentElement.dataset.baseofTitle) {
    document.documentElement.dataset.baseofTitle = document.title;
  }
  const originalTitle = document.documentElement.dataset.baseofTitle;
  document.title = lang === "en" ? (TRANSLATIONS[originalTitle] || originalTitle) : originalTitle;

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === lang);
    button.setAttribute("aria-pressed", String(button.dataset.langOption === lang));
  });
  syncAccountLinks();
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEYS.language, lang === "en" ? "en" : "ru");
  applyLanguage();
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

async function hashPassword(email, password) {
  const source = `${normalizeEmail(email)}:${password}`;
  if (window.crypto?.subtle && window.TextEncoder) {
    const bytes = new TextEncoder().encode(source);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  return `fallback:${btoa(unescape(encodeURIComponent(source)))}`;
}

async function createAccount({ email, password, name }) {
  const cleanEmail = normalizeEmail(email);
  if (!cleanEmail || password.length < 6) {
    return { ok: false, message: "Нужен email и пароль от 6 символов." };
  }

  const accounts = getAccounts();
  if (accounts.some((account) => account.email === cleanEmail)) {
    return { ok: false, message: "Такой аккаунт уже существует. Попробуй вход." };
  }

  const createdAt = new Date().toISOString();
  const account = {
    email: cleanEmail,
    name: name?.trim() || cleanEmail.split("@")[0],
    passwordHash: await hashPassword(cleanEmail, password),
    plan: "free",
    createdAt
  };
  accounts.push(account);
  saveJson(STORAGE_KEYS.accounts, accounts);
  setCurrentUser({
    email: account.email,
    name: account.name,
    plan: account.plan,
    createdAt: account.createdAt
  });
  return { ok: true, message: "Аккаунт создан.", user: getCurrentUser() };
}

async function loginAccount(email, password) {
  const cleanEmail = normalizeEmail(email);
  const accounts = getAccounts();
  const account = accounts.find((item) => item.email === cleanEmail);
  if (!account) {
    return { ok: false, message: "Аккаунт не найден. Зарегистрируйся или проверь email." };
  }

  const passwordHash = await hashPassword(cleanEmail, password);
  const valid = account.passwordHash === passwordHash || account.password === password;
  if (!valid) {
    return { ok: false, message: "Не получилось войти. Проверь пароль." };
  }

  setCurrentUser({
    email: account.email,
    name: account.name || account.email.split("@")[0],
    plan: account.plan || "free",
    createdAt: account.createdAt || new Date().toISOString()
  });
  return { ok: true, message: "Вход выполнен.", user: getCurrentUser() };
}

function getProjectsForUser(email) {
  return loadJson(STORAGE_KEYS.projects, []).filter((project) => project.owner === email);
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

function initSiteControls() {
  document.querySelectorAll(".site-header").forEach((header) => {
    if (!header.querySelector(".site-tools")) {
      const tools = document.createElement("div");
      tools.className = "site-tools";
      tools.innerHTML = `
        <div class="language-switch" role="group" aria-label="Language">
          <button type="button" class="language-button" data-lang-option="ru">RU</button>
          <button type="button" class="language-button" data-lang-option="en">EN</button>
        </div>
        <div class="auth-actions">
          <a class="glass-button small" href="./account.html#login" data-login-control>Войти</a>
          <a class="solid-button small" href="./account.html" data-register-control>Регистрация</a>
        </div>
      `;
      header.appendChild(tools);
    }

    header.addEventListener("click", (event) => {
      const languageButton = event.target.closest("[data-lang-option]");
      if (languageButton) {
        setLanguage(languageButton.dataset.langOption);
        return;
      }

      const logoutButton = event.target.closest("[data-logout-control]");
      if (logoutButton) {
        event.preventDefault();
        clearCurrentUser();
        showToast(t("Выход выполнен."));
      }
    });
  });

  syncAccountLinks();
}

function insertPaymentAlert() {
  const header = document.querySelector(".site-header");
  if (!header || document.querySelector(".payment-alert")) return;

  const alert = document.createElement("section");
  alert.className = "payment-alert";
  alert.innerHTML = `
    <div>
      <strong>Оплата через DonationAlerts (временно)</strong>
      <p>ВНИМАНИЕ! Это временный способ оплаты для покупки подписки. Любой донат = подписка, но вы должны указать либо свой ник профиля на сайте, либо свои контактные данные Telegram.</p>
      <p>Минимальный донат уже выставлен на 2$ в любых валютах. Заранее спасибо за поддержку!</p>
      <small>Укажи ник или Telegram в донате, чтобы я мог вручную включить подписку.</small>
    </div>
    <a class="button primary" href="${DONATION_URL}" target="_blank" rel="noopener">Оплатить подписку</a>
  `;
  header.after(alert);
}

function initRevealAnimations() {
  const animatedItems = document.querySelectorAll(
    ".hero-copy, .hero-visual, .section-band, .cta-band, .glass-panel, .info-card, .pricing-card, .example-card, .steps-grid article"
  );
  animatedItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 22, 160)}ms`;
  });

  if (!("IntersectionObserver" in window)) {
    animatedItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedItems.forEach((item) => observer.observe(item));
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
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createLogoSvg(project) {
  const bg = project.palette[0] || "#2f7d8c";
  const fg = project.palette[1] || "#101114";
  const accent = project.palette[2] || "#f4bd43";
  const initials = buildInitials(project.name);
  return `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Логотип ${escapeHtml(project.name)}">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="${fg}" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="264" height="264" rx="34" fill="url(#logoGradient)" />
      <rect x="42" y="42" width="216" height="216" rx="24" fill="rgba(255,255,255,0.08)" />
      <circle cx="222" cy="76" r="18" fill="${accent}" />
      <text x="150" y="168" text-anchor="middle" font-family="Syne, sans-serif" font-size="92" font-weight="800" fill="#ffffff">${escapeHtml(initials)}</text>
      <text x="150" y="226" text-anchor="middle" font-family="Manrope, sans-serif" font-size="15" font-weight="800" letter-spacing="2" fill="#ffffff" fill-opacity="0.88">${escapeHtml(project.name.toUpperCase().slice(0, 18))}</text>
    </svg>
  `.trim();
}

function createCoverSvg(project) {
  const [c1, c2, c3] = [
    project.palette[0] || "#2f7d8c",
    project.palette[1] || "#101114",
    project.palette[2] || "#f4bd43"
  ];
  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Обложка ${escapeHtml(project.name)}">
      <defs>
        <linearGradient id="coverGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c2}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" rx="24" fill="url(#coverGradient)" />
      <rect x="34" y="34" width="1132" height="562" rx="18" fill="rgba(255,255,255,0.08)" />
      <circle cx="1000" cy="145" r="86" fill="${c3}" fill-opacity="0.9" />
      <path d="M800 72C972 112 1100 246 1130 472" stroke="rgba(255,255,255,0.22)" stroke-width="38" stroke-linecap="round" fill="none" />
      <text x="84" y="212" font-family="Syne, sans-serif" font-size="84" font-weight="800" fill="#ffffff">${escapeHtml(project.name)}</text>
      <text x="84" y="292" font-family="Manrope, sans-serif" font-size="30" font-weight="700" fill="#ffffff" fill-opacity="0.88">${escapeHtml(project.slogan)}</text>
      <text x="84" y="516" font-family="Manrope, sans-serif" font-size="24" font-weight="700" fill="#ffffff" fill-opacity="0.76">${escapeHtml(project.styleLine)}</text>
      <text x="84" y="558" font-family="Manrope, sans-serif" font-size="22" font-weight="600" fill="#ffffff" fill-opacity="0.58">BaseOf marketplace direction</text>
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

function initGenerator() {
  const generatorForm = document.getElementById("generatorForm");
  if (!generatorForm) return;

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

  function syncAuthButtons() {
    const user = getCurrentUser();
    openAuthButtons.forEach((button) => {
      const mode = button.dataset.openAuth;
      if (mode === "login") {
        button.textContent = user ? user.email : t("Войти");
      }
      if (mode === "signup") {
        button.textContent = user ? t("Аккаунт") : t("Создать аккаунт");
      }
    });
    syncAccountLinks();
  }

  function openAuthModal(mode = "signup") {
    if (!authModal) return;
    authMode = mode;
    authModal.classList.remove("hidden");
    modeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.authMode === mode);
    });
    authTitle.textContent = mode === "signup" ? t("Создать аккаунт BaseOf") : t("Войти в BaseOf");
    authSubmitButton.textContent = mode === "signup" ? t("Создать аккаунт") : t("Войти");
    authNote.textContent = mode === "signup"
      ? t("После регистрации можно сохранить текущий проект.")
      : t("Войди, чтобы продолжить работу со своими проектами.");
    authEmail.focus();
  }

  function closeAuthModal() {
    authModal?.classList.add("hidden");
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
    const baseStyle = t(formValues.style);
    const styleLine = formValues.customStyle
      ? `${baseStyle}, ${formValues.customStyle}`
      : baseStyle;
    const extras = formValues.includeExtras ? preset.extras.map((extra) => t(extra)) : [t("Дополнительные направления отключены в этом запуске")];
    const direction = getCurrentLang() === "en"
      ? `${formValues.name} should be presented as a ${styleLine.toLowerCase()} project in the "${formValues.niche}" category. ${
        preferredColors.length
          ? `The requested colors are treated as priority: ${preferredColors.join(", ")}.`
          : "The palette was selected from the style, name, and category."
      }`
      : `${formValues.name} стоит подать как ${styleLine.toLowerCase()} проект в категории «${formValues.niche}». ${
        preferredColors.length
          ? `Указанные цвета учтены как приоритет: ${preferredColors.join(", ")}.`
          : "Палитра подобрана по стилю, названию и категории."
      }`;

    const project = {
      ...formValues,
      palette,
      preferredColors,
      slogan: formValues.includeSlogan ? t(preset.slogan) : t("Слоган отключен для этого проекта"),
      extras,
      direction,
      styleLine,
      variationIndex,
      logoSvg: "",
      coverSvg: ""
    };

    project.logoSvg = createLogoSvg(project);
    project.logoSource = "Локальный резервный логотип";
    project.logoConcept = "Быстрый резервный знак на базе названия, палитры и категории.";
    project.coverSvg = createCoverSvg(project);
    return project;
  }

  async function requestAiLogo(formValues, project) {
    const response = await fetch("/api/logo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formValues.name,
        niche: formValues.niche,
        style: formValues.style,
        customStyle: formValues.customStyle,
        description: formValues.description,
        colorNotes: formValues.colorNotes,
        palette: project.palette,
        variationIndex: project.variationIndex
      })
    });

    if (!response.ok) {
      throw new Error(`Logo API responded with ${response.status}`);
    }

    const data = await response.json();
    if (!data.svg || !String(data.svg).includes("<svg")) {
      throw new Error("Logo API returned no SVG");
    }
    return data;
  }

  async function buildAndRenderProject(formValues, variationIndex = 0) {
    const project = buildProjectPayload(formValues, variationIndex);
    currentProject = project;
    renderProject(project);
    resultStatus.textContent = t("Groq создает AI-логотип. Локальный вариант уже показан как резерв.");

    try {
      const aiLogo = await requestAiLogo(formValues, project);
      project.logoSvg = aiLogo.svg;
      project.logoSource = aiLogo.source === "groq"
        ? `AI logo by Groq${aiLogo.model ? ` · ${aiLogo.model}` : ""}`
        : "Локальный резервный логотип";
      project.logoConcept = aiLogo.source === "groq" ? (aiLogo.concept || project.logoConcept) : project.logoConcept;
      currentProject = project;
      renderProject(project);
      resultStatus.textContent = aiLogo.source === "groq"
        ? t("AI-логотип готов. Палитра и текстовая основа собраны по брифу.")
        : t("AI-ключ не настроен, поэтому показан резервный локальный логотип.");
    } catch {
      project.logoSource = "Локальный резервный логотип";
      currentProject = project;
      renderProject(project);
      resultStatus.textContent = t("AI-логотип временно недоступен, поэтому показан резервный локальный вариант.");
    }

    return project;
  }

  function renderProject(project) {
    const template = document.getElementById("resultTemplate");
    const fragment = template.content.cloneNode(true);

    fragment.getElementById("logoPreviewMount").innerHTML = project.logoSvg;
    const logoSourceMount = fragment.getElementById("logoSourceMount");
    if (logoSourceMount) {
      const sourceText = t(project.logoSource || "AI-логотип");
      const conceptText = project.logoConcept ? t(project.logoConcept) : "";
      logoSourceMount.textContent = `${sourceText}${conceptText ? `: ${conceptText}` : ""}`;
    }

    const coverMount = fragment.getElementById("coverPreviewMount");
    coverMount.innerHTML = `
      <div class="cover-preview-card" style="background:linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[1]} 100%)">
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
      ? `${t("Учтены пользовательские цвета")}: ${project.preferredColors.join(", ")}.`
      : t("Цвета подобраны автоматически по брифу.");
    variationButton.disabled = false;
    saveProjectButton.disabled = false;
    applyLanguage(resultsBody);

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
      showToast(t("Зарегистрируйся, чтобы сохранять проекты."));
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
    showToast(t("Проект сохранен в аккаунте."));
    return true;
  }

  generatorForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = readFormValues();
    if (!values.name || !values.style) {
      showToast(t("Нужны хотя бы название и стиль."));
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = t("Собираю...");

    const usage = getUsage();
    currentProject = await buildAndRenderProject(values, 0);
    usage.firstProjectUsed = true;
    saveUsage(usage);

    generateButton.disabled = false;
    generateButton.textContent = t("Сгенерировать AI-основу");
  });

  variationButton.addEventListener("click", async () => {
    if (!currentProject) return;
    const usage = getUsage();
    if (usage.variationsUsed >= 2) {
      showToast(t("Лимит дополнительных вариантов на сегодня уже использован."));
      return;
    }

    variationButton.disabled = true;
    variationButton.textContent = t("Готовлю...");
    const nextVariation = usage.variationsUsed + 1;

    currentProject = await buildAndRenderProject(readFormValues(), nextVariation);
    usage.variationsUsed = nextVariation;
    saveUsage(usage);

    variationButton.disabled = false;
    variationButton.textContent = t("Новый вариант");
  });

  saveProjectButton.addEventListener("click", () => {
    if (!currentProject) return;
    saveProject(currentProject);
  });

  openAuthButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentUser = getCurrentUser();
      if (currentUser && (button.dataset.openAuth === "login" || button.dataset.openAuth === "signup")) {
        showToast(`${t("Активный аккаунт")}: ${currentUser.email}`);
        return;
      }
      openAuthModal(button.dataset.openAuth || "signup");
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => openAuthModal(button.dataset.authMode));
  });

  closeAuthModalButton?.addEventListener("click", closeAuthModal);

  authModal?.addEventListener("click", (event) => {
    if (event.target === authModal) closeAuthModal();
  });

  authForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = authEmail.value.trim().toLowerCase();
    const password = authPassword.value.trim();
    let result;
    if (authMode === "signup") {
      result = await createAccount({
        email,
        password,
        name: email.split("@")[0]
      });
    } else {
      result = await loginAccount(email, password);
    }

    if (!result.ok) {
      showToast(t(result.message));
      return;
    }

    syncAuthButtons();
    closeAuthModal();
    showToast(t(result.message));
  });

  syncAuthButtons();
}

function initAccountPage() {
  const accountPage = document.getElementById("accountPage");
  if (!accountPage) return;

  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const authPanels = document.getElementById("authPanels");
  const profilePanel = document.getElementById("profilePanel");
  const accountEmail = document.getElementById("accountEmail");
  const accountName = document.getElementById("accountName");
  const accountPlan = document.getElementById("accountPlan");
  const projectList = document.getElementById("accountProjects");
  const logoutButton = document.getElementById("logoutButton");

  function renderAccount() {
    const user = getCurrentUser();
    authPanels.classList.toggle("hidden", Boolean(user));
    profilePanel.classList.toggle("hidden", !user);
    if (!user) return;

    accountEmail.textContent = user.email;
    accountName.textContent = user.name || user.email.split("@")[0];
    accountPlan.textContent = user.plan === "pro" ? "Pro" : "Start";

    const projects = getProjectsForUser(user.email);
    if (!projects.length) {
      projectList.innerHTML = `
        <article class="project-item empty-project">
          <strong>Пока нет сохраненных проектов</strong>
          <p>Открой генератор, собери первый набор и нажми «Сохранить».</p>
        </article>
      `;
      applyLanguage(projectList);
      return;
    }

    projectList.innerHTML = projects.map((project) => {
      const payload = project.payload || {};
      const colors = (payload.palette || []).map((color) => `<span style="background:${escapeHtml(color)}"></span>`).join("");
      const date = new Date(project.savedAt).toLocaleDateString("ru-RU");
      return `
        <article class="project-item">
          <div>
            <strong>${escapeHtml(payload.name || "BaseOf project")}</strong>
            <p>${escapeHtml(payload.niche || "Проект")} · ${date}</p>
          </div>
          <div class="mini-palette">${colors}</div>
        </article>
      `;
    }).join("");
  }

  registerForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = await createAccount({
      name: document.getElementById("registerName").value,
      email: document.getElementById("registerEmail").value,
      password: document.getElementById("registerPassword").value
    });
    showToast(t(result.message));
    if (result.ok) renderAccount();
  });

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = await loginAccount(
      document.getElementById("loginEmail").value,
      document.getElementById("loginPassword").value
    );
    showToast(t(result.message));
    if (result.ok) renderAccount();
  });

  logoutButton?.addEventListener("click", () => {
    clearCurrentUser();
    renderAccount();
    showToast(t("Выход выполнен."));
  });

  window.addEventListener("baseof-auth-change", renderAccount);
  renderAccount();

  if (window.location.hash === "#login") {
    loginForm?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("loginEmail")?.focus({ preventScroll: true });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initSiteControls();
  insertPaymentAlert();
  initRevealAnimations();
  applyLanguage();
  syncAccountLinks();
  initGenerator();
  initAccountPage();
});
