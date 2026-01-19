import React from "react";

function SectionHeader({
  pill,
  title,
  className = "",
  pillClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={`section-header ${className}`}>
      {pill ? (
        <span className={`section-header__pill ${pillClassName}`}>{pill}</span>
      ) : null}
      {title ? (
        <h2 className={`section-header__title ${titleClassName}`}>{title}</h2>
      ) : null}
    </div>
  );
}

export default SectionHeader;
