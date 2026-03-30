import React from "react";
import styles from "./ParalaxImageSection.module.css";

// 1. Simple Parallax Image Component (No text inside)
const ParallaxImage = ({ imageUrl, alt }) => {
  return (
    <>
      <div
        className={styles.parallaxDesktop}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />
      <div className={styles.parallaxMobile}>
        <img
          className={styles.parallaxImage}
          src={imageUrl}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
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

function ParalaxImageSection() {
  // Using placeholders similar to your images
  const image1 = "https://skepper.in/000_Skepper_test/real/about/paralax1.jpg"; 
  const image2 = "https://skepper.in/000_Skepper_test/real/paralax2.jpg"; 

  return (
    <div className="">
      <ParallaxImage
        imageUrl={image1}
        alt="Real Time leadership standing in front of a glass building"
      />
      <InfoSection />
      <ParallaxImage
        imageUrl={image2}
        alt="Real Time team members in discussion"
      />
    </div>
  );
}

export default ParalaxImageSection;
