"use client";

import { useState } from "react";
import AnnualMaintenanceCard from "../../shared/cards/AnnualMaintenanceCard";
import BuildingMaintenanceCard from "./BuildingMaintenanceCards";


const buildingMaintenancePortfolioData = [
	{
		id: 1,
		title: "Track",
		img2: "https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_card1.jpg",
		desc: "Gain real-time visibility into HVAC, electrical, and critical systems with continuous monitoring and actionable insights.",
	},
	{
		id: 2,
		title: "Manage",
		img2: "https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_card2.jpg",
		desc: "Control and regulate building operations from a centralized platform, ensuring efficiency, comfort, and reliability.",
	},
	{
		id: 3,
		title: "Connect",
		img2: "https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_card3.jpg",
		desc: "Seamlessly integrate all essential systems to enable smooth communication, coordination, and unified performance.",
	},
	{
		id: 4,
		title: "Improve",
		img2: "https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_card4.jpg",
		desc: "Leverage data-driven insights to enhance performance, reduce energy consumption, and optimize overall system efficiency.",
	},
];

const BuildingMaintenanceFourCard = () => {
	const [currentIndex, setCurrentIndex] = useState(-1);

	return (
		<section className="project-section-three section-space grey_bg hvac_journey">
			<div className="container-fluid AnnualMaintenance_safety">
				<div className="pill_wrap text-center">
					<span className="hvacHero__pill font12">Our Approach</span>
				</div>
				<div className="pill_text_desc">
					<h2 className="aleo-semibold font48 text-center">
						The Intelligence Behind Every Systems
					</h2>
					<p>
						{/* Building maintenance is not a standalone task. It is part of a
						larger system lifecycle. Every building maintenance service plan we
						manage follows a continuous improvement loop that keeps buildings
						responsive, efficient, and future-ready. */}
					</p>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="project-wrapper-two wow fadeInUp"
							data-wow-delay="0.3s"
							onMouseLeave={() => setCurrentIndex(-1)}
						>
							{buildingMaintenancePortfolioData.map((portfolio, idx) => (
								<BuildingMaintenanceCard
									key={idx}
									portfolio={portfolio}
									handleCurrentIndex={setCurrentIndex}
									currentIndex={currentIndex}
									idx={idx}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuildingMaintenanceFourCard;
