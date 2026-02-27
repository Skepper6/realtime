import AnnualMaintenanceContracts from "@/components/layout/main/AnnualMaintenanceContracts";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function AnnualMaintenanceContractsPage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <AnnualMaintenanceContracts />
        </PageWrapper>
    );
}
