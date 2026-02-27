"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
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
      img: "https://theskepper.com/000_Skepper_test/real/rec1.jpg",
      title: "Tiered AMC packages:\n preventive, predictive,\n and full-service",
      isWide: false, // Standard size
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/rec2.jpg",
      title: "Scheduled inspections,\ncleaning, and calibrations",
      isWide: true, // WIDER size like the reference
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/rec1.jpg",
      title: "Remote monitoring dashboards:\nreal-time, current, alarms",
      isWide: false,
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/rec2.jpg",
      title: "Emergency response \n& rapid repair protocols",
      isWide: true,
    },
  ];

  return (
    <section className="phases-section maitenance_sec" >
           <div className="phases-hero">
        <img
          src="https://theskepper.com/000_Skepper_test/real/design_think.jpg"
          alt="Designer sketching"
          className="phases-hero-img"
        />
      </div>
      <div className="container">
        <div className="strategic-card blue_bg mb-5">
          <div className="strategic-card-content">
            <div className="left-content">
              <p className="subtitle text-white font32">
                Here’s how we make that happen in <br /> four strategic phases:
              </p>
              <div className="title-wrapper">
                <div className="phase-number font32">3</div>
                <h2 className="text-white">
                  <span className="green_text">Maintenance</span> <br />& Monitoring
                </h2>
              </div>
            </div>
            <div className="right-content">
              <p className="font18 text-white leading-relaxed">
                Once the systems are up, our job is just beginning. Through comprehensive maintenance 
                and data-driven monitoring, we preserve performance and proactively prevent failures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="apple-slider-outer">
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={"auto"}
          loop={true}
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
                <img src={item.img} alt="Service" />
                <div className="apple-card-overlay">
                  <div className="sub_title">
                  <h4 className="text-white font32" style={{whiteSpace: "pre-line"}}>{item.title}</h4>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container fullpagination  d-flex justify-content-end gap-2">
            <button className="slide-prev custom-nav-btn"><i className="tji-arrow-left"></i></button>
            <button className="slide-next custom-nav-btn"><i className="tji-arrow-right"></i></button>
        </div>
      </div>

      {/* 3. Static Boxes Below (Flexbox version) */}
<div className="container static_cards">
  <div className="static-flex-container">
    
    {/* Left Card - Wide (Matching the 580px slider card) */}
    <div className="static-card-wrapper wide-static">
      <div className="apple-card static-card-height">
        <img src="https://theskepper.com/000_Skepper_test/real/static1.png" alt="Fault detection" />
        <div className="apple-card-overlay">
          <div className="sub_title">
          <h4 className="text-white font32" style={{ whiteSpace: "pre-line" }}>
            Fault detection, trending & alerting
          </h4>
          </div>
        </div>
      </div>
    </div>

    {/* Right Card - Standard (Matching the 380px slider card) */}
    <div className="static-card-wrapper standard-static">
      <div className="apple-card static-card-height">
        <img src="https://theskepper.com/000_Skepper_test/real/design5.jpg" alt="Energy audits" />
        <div className="apple-card-overlay">
                    <div className="sub_title">
          <h4 className="text-white font32" style={{ whiteSpace: "pre-line" }}>
            Energy audits and {"\n"}performance{"\n"} benchmarking
          </h4>
            </div>
        </div>
      </div>
    </div>

  </div>
</div>
    </section>
  );
}