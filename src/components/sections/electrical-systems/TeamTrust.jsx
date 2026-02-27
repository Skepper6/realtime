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

          <div className="col-lg-6 col-md-12 electrical_automation">
            <div className="pricing-left-content ">
              <div className="sec-heading mb-0">
                <h2 className="sec-title text-anim">
                  Automation <span className="d-block">That Responds in</span> Real Time
                </h2>
                <div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
                  <p>
                  Modern buildings demand more than static electrical layouts. They need systems that sense, adapt, and respond.
                  </p>
                  <p>Our electrical automation solutions integrate seamlessly with HVAC, lighting, and utility systems, enabling intelligent load management, sensor-driven controls, and energy optimization.</p>
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
