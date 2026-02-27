"use client";
import Link from "next/link";

const PortfolioCard3 = ({
	portfolio,
	handleCurrentIndex,
	currentIndex,
	idx,
}) => {
	const { title, img2, id, tags, desc } = portfolio ? portfolio : {};

	return (
		<div
			className={`project-style-3 card-accordion  ${currentIndex === idx ? "active" : ""}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div className="project-thumb">
				<div className="image">
					<img
						src={img2 ? img2 : "assets/images/project/h2-project-1.webp"}
						alt="Images"
					/>
					/
				</div>
				<div className="project-default-content">
					<span>
						<i className="tji-arrow-right"></i>
					</span>
					<h3 className="title font48 sec-title aleo_semibold">{title}</h3>
				</div>
			</div>
			<div className="project-content-box">
				{/* <div className="project-tags">
					<ul>
						{tags?.length
							? tags?.map((tag, idx) => (
									<li key={idx + 11}>
										<Link key={100 + idx} href={`/portfolios`}>
											{tag}
										</Link>
									</li>
							  ))
							: ""}
					</ul>
				</div> */}
				<div className="project-text">
					<h3 className="title font48 sec-title aleo_semibold">
						{/* <Link href={`/portfolios/${id}`}> */}
						{title}
						{/* </Link> */}
					</h3>
					<div className="desc">
						<p className="font18">
							{desc}
						</p>
					</div>
					{/* <div className="project-button">
						<Link className="project-btn text-btn" href={`/portfolios/${id}`}>
							Learn more <i className="tji-arrow-right"></i>
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard3;
