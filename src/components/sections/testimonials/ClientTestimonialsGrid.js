"use client";

import TestimonialsCard4 from "@/components/shared/cards/TestimonialsCard4";
import getClientTestimonials from "@/libs/getClientTestimonials";
import { useEffect, useRef, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_STEP = 2;

const ClientTestimonialsGrid = () => {
	const testimonials = getClientTestimonials();
	const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
	const scrollTargetIndexRef = useRef(null);

	useEffect(() => {
		if (scrollTargetIndexRef.current === null) {
			return undefined;
		}

		const target = document.querySelector(
			`[data-client-testimonial-index="${scrollTargetIndexRef.current}"]`
		);

		if (!target) {
			scrollTargetIndexRef.current = null;
			return undefined;
		}

		const frame = window.requestAnimationFrame(() => {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			scrollTargetIndexRef.current = null;
		});

		return () => window.cancelAnimationFrame(frame);
	}, [visibleCount]);

	const visibleTestimonials = testimonials.slice(0, visibleCount);
	const hasMoreTestimonials = visibleCount < testimonials.length;

	const handleLoadMore = () => {
		if (!hasMoreTestimonials) {
			return;
		}

		scrollTargetIndexRef.current = visibleCount;
		setVisibleCount(currentCount =>
			Math.min(currentCount + LOAD_MORE_STEP, testimonials.length)
		);
	};

	return (
		<section className="client-testimonials-grid-section">
			<div className="container">
				<div className="client-testimonials-grid">
					{visibleTestimonials.map((testimonial, index) => (
						<div
							className="client-testimonials-grid__item"
							key={testimonial.id}
							data-client-testimonial-index={index}
						>
							<TestimonialsCard4 testimonial={testimonial} />
						</div>
					))}
				</div>

				{hasMoreTestimonials ? (
					<div
						className="client-testimonials-load-more-wrap wow fadeInUp "
						data-wow-delay="0.4s"
					>
						<ButtonPrimary
							text={"Load More"}
							type="button"
							className={"hero-button bg-white"}
							onClick={handleLoadMore}
						/>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default ClientTestimonialsGrid;
