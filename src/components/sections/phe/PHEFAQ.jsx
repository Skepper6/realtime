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
                                                What is a water treatment system?
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
                                                    Yes, we handle complete PHE design. This includes water demand calculations, equipment selection, piping layouts, drainage design, and system optimization, ensuring efficiency, compliance, and long-term performance.
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
                                                What types of water treatment systems are commonly used?
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
                                                    We follow structured project planning with clear timelines, site coordination, and cross-team alignment. This ensures smooth execution alongside civil, electrical, and other MEP services.
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
                                                Why is water treatment important for commercial and residential buildings?
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
                                                    Our installations follow strict quality checks at every stage - material inspection, execution standards, safety compliance, and performance testing. Every system undergoes proper testing and commissioning before handover.
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
                                                How often should a water treatment system be maintained?
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
                                                    We serve a wide range of sectors, including commercial buildings &amp; offices, industrial facilities, hospitals &amp; healthcare spaces, retail &amp; hospitality and educational institutions.
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
