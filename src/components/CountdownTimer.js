import React, { useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useToast } from "./ToastProvider";
import CountdownPill from "./CountdownPill";
import { executeDeposit, executeWithdraw } from "../utils/solana";
import { usePresaleState } from "../hooks/usePresaleState";
import { useVestingState } from "../hooks/useVestingState";

const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY;
const EXCHANGE_RATE_DECIMALS = 1e6;

const formatUnit = (value) => String(value).padStart(2, "0");
const formatInputNumber = (value, decimals = 2) => {
  if (!Number.isFinite(value)) {
    return "";
  }
  const fixed = value.toFixed(decimals);
  return fixed.endsWith(".00") ? fixed.slice(0, -3) : fixed;
};

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
  pillContent = "CORP PRESALE",
  userActiveValue = null,
  onPresaleEnded,
}) {
  const { connected, connecting, wallet, connect, sendTransaction } =
    useWallet();
  const { setVisible } = useWalletModal();
  const { connection } = useConnection();
  const { showToast } = useToast();

  // Use dynamic presale state
  const {
    config,
    refetch,
    error,
    isBeforeStart,
    isActive,
    isEnded,
    timeUntilStart,
    timeUntilEnd,
  } = usePresaleState(wallet);
  const {
    withdrawableAmounts,
    refetch: refetchVesting,
    hasPurchased,
  } = useVestingState();

  const [paymentMethod, setPaymentMethod] = useState("usdc");
  const [usdcAmount, setUsdcAmount] = useState("");
  const [corpAmount, setCorpAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Use dynamic configuration or fallback to hardcoded values
  const exchangeRate = config?.exchangeRate || 0;
  const soldTokens = config?.publicSoldAmount || 0;
  const totalTokens = config?.initialRewardsAmount || 0;

  const soldPercent = Math.min(
    100,
    Math.max(0, (soldTokens / totalTokens) * 100)
  );
  const soldUsdc = new Intl.NumberFormat("en-US").format(
    (soldTokens * exchangeRate) / EXCHANGE_RATE_DECIMALS
  );
  const formattedSold = new Intl.NumberFormat("en-US").format(soldTokens);
  const formattedTotal = new Intl.NumberFormat("en-US").format(totalTokens);

  // Get time units for countdown
  const getTimeUnits = (remainingMs) => {
    const { days, hours, minutes, seconds } = getTimeParts(remainingMs);
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
  };

  const timeUnits = useMemo(() => {
    if (isBeforeStart) {
      return getTimeUnits(timeUntilStart);
    } else if (isActive) {
      return getTimeUnits(timeUntilEnd);
    } else {
      return getTimeUnits(0);
    }
  }, [isBeforeStart, isActive, timeUntilStart, timeUntilEnd]);

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

  const handleUsdcAmountChange = (e) => {
    const amount = e.target.value;
    setUsdcAmount(amount);

    if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
      const expectedTokens =
        (parseFloat(amount) / exchangeRate) * EXCHANGE_RATE_DECIMALS;
      setCorpAmount(formatInputNumber(expectedTokens, 2));
    } else {
      setCorpAmount("");
    }
  };

  const handleBuyCorp = async () => {
    if (!connected || !wallet) {
      if (!wallet) {
        setVisible(true);
      } else {
        try {
          await connect();
        } catch (error) {
          // Wallet adapter handles its own error reporting/logging.
        }
      }
      return;
    }

    if (paymentMethod === "card") {
      // Handle card payment
      alert("Card payment integration coming soon!");
      return;
    }

    if (!usdcAmount || isNaN(usdcAmount) || parseFloat(usdcAmount) <= 0) {
      showToast("Please enter a valid USDC amount", "warning");
      return;
    }

    setIsProcessing(true);

    try {
      const result = await executeDeposit(
        connection,
        wallet,
        sendTransaction,
        parseFloat(usdcAmount)
      );

      if (result.success) {
        showToast(
          `Transaction successful!\nYour CORP tokens will be available shortly.`,
          "success"
        );
        refetch();
        // Reset form
        setUsdcAmount("");
        setCorpAmount("");
      }
    } catch (error) {
      console.error("Buy CORP failed:", error);
      showToast("Transaction failed. Please try again.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClaimCorp = async () => {
    if (!connected || !wallet) {
      if (!wallet) {
        setVisible(true);
      } else {
        try {
          await connect();
        } catch (error) {
          // Wallet adapter handles its own error reporting/logging.
        }
      }
      return;
    }

    if (!hasPurchased) {
      showToast("You have not purchased any CORP tokens", "warning");
      return;
    }

    setIsProcessing(true);

    try {
      const result = await executeWithdraw(connection, wallet, sendTransaction);

      if (result.success) {
        showToast(
          `Transaction successful!\nYour CORP tokens have been withdrawn.`,
          "success"
        );
        refetchVesting();
      }
    } catch (error) {
      console.error("Withdraw CORP failed:", error);
      showToast("Transaction failed. Please try again.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const avatarSlots = avatarImages.length ? avatarImages : [null, null, null];

  // Enhanced claim UI for users who have purchased tokens
  const renderClaimUI = () => {
    if (!hasPurchased) {
      return (
        <div className="countdown__ended-no-purchase">
          <div className="countdown__ended-content">
            <div className="countdown__ended-stats">
              <div
                className="countdown__ended-stat"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span className="countdown__ended-stat-label">
                  Total Raised
                </span>
                <span className="countdown__ended-stat-value">${soldUsdc}</span>
              </div>
              <div
                className="countdown__ended-stat"
                style={{
                  display: "flex",
                  margin: "10px 0",
                  justifyContent: "space-between",
                }}
              >
                <span className="countdown__ended-stat-label">
                  Total Tokens Sold
                </span>
                <span className="countdown__ended-stat-value">
                  {formattedSold} CORP
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="countdown__ended-with-purchase">
        <div className="countdown__ended-header">
          <h3 className="countdown__ended-title">
            Thank you for participating!
          </h3>
        </div>
        <div className="countdown__ended-content">
          <div className="countdown__ended-stats">
            <div
              className="countdown__ended-stat"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span className="countdown__ended-stat-label">
                Total Vested Amount
              </span>
              <span className="countdown__ended-stat-value">
                {new Intl.NumberFormat("en-US").format(
                  withdrawableAmounts?.total || 0
                )}{" "}
                CORP
              </span>
            </div>
            <div
              className="countdown__ended-stat"
              style={{
                display: "flex",
                margin: "10px 0",
                justifyContent: "space-between",
              }}
            >
              <span className="countdown__ended-stat-label">
                Already Withdrawn
              </span>
              <span className="countdown__ended-stat-value">
                {new Intl.NumberFormat("en-US").format(
                  withdrawableAmounts?.withdrawn || 0
                )}{" "}
                CORP
              </span>
            </div>
            <div
              className="countdown__ended-stat"
              style={{
                display: "flex",
                margin: "10px 0",
                justifyContent: "space-between",
              }}
            >
              <span className="countdown__ended-stat-label">
                Available to Withdraw
              </span>
              <span className="countdown__ended-stat-value countdown__ended-stat-value--highlight">
                {new Intl.NumberFormat("en-US").format(
                  withdrawableAmounts?.withdrawable || 0
                )}{" "}
                CORP
              </span>
            </div>
          </div>
          <div className="countdown__ended-actions">
            <button
              className="countdown__action countdown__action--claim"
              type="button"
              disabled={isProcessing || !withdrawableAmounts?.withdrawable}
              onClick={handleClaimCorp}
            >
              Claim Vested Tokens
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Show error state
  if (error) {
    return (
      <div className={`countdown ${className}`}>
        <div className="countdown__panel">
          <div className="countdown__error">
            <div className="countdown__error-icon">⚠️</div>
            <div className="countdown__error-text">
              Failed to load presale data
            </div>
            <div className="countdown__error-subtext">{error}</div>
          </div>
        </div>
        <CountdownPill>{pillContent}</CountdownPill>
      </div>
    );
  }

  return (
    <div className={`countdown ${className}`}>
      <div className="countdown__panel">
        {isBeforeStart ? (
          // Before Presale Starts
          <div className="countdown__before-start">
            <div className="countdown__grid">
              {timeUnits.map((unit, index) => (
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
          </div>
        ) : isActive ? (
          // Presale Active
          <div className="countdown__presale">
            <div className="countdown__grid countdown__grid--presale">
              {timeUnits.map((unit, index) => (
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
              <span className="countdown__price-value">
                ${(exchangeRate / EXCHANGE_RATE_DECIMALS).toFixed(3)}
              </span>
            </div>
            <div className="countdown__progress">
              <div className="countdown__progress-row">
                <span className="countdown__progress-label">
                  <span>USDC raised</span>
                  <span>${soldUsdc} USDC</span>
                </span>
                <span className="countdown__progress-value">
                  <span>Corp Sold</span>
                  <span>
                    {formattedSold} / {formattedTotal} CORP
                  </span>
                </span>
                <span className="countdown__progress-value">
                  <span>Participants</span>
                  <span>
                    {config?.totalParticipants || 0}
                  </span>
                </span>
              </div>
              <div className="countdown__progress-track" aria-hidden="true">
                <div
                  className="countdown__progress-fill"
                  style={{ width: `${soldPercent}%` }}
                />
              </div>
            </div>
            <div className="countdown__presale-options">
              <button
                type="button"
                className={`countdown__option ${paymentMethod === "usdc" ? "countdown__option--active" : ""
                  }`}
                onClick={() => setPaymentMethod("usdc")}
                aria-pressed={paymentMethod === "usdc"}
              >
                USDC (SOLANA)
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
                  <span className="countdown__field-label">USDC you pay</span>
                  <input
                    className="countdown__input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="0"
                    value={usdcAmount}
                    onChange={handleUsdcAmountChange}
                    disabled={isProcessing}
                  />
                </label>
                <label className="countdown__field">
                  <span className="countdown__field-label">
                    CORP you receive
                  </span>
                  <input
                    className="countdown__input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="0"
                    value={corpAmount}
                    readOnly
                  />
                </label>
              </div>
            )}
            <button
              className="countdown__action"
              type="button"
              onClick={handleBuyCorp}
              disabled={isProcessing || connecting}
            >
              {isProcessing
                ? "Processing..."
                : connecting
                  ? "Connecting..."
                  : connected
                    ? "Buy CORP"
                    : "Connect Wallet"}
            </button>
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
          </div>
        ) : isEnded ? (
          // Presale Ended - Enhanced Claim UI
          <div className="countdown__ended">{renderClaimUI()}</div>
        ) : (
          // Fallback state
          <div className="countdown__grid">
            {timeUnits.map((unit, index) => (
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
        )}
      </div>
      <CountdownPill>{isEnded ? "CORP Vesting" : pillContent}</CountdownPill>
    </div>
  );
}

export default CountdownTimer;
