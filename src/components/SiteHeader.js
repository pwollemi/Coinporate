import { Fragment, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectWalletButton, ConnectWalletLabel } from "./ConnectWalletButton";

function SiteHeader({ navLinks, logo, iconWallet, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connected, publicKey, disconnect } = useWallet();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (link) => {
    if (link === "Whitepaper") {
      onNavigate?.("/whitepaper");
      return;
    }
    if (link === "Academy") {
      onNavigate?.("/academy");
      return;
    }
    if (link === "Staking") {
      onNavigate?.("/staking");
      return;
    }
    if (link === "Airdrop") {
      onNavigate?.("/airdrop");
      return;
    }
    onNavigate?.("/");
  };

  const handleLogoClick = () => {
    onNavigate?.("/");
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (link) => {
    handleNavClick(link);
    setIsMobileMenuOpen(false);
  };

  const handleCopyAddress = async () => {
    if (!publicKey) {
      return;
    }
    try {
      await navigator.clipboard.writeText(publicKey.toBase58());
    } catch (error) {
      // Clipboard permissions can fail; ignore silently.
    }
    setIsMobileMenuOpen(false);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      // Wallet adapter handles its own error reporting/logging.
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={"hero__nav"} aria-label="Primary">
      <button
        className="hero__logo-button"
        type="button"
        onClick={handleLogoClick}
        aria-label="Go to home"
      >
        <img className="hero__logo" src={logo} alt="coinporate" />
      </button>
      <div className="hero__nav-center">
        <div className="hero__links">
          {navLinks.map((link, index) => (
            <Fragment key={link}>
              <button
                className="hero__link"
                onClick={() => handleNavClick(link)}
                type="button"
              >
                {link}
              </button>
              {index < navLinks.length - 1 && (
                <span className="hero__divider" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="hero__cta-container">
        <ConnectWalletButton className="btn--nav hero__cta" type="button">
          <img
            src={iconWallet}
            alt=""
            className="btn__icon"
            aria-hidden="true"
          />
          <ConnectWalletLabel className="btn__label hero__cta-label" />
        </ConnectWalletButton>
      </div>
      <button
        className="hero__menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        type="button"
      >
        <span className="hero__menu-bar"></span>
        <span className="hero__menu-bar"></span>
      </button>
      {isMobileMenuOpen && (
        <div className="hero__mobile-menu" role="dialog">
          <div className="hero__mobile-menu-inner">
            <div className="hero__mobile-links">
              {navLinks.map((link) => (
                <button
                  key={link}
                  className="hero__mobile-link"
                  type="button"
                  onClick={() => handleMobileNavClick(link)}
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="hero__mobile-wallet">
              <ConnectWalletButton
                className="btn--nav hero__mobile-cta"
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src={iconWallet}
                  alt=""
                  className="btn__icon"
                  aria-hidden="true"
                />
                <ConnectWalletLabel className="btn__label hero__cta-label" />
              </ConnectWalletButton>
              {connected && (
                <div className="hero__mobile-wallet-actions">
                  <button
                    type="button"
                    className="hero__mobile-action"
                    onClick={handleCopyAddress}
                  >
                    Copy address
                  </button>
                  <button
                    type="button"
                    className="hero__mobile-action"
                    onClick={handleDisconnect}
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SiteHeader;
