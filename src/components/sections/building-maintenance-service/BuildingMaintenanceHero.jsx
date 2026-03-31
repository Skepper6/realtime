"use client";

import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

export default function BuildingMaintenanceHero() {
	const [draw, setDraw] = useState(false);

	useEffect(() => {
		const raf = requestAnimationFrame(() => setDraw(true));

		return () => {
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<header className="rt-hero">
			<img
				className="rt-hero__bg"
				src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_header.jpg"
				alt="Building maintenance unit"
			/>
			<div className="rt-hero__shade" />

			<div className="container">
				<div className="top_bar">
					<div
						className={`rt-hero__frame ${draw ? "is-draw" : ""}`}
						aria-hidden="true"
						style={{ zIndex: 2 }}
					>
						<svg
							className="rt-hero__frameSvg"
							viewBox="0 0 1000 600"
							preserveAspectRatio="none"
						>
							<line
								className="rt-line rt-line--top"
								x1="120"
								y1="120"
								x2="880"
								y2="120"
							/>
							<line
								className="rt-line rt-line--rightTop"
								x1="880"
								y1="120"
								x2="880"
								y2="200"
							/>
							<line
								className="rt-line rt-line--bottom"
								x1="120"
								y1="540"
								x2="880"
								y2="540"
							/>
							<line
								className="rt-line rt-line--rightBottom"
								x1="880"
								y1="540"
								x2="880"
								y2="465"
							/>
						</svg>
						<div className="sanim_img">
							<img
								className="rt-floatIcon rt-floatIcon--down"
								src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_white.png"
								alt=""
							/>
							<img
								className="rt-floatIcon rt-floatIcon--up"
								src="https://skepper.in/000_Skepper_test/real/building%20maintanance/bms_green.png"
								alt=""
							/>
						</div>
					</div>

					<div className="rt-hero__content" style={{ zIndex: 3, position: "relative" }}>
						<span className="hvacHero__pill font12">
							Building Management System
						</span>
						<h1 className="rt-hero__title font72 sec-title text-anim">
							Smarter Buildings.
							<br />
							Complete Control
						</h1>
						<p className="rt-hero__desc font18 desc">
							Centralize and monitor your building’s critical systems with intelligent automation that improves efficiency, safety, and operational stability.
						</p>
						<div className="mt-4">
							<ButtonPrimary
								text={"Consult Now"}
								url={"/contact-us"}
								className={"hero-button"}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
