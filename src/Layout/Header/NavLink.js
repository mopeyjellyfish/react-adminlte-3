import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavItem } from './NavItem'

export class NavLink extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <NavItem>
        <span className='nav-link'>{children}</span>
      </NavItem>
    )
  }
}
NavLink.propTypes = {
  children: PropTypes.node
}

NavLink.defaultProps = {
  children: null
}

export default { NavLink }
