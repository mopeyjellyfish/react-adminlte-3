import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavItem } from './NavItem'

export class NavLink extends PureComponent {
  render() {
    const { children, href } = this.props
    return (
      <NavItem>
        <a href={href} className='nav-link'>
          {children}
        </a>
      </NavItem>
    )
  }
}
NavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

NavLink.defaultProps = {
  children: null,
  href: ''
}

export default { NavLink }
