import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function BuildingManagementSystemPage() {
	return (
		<PageWrapper
			isHeaderTop={true}
			footerType={"inner"}
			currentItemId={5}
		>
			<ServiceDetailsMain />
		</PageWrapper>
	);
}
