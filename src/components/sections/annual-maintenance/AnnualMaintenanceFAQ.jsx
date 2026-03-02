import Accordion from "@/components/shared/accordion/Accordion";

const AnnualMaintenanceFAQ = () => {
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
												What does your Annual Maintenance Service include
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
													Our AMC covers routine inspections, preventive maintenance, performance-based servicing, and system diagnostics to ensure the continuous, efficient operation of critical infrastructure. 
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
											Do you offer remote monitoring and response services?
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
													Yes. Our remote monitoring solutions track system performance in real time, enabling faster diagnostics, proactive intervention, and reduced downtime. 
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
										How often are maintenance visits scheduled?
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
											Maintenance schedules are customized based on system type, usage intensity, and operational requirements, ensuring optimal performance throughout the year. 
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
												Can AMC help reduce operational costs? 
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
												Yes. Preventive and predictive maintenance reduces unexpected breakdowns, extends equipment life, and improves energy efficiency, resulting in lower long-term operational expenses. 
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
											 Which systems are covered under your AMC services? 
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
												We support HVAC, electrical systems, PHE networks, automation systems, and other critical building infrastructure components. 
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

export default AnnualMaintenanceFAQ;
