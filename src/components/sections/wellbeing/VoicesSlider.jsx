"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const VoicesSlider = () => {
    const voices = [
        {
            quote: "We've seen surprisingly low absenteeism since the retrofit. Employees often comment on the 'freshness' in the office.",
            role: "HR Lead",
            location: "Bangalore Office",
            image: "https://theskepper.com/000_Skepper_test/real/voicehr.png"
        },
        {
            quote: "The acoustic comfort has significantly improved our team's focus during critical meeting hours.",
            role: "Operations Manager",
            location: "Mumbai HQ",
            image: "https://theskepper.com/000_Skepper_test/real/voicehr.png"
        },
        {
            quote: "Energy efficiency and employee comfort finally coexist perfectly in our new workspace.",
            role: "Facility Head",
            location: "Delhi Branch",
            image: "https://theskepper.com/000_Skepper_test/real/voicehr.png"
        }
    ];

    return (
        <section className="voices-section bg-white">
            <div className="container">
                <h2 className="voices-title text-center font48">
                    Voices from <span className='green_text'>HR & Facilities</span>
                </h2>

                <div className="voices-slider-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        effect={'fade'}
                        fadeEffect={{ crossFade: true }}
                        navigation={{ nextEl: '.voice-next', prevEl: '.voice-prev' }}
                        pagination={{ clickable: true, el: '.voice-pagination' }}
                        loop={true}
                        speed={800}
                        className="voices-swiper"
                    >
                        {voices.map((voice, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="voice-card">
                                    <div className="voice-left-content">
                                        <p className="voice-quote">“{voice.quote}”</p>
                                        <div className="voice-separator"></div>
                                        <div className="voice-author-block">
                                            <span className="voice-role">{voice.role}, </span>
                                            <span className="voice-location">{voice.location}</span>
                                        </div>
                                    </div>
                                    <div className="voice-image-container">
                                        <img src={voice.image} alt={voice.role} className="voice-person-img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="voice-nav-btn voice-prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className="voice-nav-btn voice-next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="voice-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default VoicesSlider;
