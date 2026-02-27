import React from "react";

const VisionMission = () => {
  return (
    <section className="vm-section">
      <div className="vm-container">
        <div className="vm-grid">
          
          {/* --- LEFT CARD: VISION --- */}
          <div className="vm-card vision-card">
            <div className="card-content">
              <h2 className="font48">
                Our <span className="green_text">Vision</span>
              </h2>
              <p>
              To lead the HVAC industry by designing and delivering systems that perform reliably over time,  enhancing efficiency, comfort, and sustainability in every space we serve.
              </p>
            </div>

            {/* Vision Image Placeholder (Target/Ladder) */}
            <div className="vision-img-wrapper">
              <img 
                src="https://theskepper.com/000_Skepper_test/real/ladder.png" 
                alt="Vision Target" 
                className="vm-image"
              />
            </div>
          </div>

          {/* --- RIGHT CARD: MISSION --- */}
          <div className="vm-card mission-card">
            <div className="card-content">
              <h2 className="font48">
                Our <span className="green_text">Mission</span>
              </h2>
              <p>
               To exceed customer expectations through committed people, trusted partnerships, and value-driven engineering across design and construction.

              </p>
            </div>

            {/* Mission Image Placeholder (Rocket) */}
            <div className="mission-img-wrapper">
              <img 
                src="https://theskepper.com/000_Skepper_test/real/fog.png" 
                alt="Mission Rocket" 
                className="vm-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;