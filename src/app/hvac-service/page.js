import HVACServiceMain from "@/components/layout/main/HVACServiceMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "HVAC Solutions",
	description:
		"Realtime Infra designs, installs, and optimizes HVAC systems for healthier air, efficient climate control, and reliable building performance.",
	path: "/hvac-service",
	keywords: ["HVAC solutions", "HVAC design", "HVAC maintenance"],
});

export default function About() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<HVACServiceMain />
		</PageWrapper>
	);
}
