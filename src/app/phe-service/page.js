import PHEService from "@/components/layout/main/PHEService";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Public Health Engineering",
	description:
		"Realtime Infra provides public health engineering services for water supply, drainage, sewage, and wastewater systems that support safe, efficient building operations.",
	path: "/phe-service",
	keywords: [
		"public health engineering",
		"PHE services",
		"water supply systems",
		"drainage systems",
	],
});

export default function PHEServicePage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <PHEService />
        </PageWrapper>
    );
}
