import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BottomCenterText = () => {
  return (
    <section className='bottom_center_text section-space' style={{backgroundColor: "#F7F7F7"}}>
    <div class="container">
        <div className="center_bottom_wrapper">
         <h2 className="sec-title text-anim text-center font48">Let’s Create Spaces That Breathe Right. </h2>
         <div className="bottom_center_desc">
         
            <p className='font18 text-center'>Let’s build intelligent HVAC systems that make every environment healthier, quieter, and effortlessly comfortable.</p>
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

export default BottomCenterText