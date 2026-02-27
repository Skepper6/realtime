"use client";
import React from "react";

export default function DesingThinkPlan() {
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
        <section className="phases-section design_think">
            {/* 1. Top Hero Image */}
            <div className="phases-hero">
                <img
                    src="https://theskepper.com/000_Skepper_test/real/design_think.jpg"
                    alt="Designer sketching"
                    className="phases-hero-img"
                />
            </div>

            <div className="container">
                {/* 2. Overlapping Strategic Card */}
                <div className="strategic-card blue_bg">
                    <div className="strategic-card-content">
                        <div className="left-content">
                            <p className="subtitle text-white font32">
                                Here's how we make that happen in <br /> four strategic phases:
                            </p>
                            <div className="title-wrapper">
                                <div className="phase-number font32">1</div>
                                <h2 className=" text-white">
                                    <span className="green_text ">Design Thinking</span> <br /> & Planning
                                </h2>
                            </div>
                        </div>

                        <div className="right-content">
                            <p className="font18 text-white leading-relaxed">
                                We begin with deep understanding — of the client's needs, the site conditions, and the future use case.
                            </p>
                            <p className="font18 text-white leading-relaxed">
                                Our design teams work with architects, consultants, and facility planners to craft systems that are efficient, scalable, and comfort-centric.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Inclusions Grid */}
                <div className="inclusions-section section-space">
                    <h3 className="aleo_semibold font32">What this includes:</h3>
                    <div className="inclusions-grid">
                        {inclusions.map((item, index) => (
                            <div key={index} className="inclusion-item">
                                <div className="inclusion-img-wrap">
                                    <img src={item.img} alt="phase step" />
                                </div>
                                <p className="inclusion-text aleo_regular font32  ">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
