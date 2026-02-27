// import About11 from "@/components/sections/About/About11";
// import Brands1 from "@/components/sections/brands/Brands1";
// import Cta1 from "@/components/sections/cta/Cta1";
// import Features from "@/components/sections/features/Features";
// import Funfact3 from "@/components/sections/funfacts/Funfact3";
// import HeroInner from "@/components/sections/heros/HeroInner";
// import Skills1 from "@/components/sections/Skills/Skills1";
// import Team8 from "@/components/sections/teams/Team8";
// import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
// import BuiltByDesign from "../../sections/HVAC/BuiltByDesign";
// import DesignSection from "../../sections/HVAC/DesignSection";
// import SubServiceHeader from "../../sections/HVAC/SubServiceHeader";
// import ImplementationDesign from "../../sections/HVAC/ImplementationDesign";
// import Portfolios3 from "../../../components/sections/portfolios/Portfolios3";
// import AccordioWithImage from "../../sections/HVAC/AccordioWithImage";
// import JourneyCards from "../../sections/HVAC/JourneyCards";
// import CenterFullImage from "../../sections/HVAC/CenterFullImage";
// import HoverImageCard from "../../sections/HVAC/HoverImageCard";
// import CenterProgressCount from "../../sections/HVAC/CenterProgressCount";
// import CardBoxes from "../../sections/HVAC/CardBoxes";
// import AllPortfolioCard from "../../sections/HVAC/AllPortfolio"
// import AllPortfolio from "../../sections/HVAC/AllPortfolio";
// import BottomCenterText from "../../sections/HVAC/BottomCenterText";
// import FAQ from "../../sections/HVAC/FAQ"
// import CenterZoomCards from "../../sections/HVAC/CenterZoomCards";
import RoundShape from "../../sections/RoundShape";
import AboutHeader from "../../sections/about/AboutHeader";
import WhenBuildingStop from "../../sections/about/WhenBuildingStop";
import WhenBuildingOverlap from "../../sections/about/WhenBuildingOverlap";
import History from "../../sections/about/History";
import FadeText from "../../sections/about/FadeText";
import ParalaxImageSection from "../../sections/about/ParalaxImageSection";
import Founder from "../../sections/about/Founder";
import WhyChoose from "../../sections/about/WhyChoose";
import Team from "../../sections/about/Team";
import VisionMission from "../../sections/about/VisionMission";
import AboutCards from "../../sections/about/AboutCards";
import AboutBottomText from "../../sections/about/AboutBottomText";
import WhiteShape from "../../sections/WhiteShape";



const AboutMain = () => {
	return (
		<main className="about_page">
			{/* <HeroInner title={"About"} text={"About"} /> */}
			<AboutHeader/>
			<WhenBuildingStop/>
			<WhenBuildingOverlap/>
			<History/>
			<FadeText/>
			<ParalaxImageSection/>
			<Founder/>
			<Team />
			<WhyChoose/>
			<VisionMission/>
			<AboutCards/>
			<AboutBottomText/>
			<WhiteShape/>
			{/* <Cta1 /> */}
		</main>
	);
};

export default AboutMain;
