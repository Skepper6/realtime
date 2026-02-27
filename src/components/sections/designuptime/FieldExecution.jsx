"use client";
import React from "react";
// import FieldCards from "./FieldCards";

export default function FieldExecution() {
  const inclusions = [
    {
      img: "https://theskepper.com/000_Skepper_test/real/design1.jpg",
      text: "System selection (chillers, AHUs, ducts, controls)",
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/design2.jpg",
      text: "Load calculations & zoning strategy",
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/design1.jpg",
      text: "System selection (chillers, AHUs, ducts, controls)",
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/design4.jpg",
      text: "Energy simulation & predictive modeling",
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/design5.jpg",
      text: "IAQ (Indoor Air Quality) baseline strategies",
    },
    {
      img: "https://theskepper.com/000_Skepper_test/real/design5.jpg",
      text: "Maintenance-readiness built into the design",
    },
  ];

  return (
    <section className="phases-section field_execution">
      {/* 1. Top Hero Image */}
      <div className="phases-hero">
        <img
          src="https://theskepper.com/000_Skepper_test/real/design_think.jpg"
          alt="Designer sketching"
          className="phases-hero-img"
        />
      </div>

      <div className="container">
        {/* 2. Overlapping Strategic Card */}
        <div className="strategic-card blue_bg">
          <div className="strategic-card-content">
            <div className="left-content">
              <p className="subtitle text-white font32">
                Here’s how we make that happen in <br/>four strategic phases:
              </p>
              <div className="title-wrapper">
                <div className="phase-number font32">2</div>
                <h2 className=" text-white">
                  <span className="green_text ">Field Execution</span> <br /> & Quality
                </h2>
              </div>
            </div>

            <div className="right-content">
              <p className="font18 text-white leading-relaxed">
               A design is only as good as its execution. This phase is about turning plans into reality — with craftsmanship, accountability, and precision.
              </p>
              
            </div>
          </div>
        </div>

        {/* 3. Inclusions Grid */}
        {/* <div className="inclusions-section section-space">
          <h3 className="aleo_semibold font32 text-black">Key elements</h3>
          <div className="inclusions-grid">
            {inclusions.map((item, index) => (
              <div key={index} className="inclusion-item">
                <div className="inclusion-img-wrap">
                  <img src={item.img} alt="phase step" />
                </div>
                <p className="inclusion-text aleo_regular font32 text-black ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div> */}

            {/* <FieldCards/> */}

      </div>
    </section>
  );
}