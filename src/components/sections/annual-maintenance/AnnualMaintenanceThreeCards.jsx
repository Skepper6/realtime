"use client";

import { useRef } from "react";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const AnnualMaintenanceThreeCards = () => {
  const cards = [
    {
      title: "99.5% average",
      desc: "system uptime"
    },
    {
      title: "20–25% reduction",
      desc: "in maintenance-\nrelated costs"
    },
    {
      title: "Zero unplanned\nfailures",
      desc: "across multi-year contracts"
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

export default AnnualMaintenanceThreeCards;
