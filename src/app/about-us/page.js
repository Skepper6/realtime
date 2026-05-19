import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "About Us",
	description:
		"Learn how Real Time Infra takes buildings from design to uptime through engineering, execution, maintenance, and continuous optimization.",
	path: "/about-us",
	keywords: ["about Real Time Infra", "MEP engineering", "design to uptime"],
});

export default function AboutUsPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<AboutMain />
		</PageWrapper>
	);
}
