import AnnualMaintenanceContracts from "@/components/layout/main/AnnualMaintenanceContracts";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Annual Maintenance Services",
	description:
		"Realtime Infra offers annual maintenance services for HVAC, electrical, PHE, and building systems with preventive care, monitoring, and uptime-focused support.",
	path: "/annual-maintenance-contracts",
	keywords: [
		"annual maintenance services",
		"preventive maintenance",
		"facility maintenance",
		"uptime support",
	],
});

export default function AnnualMaintenanceContractsPage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <AnnualMaintenanceContracts />
        </PageWrapper>
    );
}
