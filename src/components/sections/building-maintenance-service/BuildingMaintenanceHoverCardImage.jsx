"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

const BuildingMaintenanceHoverCardImage = () => {
	const animContainerRef = useRef();

	// ✅ data INSIDE component (no getALlServices)
	// ✅ keep same keys your UI expects: title, desc, iconName, id, totalProject, img, svg
	const services = [
		{
			id: 1,
			title: "Centralized Control",
			desc: "Gain complete visibility over HVAC, electrical, and critical building systems through a single platform. Monitor performance in real time to enable faster decisions and seamless operations.",
			iconName: "tji-optimization",
			totalProject: 64,
			img: "https://skepper.in/000_Skepper_test/real/h1-service-2.webp",
			svg: "",
		},
		{
			id: 2,
			title: "Smart Efficiency",
			desc: "Automate core building functions to reduce manual intervention and ensure consistent performance. Intelligent coordination across HVAC and electrical systems helps optimize energy use and operational efficiency.",
			iconName: "tji-optimization",
			totalProject: 85,
			img: "https://skepper.in/000_Skepper_test/real/h1-service-2.webp",
			svg: "",
		},
		{
			id: 3,
			title: "System Optimization",
			desc: "Turn real-time data into actionable insights. Identify inefficiencies, predict maintenance needs, and enhance the reliability and performance of essential building systems.",
			iconName: "tji-optimization",
			totalProject: 64,
			img: "https://skepper.in/000_Skepper_test/real/h1-service-2.webp",
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
															{title}
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

export default BuildingMaintenanceHoverCardImage;
