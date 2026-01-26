import React, { useEffect, useMemo, useRef, useState } from "react";
import CountdownPill from "./CountdownPill";

const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY;

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
  pillContent = "NP.CPT AIRDROP",
  userActiveValue = null,
}) {
  const targetTimeRef = useRef(0);
  const [now, setNow] = useState(Date.now());

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
      <div className="countdown__panel">
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
      </div>
    </div>
  );
}

export default CountdownTimer;
