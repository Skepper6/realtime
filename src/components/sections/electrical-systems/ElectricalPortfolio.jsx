"use client";

import { useState } from "react";
import ElectricalCard from "../../shared/cards/ElectricalCard";

const electricalPortfolioData = [
  {
    id: 1,
    title: "Safety",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Rigorous adherence to international safety standards ensures protection for both personnel and infrastructure.",
  },
  {
    id: 2,
    title: "Quality",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Premium components and precision engineering deliver consistent, high-performance power distribution.",
  },
  {
    id: 3,
    title: "Reliability",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Robust system architecture designed for zero unplanned downtime and maximum operational continuity.",
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
