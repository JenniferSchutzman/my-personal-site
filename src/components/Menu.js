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
          <Link onClick={props.onToggleMenu} to="/aboutMe">
            About Me Now
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/formerLife">
            Former Life
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/mycode">
            My Code
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/womenDevs">
            Tech Community
          </Link>
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
