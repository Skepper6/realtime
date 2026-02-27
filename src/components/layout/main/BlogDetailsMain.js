"use client";
import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import WhiteShape from "@/components/sections/WhiteShape";
import sliceText from "@/libs/sliceText";
import { useState } from "react";
import { useCurrentItem } from "@/context_api/CurrentItemContext";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const BlogDetailsMain = () => {
	const [titleState, setCurrentTitle] = useState(""); // Renamed to titleState to avoid conflict

	const items = getBlogs();
	const currentId = useCurrentItem();
	const { currentItem } = getPreviousNextItem(items, currentId);
	const { title, detailsImg } = currentItem || {};
	return (
		<main>

			<header className="rt-hero-career privacy_sec blog_detail_header ">
				{/* Background image */}
				<img
					className="rt-hero__b"
					src={detailsImg ? detailsImg : "https://theskepper.com/000_Skepper_test/real/career_header.jpg"}
					alt="Career image"
				/>

				{/* Existing Gradient Shade */}
				<div className="rt-hero__shade" />

				<div className="container">
					<div className="top_bar">
						{/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
						<div className="rt-hero__content">
							{/* <span className="hvacHero__pill font12">Blog Detail</span> */}

							<h1 className="rt-hero__title font72 sec-title text-anim">
								{title}
							</h1>

							{/* <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
								his policy explains how we collect, use,<br /> and safeguard your data.
							</p> */}

						</div>
					</div>
				</div>
			</header>
			<BlogDetailsPrimary setCurrentTitle={setCurrentTitle} />
			<WhiteShape />
			{/* <Cta1 /> */}
		</main>
	);
};

export default BlogDetailsMain;
