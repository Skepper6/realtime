"use client";
import React from "react";

const WellbeingServices = () => {
    const standards = [
        {
            id: "01",
            title: "WELL Building Standard™",
            desc: "We engineer air purity, acoustic calm, and illumination synergy together—because true comfort isn’t experienced in isolation. When these elements work in harmony, spaces feel intuitive,"
        },
        {
            id: "02",
            title: "LEED / IGBC compliance",
            desc: "We engineer air purity, acoustic calm, and illumination synergy together—because true comfort isn’t experienced in isolation. When these elements work in harmony, spaces feel intuitive,"
        },
        {
            id: "03",
            title: "ASHRAE & ISO quality norms",
            desc: "We engineer air purity, acoustic calm, and illumination synergy together—because true comfort isn’t experienced in isolation. When these elements work in harmony, spaces feel intuitive,"
        },
        {
            id: "04",
            title: "Enviro Audits & Surveys",
            desc: "We engineer air purity, acoustic calm, and illumination synergy together—because true comfort isn’t experienced in isolation. When these elements work in harmony, spaces feel intuitive,"
        }
    ];

    return (
        <section className="h8-services-section section-space">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="h8-services-wrapper">
                            <div className="h8-services-left">
                                <div className="tj-sticky-top">
                                    <div className="health-left-wrapper">
                                        {/* Green Card - Static (No Animation) */}
                                        <div className="health-green-card">
                                            <h3 className="health-card-title font48">Health & Safety<br/> Standards</h3>
                                            <p className="health-card-desc font18">
                                                We align our solutions with global wellness standards and certifications:
                                            </p>
                                        </div>
                                        {/* Image - Static (No Animation) */}
                                        <div className="health-image-container">
                                            <img
                                                src="https://theskepper.com/000_Skepper_test/real/health_safty.jpg"
                                                alt="Health Safety Workspace"
                                                className="health-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h8-services-right">
                                <div className="h8-services-list">
                                    {standards.map((item, index) => (
                                        <div className="service_item wow fadeInUp" data-wow-delay={`0.${index + 3}s`} key={index}>
                                            <div className="no">
                                                <span>{item.id}.</span> 
                                                <h4 className="title">
                                                    {item.title}
                                                </h4>
                                                </div>
                                            <div className="content">
                                               
                                                <div className="desc">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="container maintenance-bottom-text-container">
                <p className="font32 maintenance-bottom-text text-white" >
                    A client was able to fast-track their <span className="green_text">WELL Gold<br /> certification within 9 months</span> — thanks to the integrated<br /> climate, IAQ, and lighting systems we delivered.</p>
                                    <hr />
                                    <p className="text-white font28">HR Lead, <span className="text-white">Bangalore Office</span></p>
            </div>
            </div>
        </section>
    );
};

export default WellbeingServices;
