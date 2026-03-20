"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MaintenanceMonitoring() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const contentContainerRef = useRef(null);

    useEffect(() => {
        const calculateOffset = () => {
            const container = contentContainerRef.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                const styles = window.getComputedStyle(container);
                const paddingLeft = parseFloat(styles.paddingLeft || "0");
                setOffsetLeft(rect.left + paddingLeft);
            }
            setViewportWidth(window.innerWidth);
        };
        calculateOffset();
        window.addEventListener("resize", calculateOffset);
        return () => window.removeEventListener("resize", calculateOffset);
    }, []);

    const getDesktopSlideMetrics = isWide => {
        const desktopGap = 22;
        const wideRatio = 1.62;
        const availableTrackWidth = Math.max(viewportWidth - offsetLeft, 0);
        const partialThirdCard = Math.max(88, Math.min(132, availableTrackWidth * 0.12));
        const standardWidth = Math.max(
            250,
            Math.round(
                (availableTrackWidth - partialThirdCard - desktopGap * 2) / (1 + wideRatio)
            )
        );
        const wideWidth = Math.max(
            390,
            availableTrackWidth - partialThirdCard - desktopGap * 2 - standardWidth
        );

        return {
            width: isWide ? wideWidth : standardWidth,
            spaceBetween: desktopGap,
        };
    };

    const getSlideMetrics = isWide => {
        if (viewportWidth <= 575) {
            return {
                width: "85vw",
                spaceBetween: 18,
            };
        }

        if (viewportWidth <= 991) {
            return {
                width: isWide ? 450 : 300,
                spaceBetween: 18,
            };
        }

        return getDesktopSlideMetrics(isWide);
    };

    const isMobileViewport = viewportWidth <= 575;
    const sliderStartOffset = isMobileViewport ? 0 : offsetLeft;
    const sliderEndOffset = isMobileViewport
        ? 0
        : viewportWidth > 991
        ? 0
        : offsetLeft;
    const sliderSpaceBetween = getSlideMetrics(false).spaceBetween;

    const sliderItems = [
        {
            title: "Indoor Air Quality (IAQ)",
            desc: "High-efficiency filters, UVGI, and smart\nfresh air exchange.",
            img: "https://skepper.in/000_Skepper_test/real/wellbeing/slider1.jpg",
            isWide: false,
        },
        {
            title: "Noise control",
            desc: "Duct and fan noise suppression, vibration\nisolation.",
            img: "https://skepper.in/000_Skepper_test/real/wellbeing/slider2.jpg",
            isWide: true,
        },
        {
            title: "Lighting integration",
            desc: "Integrated with HVAC control for\nVisual and Circadian health.",
            img: "https://skepper.in/000_Skepper_test/real/wellbeing/slider3.jpg",
            isWide: false,
        },
    ];

    return (
        <section className="phases-section maitenance_sec maintenance-section process-maintenance-section">
            {/* Background Image with Gradient Fade to Bottom */}
            <div className="maintenance-bg-wrapper">
                <img
                    src="https://skepper.in/000_Skepper_test/real/wellbeing/space_overlap.jpg"
                    alt="Background"
                    className="maintenance-bg-img"
                />
                {/* Gradient Overlay: Transparent at top, solid section color at bottom */}
                <div className="maintenance-bg-overlay"></div>
            </div>

            <div className="container" ref={contentContainerRef}></div>

            <div className="apple-slider-outer maintenance-slider-outer process-maintenance-slider-outer">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={sliderSpaceBetween}
                    slidesPerView={"auto"}
                    loop={false}
                    navigation={{ nextEl: ".slide-next", prevEl: ".slide-prev" }}
                    slidesOffsetBefore={sliderStartOffset}
                    slidesOffsetAfter={sliderEndOffset}
                    className="apple-swiper process-maintenance-swiper"
                >
                    {sliderItems.map((item, idx) => {
                        const metrics = getSlideMetrics(item.isWide);

                        return (
                        <SwiperSlide
                            key={idx}
                            style={{
                                width:
                                    typeof metrics.width === "number"
                                        ? `${metrics.width}px`
                                        : metrics.width,
                            }}
                            className={`apple-slide-item process-maintenance-slide ${
                                item.isWide
                                    ? "process-maintenance-wide"
                                    : "process-maintenance-standard"
                            }`}
                        >
                            <div className="apple-card">
                                <img src={item.img} alt={item.title} />
                                <div className="apple-card-overlay">
                                    <div className="sub_title">
                                        <h4 className="text-white font32 maintenance-card-title-white">{item.title}</h4>
                                        {/* Added description below title as per new content requirment, but keeping structure same */}
                                        <p className="text-white font18 maintenance-card-desc-white">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )})}
                </Swiper>

                <div className="container fullpagination d-flex justify-content-end gap-2">
                    <button className="slide-prev custom-nav-btn"><i className="tji-arrow-left"></i></button>
                    <button className="slide-next custom-nav-btn"><i className="tji-arrow-right"></i></button>
                </div>
            </div>

            {/* Bottom Text from XD */}
            <div className="container maintenance-bottom-text-container">
                <p className="font32 maintenance-bottom-text" >
                    One of our projects recorded a <span className="green_text">60% drop in fine<br /> particles (PM2.5)</span> post-installation, leading to fewer<br /> respiratory discomfort complaints.
                </p>
            </div>

        </section>
    );
}
