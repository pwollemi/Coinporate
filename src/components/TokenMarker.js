import React from "react";

function TokenMarker({ label, value, sub, detail, left }) {
  return (
    <div className="token-marker" style={{ left }}>
      <div className="token-marker__label">{label}</div>
      <div className="token-marker__line" aria-hidden="true" />
      <div className="token-marker__value-container">
        {value ? <div className="token-marker__value">{value}</div> : null} 
        {sub ? <div className="token-marker__sub">{sub}</div> : null}
        {detail ? <div className="token-marker__detail">{detail}</div> : null}
      </div>
    </div>
  );
}

export default TokenMarker;
