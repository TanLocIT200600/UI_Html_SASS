import React from 'react'
import Slider from 'react-slick';

const SlickCarousel = () => {

  const settings = {
    dot: false,
    isfinite: false,
    speed: 500,
    slideToShow: 1,
    slidetoScroll: 1
  }

  return (
    <Slider {...settings}>
      <div className="slick-slider">
        <button className="slick-slider__left-arrow"><i class="fas fa-chevron-left"></i></button>
        <div className="slick-slider__content">
          <h3>LAWYERS HUB</h3>
          <h5>A NEXUS BETWEEN LAW AND TECH</h5>
          <p>We are a Community of Lawyers in Africa promoting Access to Justice through Innovation and Technology.</p>
          <button>meet our team</button>
        </div>
        <button className="slick-slider__right-arrow"><i class="fas fa-chevron-right"></i></button>
      </div>
    </Slider>
  )
}

export default SlickCarousel
