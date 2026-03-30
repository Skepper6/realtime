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
									<div
										className="post-header"
										style={{ flex: "1 1 0%", minWidth: 0 }}
									>
										<h6
											className="title-link"
											style={{ marginBottom: "8px", lineHeight: 1.3 }}
										>
											<Link
												href={`/resources/blogs/${id}`}
												style={{
													display: "block",
													whiteSpace: "normal",
													overflowWrap: "anywhere",
												}}
											>
												{title}
											</Link>
										</h6>
										<span className="date" style={{ marginTop: 0, lineHeight: 1.4 }}>
											{date}
										</span>
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
