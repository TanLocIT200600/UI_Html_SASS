import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/images.png'


const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Team",
    path: "/"
  },
  {
    display: "Blog",
    path: "/"
  },
  {
    display: "Membership",
    path: "/"
  },
  {
    display: "Events",
    path: "/"
  },
  {
    display: "Space",
    path: "/"
  },
  {
    display: "Resources",
    path: "/"
  },
  {
    display: "Careers",
    path: "/"
  },
  {
    display: "Contacts",
    path: "/"
  }
]


const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex(e => e.path === pathname);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className="container">
      <div className="header" ref={headerRef}>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          {
            mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item ${index === activeNav ? 'active' : ''}`}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Header
