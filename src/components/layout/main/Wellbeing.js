
import AboutCards from "../../sections/about/AboutCards";
import AboutBottomText from "../../sections/about/AboutBottomText";
import WhiteShape from "../../sections/WhiteShape";
import WellbeingHeader from "../../sections/wellbeing/WellbeingHeader";
import BringPhilosophy from "../../sections/wellbeing/BringPhilosophy";
import DesignBuildMaintain from "../../sections/wellbeing/DesignBuildMaintain";
import WellbeingParalax from "../../sections/wellbeing/WellbeingParalax";
import DesingThinkPlan from "../../sections/wellbeing/DesingThinkPlan";
import FieldExecution from "../../sections/wellbeing/FieldExecution";
import FieldCards from "../../sections/wellbeing/FieldCards";
import MaintenanceMonitoring from "../../sections/wellbeing/MaintenanceMonitoring";
import ComfortROI from "../../sections/wellbeing/ComfortROI";
import DesignBottomText from "../../sections/wellbeing/DesignBottomText";
import WhyMatter from "../../sections/wellbeing/WhyMatter";
import CleanAir from "../../sections/wellbeing/CleanAir";
import VoicesSlider from "../../sections/wellbeing/VoicesSlider";
import WellbeingServices from "../../sections/wellbeing/WellbeingServices";
import WellbeingCards from "../../sections/wellbeing/WellbeingCards";
import WellbeingBottomCard from "../../sections/wellbeing/WellbeingBottomCard";


const Wellbeing = () => {
    return (
        <main className="wellbeing_page">
            {/* <HeroInner title={"About"} text={"About"} /> */}
            <WellbeingHeader />
            <BringPhilosophy />
            {/* <DesignBuildMaintain /> */}
            {/* <WellbeingParalax /> */}
            {/* <DesingThinkPlan /> */}
            <CleanAir />
            {/* <FieldExecution /> */}
            {/* <FieldCards /> */}
            <MaintenanceMonitoring />
            <VoicesSlider />
            <WellbeingServices />
            {/* <ComfortROI /> */}
            {/* <WhyMatter />
            <DesignBottomText /> */}
            {/* <ComfortROI /> */}
            <WellbeingCards />
                        <WellbeingBottomCard />
            <WhiteShape />
            
            {/* <Cta1 /> */}
        </main>
    );
};

export default Wellbeing;
