import React, { useEffect, useMemo, useRef, useState } from "react";
import CountdownPill from "./CountdownPill";

const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY;
const DEFAULT_SOLD_TOKENS = 5921321;
const DEFAULT_TOTAL_TOKENS = 10000000;
const PRESALE_DURATION_MS = 20 * HOURS_PER_DAY * SECONDS_PER_HOUR * MS_PER_SECOND;

const formatUnit = (value) => String(value).padStart(2, "0");

const getTimeParts = (remainingMs) => {
  const totalSeconds = Math.max(0, Math.floor(remainingMs / MS_PER_SECOND));
  const days = Math.floor(totalSeconds / SECONDS_PER_DAY);
  const hours = Math.floor((totalSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR);
  const minutes = Math.floor(
    (totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE
  );
  const seconds = totalSeconds % SECONDS_PER_MINUTE;

  return { days, hours, minutes, seconds };
};

function CountdownTimer({
  units,
  durationDays = null,
  targetDate = null,
  avatarOffsets,
  className = "",
  pillContent = "NP.CPT PRESALE",
  userActiveValue = null,
}) {
  const targetTimeRef = useRef(0);
  const presaleEndRef = useRef(null);
  const [now, setNow] = useState(Date.now());
  const [paymentMethod, setPaymentMethod] = useState("usdt");
  const soldTokens = DEFAULT_SOLD_TOKENS;
  const totalTokens = DEFAULT_TOTAL_TOKENS;
  const soldPercent = Math.min(
    100,
    Math.max(0, (soldTokens / totalTokens) * 100)
  );
  const soldPercentDisplay = Math.round(soldPercent);
  const formattedSold = new Intl.NumberFormat("en-US").format(soldTokens);
  const formattedTotal = new Intl.NumberFormat("en-US").format(totalTokens);

  useEffect(() => {
    if (targetDate instanceof Date) {
      targetTimeRef.current = targetDate.getTime();
    } else if (
      typeof targetDate === "string" ||
      typeof targetDate === "number"
    ) {
      targetTimeRef.current = new Date(targetDate).getTime();
    } else if (typeof durationDays === "number") {
      targetTimeRef.current =
        Date.now() +
        durationDays * HOURS_PER_DAY * SECONDS_PER_HOUR * MS_PER_SECOND;
    } else {
      targetTimeRef.current = 0;
    }
    setNow(Date.now());
  }, [durationDays, targetDate]);

  useEffect(() => {
    if (!targetTimeRef.current) {
      return undefined;
    }

    const timer = setInterval(() => {
      setNow(Date.now());
    }, MS_PER_SECOND);

    return () => clearInterval(timer);
  }, []);

  const liveUnits = useMemo(() => {
    if (!targetTimeRef.current) {
      return units || [];
    }

    const remaining = targetTimeRef.current - now;
    const { days, hours, minutes, seconds } = getTimeParts(remaining);

    return [
      {
        value: formatUnit(days),
        label: "days",
        numberColor: "countdown__value--accent",
      },
      {
        value: formatUnit(hours),
        label: "hours",
        numberColor: "countdown__value--light",
      },
      {
        value: formatUnit(minutes),
        label: "minutes",
        numberColor: "countdown__value--light",
      },
      {
        value: formatUnit(seconds),
        label: "seconds",
        numberColor: "countdown__value--light",
      },
    ];
  }, [now, units]);

  const remainingMs = targetTimeRef.current
    ? targetTimeRef.current - now
    : null;
  const isComplete = typeof remainingMs === "number" && remainingMs <= 0;

  useEffect(() => {
    if (isComplete && !presaleEndRef.current) {
      presaleEndRef.current = Date.now() + PRESALE_DURATION_MS;
    }
  }, [isComplete]);

  const presaleRemainingMs =
    presaleEndRef.current !== null ? presaleEndRef.current - now : null;
  const presaleUnits = useMemo(() => {
    if (typeof presaleRemainingMs !== "number") {
      return liveUnits;
    }
    const remaining = Math.max(0, presaleRemainingMs);
    const { days, hours, minutes, seconds } = getTimeParts(remaining);
    return [
      {
        value: formatUnit(days),
        label: "days",
        numberColor: "countdown__value--accent",
      },
      {
        value: formatUnit(hours),
        label: "hours",
        numberColor: "countdown__value--light",
      },
      {
        value: formatUnit(minutes),
        label: "minutes",
        numberColor: "countdown__value--light",
      },
      {
        value: formatUnit(seconds),
        label: "seconds",
        numberColor: "countdown__value--light",
      },
    ];
  }, [liveUnits, presaleRemainingMs]);

  const userActiveDisplay = useMemo(() => {
    if (typeof userActiveValue === "number") {
      return new Intl.NumberFormat("en-US").format(userActiveValue);
    }
    if (typeof userActiveValue === "string" && userActiveValue.trim()) {
      return userActiveValue;
    }
    return "0";
  }, [userActiveValue]);

  const avatarImages = useMemo(() => {
    if (!Array.isArray(avatarOffsets)) {
      return [];
    }
    return avatarOffsets.filter(Boolean).slice(0, 3);
  }, [avatarOffsets]);

  const avatarSlots = avatarImages.length ? avatarImages : [null, null, null];

  return (
    <div className={`countdown ${className}`}>
      <CountdownPill>{pillContent}</CountdownPill>
      <div
        className={`countdown__panel ${isComplete ? "countdown__panel--presale" : ""
          }`}
      >
        {isComplete ? (
          <div className="countdown__presale">
            <div className="countdown__grid countdown__grid--presale">
              {presaleUnits.map((unit, index) => (
                <div
                  key={unit.label}
                  className={`countdown__unit ${index > 0 ? "countdown__unit--divider" : ""
                    }`}
                >
                  <div className={`countdown__value ${unit.numberColor}`}>
                    {unit.value}
                  </div>
                  <div className="countdown__label">{unit.label}</div>
                </div>
              ))}
            </div>
            <div className="countdown__price">
              <span className="countdown__price-label">Presale price</span>
              <span className="countdown__price-value">$0.01</span>
            </div>
            <div className="countdown__progress">
              <div className="countdown__progress-row">
                <span className="countdown__progress-label">
                  NP.CPT raised - {soldPercentDisplay}%
                </span>
                <span className="countdown__progress-value">
                  {formattedSold} / {formattedTotal}
                </span>
              </div>
              <div className="countdown__progress-track" aria-hidden="true">
                <div
                  className="countdown__progress-fill"
                  style={{ width: `${soldPercent}%` }}
                />
              </div>
            </div>
            {/* <div className="countdown__presale-header">
              <div className="countdown__presale-title">Presale is live</div>
              <div className="countdown__presale-sub">
                Please choose one option
              </div>
            </div> */}
            <div className="countdown__presale-options">
              <button
                type="button"
                className={`countdown__option ${paymentMethod === "usdt" ? "countdown__option--active" : ""
                  }`}
                onClick={() => setPaymentMethod("usdt")}
                aria-pressed={paymentMethod === "usdt"}
              >
                PRUSDT (ERC20)
              </button>
              <span className="countdown__option-divider">or</span>
              <button
                type="button"
                className={`countdown__option ${paymentMethod === "card" ? "countdown__option--active" : ""
                  }`}
                onClick={() => setPaymentMethod("card")}
                aria-pressed={paymentMethod === "card"}
              >
                CARD
              </button>
            </div>
            {paymentMethod === "card" ? (
              <form
                className="countdown__card-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="countdown__field">
                  <span className="countdown__field-label">Name</span>
                  <input
                    className="countdown__input"
                    type="text"
                    name="cardName"
                    placeholder="John Snow"
                  />
                </label>
                <label className="countdown__field">
                  <span className="countdown__field-label">Card number</span>
                  <input
                    className="countdown__input"
                    type="text"
                    name="cardNumber"
                    inputMode="numeric"
                    placeholder="9999 0000 1111 4444"
                  />
                </label>
                <div className="countdown__card-grid">
                  <label className="countdown__field">
                      <span className="countdown__field-label">Expiry</span>
                      <input
                        className="countdown__input"
                        type="text"
                        name="cardExpiry"
                        inputMode="numeric"
                        placeholder="MM/YYYY"
                      />
                    </label>
                    <label className="countdown__field">
                      <span className="countdown__field-label">CVC</span>
                      <input
                        className="countdown__input"
                        type="password"
                        name="cardCvc"
                        inputMode="numeric"
                        placeholder="010"
                      />
                    </label>
                </div>
              </form>
            ) : (
              <div className="countdown__swap">
                <label className="countdown__field">
                  <span className="countdown__field-label">PRUSDT you pay</span>
                  <input
                    className="countdown__input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="0"
                  />
                </label>
                <label className="countdown__field">
                  <span className="countdown__field-label">
                    NP.CPT you receive
                  </span>
                  <input
                    className="countdown__input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="0"
                    readOnly
                  />
                </label>
              </div>
            )}
            <button className="countdown__action" type="button">
              Connect Wallet
            </button>
          </div>
        ) : (
          <>
            <div className="countdown__grid">
              {liveUnits.map((unit, index) => (
                <div
                  key={unit.label}
                  className={`countdown__unit ${index > 0 ? "countdown__unit--divider" : ""
                    }`}
                >
                  <div className={`countdown__value ${unit.numberColor}`}>
                    {unit.value}
                  </div>
                  <div className="countdown__label">{unit.label}</div>
                </div>
              ))}
            </div>
            <div className="countdown__meta">
              <div className="countdown__avatars" aria-hidden="true">
                {avatarSlots.map((avatar, index) => (
                  <span
                    key={avatar || index}
                    className="countdown__avatar"
                    style={
                      avatar ? { backgroundImage: `url(${avatar})` } : undefined
                    }
                  />
                ))}
              </div>
              <div className="countdown__meta-text">
                <div className="countdown__meta-value">{userActiveDisplay}</div>
                <div className="countdown__meta-label">Users Active</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;
