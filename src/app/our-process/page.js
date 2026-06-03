import DesignUpTime from "@/components/layout/main/DesignUpTime";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Our Process",
	description:
		"See how Real Time Infra takes projects from design and planning through installation, monitoring, and long-term uptime support.",
	path: "/our-process",
	keywords: ["our process", "project delivery", "design to uptime"],
});

export default function OurProcessPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<DesignUpTime />
		</PageWrapper>
	);
}
