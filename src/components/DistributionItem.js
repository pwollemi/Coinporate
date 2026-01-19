import React from "react";

function DistributionItem({ value, label, showDivider }) {
  return (
    <div
      className={`distribution-item distribution-item--divider ${
        showDivider ? "distribution-item--divider--right" : ""
      }`}
    >
      <div className="distribution-item__value">{value}</div>
      <div className="distribution-item__label">{label}</div>
    </div>
  );
}

export default DistributionItem;
