import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const PHEBottomText = () => {
    return (
        <section className='bottom_center_text section-space grey_bg_section electrical_bottom'>
            <div class="container">
                <div className="center_bottom_wrapper">
                    <h2 className="sec-title text-anim text-center font48">Let’s Build Systems That Care. </h2>
                    <div className="bottom_center_desc">

                        <p className='font18 text-center'>Let’s engineer water systems that nourish life, ensure hygiene, and<br/> respect the environment - drop by drop, system by system.</p>
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

export default PHEBottomText
