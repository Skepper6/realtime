import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const AnnualMaintenanceBottomText = () => {
  return (
    <section className='bottom_center_text section-space grey_bg_section AnnualMaintenance_bottom'>
      <div class="container">
        <div className="center_bottom_wrapper">
          <h2 className="sec-title text-anim text-center font48">Let’s Keep Your Systems Performing at Their Best. </h2>
          <div className="bottom_center_desc">

            <p className='font18 text-center'>Let’s create a maintenance partnership that protects uptime, enhances efficiency, and extends system life, every hour, every day, all year long.</p>
            <div
              className="service-btn-area text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <ButtonPrimary text={"Schedule a Call"} url={"/services"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnualMaintenanceBottomText
