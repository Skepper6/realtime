const TestimonialsCard1 = ({ testimonial }) => {
	const {
		authorName,
		authorDesig,
		desc,
		img,
		profile,
		name,
		companyName,
	} =
		testimonial ? testimonial : {};

	const imageSrc = profile || img || "/images/testimonial/h1-test-1.webp";
	const displayName = name || authorName;
	const displayDesignation = companyName || authorDesig;
	return (
		<div className="testimonial-item">
			<div className="testimonial-content">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p>{desc}</p>
				</div>
			</div>
			<div className="tj-testimonial-author">
				<div className="author-images">
					<img src={imageSrc} alt={displayName || "Client"} />
				</div>
				<div className="author-content">
					<div className="author-rating">
						<div className="star-ratings">
							<div className="fill-ratings" style={{ width: "100%" }}>
								<span>★★★★★</span>
							</div>
							<div className="empty-ratings">
								<span>★★★★★</span>
							</div>
						</div>
					</div>
					<div className="author-text">
						<h4 className="author-name">{displayName}</h4>
						<span className="sub-title">{displayDesignation}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard1;
