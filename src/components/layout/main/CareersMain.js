"use client";

import React, { useEffect, useState } from "react";
import Careers1 from "@/components/sections/careers/Careers1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import RoundShape from "../../sections/WhiteShape";


const CareersMain = () => {

	

	return (
		<main >
			   <header className="rt-hero-career">
      {/* Background image */}
      <img
        className="rt-hero__b"
        src="https://theskepper.com/000_Skepper_test/real/career_header.jpg"
        alt="Career image"
      />
      
      {/* Existing Gradient Shade */}
      <div className="rt-hero__shade" />

      {/* NEW: Dynamic Black Overlay for Fade Effect */}
      {/* <div 
        className="rt-hero__fade-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1, // Sits above background, below content
          pointerEvents: 'none',
          transition: 'opacity 0.1s linear'
        }}
     */}

      <div className="container">
        <div className="top_bar">
          {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
          <div className="rt-hero__content">
            <span className="hvacHero__pill font12">Careers</span>

            <h1 className="rt-hero__title font72 sec-title text-anim">
              Careers That Power
              <br />
              What Matters
            </h1>

            <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
              Join a team where skill, responsibility, <br/> and growth go hand in hand.
            </p>

            {/* <div className="wow fadeInUp " data-wow-delay="0.4s">
              <ButtonPrimary text={"Explore Our Work"} url={"/contact"} className={"hero-button"} />
            </div> */}
          </div>
        </div>
      </div>
    </header>
			{/* <HeroInner title={"Careers"} text={"Careers"} /> */}
			<Careers1 />
			<RoundShape/>
			{/* <Cta1 /> */}
		</main>
	);
};

export default CareersMain;
