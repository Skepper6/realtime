import React from "react";

export default function PHEEfficiency() {
    return (
        <section className="design">
            <div className="container">
                <h1 className="text-white font72">Built for Water Reliability</h1>

                <div className="design__grid">
                    {/* Left column */}
                    <div className="design__col design__col--left">
                        <div className="design__imgCard">
                            <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/water_left.jpg" alt="Interior space" />
                        </div>

                        <div className="design_wrap">
                            <h3 className="design__quote">
                               Water should arrive exactly where it’s needed, consistently, safely, and without interruption. 
                            </h3>

                            <p className="design__body">
                               We design plumbing and water distribution systems that ensure steady flow across zones, floors, and usage points. From pressure zoning and storage planning to filtration and redundancy, every system is engineered to deliver reliability people never have to question. Because when water works flawlessly, it fades into the background, exactly where it belongs.
                            </p>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="design__col design__col--right">
                        <div className="design__imgCard design__imgCard--tall">
                            <img className="design__img" src="https://theskepper.com/000_Skepper_test/real/water_right.jpg" alt="Building exterior" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
