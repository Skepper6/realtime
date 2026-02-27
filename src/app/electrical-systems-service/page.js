import ElectricalSystemsService from "@/components/layout/main/ElectricalSystemsService";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function ElectricalSystemsServicePage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <ElectricalSystemsService />
        </PageWrapper>
    );
}
