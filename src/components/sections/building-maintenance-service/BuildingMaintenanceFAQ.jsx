import Accordion from "@/components/shared/accordion/Accordion";

const BuildingMaintenanceFAQ = () => {
	return (
		<section className="h7-faq section-space service_faq design_bottom_text">
			<div className="container">
				<h2 className="font48 text-center">Got a Question? We&apos;re Here to Help.</h2>
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-12">
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
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												What systems can a BMS control?
											</button>
										</h2>
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse "
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													A BMS can integrate and manage multiple building systems, including HVAC, electrical distribution, energy monitoring, and other facility infrastructure from a single interface.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button "
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												How does a BMS improve energy efficiency? 
											</button>
										</h2>
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													A BMS continuously monitors building performance and automatically adjusts systems such as cooling, heating, and lighting based on occupancy and demand. This helps reduce unnecessary energy consumption and lowers operating costs.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
												Can BMS help reduce operational costs? 
											</button>
										</h2>
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													 Yes. By optimizing system performance, reducing energy waste, and enabling predictive maintenance, a BMS helps lower utility costs and prevents costly equipment failures.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												Is BMS suitable for all types of buildings? 
											</button>
										</h2>
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													BMS solutions are widely used in commercial buildings, hospitals, hotels, industrial facilities, educational institutions, and residential complexes where efficient infrastructure management is essential.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												What are the main benefits of implementing a BMS? 
											</button>
										</h2>
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													What are the main benefits of implementing a BMS? 
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

export default BuildingMaintenanceFAQ;
