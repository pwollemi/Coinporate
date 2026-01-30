function SiteFooter({
  logo,
  socialX,
  socialDiscord,
  onWhitepaperClick,
  xUrl,
  discordUrl,
}) {
  return (
    <footer className="footer">
      <div className="footer__row">
        <img className="footer__logo" src={logo} alt="coinporate" />
        <div className="footer__content">
          <nav className="footer__nav">
            <span>About</span>
            <span className="footer__separator">|</span>
            <span>How to earn</span>
            <span className="footer__separator">|</span>
            <span>Staking</span>
            <span className="footer__separator">|</span>
            <button
              className="footer__nav-link"
              type="button"
              onClick={onWhitepaperClick}
            >
              Whitepaper
            </button>
            <span className="footer__separator">|</span>
            <span>Presale</span>
          </nav>
          <div className="footer__social">
            <img
              className="footer__social-icon"
              src={socialX}
              alt="X"
              onClick={() => window.open(xUrl, "_blank")}
            />
            <img
              className="footer__social-icon"
              src={socialDiscord}
              alt="Discord"
              onClick={() => window.open(discordUrl, "_blank")}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
