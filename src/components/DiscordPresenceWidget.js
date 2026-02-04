import { useMemo } from "react";
import socialDiscord from "../assets/social-discord.svg";

function DiscordPresenceWidget({
  presenceCount,
  avatarUrls = [],
  discordUrl,
  videoSrc,
  audioIconSrc,
  brandIconSrc,
}) {
  const onlineDisplay = useMemo(() => {
    if (typeof presenceCount === "number") {
      return new Intl.NumberFormat("en-US").format(presenceCount);
    }
    if (typeof presenceCount === "string" && presenceCount.trim()) {
      return presenceCount;
    }
    return "0";
  }, [presenceCount]);

  const visibleAvatars = useMemo(
    () => avatarUrls.filter(Boolean).slice(0, 2),
    [avatarUrls]
  );

  const avatarSlots = useMemo(() => {
    if (visibleAvatars.length === 2) {
      return visibleAvatars;
    }
    if (visibleAvatars.length === 1) {
      return [visibleAvatars[0], null];
    }
    return [null, null];
  }, [visibleAvatars]);

  const handleOpenDiscord = () => {
    if (!discordUrl) {
      return;
    }
    window.open(discordUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="discord-widget"
      type="button"
      aria-label={`Open Discord, ${onlineDisplay} users online`}
      onClick={handleOpenDiscord}
    >
      <div className="discord-widget__video-wrap">
        <video
          className="discord-widget__video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="discord-widget__panel">
        <div className="discord-widget__brand" aria-hidden="true">
          {brandIconSrc ? (
            <img className="discord-widget__brand-image" src={brandIconSrc} alt="" />
          ) : null}
          <span className="discord-widget__audio" aria-hidden="true">
            <img className="discord-widget__audio-icon" src={audioIconSrc} alt="" />
          </span>
        </div>
        <div className="discord-widget__status">
          <div className="discord-widget__avatars" aria-hidden="true">
            <span className="discord-widget__avatar discord-widget__avatar--discord">
              <img src={socialDiscord} alt="" />
            </span>
            {avatarSlots.map((avatar, index) => (
              <span
                key={avatar || `slot-${index}`}
                className={`discord-widget__avatar ${avatar ? "" : "discord-widget__avatar--placeholder"}`.trim()}
                style={avatar ? { backgroundImage: `url(${avatar})` } : undefined}
              />
            ))}
          </div>
          <span className="discord-widget__online">{onlineDisplay} online</span>
        </div>
      </div>
    </button>
  );
}

export default DiscordPresenceWidget;
