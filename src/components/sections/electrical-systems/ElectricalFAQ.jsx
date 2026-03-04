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
												We deliver end-to-end electrical solutions, including system design, power distribution, metering, automation, testing & commissioning, upgrades, and annual maintenance services for commercial, industrial, and institutional projects. 
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
												How do you ensure energy efficiency in electrical systems?
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
											Energy efficiency is addressed at the design stage through accurate load calculations, optimized transformer sizing, balanced distribution, advanced metering, and smart controls, minimizing losses before they occur. 
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
										Yes. We upgrade and optimize existing electrical systems to improve performance, safety, and efficiency while minimizing downtime and avoiding unnecessary replacements. 
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
												Absolutely. Our systems are designed with scalability in mind, allowing for future capacity additions, automation integration, and evolving operational needs. 
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
													All our electrical installations follow applicable safety standards, statutory requirements, and quality checks, with thorough testing and commissioning before handover. 
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
