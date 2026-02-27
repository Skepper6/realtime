"use client";

import data from "./PHEProjectPortfolioData";
import PortfolioMarqee from "@/components/shared/portfolios/PortfolioMarqee";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PHEProjectCard from "./PHEProjectCard";

const PHEProjectPortfolio = () => {
    const portfolio = data; // portfolio is an array

    return (
        <section className="tj-project-section-two section-space service_porfolio">
            <PortfolioMarqee />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-wrapper">
                            {portfolio?.length ? (
                                portfolio.map((item, idx) => (
                                    <PHEProjectCard key={item.id ?? idx} portfolio={item} idx={idx} />
                                ))
                            ) : (
                                <p>No portfolio data</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="projects_button text-center wow fadeInUp" data-wow-delay="0.9s">
                    <ButtonPrimary
                        text={"Explore Case Studies"}
                        url={"/portfolios"}
                        className={"white-btn"}
                    />
                </div>
            </div>
        </section>
    );
};

export default PHEProjectPortfolio;
