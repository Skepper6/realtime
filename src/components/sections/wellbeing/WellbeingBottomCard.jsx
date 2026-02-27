import React from 'react'
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const WellbeingBottomCard = () => {
    return (
        <section className='bottom_center_text wellbeing_bottom section-space bg-white design_bottom_text'>
            <div className="container">
                <div className="center_bottom_wrapper">
                    <h2 className="sec-title text-anim text-center font48">What If Buildings Felt Better to Be In?</h2>
                    <div className="bottom_center_desc">

                        <p className='font18 text-center'>At Realtime Infra, we don’t just maintain environments — we<br /> cultivate experiences. together.</p>
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

export default WellbeingBottomCard
