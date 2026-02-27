"use client";
import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const PHECardBox = () => {
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
        <section className="hs-wrap section-space bg-white smart_system_phe">
            <div className="container">
                <div className="hs-inner">
                    {/* LEFT BIG CARD */}
                    <article className="hs-leftCard" style={{ "--bg-img": `url(${leftBg})` }}>
                        <div className="hs-leftOverlay" />
                        <div className="hs-leftContent electircal_leftcard">
                            <span className="hs-pill font12">Smart Systems. Real Comfort.</span>

                            <h2 className="hs-title font48 text-white">
                                Wellness Begins
                                <br />
                                Wellness Begins
                            </h2>

                            <p className="hs-desc font18">
                               Healthy spaces start with healthy systems. When flow, pressure, and purity work in harmony, comfort becomes invisible, and wellbeing effortless.
                               </p>

                            <p className="hs-desc font18">We engineer that balance quietly, precisely, and responsibly — so people can live and work without ever thinking about the systems behind the walls.</p>
                         


                        </div>
                    </article>

                    {/* RIGHT GRID */}
                    <div className="hs-rightGrid">
                        <article className="hs-card" style={{ "--bg-img": `url(${img1})` }}>
                            <div className="hs-cardShade" />
                            <h3 className="hs-cardLabel font32">Flow Control</h3>
                        </article>

                        <article className="hs-card" style={{ "--bg-img": `url(${img2})` }}>
                            <div className="hs-cardShade" />
                            <h3 className="hs-cardLabel font32">Water Integrity</h3>
                        </article>

                        <article className="hs-card hs-cardWide" style={{ "--bg-img": `url(${img3})` }}>
                            <div className="hs-cardShade" />
                            <h3 className="hs-cardLabel font32">Pressure Stability</h3>
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

export default PHECardBox;
