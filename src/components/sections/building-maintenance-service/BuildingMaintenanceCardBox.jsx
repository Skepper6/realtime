"use client";

import React from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BuildingMaintenanceCardBox = () => {
	const leftBg = "https://skepper.in/000_Skepper_test/real/building%20maintanance/build_room.jpg";
	const img1 = "https://skepper.in/000_Skepper_test/real/building%20maintanance/operational_stability.jpg";
	const img2 = "https://skepper.in/000_Skepper_test/real/building%20maintanance/energy_efficiency.jpg";
	const img3 = "https://skepper.in/000_Skepper_test/real/building%20maintanance/monitoring.jpg";

	return (
		<section className="hs-wrap section-space " style={{backgroundColor:"#f7f7f7"}}>
			<div className="container">
				<div className="hs-inner">
					<article
						className="hs-leftCard"
						style={{ "--bg-img": `url(${leftBg})` }}
					>
						<div className="hs-leftOverlay" />
						<div className="hs-leftContent electircal_leftcard">
							<span className="hs-pill font12">Integrated System</span>

							<h2 className="hs-title font48 text-white">
								Well-Managed   
								<br />
								Buildings Begin
								<br />
								with Intelligent
								 <br/>
								 Control
							</h2>

							<p className="hs-desc font18">
								Efficient buildings rely on systems that work together seamlessly. When monitoring, automation, and data insights operate in sync, facilities perform better while energy consumption stays optimized.
							</p>

							<p className="hs-desc font18">
								Our Building Management Systems provide the visibility and control needed to manage infrastructure intelligently, ensuring comfort, efficiency, and operational stability every day.
							</p>
						</div>
					</article>

					<div className="hs-rightGrid">
						<article className="hs-card" style={{ "--bg-img": `url(${img1})` }}>
							<div className="hs-cardShade" />
							<h3 className="hs-cardLabel font32">Operational Stability</h3>
						</article>

						<article className="hs-card" style={{ "--bg-img": `url(${img2})` }}>
							<div className="hs-cardShade" />
							<h3 className="hs-cardLabel font32">Energy Efficiency</h3>
						</article>

						<article
							className="hs-card hs-cardWide"
							style={{ "--bg-img": `url(${img3})` }}
						>
							<div className="hs-cardShade" />
							<h3 className="hs-cardLabel font32">Centralized Monitoring</h3>
						</article>
					</div>
				</div>

				<div
					className="service-btn-area text-center wow fadeInUp"
					data-wow-delay=".3s"
				>
					<ButtonPrimary
						text={"Schedule a Consultation"}
						url={"/contact-us"}
					/>
				</div>
			</div>
		</section>
	);
};

export default BuildingMaintenanceCardBox;
