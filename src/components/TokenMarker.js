import React from "react";

function TokenMarker({ label, value, sub, detail, left }) {
  return (
    <div className="token-marker" style={{ left }}>
      <div className="token-marker__label">{label}</div>
      <div className="token-marker__line" aria-hidden="true" />
      <div className="token-marker__value">
        {value} {sub ? <div>{sub}</div> : null}
        {detail ? <div className="token-marker__sub">{detail}</div> : null}
      </div>
    </div>
  );
}

export default TokenMarker;
