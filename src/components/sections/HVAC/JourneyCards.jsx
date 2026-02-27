"use client";

import { useState } from "react";

const JourneyCards = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Replace with your getPortfolio()?.slice(0, 3) if you want.
  // Keeping same fields: title, img2, id, tags, desc
  const portfolio = [
    {
      id: 1,
      title: "Installation",
      img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
      desc: "From VRF setups to complex chiller plants, we install every system with precision, safety, and seamless integration into your building’s infrastructure.",
      tags: [],
    },
    {
      id: 2,
      title: "Maintenance",
      img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
      desc: "We keep systems stable with preventive checks, timely servicing, and performance-driven upkeep that reduces downtime across seasons.",
      tags: [],
    },
    {
      id: 3,
      title: "Expert Designs",
      img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
      desc: "We engineer HVAC layouts based on load, airflow behavior, and architectural needs, ensuring comfort, efficiency, and long-term reliability.",
      tags: [],
    },
  ].slice(0, 3);

  return (
    <section className="project-section-three section-space grey_bg hvac_journey">
      <div className="container-fluid">
        <div className="pill_wrap text-center">
          <span className="hvacHero__pill font12">The Art of Engineering</span>
        </div>

        <div className="pill_text_desc">
          <h2 className="aleo-semibold font48 text-center">
            A Complete HVAC Journey, Built for Uptime&nbsp;
          </h2>
          <p>
            We design with intention, install with accuracy, and maintain with
            consistency, ensuring your HVAC runs quietly, efficiently, and
            without compromise through every season.&nbsp;
          </p>
        </div>

        <div className="row">
          <div className="col-12">
            <div
              className="project-wrapper-two wow fadeInUp"
              data-wow-delay="0.3s"
              onMouseLeave={() => setCurrentIndex(-1)}
            >
              {portfolio?.map((p, idx) => {
                const { title, img2, desc } = p || {};

                return (
                  <div
                    key={idx}
                    className={`project-style-3 card-accordion ${
                      currentIndex === idx ? "active" : ""
                    }`}
                    onMouseEnter={() => setCurrentIndex(idx)}
                  >
                    <div className="project-thumb">
                      <div className="image">
                        <img
                          src={img2 ? img2 : "assets/images/project/h2-project-1.webp"}
                          alt="Images"
                        />
                        /
                      </div>

                      <div className="project-default-content">
                        <span>
                          <i className="tji-arrow-right"></i>
                        </span>
                        <h3 className="title font48 sec-title aleo_semibold">
                          {title}
                        </h3>
                      </div>
                    </div>

                    <div className="project-content-box">
                      <div className="project-text">
                        <h3 className="title font48 sec-title aleo_semibold">
                          {title}
                        </h3>

                        <div className="desc">
                          <p className="font18">{desc}</p>
                        </div>

                        {/* keep your commented sections as-is if you want:
                            tags, buttons, links etc. */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCards;
