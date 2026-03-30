import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <header className="rt-hero-career privacy_sec ">
        <img
          className="rt-hero__b"
          src="https://skepper.in/000_Skepper_test/real/privacy-terms/Pivacy_Policy.jpg"
          alt="privacy image"
        />

        <div className="rt-hero__shade" />

        <div className="container">
          <div className="top_bar">
            <div className="rt-hero__content">
              <span className="hvacHero__pill font12">Privacy Policy</span>

              <h1 className="rt-hero__title font72 sec-title text-anim">
                Your Privacy
                <br />
                Matters to Us
              </h1>

              <p
                className="rt-hero__desc font18 desc wow fadeInUp"
                data-wow-delay="0.3s"
              >
                This policy explains how we collect, use,
                <br />
                and safeguard your data.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="privacy_desc">
        <div className="container">
          <p>
            We understand that your privacy is important and that you care about
            how your personal data is used and shared online. We respect privacy
            of data entrusted with / received by us as you visit this website
            and/or use our service(s).
          </p>
          <p>
            We are committed to secure and protect your privacy and data of
            whichever nature, including that of business data, personal data,
            service data received in the capacity of a data processor etc., as
            per International standard practices, Information Technology Act,
            2000 of India and GDPR. We are also committed to be transparent
            about what we collect and how we use it.
          </p>
          <p>
            This privacy policy, which is legally binding Agreement between you
            and RealTime Infratech through click-wrap contract, provides details
            of both the parties rights and obligations regarding data being
            collected by us of different nature, purposes of such data
            collection, your right vis-a-vis such data collection, and how we
            ensure your privacy is maintained etc.
          </p>
          <p>
            Any word of this policy defined under the definition section shall
            have the meaning provided herein, disregarding any contradictory
            definitions provided in any other legal/ other documents/ prevailing
            understanding of common people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
