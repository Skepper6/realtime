const CaseStudyHeader = () => {
	return (
		<header className="rt-hero-career">
			<img
				className="rt-hero__b"
				src="/images/project/portfolio1.jpg"
				alt="Case study cover"
			/>
			<div className="rt-hero__shade" />

			<div className="container">
				<div className="top_bar">
					<div className="rt-hero__content">
						<span className="hvacHero__pill font12">Case Study</span>

						<h1 className="rt-hero__title font72 sec-title text-anim">
							Engineering Performance.
							<br />
							Delivered in the Real World.
						</h1>

						<p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
							From concept planning to execution and maintenance, each project
							reflects practical, measurable outcomes.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default CaseStudyHeader;
