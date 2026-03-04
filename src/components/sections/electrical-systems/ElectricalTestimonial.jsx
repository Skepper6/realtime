import React from 'react';

const ElectricalTestimonial = () => {
  return (
   <div className="phe_testimonial">
      <div className="container">
        
        {/* Quote Icon */}
        <div className="quote-icon">
          <img src="https://theskepper.com/000_Skepper_test/real/quote.png" />
        </div>

        {/* Main Quote Text with exact line break matching the image */}
        <p className="text">
        “Realtime’s electrical expertise has significantly strengthened the reliability of our infrastructure. <br/>Their team demonstrated exceptional technical depth, proactive planning, and seamless execution. <br/>From system design to commissioning, every phase was handled with precision and transparency.<br/> The result has been improved stability, optimized energy performance, and complete confidence <br/>in our power systems.” 

        </p>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Author details */}
        <p className="author">
         Operations Head, Commercial Facility 
        </p>

      </div>
    </div>
  );
};

export default ElectricalTestimonial;