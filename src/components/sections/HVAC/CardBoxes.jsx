"use client";
import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CardBoxes = () => {
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
        <article className="hs-leftCard" style={{ backgroundImage: `url(${leftBg})` }}>
          <div className="hs-leftOverlay" />
          <div className="hs-leftContent">
            <span className="hs-pill font12">Smart Systems. Real Comfort.</span>

            <h2 className="hs-title font48 text-white">
              The Human Side
              <br />
              of Engineering
            </h2>

            <p className="hs-desc font18">
              Comfort may be invisible, but its impact isn’t.
              <br />
              The right air makes people think clearer, rest
              <br />
              deeper, and feel better — and that’s what drives
              <br />
              us to perfect every system we build.
            </p>
          </div>
        </article>

        {/* RIGHT GRID */}
        <div className="hs-rightGrid">
          <article className="hs-card" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Think Clearer</h3>
          </article>

          <article className="hs-card" style={{ backgroundImage: `url(${img2})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Stay Balanced</h3>
          </article>

          <article className="hs-card hs-cardWide" style={{ backgroundImage: `url(${img3})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Feel Better</h3>
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

export default CardBoxes;
