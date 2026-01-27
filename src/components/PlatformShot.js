import React from "react";

function PlatformShot({ image, alt, showWallet }) {
  return (
    <div className="platform-shot">
      <img className="platform-shot__image" src={image} alt={alt} />
      <div className="platform-shot__badge">
        <div className="platform-shot__tag">Token Platform</div>
        <div className="platform-shot__sub">Platform Explorer, Project Overview, Project Interface, Token Detail View
        </div>
      </div>
      {showWallet ? (
        <div className="platform-shot__wallet">Your Wallet</div>
      ) : null}
      <div className="platform-shot__callout">
        <div className="platform-shot__tag">Dashboard</div>
        <div className="platform-shot__sub">
          Our Technology AI Generator website empowers individuals
        </div>
      </div>
    </div>
  );
}

export default PlatformShot;
