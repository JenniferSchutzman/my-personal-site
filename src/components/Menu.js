import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Software Experience
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            CHS Women Devs
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Charleston Women in Tech Mentoring Program 2019 - 2020
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="/#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="/#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
