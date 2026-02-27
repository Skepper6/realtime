import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const DesignBottomText = () => {
  return (
    <section className='bottom_center_text section-space bg-white design_bottom_text'>
    <div className="container">
        <div className="center_bottom_wrapper">
         <h2 className="sec-title text-anim text-center font48">Ready to Experience Uptime</h2>
         <div className="bottom_center_desc">
         
            <p className='font18 text-center'>Let’s take your building from concept to continuous comfort — <br/>together.</p>
                        <div
                            className="service-btn-area text-center wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <ButtonPrimary text={"Explore Our Projects"} url={"/services"} />
                        </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default DesignBottomText