import BuildingMaintenanceServiceMain from "@/components/layout/main/BuildingMaintenanceServiceMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Building Management System",
	description:
		"Realtime Infra integrates HVAC, electrical, and critical infrastructure into building management systems for real-time monitoring, automation, and smarter control.",
	path: "/building-management-service",
	keywords: [
		"building management system",
		"BMS automation",
		"building automation",
		"smart building control",
	],
});

export default function BuildingManagementServicePage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<BuildingMaintenanceServiceMain />
		</PageWrapper>
	);
}
