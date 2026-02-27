"use client";
import ButtonPrimary from "../../../components/shared/buttons/ButtonPrimary";
import TestimonialsCard3 from "../../../components/shared/cards/TestimonialsCard3";
import getTestimonials from "../../../libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamTrust = () => {

  const testimonials = getTestimonials()?.slice(0, 4);
  const { isRtl } = {};
  const slides = [
    "https://theskepper.com/000_Skepper_test/real/we_slider1.jpg",
    // "https://theskepper.com/000_Skepper_test/real/we_slider2.jpg"
  ];

  return (
    <section className="tj-about-info section-space built_sec">
      <div className="container-fluid">
        <div className="row rg-30 justify-content-between">

          <div className="col-lg-6 col-md-12">
            {/* <img src="/images/about/built_design.jpg" alt="built design " className="w-100"/> */}

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

          <div className="col-lg-6 col-md-12 AnnualMaintenance_automation">
            <div className="pricing-left-content ">
              <div className="sec-heading mb-0">
                <h2 className="sec-title text-anim">
                  Predictive & <span className="d-block">Preventive Care That</span> <span className="d-block">Keeps Systems Ahead </span> 
                </h2>
                <div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
                  <p>
                  Our AMC programs combine predictive monitoring and preventive maintenance to identify issues early and eliminate disruption at the source.
                  </p>
                  <p>Using IoT-based monitoring, performance analytics, and benchmark tracking, we detect deviations long before they impact operations. From chillers and AHUs to electrical panels and water systems, every asset is logged, tracked, and optimised for extended life.</p>
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

export default TeamTrust;
