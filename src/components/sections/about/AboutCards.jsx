"use client";
import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const AboutCards = () => {
  // Replace these with your real images
  const leftBg =
    "https://theskepper.com/000_Skepper_test/real/architectural-details.jpg"; // vent/ceiling style
  const img1 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // think clearer
  const img2 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // stay balanced
  const img3 =
    "https://theskepper.com/000_Skepper_test/real/card1.jpg"; // feel better

  return (
    <section className="hs-wrap section-space about_card_wrap" style={{backgroundColor: "#F7F7F7"}}>
      <div className="container">
        <section className="experience-section">
      <div className="container">
        
        {/* Main Heading */}
        <h2 className="experience-heading font72">
          <span className="navy-text ">15+ years of Your Partner in 
          <span className="green_text"> Keeping Buildings Breathing</span></span>
        </h2>

        {/* Description Text */}
        <p className="experience-desc">
          Over the past decade, we’ve built a strong client base, ensuring every project is
          handled with dedicated focus. Our visionary team is prepared for the future, creating
          solutions that address today’s needs and anticipate tomorrow’s challenges. With
          ongoing after-sales support, we help clients save time and resources.
        </p>

      </div>
    </section>
      <div className="hs-inner">
        {/* LEFT BIG CARD */}
        <article className="hs-leftCard" style={{ backgroundImage: `url(${leftBg})` }}>
          <div className="hs-leftOverlay" />
          <div className="hs-leftContent">
            <span className="hs-pill font12">Smart Systems. Real Comfort.</span>

            <h2 className="hs-title font48 text-white">
              Sustainable <br/>Practices for a<br/> Better Future
            </h2>

            <p className="hs-desc font18">
              We focus on reducing our environmental impact through energy-efficient technologies, renewable energy solutions, and sustainable practices in every project.
            </p>
          </div>
        </article>

        {/* RIGHT GRID */}
        <div className="hs-rightGrid">
          <article className="hs-card" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Energy-efficient HVAC systems</h3>
          </article>

          <article className="hs-card" style={{ backgroundImage: `url(${img2})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Renewable energy solutions</h3>
          </article>

          <article className="hs-card " style={{ backgroundImage: `url(${img3})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Sustainable water management practices</h3>
          </article>

             <article className="hs-card" style={{ backgroundImage: `url(${img3})` }}>
            <div className="hs-cardShade" />
            <h3 className="hs-cardLabel font32">Waste reduction in project execution</h3>
          </article>
        </div>
      </div>

        {/* <div
                            className="service-btn-area text-center wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <ButtonPrimary text={"Schedule a Consultation"} url={"/services"} />
                        </div> */}
      </div>

    </section>
  );
};

export default AboutCards;
