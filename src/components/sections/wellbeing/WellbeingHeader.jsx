"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useServiceOverlapHeader from "@/hooks/useServiceOverlapHeader";

export default function WellbeingHeader() {
    const [draw, setDraw] = useState(false);
    useServiceOverlapHeader();

    useEffect(() => {
        const raf = requestAnimationFrame(() => setDraw(true));

        return () => {
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <header className="rt-hero designup wellbeing">
            {/* Background image */}
            <img
                className="rt-hero__bg"
                src="https://skepper.in/000_Skepper_test/real/wellbeing/well_header.jpg"
                alt="wellbeing unit"
            />

            {/* Existing Gradient Shade */}
            <div className="rt-hero__shade" />

            {/* NEW: Dynamic Black Overlay for Fade Effect */}
            {/* <div
                className="rt-hero__fade-overlay"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#000000',
                    zIndex: 1, // Sits above background, below content
                    opacity: opacity,
                    pointerEvents: 'none',
                    transition: 'opacity 0.1s linear'
                }}
            /> */}

            <div className="container">
                <div className="top_bar">
                    <div className={`rt-hero__frame ${draw ? "is-draw" : ""}`} aria-hidden="true" style={{ zIndex: 2 }}>
                        <svg className="rt-hero__frameSvg" viewBox="0 0 1000 600" preserveAspectRatio="none">
                            <line className="rt-line rt-line--top" x1="120" y1="120" x2="880" y2="120" />
                            <line className="rt-line rt-line--rightTop" x1="880" y1="120" x2="880" y2="200" />
                            <line className="rt-line rt-line--bottom" x1="120" y1="540" x2="880" y2="540" />
                            <line className="rt-line rt-line--rightBottom" x1="880" y1="540" x2="880" y2="465" />
                        </svg>
                        <div className="sanim_img">
                            <img
                                className="rt-floatIcon rt-floatIcon--down"
                                src="https://skepper.in/000_Skepper_test/real/wellbeing/comfort.png"
                                alt=""
                            />
                            <img
                                className="rt-floatIcon rt-floatIcon--up"
                                src="https://skepper.in/000_Skepper_test/real/wellbeing/smarter_control.png"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
                    <div className="rt-hero__content" style={{ zIndex: 3, position: "relative" }}>
                        <span className="hvacHero__pill font12">Built With Purpose</span>

                        <h1 className="rt-hero__title font72 sec-title text-anim">
                            Engineering spaces
                            {/* <br /> */}
                            <span className="d-block">that uplift people</span>
                        </h1>

                        <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
                            At Realtime Infra, we believe buildings should care for their occupants as much as they serve their functionality. Our systems don’t just run — they enhance health, focus, and satisfaction for everyone inside.
                        </p>

                        <div className="wow fadeInUp  mt-4" data-wow-delay="0.4s">
                            <ButtonPrimary text={"Consult Now"} url={"/contact-us"} className={"hero-button"} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
