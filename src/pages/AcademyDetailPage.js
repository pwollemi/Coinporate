import { useEffect, useMemo, useRef, useState } from "react";
import { academyArticles } from "../data/academyArticles";
import heroImage from "../source/airdrop/5b5c6083d5384cbcc5839503d28c9ee4cefb953a.png";
import iconRing from "../assets/coinporate/icons/ring.svg";

const getSlugFromPath = (path) => {
  if (!path) {
    return "";
  }
  const [, slugPart = ""] = path.split("/academy/");
  return slugPart.replace(/^\/+|\/+$/g, "");
};

const buildSectionId = (value) =>
  value
    ? value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    : "";

const renderParagraphText = (text) => {
  if (!text || typeof text !== "string") {
    return text;
  }
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z])/);
  if (sentences.length === 1) {
    return text;
  }
  return sentences.map((sentence, index) => (
    <span key={`sentence-${index}`}>
      {sentence}
      {index < sentences.length - 1 && (
        <>
          <br />
          <br />
        </>
      )}
    </span>
  ));
};

function AcademyDetailPage({ route }) {
  const tocListRef = useRef(null);
  const contentRef = useRef(null);
  const pendingScrollRef = useRef(null);
  const [tocHeight, setTocHeight] = useState(0);
  const [thumbStyle, setThumbStyle] = useState({
    height: "32px",
    transform: "translateY(0)",
  });
  const [pendingScrollId, setPendingScrollId] = useState(null);

  const slug = getSlugFromPath(route || window.location.pathname);
  const article = useMemo(() => {
    const stateArticle = window.history.state?.academyArticle;
    if (stateArticle?.slug && stateArticle.slug === slug) {
      return stateArticle;
    }
    return academyArticles.find((item) => item.slug === slug);
  }, [slug]);

  const heroPoster = article?.heroImage || heroImage;
  const sections = article?.sections ?? [];

  const sectionIds = useMemo(
    () =>
      sections.map((section) => ({
        id: buildSectionId(section.title),
        title: section.title,
      })),
    [sections]
  );

  const [activeTocId, setActiveTocId] = useState(sectionIds[0]?.id ?? null);

  useEffect(() => {
    setActiveTocId(sectionIds[0]?.id ?? null);
    setPendingScrollId(null);
    if (!sectionIds.length) {
      setTocHeight(0);
      setThumbStyle({ height: "32px", transform: "translateY(0)" });
    }
  }, [sectionIds]);

  useEffect(() => {
    pendingScrollRef.current = pendingScrollId;
  }, [pendingScrollId]);

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
    const pageTitle = article?.title
      ? `${article.title} | Coinporate Academy`
      : "Coinporate Academy";
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      article?.text ||
      "Explore Coinporate Academy lessons on staking, transaction fees, and on-chain participation.";
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, [article]);

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
    if (!sectionIds.length) {
      return;
    }
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

  return (
    <main className="academy-detail">
      <section className="academy-detail-hero" aria-hidden="true">
        <div className="academy-detail-hero__video-wrap">
          <video
            className="academy-detail-hero__video"
            src="/media/token-head.mp4"
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="academy-detail-hero__veil" />
        </div>
        <img className="academy-detail-hero__ring" src={iconRing} alt="" />
        <div className="academy-detail-hero__title">
          {article?.title || "Academy"}
        </div>
      </section>
      <h1 className="visually-hidden">
        {article?.title || "Coinporate Academy"}
      </h1>
      <section className="academy-detail-body">
        <div className="academy-detail-body__inner">
          <aside className="academy-detail-toc">
            <span className="academy-detail-toc__label">FIND TOPIC</span>
            <div className="academy-detail-toc__body">
              <div
                className="academy-detail-toc__scroll"
                style={{ height: tocHeight ? `${tocHeight}px` : "135%" }}
              >
                <div className="academy-detail-toc__track" />
                <div className="academy-detail-toc__thumb" style={thumbStyle} />
              </div>
              <ul ref={tocListRef}>
                {sectionIds.map(({ id, title }) => {
                  const isActive = activeTocId === id;
                  return (
                    <li key={id || title}>
                      <button
                        type="button"
                        className={`academy-detail-toc__button ${
                          isActive ? "academy-detail-toc__button--active" : ""
                        }`.trim()}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => handleScrollTo(id)}
                      >
                        {title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
          <div className="academy-detail-content" ref={contentRef}>
            {sections.length ? (
              sections.map((section, index) => {
                const sectionId = buildSectionId(section.title);
                const isActive = activeTocId === sectionId;
                const titleClassName = `academy-detail-block__title ${
                  isActive
                    ? "academy-detail-block__title--hero"
                    : "academy-detail-block__title--mono"
                }`;
                const paragraphs = section.paragraphs || [];
                const listItems = section.list || [];
                const ListTag = section.ordered ? "ol" : "ul";

                return (
                  <article
                    key={`${section.title}-${index}`}
                    className="academy-detail-block"
                    id={sectionId}
                  >
                    <h2 className={titleClassName}>{section.title}</h2>
                    <div className="academy-detail-block__content">
                      {paragraphs.map((paragraph, paragraphIndex) => {
                        return (
                          <p
                            key={`paragraph-${index}-${paragraphIndex}`}
                            className={`academy-detail-block__paragraph 
                              }`.trim()}
                          >
                            {renderParagraphText(paragraph)}
                          </p>
                        );
                      })}
                      {listItems.length > 0 && (
                        <div className="academy-detail-block__list-group">
                          {section.listTitle && (
                            <p className="academy-detail-block__list-title">
                              {section.listTitle}
                            </p>
                          )}
                          <ListTag
                            className={`academy-detail-block__list ${
                              section.ordered
                                ? "academy-detail-block__list--ordered"
                                : ""
                            }`.trim()}
                          >
                            {listItems.map((item, itemIndex) => (
                              <li key={`item-${index}-${itemIndex}`}>{item}</li>
                            ))}
                          </ListTag>
                        </div>
                      )}
                    </div>
                    {index !== sections.length - 1 && (
                      <div className="academy-detail-block__divider" />
                    )}
                  </article>
                );
              })
            ) : (
              <article className="academy-detail-block">
                <h2 className="academy-detail-block__title academy-detail-block__title--mono">
                  No content yet
                </h2>
                <div className="academy-detail-block__content">
                  <p className="academy-detail-block__paragraph">
                    This academy article does not have any sections yet.
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AcademyDetailPage;
