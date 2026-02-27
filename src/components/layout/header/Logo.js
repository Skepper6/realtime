"use client";
import Link from "next/link";

const Logo = ({ option, isStickyHeader }) => {
	const { isInnerPage, headerType, isIndexPage, isHeaderTop } = option;
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
			<img src="https://theskepper.com/000_Skepper_test/real/logo.png" />
				{/* <img
					src={`/images/home/${
						(headerType === 3 ||
							headerType === 4 ||
							headerType === 5 ||
							headerType === 6 ||
							headerType === 9) &&
						!isStickyHeader
							? "https://theskepper.com/000_Skepper_test/real/logo.png"
							: headerType === 9
							? "logo.png"
							: "logo.png"
					}  `}
					alt="logo"
				/> */}
			</Link>
		</div>
	);
};

export default Logo;
