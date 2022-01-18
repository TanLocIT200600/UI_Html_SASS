import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__list">
        <div className="footer__list__item">
          <h4>Address</h4>
          <span>Bishop Road First Ngong
            Ave, Nairobi, Kenya</span>
        </div>
        <div className="footer__list__item">
          <h4>Contact</h4>
          <p>Email: info@lawyershub.ke</p>
          <p>Phone: +254 784 840 228</p>
        </div>
        <div className="footer__list__item">
          <h4>Newsletter</h4>
          <p>Stay updated by subscribing to our newsletter</p>
          <input type="email" placeholder="your.address@email.com" />
          <button>subscribe</button>
        </div>
        <div className="footer__list__item">
          <h4>Follow us</h4>
          <div className="footer__list__item__listicon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
