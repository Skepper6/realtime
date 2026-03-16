import React from 'react'

const WhenBuildingOverlap = () => {
  return (
    <div style={{backgroundColor: "#f7f7f7"}}>
        {/* NAVY BAND + QUOTE CARD */}
       

        {/* HVAC IMAGE SECTION */}
        <div className="black_over">

        
          <img
            className="rtx-hvacBg"
            src="https://skepper.in/000_Skepper_test/real/hvac_header_img.jpg"
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
                <img src="images/about/uptime_leader.jpg" alt="Left" />
              </div>

              <div className="rtx-rightCol">
                <div className="rtx-imgSmall">
                  <img src="https://skepper.in/000_Skepper_test/real/about/engineer.jpg" alt="Right" />
                </div>

                <div className="rtx-note">
                  <p>
                    “Our Design to Uptime <br/>philosophy ensures that<br/> every system we create - air,<br/> water, or energy- continues to<br/> perform long after installation.”
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