import { useEffect, useMemo, useRef, useState } from "react";
import heroImage from "../source/airdrop/5b5c6083d5384cbcc5839503d28c9ee4cefb953a.png";
import platformDashboard from "../assets/coinporate/platform-dashboard1.png";
import iconRing from "../assets/coinporate/icons/ring.svg";

const WHITEPAPER_DOWNLOAD_PATH = "/coinporate_whitepaper.pdf";

const tokenAllocationRows = [
  ["PRESALE", "20%", "20,000,000"],
  ["LIQUIDITY", "10%", "10,000,000"],
  ["TEAM", "15%", "15,000,000"],
  ["ADVISORS", "5%", "5,000,000"],
  ["MARKETING & PARTNERSHIPS", "20%", "20,000,000"],
  ["COMMUNITY REWARDS & STAKING", "30%", "30,000,000"],
  ["TOTAL", "100%", "100,000,000"],
];

const contentSections = [
  {
    title: "DISCLAIMER",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content:
          "This document is provided for informational purposes only and does not constitute an offer, solicitation, or recommendation to purchase any token or participate in any financial product.",
      },
      {
        type: "paragraph",
        content: (
          <>
            The <strong>CORP</strong> token is intended to be a utility token
            designed to support the functionality of the Coinporate platform. It
            does not represent ownership, equity, profit participation, or any
            form of financial interest in Coinporate or any affiliated entity.
          </>
        ),
      },
    ],
  },
  {
    title: "1. EXECUTIVE SUMMARY",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: (
          <>
            <strong>Coinporate</strong> is building a platform that enables
            verified businesses to create, manage, and operate tokenized brand
            economies in a structured and controlled environment.
          </>
        ),
      },
      {
        type: "paragraph",
        content:
          "Many businesses already rely on digital points, credits, memberships, or loyalty systems. These systems are typically centralized, non-transferable, and limited in flexibility. Coinporate provides infrastructure that allows businesses to transform such systems into programmable digital tokens that can be used, exchanged, and interacted with by their communities.",
      },
      {
        type: "paragraph",
        content: (
          <>
            The <mark>Coinporate ecosystem</mark> will be powered by{" "}
            <strong>CORP</strong>, a utility token implemented as a smart
            contract on the <mark>Solana blockchain</mark>. CORP is designed to
            facilitate access, participation, and platform-level interactions
            within the Coinporate ecosystem.
          </>
        ),
      },
      {
        type: "image",
        src: platformDashboard,
        alt: "Coinporate platform dashboard preview",
      },
      {
        type: "subheading",
        content: "THE ROLLOUT OF COINPORATE FOLLOWS A STAGED APPROACH:",
      },
      {
        type: "list",
        items: [
          "Introduction of the CORP token",
          "Ongoing development of the Coinporate platform",
          "Gradual onboarding of verified businesses",
          "Controlled retail participation through platform functionality",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content:
          "Coinporate is designed as business infrastructure, not a speculative financial product.",
      },
    ],
  },
  {
    title: "2. THE PROBLEM",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: (
          <>
            Businesses increasingly seek direct relationships with their
            customers and communities. However, current digital engagement tools{" "}
            <mark>suffer from several limitations</mark>:
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Loyalty points are siloed and non-transferable",
          "Platforms and intermediaries own customer data and engagement",
          "Communities generate value without meaningful participation",
          "Existing systems lack programmability and interoperability",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <mark>As a result,</mark> businesses often operate engagement
            systems without durable digital relationships.
          </>
        ),
      },
    ],
  },
  {
    title: "3. THE COINPORATE APPROACH",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content:
          "Coinporate introduces a framework where verified businesses can issue and manage digital tokens that represent access, utility, or participation within their brand ecosystem.",
      },
      {
        type: "paragraph",
        content:
          "Rather than replacing existing business models, Coinporate complements them by enabling:",
      },
      {
        type: "list",
        items: [
          "Transparent token supply rules",
          "Programmable utility",
          "Controlled secondary interactions",
          "Direct community participation",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content:
          "Coinporate does not aim to democratize token creation indiscriminately. Instead, it emphasizes verification, accountability, and quality.",
      },
    ],
  },
  {
    title: "4. WHAT COINPORATE IS - AND IS NOT",
    titleStyle: "mono",
    blocks: [
      {
        type: "comparison",
        leftTitle: (
          <>
            COINPORATE <mark>IS</mark>
          </>
        ),
        leftItems: [
          "A platform under active development",
          "A tool for verified businesses",
          "A utility-driven token ecosystem",
          "A controlled and curated environment",
        ],
        rightTitle: (
          <>
            COINPORATE <mark>IS NOT</mark>
          </>
        ),
        rightItems: [
          "A permissionless token launchpad",
          "A speculative trading platform",
          "A financial investment product",
          "A fundraising vehicle for unverified entities",
        ],
      },
    ],
  },
  {
    title: "5. ECOSYSTEM PARTICIPANTS",
    titleStyle: "mono",
    blocks: [
      {
        type: "subheading",
        level: "minor",
        content: "5.1 VERIFIED BUSINESS",
      },
      {
        type: "paragraph",
        content: (
          <>
            <mark>Verified businesses can:</mark>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Create brand-specific tokens",
          "Define token utility and rules",
          "Manage supply parameters",
          "Interact directly with customers",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            Verification criteria are designed to{" "}
            <mark>
              ensure legitimacy, accountability, and platform integrity.
            </mark>
          </>
        ),
      },
      {
        type: "subheading",
        level: "minor",
        content: "5.2 RETAIL USERS",
      },
      {
        type: "paragraph",
        content: (
          <>
            <mark>Retail participants can:</mark>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Acquire business-issued tokens",
          "Use tokens within defined utility scopes",
          "Participate in staking or access mechanisms",
          "Interact with the ecosystem through approved interfaces",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content: "Retail users cannot create tokens on the platform.",
      },
    ],
  },
  {
    title: "6. THE CORP TOKEN",
    titleStyle: "mono",
    blocks: [
      {
        type: "subheading",
        level: "minor",
        content: "6.1 PURPOSE OF CORP",
      },
      {
        type: "paragraph",
        content:
          "CORP is a utility token designed to support the Coinporate platform. Its functions may include:",
      },
      {
        type: "list",
        items: [
          "Enabling platform access",
          "Supporting staking mechanisms",
          "Facilitating ecosystem interactions",
          "Aligning long-term participation incentives",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content:
          "CORP does not confer ownership rights, dividends, revenue share, or governance authority over Coinporate.",
      },
      {
        type: "subheading",
        level: "minor",
        content: "6.2 WHY CORP IS INTRODUCED BEFORE THE PLATFORM",
      },
      {
        type: "paragraph",
        content:
          "The introduction of CORP prior to full platform availability allows:",
      },
      {
        type: "list",
        items: [
          "Early ecosystem alignment",
          "Testing of token mechanics",
          "Gradual community formation",
          "Support for ongoing development",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong>CORP&apos;s role is functional, not financial.</strong>
          </>
        ),
      },
    ],
  },
  {
    title: "7. BLOCKCHAIN SELECTION: SOLANA",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: "Coinporate utilizes the Solana blockchain due to:",
      },
      {
        type: "list",
        items: [
          "High throughput",
          "Low transaction costs",
          "Fast finality",
          "Suitability for consumer-grade applications",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content:
          "Solana enables frequent, low-friction interactions required for tokenized brand ecosystems.",
      },
    ],
  },
  {
    title: "8. PLATFORM ARCHITECTURE (CONCEPTUAL)",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content:
          "The Coinporate platform is composed of several conceptual layers:",
      },
      {
        type: "list",
        items: [
          <>
            <strong>Verification Layer</strong> - onboarding and validation of
            businesses
          </>,
          <>
            <strong>Token Issuance Layer</strong> - creation and management of
            brand tokens
          </>,
          <>
            <strong>Utility Layer</strong> - programmable token behavior and
            access logic
          </>,
          <>
            <strong>Marketplace Layer</strong> - controlled exchange mechanisms
          </>,
          <>
            <strong>Staking Layer</strong> - participation and incentive
            alignment
          </>,
        ],
      },
      {
        type: "paragraph",
        content: "Each layer is designed to be modular and extensible.",
      },
    ],
  },
  {
    title: "9. THE CORP TOKEN",
    titleStyle: "mono",
    blocks: [
      {
        type: "subheading",
        level: "minor",
        content: "9.1 BRAND LOYALTY & MEMBERSHIP",
      },
      {
        type: "paragraph",
        content: (
          <>
            Businesses can replace static points with programmable tokens that{" "}
            <mark>unlock benefits, tiers, or access.</mark>
          </>
        ),
      },
      {
        type: "subheading",
        level: "minor",
        content: "9.2 SAAS ACCESS & SUBSCRIPTIONS",
      },
      {
        type: "paragraph",
        content:
          "Tokens can represent time-bound or usage-based access to digital services.",
      },
      {
        type: "subheading",
        level: "minor",
        content: "9.3 COMMUNITIES & EVENTS",
      },
      {
        type: "paragraph",
        content: (
          <>
            <mark>
              Tokens can enable gated access, participation rights, or digital
              collectibles.
            </mark>
          </>
        ),
      },
      {
        type: "subheading",
        level: "minor",
        content: "9.4 FRANCHISES & NETWORKS",
      },
      {
        type: "paragraph",
        content: (
          <>
            Tokenized incentives{" "}
            <mark>can align distributed operators and customers.</mark>
          </>
        ),
      },
    ],
  },
  {
    title: "10. TOKEN ECONOMICS",
    titleStyle: "mono",
    blocks: [
      {
        type: "subheading",
        level: "minor",
        content: "10.1 TOKEN SPECIFICATIONS",
      },
      {
        type: "list",
        items: [
          <>
            Token Symbol: <mark>CORP</mark>
          </>,
          <>
            Total Supply: <mark>100,000,000 (100M tokens)</mark>
          </>,
          <>
            Presale: <mark>20% (20,000,000)</mark>
          </>,
          <>
            Presale Price: <mark>$0.005</mark>
          </>,
          <>
            Target Rise: <mark>$100,000</mark>
          </>,
          <>
            Liquidity: <mark>10% (10,000,000)</mark>
          </>,
          <>
            Listing Price: <mark>$0.006</mark>
          </>,
          <>
            FDV (Fully Diluted Valuation):{" "}
            <mark>Total supply × Listing Price = $600,000</mark>
          </>,
          <>
            Blockchain: <mark>Solana</mark>
          </>,
          <>
            Supply Model: <mark>Fixed supply with no additional minting</mark>
          </>,
        ],
      },
      {
        type: "subheading",
        level: "minor",
        content: "10.2 TOKEN ALLOCATION",
      },
      {
        type: "paragraph",
        content:
          "The total token supply is distributed across the following categories to ensure balanced ecosystem development and long-term sustainability.",
      },
      {
        type: "table",
        columns: ["Category", "Percentage", "Tokens"],
        rows: tokenAllocationRows,
      },
    ],
  },
  {
    title: "11. STAKING AND VESTING",
    titleStyle: "mono",
    blocks: [
      {
        type: "subheading",
        level: "minor",
        content: "11.1 PURPOSE OF CORP",
      },
      {
        type: "paragraph",
        content:
          "Staking is a voluntary mechanism that allows participants to lock tokens in order to support ecosystem functionality and access defined benefits.",
      },
      {
        type: "subheading",
        level: "minor",
        content: "11.2 VESTING",
      },
      {
        type: "paragraph",
        content: (
          <>
            Vesting applies to specific allocations to{" "}
            <mark>
              ensure long-term alignment and controlled token release.
            </mark>
          </>
        ),
      },
      {
        type: "paragraph",
        content: "Vesting does not imply financial return.",
      },
      {
        type: "paragraph",
        content:
          "Token release schedules are designed to align long-term interests and prevent market volatility. All vesting schedules follow industry best practices for sustainable token distribution.",
      },
      {
        type: "subheading",
        level: "minor",
        content: "TEAM & ADVISORS",
      },
      {
        type: "list",
        plain: true,
        items: [
          <>
            Cliff Period: <strong>12 months</strong>
          </>,
          <>
            Vesting Period: <strong>36 months linear release</strong>
          </>,
          <>
            Total Duration: <strong>48 months (4 years)</strong>
          </>,
        ],
      },
      {
        type: "subheading",
        level: "minor",
        content: "PUBLIC DISTRIBUTION",
      },
      {
        type: "list",
        plain: true,
        items: [
          <>
            TGE Release: <strong>15% at Token Generation Event</strong>
          </>,
          <>
            Cliff Period: <strong>3 months</strong>
          </>,
          <>
            Vesting Period: <strong>9 months linear release</strong>
          </>,
        ],
      },
      {
        type: "subheading",
        level: "minor",
        content: "LIQUIDITY POOL",
      },
      {
        type: "list",
        plain: true,
        items: [
          <>
            Lock Type: <strong>100% locked at launch</strong>
          </>,
          <>
            Lock Duration: <strong>24 months</strong>
          </>,
        ],
      },
      {
        type: "subheading",
        level: "minor",
        content: "COMMUNITY REWARDS & STAKING",
      },
      {
        type: "list",
        plain: true,
        items: [
          <>
            Emission Schedule:{" "}
            <strong>Gradual release over 60 months (5 years)</strong>
          </>,
        ],
      },
      {
        type: "subheading",
        level: "minor",
        content: "DEVELOPMENT, MARKETING & ECOSYSTEM",
      },
      {
        type: "list",
        plain: true,
        items: [
          <>
            Cliff Period: <strong>3-6 months</strong>
          </>,
          <>
            Vesting Period: <strong>24-36 months linear release</strong>
          </>,
        ],
      },
    ],
  },
  {
    title: "12. ROADMAP",
    titleStyle: "mono",
    blocks: [
      {
        type: "list",
        items: [
          "The CORP token introduction",
          "Continued platform development",
          "Pilot onboarding of verified businesses",
          "Controlled retail access",
          "Ecosystem expansion",
        ],
      },
      {
        type: "paragraph",
        content:
          "The roadmap prioritizes functionality and adoption over speed.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Ensure liquidity & technical launch",
          "Expand token distribution & accessibility",
          "Aggressive marketing & community growth",
          "Major exchange listings",
          "Ecosystem expansion & new platform development",
          "Long-term sustainability & global scaling",
        ],
      },
    ],
  },
  {
    title: "13. RISK CONSIDERATIONS",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: "Coinporate acknowledges potential risks including:",
      },
      {
        type: "list",
        items: [
          "Development delays",
          "Regulatory uncertainty",
          "Technology dependencies",
          "Market adoption challenges",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content:
          "Participants should engage with the platform based on utility needs, not expectations of financial return.",
      },
    ],
  },
  {
    title: "14. TEAM & EXECUTION",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: (
          <>
            Coinporate is built by a <mark>team with experience</mark> in:
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Software development",
          "Platform architecture",
          "Business systems",
          "Long-term product execution",
        ],
      },
      {
        type: "callout",
        variant: "outline",
        align: "center",
        icon: "info",
        content: "Execution discipline and transparency are core principles.",
      },
    ],
  },
  {
    title: "15. CONCLUSION",
    titleStyle: "mono",
    blocks: [
      {
        type: "paragraph",
        content: (
          <>
            Coinporate is building infrastructure for a new category of digital
            business engagement. By focusing on verified participation,
            functional utility, and long-term alignment, Coinporate{" "}
            <mark>aims to enable sustainable tokenized brand ecosystems.</mark>
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong>CORP</strong> exists to support this ecosystem - not as an
            investment vehicle, but as a tool.
          </>
        ),
      },
      {
        type: "paragraph",
        variant: "statement",
        content: (
          <>
            Coinporate is designed to be
            <br />
            <mark>useful first,</mark>
            <br />
            <mark>scalable second,</mark>
            <br />
            <mark>and sustainable long-term.</mark>
          </>
        ),
      },
      {
        type: "list",
        plain: true,
        items: [
          "COINPORATE",
          "INFRASTRUCTURE FOR BUSINESS-OWNED TOKEN ECONOMIES",
          "WHITEPAPER",
          "VERSION 1.0 | 2025",
        ],
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
  const pendingScrollRef = useRef(null);
  const [tocHeight, setTocHeight] = useState(0);
  const [thumbStyle, setThumbStyle] = useState({
    height: "32px",
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
  const [activeTocId, setActiveTocId] = useState(sectionIds[0]?.id ?? null);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const activeTitle =
    sectionIds.find(({ id }) => id === activeTocId)?.title ?? tocItems[0];

  useEffect(() => {
    pendingScrollRef.current = pendingScrollId;
  }, [pendingScrollId]);

  useEffect(() => {
    const list = tocListRef.current;
    if (!list || list.scrollHeight <= list.clientHeight + 1) {
      return;
    }
    const activeButton = list.querySelector('button[aria-current="true"]');
    if (!activeButton) {
      return;
    }
    const listRect = list.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    const padding = 8;
    if (buttonRect.top < listRect.top + padding) {
      list.scrollTop -= listRect.top - buttonRect.top + padding;
    } else if (buttonRect.bottom > listRect.bottom - padding) {
      list.scrollTop += buttonRect.bottom - listRect.bottom + padding;
    }
  }, [activeTocId]);

  const updateThumbForIndex = (index) => {
    if (!tocListRef.current) {
      return;
    }
    const listItems = tocListRef.current.querySelectorAll("li");
    if (!listItems.length) {
      return;
    }
    const listRect = tocListRef.current.getBoundingClientRect();
    const listHeight = listRect.height;
    if (listHeight <= 0) {
      return;
    }
    setTocHeight(listHeight);

    const safeIndex = Math.min(listItems.length - 1, Math.max(0, index));
    const itemRect = listItems[safeIndex].getBoundingClientRect();
    const itemHeight = itemRect.height;
    const minThumb = 32;
    const maxThumb = listHeight;
    const thumbHeight = Math.min(maxThumb, Math.max(minThumb, itemHeight));
    const maxOffset = Math.max(0, listHeight - thumbHeight);
    const maxIndex = Math.max(1, listItems.length - 1);
    const progress = maxIndex === 0 ? 0 : safeIndex / maxIndex;
    const thumbOffset = progress * maxOffset;
    setThumbStyle({
      height: `${thumbHeight}px`,
      transform: `translateY(${thumbOffset}px)`,
    });
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    if (activeTocId === id) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setActiveTocId(id);
    setPendingScrollId(id);
    const targetIndex = sectionIds.findIndex((section) => section.id === id);
    if (targetIndex >= 0) {
      updateThumbForIndex(targetIndex);
    }
  };

  useEffect(() => {
    document.title = "Coinporate Whitepaper | Version 1.0 (2025)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Coinporate whitepaper describing the CORP utility token, platform architecture, token economics, vesting, and roadmap."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Coinporate whitepaper describing the CORP utility token, platform architecture, token economics, vesting, and roadmap.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  useEffect(() => {
    if (!pendingScrollId) {
      return;
    }
    const el = document.getElementById(pendingScrollId);
    if (!el) {
      setPendingScrollId(null);
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pendingScrollId]);

  useEffect(() => {
    const updateTocMetrics = () => {
      if (!tocListRef.current || !contentRef.current) {
        return;
      }
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const contentRect = contentRef.current.getBoundingClientRect();
      const contentTop = contentRect.top + scrollY;
      const contentHeight = contentRef.current.offsetHeight;
      const contentBottom = contentTop + contentHeight;
      const isAtBottom = scrollY + viewport >= contentBottom - 1;
      const pendingId = pendingScrollRef.current;

      const anchor = scrollY + viewport * 0.25;
      let nextActiveId = sectionIds[0]?.id ?? null;
      if (pendingId) {
        nextActiveId = pendingId;
        const targetEl = document.getElementById(pendingId);
        if (!targetEl) {
          setPendingScrollId(null);
        } else {
          const targetTop = targetEl.getBoundingClientRect().top + scrollY;
          const reachedTarget =
            Math.abs(scrollY - targetTop) <= 2 || isAtBottom;
          if (reachedTarget) {
            setPendingScrollId(null);
          }
        }
      } else {
        sectionIds.forEach(({ id }) => {
          const sectionEl = document.getElementById(id);
          if (!sectionEl) {
            return;
          }
          const sectionTop = sectionEl.getBoundingClientRect().top + scrollY;
          if (anchor >= sectionTop) {
            nextActiveId = id;
          }
        });
        if (isAtBottom && sectionIds.length) {
          nextActiveId = sectionIds[sectionIds.length - 1].id;
        }
      }
      if (nextActiveId) {
        setActiveTocId((prev) => (prev === nextActiveId ? prev : nextActiveId));
      }
      const activeIndex = Math.max(
        0,
        sectionIds.findIndex(({ id }) => id === nextActiveId)
      );
      updateThumbForIndex(activeIndex);
    };

    updateTocMetrics();
    window.addEventListener("scroll", updateTocMetrics, { passive: true });
    window.addEventListener("resize", updateTocMetrics);
    return () => {
      window.removeEventListener("scroll", updateTocMetrics);
      window.removeEventListener("resize", updateTocMetrics);
    };
  }, [sectionIds]);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "paragraph": {
        const variantClass =
          block.variant === "lead"
            ? "whitepaper-block__paragraph--lead"
            : block.variant === "accent"
              ? "whitepaper-block__paragraph--accent"
              : block.variant === "statement"
                ? "whitepaper-block__paragraph--statement"
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
      case "subheading": {
        const levelClass =
          block.level === "minor" ? "whitepaper-block__subheading--minor" : "";
        return (
          <h3
            key={`subheading-${index}`}
            className={`whitepaper-block__subheading ${levelClass}`.trim()}
          >
            {block.content}
          </h3>
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
              } ${block.plain ? "whitepaper-block__list--plain" : ""}`.trim()}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`}>{item}</li>
              ))}
            </ListTag>
          </div>
        );
      }
      case "comparison":
        return (
          <div
            key={`comparison-${index}`}
            className="whitepaper-block__comparison"
          >
            <article className="whitepaper-block__comparison-card">
              <p className="whitepaper-block__comparison-title">
                {block.leftTitle}
              </p>
              <ul className="whitepaper-block__comparison-list">
                {block.leftItems.map((item, itemIndex) => (
                  <li key={`comparison-left-${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="whitepaper-block__comparison-card">
              <p className="whitepaper-block__comparison-title">
                {block.rightTitle}
              </p>
              <ul className="whitepaper-block__comparison-list">
                {block.rightItems.map((item, itemIndex) => (
                  <li key={`comparison-right-${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        );
      case "table":
        return (
          <div key={`table-${index}`} className="whitepaper-block__table-wrap">
            <table className="whitepaper-block__table">
              <thead>
                <tr>
                  {block.columns.map((column) => (
                    <th key={`${index}-${column}`}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`row-${index}-${rowIndex}`}>
                    {row.map((cell, cellIndex) => {
                      const cellLabel = block.columns[cellIndex] || "";
                      return (
                        <td
                          key={`cell-${index}-${rowIndex}-${cellIndex}`}
                          data-label={cellLabel}
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
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
            <div className="whitepaper-toc__current" aria-live="polite">
              <span className="whitepaper-toc__current-label">
                Current section
              </span>
              <span className="whitepaper-toc__current-title">
                {activeTitle}
              </span>
            </div>
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
                  const isActive = activeTocId === targetId;
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        className={`whitepaper-toc__button ${
                          isActive ? "whitepaper-toc__button--active" : ""
                        }`.trim()}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => handleScrollTo(targetId)}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <a
              className="whitepaper-download"
              href={WHITEPAPER_DOWNLOAD_PATH}
              download="Coinporate_Whitepaper.pdf"
              aria-label="Download Coinporate whitepaper PDF"
            >
              <span className="whitepaper-download__copy">
                <span className="whitepaper-download__title">
                  Download Whitepaper
                </span>
                <span className="whitepaper-download__meta">
                  PDF for offline reading
                </span>
              </span>
              <span className="whitepaper-download__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4v10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="m7.8 10.8 4.2 4.2 4.2-4.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 18h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </aside>
          <div className="whitepaper-content" ref={contentRef}>
            {contentSections.map((section, index) => {
              const sectionId = section.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              const isActive = activeTocId === sectionId;
              const isHeroTitle = section.titleStyle === "hero" || isActive;
              const titleClassName = `whitepaper-block__title ${
                isHeroTitle
                  ? "whitepaper-block__title--hero"
                  : "whitepaper-block__title--mono"
              } ${isActive ? "whitepaper-block__title--active" : ""}`;

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
