import Accordion from "@/components/shared/accordion/Accordion";

const PHEFAQ = () => {
    return (
        <section className="h7-faq section-space service_faq design_bottom_text">
            <div className="container">
                <h2 className="font48 text-center">Got a Question? We're Here to Help.</h2>
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-12  col-lg-12">
                        <Accordion>
                            <div className="tj-faq ">
                                <div
                                    className="accordion tj-faq-style h7-faq-style"
                                    id="accordionPHEExample"
                                >
                                    <div
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <h2 className="accordion-header ">
                                            {/* <!-- button --> */}
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePHE-1"
                                                aria-expanded="false"
                                            >
                                                What does PHE (Public Health Engineering) include?
                                            </button>
                                        </h2>
                                        {/* <!-- content --> */}
                                        <div
                                            id="collapsePHE-1"
                                            className="accordion-collapse collapse "
                                            data-bs-parent="#accordionPHEExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    PHE services cover the design, installation, and maintenance of water supply, drainage, sewage, stormwater, and water treatment systems that ensure safe and efficient building operations. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <h2 className="accordion-header ">
                                            {/* <!-- button --> */}
                                            <button
                                                className="accordion-button "
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePHE-2"
                                                aria-expanded="false"
                                            >
                                               Do you handle both design and execution of PHE systems?
                                            </button>
                                        </h2>
                                        {/* <!-- content --> */}
                                        <div
                                            id="collapsePHE-2"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionPHEExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                 Yes. We provide end-to-end solutions, from load calculations and hydraulic design to installation, testing, and commissioning, ensuring performance and compliance at every stage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <h2 className="accordion-header ">
                                            {/* <!-- button --> */}
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePHE-3"
                                                aria-expanded="false"
                                            >
                                                Are your PHE systems compliant with international standards?
                                            </button>
                                        </h2>
                                        {/* <!-- content --> */}
                                        <div
                                            id="collapsePHE-3"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionPHEExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                  All systems are designed and installed in accordance with recognized global codes and regulatory frameworks, ensuring safety, performance, reliability, and approval readiness. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <h2 className="accordion-header ">
                                            {/* <!-- button --> */}
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePHE-4"
                                                aria-expanded="false"
                                            >
                                              How do you ensure water quality and safety?
                                            </button>
                                        </h2>
                                        {/* <!-- content --> */}
                                        <div
                                            id="collapsePHE-4"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionPHEExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                 We integrate filtration units, UV sterilization, pressure management, and reuse systems to maintain water integrity and safeguard public health within commercial and industrial environments. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <h2 className="accordion-header ">
                                            {/* <!-- button --> */}
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePHE-5"
                                                aria-expanded="false"
                                            >
                                              Do you provide sustainable water management solutions?
                                            </button>
                                        </h2>
                                        {/* <!-- content --> */}
                                        <div
                                            id="collapsePHE-5"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionPHEExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                Yes. Our solutions include water reuse systems, optimized distribution planning, and efficient system design to reduce water consumption and support sustainability goals. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PHEFAQ;
