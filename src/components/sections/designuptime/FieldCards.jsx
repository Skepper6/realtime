"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import tjStackAnimation from "@/libs/tjStackAnimation";

// 1. Define the object array
const cardData = [
  {
    image: "https://theskepper.com/000_Skepper_test/real/field1.png",
    title: "Detailed project scheduling and site coordination",
    color: "155, 138, 120",
  },
  {
    image: "https://theskepper.com/000_Skepper_test/real/field1.png", 
    title: "Expert Load Calculations and Zoning Strategy",
    color: "5, 18, 41", 
  },
  {
    image: "https://theskepper.com/000_Skepper_test/real/field1.png", 
    title: "Maintenance-readiness and Lifecycle Planning",
    color: "128, 196, 102", 
  },
];

export default function FieldCards() {
  const animContainerRef = useRef();

  // 2. Trigger the stacking animation
  useGSAP(
    () => {
      // This looks for the ".service-stack" class to create the pinning effect
      tjStackAnimation(".service-stack");
    },
    { scope: animContainerRef }
  );

  return (
    <section ref={animContainerRef} className="field-cards-section section-space grey_bg" >
      <div className="container">
        <div className="service-wrapper">
          {cardData.map((item, index) => {
            // Logic to apply animation class to all but the last item
            const isStackable = index < cardData.length - 1;
            
            return (
              <div 
                key={index} 
                className={`service-item ${isStackable ? "service-stack" : ""}`}
              >
                {/* We use your specific scheduling-banner UI inside the animated wrapper */}
                <div className="scheduling-banner" style={{ width: '100%' }}>
                  
                  {/* Background Image Layer */}
                  <div className="banner-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* Dynamic Gradient Overlay */}
                  <div
                    className="banner-overlay"
                    style={{
                      background: `linear-gradient(90deg, rgba(${item.color}, 1) 0%, rgba(${item.color}, 0.8) 25%, rgba(${item.color}, 0) 70%)`,
                    }}
                  />

                  {/* Text Content Container */}
                  <div className="container banner-container">
                    <div className="banner-content">
                      <h2 className="banner-title font32 aleo_semibold">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}