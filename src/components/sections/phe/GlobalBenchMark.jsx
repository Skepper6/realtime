import React from 'react';

const GlobalBenchMark = () => {
  return (
    <section className="compliance_section">
      <div className="container">
        
        {/* Top Header Area */}
        <div className="header-area">
          <div className="header-left">
            <span className="pill-tag">HVAC Solutions</span>
            <h2 className="main-heading">
              Compliance That<br />
              Meets Global<br />
              Benchmarks
            </h2>
          </div>
          <div className="header-right">
            <p className="description-text">
              Every system we design adheres to more than codes, it upholds responsibility.<br />
              Our PHE solutions comply with CPHEEO, NBC, and ASHRAE standards, while supporting<br />
              sustainability benchmarks such as LEED, IGBC, and WELL certifications.
            </p>
            <p className="description-text">
              Compliance isn't an afterthought. It's built into the system from the start. Our systems provide<br />
              the certainty, safety, and reliability modern infrastructure demands.
            </p>
          </div>
        </div>

        {/* Cards Grid Area */}
        <div className="cards-grid">
          
          {/* Card 1: LEED */}
          <div className="compliance-card">
            <div className="card-logo-circle">
              {/* Placeholder SVG matching LEED visual weight */}
             <img src="https://theskepper.com/000_Skepper_test/real/leed.png" />
            </div>
            <h4 className="card-title">LEED</h4>
            <p className="card-desc">Leadership in Energy and<br/>Environmental Design</p>
          </div>

          {/* Card 2: IGBC */}
          <div className="compliance-card">
            <div className="card-logo-circle">
                <img src="https://theskepper.com/000_Skepper_test/real/igbc.png" />
            </div>
            <h4 className="card-title">IGBC</h4>
            <p className="card-desc">Indian Green Building Council</p>
          </div>

          {/* Card 3: ASHRAE */}
          <div className="compliance-card">
            <div className="card-logo-circle">
             <img src="https://theskepper.com/000_Skepper_test/real/ashrae.png" />

            </div>
            <h4 className="card-title">ASHRAE</h4>
            <p className="card-desc">American Society of<br/>Heating, Refrigerating and<br/>Air-Conditioning Engineers</p>
          </div>

          {/* Card 4: CPHEEO */}
          <div className="compliance-card">
            <div className="card-logo-circle">
          <img src="https://theskepper.com/000_Skepper_test/real/cheeo.png" />

            </div>
            <h4 className="card-title">CPHEEO</h4>
            <p className="card-desc">Central Public Health and<br/>Environmental Engineering<br/>Organisation</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalBenchMark;