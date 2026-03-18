import React from 'react'

const HVACTestimonial = () => {
  return (
    <>


     <div className="phe_testimonial pb-5">
      <div className="container">
        
        {/* Quote Icon */}
        <div className="quote-icon">
          <img src="https://skepper.in/000_Skepper_test/real/quote.png" />
        </div>

        {/* Main Quote Text with exact line break matching the image */}
        <p className="text">
          “Realtime’s HVAC team delivered a seamless execution from design through commissioning. <br/>Their structured approach improved airflow efficiency, reduced energy consumption, and enhanced overall system reliability. What stood out most was their proactive coordination and technical depth, every detail was handled with precision, ensuring uninterrupted comfort across our facility.”
        </p>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Author details */}
        <p className="author">
          Facility Head, Commercial Development
        </p>

      </div>
    </div>
    </>
  )
}

export default HVACTestimonial