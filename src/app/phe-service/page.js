import PHEService from "@/components/layout/main/PHEService";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function PHEServicePage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <PHEService />
        </PageWrapper>
    );
}
