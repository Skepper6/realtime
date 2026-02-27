// import About11 from "@/components/sections/about/About11";
// import Brands1 from "@/components/sections/brands/Brands1";
// import Cta1 from "@/components/sections/cta/Cta1";
// import Features from "@/components/sections/features/Features";
// import Funfact3 from "@/components/sections/funfacts/Funfact3";
// import HeroInner from "@/components/sections/heros/HeroInner";
// import Skills1 from "@/components/sections/Skills/Skills1";
// import Team8 from "@/components/sections/teams/Team8";
// import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BuiltByDesign from "../../sections/HVAC/BuiltByDesign";
import DesignSection from "../../sections/HVAC/DesignSection";
import SubServiceHeader from "../../sections/HVAC/SubServiceHeader";
import ImplementationDesign from "../../sections/HVAC/ImplementationDesign";
// import Portfolios3 from "../../sections/portfolios/Portfolios3";
import AccordioWithImage from "../../sections/HVAC/AccordioWithImage";
import JourneyCards from "../../sections/HVAC/JourneyCards";
import CenterFullImage from "../../sections/HVAC/CenterFullImage";
import HoverImageCard from "../../sections/HVAC/HoverImageCard";
import CenterProgressCount from "../../sections/HVAC/CenterProgressCount";
import CardBoxes from "../../sections/HVAC/CardBoxes";
// import AllPortfolioCard from "../../sections/HVAC/AllPortfolio"
import AllPortfolio from "../../sections/HVAC/AllPortfolio";
import BottomCenterText from "../../sections/HVAC/BottomCenterText";
import FAQ from "../../sections/HVAC/FAQ"
import CenterZoomCards from "../../sections/HVAC/CenterZoomCards";
import RoundShape from "../../sections/RoundShape";

const HVACServiceMain = () => {
	return (
		<main className="sub_service_page">
			{/* <HeroInner title={"About"} text={"About"} /> */}
			<SubServiceHeader/>
			<DesignSection/>
			<BuiltByDesign/>
			<JourneyCards />
			<ImplementationDesign/>
			<CenterZoomCards/>
			<AccordioWithImage/>
			<CenterFullImage/>
			<HoverImageCard/>
			<CenterProgressCount  />
			<CardBoxes/>
			<AllPortfolio/>
			<BottomCenterText />
			<FAQ/>
	
			{/* <Features type={2} /> */}
			{/* <Funfact3 /> */}
			{/* <Team8 />
			<Skills1 />
			<Testimonials2 type={3} /> */}
			{/* <Brands1 /> */}
			<RoundShape/>
			{/* <Cta1 /> */}
		</main>
	);
};

export default HVACServiceMain;
