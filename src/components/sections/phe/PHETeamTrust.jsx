"use client";
import ButtonPrimary from "../../../components/shared/buttons/ButtonPrimary";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PHETeamTrust = () => {
    const slides = [
        "https://theskepper.com/000_Skepper_test/real/drainage.jpg",
    ];

    return (
        <section className="tj-about-info section-space built_sec">
            <div className="container-fluid">
                <div className="row rg-30 justify-content-between">

                    <div className="col-lg-6 col-md-12">
                        <div>
                            <Swiper
                                modules={[Autoplay]}
                                loop
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed={900}
                                slidesPerView={1}
                                spaceBetween={0}
                            >
                                {slides.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="swiper_img_container">
                                            <img
                                                src={src}
                                                alt={`slide-${i + 1}`}
                                                className="swiper_img"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 electrical_automation">
                        <div className="pricing-left-content ">
                            <div className="sec-heading mb-0">
                                <h2 className="sec-title text-anim">
                                    Drainage That <span className="d-block">Performs Quietly</span> and Completely
                                </h2>
                                <div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
                                    <p>
                                        The best drainage systems are never noticed. They simply work. We engineer sanitary, stormwater, and wastewater networks that operate silently behind the scenes, optimised for flow capacity, safety, and long-term durability.</p>
                                </div>
                                <div className="about-button">
                                    <ButtonPrimary url="/about" text={"Contact Us"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PHETeamTrust;
