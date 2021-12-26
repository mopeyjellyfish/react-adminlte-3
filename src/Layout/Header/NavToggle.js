import React, { PureComponent } from 'react'
import { NavItem } from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export class NavToggle extends PureComponent {
  render() {
    return (
      <NavItem>
        <a className='nav-link' data-widget='pushmenu' href='#' role='button'>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </NavItem>
    )
  }
}

export default { NavToggle }
