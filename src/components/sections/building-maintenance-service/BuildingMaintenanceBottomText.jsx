import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BuildingMaintenanceBottomText = () => {
  return (
    <section className='bottom_center_text section-space grey_bg_section AnnualMaintenance_bottom'>
      <div class="container">
        <div className="center_bottom_wrapper">
          <h2 className="sec-title text-anim text-center font48">Let’s Make Buildings Work Smarter.</h2>
          <div className="bottom_center_desc">

            <p className='font18 text-center'>From monitoring to automation, we design building management systems that improve efficiency, reduce energy waste, and keep the essential infrastructure running smoothly.</p>
            <div
              className="service-btn-area text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <ButtonPrimary text={"Start project"} url={"/contact-us"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildingMaintenanceBottomText
