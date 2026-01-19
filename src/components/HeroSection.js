import React from "react";

function HeroSection({
  heroBg,
  heroTexture,
  heroTriangles,
  videoSrc,
  nav,
  children,
  socialRow,
  scrollPrompt,
}) {
  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />
      <video
        className="hero__video"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__overlay" />
      <div
        className="hero__texture"
        style={{
          backgroundImage: `url(${heroTexture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
      <img
        className="hero__triangles"
        src={heroTriangles}
        alt=""
        aria-hidden="true"
      />
      {nav}
      {children}
      {socialRow}
      {scrollPrompt}
    </section>
  );
}

export default HeroSection;
