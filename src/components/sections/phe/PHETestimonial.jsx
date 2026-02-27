import React from 'react';

const PHETestimonial = () => {
  return (
   <div className="phe_testimonial">
      <div className="container">
        
        {/* Quote Icon */}
        <div className="quote-icon">
          <img src="https://theskepper.com/000_Skepper_test/real/quote.png" />
        </div>

        {/* Main Quote Text with exact line break matching the image */}
        <p className="text">
          Their water treatment systems significantly improved hygiene<br />
          standards while reducing maintenance issues.”
        </p>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Author details */}
        <p className="author">
          Operations Head, Healthcare Centre, Chennai
        </p>

      </div>
    </div>
  );
};

export default PHETestimonial;