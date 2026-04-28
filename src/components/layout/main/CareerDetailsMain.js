"use client";

import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import BlogWhiteSpace from "@/components/sections/blogs/BlogWhiteSpace";
import { useCurrentItem } from "@/context_api/CurrentItemContext";
import getCareers from "@/libs/getCareers";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const CareerDetailsMain = () => {
	const items = getCareers();
	const currentId = useCurrentItem();
	const { currentItem } = getPreviousNextItem(items, currentId);
	const { title } = currentItem || {};

	return (
		<main className="blog_page blog_detail_page career_detail_page">
			<header
				className="rt-hero-career privacy_sec blog_detail_header"
				style={{ backgroundColor: "#051229" }}
			>
				<div className="container">
					<div className="top_bar">
						<div className="rt-hero__content">
							<h1 className="rt-hero__title font72 sec-title text-anim">
								{title || "Career details"}
							</h1>
						</div>
					</div>
				</div>
			</header>
			<CareerDetails1 />
			<BlogWhiteSpace />
		</main>
	);
};

export default CareerDetailsMain;
