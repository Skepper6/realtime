"use client";

import FeatureCard from "@/components/shared/cards/FeatureCard";
import tjSvgAnimation from "@/libs/tjSvgAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Features = ({ type }) => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjSvgAnimation(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	const features = [
		{
			title: "HVAC Solutions",
			desc: "Crafting intelligent climate systems that breathe comfort into every zone.",
			icon: (
				 <>
			{/* <img src="images/home/green_bg.png" alt="" className="w-100" /> */}
					<img src="https://theskepper.com/000_Skepper_test/real/hvac.svg" />
			{/* <div className="icon_wrapper">
				<svg
				width="30"
				height="48"
				viewBox="0 0 36 58"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
				d="M35.6595 9.91122V6.00122C23.2695 6.00122 13.1895 16.0812 13.1895 28.4712C13.1895 40.8612 23.2695 50.9412 35.6595 50.9412V47.0312C25.4295 47.0312 17.0995 38.7012 17.0995 28.4712C17.0995 18.2412 25.4295 9.91122 35.6595 9.91122Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_0"
				/>
				<path
				d="M8.35923 9.06109L13.6792 13.5311C14.0492 13.8411 14.4892 13.9911 14.9392 13.9911C15.4992 13.9911 16.0492 13.7511 16.4392 13.2911C17.1292 12.4611 17.0292 11.2311 16.1992 10.5311L10.8792 6.06109C10.0492 5.36109 8.81923 5.47109 8.11923 6.30109C7.42923 7.13109 7.52923 8.36109 8.35923 9.06109Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_1"
				/>
				<path
				d="M10.87 28.5911C10.87 27.5111 9.99 26.6311 8.91 26.6311H1.96C0.88 26.6311 0 27.5111 0 28.5911C0 29.6711 0.88 30.5511 1.96 30.5511H8.91C9.99 30.5511 10.87 29.6711 10.87 28.5911Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_2"
				/>
				<path
				d="M19.3707 46.8311C18.5407 46.1311 17.3107 46.2411 16.6107 47.0711L12.1407 52.3911C11.4507 53.2211 11.5507 54.4511 12.3807 55.1511C12.7507 55.4611 13.1907 55.6111 13.6407 55.6111C14.2007 55.6111 14.7507 55.3711 15.1407 54.9111L19.6107 49.5911C20.3007 48.7611 20.2007 47.5311 19.3707 46.8311Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_3"
				/>
				<path
				d="M23.6695 5.21114C23.9695 5.99114 24.7095 6.47114 25.4995 6.47114C25.7295 6.47114 25.9695 6.43115 26.1995 6.34115C27.2095 5.95115 27.7195 4.82114 27.3295 3.81114L26.3595 1.26115C25.9695 0.251145 24.8395 -0.258856 23.8295 0.131144C22.8195 0.521144 22.3095 1.65114 22.6995 2.66114L23.6695 5.21114Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_4"
				/>
				<path
				d="M7.10955 21.111L9.68955 22.001C9.89955 22.071 10.1195 22.111 10.3295 22.111C11.1395 22.111 11.8995 21.601 12.1795 20.791C12.5295 19.771 11.9896 18.651 10.9696 18.301L8.38955 17.411C7.36955 17.061 6.24955 17.601 5.89955 18.621C5.54955 19.641 6.08955 20.761 7.10955 21.111Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_5"
				/>
				<path
				d="M12.429 37.0812C12.039 36.0712 10.909 35.5612 9.89903 35.9512L7.34903 36.9212C6.33903 37.3112 5.82904 38.4412 6.21904 39.4512C6.51904 40.2312 7.25903 40.7112 8.04903 40.7112C8.27903 40.7112 8.51903 40.6712 8.74903 40.5812L11.299 39.6112C12.309 39.2212 12.819 38.0912 12.429 37.0812Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_6"
				/>
				<path
				d="M26.8792 51.0912C25.8592 50.7412 24.7392 51.2812 24.3892 52.3012L23.4992 54.8812C23.1492 55.9012 23.6892 57.0212 24.7092 57.3712C24.9192 57.4412 25.1392 57.4812 25.3492 57.4812C26.1592 57.4812 26.9192 56.9712 27.1992 56.1612L28.0892 53.5812C28.4392 52.5612 27.8992 51.4412 26.8792 51.0912Z"
				stroke="currentColor"
				strokeWidth="1"
				className="icon_7"
				/>
		</svg>
			
		  <svg
  width="30"
  height="63"
  viewBox="0 0 30 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M28.2 43.99L23.25 41.13L26.8 40.5C28 40.29 28.8 39.14 28.58 37.94C28.37 36.74 27.22 35.94 26.02 36.16L17.31 37.71L12.78 35.1C13.23 33.87 13.46 32.57 13.46 31.24C13.46 30.09 13.28 28.96 12.94 27.87L17.3 25.35L26.01 26.9C26.14 26.92 26.27 26.93 26.4 26.93C27.45 26.93 28.38 26.18 28.57 25.11C28.78 23.91 27.98 22.77 26.79 22.55L23.24 21.92L28.19 19.06C29.24 18.45 29.61 17.1 29 16.05C28.39 14.99 27.04 14.63 25.99 15.24L21.04 18.1L22.27 14.71C22.68 13.56 22.09 12.3 20.95 11.89C19.81 11.48 18.54 12.07 18.13 13.21L15.12 21.53L10.85 24C9.2 22.04 6.93 20.69 4.42 20.19V14.77L10.12 8.01C10.9 7.08 10.79 5.69 9.85 4.9C8.92 4.12 7.53 4.23 6.74 5.17L4.42 7.93V2.21C4.42 0.989999 3.43 0 2.21 0C0.989999 0 0 0.989999 0 2.21V13.93C0 13.93 0 13.96 0 13.97V48.52C0 48.52 0 48.55 0 48.56V60.28C0 61.5 0.989999 62.49 2.21 62.49C3.43 62.49 4.42 61.5 4.42 60.28V54.56L6.74 57.32C7.18 57.84 7.8 58.1 8.43 58.1C8.93 58.1 9.44 57.93 9.85 57.58C10.78 56.8 10.9 55.4 10.12 54.47L4.42 47.71V42.29C6.77 41.83 8.89 40.63 10.51 38.86L15.12 41.52L18.13 49.84C18.45 50.74 19.3 51.3 20.2 51.3C20.45 51.3 20.7 51.26 20.95 51.17C22.1 50.76 22.69 49.49 22.27 48.35L21.04 44.96L25.99 47.82C26.34 48.02 26.72 48.12 27.09 48.12C27.85 48.12 28.59 47.72 29 47.02C29.61 45.97 29.25 44.62 28.19 44.01L28.2 43.99ZM4.41 37.73V24.74C6.02 25.29 7.4 26.42 8.24 27.97C8.79 28.97 9.06 30.07 9.06 31.23C9.06 32.5 8.71 33.75 8.05 34.82C7.19 36.21 5.9 37.22 4.41 37.73Z"
    fill="#81C165"          // original green
    stroke="#81C165"        // keep same color for stroke animation
    strokeWidth="1"
    className="GZoqilTp_0"
  />
</svg>
			</div> */}
  </>
			),
		},
		{
			title: "Public Health Engineering ",
			desc: "Delivering clean, reliable water and sanitation systems that sustain wellness.",
			icon: (
				<img src="https://theskepper.com/000_Skepper_test/real/phe.svg" />
			),
		},
		{
			title: "Electrical Systemsss",
			desc: "Powering your spaces with safe, efficient, and scalable energy design.",
			icon: (
						<img src="https://theskepper.com/000_Skepper_test/real/es.svg" />

			),
		},
		{
			title: "Annual Maintenance ",
			desc: "Preventive care and proactive monitoring for guaranteed uptime.",
			icon: (
			 <>
			 						<img src="https://theskepper.com/000_Skepper_test/real/am.svg" />

		{/* <img src="images/home/green_bg.png" alt="" className="w-100" />
	 
		<div className="icon_wrapper">
		<img src="images/home/icon1.svg" alt="" />
		<img src="images/home/icon01.svg" alt="" /> */}
		{/* </div> */}
  </>
			),
		},
	];

	return (
		<section
			ref={animContainerRef}
			className={`tj-feature-section  ${type === 2 ? "" : "with-shape"} home_feature`}
			id="scroll-hero"
		>
			<div
				className={`tj-feature-section-wrap ${
					type === 2 ? "section-bottom-space" : "section-space"
				}`}
			>
				<div className="container">
					{type === 2 ? (
						""
					) : (
						<div className="row">
							<div className="col-12">
								<div className="sec-heading text-center ">
									<span
										className="sub-title wow fadeInUp green_text"
										data-wow-delay="0.1s"
									>
										REALTIME INTEGRATED INFRATECH
									</span>
									<h2 className="sec-title text-anim aleo_semibold">
										Our Expertise: Engineering What Matters Most
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p className="aleo_regular">
											Every great space needs systems that think ahead. We bring performance, precision, and peace of mind across every layer of building infrastructure.
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className="row rg-30">
						{features.map((feature, idx) => (
							<div key={idx} className="col-lg-6 col-xl-3 col-sm-6">
								<FeatureCard feature={feature} idx={idx} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Features;
