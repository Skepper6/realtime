"use client";

import { useState } from "react";
import AnnualMaintenanceCard from "../../shared/cards/AnnualMaintenanceCard";

const AnnualMaintenancePortfolioData = [
  {
    id: 1,
    title: "Design",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "We develop performance-ready systems built for reliability from day one. Every solution is thoughtfully engineered and precisely executed, creating a strong operational foundation that supports long-term efficiency, safety, and compliance.",
  },
  {
    id: 2,
    title: "Build",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Premium components and precision engineering deliver consistent, high-performance power distribution.",
  },
  {
    id: 3,
    title: "Monitor",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Through real-time oversight and intelligent diagnostics, we continuously evaluate system health. Early detection of performance deviations enables timely intervention, preventing disruptions and safeguarding uptime.",
  },
  {
    id: 4,
    title: "Optimise",
    img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
    desc: "Using data-driven analysis and ongoing performance reviews, we fine-tune systems for maximum efficiency. From energy optimisation to load balancing, we enhance output, extend asset life, and reduce long-term operational costs.",
  },
];

const AnnualMaintenancePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const portfolio = AnnualMaintenancePortfolioData;

  return (
    <section
      className="project-section-three section-space grey_bg hvac_journey"
    // style={{ backgroundImage: "url('/images/shapes/h3-project.png')" }}
    >
      <div className="container-fluid AnnualMaintenance_safety">
        <div className="pill_wrap text-center">
          <span className="hvacHero__pill font12">Performance Lifecycle </span>
        </div>
        <div className="pill_text_desc">
          <h2 className="aleo-semibold font48 text-center">A Lifecycle Approach - From Design to Uptime</h2>
          <p>Maintenance isn’t a standalone service. It’s part of a larger system lifecycle. Every AMC we manage follows a continuous improvement loop, one that keeps buildings responsive, efficient, and future-ready. </p>
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
                <AnnualMaintenanceCard
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

export default AnnualMaintenancePortfolio;
