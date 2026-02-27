"use client";
import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer = ({ footerType, isRtl }) => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="tj-footer-area footer-1">
			{/* <!-- start: Brand Section --> */}
			{/* {footerType === "inner" ? ( */}
			{footerType === "" ? (

				""
			) : (
				<section className="tj-brand-section">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<BrandSlider1 isFooterRtl={isRtl} />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* <!-- end: Brand Section --> */}

			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">

						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 our_office">
							<div className="footer-widget footer_logo footer1-col-4 footer-newsletter-form px-0">
								<img src="https://theskepper.com/000_Skepper_test/real/logo.png" alt="realtime_logo" />
							</div>
						</div> 

						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ">
							<div className="footer-widget footer1-col-1 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title font20">Our office</h4>
								</div>
								<div className="infos-item">
									{/* <span>Headquarters - BANGALORE</span> */}
									<p>#164,  First Floor, Jakkur-Thanisandra Road,</p>
									<p>Dr Shivarama Karanth Nagar,</p>
									<p>Bengaluru, Karnataka-560077</p>
									<Link href="tel:+919886522207">+91-9886522207</Link>
								</div>
								{/* <div className="infos-item">
									<span>Operations - Canada</span>
									<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
								</div> */}
							</div>
						</div>
						<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 resource">
							<div className="footer-widget footer1-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title font20">Quick Links</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/contact">Contact us</Link>
										</li>
										<li>
											<Link href="/contact">Privacy policy</Link>
										</li>
										{/* <li>
											<Link href="/about">Recognitions</Link>
										</li> */}
										<li>
											<Link href="/careers">
												Careers <span>New</span>
											</Link>
										</li>
										<li>
											<Link href="/blogs">Blog</Link>
										</li>
										{/* <li>
											<Link href="/team">Feedback</Link>
										</li> */}
										{/* <li>
											<Link href="/contact">Error 404</Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title font20">Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">HVAC Solutions</Link>
										</li>
										<li>
											<Link href="/services/2">Electrical Systems</Link>
										</li>
										<li>
											<Link href="/services/3">Public Health Engineering</Link>
										</li>
										<li>
											<Link href="/services/4">Annual Maintenance</Link>
										</li>
										
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-4 footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">Subscribe to our newsletter</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p className="font16">
										© {currentYear}{" "}
										<Link href="/" target="_blank" className="font16">
											{" "}
											RealTime{" "}
										</Link>{" "}
										All right reserved.
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="contact" className="font16">Privacy Policy</Link>
										</li>
										<li>
											<Link href="contact" className="font16">Terms & Conditions</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer;
