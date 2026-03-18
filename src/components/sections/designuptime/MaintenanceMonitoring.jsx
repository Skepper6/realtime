"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MaintenanceMonitoring() {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
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
  const desktopSpaceBetween = getSlideMetrics(false).spaceBetween;

  const sliderItems = [
    {
      img: "https://skepper.in/000_Skepper_test/real/rec1.jpg",
      title: "Tiered AMC packages:\n preventive, predictive,\n and full-service",
      isWide: false, // Standard size
    },
    {
      img: "https://skepper.in/000_Skepper_test/real/rec2.jpg",
      title: "Scheduled inspections,\ncleaning, and calibrations",
      isWide: true, // WIDER size like the reference
    },
    {
      img: "https://skepper.in/000_Skepper_test/real/designuptime/slider3.jpg",
      title: "Remote monitoring dashboards:\nreal-time, current, alarms",
      isWide: false,
    },
    {
      img: "https://skepper.in/000_Skepper_test/real/rec2.jpg",
      title: "Emergency response \n& rapid repair protocols",
      isWide: true,
    },
  ];

  return (
    <section className="phases-section maitenance_sec process-maintenance-section">
           <div className="phases-hero">
        <img
          src="https://skepper.in/000_Skepper_test/real/designuptime/maintenance_monitoring.jpg"
          alt="Designer sketching"
          className="phases-hero-img"
        />
      </div>
      <div className="container" ref={contentContainerRef}>
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

      <div className="apple-slider-outer process-maintenance-slider-outer">
        <Swiper
          modules={[Navigation]}
          spaceBetween={desktopSpaceBetween}
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
                <img src={item.img} alt="Service" />
                <div className="apple-card-overlay">
                  <div className="sub_title">
                  <h4 className="text-white font32" style={{whiteSpace: "pre-line"}}>{item.title}</h4>
                </div>
                </div>
              </div>
            </SwiperSlide>
          )})}
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
        <img src="https://skepper.in/000_Skepper_test/real/designuptime/fault.jpg" alt="Fault detection" />
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
        <img src="https://skepper.in/000_Skepper_test/real/designuptime/energy.jpg" alt="Energy audits" />
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
