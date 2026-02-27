import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const AboutBottomText = () => {
  return (
    <section className='bottom_center_text section-space about_bottom'>
    <div className="container">
        <div className="center_bottom_wrapper">
         <h2 className="sec-title text-anim text-center font48">Let’s Create Efficient, Sustainable Spaces Together. </h2>
         <div className="bottom_center_desc">
         
            <p className='font18 text-center'>Contact us to start your project with innovative solutions.</p>
                     	<div
							className="service-btn-area text-center wow fadeInUp"
							data-wow-delay=".3s"
						>
							<ButtonPrimary text={"Our Projects"} url={"/services"} />
						</div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutBottomText