import { useEffect, useMemo, useState } from "react";
import { academyArticles } from "../data/academyArticles";

const filterChips = [
  "All topics",
  "Blockchain",
  "Wallets",
  "Fees",
  "Security",
  "Staking",
  "Yield",
  "Tokenomics",
  "Regulation",
];

function AcademyPage({ onNavigate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All topics");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const itemsPerPage = 6;
  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return academyArticles.filter((card) => {
      const title = card.title.toLowerCase();
      const text = card.text.toLowerCase();
      const matchesSearch =
        !query || title.includes(query) || text.includes(query);
      const matchesCategory =
        activeCategory === "All topics" ||
        card.categories.includes(activeCategory);
      const matchesDifficulty =
        activeDifficulty === "All" || card.difficulty === activeDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, activeCategory, activeDifficulty]);
  const sortedCards = useMemo(() => {
    return [...filteredCards].sort((a, b) => {
      const left = new Date(a.date).getTime();
      const right = new Date(b.date).getTime();
      return sortOrder === "newest" ? right - left : left - right;
    });
  }, [sortOrder, filteredCards]);
  const totalPages = Math.max(1, Math.ceil(sortedCards.length / itemsPerPage));
  const currentCards = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedCards.slice(start, start + itemsPerPage);
  }, [currentPage, sortedCards]);
  const handleOpenArticle = (article) => {
    if (!article?.slug) {
      return;
    }
    onNavigate?.(`/academy/${article.slug}`, { academyArticle: article });
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    document.title = "Coinporate Academy | Learn to Earn";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Coinporate Academy lessons on staking, transaction fees, and on-chain participation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore Coinporate Academy lessons on staking, transaction fees, and on-chain participation.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <main className="academy">
      <section className="academy__hero">
        <div className="academy__hero-inner">
          <div className="academy__hero-top">
            <div className="academy__filters">
              <div className="academy__filter-chips">
                {filterChips.map((chip, index) => (
                  <button
                    key={chip}
                    className={
                      chip === activeCategory
                        ? "academy__chip academy__chip--active"
                        : "academy__chip"
                    }
                    type="button"
                    onClick={() => {
                      setCurrentPage(1);
                      setActiveCategory(chip);
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
            <div className="academy__search">
              <div className="academy__search-input">
                <span className="academy__search-icon" aria-hidden="true" />
                <input
                  placeholder="Search tag..."
                  type="text"
                  value={searchQuery}
                  onChange={(event) => {
                    setCurrentPage(1);
                    setSearchQuery(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="academy__hero-bottom">
            <div className="academy__title">ACADEMY</div>
            <div className="academy__difficulty-row">
              <span className="academy__label">DIFFICULTY</span>
              <div className="academy__difficulty-legend">
                {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
                  <button
                    key={difficulty}
                    type="button"
                    className={
                      difficulty === activeDifficulty
                        ? "academy__legend-item academy__legend-item--active"
                        : "academy__legend-item"
                    }
                    onClick={() => {
                      setCurrentPage(1);
                      setActiveDifficulty(difficulty);
                    }}
                  >
                    {difficulty !== "All" && (
                      <span
                        className={`academy__legend-dot academy__legend-dot--${difficulty.toLowerCase()}`}
                      />
                    )}
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
            <div className="academy__sort-row">
              <span className="academy__label">SORT BY</span>
              <select
                className="academy__sort-inline"
                value={sortOrder}
                onChange={(event) => {
                  setCurrentPage(1);
                  setSortOrder(event.target.value);
                }}
              >
                <option value="newest">Newest to Oldest</option>
                <option value="oldest">Oldest to Newest</option>
              </select>
              <button
                className="academy__sort-icon"
                type="button"
                aria-label="Sort options"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="academy__grid">
        <div className="academy__grid-inner">
          {currentCards.map((card) => (
            <article
              key={card.id}
              className="academy-card"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenArticle(card)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleOpenArticle(card);
                }
              }}
            >
              <div className="academy-card__media">
                <img src={card.image} alt={card.title} />
                <span className="academy-card__badge">{card.difficulty}</span>
              </div>
              <div className="academy-card__body">
                <div className="academy-card__categories">
                  {card.categories.slice(0, 4).map((category) => (
                    <span
                      key={`${card.id}-${category}`}
                      className="academy-card__category"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="academy-card__footer">
                  <button
                    className="academy-card__cta"
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleOpenArticle(card.slug);
                    }}
                  >
                    Get started
                  </button>
                  <span className="academy-card__time">{card.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="academy__pagination">
          <button
            className="academy__page-btn"
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous page
          </button>
          <div className="academy__page-dots">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={`page-${page}`}
                  className={
                    page === currentPage
                      ? "academy__page-dot academy__page-dot--active"
                      : "academy__page-dot"
                  }
                  type="button"
                  aria-label={`Go to page ${page}`}
                  onClick={() => setCurrentPage(page)}
                />
              );
            })}
          </div>
          <button
            className="academy__page-btn"
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next page
          </button>
        </div>
      </section>
    </main>
  );
}

export default AcademyPage;
