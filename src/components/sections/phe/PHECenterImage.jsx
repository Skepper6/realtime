import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const PHECenterImage = () => {
    return (
        <section className="tj-about-info section-space built_sec center_full_img dark_bg_section">
            <div className="container">
                <div className="row rg-30 justify-content-between">

                    <div className="col-lg-6 col-md-12">
                        <div className="pricing-left-content">
                            <div className="sec-heading mb-0">
                                <span className="hvacHero__pill font12 text-white">Air That Elevates You</span>

                                <h2 className="sec-title text-anim text-white font48">
                                    Sustainability <span className="d-block"> Engineered into </span>Every Drop
                                </h2>
                                <div className="desc  wow fadeInUp" data-wow-delay="0.3s">
                                    <p className="text-white">
                                        Water is finite. Efficiency cannot be optional.
                                    </p>
                                    <p className="text-white">
                                       We incorporate rainwater harvesting, greywater reuse, and low-flow fixtures into our designs to reduce consumption without compromising performance.
                                    </p>
                                    <p className="text-white">
                                      It’s how we ensure long-term efficiency for buildings, communities, and the environment.
                                    </p>
                                </div>
                                {/* <div className="about-button">
                                         <ButtonPrimary url="/about" text={"Contact Us"} />
                                   </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <img src="https://theskepper.com/000_Skepper_test/real/every_drop.jpg" alt="PHE engineer" className="w-100" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PHECenterImage;
