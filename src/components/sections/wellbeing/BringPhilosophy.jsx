import React from "react";

export default function BringPhilosophy() {
    return (
        <>
            <section className="design indoor-climate">
                <div className="container">
                    {/* Header Section */}
                    <div className="design__header">
                        <h1 className="font72 design__mainTitle">
                            <span className="green_text">Indoor Climate</span> <span className="text-white">That Knows You</span>
                        </h1>
                        <p className="font32 text-white design__subtitle" >
                            Every degree, every airflow, every zone matters.
                        </p>
                        <p className="font18 greytext">
                            Our HVAC and control systems are designed to respond intelligently to<br /> fluctuating loads and occupancy patterns:
                        </p>
                    </div>

                    {/* Top Image */}
                    <div className="design__imgCard top-img">
                        <img
                            className="design__img"
                            src="https://theskepper.com/000_Skepper_test/real/philosophy_life.jpg"
                            alt="Meeting in office"
                        />
                    </div>

                    {/* Bottom Section: Grid with Image and Quote */}
                    <div className="design__grid">
                        {/* Left: Image */}
                        <div className="design__col">
                            <div className="design__imgCard">
                                <img
                                    className="design__img"
                                    src="https://theskepper.com/000_Skepper_test/real/infra_leftimg.jpg"
                                    alt="Casual office setting"
                                />
                            </div>
                        </div>

                        {/* Right: Quote */}
                        <div className="design__col design__quote-container">
                            <blockquote className="design__quote">
                                <p className="font32 design__quote-text">
                                    “After installing their zonal<br /> control system, our staff rarely<br /> mention uncomfortable<br /> temperatures anymore —<br /> that in itself is a win.”
                                </p>
                                <footer className="font18 text-white-2 design__quote-footer">
                                    Facility Head, Bengaluru IT Park
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </section>

            {/* Feature Grid Section - Separated for background control */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        {/* Row 1 */}
                        <div className="feature-row">
                            <div className="feature-card feature-card--green">
                                <div className="feature-card__icon">
                                  <img src="https://theskepper.com/000_Skepper_test/real/comfort_icon.png" />
                                </div>
                                <h3 className="feature-card__title">Consistent Comfort<br />Across Every Zone</h3>
                                <p className="feature-card__desc">Static temperatures in action, zones no<br />match hot or cold pockets</p>
                            </div>
                            <div className="feature-card feature-card--image">
                                <img src="https://theskepper.com/000_Skepper_test/real/card1.jpg" alt="Meeting" />
                            </div>
                        </div>

                        {/* Row 2 - Wide Card */}
                        <div className="feature-card-wide">
                            <div className="feature-card-wide__image">
                                <img src="https://theskepper.com/000_Skepper_test/real/roi.jpg" alt="Discussion" />
                            </div>
                            <div className="feature-card-wide__content bg-light-gray">
                                <div className="feature-card__icon">
                                                                     <img src="https://theskepper.com/000_Skepper_test/real/comfort_icon.png" />

                                </div>
                                <h3 className="feature-card__title">Breathing Comfort,<br />Perfectly Balanced</h3>
                                <p className="feature-card__desc">Humidity balance that supports<br />respiratory health</p>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="feature-row">
                            <div className="feature-card feature-card--dark">
                                <div className="feature-card__icon">
                               <img src="https://theskepper.com/000_Skepper_test/real/comfort_icon2.png" />

                                </div>
                                <h3 className="feature-card__title">Smarter Control,<br />Better Comfort.</h3>
                                <p className="feature-card__desc">Smart demand controls to<br />prevent over-conditioning</p>
                            </div>
                            <div className="feature-card feature-card--image">
                                <img src="https://theskepper.com/000_Skepper_test/real/full1.jpg" alt="Atrium" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
