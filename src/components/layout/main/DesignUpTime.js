

import AboutCards from "../../sections/about/AboutCards";
import AboutBottomText from "../../sections/about/AboutBottomText";
import WhiteShape from "../../sections/WhiteShape";
import DesignUpTimeHeader from "../../sections/designuptime/DesignUpTimeHeader";
import BringPhilosophy from "../../sections/designuptime/BringPhilosophy";
import DesignBuildMaintain from "../../sections/designuptime/DesignBuildMaintain";
import DesignUpTimeParalax from "../../sections/designuptime/DesignUpTimeParalax";
import DesingThinkPlan from "../../sections/designuptime/DesingThinkPlan";
import FieldExecution from "../../sections/designuptime/FieldExecution";
import FieldCards from "../../sections/designuptime/FieldCards";
import MaintenanceMonitoring from "../../sections/designuptime/MaintenanceMonitoring";
import ComfortROI from "../../sections/designuptime/ComfortROI";
import DesignBottomText from "../../sections/designuptime/DesignBottomText";
import WhyMatter from "../../sections/designuptime/WhyMatter";


const DesignUpTime = () => {
	return (
		<main className="design_uptime_page">
			{/* <HeroInner title={"About"} text={"About"} /> */}
			<DesignUpTimeHeader/>
				<BringPhilosophy/>
				<DesignBuildMaintain/>
				<DesignUpTimeParalax/>
				<DesingThinkPlan/>
				<FieldExecution/>
				<FieldCards/>
				<MaintenanceMonitoring/>
				<ComfortROI/>
			<WhyMatter/>
			<DesignBottomText/>
			<WhiteShape/>
			{/* <Cta1 /> */}
		</main>
	);
};

export default DesignUpTime;
