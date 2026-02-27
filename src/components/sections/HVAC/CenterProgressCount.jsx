"use client";

import { useRef } from "react";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const CenterProgressCount = ({
  currentValue = 20,
  symbol = "%",
  subTitle = "Drop in PM2.5 levels\nafter installation",
}) => {
  const sectionRef = useRef(null);

  return (
    <section className="impact-highlight-wrap" ref={sectionRef}>
      <div className="impact-highlight-bg" />

      <div className="impact-highlight-card">
        <div className="impact-highlight-left">
          <h2 className="impact-title font48">Impact Highlight</h2>

          <p className="impact-desc font16">
            One of our clients recorded a 60% drop in PM2.5 levels after
            installation, reducing respiratory discomfort and improving employee
            satisfaction.
          </p>

          <ul className="impact-list">
            <div className="about-feature-item wow fadeInUp border-0" data-wow-delay="0.5s">
                <div className="feature-box">
                    <div className="feature-left">
                       <div className="check-list-one">
                            <ul>
                                <li className="font16">
                                   <i className="tji-double-check text-white"></i>Decrease in dust and pollen accumulation
                                    </li>
                                   <li className="font16">
                                  <i className="tji-double-check text-white"></i>Enhanced focus and productivity
                                   </li>
                                   <li className="font16">
                                  <i className="tji-double-check text-white"></i>Comfortable and consistent environment
                                 </li>
                                
                                   </ul>
                                   </div>
                                                        
                                   </div>
                                 </div>
                                                
                             </div>
          </ul>
        </div>

        <div className="impact-highlight-right">
          <div className="impact-blob">
            <div className="funfact-item-two">
              <div className="funfact-box">
                <FunfactSingle currentValue={currentValue} symbol={symbol} />
                <span className="sub-title font16 Aleo-Regular" style={{whiteSpace: "pre-line"}} >{subTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterProgressCount;
