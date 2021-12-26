import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class NavItem extends PureComponent {
  render() {
    const { children } = this.props
    return <li className='nav-item'>{children}</li>
  }
}
NavItem.propTypes = {
  children: PropTypes.node
}

NavItem.defaultProps = {
  children: null
}

export default { NavItem }
