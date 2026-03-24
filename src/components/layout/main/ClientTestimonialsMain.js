import ClientTestimonialsGrid from "@/components/sections/testimonials/ClientTestimonialsGrid";
import WhiteShape from "../../sections/WhiteShape";

const ClientTestimonialsMain = () => {
	return (
		<main className="client-testimonials-page">
			<header className="rt-hero-career client-testimonials-hero">
				<img
					className="rt-hero__b"
					src="https://skepper.in/000_Skepper_test/real/testimonial/testimonial.jpg"
					alt="Client testimonials hero"
				/>
				<div className="rt-hero__shade" />

				<div className="container">
					<div className="top_bar">
						<div className="rt-hero__content">
							<span className="hvacHero__pill font12">Client Testimonials</span>

							<h1 className="rt-hero__title font72 sec-title text-anim mw-100">
								Success Stories
								<br />
								Like Yours
							</h1>

							<p
								className="rt-hero__desc font18 desc wow fadeInUp"
								data-wow-delay="0.3s"
							>
								Our client's experiences reflect the quality and care behind
								our work. Hear how our solutions have made a difference across
								real facilities.
							</p>
						</div>
					</div>
				</div>
			</header>

			<ClientTestimonialsGrid />
			{/* <WhiteShape /> */}
		</main>
	);
};

export default ClientTestimonialsMain;
