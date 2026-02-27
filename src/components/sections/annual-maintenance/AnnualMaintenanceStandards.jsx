import React from 'react';

const AnnualMaintenanceStandards = () => {
    const items = [
        {
            title: "Efficient Planning",
            desc: "IEC, NEC, IEEE standards compliance for global reliability."
        },
        {
            title: "Load Analysis",
            desc: "Thermal mapping, demand factors, and harmonic filtering optimization."
        },
        {
            title: "Smart Monitoring",
            desc: "IoT-integrated SCADA systems and real-time power analytics."
        }
    ];

    return (
        <section className="AnnualMaintenance-standards section-space bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="standards-list">
                            {items.map((item, idx) => (
                                <div key={idx} className="standard-item py-4 border-bottom d-flex align-items-center justify-content-between">
                                    <div className="item-content">
                                        <h3 className="font32 aleo-semibold mb-2">{item.title}</h3>
                                        <p className="font18 mb-0 greytext">{item.desc}</p>
                                    </div>
                                    <div className="item-icon">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M10 20H30M30 20L22 12M30 20L22 28" stroke="#00A859" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnnualMaintenanceStandards;
