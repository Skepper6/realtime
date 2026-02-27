import React from "react";

export default function WhenBuildingStop() {
 return (
    <div className="rtx-shell">
      <div className="rtx-page">
        <section className="rtx-top">
          <div className="rtx-topText">
            <h2 className="rtx-kicker font48">When Buildings Stop
                 <span className="d-lg-block d-md-block">Performing, <span className="green_text">People Feel It</span></span></h2>
        
            <p className="rtx-sub font18 lato">
              Buildings don’t fail overnight. They drift. Air, energy, and systems fall out of sync. Comfort fades. Productivity drops.
            </p>
          </div>

          {/* Portrait cutout */}
          <div className="rtx-portraitWrap">
            <img
              className="rtx-portrait"
              src="https://theskepper.com/000_Skepper_test/real/manager.png"
              alt="Portrait"
            />
          </div>
        </section>
 <section className="rtx-band">
          <div className="rtx-quoteCard">
            <p className="rtx-quote aleo_regular font32">
              At Realtime Infra, we believe buildings should perform
              <br />
              as long as people depend on them.
            </p>
            <p className="rtx-quoteBy font24  aleo_semibold">Prasanth Thandayil</p>
            <p className="rtx-quoteRole font18 lato">Managing Director</p>
          </div>
        </section>
        
      </div>
    </div>
  );
}
