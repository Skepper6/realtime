import React from "react";

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="container">
        
        {/* Top Label */}
        <h3 className="section-label font48">Founder</h3>

        <div className="founder-grid">
          
          {/* --- The Founder Card --- */}
          <div className="founder-card">
            
            {/* 1. White Image Area */}
            <div className="card-image-wrapper">
              <img 
                src="https://theskepper.com/000_Skepper_test/real/emp1.png" 
                alt="Prasanth Thandayil" 
                className="founder-img"
              />
            </div>

            {/* 2. Dark Info Area with Curved Corner */}
            <div className="card-info">
              
              <div className="text-content">
                <h3 className="founder-name">Prasanth Thandayil</h3>
                <p className="founder-role libre">Managing Director</p>
              </div>

              {/* 3. The Button (Placed in the top-right curve) */}
              <button className="arrow-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            
          </div>

          {/* --- Right Text Section --- */}
          <div className="founder-quote-area">
            <h2 className="quote-heading font32 text-white Aleo-SemiBold">
              Where Leadership <br />
              Meets Collective Strength
            </h2>

            <div className="quote-decoration">
              <span className="line"></span>
              <span className="quote-mark"><img src="https://theskepper.com/000_Skepper_test/real/quote_symbol.svg" /></span>
              <span className="line"></span>
            </div>

            <p className="quote-body font24 aleo_semibold" >
              “Our success isn’t built by strategies alone - 
              it’s built by the people who show up with 
              heart, courage, and commitment.”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;