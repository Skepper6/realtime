import getBlogs from "@/libs/getBlogs";
import Link from "next/link";

const RecentBlogWidget = () => {
	const recentBlogs = getBlogs()
		?.filter(({ isBlogQuote }) => !isBlogQuote)
		?.slice(0, 3);

	return (
		<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.3s">
			<h5 className="tj-sidebar-widget-title">Recent Post</h5>
			<div className="sidebar-recent-post">
				{recentBlogs?.length
						? recentBlogs?.map(
							({ id, detailsImg, title, date }, idx) => (
								<div
									key={idx}
									className="single-post d-flex align-items-start"
								>
									<div className="post-image">
										<Link href={`/resources/blogs/${id}`}>
											<img
												src={
													detailsImg
														? detailsImg
														: "/images/blog/tj-blog-1.webp"
												}
												alt="blog-image"
											/>
										</Link>
									</div>
									<div className="post-header recent-post-copy">
										<h6 className="title-link">
											<Link href={`/resources/blogs/${id}`}>
												{title}
											</Link>
										</h6>
										<span className="date">{date}</span>
									</div>
								</div>
							)
					  )
					: ""}
			</div>
		</div>
	);
};

export default RecentBlogWidget;
