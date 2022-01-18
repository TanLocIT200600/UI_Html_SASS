import React from 'react'
import Kenya from '../assets/images/kenya.png';
import Nairobi from '../assets/images/nairobi.jpg';
import IBM from '../assets/images/IBM.png';
import Moringa from '../assets/images/moringa.png';

const Partner = () => {
  return (
    <div className="out-partner">
      <div className="out-partner__body">
        <h4 className="out-partner__body__title">Our Partners</h4>
        <div className="out-partner__body__branch">
          <img src={Kenya} alt="" className="img-kenya" with="170" height="70" />
          <img src={Nairobi} alt="" className="img-nairobi" with="175" height="80" />
          <img src={IBM} alt="" className="img-ibm" with="100" height="40" />
          <img src={Moringa} alt="" className="img-moringa" with="170" height="120" />
        </div>
      </div>
    </div>
  )
}

export default Partner
