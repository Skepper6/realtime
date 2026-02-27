"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

export default function WellbeingHeader() {
    const [opacity, setOpacity] = useState(0);

    // Handle scroll to calculate opacity for the fade effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate opacity: starts at 0, goes up to 0.9 as you scroll down
            // Divided by windowHeight * 0.8 ensures it gets dark before the next section fully covers it
            const newOpacity = Math.min(scrollPosition / (windowHeight * 0.8), 0.9);

            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="rt-hero designup wellbeing">
            {/* Background image */}
            <img
                className="rt-hero__bg"
                src="https://theskepper.com/000_Skepper_test/real/hvac_header_img.jpg"
                alt="HVAC unit"
            />

            {/* Existing Gradient Shade */}
            <div className="rt-hero__shade" />

            {/* NEW: Dynamic Black Overlay for Fade Effect */}
            <div
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
            />

            <div className="container">
                <div className="top_bar">
                    {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
                    <div className="rt-hero__content">
                        <span className="hvacHero__pill font12">Built With Purpose</span>

                        <h1 className="rt-hero__title font72 sec-title text-anim">
                            Engineering spaces
                            {/* <br /> */}
                            <span className="d-block">that uplift people</span>
                        </h1>

                        <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
                            At Realtime Infra, we believe buildings should care for their occupants as much as they serve their functionality. Our systems don’t just run — they enhance health, focus, and satisfaction for everyone inside.
                        </p>

                        <div className="wow fadeInUp " data-wow-delay="0.4s">
                            <ButtonPrimary text={"Consult Now"} url={"/contact"} className={"hero-button"} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
