import WhiteShape from "@/components/sections/WhiteShape";
import PrivacyPolicyMain from "../../components/layout/main/PrivacyPolicyMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function About() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PrivacyPolicyMain />
		</PageWrapper>
	);
}
