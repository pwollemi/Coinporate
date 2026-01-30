import { useEffect, useMemo, useState } from "react";
import { partnerLogos } from "../data/content";
import cardWallet from "../source/academy/874d467f1492d761e85e4f34213a35a1c95d8eb2.jpg";
import cardEarth from "../source/academy/41621fd23245fbca571f7094a0dbf548fa4dae52.jpg";
import cardRobot from "../source/academy/6b5ab7dfd150065a2824a0fef96d1407349a3f83.jpg";

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

const academyCards = [
  {
    id: 1,
    difficulty: "Easy",
    title: "Reduce transaction fees on Solana",
    text: "Learn simple tactics to lower costs when sending tokens, swapping, and interacting with on-chain apps.",
    image: cardWallet,
    time: "5 min",
    date: "2025-01-14",
    categories: ["Fees", "Blockchain", "Solana"],
  },
  {
    id: 2,
    difficulty: "Easy",
    title: "What is a crypto wallet?",
    text: "A friendly introduction to hot vs cold wallets, seed phrases, and safe self-custody.",
    image: cardEarth,
    time: "5 min",
    date: "2025-01-10",
    categories: ["Wallets", "Security"],
  },
  {
    id: 3,
    difficulty: "Easy",
    title: "Crypto basics: tokens and gas",
    text: "Understand token types, network fees, and why gas fluctuates across blockchains.",
    image: cardRobot,
    time: "5 min",
    date: "2024-12-28",
    categories: ["Blockchain", "Fees"],
  },
  {
    id: 4,
    difficulty: "Easy",
    title: "How staking rewards are calculated",
    text: "Explore APR, lockups, and how validator performance impacts yield.",
    image: cardWallet,
    time: "5 min",
    date: "2024-12-10",
    categories: ["Staking", "Yield"],
  },
  {
    id: 5,
    difficulty: "Easy",
    title: "Avoid common crypto scams",
    text: "Spot phishing, fake airdrops, and malicious approvals before they cost you funds.",
    image: cardEarth,
    time: "5 min",
    date: "2024-11-21",
    categories: ["Security", "Wallets"],
  },
  {
    id: 6,
    difficulty: "Easy",
    title: "What is a blockchain explorer?",
    text: "Learn how to track transactions, token transfers, and on-chain activity.",
    image: cardRobot,
    time: "5 min",
    date: "2024-11-02",
    categories: ["Blockchain", "Security"],
  },
  {
    id: 7,
    difficulty: "Medium",
    title: "Yield strategies: staking vs liquidity",
    text: "Compare passive yield options and understand the risks of impermanent loss.",
    image: cardWallet,
    time: "7 min",
    date: "2024-10-18",
    categories: ["Yield", "Staking", "Tokenomics"],
  },
  {
    id: 8,
    difficulty: "Medium",
    title: "Understanding token unlock schedules",
    text: "Learn how vesting impacts supply, price volatility, and investor strategy.",
    image: cardEarth,
    time: "7 min",
    date: "2024-10-01",
    categories: ["Tokenomics", "Regulation"],
  },
  {
    id: 9,
    difficulty: "Medium",
    title: "How liquidity pools work",
    text: "A practical guide to AMMs, pool ratios, and trading fees.",
    image: cardRobot,
    time: "7 min",
    date: "2024-09-12",
    categories: ["Yield", "Fees", "Blockchain"],
  },
  {
    id: 10,
    difficulty: "Medium",
    title: "Tokenomics for founders",
    text: "Design emission schedules, incentives, and sustainable community rewards.",
    image: cardWallet,
    time: "7 min",
    date: "2024-08-27",
    categories: ["Tokenomics", "Blockchain"],
  },
  {
    id: 11,
    difficulty: "Hard",
    title: "Advanced staking: validator selection",
    text: "Learn how commission, uptime, and delegation strategies affect returns.",
    image: cardEarth,
    time: "9 min",
    date: "2024-08-03",
    categories: ["Staking", "Yield", "Security"],
  },
  {
    id: 12,
    difficulty: "Hard",
    title: "Managing DAO treasuries",
    text: "Best practices for treasury diversification, on-chain reporting, and security.",
    image: cardRobot,
    time: "9 min",
    date: "2024-07-15",
    categories: ["Security", "Tokenomics"],
  },
  {
    id: 13,
    difficulty: "Hard",
    title: "Cross-chain bridging risks",
    text: "Understand bridge security models, attack vectors, and safety checks.",
    image: cardWallet,
    time: "9 min",
    date: "2024-06-22",
    categories: ["Security", "Blockchain"],
  },
  {
    id: 14,
    difficulty: "Hard",
    title: "On-chain compliance and regulation",
    text: "How teams handle KYC, AML, and reporting across jurisdictions.",
    image: cardEarth,
    time: "9 min",
    date: "2024-06-01",
    categories: ["Regulation", "Security"],
  },
];

function AcademyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All topics");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const itemsPerPage = 6;
  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return academyCards.filter((card) => {
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
            <article key={card.id} className="academy-card">
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
                  <button className="academy-card__cta" type="button">
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

      <section className="partners">
        <div className="partners__row">
          <div className="partners__track">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="partners__slide">
                <img className="partners__logo" src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AcademyPage;
