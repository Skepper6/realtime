import React from "react";

// Replace these with your own image paths
// import imgLeft from "./assets/left.jpg";
// import imgRight from "./assets/right.jpg";

export default function PowerEfficiency() {
  return (
    <section className="design">
      <div className="container">
        <h1 className="text-white font72">Seamless Power Distribution</h1>

        <div className="design__grid">
          {/* Left column */}
          <div className="design__col design__col--left">
            <div className="design__imgCard">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/power-left.jpg" alt="Interior space" />
            </div>

          <div className="design_wrap">
            <h3 className="design__quote">
           We design and execute low- and high-tension power distribution systems built for long-term performance. Every panel, feeder, and circuit is planned with load balance, redundancy, and future scalability in mind.
            </h3>

            <p className="design__body">
              Electricity may be invisible, but its reliability defines everything<br/> around us. From uninterrupted workspaces to critical hospital corridors, power must flow consistently, safely, and without failure
            </p>
            </div>
          </div>

          {/* Right column */}
          <div className="design__col design__col--right">
            <div className="design__imgCard design__imgCard--tall">
              <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/power-right.jpg" alt="Building exterior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
