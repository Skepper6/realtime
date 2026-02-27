import React from 'react'

const WhenBuildingOverlap = () => {
  return (
    <div style={{backgroundColor: "#f7f7f7"}}>
        {/* NAVY BAND + QUOTE CARD */}
       

        {/* HVAC IMAGE SECTION */}
        <div className="black_over">

        
          <img
            className="rtx-hvacBg"
            src="https://theskepper.com/000_Skepper_test/real/hvac_header_img.jpg"
            alt="HVAC background"
          />
        </div>
        <section className="rtx-hvac">

          <div className="rtx-hvacInner">
            <div className="container">
            <h2 className="rtx-hvacTitle font72">
              Uptime isn’t a feature.
              <br />
              <span className="greeb_text">It’s engineered.</span>
            </h2>

            <div className="rtx-grid">
              <div className="rtx-imgBig">
                <img src="https://theskepper.com/000_Skepper_test/real/uptime_feature.jpg" alt="Left" />
              </div>

              <div className="rtx-rightCol">
                <div className="rtx-imgSmall">
                  <img src="https://theskepper.com/000_Skepper_test/real/uptime_small.jpg" alt="Right" />
                </div>

                <div className="rtx-note">
                  <p>
                    “We start with a feeling,
                    <br />
                    engineer the flow, and build
                    <br />
                    systems that stay silent,
                    <br />
                    seamless, and always in sync
                    <br />
                    with the environment.”
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* BOTTOM WHITE HEADING */}
        <section className="rtx-bottom">
          <h3 className='font48'>
            Where Engineering <span className='green_text'>Met Responsibility</span>
          </h3>
        </section>
       </div>
  )
}

export default WhenBuildingOverlap