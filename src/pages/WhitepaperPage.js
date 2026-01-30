import { useEffect, useMemo, useRef, useState } from "react";
import heroImage from "../source/whitepaper/5b5c6083d5384cbcc5839503d28c9ee4cefb953a.png";

const tocItems = [
  "What does staking crypto mean?",
  "Which Solana wallet should I use?",
  "What is an ICO or IDO coin?",
  "What is a crypto airdrop?",
  "How do you claim a crypto airdrop?",
];

const contentSections = [
  {
    eyebrow: "FOR YOU",
    title: "What does staking crypto mean?",
    text: "Staking crypto means locking your cryptocurrency tokens for a period of time to support a platform or network and, in return, earn rewards.",
    bullets: [
      "Stake to earn rewards for securing the network.",
      "Rewards are paid in CORP and partner tokens.",
      "Unstaking may require a cooldown period.",
    ],
    note: "Staking boosts liquidity and is often used as a basis for ecosystem-wide reward programs.",
    image: heroImage,
  },
  {
    eyebrow: "WHICH SOLANA WALLET SHOULD I USE?",
    title: "Which Solana wallet should I use?",
    text: "Phantom, Solflare, and Backpack are the most commonly used Solana wallets. Choose one that supports hardware wallet connections and in-app swaps.",
    bullets: [
      "Phantom: fastest setup and broad app support.",
      "Solflare: strong staking tools and hardware options.",
      "Backpack: multi-chain and security focused.",
    ],
    cta: "Learn more about wallets",
  },
  {
    eyebrow: "WHAT IS AN ICO OR IDO COIN?",
    title: "What is an ICO or IDO coin?",
    text: "An ICO or IDO is a fundraising mechanism where tokens are sold to early participants before listing on public markets.",
    bullets: [
      "ICO: initial coin offering (early public sale).",
      "IDO: initial DEX offering (launch on a DEX).",
      "IDO listings can be faster and more liquid.",
    ],
    cta: "View token sale glossary",
  },
  {
    eyebrow: "WHAT IS A CRYPTO AIRDROP?",
    title: "What is a crypto airdrop?",
    text: "A crypto airdrop is a distribution of tokens to a group of wallet addresses, often used to reward early users or communities.",
    bullets: [
      "Airdrops can be based on on-chain activity.",
      "Some require tasks such as staking or referrals.",
      "Always verify official sources before claiming.",
    ],
    cta: "Check airdrop eligibility",
  },
  {
    eyebrow: "HOW DO YOU CLAIM A CRYPTO AIRDROP?",
    title: "How do you claim a crypto airdrop?",
    text: "Visit the official claim page, connect your wallet, and follow the instructions. Never share your seed phrase.",
    bullets: [
      "Use a verified URL shared by the team.",
      "Approve only the necessary permissions.",
      "Confirm token receipt after the transaction.",
    ],
    highlight:
      "Always make sure you are using the official Coinporate website and links.",
  },
];

function WhitepaperPage() {
  const tocListRef = useRef(null);
  const contentRef = useRef(null);
  const [tocHeight, setTocHeight] = useState(0);
  const [thumbStyle, setThumbStyle] = useState({
    height: "35%",
    transform: "translateY(0)",
  });
  const sectionIds = useMemo(
    () =>
      contentSections.map((section) => ({
        id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: section.title,
      })),
    []
  );

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    document.title = "Coinporate Whitepaper | Token Design & Staking";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the Coinporate whitepaper covering staking mechanics, token value, and ecosystem liquidity."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore the Coinporate whitepaper covering staking mechanics, token value, and ecosystem liquidity.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const updateTocMetrics = () => {
      if (!tocListRef.current || !contentRef.current) {
        return;
      }
      const tocListHeight = tocListRef.current.offsetHeight;
      setTocHeight(tocListHeight);

      const contentRect = contentRef.current.getBoundingClientRect();
      const contentTop = contentRect.top + window.scrollY;
      const contentHeight = contentRef.current.offsetHeight;
      const viewport = window.innerHeight;
      const maxScroll = contentHeight - viewport;
      if (maxScroll <= 0) {
        setThumbStyle({ height: "35%", transform: "translateY(0)" });
        return;
      }
      const rawProgress = (window.scrollY - contentTop) / maxScroll;
      const progress = Math.min(1, Math.max(0, rawProgress));
      const rawThumb = (viewport / contentHeight) * 100;
      const thumbHeight = Math.min(60, Math.max(18, rawThumb));
      const thumbOffset = progress * (100 - thumbHeight);
      setThumbStyle({
        height: `${thumbHeight}%`,
        transform: `translateY(${thumbOffset}%)`,
      });
    };

    updateTocMetrics();
    window.addEventListener("scroll", updateTocMetrics, { passive: true });
    window.addEventListener("resize", updateTocMetrics);
    return () => {
      window.removeEventListener("scroll", updateTocMetrics);
      window.removeEventListener("resize", updateTocMetrics);
    };
  }, []);

  return (
    <main className="whitepaper">
      <section className="whitepaper-body">
        <div className="whitepaper-body__inner">
          <aside className="whitepaper-toc">
            <span className="whitepaper-toc__label">FIND TOPIC</span>
            <div className="whitepaper-toc__body">
              <div
                className="whitepaper-toc__scroll"
                style={{ height: tocHeight ? `${tocHeight}px` : "135%" }}
              >
                <div className="whitepaper-toc__track" />
                <div className="whitepaper-toc__thumb" style={thumbStyle} />
              </div>
              <ul ref={tocListRef}>
                {tocItems.map((item) => {
                  const match = sectionIds.find(
                    (entry) => entry.title === item
                  );
                  const targetId =
                    match?.id || item.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        className="whitepaper-toc__button"
                        onClick={() => handleScrollTo(targetId)}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
          <div className="whitepaper-content" ref={contentRef}>
            {contentSections.map((section, index) => {
              const sectionId = section.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              return (
                <article
                  key={section.title}
                  className="whitepaper-block"
                  id={sectionId}
                >
                  <span className="whitepaper-block__eyebrow">
                    {section.eyebrow}
                  </span>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {section.image && (
                    <div className="whitepaper-block__image">
                      <img src={section.image} alt={section.title} />
                      <div className="whitepaper-block__badge">CORP</div>
                    </div>
                  )}
                  {section.bullets && (
                    <ul className="whitepaper-block__list">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <div className="whitepaper-block__note">{section.note}</div>
                  )}
                  {section.cta && (
                    <button className="whitepaper-block__cta" type="button">
                      {section.cta}
                    </button>
                  )}
                  {section.highlight && (
                    <div className="whitepaper-block__highlight">
                      {section.highlight}
                    </div>
                  )}
                  {index !== contentSections.length - 1 && (
                    <div className="whitepaper-block__divider" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhitepaperPage;
