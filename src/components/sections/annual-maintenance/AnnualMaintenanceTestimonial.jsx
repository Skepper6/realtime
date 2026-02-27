import React from 'react';

const AnnualMaintenanceTestimonial = () => {
  return (
   <div className="phe_testimonial">
      <div className="container">
        
        {/* Quote Icon */}
        <div className="quote-icon">
          <img src="https://theskepper.com/000_Skepper_test/real/quote.png" />
        </div>

        {/* Main Quote Text with exact line break matching the image */}
        <p className="text">
          Their preventive care program has kept our systems running flawlessly<br />
          for over two years — without a single unscheduled downtime.
        </p>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Author details */}
        <p className="author">
          Facilities Head, Corporate Park, Hyderabad
        </p>

      </div>
    </div>
  );
};

export default AnnualMaintenanceTestimonial;