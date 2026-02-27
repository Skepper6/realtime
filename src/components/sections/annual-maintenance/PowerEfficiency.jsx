import React from "react";

// Replace these with your own image paths
// import imgLeft from "./assets/left.jpg";
// import imgRight from "./assets/right.jpg";

export default function PowerEfficiency() {
  return (
    <section className="design">
      <div className="container">
        <h1 className="text-white font72">Always-On <span className="green_text">24×7 Support</span></h1>

        <div className="design__grid">
          {/* Left column */}
          <div className="design__col design__col--left">
            <div className="design__imgCard">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/support_left.jpg" alt="Interior space" />
            </div>

          <div className="design_wrap">
            <h3 className="design__quote">
           Downtime is more than an inconvenience — it’s a risk to productivity, safety, and cost.
            </h3>

            <p className="design__body">
              <span className="green_text">Our 24×7 uptime assurance model</span> ensures your systems remain stable, monitored, and supported at all times. With real-time dashboards and a dedicated response team, deviations are addressed the moment they appear. We don’t wait for failures to happen. We ensure they never interrupt operations.
            </p>
            </div>
          </div>

          {/* Right column */}
          <div className="design__col design__col--right">
            <div className="design__imgCard design__imgCard--tall">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/support_right.jpg" alt="Building exterior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
