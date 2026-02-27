"use-client";

import React from "react";
import ButtonPrimary from "../../../components/shared/buttons/ButtonPrimary";

// Replace with your own images/icons
import bg1 from "../../../../public/images/about/built_design.jpg";
import bg2 from "../../../../public/images/about/built_design.jpg";
import bg3 from "../../../../public/images/about/built_design.jpg";

// import icon1 from "../../../../public/images/about/icons3.png";
// import icon2 from "../../../../public/images/about/icons3.png";
// import icon3 from "../../../../public/images/about/icons3.png";

const cards = [
  {
    number: "01",
    title: "Flawless On-Site\nExecution",
    desc: "Our on-site teams bring designs to life with precision and discipline.Every installation is controlled, safe, and effortlessly efficient.",
    cta: "Get optimization",
    icon: "https://theskepper.com/000_Skepper_test/real/icons3.png",
    bg: "https://theskepper.com/000_Skepper_test/real/built_design.jpg",
  },
  {
    number: "02",
    title: "Built on Imagination \n& Precision",
    desc: "Engineering is the bridge between creativity and execution.It begins with planning and delivers seamless performance.",
    cta: "Get optimization",
    icon: "https://theskepper.com/000_Skepper_test/real/icons3.png",
        bg: "https://theskepper.com/000_Skepper_test/real/built_design.jpg",

  },
  {
    number: "03",
    title: "Integrated Systems\n That Disappear",
    desc: "We integrate HVAC with electrical, plumbing, and architectural systems  delivering installations so seamless, you forget they exist.",
    cta: "Get optimization",
    icon: "https://theskepper.com/000_Skepper_test/real/icons3.png",
        bg: "https://theskepper.com/000_Skepper_test/real/built_design.jpg",

  },
];

export default function ImplementationDesign() {
  return (
    <>
    <div className="space"></div>
    <section className="svcGridWrap grey_bg">
        <div className="container">
          <h2 className="sec-title text-anim aleo_semibold text-center font48">Implementation That Defines Reliability</h2>
      <div className="svcGrid">
        {cards.map((c) => (
          <article
            key={c.number}
            className="svcCard"
            style={{ "--bg": c.bg ? `url(${c.bg})` : "none" }}
          >
            <div className="svcCard__icon">
              <img src={c.icon} alt="" />
            </div>

            {/* <div className="svcCard__num">{c.number}</div> */}
            <div className="designcard_wrapper">

            <h3 className="aleo_semibold font32" style={{whiteSpace: "pre-line"}}>{c.title}</h3>

            <p className="svcCard__desc">{c.desc}</p>
            </div>
           
          </article>
        ))}
        </div>

         <div className="about-button">
              <ButtonPrimary url="/about" text={"See Our Projects"} />
         </div>
      </div>
    </section>
    </>
  );
}
