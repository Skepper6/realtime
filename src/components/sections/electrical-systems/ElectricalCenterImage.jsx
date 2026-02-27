import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ElectricalCenterImage = () => {
    return (
        <section className="tj-about-info section-space built_sec center_full_img dark_bg_section">
            <div className="container">
                <div className="row rg-30 justify-content-between">

                    <div className="col-lg-6 col-md-12">
                        <div className="pricing-left-content">
                            <div className="sec-heading mb-0">
                                <span className="hvacHero__pill font12 text-white">Efficient Energy</span>

                                <h2 className="sec-title text-anim text-white font48">
                                    Energy Efficiency, <span className="d-block"> Engineered from the </span>Ground Up
                                </h2>
                                <div className="desc  wow fadeInUp" data-wow-delay="0.3s">
                                    <p className="text-white">
                                     The most sustainable power systems don’t rely on fixes later; they’re designed right from the start.
                                    </p>
                                      <p className="text-white">
                                    At Realtime, energy efficiency is embedded into every layer of our electrical infrastructure, from transformer sizing and load distribution to smart controls and future-ready integrations.
                                    </p>
                                </div>
                                {/* <div className="about-button">
                                         <ButtonPrimary url="/about" text={"Contact Us"} />
                                   </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <img src="https://theskepper.com/000_Skepper_test/real/electrical_efficiency.jpg" alt="engineer air" className="w-100" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ElectricalCenterImage;
