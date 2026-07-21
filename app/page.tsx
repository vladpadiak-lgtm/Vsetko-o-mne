"use client";

import { useEffect, useState } from "react";

type Language = "uk" | "sk";

const copy = {
  uk: {
    brand: "Мої проєкти",
    nav: "Проєкти",
    switchLabel: "Вибір мови",
    eyebrow: "Вибрані роботи · 2026",
    titleTop: "Сайти, які",
    titleAccent: "я створив.",
    intro:
      "Чотири різні проєкти — від міського путівника та рейтингу до автосервісу й каталогу будинків. Відкрийте кожен сайт і перегляньте його наживо.",
    scroll: "Дивитися проєкти",
    sectionEyebrow: "Портфоліо",
    sectionTitle: "Чотири ідеї. Чотири світи.",
    live: "Живий сайт",
    open: "Відкрити сайт",
    source: "Код на GitHub",
    footer: "Створено з увагою до змісту, деталей і людей.",
    projects: {
      bratislava: {
        category: "Міський путівник",
        title: "Братислава",
        description:
          "Великий двомовний путівник столицею Словаччини: історія, архітектура, культура, райони та готові маршрути.",
      },
      popularity: {
        category: "Рейтинг і біографії",
        title: "Popularity",
        description:
          "Інтерактивний рейтинг десяти найбагатших людей світу з біографіями, пошуком, сортуванням і відкритими джерелами.",
      },
      autoservice: {
        category: "Онлайн-сервіс",
        title: "Auto Service",
        description:
          "Сучасний двомовний сайт автосервісу з каталогом послуг та зручним онлайн-записом.",
      },
      haus: {
        category: "Каталог будинків",
        title: "HAUS",
        description:
          "Двомовний каталог 40 концепцій приватних будинків для Словаччини з фільтрами, бюджетами, планами та інтер’єрами.",
      },
    },
  },
  sk: {
    brand: "Moje projekty",
    nav: "Projekty",
    switchLabel: "Výber jazyka",
    eyebrow: "Vybrané práce · 2026",
    titleTop: "Weby, ktoré",
    titleAccent: "som vytvoril.",
    intro:
      "Štyri odlišné projekty — od mestského sprievodcu a rebríčka až po autoservis a katalóg domov. Otvorte si každý web a pozrite si ho naživo.",
    scroll: "Pozrieť projekty",
    sectionEyebrow: "Portfólio",
    sectionTitle: "Štyri nápady. Štyri svety.",
    live: "Web je online",
    open: "Otvoriť web",
    source: "Kód na GitHube",
    footer: "Vytvorené s dôrazom na obsah, detaily a ľudí.",
    projects: {
      bratislava: {
        category: "Mestský sprievodca",
        title: "Bratislava",
        description:
          "Rozsiahly dvojjazyčný sprievodca hlavným mestom Slovenska: história, architektúra, kultúra, mestské časti a hotové trasy.",
      },
      popularity: {
        category: "Rebríček a biografie",
        title: "Popularity",
        description:
          "Interaktívny rebríček desiatich najbohatších ľudí sveta s biografiami, vyhľadávaním, radením a otvorenými zdrojmi.",
      },
      autoservice: {
        category: "Online služba",
        title: "Auto Service",
        description:
          "Moderný dvojjazyčný web autoservisu s prehľadom služieb a pohodlnou online rezerváciou.",
      },
      haus: {
        category: "Katalóg domov",
        title: "HAUS",
        description:
          "Dvojjazyčný katalóg 40 konceptov rodinných domov pre Slovensko s filtrami, rozpočtami, pôdorysmi a interiérmi.",
      },
    },
  },
} as const;

const projects = [
  {
    key: "bratislava",
    number: "01",
    mark: "BA",
    website: "https://vladpadiak-lgtm.github.io/bratislava/",
    repository: "https://github.com/vladpadiak-lgtm/bratislava",
  },
  {
    key: "popularity",
    number: "02",
    mark: "F10",
    website: "https://vladpadiak-lgtm.github.io/Popularity/",
    repository: "https://github.com/vladpadiak-lgtm/Popularity",
  },
  {
    key: "autoservice",
    number: "03",
    mark: "TL",
    website: "https://vladpadiak-lgtm.github.io/auto-servis/",
    repository: "https://github.com/vladpadiak-lgtm/auto-servis",
  },
  {
    key: "haus",
    number: "04",
    mark: "HAUS",
    website: "https://vladpadiak-lgtm.github.io/haus/",
    repository: "https://github.com/vladpadiak-lgtm/haus",
  },
] as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("uk");
  const text = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "uk" || savedLanguage === "sk") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={text.brand}>
          <span className="brand-dot" aria-hidden="true" />
          <span>{text.brand}</span>
        </a>

        <div className="header-actions">
          <a className="nav-link" href="#projects">
            {text.nav}
          </a>
          <div className="language-switch" role="group" aria-label={text.switchLabel}>
            <button
              type="button"
              className={language === "uk" ? "active" : ""}
              aria-pressed={language === "uk"}
              onClick={() => changeLanguage("uk")}
            >
              UA
            </button>
            <button
              type="button"
              className={language === "sk" ? "active" : ""}
              aria-pressed={language === "sk"}
              onClick={() => changeLanguage("sk")}
            >
              SK
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>
            {text.titleTop}
            <br />
            <em>{text.titleAccent}</em>
          </h1>
          <p className="hero-intro">{text.intro}</p>
          <a className="hero-link" href="#projects">
            <span>{text.scroll}</span>
            <span className="arrow-circle" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>WEB</span>
          <strong>04</strong>
          <small>PROJECTS</small>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">{text.sectionEyebrow}</p>
          <h2>{text.sectionTitle}</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const projectText = text.projects[project.key];
            return (
              <article className={`project-card project-${project.key}`} key={project.key}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-number">{project.number}</span>
                  <strong>{project.mark}</strong>
                  <span className="visual-line" />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{projectText.category}</span>
                    <span className="live-status">
                      <i aria-hidden="true" /> {text.live}
                    </span>
                  </div>
                  <h3>{projectText.title}</h3>
                  <p>{projectText.description}</p>
                  <div className="project-links">
                    <a href={project.website} target="_blank" rel="noreferrer">
                      {text.open} <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="source-link"
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text.source}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer>
        <span className="brand-dot" aria-hidden="true" />
        <p>{text.footer}</p>
        <a href="https://github.com/vladpadiak-lgtm" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}
