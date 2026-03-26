import React from 'react';

const BuildingMaintenanceTestimonial = () => {
  return (
   <div className="phe_testimonial">
      <div className="container">
        
        {/* Quote Icon */}
        <div className="quote-icon">
          <img src="https://skepper.in/000_Skepper_test/real/quote.png" />
        </div>

        {/* Main Quote Text with exact line break matching the image */}
        <p className="text">
          The integrated Building Management System has significantly improved <br/> our operational efficiency, with real-time monitoring ensuring consistent <br/> performance and minimal downtime.
        </p>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Author details */}
        <p className="author">
         Facilities Head, Bangalore
        </p>

      </div>
    </div>
  );
};

export default BuildingMaintenanceTestimonial;