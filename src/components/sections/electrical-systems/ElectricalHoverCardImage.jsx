"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

const ElectricalHoverCardImage = () => {
	const animContainerRef = useRef();

	// ✅ data INSIDE component (no getALlServices)
	// ✅ keep same keys your UI expects: title, desc, iconName, id, totalProject, img, svg
	const services = [
		{
			id: 1,
			title: "Advanced Metering",
			desc: "Our advanced metering solutions track real-time usage, identify inefficiencies, and support accurate billing, auditing, and energy optimization.",
			iconName: "tji-optimization",
			totalProject: 64,
			img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
			svg: "",
		},
		{
			id: 2,
			title: "Energy Insights",
			desc: "We analyze load patterns, demand behavior, and system performance to help reduce wastage, improve efficiency, and support informed energy decisions.",
			iconName: "tji-optimization",
			totalProject: 85,
			img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
			svg: "",
		},
		{
			id: 3,
			title: "Smart Automation",
			desc: "From automated switching to integrated monitoring, our smart automation solutions enhance reliability, responsiveness, and operational control across facilities.",
			iconName: "tji-optimization",
			totalProject: 64,
			img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
			svg: "",
		}
		
	].slice(0, 4);

	useGSAP(
		() => {
			tjStackAnimation(".service-stack");
		},
		{ scope: animContainerRef }
	);

	return (
		<section className="h10-service-section electrical_card section-space hover_img_card" ref={animContainerRef}>
			<div className="container">
				{/* <div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-2 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								[ TRANSFORMATIVE SOLUTION ]
							</span>
							<h2 className="sec-title text-anim">
								Explore comprehensive service offer
							</h2>
						</div>
					</div>
				</div> */}

				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services?.length
								? services?.map((service, idx) => {
										const { title, desc, iconName, id, totalProject, img, svg } =
											service || {};

										return (
											<div
												key={idx}
												className="h10-service-item wow fadeInUp"
												data-wow-delay=".3s"
											>
												<div className="service-content-wrap">
													<div className="service-title">
														{/* <div className="service-icon">
															<i
																className={
																	iconName ? iconName : "tji-optimization"
																}
															></i>
														</div> */}
														<h4 className="title font48">
															<Link href={`/services/${id}`}>{title}</Link>
														</h4>
													</div>

													<div className="service-content">
														<p className="desc">
														
															{desc}
														</p>
													</div>

													{/* <div className="service-btn">
														<Link className="text-btn-2" href={`/services/${id}`}>
															<span className="icon">
																<i className="tji-angle-right"></i>
															</span>
															<span className="text">Learn more</span>
															<span className="icon">
																<i className="tji-angle-right"></i>
															</span>
														</Link>
													</div> */}
												</div>

												<div
													className="service-reveal-bg"
													style={{
														backgroundImage: `url('${
															img ? img : "/images/service/h1-service-1.webp"
														}')`,
													}}
												></div>
											</div>
										);
								  })
								: ""}
						</div>

					
					</div>
				</div>
			</div>
		</section>
	);
};

export default ElectricalHoverCardImage;
