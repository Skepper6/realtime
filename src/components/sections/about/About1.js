"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import borderRadiusAnimation from "@/libs/borderRadiusAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const About1 = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			borderRadiusAnimation(".tj-about-section");
		},
		{ scope: animContainerRef }
	);
	return (
		<section ref={animContainerRef}>
			<div className="tj-about-section ">
				<div className="container">
					<div className="row">
						<div className="col-lg-6"></div>
						<div className="col-lg-6">
							<div className="about-left-content">
								<div className="sec-heading">
									<span
										className="text-white sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										Our purpose
									</span>
									<h2 className=" text-anim aleo_semibold">
										<span className="d-lg-block blue_text">The Realtime</span> Approach: From Design <span className="d-lg-block blue_text">to Uptime</span>
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p className="aleo_regular">
											A Philosophy that Powers Performance. 
										</p>

										<p className="aleo_regular">We don’t just install systems — we create a continuous loop of reliability. Our Design to Uptime framework ensures every project performs from day one, and evolves with time.</p>
									</div>
								</div>
								<div
									className="about-feature-item wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="feature-box">
										<div className="feature-left">
											<div className="check-list-one">
												<ul>
													<li>
														<i className="tji-double-check text-white"></i>Design & Engineering
													</li>
													<li>
														<i className="tji-double-check text-white"></i>Execution & Implementation
													</li>
													<li>
														<i className="tji-double-check text-white"></i>Maintenance & Monitoring
													</li>
													<li>
														<i className="tji-double-check text-white"></i>Uptime & Optimization
													</li>
												</ul>
											</div>
											<div className="about-button">
												<ButtonPrimary url="/about" text={"Read more"} />
											</div>
										</div>
									</div>
									<div className="feature-box">
										<div className="client-experience">
											<ul className="images-thumb">
												<li>
													<img src="/images/about/thumb-1.png" alt="Images" />
												</li>
												<li>
													<img src="/images/about/thumb-2.png" alt="Images" />
												</li>
												<li>
													<img src="/images/about/thumb-3.png" alt="Images" />
												</li>
												<li className="plus">
													<i className="fa-sharp fa-solid fa-plus"></i>
												</li>
											</ul>
											<div className="funfact-item-one">
												{/* <p>80+</p> */}
												<FunfactSingle currentValue={80} symbol={"+"} />
												<span className="sub-title aleo_regular">
													Happy clients all over <br /> world now.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about-bg-images">
					<div className="about-shape-1 hover:shine">
						<img src="https://theskepper.com/000_Skepper_test/real/our_purpose.jpg" alt="our purpose" />
					</div>
					<div className="about-shape-2 hover:shine">
						<img src="https://theskepper.com/000_Skepper_test/real/logo.svg" alt="Logo" />
					</div>
					<div className="about-shape-3 zoominout">
						{/* <img src="/images/icons/star.svg" alt="Shapes" /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
