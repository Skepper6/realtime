import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import sliceText from "@/libs/sliceText";
import Link from "next/link";

const BlogCard2 = ({ blog, type, isSidebar, idx }) => {
	const { title, desc, id, img2, detailsImg } = blog || {};
	const excerpt = desc
		? sliceText(
				desc
					.replace(/<[^>]+>/g, " ")
					.replace(/\s+/g, " ")
					.trim(),
				150,
				true
		  )
		: "";
	return (
		<div
			className={`blog-style-2  ${type === 2 ? "wow fadeInUp" : "left-swipe"}`}
			data-wow-delay={
				type === 2
					? `0.${
							isSidebar ? (idx % 2) + 1 + (idx % 2) : (idx % 3) + 1 + (idx % 3)
					  }s`
					: "0s"
			}
		>
			<div className="blog-images">
				<img
					src={
						type === 2 && detailsImg
							? detailsImg
							: img2
							? img2
							: "/images/blog/h2-blog-1.webp"
					}
					alt="Images"
				/>
				{/* <div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div> */}
			</div>
			<div className="blog-content">
				<div className="blog-two-meta">
					{/* <ul>
						<li>
							<Link
								className="meta-link"
								href={`/resources/blogs?category=${makePath(category)}`}
							>
								{category}
							</Link>
						</li>
						<li>03 Comments</li>
					</ul> */}
				</div>
				<h4 className="title under-line">
					<Link href={`/resources/blogs/${id}`}>{title}</Link>
				</h4>
				<div className="desc">
					<p>{excerpt}</p>
				</div>
				<div className="blog-button">
					<ButtonPrimary url={`/resources/blogs/${id}`} text={"Read More"} />
				</div>
			</div>
		</div>
	);
};

export default BlogCard2;
