import CaseStudyMain from "@/components/layout/main/CaseStudyMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function CaseStudyPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CaseStudyMain />
		</PageWrapper>
	);
}
