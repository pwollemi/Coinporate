import React from "react";

function LiquidityCard({ icon, title, text, active, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      className={`liquidity-card ${active ? "liquidity-card--active" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <img src={icon} alt="" className="liquidity-card__icon" />
      <div className="liquidity-card__title">{title}</div>
      <div className="liquidity-card__text">{text}</div>
    </div>
  );
}

export default LiquidityCard;
