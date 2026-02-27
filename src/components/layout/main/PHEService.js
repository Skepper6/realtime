
import RoundShape from "../../sections/RoundShape";
import PHEHero from "../../sections/phe/PHEHero";
import PHEEfficiency from "../../sections/phe/PHEEfficiency";
import PHETeamTrust from "../../sections/phe/PHETeamTrust";
import PHEPortfolio from "../../sections/phe/PHEPortfolio";
import PHECenterZoomCards from "../../sections/phe/PHECenterZoomCards";
import PHECenterImage from "../../sections/phe/PHECenterImage";
import PHEHoverCardImage from "../../sections/phe/PHEHoverCardImage";
import PHEThreeCards from "../../sections/phe/PHEThreeCards";
import PHECardBox from "../../sections/phe/PHECardBox";
import PHEProjectPortfolio from "../../sections/phe/PHEProjectPortfolio";
import PHEBottomText from "../../sections/phe/PHEBottomText";
import PHEFAQ from "../../sections/phe/PHEFAQ";
import PHETestimonial from "../../sections/phe/PHETestimonial";
import GlobalBenchMark from "../../sections/phe/GlobalBenchMark";

const PHEService = () => {
    return (
        <main className="phe-service_page sub_service_page">
            <PHEHero />
            <PHEEfficiency />
            <PHETeamTrust />
            <PHEPortfolio />
            <PHETestimonial/>
            <PHECenterZoomCards />
            <GlobalBenchMark/>
            <PHECenterImage />
            {/* <PHEHoverCardImage /> */}
            <PHEThreeCards />
            <PHECardBox />
            <PHEProjectPortfolio />
            <PHEBottomText />
            <PHEFAQ />
            <RoundShape />
        </main>
    );
};

export default PHEService;
