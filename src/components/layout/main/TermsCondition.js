"use client";

import React from "react";
import WhiteShape from "../../sections/WhiteShape";

const TermsCondition = () => {
  return (
    <>
      <header className="rt-hero-career termcondition_sec">
        <img
          className="rt-hero__b"
          src="https://skepper.in/000_Skepper_test/real/privacy-terms/Terms_Conditions.jpg"
          alt="Terms image"
        />

        <div className="rt-hero__shade" />

        <div className="container">
          <div className="top_bar">
            <div className="rt-hero__content">
              <span className="hvacHero__pill font12">Terms and Conditions</span>

              <h1 className="rt-hero__title font72 sec-title text-anim">
                Guidelines for
                <br />
                Using Our Services
              </h1>

              <p
                className="rt-hero__desc font18 desc wow fadeInUp"
                data-wow-delay="0.3s"
              >
                These terms outline the rules and
                <br />
                guidelines for using our website and services.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="privacy_desc">
        <div className="container">
          <p>
            The Website Terms & Conditions is a legal document that details the
            terms and conditions that the user must abide by while using the
            website. The website terms and conditions agreement details the
            license of the copyright in the website, includes a disclaimer of
            liability, an acceptable use clause, a variation clause, a clause
            specifying the applicable law and jurisdiction and other legal
            information.
          </p>
        </div>
      </div>

      <WhiteShape />
    </>
  );
};

export default TermsCondition;
