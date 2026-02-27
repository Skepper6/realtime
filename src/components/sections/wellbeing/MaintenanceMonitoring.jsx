"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

export default function MaintenanceMonitoring() {
    const [offsetLeft, setOffsetLeft] = useState(0);

    useEffect(() => {
        const calculateOffset = () => {
            const container = document.querySelector(".container");
            if (container) {
                const rect = container.getBoundingClientRect();
                setOffsetLeft(rect.left + 15);
            }
        };
        calculateOffset();
        window.addEventListener("resize", calculateOffset);
        return () => window.removeEventListener("resize", calculateOffset);
    }, []);

    const sliderItems = [
        {
            title: "Indoor Air Quality (IAQ)",
            desc: "High-efficiency filters, UVGI, and smart\nfresh air exchange.",
            img: "https://theskepper.com/000_Skepper_test/real/rec1.jpg",
            isWide: false,
        },
        {
            title: "Noise control",
            desc: "Duct and fan noise suppression, vibration\nisolation.",
            img: "https://theskepper.com/000_Skepper_test/real/rec2.jpg",
            isWide: true,
        },
        {
            title: "Lighting integration",
            desc: "Integrated with HVAC control for\nVisual and Circadian health.",
            img: "https://theskepper.com/000_Skepper_test/real/card1.jpg",
            isWide: false,
        },
    ];

    return (
        <section className="phases-section maitenance_sec maintenance-section">
            {/* Background Image with Gradient Fade to Bottom */}
            <div className="maintenance-bg-wrapper">
                <img
                    src="https://theskepper.com/000_Skepper_test/real/philosophy_life.jpg"
                    alt="Background"
                    className="maintenance-bg-img"
                />
                {/* Gradient Overlay: Transparent at top, solid section color at bottom */}
                <div className="maintenance-bg-overlay"></div>
            </div>

            <div className="apple-slider-outer maintenance-slider-outer">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={32}
                    slidesPerView={"auto"}
                    loop={false}
                    navigation={{ nextEl: ".slide-next", prevEl: ".slide-prev" }}
                    slidesOffsetBefore={offsetLeft}
                    slidesOffsetAfter={offsetLeft}
                    className="apple-swiper"
                >
                    {sliderItems.map((item, idx) => (
                        <SwiperSlide
                            key={idx}
                            className={`apple-slide-item ${item.isWide ? 'wide-card' : 'standard-card'}`}
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
                    ))}
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
