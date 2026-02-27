import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CenterFullImage = () => {
    return (
        <section className="tj-about-info section-space built_sec center_full_img" style={{backgroundColor:"#051229"}}>
            <div className="container">
                <div className="row rg-30 justify-content-between">
                   
                    <div className="col-lg-6 col-md-12">
                                <div className="pricing-left-content">
                            <div className="sec-heading mb-0">
                                      <span className="hvacHero__pill font12 text-white">Air That Elevates You</span>

                                <h2 className="sec-title text-anim text-white font48">
                                    Engineered for <span className="d-block">Cleaner Air</span>
                                </h2>
                                <div className="desc  wow fadeInUp" data-wow-delay="0.3s">
                                    <p className="text-white">
                                       We measure success by how air makes people feel. Clean air means healthier, sharper, and more focused teams.
                                    </p>
                                </div>
                                   {/* <div className="about-button">
                                         <ButtonPrimary url="/about" text={"Contact Us"} />
                                   </div> */}
                            </div>
                        </div>
                    </div>
                
                 <div className="col-lg-6 col-md-12">
                     <img src="https://theskepper.com/000_Skepper_test/real/engineer_air.jpg" alt="engineer air" className="w-100"/>
                </div>

                </div>
            </div>
        </section>
    );
};

export default CenterFullImage;
