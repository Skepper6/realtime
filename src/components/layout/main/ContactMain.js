import Contact5 from "@/components/sections/contacts/Contact5";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import WhiteShape from "@/components/sections/WhiteShape";

const ContactMain = () => {
	return (
		<main className="contact_page">
			{/* <HeroInner title={"Contact"} text={"Contact"} /> */}

		   <header className="rt-hero-career privacy_sec contact_us">
      {/* Background image */}
      <img
        className="rt-hero__b"
        src="https://theskepper.com/000_Skepper_test/real/career_header.jpg"
        alt="Career image"
      />
      
      {/* Existing Gradient Shade */}
      <div className="rt-hero__shade" />


      <div className="container">
        <div className="top_bar">
          {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
          <div className="rt-hero__content">
            <span className="hvacHero__pill font12">Contact Us</span>

            <h1 className="rt-hero__title font72 sec-title text-anim">
            Let’s Build Better 
              <br />
             Spaces Together
            </h1>

            <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
              Reach out to us and let’s start a meaningful conversation.
            </p>

          </div>
        </div>
      </div>
    </header>
			<ContactTop />
			<Contact5 />
			<WhiteShape/>
			{/* <Cta1 /> */}
		</main>
	);
};

export default ContactMain;
