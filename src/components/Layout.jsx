import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Routes from '../routes/Routes'

export const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div className="layout">
          <Header {...props} />
          <div className="container">
            <div className="main">
              <Routes />
            </div>
          </div>
          <Footer />
        </div>
      )} />
    </BrowserRouter>
  )
}
