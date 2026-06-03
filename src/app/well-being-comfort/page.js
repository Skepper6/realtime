import Wellbeing from "@/components/layout/main/Wellbeing";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Well-being & Comfort",
	description:
		"Explore how Real Time Infra designs healthier, more comfortable indoor environments through integrated building systems and performance-led engineering.",
	path: "/well-being-comfort",
	keywords: ["well-being and comfort", "indoor environment", "healthy buildings"],
});

export default function WellBeingComfortPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<Wellbeing />
		</PageWrapper>
	);
}
