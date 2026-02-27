import React from "react";

export default function BringPhilosophy() {
  return (
    <section className="design">
      <div className="container">
        {/* Updated Title to match screenshot */}
        <h1 className="text-white font72 design__mainTitle">
          Bringing <span className="green_text">Our Philosophy</span> to Life
        </h1>

        {/* Top Full-Width Image */}
        <div className="design__imgCard">
          <img 
            className="design__img" 
            src="https://theskepper.com/000_Skepper_test/real/philosophy_life.jpg" 
            alt="Philosophy in action" 
          />
        </div>

        {/* Bottom Section: Text Left, Image Right */}
        <div className="design__grid">
          {/* Left column: Text */}
          <div className="design__col design_wrap">
            <p className="design__body font32 ">
              At Realtime Infra, we’re not simply service providers, we’re your{" "}
              <span className="green_text">lifecycle partner</span> in creating and
              sustaining comfortable, efficient, and healthy built environments.
            </p>

            <p className="font18 text-white-2">
              From the first sketches to decades of reliable performance,
              our philosophy is simple yet ambitious:
            </p>
          </div>

          {/* Right column: Image */}
          <div className="design__col">
            <div className="design__imgCard">
              <img 
                className="design__img" 
                src="https://theskepper.com/000_Skepper_test/real/infra_leftimg.jpg" 
                alt="Office meeting" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}