import BuildingMaintenanceServiceMain from "@/components/layout/main/BuildingMaintenanceServiceMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function BuildingManagementServicePage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<BuildingMaintenanceServiceMain />
		</PageWrapper>
	);
}
