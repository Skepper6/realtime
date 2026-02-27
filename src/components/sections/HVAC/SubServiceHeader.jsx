"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

export default function SubServiceHeader() {
  const [draw, setDraw] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDraw(true));
    
    // Fade out logic: increase darkness as we scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Fade to black over the first 80% of the screen height
      const newOpacity = Math.min(scrollY / (vh * 0.8), 0.9);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // REMOVED the extra div wrapper here
    <header className="rt-hero">
      {/* Background image */}
      <img
        className="rt-hero__bg"
        src="https://theskepper.com/000_Skepper_test/real/hvac_header_img.jpg"
        alt="HVAC unit"
      />
      <div className="rt-hero__shade" />

      {/* Dynamic Fade Overlay */}
      <div 
        className="rt-hero__fade-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000',
          zIndex: 1,
          opacity: opacity,
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div className="top_bar">
          <div className={`rt-hero__frame ${draw ? "is-draw" : ""}`} aria-hidden="true" style={{ zIndex: 2 }}>
            <svg className="rt-hero__frameSvg" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <line className="rt-line rt-line--top" x1="120" y1="120" x2="880" y2="120" />
              <line className="rt-line rt-line--rightTop" x1="880" y1="120" x2="880" y2="200" />
              <line className="rt-line rt-line--bottom" x1="120" y1="540" x2="880" y2="540" />
              <line className="rt-line rt-line--rightBottom" x1="880" y1="540" x2="880" y2="465" />
            </svg>
            <div className="sanim_img">
              <img className="rt-floatIcon rt-floatIcon--down" src="https://theskepper.com/000_Skepper_test/real/sicon1.png" alt="" />
              <img className="rt-floatIcon rt-floatIcon--up" src="https://theskepper.com/000_Skepper_test/real/sicon2.png" alt="" />
            </div>
          </div>

          <div className="rt-hero__content" style={{ zIndex: 3, position: 'relative' }}>
            <span className="hvacHero__pill font12">HVAC Solutions</span>
            <h1 className="rt-hero__title font72 sec-title text-anim">
              The Art of Air<br />in Motion
            </h1>
            <p className="rt-hero__desc font18 desc">
              Every great space begins with air — invisible, constant, and essential.
              At Realtime Infra, we don’t just move air; we shape experiences through
              it. Because comfort isn’t created by chance — it’s engineered.
            </p>
            <div className="mt-4">
              <ButtonPrimary text={"Consult Now"} url={"/contact"} className={"hero-button"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}