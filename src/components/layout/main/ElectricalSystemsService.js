
import WhiteShape from "../../sections/WhiteShape";
import ElectricalHero from "../../sections/electrical-systems/ElectricalHero";
import PowerEfficiency from "../../sections/electrical-systems/PowerEfficiency";
import TeamTrust from "../../sections/electrical-systems/TeamTrust";

import ElectricalPortfolio from "../../sections/electrical-systems/ElectricalPortfolio";
import ElectricalCenterZoomCards from "../../sections/electrical-systems/ElectricalCenterZoomCards";
import ElectricalCenterImage from "../../sections/electrical-systems/ElectricalCenterImage";
import ElectricalHoverCardImage from "../../sections/electrical-systems/ElectricalHoverCardImage";
import ElectricalCardBox from "../../sections/electrical-systems/ElectricalCardBox";
import ElectricalProjectPortfolio from "../../sections/electrical-systems/ElectricalProjectPortfolio";
import ElectricalBottomText from "../../sections/electrical-systems/ElectricalBottomText";
import ElectricalFAQ from "../../sections/electrical-systems/ElectricalFAQ";
import ElectricalThreeCards from "../../sections/electrical-systems/ElectricalThreeCards";
import RoundShape from "../../sections/RoundShape";

const ElectricalSystemsService = () => {
    return (
        <main className="electrical-systems_page sub_service_page">
            <ElectricalHero />
            <PowerEfficiency />
            <TeamTrust />
            <ElectricalPortfolio/>
                <ElectricalCenterZoomCards/>
            <ElectricalCenterImage/>
        <ElectricalHoverCardImage/>
        <ElectricalThreeCards/>
    <ElectricalCardBox/>
    <ElectricalProjectPortfolio/>
        <ElectricalBottomText/>
        <ElectricalFAQ/>
            {/* <WhiteShape /> */}
            	<RoundShape/>
        </main>
    );
};

export default ElectricalSystemsService;
