"use client";

import { useState } from "react";

const PHECard = ({
    portfolio,
    handleCurrentIndex,
    currentIndex,
    idx,
}) => {
    const { title, img2, id, tags, desc } = portfolio ? portfolio : {};

    return (
        <div
            className={`project-style-3 card-accordion  ${currentIndex === idx ? "active" : ""}`}
            onMouseEnter={() => handleCurrentIndex(idx)}
        >
            <div className="project-thumb">
                <div className="image">
                    <img
                        src={img2 ? img2 : "/images/project/h2-project-1.webp"}
                        alt="Images"
                    />

                </div>
                <div className="project-default-content">
                    <span>
                        <i className="tji-arrow-right"></i>
                    </span>
                    <h3 className="title font48 sec-title aleo_semibold">{title}</h3>
                </div>
            </div>
            <div className="project-content-box">
                <div className="project-text">
                    <h3 className="title font48 sec-title aleo_semibold">
                        {title}
                    </h3>
                    <div className="desc">
                        <p className="font18">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const phePortfolioData = [
    {
        id: 1,
        title: "UV Sterilisation",
        img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
        desc: "Integrated UV sterilisation units designed for continuous, energy-efficient microbial control within commercial and industrial water systems.",
    },
    {
        id: 2,
        title: "Filtration Units",
        img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
        desc: "Multi-stage filtration units are engineered to enhance water clarity, safeguard system components, and ensure long-term operational efficiency.",
    },
    {
        id: 3,
        title: "Reuse Systems",
        img2: "https://nexalearning.com/wp-content/uploads/2024/08/employee-dissatisfaction-scaled.jpeg",
        desc: "Smart reuse systems that maximize water efficiency, lower consumption, and support sustainable building operations.",
    },
];

const PHEPortfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const portfolio = phePortfolioData;

    return (
        <section
            className="project-section-three section-space grey_bg hvac_journey"
        // style={{ backgroundImage: "url('/images/shapes/h3-project.png')" }}
        >
            <div className="container-fluid electrical_safety">
                <div className="pill_wrap text-center">
                    <span className="hvacHero__pill font12">Engineering for Health</span>
                </div>
                <div className="pill_text_desc">
                    <h2 className="aleo-semibold font48 text-center">Hygiene Systems Built to Protect Health</h2>
                    <p>Public Health Engineering is where infrastructure directly impacts wellbeing.Our systems are designed to uphold hygiene at every level, from clean water supply and safe waste disposal to advanced treatment and disinfection solutions. </p>
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
                                <PHECard
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

export default PHEPortfolio;
