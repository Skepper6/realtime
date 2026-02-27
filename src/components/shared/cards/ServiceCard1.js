import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard1 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, img, svg } = service || {};
	return (
		<div className={`service-item ${idx < lastItem ? "service-stack" : ""}`}>
			<div className="service-content">
				<div className="service-number">
					{/* <span className="active">1</span> */}
					{/* <span>/{idx + 1}</span> */}
				</div>
				<div className="service-text">
					<div className="service-icons">
						<img
							src={svg ? svg : "assets/images/icons/service-1.svg"}
							alt="Icons"
						/>
					</div>
					<h3 className="title">
						<Link href={`/services/${id}`} className="aleo_semibold"> {title.split("\n").map((line, i) => (
						<span key={i} className="aleo_semibold">
							{line}
							<br />
						</span>
						))}</Link>
						
					</h3>
					<div className="desc">
						<p className="aleo_regular">{desc}</p>
					</div>
					<ButtonPrimary
						text={"Get started"}
						url={`/services/${id}`}
						className={"service-btn"}
					/>
				</div>
			</div>
			<div className="service-images hover:shine">
				<img
					src={img ? img : "/images/service/h1-service-1.webp"}
					alt="Images"
				/>
			</div>
		</div>
	);
};

export default ServiceCard1;
