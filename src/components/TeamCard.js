import React from "react";

function TeamCard({ name, image, bio, socialIcons, index }) {
  return (
    <div className="team-card" style={index % 2 === 1 ? { marginTop: 48 } : {}}>
      <img className="team-card__photo" src={image} alt={name} />
      <div className="team-card__name">{name}</div>
      <div className="team-card__bio">{bio}</div>
      <div className="team-card__social">
        {socialIcons.map((icon) => (
          <img
            key={icon.alt}
            className="team-card__social-icon"
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
