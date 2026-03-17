import CaseStudyMain from "@/components/layout/main/CaseStudyMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function ResourceCaseStudyPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CaseStudyMain />
		</PageWrapper>
	);
}
