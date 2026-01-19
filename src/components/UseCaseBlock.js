import React from "react";
import UseCaseCard from "./UseCaseCard";

function UseCaseBlock({ block, iconBullets, iconBolt }) {
  const reverseClass = block.reverse ? "use-case--reverse" : "";

  return (
    <div className={`use-case ${reverseClass}`}>
      <div className="use-case__divider" aria-hidden="true" />
      <div className="use-case__info">
        <h3 className="use-case__title">{block.title}</h3>
        <ul className="use-case__list">
          {block.list.map((item, index) => (
            <li key={item} className="use-case__list-item">
              <img
                src={iconBullets[index]}
                alt=""
                aria-hidden="true"
                className="use-case__list-icon"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <img
          className="use-case__image-img"
          src={block.image}
          alt="Illustrated portrait"
        />
      </div>
      <div className="use-case__cards">
        {block.cards.map((card) => (
          <UseCaseCard
            key={card.title}
            title={card.title}
            text={card.text}
            dim={card.dim}
            icon={iconBolt}
          />
        ))}
      </div>
      <div className="use-case__image-container"></div>
    </div>
  );
}

export default UseCaseBlock;
