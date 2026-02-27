
import WhiteShape from "../../sections/WhiteShape";
import AnnualMaintenanceHero from "../../sections/annual-maintenance/AnnualMaintenanceHero";
import PowerEfficiency from "../../sections/annual-maintenance/PowerEfficiency";
import TeamTrust from "../../sections/annual-maintenance/TeamTrust";

import AnnualMaintenancePortfolio from "../../sections/annual-maintenance/AnnualMaintenancePortfolio";
import AnnualMaintenanceCenterZoomCards from "../../sections/annual-maintenance/AnnualMaintenanceCenterZoomCards";
import AnnualMaintenanceCenterImage from "../../sections/annual-maintenance/AnnualMaintenanceCenterImage";
import AnnualMaintenanceHoverCardImage from "../../sections/annual-maintenance/AnnualMaintenanceHoverCardImage";
import AnnualMaintenanceCardBox from "../../sections/annual-maintenance/AnnualMaintenanceCardBox";
import AnnualMaintenanceProjectPortfolio from "../../sections/annual-maintenance/AnnualMaintenanceProjectPortfolio";
import AnnualMaintenanceBottomText from "../../sections/annual-maintenance/AnnualMaintenanceBottomText";
import AnnualMaintenanceFAQ from "../../sections/annual-maintenance/AnnualMaintenanceFAQ";
import AnnualMaintenanceThreeCards from "../../sections/annual-maintenance/AnnualMaintenanceThreeCards";
import RoundShape from "../../sections/RoundShape";
import AnnualMaintenanceTestimonial from "../../sections/annual-maintenance/AnnualMaintenanceTestimonial";

const AnnualMaintenanceContracts = () => {
    return (
        <main className="annual-maintenance_page sub_service_page">
            <AnnualMaintenanceHero />
            <PowerEfficiency />
            <TeamTrust />
            <AnnualMaintenancePortfolio />
            <AnnualMaintenanceTestimonial/>
            <AnnualMaintenanceCenterZoomCards />
            {/* <AnnualMaintenanceCenterImage /> */}
            {/* <AnnualMaintenanceHoverCardImage /> */}
            <AnnualMaintenanceThreeCards />
            <AnnualMaintenanceCardBox />
            <AnnualMaintenanceProjectPortfolio />
            <AnnualMaintenanceBottomText />
            <AnnualMaintenanceFAQ />
            {/* <WhiteShape /> */}
            <RoundShape />
        </main>
    );
};

export default AnnualMaintenanceContracts;
