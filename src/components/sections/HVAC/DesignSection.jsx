import React from "react";

// Replace these with your own image paths
// import imgLeft from "./assets/left.jpg";
// import imgRight from "./assets/right.jpg";

export default function DesignSection() {
  return (
    <section className="design">
      <div className="container">
        <h1 className="text-white font72">Design That Thinks Ahead</h1>

        <div className="design__grid">
          {/* Left column */}
          <div className="design__col design__col--left">
            <div className="design__imgCard">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/design_left.png" alt="Interior space" />
            </div>

          <div className="design_wrap">
            <h3 className="design__quote">
              “We start with a feeling, engineer the flow, and build systems that
              stay silent, seamless, and always in sync with the environment.”
            </h3>

            <p className="design__body">
              Before we design, we ask: How should this space feel?<br/> Our HVAC
              approach considers human behavior, occupancy patterns, and purpose —
              ensuring every degree, vent, and airflow path works in harmony.
            </p>
            </div>
          </div>

          {/* Right column */}
          <div className="design__col design__col--right">
            <div className="design__imgCard design__imgCard--tall">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/design_right.png" alt="Building exterior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
