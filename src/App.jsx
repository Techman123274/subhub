import { useEffect, useMemo, useState } from "react";
import { destinations, experienceSteps, filters, spotlightCards, stats } from "./data";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">SV</span>
        <span className="brand-copy">
          <strong>Sub Vault</strong>
          <span>also known as Sub Hub</span>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        <a href="#destinations">Hub</a>
        <a href="#showcase">Promotion</a>
        <a href="#future">Next</a>
      </nav>

      <a className="nav-cta" href="#destinations">
        Enter the hub
      </a>
    </header>
  );
}

function Hero() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const renderTime = () => {
      setClock(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        })
      );
    };

    renderTime();
    const intervalId = window.setInterval(renderTime, 30000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Promotion hub</p>
        <h1>Your main place to promote and reach everything.</h1>
        <p className="hero-text">
          Built as the central hub for all Sub projects, pages, drops, games,
          and communities so everything important lives in one strong front door.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#destinations">
            Open everything
          </a>
          <a className="button button-secondary" href="#showcase">
            See the promo flow
          </a>
        </div>

        <div className="hero-stats" aria-label="Sub Vault highlights">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="hero-panel" aria-label="Sub Vault preview">
        <div className="panel-glow"></div>
        <div className="panel-topline">
          <span className="live-pill">Main hub</span>
          <span className="clock">{clock || "Loading time"}</span>
        </div>

        <div className="preview-card preview-card-primary">
          <span className="card-tag">Promo space</span>
          <h2>One clean place to push every part of the world you are building.</h2>
          <p>
            Use this site as the front-facing hub that sends people to whatever
            you want them to see next.
          </p>
        </div>

        <div className="preview-stack">
          {destinations.slice(0, 3).map((item) => (
            <div className="preview-card" key={item.title}>
              <span>{item.title}</span>
              <strong>{item.description}</strong>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

function DestinationsSection() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return destinations.filter((item) => {
      const matchesFilter = activeFilter === "All" || item.category === activeFilter;
      const haystack = [
        item.title,
        item.category,
        item.status,
        item.description,
        ...item.meta
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = haystack.includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const feedback =
    query || activeFilter !== "All"
      ? `${filteredDestinations.length} space${filteredDestinations.length === 1 ? "" : "s"} ready to open.`
      : "Showing all spaces.";

  return (
    <section className="destinations-section" id="destinations">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Main hub</p>
          <h2>Everything important should be easy to reach.</h2>
        </div>
        <p className="section-note">A promotion-first layout with fast paths to every project.</p>
      </div>

      <div className="search-shell">
        <label className="search-label" htmlFor="hub-search">
          Find anything fast
        </label>
        <input
          id="hub-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search movie, Discord, Monopoly, vault..."
          autoComplete="off"
        />
        <div className="filter-row" aria-label="Category filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-chip${filter === activeFilter ? " is-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="search-feedback">{feedback}</p>
      </div>

      <div className="destinations-grid" aria-live="polite">
        {filteredDestinations.map((item) => (
          <article className="destination-card" key={item.title}>
            <div className="destination-topline">
              <span className="destination-category">{item.category}</span>
              <span className="destination-status">{item.status}</span>
            </div>
            <h3 className="destination-title">{item.title}</h3>
            <p className="destination-description">{item.description}</p>
            <div className="destination-meta">
              {item.meta.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="button button-secondary destination-link" href={item.href}>
              Open section
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Promotion</p>
          <h2>Designed to feel like the front page of the whole brand.</h2>
        </div>
      </div>

      <div className="showcase-layout">
        <article className="showcase-main">
          <p>
            This is not just a links page. It is the main promotional space for
            the entire Sub world, built to guide people toward the projects,
            drops, and communities you want to spotlight.
          </p>
          <div className="spotlight-points">
            <span>Promotion-first</span>
            <span>Main hub</span>
            <span>Easy navigation</span>
            <span>Brand feel</span>
          </div>
        </article>

        <div className="spotlight-side">
          {spotlightCards.map((card) => (
            <article key={card.title}>
              <strong>{card.title}</strong>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Flow</p>
          <h2>Guide people from the hub to everything else.</h2>
        </div>
      </div>

      <div className="experience-grid">
        {experienceSteps.map((item) => (
          <article key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="future-section" id="future">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What is next</p>
          <h2>Keep using this as the center of everything you launch.</h2>
        </div>
      </div>

      <div className="future-grid">
        <article>
          <span>Change me</span>
          <h3>Change me</h3>
          <p>Change me</p>
        </article>
        <article>
          <span>Change me</span>
          <h3>Change me</h3>
          <p>Change me</p>
        </article>
        <article>
          <span>Change me</span>
          <h3>Change me</h3>
          <p>Change me</p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="ambient ambient-three"></div>

      <Header />

      <main>
        <Hero />
        <DestinationsSection />
        <ShowcaseSection />
        <ExperienceSection />
        <FutureSection />
      </main>
    </div>
  );
}
