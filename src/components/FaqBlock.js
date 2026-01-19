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
          {pill ? (
            <span className="section-header__pill section-header__pill--md">
              {pill}
            </span>
          ) : null}
          <h2 className="section-header__title section-header__title--lg">
            {title}
          </h2>
        </div>
        <div className="">
          {items.map((item, index) => (
            <button
              key={item.number}
              type="button"
              className={`faq__item ${
                openIndex === index ? "faq__item--open" : ""
              }`}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
              aria-expanded={openIndex === index}
            >
              <span className="faq__item-number">{item.number}</span>
              <span className="faq__item-content">
                <span className="faq__item-title">{item.question}</span>
                {item.answer ? (
                  <span className="faq__item-body">{item.answer}</span>
                ) : null}
              </span>
              <span className="faq__item-action" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqBlock;
