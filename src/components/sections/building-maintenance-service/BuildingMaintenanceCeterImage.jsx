import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BuildingMaintenanceCeterImage = () => {
    return (
        <section className="tj-about-info section-space built_sec center_full_img dark_bg_section">
            <div className="container">
                <div className="row rg-30 justify-content-between">

                    <div className="col-lg-6 col-md-12">
                        <div className="pricing-left-content">
                            <div className="sec-heading mb-0">
                                <span className="hvacHero__pill font12 text-white">Maintenance</span>

                                <h2 className="sec-title text-anim text-white font48">
                                    Intelligence <span className="d-block"> Engineered into  </span>Every System
                                </h2>
                                <div className="desc  wow fadeInUp" data-wow-delay="0.3s">
                                    <p className="text-white">
                                     Buildings generate constant operational data. Efficiency cannot be left to chance.
                                    </p>
                                      <p className="text-white">
                                   Our Building Management Systems integrate HVAC and electrical into one intelligent platform, enabling real-time monitoring, automation, and smarter control. It’s how we improve energy efficiency, reduce operational risks, and ensure buildings perform reliably every day.
                                    </p>
                                </div>
                                {/* <div className="about-button">
                                         <ButtonPrimary url="/contact-us" text={"Contact Us"} />
                                   </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <img src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_everysystem.jpg" alt="engineer air" className="w-100" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BuildingMaintenanceCeterImage;
