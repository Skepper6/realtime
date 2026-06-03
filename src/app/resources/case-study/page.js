import CaseStudyMain from "@/components/layout/main/CaseStudyMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Case Study",
	description:
		"Browse Real Time Infra case studies to see how integrated engineering decisions improve comfort, efficiency, reliability, and uptime.",
	path: "/resources/case-study",
	keywords: ["case study", "project outcomes", "building performance"],
});

export default function ResourceCaseStudyPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CaseStudyMain />
		</PageWrapper>
	);
}
