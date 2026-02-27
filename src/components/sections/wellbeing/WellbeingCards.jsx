"use client";
import React from "react";

export default function WellbeingCards() {

    const leftBg =
        "https://theskepper.com/000_Skepper_test/real/architectural-details.jpg"; // vent/ceiling style
    const img1 =
        "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // think clearer
    const img2 =
        "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // stay balanced
    const img3 =
        "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // feel better


    const inclusions = [
        {
            img: "https://theskepper.com/000_Skepper_test/real/design1.jpg",
            text: "System selection (chillers, AHUs, ducts, controls)",
        },
        {
            img: "https://theskepper.com/000_Skepper_test/real/design2.jpg",
            text: "Load calculations & zoning strategy",
        },
        {
            img: "https://theskepper.com/000_Skepper_test/real/design1.jpg",
            text: "System selection (chillers, AHUs, ducts, controls)",
        },
        {
            img: "https://theskepper.com/000_Skepper_test/real/design4.jpg",
            text: "Energy simulation & predictive modeling",
        },
        {
            img: "https://theskepper.com/000_Skepper_test/real/design5.jpg",
            text: "IAQ (Indoor Air Quality) baseline strategies",
        },
        {
            img: "https://theskepper.com/000_Skepper_test/real/design5.jpg",
            text: "Maintenance-readiness built into the design",
        },
    ];

    return (
        <section className="phases-section  roi_sec wellbeing_card_sec">
                
            <div className="hs-roi section-space wellbeing_card about_card_wrap" >
                <div className="container">

                    <div className="hs-inner">
                        {/* LEFT BIG CARD */}
                        <article className="hs-leftCard" style={{ backgroundImage: `url(${leftBg})` }}>
                            <div className="hs-leftOverlay" />
                            <div className="hs-leftContent">
                                <span className="hs-pill font12">Comfort That Performs </span>

                                <h2 className="hs-title font48 text-white">
                                   Why It Matters
                                </h2>

                                <p className="hs-desc font18">
                                    Comfort and well‑being are not luxuries — they’re strategic assets.
When employees feel well, everything else flows better:
                                </p>
                            </div>
                        </article>

                        {/* RIGHT GRID */}
                        <div className="hs-rightGrid">
                            <article className="hs-card" style={{ backgroundImage: `url(${img1})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Focus & creative<br/> energy</h3>

                            </article>

                            <article className="hs-card" style={{ backgroundImage: `url(${img2})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Health & reduced<br/> sick leave</h3>
                            </article>

                            <article className="hs-card " style={{ backgroundImage: `url(${img3})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Retention and<br/> morale</h3>
                            </article>

                            <article className="hs-card" style={{ backgroundImage: `url(${img3})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Positive brand &<br/> client perception</h3>
                            </article>
                        </div>
                    </div>
                </div>



            </div>
           
        </section>
    );
}
