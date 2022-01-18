import React, { Fragment } from 'react'
import AboutUs from '../components/AboutUs'
import Blog from '../components/Blog'
import CheckList from '../components/CheckList'
import Partner from '../components/Partner'
import SlickCarousel from '../components/SlickCarousel'

const Home = () => {
  return (
    <Fragment>
      <SlickCarousel />
      <AboutUs />
      <CheckList />
      <Blog />
      <Partner />
    </Fragment>
  )
}

export default Home
