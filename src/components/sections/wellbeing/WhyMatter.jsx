import React from 'react';

const WhyMatter = () => {
    const standardCards = [
        {
            title: "Comfort That Shows Up",
            image: "https://theskepper.com/000_Skepper_test/real/matter1.jpg",
            description: "stable temperatures, clean air,\nminimal distractions"
        },
        {
            title: "Performance You Can Trust",
            image: "https://theskepper.com/000_Skepper_test/real/matter2.jpg",
            description: "fewer breakdowns, longer\nequipment life"
        },
        {
            title: "Operational Value",
            image: "https://theskepper.com/000_Skepper_test/real/matter3.jpg",
            description: "energy savings, cost predictability,\ndata-driven decisions"
        }
    ];

    return (
        <section className="why-section" style={{ backgroundColor: "#F7F7F7" }}>
            <div className="container">
                {/* Parent Header */}
                <div className="why-section__header">
                    <h1 className="why-section__title font72">Why It Matters</h1>
                    <p className="why-section__subtitle">
                        Your building's mechanical systems aren't just infrastructure — they directly affect employee well-being,
                        operational efficiency, and your brand's reputation.
                    </p>
                    <p className="why-section__caption">Here's what partnering with Realtime Infra means for you:</p>
                </div>
            </div>

            {/* <div className="container"> */}
            {/* Grid Container */}
            <div className="why-section__grid">
                {standardCards.map((card, index) => (
                    <div key={index} className="why-card">
                        <img src={card.image} alt={card.title} className="why-card__image" />
                        <div className="why-card__overlay">
                            <h3 className="why-card__overlay-title">{card.title}</h3>
                            <p className="why-card__overlay-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div> */}
            {/* Wide Card (Using a modifier sub-class) */}
            <div className="why-card why-card--wide">
                <img
                    src="https://theskepper.com/000_Skepper_test/real/why_matter.jpg"
                    alt="Credibility"
                    className="why-card__image"
                />
                <div className="why-card__overlay">
                    <h3 className="why-card__overlay-title">Credibility & Recognition</h3>
                    <p className="why-card__overlay-text">buildings that perform<br /> and satisfy</p>
                </div>
            </div>

        </section>
    );
};

export default WhyMatter;
