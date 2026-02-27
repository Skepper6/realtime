"use client";
import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ElectricalCardBox = () => {
  // Replace these with your real images
  const leftBg =
    "https://theskepper.com/000_Skepper_test/real/architectural-details.jpg"; // vent/ceiling style
  const img1 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // think clearer
  const img2 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // stay balanced
  const img3 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // feel better

  return (
    <section className="hs-wrap section-space bg-white">
      <div className="container">
        <div className="hs-inner">
          {/* LEFT BIG CARD */}
          <article className="hs-leftCard" style={{ "--bg-img": `url(${leftBg})` }}>
            <div className="hs-leftOverlay" />
            <div className="hs-leftContent electircal_leftcard">
              <span className="hs-pill font12">Smart Power Design</span>

              <h2 className="hs-title font48 text-white">
               Powering Spaces. 
                <br />
               Enabling People.
              </h2>

              <p className="hs-desc font18">
                Behind every switch, sensor, and circuit is a larger purpose, ensuring safety, comfort, and uninterrupted performance. </p>
               
               <p className="hs-desc font18"> When power flows flawlessly, people can focus on what truly matters, productivity, care, creativity, and growth.  </p>
               <p className="hs-desc font18"> 
                We don’t just power buildings. We enable the people who rely on them every day. </p>
        
              
            </div>
          </article>

          {/* RIGHT GRID */}
          <div className="hs-rightGrid">
            <article className="hs-card" style={{ "--bg-img": `url(${img1})` }}>
              <div className="hs-cardShade" />
              <h3 className="hs-cardLabel font32">Productivity</h3>
            </article>

            <article className="hs-card" style={{ "--bg-img": `url(${img2})` }}>
              <div className="hs-cardShade" />
              <h3 className="hs-cardLabel font32">Creativity</h3>
            </article>

            <article className="hs-card hs-cardWide" style={{ "--bg-img": `url(${img3})` }}>
              <div className="hs-cardShade" />
              <h3 className="hs-cardLabel font32">Growth</h3>
            </article>
          </div>
        </div>

        <div
          className="service-btn-area text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <ButtonPrimary text={"Schedule a Consultation"} url={"/services"} />
        </div>
      </div>

    </section>
  );
};

export default ElectricalCardBox;
