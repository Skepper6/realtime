"use client";

import { useRef } from "react";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const PHEThreeCards = () => {
    const cards = [
        {
            title: "40% reduction\n",
            desc: "in water consumption\n post-retrofit"
        },
        {
            title: "100% compliance\n",
            desc: "with safety and\nhygiene audits"
        },
        {
            title: "LEED credits\n",
            desc: "earned through sustainable\nwater strategies"
        }
    ];

    return (
        <section className="impact-highlight-wrap phe_card_wrapper" >
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

export default PHEThreeCards;
