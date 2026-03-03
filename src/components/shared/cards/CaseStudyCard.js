import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";

const CaseStudyCard = ({ caseStudy, idx }) => {
	const { title, excerpt, image, service, industry, path } = caseStudy || {};

	return (
		<div
			className="blog-style-2 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-images">
				<img src={image ? image : "/images/project/portfolio1.jpg"} alt={title} />
			</div>
			<div className="blog-content">
				<div className="blog-two-meta">
					<ul>
						<li>
							<Link className="meta-link" href={path ? path : "/portfolios"}>
								{service ? service : "Service"}
							</Link>
						</li>
						<li>{industry ? industry : "Case Study"}</li>
					</ul>
				</div>
				<h4 className="title under-line">
					<Link href={path ? path : "/portfolios"}>
						{title ? title : "Case Study"}
					</Link>
				</h4>
				<div className="desc">
					<p>{excerpt ? excerpt : "Explore project execution and outcomes."}</p>
				</div>
				<div className="blog-button">
					<ButtonPrimary text={"View Case Study"} url={path ? path : "/portfolios"} />
				</div>
			</div>
		</div>
	);
};

export default CaseStudyCard;
