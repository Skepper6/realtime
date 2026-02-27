"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

export default function AboutHeader() {
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    // let the first paint happen so CSS transitions fire reliably
    const raf = requestAnimationFrame(() => setDraw(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="about_page">
      <header className="rt-hero">
        {/* Background image */}
        <img
          className="rt-hero__bg"
          src="https://theskepper.com/000_Skepper_test/real/hvac_header_img.jpg"
          alt="HVAC unit"
        />
          {/* Bottom→Top shadow overlay */}
          <div className="rt-hero__shade" />

        <div className="container">
          <div className="top_bar">
         
          {/* Content */}
          <div className="rt-hero__content">
            <span className="hvacHero__pill font12">About Us</span>

            <h1 className="rt-hero__title font72 sec-title text-anim">
              The Story of 
              <br />
              Spaces That Breathe 
            </h1>

            <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
             Every building tells a story. Some speak of structure, steel, and glass.
Ours whisper of people, the ones who breathe, move, and create within those walls.
            </p>

            <div className="wow fadeInUp " data-wow-delay="0.4s">
              <ButtonPrimary text={"Explore Our Work"} url={"/contact"} className={"hero-button"} />
            </div>
          </div>
          </div>
          {/* </div> */}
        </div>
      </header>
    </div>
  );
}
