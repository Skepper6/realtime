"use client";

import FeatureCard from "@/components/shared/cards/FeatureCard";
import tjSvgAnimation from "@/libs/tjSvgAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const WhyChoose = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjSvgAnimation(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	const features = [
		{
			title: "Design & Engineering",
			desc: "Our systems are designed for sustained performance, not just for day one.",
			icon: (
				<img src={"/images/about/idea_design.svg"} />
			),
		},
		{
			title: "Ideas into Impact",
			desc: "We build with precision, discipline, and accountability to prevent issues before they arise.",
			icon: (
							<img src={"/images/about/idea_design.svg"} />

			),
		},
		{
			title: "Uptime & Optimization",
			desc: "With data-informed systems, we help environments adapt, learn, and improve.",
			icon: (
							<img src={"/images/about/idea_design.svg"} />

			),
		},
	];

	return (
		<>
			
		<section
			ref={animContainerRef}
			className="tj-feature-section-two section-space explore_sec"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Why choose us
							</span>
							 
							<h2 className="sec-title text-anim font48 letter-spcaeaing">
								<span className="d-lg-block">Where Design, Execution, and</span>

		<span className="green_text"> Uptime Converge</span>
							</h2>
							<p>Our Design-to-Uptime philosophy ensures that every system we create is engineered for continuous performance.</p>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					{features.map((feature, idx) => (
						<div key={idx} className="feature_card">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
			<div className="feature-bg-images">
				<img src="https://skepper.in/000_Skepper_test/real/feature_img.jpg" alt="feature_img" className="w-100"/>
			</div>
		</section>
		<div className="bg_height"></div>
		</>
	);
};
export default WhyChoose;
