import React from "react";

function HeroSection({
  heroTexture,
  heroTriangles,
  videoMobileSrc,
  videoDesktopSrc,
  nav,
  children,
  socialRow,
  scrollPrompt,
}) {
  return (
    <section className="hero">
      <video
        className="hero__video hero__video--mobile"
        src={videoMobileSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <video
        className="hero__video hero__video--desktop"
        src={videoDesktopSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="hero__overlay" />
      {heroTexture ? (
        <div
          className="hero__texture"
          style={{
            backgroundImage: `url(${heroTexture})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        />
      ) : null}
      {heroTriangles ? (
        <img
          className="hero__triangles"
          src={heroTriangles}
          alt=""
          aria-hidden="true"
        />
      ) : null}
      {nav}
      {children}
      {socialRow}
      {scrollPrompt}
    </section>
  );
}

export default HeroSection;
