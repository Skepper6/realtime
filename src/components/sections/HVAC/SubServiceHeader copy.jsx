"use client";
import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

export default function SubServiceHeader() {
  return (
    <div className="service_sub_page">
    <header className="rt-hero">
      {/* Background image */}
      <img
        className="rt-hero__bg"
        src="https://theskepper.com/000_Skepper_test/real/hvac_header_img.jpg"
        alt="HVAC unit"
      />

  <div className="container">
      {/* Bottom→Top shadow overlay */}
      <div className="rt-hero__shade" />

      {/* Content */}
      <div className="rt-hero__content">
        <span className="hvacHero__pill font12">HVAC Solutions</span>

        <h1 className="rt-hero__title font72 sec-title text-anim">
          The Art of Air
          <br />
          in Motion
        </h1>

        <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
          Every great space begins with air — invisible, constant, and essential.
          At Realtime Infra, we don’t just move air; we shape experiences through
          it. Because comfort isn’t created by chance — it’s engineered.
        </p>

      <div className="wow fadeInUp " data-wow-delay="0.4s">
									<ButtonPrimary
										text={"Consult Now"}
										url={"/contact"}
										className={"hero-button"}
									/>
								</div>
      </div>
</div>
      
    </header>
    </div>
  );
}
