import React from "react";

function PlatformShot({ image, alt, showWallet, titles, descriptions }) {
  return (
    <div className="platform-shot">
      <img className="platform-shot__image" src={image} alt={alt} />
      <div className="platform-shot__badge">
        <div className="platform-shot__tag">{titles[0]}</div>
        <div className="platform-shot__sub">{descriptions[0]}</div>
      </div>
      {showWallet ? (
        <div className="platform-shot__wallet">Your Wallet</div>
      ) : null}
      <div className="platform-shot__callout">
        <div className="platform-shot__tag">{titles[1]}</div>
        <div className="platform-shot__sub">{descriptions[1]}</div>
      </div>
    </div>
  );
}

export default PlatformShot;
