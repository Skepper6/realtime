import ElectricalSystemsService from "@/components/layout/main/ElectricalSystemsService";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Electrical Systems",
	description:
		"Realtime Infra engineers electrical systems that deliver safe power distribution, efficient performance, and dependable infrastructure for modern buildings.",
	path: "/electrical-systems-service",
	keywords: [
		"electrical systems",
		"power distribution",
		"electrical infrastructure",
	],
});

export default function ElectricalSystemsServicePage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <ElectricalSystemsService />
        </PageWrapper>
    );
}
