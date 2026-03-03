"use client";

import WhiteShape from "@/components/sections/WhiteShape";
import CaseStudiesPrimary from "@/components/sections/case-study/CaseStudiesPrimary";
import CaseStudyHeader from "@/components/sections/case-study/CaseStudyHeader";

const CaseStudyMain = () => {
	return (
		<main>
			<CaseStudyHeader />
			<CaseStudiesPrimary />
			<WhiteShape />
		</main>
	);
};

export default CaseStudyMain;
