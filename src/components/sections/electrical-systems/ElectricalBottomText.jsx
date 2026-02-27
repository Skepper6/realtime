import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ElectricalBottomText = () => {
  return (
    <section className='bottom_center_text section-space grey_bg_section electrical_bottom'>
      <div class="container">
        <div className="center_bottom_wrapper">
          <h2 className="sec-title text-anim text-center font48">Let’s Engineer Smarter Energy </h2>
          <div className="bottom_center_desc">

            <p className='font18 text-center'>Let’s rethink power, not as a utility, but as a strategic asset.<br/> Together, we’ll build electrical systems that deliver safety, stability, and sustainability across every operation.</p>
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

export default ElectricalBottomText