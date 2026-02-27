import React from "react";



// 2. The Text Section (Matches your screenshot)
const CleanAir = () => {
  return (
    <div className="info-section">
      <div className="info-container">
        
        {/* Left Side: Heading */}
        <div className="info-left">
          <h2 className="font48">
            <span className="green_text">Clean Air, Quiet Rooms <br /></span>
            Bright Spaces
          </h2>
        </div>

        {/* Right Side: Paragraph */}
        <div className="info-right">
          <p>
        We engineer air purity, acoustic calm, and illumination synergy<br/> together because true comfort isn’t experienced in isolation. When these elements work in harmony, spaces feel intuitive, balanced, and quietly supportive of the people within them.
          </p>
        </div>

      </div>
    </div>
  );
};



export default CleanAir;