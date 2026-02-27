"use client";

import { useState } from "react";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const AccordioWithImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Data inside component (no getPortfolio, no external JSON)
  const portfolio = [
    {
      id: 1,
      title: "Corporate Building",
      img2: "https://theskepper.com/000_Skepper_test/real/corporate.jpg",
      tags: ["Strategy", "Growth"],
    },
    {
      id: 2,
      title: "Data Centers",
      img2: "https://theskepper.com/000_Skepper_test/real/corporate.jpg",
      tags: ["Strategy", "Growth"],
    },
    {
      id: 3,
      title: "Manufacturing Unit",
      img2: "https://theskepper.com/000_Skepper_test/real/corporate.jpg",
      tags: ["Strategy", "Growth"],
    },
    {
      id: 4,
      title: "Industrial Factory",
      img2: "https://theskepper.com/000_Skepper_test/real/corporate.jpg",
      tags: ["Strategy", "Growth"],
    },
  ];

  const handleCurrentIndex = (idx) => setCurrentIndex(idx);

  return (
    <section className="h4-case-section section-space explore_faq">
      <div className="container">
        <div className="row rg-50">
          <div className="col-xl-5 col-lg-5">
            <div className="sec-heading style-3">
              <div className="faq_desc">

              <h2 className=" text-anim font48">
                Controls That Learn <span className="d-lg-block">and Respond</span>
              </h2>
              <p className="font18">Static systems belong to the past. Our intelligent control frameworks ensure your HVAC responds in real time — to occupancy, climate, and demand.</p>
            </div>
              </div>

            {/* <div className="case-btn wow fadeInUp" data-wow-delay="0.4s">
              <ButtonPrimary text={"Explore more"} url={"/portfolios"} />
            </div> */}
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="h4-case-wrapper wow fadeInUp" data-wow-delay="0.5s">
              {portfolio?.length
                ? portfolio.map((portfolioSingle, idx) => {
                    const { title, img2, id, tags } = portfolioSingle || {};

                    return (
                      <div
                        key={idx}
                        className={`case-item ${
                          currentIndex === idx ? "active" : ""
                        }`}
                        onClick={() => handleCurrentIndex(idx)}
                      >
                        <div className="header">
                          {/* LEFT: number + title */}
                          <span className="font32">
                            <span className="number">
                              {modifyNumber(idx + 1)}.
                            </span>{" "}
                             {title}
                          </span>

                          {/* RIGHT: arrow icon (your exact UI) */}
                          <span
                            className={`icon ${
                              currentIndex === idx ? "active" : ""
                            }`}
                          >
                            <i className="tji-arrow-bown"></i>
                          </span>
                        </div>

                        <div className="content slider-drag">
                          {/* <Link
                            href={`/portfolios/${id}`}
                            className="view-project"
                          > */}
                            <img
                              src={
                                img2
                                  ? img2
                                  : "assets/images/project/h2-project-1.webp"
                              }
                              alt="Project Image"
                            />{" "}
                          {/* </Link> */}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="case-shapes move-anim">
        <img src="/images/shapes/h4-hero-shape-1.svg" alt="Shapes" />
      </div> */}
    </section>
  );
};

export default AccordioWithImage;
