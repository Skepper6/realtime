"use client";

import { useRef } from "react";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const ElectricalThreeCards = () => {
  const cards = [
    {
      title: "30% reduction",
      desc: "in energy\nconsumption through\nsmart load balancing"
    },
    {
      title: "LEED & IGBC\nenergy credits",
      desc: "enabled through\noptimized system design"
    },
    {
      title: "Zero unplanned\ndowntime",
      desc: "across key client\ninstallations"
    }
  ];

  return (
    <section className="impact-highlight-wrap" >
      <div className="impact-highlight-bg" />

      <div className="impact-highlight-card impact-highlight-card--three">
        <div className="impact-highlight-header w-100">
          <h2 className="impact-title font48 Aleo-SemiBold">Impact Highlight</h2>
        </div>

        <div className="impact-highlight-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="impact-green-box">
              <h3 className="green-box-title font24 Aleo-Bold">{card.title}</h3>
              <p className="green-box-desc font16">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricalThreeCards;
