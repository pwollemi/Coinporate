import { useEffect, useMemo, useRef, useState } from "react";
import heroImage from "../source/airdrop/5b5c6083d5384cbcc5839503d28c9ee4cefb953a.png";
import iconRing from "../assets/coinporate/icons/ring.svg";

const contentSections = [
  {
    title: "What does staking crypto mean?",
    titleStyle: "hero",
    blocks: [
      {
        type: "paragraph",
        variant: "lead",
        content:
          "Staking crypto means locking your cryptocurrency tokens for a period of time to support a platform or network and, in return, earn rewards.",
      },
      {
        type: "image",
        src: heroImage,
        alt: "Staking crypto illustration",
      },
      {
        type: "list",
        title: "When you stake crypto:",
        items: [
          "you already own the tokens",
          "you voluntarily lock them in a smart contract",
          "you may receive rewards such as:",
          "additional tokens",
          "platform benefits",
          "access to ecosystem features",
        ],
      },
      {
        type: "callout",
        variant: "soft",
        align: "center",
        content:
          "Staking is commonly used to encourage long-term participation and reduce short-term speculation. Within Coinporate, staking will allow users to actively participate in the ecosystem and support platform growth.",
      },
    ],
  },
  {
    title: "Which Solana wallet should I use?",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        variant: "accent",
        content: (
          <>
            To interact with <strong>Solana-based tokens</strong> (including
            CORP), you will need a <strong>Solana-compatible wallet</strong>.
          </>
        ),
      },
      {
        type: "list",
        title: "Popular and widely trusted Solana wallets include:",
        items: [<em>Phantom Wallet</em>, <em>Solflare</em>, <em>Backpack</em>],
      },
      {
        type: "list",
        title: "These wallets allow you to:",
        items: [
          "store Solana tokens",
          "connect to decentralized applications",
          "participate in token sales, staking, and airdrops",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "spark",
        content: (
          <>
            For most users, <em>Phantom</em> is the easiest and most
            beginner-friendly option.
          </>
        ),
      },
    ],
  },
  {
    title: "What is an ICO crypto coin?",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        variant: "accent",
        content: (
          <>
            An <strong>ICO (Initial Coin Offering)</strong> is a method used by
            crypto projects to introduce a new token to the public.
          </>
        ),
      },
      {
        type: "list",
        title: "In an ICO:",
        items: [
          "a project offers tokens for sale at an early stage",
          "participants purchase tokens before the platform or product is fully launched",
          "funds are typically used to build and grow the project",
        ],
      },
      {
        type: "paragraph",
        content:
          "Coinporate's approach follows a structured and transparent pre-sale model, where the CORP token is introduced first and later used within the Coinporate platform once it goes live.",
      },
    ],
  },
  {
    title: "What is a crypto airdrop?",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        variant: "accent",
        content: (
          <>
            An <strong>ICO (Initial Coin Offering)</strong> is a method used by
            crypto projects to introduce a new token to the public.
          </>
        ),
      },
      {
        type: "list",
        title:
          "A crypto airdrop is when a project distributes free tokens to users' wallets, usually to:",
        items: ["reward early supporters", "increase awareness", "encourage platform usage"],
      },
      {
        type: "list",
        title: "Airdrops may be given to users who:",
        items: [
          "hold a specific token",
          "use a platform early",
          "complete simple on-chain actions",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "spark",
        content:
          "Airdrops are a common way to grow a community while decentralizing token ownership.",
      },
    ],
  },
  {
    title: "How do you claim a crypto airdrop?",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        variant: "accent",
        content: (
          <>
            An <strong>ICO (Initial Coin Offering)</strong> is a method used by
            crypto projects to introduce a new token to the public.
          </>
        ),
      },
      {
        type: "list",
        ordered: true,
        title: "To claim a crypto airdrop, users usually need to:",
        items: [
          "Connect their crypto wallet to the official project website",
          "Verify eligibility (based on wallet activity or participation)",
          "Confirm the claim transaction",
          "Receive tokens directly into their wallet",
        ],
      },
      {
        type: "callout",
        variant: "warn",
        align: "center",
        icon: "info",
        content:
          "Always make sure you are using the official Coinporate website and links. Never connect your wallet to unknown or unverified sources.",
      },
    ],
  },
];

const tocItems = contentSections.map((section) => section.title);

const calloutIcons = {
  spark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2l1.9 4.1 4.6.6-3.4 3.1.9 4.5-4-2.1-4 2.1.9-4.5-3.4-3.1 4.6-.6L12 3.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line
        x1="12"
        y1="10"
        x2="12"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    </svg>
  ),
};

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
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "paragraph": {
        const variantClass =
          block.variant === "lead"
            ? "whitepaper-block__paragraph--lead"
            : block.variant === "accent"
              ? "whitepaper-block__paragraph--accent"
              : "";
        return (
          <p
            key={`paragraph-${index}`}
            className={`whitepaper-block__paragraph ${variantClass}`.trim()}
          >
            {block.content}
          </p>
        );
      }
      case "image":
        return (
          <div key={`image-${index}`} className="whitepaper-block__image">
            <img src={block.src} alt={block.alt || ""} />
          </div>
        );
      case "list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <div key={`list-${index}`} className="whitepaper-block__list-group">
            {block.title && (
              <p className="whitepaper-block__list-title">{block.title}</p>
            )}
            <ListTag
              className={`whitepaper-block__list ${
                block.ordered ? "whitepaper-block__list--ordered" : ""
              }`.trim()}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`}>{item}</li>
              ))}
            </ListTag>
          </div>
        );
      }
      case "callout": {
        const icon = block.icon ? calloutIcons[block.icon] : null;
        return (
          <div
            key={`callout-${index}`}
            className={`whitepaper-callout whitepaper-callout--${block.variant} ${
              block.align === "center" ? "whitepaper-callout--center" : ""
            }`.trim()}
          >
            {icon && <span className="whitepaper-callout__icon">{icon}</span>}
            <div className="whitepaper-callout__text">{block.content}</div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <main className="whitepaper">
      <section className="whitepaper-hero" aria-hidden="true">
        <div className="whitepaper-hero__video-wrap">
          <video
            className="whitepaper-hero__video"
            src="/media/token-head.mp4"
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="whitepaper-hero__veil" />
        </div>
        <img className="whitepaper-hero__ring" src={iconRing} alt="" />
        <div className="whitepaper-hero__title">Whitepaper</div>
      </section>
      <h1 className="visually-hidden">Coinporate Whitepaper</h1>
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
              const titleClassName = `whitepaper-block__title ${
                section.titleStyle === "hero"
                  ? "whitepaper-block__title--hero"
                  : "whitepaper-block__title--mono"
              }`;
              return (
                <article
                  key={section.title}
                  className="whitepaper-block"
                  id={sectionId}
                >
                  <h2 className={titleClassName}>{section.title}</h2>
                  <div className="whitepaper-block__content">
                    {section.blocks.map((block, blockIndex) =>
                      renderBlock(block, blockIndex)
                    )}
                  </div>
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
