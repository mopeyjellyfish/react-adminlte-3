import React, { PureComponent } from 'react'
import { NavItem } from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

export class AsideToggle extends PureComponent {
  render() {
    return (
      <NavItem>
        <span
          className='nav-link'
          data-widget='control-sidebar'
          data-slide='true'
          role='button'
        >
          <FontAwesomeIcon icon={faThLarge} />
        </span>
      </NavItem>
    )
  }
}

export default { AsideToggle }
