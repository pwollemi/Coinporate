import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
// import FaqBlock from "../components/FaqBlock";
// import { faqItems } from "../data/content";
import spiralArt from "../source/66577c52a096ad868c800581b396a8f0dc1bd26e.png";
import platformShot from "../source/staking/laptop.png";
import meshPattern from "../source/staking/image copy 6.png";
import lightTunnel from "../source/staking/image copy 5.png";
import starIcon from "../source/staking/star.svg";
import platformImageOne from "../source/staking/1.jpg";
import platformImageTwo from "../source/staking/2.jpg";
import platformImageThree from "../source/staking/3.jpg";
import platformImageFour from "../source/staking/4.jpg";
import notIcon from "../source/staking/not.svg";
import featureIconOne from "../source/staking/1.svg";
import featureIconTwo from "../source/staking/2.svg";
import featureIconThree from "../source/staking/3.svg";
import featureIconFour from "../source/staking/4.svg";
import ecosystemIconOne from "../source/staking/6.svg";
import ecosystemIconTwo from "../source/staking/7.svg";
import ecosystemIconThree from "../source/staking/8.svg";
import ecosystemIconFour from "../source/staking/9.svg";
import coinporateIcon from "../source/staking/coinporate.svg";
import questionIcon from "../source/staking/quetion.svg";
import heroTexture from "../assets/coinporate/hero-texture.png";
import heroTriangles from "../assets/hero-triangles.svg";
import heroVideoMobile from "../assets/coinporate/videos/coinporate-mobile-1080HD.mp4";
import heroVideoDesktop from "../assets/coinporate/videos/coinporate-desktop_1080HD.mp4";

