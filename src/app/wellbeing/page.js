import Wellbeing from "@/components/layout/main/Wellbeing";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function WellbeingPage() {
    return (
        <PageWrapper isHeaderTop={true} footerType={"inner"}>
            <Wellbeing />
        </PageWrapper>
    );
}
