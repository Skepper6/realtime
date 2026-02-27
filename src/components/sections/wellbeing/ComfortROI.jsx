"use client";
import React from "react";

export default function ComfortROI() {

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
        <section className="phases-section  roi_sec">
            {/* 1. Top Hero Image */}
            <div className="phases-hero">
                <img
                    src="https://theskepper.com/000_Skepper_test/real/roi.jpg"
                    alt="Designer sketching"
                    className="phases-hero-img"
                />
            </div>

            <div className="container">
                {/* 2. Overlapping Strategic Card */}
                <div className="strategic-card blue_bg border-0">
                    <div className="strategic-card-content">
                        <div className="left-content">
                            <p className="subtitle text-white font32">
                                Here’s how we make that happen in <br />four strategic phases:
                            </p>
                            <div className="title-wrapper">
                                <div className="phase-number font32">4</div>
                                <h2 className=" text-white">
                                    Comfort & <span className="green_text "> ROI</span> <br /> <span className="green_text ">Optimization</span>
                                </h2>
                            </div>
                        </div>

                        <div className="right-content roi_leading">
                            <p className="font18 text-white leading-relaxed ">
                                Our ultimate goal is to ensure your<br /> systems run seamlessly — delivering comfort, indoor quality, and operational savings. Optimization is an ongoing effort, not a one-time handover.
                            </p>

                        </div>
                    </div>
                </div>


            </div>
            <section className="hs-roi section-space about_card_wrap" style={{ backgroundColor: "#F7F7F7" }}>
                <div className="container">

                    <div className="hs-inner">
                        {/* LEFT BIG CARD */}
                        <article className="hs-leftCard" style={{ backgroundImage: `url(${leftBg})` }}>
                            <div className="hs-leftOverlay" />
                            <div className="hs-leftContent">
                                {/* <span className="hs-pill font12">Smart Systems. Real Comfort.</span> */}

                                <h2 className="hs-title font48 text-white">
                                    Thermal comfort <br /> tuning
                                </h2>

                                <p className="hs-desc font18">
                                    (zonal adjustments, demand-<br />based control)
                                </p>
                            </div>
                        </article>

                        {/* RIGHT GRID */}
                        <div className="hs-rightGrid">
                            <article className="hs-card" style={{ backgroundImage: `url(${img1})` }}>
                                <div className="hs-cardShade" />
                                <div className="sub_text_desc">
                                    <h3 className="hs-cardLabel font32">IAQ optimization</h3>
                                    <p className="hs-cardLabel">(filtration upgrades, fresh<br />-air balancing)</p>
                                </div>
                            </article>

                            <article className="hs-card" style={{ backgroundImage: `url(${img2})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Noise & vibration<br /> fine-tuning</h3>
                            </article>

                            <article className="hs-card " style={{ backgroundImage: `url(${img3})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Lighting & controls harmonization</h3>
                            </article>

                            <article className="hs-card" style={{ backgroundImage: `url(${img3})` }}>
                                <div className="hs-cardShade" />
                                <h3 className="hs-cardLabel font32">Feedback loops - <br /> facility & occupants</h3>
                            </article>
                        </div>
                    </div>
                </div>



            </section>
            {/* 3. Static Images Section (No Text, No Overlays) */}
            <div className="full_img_sec">
                <div className="static-images-flex">

                    {/* Left Image: Wide (580px) */}
                    <div className="static-img-box wide-box">
                        <img
                            src="https://theskepper.com/000_Skepper_test/real/full1.jpg"
                            alt="Maintenance visual left"
                        />
                    </div>

                    {/* Right Image: Standard (380px) */}
                    <div className="static-img-box standard-box">
                        <img
                            src="https://theskepper.com/000_Skepper_test/real/full2.jpg"
                            alt="Maintenance visual right"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
