import { Fragment, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PrimaryButton from "./components/PrimaryButton";
import SectionHeader from "./components/SectionHeader";
import LiquidityCard from "./components/LiquidityCard";
import DistributionItem from "./components/DistributionItem";
import InvestCard from "./components/InvestCard";
import TeamCard from "./components/TeamCard";
import HeroHeadline from "./components/HeroHeadline";
import CountdownTimer from "./components/CountdownTimer";
import PlatformShot from "./components/PlatformShot";
import RoadmapCard from "./components/RoadmapCard";
import TokenMarker from "./components/TokenMarker";
import UseCaseBlock from "./components/UseCaseBlock";
import HeroSection from "./components/HeroSection";
import FaqBlock from "./components/FaqBlock";
import {
  avatarOffsets,
  navLinks,
  tokenFeatures,
  useCases,
  liquidityCards,
  distributionItems,
  investCards,
  tokenMarkers,
  roadmapNodes,
  roadmapCards,
  teamMembers,
  teamBio,
  partnerLogos,
  faqItems,
} from "./data/content";
import heroTexture from "./assets/coinporate/hero-texture.png";
import heroTriangles from "./assets/hero-triangles.svg";
import heroLogo from "./assets/coinporate-logo-nav.svg";
import heroVideoMobile from "./assets/coinporate/videos/coinporate-mobile-1080HD.mp4";
import heroVideoDesktop from "./assets/coinporate/videos/coinporate-desktop_1080HD.mp4";
import ctaArrow from "./assets/cta-arrow.svg";
import socialX from "./assets/social-x.svg";
import socialDiscord from "./assets/social-discord.svg";
import socialLinkedIn from "./assets/social-linkedin.svg";
import platformDashboard from "./assets/coinporate/platform-dashboard.png";
import liquidMetal from "./assets/coinporate/liquid-metal.png";
import iconBolt from "./assets/coinporate/icons/bolt.svg";
import iconArrow from "./assets/coinporate/icons/arrow.svg";
import iconWallet from "./assets/coinporate/icons/wallet.svg";
import iconArrowRight from "./assets/arrow_right.svg";
import iconArrowLeft from "./assets/arrow_left.svg";
import iconArrowUp from "./assets/arrow_up.svg";
import iconArrowDown from "./assets/arrow_down.svg";
import iconRing from "./assets/coinporate/icons/ring.svg";
import iconBrandASmall from "./assets/coinporate/icons/brand-a-small.svg";
import iconCheck from "./assets/coinporate/icons/check.svg";
import iconChevronDown from "./assets/coinporate/icons/chevron-down.svg";
import iconArch from "./assets/coinporate/icons/icon-arch.svg";
import headRight from "./assets/coinporate/head-right.png";

import iconLinkedIn from "./assets/coinporate/icons/linkedin-lime.svg";
import iconX from "./assets/coinporate/icons/x-lime.svg";
import iconDiscord from "./assets/coinporate/icons/discord-lime.svg";

const roadmapNodeStyles = {
  done: "roadmap__node-circle roadmap__node-circle--done",
  active: "roadmap__node-circle roadmap__node-circle--active",
  pending: "roadmap__node-circle roadmap__node-circle--pending",
};

const iconBullets = [
  iconArrowUp,
  iconArrowLeft,
  iconArrowRight,
  iconArrowDown,
  iconArrowLeft,
  iconArrowRight,
  iconArrowDown,
];

function App() {
  const [activeTokenIndex, setActiveTokenIndex] = useState(0);
  const activeTokenMarker = tokenMarkers[activeTokenIndex];
  const defaultLiquidityIndex = Math.max(
    0,
    liquidityCards.findIndex((card) => card.active)
  );
  const [selectedLiquidityIndex, setSelectedLiquidityIndex] = useState(
    defaultLiquidityIndex
  );
  const [roadmapEmblaRef, roadmapEmblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: false,
  });
  const [partnersEmblaRef] = useEmblaCarousel({
    dragFree: false,
    loop: false,
  });
  const [teamEmblaRef, teamEmblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: false,
    align: "start",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(roadmapEmblaApi);
  const teamScrollProgress = useScrollProgress(teamEmblaApi);

  const handleRoadmapCardClick = (index) => {
    if (roadmapEmblaApi) {
      roadmapEmblaApi.scrollTo(index);
    }
  };
  const handleMoveCap = () => {
    setActiveTokenIndex((prevIndex) => (prevIndex + 1) % tokenMarkers.length);
  };

  return (
    <div className="page">
      <div className="page__frame">
        <HeroSection
          heroTexture={heroTexture}
          heroTriangles={heroTriangles}
          videoMobileSrc={heroVideoMobile}
          videoDesktopSrc={heroVideoDesktop}
          nav={
            <nav className="hero__nav" aria-label="Primary">
              <img className="hero__logo" src={heroLogo} alt="coinporate" />
              <div className="hero__nav-center">
                <div className="hero__links">
                  {navLinks.map((link, index) => (
                    <Fragment key={link}>
                      <button className="hero__link">{link}</button>
                      {index < navLinks.length - 1 && (
                        <span className="hero__divider" aria-hidden="true" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="hero__cta-container">
                <PrimaryButton className="btn--nav hero__cta" type="button">
                  <img
                    src={iconWallet}
                    alt=""
                    className="btn__icon"
                    aria-hidden="true"
                  />
                  <span className="btn__label hero__cta-label">
                    Connect Wallet
                  </span>
                </PrimaryButton>
              </div>
              <button className="hero__menu-toggle" aria-label="Toggle menu">
                <span className="hero__menu-bar"></span>
                <span className="hero__menu-bar"></span>
              </button>
            </nav>
          }
          socialRow={
            <div className="hero__social">
              <span className="hero__social-label">FOLLOW</span>
              <img className="hero__social-icon" src={socialX} alt="X" />
              <img
                className="hero__social-icon"
                src={socialDiscord}
                alt="Discord"
              />
              <img
                className="hero__social-icon"
                src={socialLinkedIn}
                alt="LinkedIn"
              />
            </div>
          }
          scrollPrompt={
            <div className="hero__arch">
              <img className="hero__arch-icon" src={iconArch} alt="" />
              <div className="hero__arch-text-container">
                <span className="hero__arch-text">
                  <img
                    className="hero__arch-text-icon"
                    src={iconChevronDown}
                    alt=""
                  />
                  See How It Works &amp; Why Invest
                  <img
                    className="hero__arch-text-icon"
                    src={iconChevronDown}
                    alt=""
                  />
                </span>
              </div>
            </div>
          }
        >
          <div className="hero__layout">
            <div className="hero__content">
              <HeroHeadline />
              <p className="hero__copy">
                <span className="hero__copy-accent">
                  Coinporate Token (CORP)
                </span>{" "}
                empowers personal brands, startups, and companies to engage
                communities, raise capital, and reward supporters using
                decentralized tokens.
              </p>
              <PrimaryButton
                className="btn--cta hero__cta-button"
                type="button"
              >
                <span className="btn__icon" aria-hidden="true">
                  <img
                    src={require("./assets/coinporate/svgs/star.svg").default}
                    alt=""
                    className="btn__icon-img"
                  />
                </span>
                <span className="btn__label">
                  Join the Exclusive CORP Airdrop
                </span>
                <span className="btn__icon" aria-hidden="true">
                  <img src={ctaArrow} alt="" className="btn__icon-img" />
                </span>
              </PrimaryButton>
            </div>
            <CountdownTimer
              className="hero__countdown"
              durationDays={30}
              avatarOffsets={avatarOffsets}
              pillContent={
                <div className="countdown__pill-text">
                  <span className="countdown__pill-text-strong">NP.CPT</span>
                  <span className="countdown__pill-text-light"> AIRDROP</span>
                </div>
              }
            />
          </div>
        </HeroSection>

        <section className="token-intro">
          <div className="token-intro__visual">
            <video
              className="token-intro__video"
              src="/media/token-head.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster={headRight}
              aria-hidden="true"
            />

            <img
              className="token-intro__a"
              src={iconRing}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="token-intro__inner">
            <div className="token-intro__header">
              <span className="token-intro__pill">
                COIN THAT WILL BLOW YOUR MIND
              </span>
              <h2 className="token-intro__title">What is Coinporate Token</h2>
            </div>
            <div className="token-intro__grid">
              <div className="token-intro__text">
                <img
                  src={iconBrandASmall}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 18, height: 18 }}
                />
                <p className="token-intro__copy">
                  <strong>Coinporate</strong> is a protocol for meme-driven branding, narrative
                  design, and community-powered activation. We help teams, DAOs,
                  and creators:
                </p>
                <div className="token-intro__features">
                  {tokenFeatures.map((feature) => (
                    <div key={feature.label} className="token-intro__feature">
                      <img
                        className="token-intro__feature-icon"
                        src={feature.icon}
                        alt=""
                      />
                      <span className="token-intro__feature-label">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform">
          <div className="platform__inner">
            <div className="platform__split">
              <div className="platform__text">
                <h3 className="platform__title">
                  Coinporate is a Web3 platform
                </h3>
                <p className="platform__copy">
                  that lets creators and experts, as well as startups and
                  companies, transform their brands into digital assets.
                </p>
                <p className="platform__copy">
                  Supporters and investors can acquire unique CORP tokens and
                  gain real participation in project growth, innovation, and
                  rewards.
                </p>
                <PrimaryButton
                  className="btn--pill platform__cta"
                  type="button"
                >
                  <span className="btn__label">Read Whitepaper</span>
                  <span
                    className="btn__icon btn__icon--circle"
                    aria-hidden="true"
                  >
                    <img src={iconArrow} alt="" className="btn__icon-img--sm" />
                  </span>
                </PrimaryButton>
              </div>
              <PlatformShot
                image={platformDashboard}
                alt="Token platform dashboard"
                showWallet
              />
            </div>

            <div className="platform__split platform__split--reverse">
              <PlatformShot
                image={platformDashboard}
                alt="Token platform overview"
              />
              <div className="platform__text">
                <h3 className="platform__title">
                  Coinporate is a Web3 platform
                </h3>
                <p className="platform__copy">
                  that lets creators and experts, as well as startups and
                  companies, transform their brands into digital assets.
                </p>
                <p className="platform__copy">
                  Supporters and investors can acquire unique CORP tokens and
                  gain real participation in project growth, innovation, and
                  rewards.
                </p>
                <PrimaryButton
                  className="btn--pill platform__cta"
                  type="button"
                >
                  <span className="btn__label">Explore Platform</span>
                  <span
                    className="btn__icon btn__icon--circle"
                    aria-hidden="true"
                  >
                    <img src={iconArrow} alt="" className="btn__icon-img--sm" />
                  </span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="use-cases">
          <div className="use-cases__inner">
            <SectionHeader
              className="section-header--center section-header--compact"
              pill="How and by Whom Can CORP be Used"
              title="Use Cases"
              pillClassName="section-header__pill--md"
              titleClassName="section-header__title--md"
            />

            {useCases.map((block) => (
              <UseCaseBlock
                key={block.id}
                block={block}
                iconBullets={iconBullets}
                iconBolt={iconBolt}
              />
            ))}
          </div>
        </section>

        <section className="liquidity">
          <div className="liquidity__inner">
            <SectionHeader
              className="section-header--center"
              pill="How and by Whom Can CORP be Used"
              title="How Coinporate Drives Token Liquidity"
              pillClassName="section-header__pill--md"
              titleClassName="section-header__title--lg"
            />
            <div className="liquidity__grid">
              {liquidityCards.map((card, index) => (
                <LiquidityCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  active={index === selectedLiquidityIndex}
                  onSelect={() => setSelectedLiquidityIndex(index)}
                />
              ))}
            </div>
            <PrimaryButton className="btn--pill liquidity__cta" type="button">
              <span className="btn__label">
                Join the Exclusive CORP Airdrop
              </span>
              <span className="btn__icon btn__icon--circle" aria-hidden="true">
                <img src={iconArrow} alt="" className="btn__icon-img--sm" />
              </span>
            </PrimaryButton>
          </div>
        </section>

        <section className="distribution">
          <div className="distribution__inner">
            <SectionHeader
              className="section-header--center"
              pill="How and by Whom Can CORP be Used"
              title="Distribution"
              pillClassName="section-header__pill--md"
              titleClassName="section-header__title--md"
            />
            <div className="distribution__scale">
              {distributionItems.map((item, index) => (
                <DistributionItem
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  showDivider={index === 0}
                />
              ))}
            </div>
            <img
              className="distribution__art"
              src={liquidMetal}
              alt="Liquid metal sculpture"
            />
          </div>
        </section>

        <section className="invest">
          <div className="invest__inner">
            <SectionHeader
              className="section-header--center"
              pill="CORP"
              title="Why invest in Coinporate"
              pillClassName="section-header__pill--md"
              titleClassName="section-header__title--lg"
            />
            <div className="invest__grid">
              {investCards.map((card) => (
                <InvestCard
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  mediaType={card.mediaType}
                  image={card.image}
                  icon={card.icon}
                  imageClass={card.imageClass}
                  colspan={card.colspan}
                />
              ))}
            </div>
            <PrimaryButton
              className="btn--pill btn--pill-sm invest__cta"
              type="button"
            >
              <img src={iconWallet} alt="" className="btn__icon-img--sm" />
              <span className="btn__label">Connect Wallet</span>
            </PrimaryButton>
          </div>
        </section>

        <div className="ring-section">
          <div className="ring-section__bg" aria-hidden="true"></div>
          <section className="token-structure">
            <div className="token-structure__inner">
            <div className="token-structure__header">
              <SectionHeader
                className="section-header--center"
                pill="Transparency, deflationary value, long-term sustainability"
                title="Token Structure"
                pillClassName="section-header__pill--md"
                titleClassName="section-header__title--md"
              />
              <div className="token-structure__note">
                <div className="token-structure__note-content">
                  <span className="token-structure__note-text">
                    <span className="coinporate-accent">COINPORATE</span> is not
                    just a token.
                  </span>
                </div>
                <span className="token-structure__note-text">
                  It is a cultural symbol for onchain brands.
                </span>
              </div>
            </div>
            <div className="token-structure__track token-structure__track--desktop">
              <div className="token-structure__line" aria-hidden="true" />
              {tokenMarkers.map((marker) => (
                <TokenMarker
                  key={marker.label}
                  label={marker.label}
                  value={marker.value}
                  sub={marker.sub}
                  detail={marker.detail}
                  left={marker.left}
                />
              ))}
            </div>
            <div className="token-structure__track token-structure__track--mobile">
              <div className="token-structure__line" aria-hidden="true" />
              <TokenMarker
                key={activeTokenMarker.label}
                label={activeTokenMarker.label}
                value={activeTokenMarker.value}
                sub={activeTokenMarker.sub}
                detail={activeTokenMarker.detail}
                left={activeTokenMarker.left}
              />
              <PrimaryButton
                className="btn--pill token-structure__cta token-structure__cta--mobile"
                type="button"
                onClick={handleMoveCap}
              >
                <span className="btn__label">Move cap</span>
                <span
                  className="btn__icon btn__icon--circle"
                  aria-hidden="true"
                >
                  <img src={iconArrow} alt="" className="btn__icon-img--sm" />
                </span>
              </PrimaryButton>
            </div>
            <div className="token-structure__list">
              {tokenMarkers.map((marker) => (
                <div key={marker.label} className="token-structure__card">
                  <div className="token-structure__card-label">
                    {marker.label}
                  </div>
                  <div className="token-structure__card-value">
                    {marker.value}
                  </div>
                  {marker.sub && (
                    <div className="token-structure__card-sub">
                      {marker.sub}
                    </div>
                  )}
                  {marker.detail && (
                    <div className="token-structure__card-sub">
                      {marker.detail}
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </section>

          <section className="roadmap">
          <div className="roadmap__inner">
            <div className="roadmap__header">
              <SectionHeader
                className="section-header--center"
                pill="Where we at"
                title="Roadmap 2026"
                pillClassName="section-header__pill--md"
                titleClassName="section-header__title--md"
              />
            </div>
            <div className="roadmap__track">
              <div className="roadmap__track-line" aria-hidden="true" />
              {roadmapNodes.map((node) => (
                <div
                  key={node.id}
                  className={`roadmap__node${node.status ? ` roadmap__node--${node.status}` : ""
                    }`}
                  style={{ left: node.left }}
                >
                  <div className={roadmapNodeStyles[node.status]}>
                    {node.status === "done" ? (
                      <img
                        src={iconCheck}
                        alt=""
                        className="roadmap__node-icon"
                      />
                    ) : (
                      node.id
                    )}
                  </div>
                  {node.label && (
                    <div className="roadmap__node-status">{node.label}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="roadmap__cards embla" ref={roadmapEmblaRef}>
              <div className="roadmap__cards-track embla__container">
                {roadmapCards.map((card, index) => (
                  <div
                    key={card.number}
                    className="roadmap__cards-slide embla__slide"
                    onClick={() => handleRoadmapCardClick(index)}
                  >
                    <RoadmapCard
                      number={card.number}
                      title={card.title}
                      text={card.text}
                      status={card.status}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="roadmap__dots"
              role="tablist"
              aria-label="Roadmap pages"
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={`roadmap-dot-${index}`}
                  type="button"
                  className={`roadmap__dot${index === selectedIndex ? " roadmap__dot--active" : ""
                    }`}
                  onClick={() => onDotButtonClick(index)}
                  aria-label={`Roadmap page ${index + 1}`}
                  aria-selected={index === selectedIndex}
                  role="tab"
                />
              ))}
              </div>
            </div>
          </section>
        </div>

        <section className="team">
          <div className="team__inner">
            <SectionHeader
              className="section-header--center"
              pill="Meet the Team"
              pillClassName="section-header__pill--md"
            />
            <div className="team__carousel embla" ref={teamEmblaRef}>
              <div className="team__track embla__container">
                {teamMembers.map((member, index) => (
                  <div key={member.image} className="team__slide embla__slide">
                    <TeamCard
                      name={member.name}
                      image={member.image}
                      bio={teamBio}
                      socialIcons={[
                        { src: iconLinkedIn, alt: "LinkedIn" },
                        { src: iconDiscord, alt: "Discord" },
                        { src: iconX, alt: "X" },
                      ]}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="team__progress" aria-hidden="true">
              <div
                className="team__progress-bar"
                style={{
                  width: `${Math.round(teamScrollProgress * 100)}%`,
                }}
              />
            </div>
          </div>
        </section>

        <FaqBlock
          title="FAQ"
          pill="Frequently Asked Questions"
          items={faqItems}
        />

        <section className="partners">
          <div className="partners__row embla" ref={partnersEmblaRef}>
            <div className="partners__track embla__container">
              {partnerLogos.map((logo) => (
                <div key={logo.alt} className="partners__slide embla__slide">
                  <img
                    className="partners__logo"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__row">
            <img className="footer__logo" src={heroLogo} alt="coinporate" />
            <div className="footer__content">
              <nav className="footer__nav">
                <span>About</span>
                <span className="footer__separator">|</span>
                <span>How to earn</span>
                <span className="footer__separator">|</span>
                <span>Staking</span>
                <span className="footer__separator">|</span>
                <span>Whitepaper</span>
                <span className="footer__separator">|</span>
                <span>Airdrop</span>
              </nav>
              <div className="footer__social">
                <img className="footer__social-icon" src={socialX} alt="X" />
                <img
                  className="footer__social-icon"
                  src={socialDiscord}
                  alt="Discord"
                />
                <img
                  className="footer__social-icon"
                  src={socialLinkedIn}
                  alt="LinkedIn"
                />
              </div>
            </div>
            <PrimaryButton
              className="btn--pill btn--pill-sm footer__cta"
              type="button"
            >
              <span className="btn__label">CONNECT WALLET</span>
              <span className="btn__icon btn__icon--circle" aria-hidden="true">
                <img src={iconArrow} alt="" className="btn__icon-img--sm" />
              </span>
            </PrimaryButton>
          </div>
        </footer>
      </div>
    </div>
  );
}

function useDotButton(emblaApi) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

function useScrollProgress(emblaApi) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((api) => {
    const nextProgress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(nextProgress);
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
    return () => {
      emblaApi.off("reInit", onScroll);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi, onScroll]);

  return scrollProgress;
}

export default App;
