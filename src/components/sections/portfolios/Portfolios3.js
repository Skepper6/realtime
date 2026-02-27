  "use client";

  import PortfolioCard3 from "@/components/shared/cards/PortfolioCard3";
  import getPortfolio from "@/libs/getPortfolio";
  import { useState } from "react";

  const Portfolios3 = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const portfolio = getPortfolio()?.slice(0, 3);

    return (
      <section
        className="project-section-three section-space grey_bg hvac_journey"
        // style={{ backgroundImage: "url('/images/shapes/h3-project.png')" }}
      >
        <div className="container-fluid">
              <div className="pill_wrap text-center">
                    <span className="hvacHero__pill font12">The Art of Engineering</span>
                    </div>
                  <div className="pill_text_desc">
          <h2 className="aleo-semibold font48 text-center">A Complete HVAC Journey, Built for Uptime </h2>
          <p>We design with intention, install with accuracy, and maintain with consistency, ensuring your HVAC runs quietly, efficiently, and without compromise through every season. </p>
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
                  <PortfolioCard3
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

  export default Portfolios3;