function StakingPage() {
  const [stakingTab, setStakingTab] = useState("deposit");
  const [stakeAmount, setStakeAmount] = useState("");

  useEffect(() => {
    document.title = "Crypto Staking Explained | How Staking Works";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Understand how token staking works. Staking supports platform access, participation mechanisms, and on-chain ecosystem functionality."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Understand how token staking works. Staking supports platform access, participation mechanisms, and on-chain ecosystem functionality.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <>
      <main className="staking">
        <section className="staking-presale">
          <div className="staking-presale__inner">
            <video
              className="hero__video hero__video--mobile staking-presale__bg"
              src={heroVideoMobile}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <video
              className="hero__video hero__video--desktop staking-presale__bg"
              src={heroVideoDesktop}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className="hero__overlay staking-presale__bg" />
            <div
              className="hero__texture staking-presale__bg"
              style={{
                backgroundImage: `url(${heroTexture})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
            <img
              className="hero__triangles staking-presale__bg"
              src={heroTriangles}
              alt=""
              aria-hidden="true"
            />
            <div className="staking-presale__content">
              <div className="staking-presale__card">
                <div className="staking-presale__pill">
                  <img
                    className="staking-presale__pill-icon"
                    src={coinporateIcon}
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="staking-presale__pill-text">
                    <strong>Corp</strong> Strategy
                  </span>
                </div>
                <div className="staking-presale__meta-row">
                  <span className="staking-presale__meta">
                    Curated by <strong>Coinporate</strong>
                  </span>
                  <span className="staking-presale__meta">
                    Infra provider <strong>Coinporate</strong>
                  </span>
                </div>
                <div className="staking-presale__stats">
                  <div className="staking-presale__stat">
                    <span className="staking-presale__stat-label">TVL</span>
                    <strong className="staking-presale__stat-value">
                      $128.7M
                    </strong>
                  </div>
                  <div className="staking-presale__stat">
                    <span className="staking-presale__stat-label">APY</span>
                    <strong className="staking-presale__stat-value">
                      5.3%
                    </strong>
                  </div>
                </div>
                <p className="staking-presale__copy">
                  Coinporate strategy gives users exposure to a range of leading DeFi
                  protocols targeting increased rewards, plus additional{" "}
                  <span className="staking-presale__copy-highlight">CORP </span>
                  points
                </p>
                <div className="staking-presale__tabs">
                  <button
                    className={`staking-presale__tab ${stakingTab === "deposit"
                        ? "staking-presale__tab--active"
                        : ""
                      }`}
                    type="button"
                    onClick={() => setStakingTab("deposit")}
                  >
                    Deposit
                  </button>
                  <button
                    className={`staking-presale__tab ${stakingTab === "withdraw"
                        ? "staking-presale__tab--active"
                        : ""
                      }`}
                    type="button"
                    onClick={() => setStakingTab("withdraw")}
                  >
                    Withdraw
                  </button>
                </div>
                <div className="staking-presale__field">
                  <span className="staking-presale__field-label">
                    Available to deposit
                  </span>
                  <div className="staking-presale__input">
                    <div className="staking-presale__token">
                      <span className="staking-presale__token-icon">
                        <img src={coinporateIcon} alt="" aria-hidden="true" />
                      </span>
                      <span className="staking-presale__token-name">CORP</span>
                      <span
                        className="staking-presale__token-caret"
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </div>
                    <input
                      className="staking-presale__amount"
                      type="text"
                      inputMode="decimal"
                      placeholder="ETH AMOUNT"
                      value={stakeAmount}
                      onChange={(event) => setStakeAmount(event.target.value)}
                    />
                    <button
                      className="staking-presale__max"
                      type="button"
                      onClick={() => setStakeAmount("MAX")}
                    >
                      Max
                    </button>
                  </div>
                </div>
                <div className="staking-presale__summary">
                  <div className="staking-presale__summary-item">
                    <span className="staking-presale__summary-label">
                      You will receive
                      <span
                        className="staking-presale__info"
                        aria-hidden="true"
                      >
                        <img src={questionIcon} alt="" aria-hidden="true" />
                      </span>
                    </span>
                    <strong className="staking-presale__summary-value">
                      0,00
                      <img
                        className="staking-presale__summary-icon"
                        src={coinporateIcon}
                        alt=""
                        aria-hidden="true"
                      />
                    </strong>
                  </div>
                  <div className="staking-presale__summary-item">
                    <span className="staking-presale__summary-label">
                      Waiting time
                      <span
                        className="staking-presale__info"
                        aria-hidden="true"
                      >
                        <img src={questionIcon} alt="" aria-hidden="true" />
                      </span>
                    </span>
                    <strong className="staking-presale__summary-value">
                      24 hours
                    </strong>
                  </div>
                </div>
                <p className="staking-presale__note">
                  <span
                    className="staking-presale__note-icon"
                    aria-hidden="true"
                  >
                    <img src={coinporateIcon} alt="" />
                  </span>
                  Withdrawals are only in WTH, regardless to deposit asset(s).
                </p>
                <button className="staking-presale__cta" type="button">
                  <span
                    className="staking-presale__cta-icon"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path
                        d="M6 7.5C6 6.12 7.12 5 8.5 5h7c1.38 0 2.5 1.12 2.5 2.5v1H6v-1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <rect
                        x="4"
                        y="8.5"
                        width="16"
                        height="10.5"
                        rx="2.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="16.5" cy="13.8" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="staking-presale__cta-text">
                    Connect wallet
                  </span>
                </button>
                <p className="staking-presale__legal">
                  Corp service relies on third-party infrastructure provided by
                  Mellow. <br />
                  By processing, you are subject to Mellow's terms of service
                  and privacy notice.
                </p>
                <p className="staking-presale__legal">
                  Note, that the vault involves protocol, slashing and others
                  risks. You can find more details in the FAQ.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="staking-hero">
          <div className="staking-hero__inner">
            <h1 className="staking-hero__title">How staking works</h1>
          </div>
        </section>

        <section className="staking-overview">
          <div className="staking-overview__inner">
            <div className="staking-overview__card">
              <img
                className="staking-overview__pattern"
                src={meshPattern}
                alt="Pattern"
              />
              <div className="staking-overview__panel">
                <div className="staking-overview__panel-row">
                  <img src={starIcon} alt="" />
                  <span>Staking on Coinporate</span>
                </div>
                <h2>
                  a Mechanism for Network Participation and Platform Access
                </h2>
              </div>
            </div>
            <div className="staking-overview__content">
              <p className="staking-overview__copy">
                Staking on Coinporate is designed as a platform participation
                mechanism, not as a <em>financial product</em>. It allows users
                to lock supported tokens, within defined system rules in order
                to access features, support network operations, and take part in
                platform-level processes.
              </p>
              <p className="staking-overview__note">
                Staking is used to align participants with the long-term
                operation and integrity of the ecosystem.
              </p>
              <PrimaryButton
                className="btn--pill staking-overview__cta"
                type="button"
              >
                <img
                  src={starIcon}
                  alt=""
                  className="staking-overview__cta-icon"
                />
                Read Whitepaper <span aria-hidden="true">→</span>
              </PrimaryButton>
            </div>
          </div>
        </section>

        <section className="staking-flow">
          <div className="staking-flow__inner">
            <div className="staking-flow__media">
              <img src={spiralArt} alt="Staking path" />
            </div>
            <div className="staking-flow__content">
              <h3>What is staking?</h3>
              <p className="staking-flow__copy">
                Staking is a process where tokens are temporarily locked within
                the platform or connected blockchain infrastructure to support
                specific system functions.
              </p>
              <p className="staking-flow__copy">
                Rather than being used for trading or transfers, staked tokens
                are assigned to defined roles within the platform, such as:
              </p>
              <div className="staking-flow__badges">
                <span>
                  enabling access
                  <br />
                  to certain features
                </span>
                <span>
                  supporting network
                  <br />
                  operations
                </span>
                <span>
                  participating
                  <br />
                  in platform processes
                </span>
                <span>
                  helping maintain
                  <br />
                  system integrity
                </span>
              </div>
              <p className="staking-flow__note">
                Staking is a technical and operational mechanism that connects
                token usage to platform activity.
              </p>
            </div>
          </div>
        </section>

        <section className="staking-steps">
          <div className="staking-steps__inner">
            <h3 className="staking-steps__title">How staking works</h3>
            <div className="staking-steps__grid">
              <div className="staking-step">
                <span className="staking-step__number">01</span>
                <h4>Select supported token</h4>
                <p>
                  Users choose a supported token that is enabled for staking
                  within the Coinporate ecosystem
                </p>
              </div>
              <div className="staking-step">
                <span className="staking-step__number">02</span>
                <h4>Lock tokens for a defined period</h4>
                <p>
                  Tokens are locked according to platform rules. During this
                  time, they are allocated to specific platform or network
                  functions.
                </p>
              </div>
              <div className="staking-step">
                <span className="staking-step__number">03</span>
                <h4>Participate in platform processes</h4>
                <p>
                  While staked, tokens may be used to support system operations,
                  access features, or take part in defined participation flows.
                </p>
              </div>
              <div className="staking-step">
                <span className="staking-step__number">04</span>
                <h4>Unstake according to platform rules</h4>
                <p>
                  After the applicable conditions or time period, users can
                  unlock their tokens based on platform-defined processes.
                </p>
              </div>
            </div>
            <PrimaryButton
              className="btn--pill staking-steps__cta"
              type="button"
            >
              <img src={starIcon} alt="" className="staking-steps__cta-icon" />
              Join Coinporate <span aria-hidden="true">→</span>
            </PrimaryButton>
            <div className="staking-steps__media">
              <img src={platformShot} alt="Coinporate platform" />
            </div>
          </div>
        </section>

        <section className="staking-platform">
          <div className="staking-platform__inner">
            <div className="staking-platform__header">
              <h3>What staking is used for on Coinporate</h3>
              <p>
                Staking on Coinporate is designed to support functional
                participation, including:
              </p>
            </div>
            <div className="staking-platform__cards">
              <div className="staking-platform__media">
                <img src={platformImageOne} alt="Platform access" />
                <div className="staking-platform__card">
                  <h4>Platform access</h4>
                  <p>
                    Staking can be used to unlock or maintain access to certain
                    platform features, tools, or environments.
                  </p>
                </div>
              </div>
              <div className="staking-platform__media">
                <img src={platformImageTwo} alt="Network support" />
                <div className="staking-platform__card">
                  <h4>Network support</h4>
                  <p>
                    Staked tokens may be allocated to processes that help
                    support network stability, verification flows, or
                    platform-level coordination.
                  </p>
                </div>
              </div>
              <div className="staking-platform__media">
                <img src={platformImageThree} alt="Participation alignment" />
                <div className="staking-platform__card">
                  <h4>Participation alignment</h4>
                  <p>
                    Staking helps align users with longer-term platform activity
                    by connecting token usage to defined system roles.
                  </p>
                </div>
              </div>
              <div className="staking-platform__media">
                <img src={platformImageFour} alt="Ecosystem integrity" />
                <div className="staking-platform__card">
                  <h4>Ecosystem integrity</h4>
                  <p>
                    By requiring tokens to be locked for certain actions,
                    staking helps reduce short-term or automated misuse and
                    supports consistent participation.
                  </p>
                </div>
              </div>
            </div>
            <PrimaryButton
              className="btn--pill staking-platform__cta"
              type="button"
            >
              <img
                src={starIcon}
                alt=""
                className="staking-platform__cta-icon"
              />
              Join Coinporate <span aria-hidden="true">→</span>
            </PrimaryButton>
          </div>
        </section>

        <section className="staking-rewards">
          <div className="staking-rewards__inner">
            <div className="staking-rewards__media">
              <img src={lightTunnel} alt="Important characteristics" />
            </div>
            <div className="staking-rewards__content">
              <h3>Important characteristics</h3>
              <ul>
                <li>
                  <img src={ecosystemIconOne} alt="" />
                  Staking is optional and feature-specific
                </li>
                <li>
                  <img src={ecosystemIconTwo} alt="" />
                  Staking is governed by platform rules and smart contract logic
                </li>
                <li>
                  <img src={ecosystemIconThree} alt="" />
                  Tokens used for staking remain on-chain and subject to defined
                  technical conditions
                </li>
                <li>
                  <img src={ecosystemIconFour} alt="" />
                  Staking is intended for platform utility and participation,
                  not as a financial product
                </li>
              </ul>
              <PrimaryButton
                className="btn--pill staking-rewards__cta"
                type="button"
              >
                <img
                  src={starIcon}
                  alt=""
                  className="staking-rewards__cta-icon"
                />
                Read Whitepaper <span aria-hidden="true">→</span>
              </PrimaryButton>
            </div>
          </div>
        </section>

        <section className="staking-not">
          <div className="staking-not__inner">
            <div className="staking-not__title-card">
              <h2>
                What staking
                <br />
                is NOT
              </h2>
            </div>
            <div className="staking-not__list">
              <p className="staking-not__lead">
                To avoid confusion, staking on Coinporate:
              </p>
              <ul>
                <li>
                  <img src={notIcon} alt="" /> does not represent ownership in
                  Coinporate
                </li>
                <li>
                  <img src={notIcon} alt="" /> does not grant equity or profit
                  rights
                </li>
                <li>
                  <img src={notIcon} alt="" /> is not a financial product
                </li>
                <li>
                  <img src={notIcon} alt="" /> is not intended as an investment
                  activity
                </li>
                <li>
                  <img src={notIcon} alt="" /> does not guarantee outcomes or
                  results
                </li>
              </ul>
              <p className="staking-not__note">
                This approach ensures that token usage is connected to real
                platform functions rather than speculative activity.
              </p>
            </div>
          </div>
        </section>

        <section className="staking-ecosystem">
          <div className="staking-ecosystem__inner">
            <h3>Designed for utility-first ecosystems</h3>
            <p>
              Coinporate uses staking as part of a broader system design focused
              on:
            </p>
            <div className="staking-ecosystem__grid">
              <div className="staking-ecosystem__card">
                <img src={featureIconOne} alt="" />
                <h4>Access control</h4>
              </div>
              <div className="staking-ecosystem__card">
                <img src={featureIconTwo} alt="" />
                <h4>Participation structure</h4>
              </div>
              <div className="staking-ecosystem__card">
                <img src={featureIconThree} alt="" />
                <h4>Platform integrity</h4>
              </div>
              <div className="staking-ecosystem__card">
                <img src={featureIconFour} alt="" />
                <h4>Ecosystem coordination</h4>
              </div>
            </div>
            <p className="staking-ecosystem__note">
              This approach ensures that token usage is connected to real
              platform functions rather than speculative activity.
            </p>
            <PrimaryButton
              className="btn--pill staking-ecosystem__cta"
              type="button"
            >
              <img
                src={starIcon}
                alt=""
                className="staking-ecosystem__cta-icon"
              />
              Join Coinporate <span aria-hidden="true">→</span>
            </PrimaryButton>
          </div>
        </section>

        {/* <FaqBlock
        title="FAQ"
        pill="Frequently Asked Questions"
        items={faqItems}
      /> */}
      </main>
    </>
  );
}

export default StakingPage;
