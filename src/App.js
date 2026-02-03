import { useCallback, useEffect, useMemo, useState } from "react";
import HomePage from "./pages/HomePage";
import AcademyPage from "./pages/AcademyPage";
import WhitepaperPage from "./pages/WhitepaperPage";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { ToastProvider } from "./components/ToastProvider";
import StakingPage from "./pages/StakingPage";
import { navLinks } from "./data/content";
import { X_URL, DISCORD_URL } from "./data/constants";
import heroLogo from "./assets/coinporate-logo-nav.svg";
import iconWallet from "./assets/coinporate/icons/wallet.svg";
import socialX from "./assets/social-x.svg";
import socialDiscord from "./assets/social-discord.svg";
import "./styles/toast.css";

function WhitepaperRedirect({ onOpen }) {
  useEffect(() => {
    window.open("/coinporate_whitepaper.pdf", "_blank", "noopener,noreferrer");
    onOpen();
  }, [onOpen]);
  return null;
}

function App() {
  const [route, setRoute] = useState(() => window.location.pathname || "/");

  const normalizedRoute = useMemo(() => {
    if (route.length > 1 && route.endsWith("/")) {
      return route.slice(0, -1);
    }
    return route;
  }, [route]);

  const navigate = useCallback(
    (path) => {
      const nextPath = path.startsWith("/") ? path : `/${path}`;
      if (nextPath === normalizedRoute) {
        return;
      }
      window.history.pushState({}, "", nextPath);
      setRoute(nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [normalizedRoute]
  );

  const handleWhitepaperClick = useCallback(() => {
    window.open("/coinporate_whitepaper.pdf", "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    const handlePop = () => setRoute(window.location.pathname || "/");
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const isStaking = normalizedRoute === "/staking";
  const isAcademy = normalizedRoute === "/academy";
  const isWhitepaper = normalizedRoute === "/whitepaper";
  const isAirdrop = normalizedRoute === "/airdrop";

  const header = (
    <SiteHeader
      navLinks={navLinks}
      logo={heroLogo}
      iconWallet={iconWallet}
      onNavigate={navigate}
      onWhitepaperClick={handleWhitepaperClick}
      variant={"dark"}
    />
  );

  return (
    <ToastProvider>
      <div className="page">
        <div className="page__frame">
          {header}

          {isStaking ? (
            <StakingPage />
          ) : isAcademy ? (
            <AcademyPage />
          ) : isWhitepaper ? (
            <WhitepaperRedirect onOpen={() => navigate("/")} />
          ) : isAirdrop ? (
            <WhitepaperPage />
          ) : (
            <HomePage
              header={header}
              onWhitepaperClick={handleWhitepaperClick}
            />
          )}
          <SiteFooter
            logo={heroLogo}
            socialX={socialX}
            socialDiscord={socialDiscord}
            onWhitepaperClick={handleWhitepaperClick}
            xUrl={X_URL}
            discordUrl={DISCORD_URL}
          />
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
