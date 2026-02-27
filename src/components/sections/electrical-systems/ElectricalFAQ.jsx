import Accordion from "@/components/shared/accordion/Accordion";

const ElectricalFAQ = () => {
	return (
		<section className="h7-faq section-space service_faq design_bottom_text">
			<div className="container">
                <h2 className="font48 text-center">Got a Question? We’re Here to Help.</h2>
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12  col-lg-12">
						<Accordion>
							<div className="tj-faq ">
								<div
									className="accordion tj-faq-style h7-faq-style"
									id="accordionExample"
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
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												What electrical services does Realtime Infra provide?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse "
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Yes, we handle complete HVAC design. This includes heat load calculations, equipment selection, ducting layouts, piping design, and system optimization, ensuring efficiency, compliance, and long-term performance.
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
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												What electrical services does Realtime Infra provide?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
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
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
											Do you handle retrofits and electrical system upgrades?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
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
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												Can your electrical systems support future expansion?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													We serve a wide range of sectors, including commercial buildings & offices, industrial facilities, hospitals & healthcare spaces, retail & hospitality and educational institutions. 
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
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												How do you ensure safety and compliance?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													You can reach out to us for a consultation. Our team will understand your requirement, assess the site (if needed), and propose the most efficient HVAC solution aligned with your project goals. 
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Accordion>
					</div>
					{/* <div className="col-12  col-lg-4">
						<div className="faq-banner">
							<img src="/images/faq/h7-faq-banner.png" alt="" />

							<div className="sec-heading h7-section-heading style-4">
								<h2 className="sec-title text-anim">
									Questions and answers...
								</h2>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default ElectricalFAQ;
