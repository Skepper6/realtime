"use client";

import React, { useEffect, useState } from "react";
import Careers1 from "@/components/sections/careers/Careers1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import RoundShape from "../../sections/WhiteShape";
import WhiteShape from "../../sections/WhiteShape";


const TermsCondition = () => {

    

    return (
        < >
               <header className="rt-hero-career termcondition_sec">
      {/* Background image */}
      <img
        className="rt-hero__b"
        src="https://theskepper.com/000_Skepper_test/real/career_header.jpg"
        alt="Career image"
      />
      
      {/* Existing Gradient Shade */}
      <div className="rt-hero__shade" />


      <div className="container">
        <div className="top_bar">
          {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
          <div className="rt-hero__content">
            <span className="hvacHero__pill font12">Terms and Conditions</span>

            <h1 className="rt-hero__title font72 sec-title text-anim">
           Guidelines for
              <br />
              Using Our Services
            </h1>

            <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
              These terms outline the rules and <br/> guidelines for using our website and services.
            </p>

          </div>
        </div>
      </div>
    </header>

    <div className="privacy_desc">
        <div className="container">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
</div>
    </div>

            <WhiteShape/> 
        </>
    );
};

export default TermsCondition;
