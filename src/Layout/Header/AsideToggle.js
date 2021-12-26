import React, { PureComponent } from 'react'
import { NavItem } from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

export class AsideToggle extends PureComponent {
  render() {
    return (
      <NavItem>
        <a
          className='nav-link'
          data-widget='control-sidebar'
          data-slide='true'
          href='#'
          role='button'
        >
          <FontAwesomeIcon icon={faThLarge} />
        </a>
      </NavItem>
    )
  }
}

export default { AsideToggle }
