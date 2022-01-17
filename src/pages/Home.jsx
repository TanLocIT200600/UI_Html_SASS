import React, { Fragment } from 'react'
import AboutUs from '../components/AboutUs'
import SlickCarousel from '../components/SlickCarousel'

const Home = () => {
  return (
    <Fragment>
      <SlickCarousel />
      <AboutUs />
    </Fragment>
  )
}

export default Home
