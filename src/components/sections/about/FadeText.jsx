import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

import Link from "next/link";

const FadeText = () => {
	return (
		<section className="h6-about-section section-space fade_text">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h6-about-content">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									{/* // NUMBE #1 SOLVER */}
								</span>
								<h2 className="sec-title tj-text-invert">
									<span className="d-lg-block">From hospitals and IT campuses to hospitality,</span> <span className="d-lg-block">education, and industrial environments,</span> our work has grown, not by volume, but by trust.
								</h2>
							</div>
						
							
						</div>
					</div>
				</div>
			
			</div>
		</section>
	);
};

export default FadeText;
