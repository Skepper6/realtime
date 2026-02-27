import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CareerCard = ({ careerSingle, idx }) => {
	const { title, iconName, price, location, duration, category, need, id } =
		careerSingle || {};

	return (
		// Added "career-card-wrapper" parent class for custom CSS scoping
		<div
			className="tj-careers career-card-wrapper wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="tj-careers-icon mb-30">
				<img src={"https://theskepper.com/000_Skepper_test/real/green_logo.png"} alt="logo" />
			</div>
			
			<div className="tj-careers-tag">
				<span>{category}</span> <span>{need}</span>
			</div>
			
			<h4 className="tj-careers-title font24 aleo_semibold">
				<Link href={`/careers/${id}`}>{title}</Link>
			</h4>
			
			<div className="tj-careers-salary font18">
				<span>{price}</span> / {duration}
			</div>
			
			<div className="tj-careers-bottom">
				<span className="location">
					{/* <i className="tji-location"></i> */}
					{location}
				</span>
				
				{/* Simplified logic: Removed redundant outer Link wrapper to prevent nested links */}
				<div className="btn-text">
					<div className="wow fadeInUp" data-wow-delay="0.4s">
						<ButtonPrimary 
							text={"Apply now"} 
							url={`/careers/${id}`} 
							className={"hero-button career-apply-btn"} 
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerCard;