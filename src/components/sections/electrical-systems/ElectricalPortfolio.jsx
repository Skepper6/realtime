"use client";

import { useState } from "react";
import ElectricalCard from "../../shared/cards/ElectricalCard";

const electricalPortfolioData = [
  {
    id: 1,
    title: "Safety",
    img2: "https://skepper.in/000_Skepper_test/real/electrical/electrical-card1.jpg",
    desc: "We design electrical systems that comply with stringent safety standards, covering earthing, lightning protection, fault isolation, surge protection, and emergency backup, so risks are controlled before they arise.",
  },
  {
    id: 2,
    title: "Quality",
    img2: "https://skepper.in/000_Skepper_test/real/electrical/electrical-card2.jpg",
    desc: "Precision in every circuit, consistency in every outcome. From material selection to installation and testing, our electrical work follows rigorous quality benchmarks to ensure long-term performance.",
  },
  {
    id: 3,
    title: "Reliability",
    img2: "https://skepper.in/000_Skepper_test/real/electrical/electrical-card3.jpg",
    desc: "Power that performs, without interruption. Our systems are built for uptime, with robust design, redundancy planning, and reliable execution that ensure uninterrupted power delivery.",
  },
];

const ElectricalPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const portfolio = electricalPortfolioData;

  return (
    <section
      className="project-section-three section-space grey_bg hvac_journey"
    // style={{ backgroundImage: "url('/images/shapes/h3-project.png')" }}
    >
      <div className="container-fluid electrical_safety">
        <div className="pill_wrap text-center">
          <span className="hvacHero__pill font12">The Art of Design</span>
        </div>
        <div className="pill_text_desc">
          <h2 className="aleo-semibold font48 text-center">Safety Systems Designed for Continuity</h2>
          <p>Power is only valuable when it’s protected. We design electrical systems that meet and exceed safety and compliance standards, including earthing, lightning protection, fault isolation, surge protection, and emergency backup systems. </p>
        </div>
        <div className="row">
          <div className="col-12">
            {/* reset when leaving the whole row */}
            <div
              className="project-wrapper-two wow fadeInUp"
              data-wow-delay="0.3s"
              onMouseLeave={() => setCurrentIndex(-1)}
            >
              {portfolio?.map((p, idx) => (
                <ElectricalCard
                  key={idx}
                  portfolio={p}
                  handleCurrentIndex={setCurrentIndex}
                  currentIndex={currentIndex}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalPortfolio;
