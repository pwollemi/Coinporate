import { useCallback, useEffect, useMemo, useState } from "react";
import HomePage from "./pages/HomePage";
import AcademyPage from "./pages/AcademyPage";
import AcademyDetailPage from "./pages/AcademyDetailPage";
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

function App() {
  const [route, setRoute] = useState(() => window.location.pathname || "/");

  const normalizedRoute = useMemo(() => {
    if (route.length > 1 && route.endsWith("/")) {
      return route.slice(0, -1);
    }
    return route;
  }, [route]);

  const navigate = useCallback(
    (path, state) => {
      const nextPath = path.startsWith("/") ? path : `/${path}`;
      if (nextPath === normalizedRoute) {
        return;
      }
      window.history.pushState(state ?? {}, "", nextPath);
      setRoute(nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [normalizedRoute]
  );

  useEffect(() => {
    const handlePop = () => setRoute(window.location.pathname || "/");
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const isStaking = normalizedRoute === "/staking";
  const isAcademy = normalizedRoute === "/academy";
  const isAcademyDetail =
    normalizedRoute.startsWith("/academy/") && !isAcademy;
  const isWhitepaper = normalizedRoute === "/whitepaper";

  const header = (
    <SiteHeader
      navLinks={navLinks}
      logo={heroLogo}
      iconWallet={iconWallet}
      onNavigate={navigate}
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
          ) : isAcademyDetail ? (
            <AcademyDetailPage route={normalizedRoute} onNavigate={navigate} />
          ) : isAcademy ? (
            <AcademyPage onNavigate={navigate} />
          ) : isWhitepaper ? (
            <WhitepaperPage />
          ) : (
            <HomePage
              header={header}
            />
          )}
          <SiteFooter
            logo={heroLogo}
            socialX={socialX}
            socialDiscord={socialDiscord}
            navLinks={navLinks}
            onNavigate={navigate}
            xUrl={X_URL}
            discordUrl={DISCORD_URL}
          />
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
