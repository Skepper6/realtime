"use client";

import ButtonPrimary from "../../../components/shared/buttons/ButtonPrimary";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BuildingMaintenanceTeamTrust = () => {
	const slides = ["https://skepper.in/000_Skepper_test/real/building%20maintanance/smart_systems.jpg"];

	return (
		<section className="tj-about-info section-space built_sec">
			<div className="container-fluid">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div>
							<Swiper
								modules={[Autoplay]}
								loop
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
									pauseOnMouseEnter: true,
								}}
								speed={900}
								slidesPerView={1}
								spaceBetween={0}
							>
								{slides.map((src, i) => (
									<SwiperSlide key={i}>
										<div className="swiper_img_container">
											<img
												src={src}
												alt={`slide-${i + 1}`}
												className="swiper_img"
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					<div className="col-lg-6 col-md-12 AnnualMaintenance_automation">
						<div className="pricing-left-content ">
							<div className="sec-heading mb-0">
								<h2 className="sec-title text-anim">
									Smarter Systems.
									<span className="d-xl-block d-block">
									Better Buildings.
									</span>
								</h2>
								<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
									<p>
										A Building Management System brings HVAC, electrical, and essential services into one intelligent platform.
									</p>
									<p>
										With centralized visibility and automated control, facilities operate more efficiently, respond faster, and maintain consistent performance across every zone.
									</p>
								</div>
								<div className="about-button">
									<ButtonPrimary url="/contact-us" text={"Contact Us"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuildingMaintenanceTeamTrust;
