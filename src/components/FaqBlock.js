import React, { useMemo, useState } from "react";

function FaqBlock({ title, pill, items }) {
  const initialOpen = useMemo(
    () => items.findIndex((item) => item.open),
    [items]
  );
  const [openIndex, setOpenIndex] = useState(
    initialOpen === -1 ? 0 : initialOpen
  );

  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          {pill ? <span className="faq__pill">{pill}</span> : null}
          <h2 className="faq__title">{title}</h2>
        </div>
        <div className="faq__list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const number = item.number || String(index + 1).padStart(2, "0");
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={`${number}-${item.question}`}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq__item-toggle"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? -1 : index))
                  }
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  id={headingId}
                >
                  <span className="faq__item-number">{number}.</span>
                  <span className="faq__item-title">{item.question}</span>
                  <span className="faq__item-icon" aria-hidden="true">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1C8.5 0.723857 8.27614 0.5 8 0.5H3.5C3.22386 0.5 3 0.723857 3 1C3 1.27614 3.22386 1.5 3.5 1.5H7.5V5.5C7.5 5.77614 7.72386 6 8 6C8.27614 6 8.5 5.77614 8.5 5.5V1ZM1.35355 8.35355L8.35355 1.35355L7.64645 0.646446L0.646447 7.64645L1.35355 8.35355Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  className="faq__item-panel"
                  role="region"
                  aria-labelledby={headingId}
                >
                  {item.answer ? (
                    <div
                      className="faq__item-body"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqBlock;
