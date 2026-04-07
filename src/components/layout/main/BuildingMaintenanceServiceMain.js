import RoundShape from "../../sections/RoundShape";
import PowerEfficiency from "../../sections/annual-maintenance/PowerEfficiency";
import AnnualMaintenanceCenterZoomCards from "../../sections/annual-maintenance/AnnualMaintenanceCenterZoomCards";
import AnnualMaintenanceProjectPortfolio from "../../sections/annual-maintenance/AnnualMaintenanceProjectPortfolio";
import AnnualMaintenanceBottomText from "../../sections/annual-maintenance/AnnualMaintenanceBottomText";
import AnnualMaintenanceThreeCards from "../../sections/annual-maintenance/AnnualMaintenanceThreeCards";
import AnnualMaintenanceTestimonial from "../../sections/annual-maintenance/AnnualMaintenanceTestimonial";
import BuildingMaintenanceHero from "../../sections/building-maintenance-service/BuildingMaintenanceHero";
import BuildingMaintenanceFourCard from "../../sections/building-maintenance-service/BuildingMaintenanceFourCard";
import BuildingMaintenanceTeamTrust from "../../sections/building-maintenance-service/BuildingMaintenanceTeamTrust";
import BuildingMaintenanceCardBox from "../../sections/building-maintenance-service/BuildingMaintenanceCardBox";
import BuildingMaintenanceFAQ from "../../sections/building-maintenance-service/BuildingMaintenanceFAQ";
import BuildingMaintenanceControl from "../../sections/building-maintenance-service/BuildingMaintenanceControl";
import BuildingMaintenanceCenterZoom from "../../sections/building-maintenance-service/BuildingMaintenanceCenterZoom";
import BuildingMaintenanceCeterImage from "../../sections/building-maintenance-service/BuildingMaintenanceCeterImage";
import BuildingMaintenanceHoverCardImage from "../../sections/building-maintenance-service/BuildingMaintenanceHoverCardImage";
import BuildingMaintananceProjectPortfolio from "../../sections/building-maintenance-service/BuildingMaintananceProjectPortfolio";
import BuildingMaintenanceBottomText from "../../sections/building-maintenance-service/BuildingMaintenanceBottomText";
import BuildingMaintenanceTestimonial from "../../sections/building-maintenance-service/BuildingMaintenanceTestimonial";



const BuildingMaintenanceServiceMain = () => {
	return (
		<main className="annual-maintenance_page sub_service_page service-overlap-page">
			<BuildingMaintenanceHero />
			<BuildingMaintenanceControl />
			<BuildingMaintenanceTeamTrust />
			<BuildingMaintenanceFourCard />
			<BuildingMaintenanceTestimonial />
			<BuildingMaintenanceCenterZoom />
			<BuildingMaintenanceCeterImage/>
			<BuildingMaintenanceHoverCardImage/>
			{/* <AnnualMaintenanceThreeCards /> */}
			<BuildingMaintenanceCardBox />
			{/* <BuildingMaintananceProjectPortfolio /> */}
			<BuildingMaintenanceBottomText />
			<BuildingMaintenanceFAQ />
			<RoundShape />
		</main>
	);
};

export default BuildingMaintenanceServiceMain;
