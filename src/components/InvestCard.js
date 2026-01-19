import React from "react";

function InvestCard({
  title,
  text,
  variant,
  mediaType,
  image,
  icon,
  imageClass,
  colspan,
}) {
  const variantClass =
    variant === "dark"
      ? "invest-card invest-card--dark"
      : variant === "lime"
      ? "invest-card invest-card--lime"
      : variant === "image"
      ? "invest-card invest-card--sage"
      : "invest-card invest-card--sage";

  return (
    <div
      className={`${variantClass}`}
      // style={{ gridColumn: `span ${colspan}` }}
    >
      <div className="invest-card__content">
        {icon ? <img className="invest-card__icon" src={icon} alt="" /> : null}
        <div className="invest-card__title">{title}</div>
        <div
          className={`invest-card__text ${
            variant === "lime" ? "invest-card__text--dark" : ""
          }`}
        >
          {text}
        </div>
      </div>

      {mediaType === "video" && (
        <>
          <video
            className="invest-card__media"
            src="/media/investment_video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </>
      )}
      {image && variant === "image" && (
        <>
          <img className="invest-card__media" src={image} alt="" />
          <div className="invest-card__overlay" aria-hidden="true" />
        </>
      )}
      {image && variant !== "image" && (
        <img
          className={imageClass || "invest-card__floating"}
          src={image}
          alt=""
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default InvestCard;
