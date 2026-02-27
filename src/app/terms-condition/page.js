import TermsCondition from "../../components/layout/main/TermsCondition";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function About() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<TermsCondition />
		</PageWrapper>
	);
}
