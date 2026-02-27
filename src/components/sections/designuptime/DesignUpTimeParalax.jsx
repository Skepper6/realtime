import React from "react";

// 1. Simple Parallax Image Component (No text inside)
const ParallaxImage = ({ imageUrl }) => {
  return (
    <div 
      className="parallax-bg" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

// 2. The Text Section (Matches your screenshot)
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-container">
        
        {/* Left Side: Heading */}
        <div className="info-left">
          <h2 className="font48">
            Experience That Shapes <br />
            <span className="green_text">Every Decision</span>
          </h2>
        </div>

        {/* Right Side: Paragraph */}
        <div className="info-right">
          <p>
          Guided by decades of on-ground engineering experience, Prasanth Thandayil remains closely involved in the work. They know where systems falter, what endures under pressure, and what ensures buildings continue to perform well beyond handover.
          </p>
        </div>

      </div>
    </div>
  );
};

function DesignUpTimeParalax() {
  // Using placeholders similar to your images
  const image1 = "https://theskepper.com/000_Skepper_test/real/paralax1.jpg"; 

  return (
    <div className="uptime_paralax">
      <ParallaxImage imageUrl={image1} />
   
    </div>
  );
}

export default DesignUpTimeParalax;