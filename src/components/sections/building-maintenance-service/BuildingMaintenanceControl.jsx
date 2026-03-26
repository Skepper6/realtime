import React from "react";

// Replace these with your own image paths
// import imgLeft from "./assets/left.jpg";
// import imgRight from "./assets/right.jpg";

export default function BuildingMaintenanceControl() {
  return (
    <section className="design">
      <div className="container">
        <h1 className="text-white font72">Built for Intelligent Building Control</h1>

        <div className="design__grid">
          {/* Left column */}
          <div className="design__col design__col--left">
            <div className="design__imgCard">
              <img className="design__img" src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_building.jpg" alt="Interior space" />
            </div>

          <div className="design_wrap">
            <h3 className="design__quote">
           Building systems should operate in harmony - consistently, efficiently, and without disruption.
            </h3>

            <p className="design__body">
             Our Building Management System integrate HVAC and electrical infrastructure into a unified control platform. With centralized monitoring and real-time insights, we help facilities maintain optimal performance across every zone.<br/><br/> From system visibility and load monitoring to performance tuning, every layer is designed to improve operational efficiency and reduce energy waste. Because when systems communicate seamlessly, buildings operate smarter, and performance becomes effortless.
            </p>
            </div>
          </div>

          {/* Right column */}
          <div className="design__col design__col--right">
            <div className="design__imgCard design__imgCard--tall">
              <img className="design__img" src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_server.jpg" alt="Building server" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
