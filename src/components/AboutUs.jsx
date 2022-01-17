import React from 'react'
import Business from '../assets/images/business.jpg'

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__list">
        <div className="about__list-membership">
          <i class="fas fa-award"></i>
          <h5>Membership</h5>
          <p>Join our community of Lawyers engaged in the tech and entrepreneurship space and enjoy LawyersHub member benefits.</p>
          <button>more details</button>
        </div>
        <div className="about__list-working">
          <i class="fas fa-warehouse"></i>
          <h5>Co-Working Space</h5>
          <p>Set in Upperhill with close proximity to the Milimani Law Courts, our co-working space offers the ideal space to work & collaborate either daily, weekly or monthly.</p>
          <button>more details</button>
        </div>
      </div>

      <div className="about-us">
        <div className="about-us__left">
          <h5 className="about-us__left__title">ABOUT US</h5>
          <p className="about-us__left__content">The Lawyers Hub exists to provide a nexus between Law and Technology and uses technology as a leverage and improve access to justice and the business of law.</p>
          <p className="about-us__left__content">Community of Lawyers in Africa promoting Access to Justice through Innovation and Technology.</p>
          <h4 className="about-us__left__signature">Linda Bonyo</h4>
          <p className="about-us__left__branch">Founder of the Lawyers Hub</p>
        </div>
        <div className="about-us__right">
          <img src={Business} alt="people" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
