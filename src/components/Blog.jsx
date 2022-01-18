import React from 'react'
import Straight from '../assets/images/straight.png';

const Blog = () => {
  return (
    <div className="blogList">
      <h4 className="blogList__title">
        LATEST BLOGS
      </h4>
      <p className="blogList__content">
        You can rely on our stunning team for the latest in the LawTech blogs and taking time to peruse will be great experience for you without a doubt
      </p>
      <div className="blogList__colList">
        <div className="blogList__colList__colItem">
          <div className="blogList__colList__colItem__img img1"></div>
          <div className="blogList__colList__colItem__content">
            <span>23 June 2020</span>
            <h4>KENYA’S CHIEF JUSTICE ISSUES ...</h4>
            <p>PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT...</p>
            <button>read more</button>
          </div>
        </div>
        <div className="blogList__colList__colItem">
          <div className="blogList__colList__colItem__img img2"></div>
          <div className="blogList__colList__colItem__content">
            <span>23 June 2020</span>
            <h4>KENYA’S CHIEF JUSTICE ISSUES ...</h4>
            <p>PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT...</p>
            <button>read more</button>
          </div>
        </div>
        <div className="blogList__colList__colItem">
          <div className="blogList__colList__colItem__img img3"></div>
          <div className="blogList__colList__colItem__content">
            <span>23 June 2020</span>
            <h4>KENYA’S CHIEF JUSTICE ISSUES ...</h4>
            <p>PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT...</p>
            <button>read more</button>
          </div>
        </div>
      </div>
      <img src={Straight} alt="" className="blogList__img" />
    </div>
  )
}

export default Blog
