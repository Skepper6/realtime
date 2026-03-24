const TestimonialsCard4 = ({ testimonial }) => {
	const {
		profile,
		name,
		companyName,
		desc,
		img,
		authorName,
		authorDesig,
		logoImg,
		logoImgLight,
	} = testimonial ? testimonial : {};

	const imageSrc = profile || img || "/images/testimonial/h1-test-1.webp";
	const displayName = name || authorName;
	const displayCompanyName = companyName || authorDesig;

	return (
		<div className="h5-testimonial-item">
			<div className="content">
				<div className="author-content">
					<div className="author-rating">
						<div className="star-ratings">
							<div className="fill-ratings" style={{ width: "100%" }}>
								<span>{"\u2605\u2605\u2605\u2605\u2605"}</span>
							</div>
							<div className="empty-ratings">
								<span>{"\u2605\u2605\u2605\u2605\u2605"}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="desc">
					<p>{desc}</p>
				</div>
			</div>
			<div className="author">
				<div className="author-media">
					<img
						className="author-shape"
						src="/images/shapes/client-testimonial-author-mask.svg"
						alt=""
						aria-hidden="true"
					/>
					<div className="author-images">
						<img src={imageSrc} alt={displayName || "Profile"} />
					</div>
				</div>
				<div className="author-content">
					<div className="author-text">
						<h4 className="author-name">{displayName}</h4>
						<span className="sub-title">{displayCompanyName}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard4;
