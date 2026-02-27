import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<section className="tj-counter-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp green_text" data-wow-delay="0.1s">
								facts
							</span>
							<h2 className="sec-titl text-anim blue_text aleo_semibold">
								<span className="d-lg-block blue_text ">Built for People,</span> Designed for Wellbeing
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="counter-wrapper">
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={60} symbol={"%"} className="american_semibold" />
								<span className="sub-title"><span className="d-lg-block">Reduction in PM2.5</span> after IAQ optimization</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={95} symbol={"%"} />
								<span className="sub-title">Occupant comfort satisfaction</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={98} symbol={"%"} />
								<span className="sub-title">System uptime achieved</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={100} isSup={"+"} />
								<span className="sub-title"><span className="d-lg-block">WELL / LEED / IGBC</span> certified projects</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
