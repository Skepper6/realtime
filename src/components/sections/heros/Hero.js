"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import tjHeroStackAnimation from "@/libs/tjHeroStackAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
// import { gsap, ScrollTrigger, ScrollSmoother, SplitText } from "@/lib/gsap.config.js";
const Hero = () => {

	  const [active, setActive] = useState(false);

	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjHeroStackAnimation(".tj-hero-section", animContainerRef);
		},
		{
			scope: animContainerRef,
		}
	);


useGSAP(() => {
  // Page load animation (move up)
  gsap.to(".left-icon", {
    y: -120,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
  });

  // Scroll-trigger smooth return
  gsap.to(".left-icon", {
    y: 0,
    opacity: 1,
    ease: "power2.out", 
    scrollTrigger: {
      trigger: ".tj-hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 2.5,  // <<< slows down the motion when coming down
    },
  });
});





	 useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 200); 
  }, []);

	return (
		<div ref={animContainerRef} className="heroStack home_header">
			<div className="stackOverlay"></div>
			<section className="tj-hero-section">
				<div className="container">
					<div className="row">
						<div className="hero-wrapper">
							<div className="hero-content">
								<h1 className="hero-title text-anim font72">
									From Design to <span className="d-lg-block american_regular">Uptime</span>{" "}
									{/* <span className="active-color">Uptime</span> */}
								</h1>
								<div className="desc wow fadeInUp" data-wow-delay="0.1s">
									<h4 className=" font_45 aleo_semibold">
										Your Partner in Keeping <span className="green_text">Buildings Breathing</span>
									</h4>
								</div>
								<div className="wow fadeInUp" data-wow-delay="0.3s">
									<ButtonPrimary
										text={"Explore Projects"}
										url={"/contact"}
										className={"hero-button"}
									/>

									<ButtonPrimary
										text={"Schedule a Consultation"}
										url={"/contact"}
										className={"hero-button mx-xl-3"}
									/>
								</div>

							

								<div className="hero-shapes-1 move-anim">
									<img src="https://theskepper.com/000_Skepper_test/real/hero-1.png" alt="Shapes" />
								</div>
								<div className="hero-shapes-2 zoominout">
									<img src="https://theskepper.com/000_Skepper_test/real/hero-3.png" alt="Shapes" />
								</div>
							</div>
							<div className="hero-images-box">
								<div className="hero-images">
									<img src="https://theskepper.com/000_Skepper_test/real/design_time.jpg" alt="design_time" />
								</div>
								<div className="images-shapes move-anim-2">
									{/* <img src="/images/shapes/hero-2.png" alt="Shapes" /> */}
								</div>
								<div className="hero-circl animate_circle box_bg">
									<div className="center_box">
										<img src="https://theskepper.com/000_Skepper_test/real/header_centericon.png" />
									</div>
									 <div className={`icon-wrapper ${active ? "active" : ""}`}>
											{/* <img src="https://theskepper.com/000_Skepper_test/real/header_centericon.png" /> */}
										{/* <div className="left_icon">
											<img src="https://theskepper.com/000_Skepper_test/real/home1.png" className="icon left-icon" />
										</div>
										<div className="right_icon">
												<img src="https://theskepper.com/000_Skepper_test/real/home2.png" className="icon right-icon" />
										</div> */}
									</div>

									{/* <img src="/images/home/home1.png" />
									<img src="/images/home/home2.png" /> */}
									{/* <div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/play-text.png"
											alt="image"
										/>
										<PopupVideo>
											<Link
												className="circle glightbox video-popup"
												href="https://www.youtube.com/watch?v=MLpWrANjFbI"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero_scroll d-none d-lg-block">
					<Link className="down" href="#scroll-hero">
						<span>
							<i className="tji-arrow-bown"></i>
						</span>
						Scroll
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Hero;
