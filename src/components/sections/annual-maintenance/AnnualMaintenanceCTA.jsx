import React from 'react';

const AnnualMaintenanceCTA = () => {
    return (
        <section className="AnnualMaintenance-cta section-space text-center bg-dark text-white">
            <div className="container">
                <h2 className="font72 mb-4">Your Project, Our Priority</h2>
                <p className="font24 mb-5 greytext">Let's build a more resilient future together. Contact our engineering team for a consultation.</p>
                <a href="/contact" className="btn btn-primary btn-lg px-5 py-3 rounded-pill font18 AnnualMaintenance-cta-btn">
                    Consult with an Expert
                </a>
            </div>
        </section>
    );
};

export default AnnualMaintenanceCTA;
