import React from 'react'

const BlogHeader = () => {
  return (
    <div>
        	   <header className="rt-hero-career ">
      {/* Background image */}
      <img
        className="rt-hero__b"
        src="https://theskepper.com/000_Skepper_test/real/career_header.jpg"
        alt="Career image"
      />
      
      {/* Existing Gradient Shade */}
      <div className="rt-hero__shade" />


      <div className="container">
        <div className="top_bar">
          {/* Content (z-index 2 in CSS, so it stays bright/visible longer) */}
          <div className="rt-hero__content">
            <span className="hvacHero__pill font12">Inisghts</span>
 
            <h1 className="rt-hero__title font72 sec-title text-anim">
            Stories Behind the
              <br />
              Structures
            </h1>

            <p className="rt-hero__desc font18 desc wow fadeInUp" data-wow-delay="0.3s">
             Insights from real projects, real constraints,<br /> and real outcomes.
            </p>

          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default BlogHeader