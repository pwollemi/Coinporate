import React from "react";

function RoadmapCard({ number, title, text, status }) {
  const numeric = Number(number);
  const numberClass = status
    ? "roadmap-card__number roadmap-card__number--active"
    : numeric >= 4
    ? "roadmap-card__number roadmap-card__number--pending"
    : "roadmap-card__number roadmap-card__number--done";

  return (
    <div className="roadmap-card">
      <div className="roadmap-card__number-container">
        <div className={numberClass}>{number}</div>
        {status ? (
          <div
            className={`roadmap-card__status${
              status === "Upcoming" ? " roadmap-card__status--upcoming" : ""
            }`}
          >
            {status}
          </div>
        ) : null}
      </div>
      <div className="roadmap-card__title">{title}</div>
      <div className="roadmap-card__text">{text}</div>
    </div>
  );
}

export default RoadmapCard;
