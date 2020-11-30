
import React from 'react';



const Hero = () => {
  return (
    <section className="hr-hero">
      <div className="hr-hero-wrapper row">
        <div className="hero-left col-md-6">
          <h1 className="white hero-title">Hey I'm Hrishikesh. Experienced full stack developer</h1>
          <h2 className="white hero-subtitle">Check my portfolio</h2>
          <div className="button-container">
            <a href="" className="btn btn-main bg-blue ttu">See my work</a>
          </div>
        </div>
        <div className="hero-right col-md-6">
          <div className="hero-image-container">
            <a className="grow hero-link">
              <img
                className="hero-image"
                src="/images/portfolioPic.jpg"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Hero;
