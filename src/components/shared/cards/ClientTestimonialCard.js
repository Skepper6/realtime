const ClientTestimonialCard = ({ testimonial, index }) => {
	const { authorName, authorDesig, image, quote } = testimonial || {};

	return (
		<article
			className="client-testimonial-card"
			data-client-testimonial-index={index}
			style={{ "--client-card-index": index }}
		>
			<div className="client-testimonial-card__rating" aria-label="5 star rating">
				{iArr.map(star => (
					<i key={star} className="fa-solid fa-star"></i>
				))}
			</div>

			<blockquote className="client-testimonial-card__quote">
				<p>"{quote}"</p>
			</blockquote>

			<div className="client-testimonial-card__author">
				<div className="client-testimonial-card__avatar">
					<img src={image || "/images/testimonial/h6-test-1.webp"} alt={authorName} />
				</div>
				<div className="client-testimonial-card__author-text">
					<h3>{authorName}</h3>
					<p>{authorDesig}</p>
				</div>
			</div>
		</article>
	);
};

const iArr = [1, 2, 3, 4, 5];

export default ClientTestimonialCard;
