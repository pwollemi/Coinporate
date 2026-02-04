import { Fragment } from "react";

function SiteFooter({
  logo,
  socialX,
  socialDiscord,
  navLinks = [],
  onNavigate,
  xUrl,
  discordUrl,
}) {
  const footerLinks =
    navLinks.length > 0
      ? navLinks
      : ["About", "How to earn", "Staking", "Whitepaper"];

  const handleNavClick = (link) => {
    if (link === "Whitepaper") {
      onNavigate?.("/whitepaper");
      return;
    }
    if (link === "How to earn") {
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

  return (
    <footer className="footer">
      <div className="footer__row">
        <button
          className="footer__logo-button"
          type="button"
          onClick={() => onNavigate?.("/")}
          aria-label="Go to home"
        >
          <img className="footer__logo" src={logo} alt="coinporate" />
        </button>
        <div className="footer__content">
          <nav className="footer__nav">
            {footerLinks.map((link, index) => (
              <Fragment key={link}>
                <button
                  className="footer__nav-link"
                  type="button"
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </button>
                {index < footerLinks.length - 1 && (
                  <span className="footer__separator" aria-hidden="true">
                    |
                  </span>
                )}
              </Fragment>
            ))}
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
