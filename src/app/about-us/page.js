import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function AboutUsPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<AboutMain />
		</PageWrapper>
	);
}
