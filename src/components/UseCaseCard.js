import React from "react";

function UseCaseCard({ title, text, dim, icon }) {
  return (
    <div className={`use-case-card ${dim ? "use-case-card--dim" : ""}`}>
      <div className="use-case-card__icon" aria-hidden="true">
        <img src={icon} alt="" className="use-case-card__icon-img" />
      </div>
      <div className="use-case-card__content">
        <div className="use-case-card__title">{title}</div>
        <div className="use-case-card__text">{text}</div>
      </div>
    </div>
  );
}

export default UseCaseCard;
