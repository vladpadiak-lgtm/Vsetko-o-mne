const translations = {
  uk: {
    pageTitle: "Мої проєкти — вебпортфоліо",
    metaDescription: "Мої вебпроєкти: Братислава, Popularity, Auto Service, HAUS, MoneyMap та Квадро Бургер.",
    brand: "Мої проєкти",
    nav: "Проєкти",
    switchLabel: "Вибір мови",
    eyebrow: "Вибрані роботи · 2026",
    titleTop: "Сайти, які",
    titleAccent: "я створив.",
    intro: "Шість різних проєктів — від міського путівника та рейтингу до фінансового застосунку й онлайн-замовлень. Відкрийте кожен проєкт і перегляньте його.",
    scroll: "Дивитися проєкти",
    sectionEyebrow: "Портфоліо",
    sectionTitle: "Шість ідей. Шість світів.",
    live: "Живий сайт",
    project: "Проєкт",
    open: "Відкрити сайт",
    openProject: "Відкрити проєкт",
    bratislavaCategory: "Міський путівник",
    bratislavaTitle: "Братислава",
    bratislavaDescription: "Великий двомовний путівник столицею Словаччини: історія, архітектура, культура, райони та готові маршрути.",
    popularityCategory: "Рейтинг і біографії",
    popularityDescription: "Інтерактивний рейтинг десяти найбагатших людей світу з біографіями, пошуком, сортуванням і відкритими джерелами.",
    autoserviceCategory: "Онлайн-сервіс",
    autoserviceDescription: "Сучасний двомовний сайт автосервісу з каталогом послуг та зручним онлайн-записом.",
    hausCategory: "Каталог будинків",
    hausDescription: "Двомовний каталог 40 концепцій приватних будинків для Словаччини з фільтрами, бюджетами, планами та інтер’єрами.",
    moneymapCategory: "Особисті фінанси",
    moneymapDescription: "Вебзастосунок для особистих фінансів: транзакції, бюджети, цілі та аналітика витрат.",
    pizzaCategory: "Онлайн-замовлення",
    pizzaDescription: "Двомовний сайт бургерної з меню, кошиком, доставкою та адмін-панеллю замовлень.",
    footer: "Створено з увагою до змісту, деталей і людей."
  },
  sk: {
    pageTitle: "Moje projekty — webové portfólio",
    metaDescription: "Moje webové projekty: Bratislava, Popularity, Auto Service, HAUS, MoneyMap a Quadro Burger.",
    brand: "Moje projekty",
    nav: "Projekty",
    switchLabel: "Výber jazyka",
    eyebrow: "Vybrané práce · 2026",
    titleTop: "Weby, ktoré",
    titleAccent: "som vytvoril.",
    intro: "Šesť odlišných projektov — od mestského sprievodcu a rebríčka až po finančnú aplikáciu a online objednávky. Otvorte si každý projekt a pozrite si ho.",
    scroll: "Pozrieť projekty",
    sectionEyebrow: "Portfólio",
    sectionTitle: "Šesť nápadov. Šesť svetov.",
    live: "Web je online",
    project: "Projekt",
    open: "Otvoriť web",
    openProject: "Otvoriť projekt",
    bratislavaCategory: "Mestský sprievodca",
    bratislavaTitle: "Bratislava",
    bratislavaDescription: "Rozsiahly dvojjazyčný sprievodca hlavným mestom Slovenska: história, architektúra, kultúra, mestské časti a hotové trasy.",
    popularityCategory: "Rebríček a biografie",
    popularityDescription: "Interaktívny rebríček desiatich najbohatších ľudí sveta s biografiami, vyhľadávaním, radením a otvorenými zdrojmi.",
    autoserviceCategory: "Online služba",
    autoserviceDescription: "Moderný dvojjazyčný web autoservisu s prehľadom služieb a pohodlnou online rezerváciou.",
    hausCategory: "Katalóg domov",
    hausDescription: "Dvojjazyčný katalóg 40 konceptov rodinných domov pre Slovensko s filtrami, rozpočtami, pôdorysmi a interiérmi.",
    moneymapCategory: "Osobné financie",
    moneymapDescription: "Webová aplikácia pre osobné financie: transakcie, rozpočty, ciele a analýza výdavkov.",
    pizzaCategory: "Online objednávky",
    pizzaDescription: "Dvojjazyčný web burgerovne s menu, košíkom, doručením a administračným panelom objednávok.",
    footer: "Vytvorené s dôrazom na obsah, detaily a ľudí."
  }
};

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) element.textContent = copy[key];
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (copy[key]) element.setAttribute("content", copy[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (copy[key]) element.setAttribute("aria-label", copy[key]);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("portfolio-language", language);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const savedLanguage = localStorage.getItem("portfolio-language");
if (savedLanguage === "uk" || savedLanguage === "sk") setLanguage(savedLanguage);
